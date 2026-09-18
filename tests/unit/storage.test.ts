import { describe, expect, it } from 'vitest';
import {
  createInitialSave,
  MemoryStorageAdapter,
  SAVE_KEY,
  SaveManager,
  validateSaveData
} from '../../src/storage/save';
import type { StorageAdapter } from '../../src/storage/types';

describe('Storage, Persistence, and Recovery Contract', () => {
  it('creates valid initial save schema', () => {
    const initial = createInitialSave();
    const result = validateSaveData(initial);
    expect(result.valid).toBe(true);
    expect(result.save?.schemaVersion).toBe(1);
    expect(result.save?.catalogVersion).toBe('1.0.0');
    expect(result.save?.completions).toEqual([]);
    expect(result.save?.checkpoint).toBeNull();
  });

  it('records first completion and ensures idempotency on replay', () => {
    const adapter = new MemoryStorageAdapter();
    const mgr = new SaveManager(adapter);

    expect(mgr.getNextUnlockedLevel()).toBe(1);

    // Record level 1 completion with choice B
    const firstRes = mgr.recordCompletion(1, 'B', 'L001-B', 'sess-1');
    expect(firstRes.saved).toBe(true);
    expect(firstRes.isFirstCompletion).toBe(true);
    expect(mgr.getNextUnlockedLevel()).toBe(2);
    expect(mgr.getSave().completions.length).toBe(1);
    expect(mgr.getSave().completions[0]?.choiceId).toBe('B');

    // Attempt replay / duplicate commit on level 1 with choice A
    const replayRes = mgr.recordCompletion(1, 'A', 'L001-A', 'sess-replay');
    expect(replayRes.saved).toBe(true);
    expect(replayRes.isFirstCompletion).toBe(false); // must not count as first completion
    expect(mgr.getSave().completions.length).toBe(1); // Length must remain 1!
    expect(mgr.getSave().completions[0]?.choiceId).toBe('B'); // Must NOT overwrite original choice B!
  });

  it('prevents non-contiguous completion', () => {
    const adapter = new MemoryStorageAdapter();
    const mgr = new SaveManager(adapter);

    // Attempt to complete level 5 when level 1 has not been completed
    const res = mgr.recordCompletion(5, 'A', 'L005-A', 'sess-skip');
    expect(res.saved).toBe(false);
    expect(mgr.getSave().completions.length).toBe(0);
  });

  it('detects corrupt JSON and invalid save schemas without crashing', () => {
    const adapter = new MemoryStorageAdapter();
    adapter.setItem(SAVE_KEY, '{"corrupted": true}');

    const mgr = new SaveManager(adapter);
    const loaded = mgr.loadSave();
    expect(loaded.isCorrupt).toBe(true);
    expect(loaded.error).toBeDefined();
    expect(loaded.rawText).toBe('{"corrupted": true}');

    // Quarantine save
    const quarantined = mgr.quarantineCorruptSave(loaded.rawText!);
    expect(quarantined).toBe(true);
  });

  it('gracefully falls back to in-memory mode when storage throws on setItem', () => {
    const throwingAdapter: StorageAdapter = {
      getItem: () => null,
      setItem: () => {
        throw new Error('QuotaExceededError or Storage Denied');
      },
      removeItem: () => {}
    };

    const mgr = new SaveManager(throwingAdapter, false);
    const res = mgr.recordCompletion(1, 'A', 'L001-A', 'sess-throw');
    // Save operation failed to persist to disk, but in-memory state updated
    expect(res.saved).toBe(false);
    expect(mgr.isMemoryOnly).toBe(true);
    expect(mgr.getNextUnlockedLevel()).toBe(2);
  });

  it('resets save cleanly with fresh campaignId and level 1 unlock', () => {
    const adapter = new MemoryStorageAdapter();
    const mgr = new SaveManager(adapter);
    mgr.recordCompletion(1, 'A', 'L001-A', 'sess-1');
    const oldCampaignId = mgr.getSave().campaignId;

    const fresh = mgr.resetSave();
    expect(fresh.completions.length).toBe(0);
    expect(fresh.campaignId).not.toBe(oldCampaignId);
    expect(mgr.getNextUnlockedLevel()).toBe(1);
  });

  it('persists and clears checkpoints accurately', () => {
    const adapter = new MemoryStorageAdapter();
    const mgr = new SaveManager(adapter);

    mgr.saveCheckpoint({
      levelId: 1,
      mode: 'campaign',
      sessionId: 'sess-cp',
      phase: 'paused',
      selectedChoiceId: 'B',
      selectionOrigin: 'player',
      timingMode: 'standard',
      activeElapsedMs: 15000,
      committedOutcomeId: null
    });

    expect(mgr.getSave().checkpoint?.levelId).toBe(1);
    expect(mgr.getSave().checkpoint?.activeElapsedMs).toBe(15000);

    // Recording completion clears checkpoint
    mgr.recordCompletion(1, 'B', 'L001-B', 'sess-cp');
    expect(mgr.getSave().checkpoint).toBeNull();
  });
});
