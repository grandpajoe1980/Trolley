import { catalog, getOutcome } from '../content/catalog';
import type { ChoiceId } from '../content/types';
import type {
  CompletionRecord,
  SaveCheckpoint,
  SaveV1,
  SettingsV1,
  StorageAdapter
} from './types';

export const SAVE_KEY = 'trolley.save.v1';
export const SETTINGS_KEY = 'trolley.settings.v1';
export const QUARANTINE_KEY = 'trolley.save.quarantine';

export function generateUUID(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Local collision-resistant fallback
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export class MemoryStorageAdapter implements StorageAdapter {
  private store: Map<string, string> = new Map();

  getItem(key: string): string | null {
    return this.store.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }
}

export function getDefaultStorageAdapter(): { adapter: StorageAdapter; isMemoryOnly: boolean } {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { adapter: new MemoryStorageAdapter(), isMemoryOnly: true };
  }
  try {
    const testKey = '__trolley_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return { adapter: window.localStorage, isMemoryOnly: false };
  } catch {
    return { adapter: new MemoryStorageAdapter(), isMemoryOnly: true };
  }
}

export function createInitialSave(campaignId = generateUUID()): SaveV1 {
  return {
    schemaVersion: 1,
    catalogVersion: '1.0.0',
    campaignId,
    revision: 0,
    updatedAt: new Date().toISOString(),
    completions: [],
    checkpoint: null
  };
}

export function getDefaultSettings(): SettingsV1 {
  let prefersReducedMotion = false;
  let prefersHighContrast = false;

  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    prefersHighContrast = window.matchMedia('(forced-colors: active)').matches;
  }

  return {
    timingMode: 'standard',
    reducedMotion: prefersReducedMotion,
    highContrast: prefersHighContrast,
    sound: false,
    saveEnabled: true
  };
}

export function validateSaveData(data: unknown): { valid: boolean; error?: string; save?: SaveV1 } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Save data is not an object' };
  }

  const s = data as Partial<SaveV1>;

  if (s.schemaVersion !== 1) {
    return { valid: false, error: `Incompatible schemaVersion: ${s.schemaVersion}` };
  }

  if (s.catalogVersion !== '1.0.0') {
    return { valid: false, error: `Incompatible catalogVersion: ${s.catalogVersion}` };
  }

  if (typeof s.campaignId !== 'string' || !s.campaignId) {
    return { valid: false, error: 'Missing or invalid campaignId' };
  }

  if (typeof s.revision !== 'number' || s.revision < 0 || !Number.isInteger(s.revision)) {
    return { valid: false, error: 'Invalid revision number' };
  }

  if (typeof s.updatedAt !== 'string') {
    return { valid: false, error: 'Missing updatedAt timestamp' };
  }

  if (!Array.isArray(s.completions)) {
    return { valid: false, error: 'Completions must be an array' };
  }

  // Verify contiguous completions: 1..N
  for (let i = 0; i < s.completions.length; i++) {
    const comp = s.completions[i] as CompletionRecord;
    const expectedLevelId = i + 1;
    if (comp.levelId !== expectedLevelId) {
      return { valid: false, error: `Non-contiguous completion at index ${i}: expected level ${expectedLevelId}, got ${comp.levelId}` };
    }

    const outcome = getOutcome(comp.levelId, comp.choiceId as ChoiceId);
    if (!outcome || outcome.id !== comp.outcomeId) {
      return { valid: false, error: `Unknown or tampered outcomeId: ${comp.outcomeId}` };
    }
  }

  // Verify checkpoint if present
  if (s.checkpoint !== null && s.checkpoint !== undefined) {
    const cp = s.checkpoint as SaveCheckpoint;
    if (typeof cp.levelId !== 'number' || cp.levelId < 1 || cp.levelId > 200) {
      return { valid: false, error: 'Invalid checkpoint levelId' };
    }

    if (cp.mode === 'campaign') {
      const nextLevel = s.completions.length + 1;
      if (cp.levelId !== nextLevel) {
        return { valid: false, error: `Campaign checkpoint levelId ${cp.levelId} does not match next unlocked level ${nextLevel}` };
      }
    } else if (cp.mode === 'practice') {
      // Practice mode is intentionally available for every catalog level,
      // including future campaign levels selected from the library.
    } else {
      return { valid: false, error: `Invalid checkpoint mode: ${cp.mode}` };
    }
  }

  return { valid: true, save: data as SaveV1 };
}

export class SaveManager {
  private adapter: StorageAdapter;
  public isMemoryOnly: boolean;
  private currentSave: SaveV1;
  private currentSettings: SettingsV1;

  constructor(adapter?: StorageAdapter, isMemoryOnly = false) {
    if (adapter) {
      this.adapter = adapter;
      this.isMemoryOnly = isMemoryOnly;
    } else {
      const detected = getDefaultStorageAdapter();
      this.adapter = detected.adapter;
      this.isMemoryOnly = detected.isMemoryOnly;
    }
    this.currentSettings = this.loadSettings();
    this.currentSave = this.loadOrInitSave();
  }

