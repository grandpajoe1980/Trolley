export interface TabLockStatus {
  isOwner: boolean;
  lockType: 'web-locks' | 'broadcast-channel' | 'single-session';
}

export type LockLostCallback = () => void;
export type StorageConflictCallback = (newRevision: number) => void;

export class TabCoordinator {
  private isOwner = false;
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

    // 1. Listen for storage events (another tab changed trolley.save.v1)
    window.addEventListener('storage', (e: StorageEvent) => {
      if (e.key === 'trolley.save.v1' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (parsed.revision && parsed.revision > this.lastKnownRevision) {
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

    // 2. BroadcastChannel coordination fallback
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        this.channel = new BroadcastChannel('trolley_tab_coordination');
        this.channel.onmessage = (msg) => {
          if (msg.data?.type === 'CLAIM_WRITER' && msg.data?.tabId !== this.tabId) {
            if (this.isOwner) {
              // Respond that we already hold the lock
              this.channel?.postMessage({ type: 'WRITER_EXISTS', tabId: this.tabId });
            }
          } else if (msg.data?.type === 'WRITER_EXISTS' && msg.data?.tabId !== this.tabId) {
            // Another tab is writer!
            this.isOwner = false;
            if (this.lockLostCallback) {
              this.lockLostCallback();
            }
          }
        };

        // Announce claim
        this.channel.postMessage({ type: 'CLAIM_WRITER', tabId: this.tabId });
        this.isOwner = true;
      } catch {
        this.isOwner = true;
      }
    } else {
      this.isOwner = true;
    }

    // 3. Web Locks API if supported
    if (typeof navigator !== 'undefined' && 'locks' in navigator) {
      navigator.locks
        .request('trolley_campaign_writer', { ifAvailable: true }, async (lock) => {
          if (!lock) {
            // Lock was not available; another tab is the writer
            this.isOwner = false;
            if (this.lockLostCallback) {
              this.lockLostCallback();
            }
            return;
          }
          this.isOwner = true;
          // Hold the lock until page unloads
          return new Promise<void>((resolve) => {
            window.addEventListener('beforeunload', () => resolve());
          });
        })
        .catch(() => {
          // Web Locks failed; fall back to channel
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
