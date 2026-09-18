export interface TabLockStatus {
  isOwner: boolean;
  lockType: 'web-locks' | 'broadcast-channel' | 'single-session';
}

export type LockLostCallback = () => void;
export type StorageConflictCallback = (newRevision: number) => void;

export class TabCoordinator {
  private isOwner = true;
  private channel: BroadcastChannel | null = null;
  private lockLostCallback: LockLostCallback | null = null;
  private storageConflictCallback: StorageConflictCallback | null = null;
  private tabId: string = Math.random().toString(36).substring(2);
  private lastKnownRevision = 0;

  constructor(
    lastKnownRevision = 0,
    onLockLost?: LockLostCallback,
    onStorageConflict?: StorageConflictCallback
  ) {
    this.lastKnownRevision = lastKnownRevision;
    this.lockLostCallback = onLockLost ?? null;
    this.storageConflictCallback = onStorageConflict ?? null;
    this.init();
  }

  private init(): void {
    if (typeof window === 'undefined') {
      this.isOwner = true;
      return;
    }

    // 1. Storage events listener
    window.addEventListener('storage', (e: StorageEvent) => {
      if (e.key === 'trolley.save.v1' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (typeof parsed.revision === 'number' && parsed.revision > this.lastKnownRevision) {
            this.lastKnownRevision = parsed.revision;
            if (this.storageConflictCallback) {
              this.storageConflictCallback(parsed.revision);
            }
          }
        } catch {
          // ignore
        }
      }
    });

    // 2. BroadcastChannel coordination
    // Only initialize if BroadcastChannel is supported and window is defined
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        this.channel = new BroadcastChannel('trolley_tab_coordination');
        this.channel.onmessage = (msg) => {
          if (msg.data?.type === 'CLAIM_WRITER' && msg.data?.tabId !== this.tabId) {
            if (this.isOwner) {
              this.channel?.postMessage({ type: 'WRITER_EXISTS', tabId: this.tabId });
            }
          } else if (msg.data?.type === 'WRITER_EXISTS' && msg.data?.tabId !== this.tabId) {
            this.isOwner = false;
            if (this.lockLostCallback) {
              this.lockLostCallback();
            }
          }
        };

        this.channel.postMessage({ type: 'CLAIM_WRITER', tabId: this.tabId });
      } catch {
        this.isOwner = true;
      }
    }

    // 3. Web Locks API if supported and navigator.locks is an object
    if (
      typeof navigator !== 'undefined' &&
      navigator.locks &&
      typeof navigator.locks.request === 'function'
    ) {
      navigator.locks
        .request('trolley_campaign_writer', { ifAvailable: true }, async (lock) => {
          if (!lock) {
            this.isOwner = false;
            if (this.lockLostCallback) {
              this.lockLostCallback();
            }
            return;
          }
          this.isOwner = true;
          return new Promise<void>((resolve) => {
            if (typeof window !== 'undefined') {
              window.addEventListener('beforeunload', () => resolve());
            }
          });
        })
        .catch(() => {
          // Web Locks failed; fall back
        });
    }
  }

  public getIsOwner(): boolean {
    return this.isOwner;
  }

  public updateRevision(revision: number): void {
    this.lastKnownRevision = revision;
  }

  public dispose(): void {
    if (this.channel) {
      this.channel.close();
      this.channel = null;
    }
  }
}
