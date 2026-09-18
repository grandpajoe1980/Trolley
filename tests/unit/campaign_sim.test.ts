import { describe, expect, it } from 'vitest';
import { catalog, getOutcome } from '../../src/content/catalog';
import { TestClock } from '../../src/engine/clock';
import { computeCampaignMetrics } from '../../src/engine/scoring';
import { SessionManager } from '../../src/engine/session';
import { MemoryStorageAdapter, SaveManager } from '../../src/storage/save';

describe('Complete 200-Level Campaign Simulation and Clock Fidelity', () => {
  it('frame rates (30Hz, 60Hz, 144Hz) produce identical choice, count, and score outcomes', () => {
    const lvl = catalog.levels[0]!;
    const frameIntervals = [1000 / 30, 1000 / 60, 1000 / 144]; // 33.3ms, 16.6ms, 6.94ms

    for (const dt of frameIntervals) {
      const clock = new TestClock(0);
      const session = new SessionManager(clock);
      session.startLevel(lvl, 'campaign', 'standard', 'sess-fps', 'camp-fps');

      // Player selects B at 10,000ms
      while (clock.now() < 10000) {
        clock.advance(dt);
        session.tick();
      }
      session.selectChoice('B');

      // Run until 30,000ms deadline
      while (clock.now() < 30000) {
        clock.advance(dt);
        session.tick();
      }
      session.tick(); // at 30,000ms deadline

      expect(session.getState().session?.committed?.choiceId).toBe('B');
      expect(session.getState().session?.committed?.selectionOrigin).toBe('player');
      expect(session.getState().session?.committed?.outcome.rawDeaths).toBe(0);
    }
  });

  it('runs automated fast-clock campaign through all 200 levels to final summary with 200 completions', () => {
    const adapter = new MemoryStorageAdapter();
    const saveManager = new SaveManager(adapter);

    for (let levelId = 1; levelId <= 200; levelId++) {
      const lvl = catalog.levels[levelId - 1]!;
      expect(saveManager.getNextUnlockedLevel()).toBe(levelId);

      const clock = new TestClock(0);
      const session = new SessionManager(clock);
      const sessionId = `sim-sess-${levelId}`;

      session.startLevel(lvl, 'campaign', 'standard', sessionId, saveManager.getSave().campaignId);

      // In odd levels, pick choice A default; in even levels, pick choice B
      if (levelId % 2 === 0) {
        clock.advance(5000);
        session.selectChoice('B');
      }

      // Fast-forward to deadline and resolve
      clock.advance(30000);
      session.tick();

      const committed = session.getState().session?.committed;
      expect(committed).toBeDefined();

      // Record in save manager
      const recordRes = saveManager.recordCompletion(
        levelId,
        committed!.choiceId,
        committed!.outcomeId,
        sessionId
      );
      expect(recordRes.saved).toBe(true);
      expect(recordRes.isFirstCompletion).toBe(true);
    }

    const save = saveManager.getSave();
    expect(save.completions.length).toBe(200);
    expect(saveManager.getNextUnlockedLevel()).toBe(200);

    // Compute final summary
    const allOutcomes = save.completions.map((c) => getOutcome(c.levelId, c.choiceId)!);
    const finalMetrics = computeCampaignMetrics(allOutcomes);

    expect(finalMetrics.completedCount).toBe(200);
    expect(finalMetrics.campaignScore).toBeGreaterThan(0);
    expect(finalMetrics.campaignScore).toBeLessThanOrEqual(100);
    expect(finalMetrics.displayScore).toMatch(/^\d+\.\d$/);
    expect(finalMetrics.lensSummaries.consequences.count).toBe(200);
    expect(finalMetrics.lensSummaries.rightsDuties.count).toBe(200);
    expect(finalMetrics.lensSummaries.fairness.count).toBe(200);
    expect(finalMetrics.lensSummaries.autonomy.count).toBeGreaterThan(0);

    // Practice after campaign complete: replaying level 1 does not change completion totals
    const practiceRes = saveManager.recordCompletion(1, 'A', 'L001-A', 'practice-sess');
    expect(practiceRes.isFirstCompletion).toBe(false);
    expect(saveManager.getSave().completions.length).toBe(200);
  });
});