  public getSave(): SaveV1 {
    return this.currentSave;
  }

  public getSettings(): SettingsV1 {
    return this.currentSettings;
  }

  public loadSettings(): SettingsV1 {
    try {
      const raw = this.adapter.getItem(SETTINGS_KEY);
      if (!raw) return getDefaultSettings();
      const parsed = JSON.parse(raw) as Partial<SettingsV1>;
      return {
        timingMode: parsed.timingMode ?? 'standard',
        reducedMotion: parsed.reducedMotion ?? false,
        highContrast: parsed.highContrast ?? false,
        sound: parsed.sound ?? false,
        saveEnabled: parsed.saveEnabled ?? true
      };
    } catch {
      return getDefaultSettings();
    }
  }

  public updateSettings(updates: Partial<SettingsV1>): SettingsV1 {
    this.currentSettings = { ...this.currentSettings, ...updates };
    try {
      this.adapter.setItem(SETTINGS_KEY, JSON.stringify(this.currentSettings));
    } catch {
      // Storage unavailable; continues in memory
    }
    return this.currentSettings;
  }

  public loadSave(): { save: SaveV1 | null; isCorrupt: boolean; rawText: string | null; error?: string } {
    try {
      const raw = this.adapter.getItem(SAVE_KEY);
      if (!raw) {
        return { save: null, isCorrupt: false, rawText: null };
      }
      let parsed: unknown;
      try {
        parsed = JSON.parse(raw);
      } catch (err) {
        return { save: null, isCorrupt: true, rawText: raw, error: `JSON Parse error: ${(err as Error).message}` };
      }

      const result = validateSaveData(parsed);
      if (!result.valid || !result.save) {
        return { save: null, isCorrupt: true, rawText: raw, error: result.error };
      }

      return { save: result.save, isCorrupt: false, rawText: raw };
    } catch (err) {
      return { save: null, isCorrupt: true, rawText: null, error: (err as Error).message };
    }
  }

  private loadOrInitSave(): SaveV1 {
    const loaded = this.loadSave();
    if (loaded.save) {
      return loaded.save;
    }
    if (loaded.isCorrupt) {
      // Do not overwrite corrupt save in storage! Return in-memory initial save
      return createInitialSave();
    }
    const initial = createInitialSave();
    this.persistSave(initial);
    return initial;
  }

  public persistSave(save: SaveV1): boolean {
    this.currentSave = save;
    if (!this.currentSettings.saveEnabled) {
      // User turned off local saving; keep only in memory
      return true;
    }
    try {
      this.adapter.setItem(SAVE_KEY, JSON.stringify(save));
      return true;
    } catch (err) {
      console.warn('Storage write failed, using in-memory mode:', err);
      this.isMemoryOnly = true;
      return false;
    }
  }

  public recordCompletion(
    levelId: number,
    choiceId: ChoiceId,
    outcomeId: string,
    sessionId: string
  ): { saved: boolean; isFirstCompletion: boolean } {
    const completions = [...this.currentSave.completions];

    // Check if already completed
    const existing = completions.find((c) => c.levelId === levelId);
    if (existing) {
      // Practice replay! Never overwrites campaign outcome
      return { saved: true, isFirstCompletion: false };
    }

    if (levelId !== completions.length + 1) {
      console.warn(`Cannot record non-contiguous completion for level ${levelId}`);
      return { saved: false, isFirstCompletion: false };
    }

    const record: CompletionRecord = {
      levelId,
      choiceId,
      outcomeId,
      catalogVersion: catalog.catalogVersion,
      sessionId,
      committedAt: new Date().toISOString()
    };

    completions.push(record);

    const nextSave: SaveV1 = {
      ...this.currentSave,
      revision: this.currentSave.revision + 1,
      updatedAt: new Date().toISOString(),
      completions,
      checkpoint: null // Clear checkpoint upon completion
    };

    const success = this.persistSave(nextSave);
    return { saved: success, isFirstCompletion: true };
  }

  public saveCheckpoint(checkpoint: SaveCheckpoint | null): boolean {
    const nextSave: SaveV1 = {
      ...this.currentSave,
      revision: this.currentSave.revision + 1,
      updatedAt: new Date().toISOString(),
      checkpoint
    };
    return this.persistSave(nextSave);
  }

  public resetSave(): SaveV1 {
    const fresh = createInitialSave();
    this.persistSave(fresh);
    return fresh;
  }

  public quarantineCorruptSave(rawText: string): boolean {
    try {
      this.adapter.setItem(QUARANTINE_KEY, rawText);
      return true;
    } catch {
      return false;
    }
  }

  public getNextUnlockedLevel(): number {
    return Math.min(200, this.currentSave.completions.length + 1);
  }

  public isLevelUnlocked(levelId: number): boolean {
    return levelId <= this.getNextUnlockedLevel();
  }
}
