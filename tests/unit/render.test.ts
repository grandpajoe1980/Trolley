import { describe, expect, it } from 'vitest';
import { getLevel, getOutcome, getPlayerLevel } from '../../src/content/catalog';
import type { LayoutTemplate } from '../../src/content/types';
import {
  getTrackDefinition,
  sampleApproachPosition,
  sampleBranchPosition,
  sampleUntimedLoopPosition
} from '../../src/render/templates';
import { createControls } from '../../src/ui/controls';
import { createFactsPanel } from '../../src/ui/facts';
import { createResultPanel } from '../../src/ui/result';

describe('Render and UI Layout Templates', () => {
  const templates: LayoutTemplate[] = ['fork2', 'fork3', 'action2', 'action3', 'footbridge', 'loop'];

  it('supports all 6 layout templates with valid approach and branches', () => {
    for (const t of templates) {
      const def = getTrackDefinition(t);
      expect(def.approachPath).toContain('M 60 300');
      expect(def.approachPath).toContain('L 430 300');
      expect(def.branchPaths.length).toBeGreaterThanOrEqual(2);
      expect(def.targetPoints.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('interpolates approach motion accurately between 0 and 1', () => {
    const start = sampleApproachPosition(0);
    expect(start.x).toBe(60);
    expect(start.y).toBe(300);

    const mid = sampleApproachPosition(0.5);
    expect(mid.x).toBe(60 + 0.5 * (430 - 60));
    expect(mid.y).toBe(300);

    const junction = sampleApproachPosition(1);
    expect(junction.x).toBe(430);
    expect(junction.y).toBe(300);
  });

  it('sampleUntimedLoopPosition loops without crossing the junction', () => {
    for (let progress = 0; progress <= 1; progress += 0.1) {
      const pt = sampleUntimedLoopPosition(progress);
      expect(pt.x).toBeLessThan(430); // Must never cross junction at 430
      expect(pt.x).toBeGreaterThanOrEqual(60);
    }
  });

  it('samples branch positions correctly at end of resolution', () => {
    // Fork2 slot 0 ends at (900, 220)
    const f2Slot0 = sampleBranchPosition('fork2', 0, 1);
    expect(f2Slot0.x).toBeCloseTo(900, 1);
    expect(f2Slot0.y).toBeCloseTo(220, 1);

    // Footbridge slot 1 stops at bridge x=550
    const bridgeStop = sampleBranchPosition('footbridge', 1, 1);
    expect(bridgeStop.x).toBeCloseTo(550, 1);
    expect(bridgeStop.y).toBeCloseTo(300, 1);
  });

  it('creates facts panel without leaking any hidden outcome data (levels 102, 115, 184, 195)', () => {
    for (const lvlId of [102, 115, 184, 195]) {
      const playerLvl = getPlayerLevel(lvlId)!;
      const panel = createFactsPanel(playerLvl);

      expect(panel.textContent).toContain(playerLvl.title);
      expect(panel.textContent).toContain(playerLvl.premise);
      expect(panel.textContent).toContain('Default Path');

      // Confirm author-only premise / hidden world is not in DOM
      const rawLvl = getLevel(lvlId)!;
      expect(panel.textContent).not.toContain(rawLvl.knowledge.authorOnlyPremise);
      for (const c of rawLvl.choices) {
        expect(panel.textContent).not.toContain(c.outcome.summary);
      }
    }
  });

  it('controls panel accurately reflects selection and enables keyboard/click handlers', () => {
    const playerLvl = getPlayerLevel(1)!;
    let selectedId = 'A';
    let resolved = false;

    const controls = createControls(playerLvl, {
      onSelectChoice: (id) => {
        selectedId = id;
      },
      onResolveNow: () => {
        resolved = true;
      },
      onPause: () => {},
      onResume: () => {},
      onSkipAnimation: () => {},
      onRestartLevel: () => {}
    });

    const btnB = controls.element.querySelector('.choice-btn-B') as HTMLButtonElement;
    expect(btnB).toBeDefined();
    btnB.click();
    expect(selectedId).toBe('B');

    const resolveBtn = controls.element.querySelector('.btn-resolve') as HTMLButtonElement;
    resolveBtn.click();
    expect(resolved).toBe(true);

    controls.destroy();
  });

  it('result panel displays complete reflections and exact counts', () => {
    const lvl1 = getLevel(1)!;
    const outcome1A = getOutcome(1, 'A')!;

    const panel = createResultPanel(lvl1, 'A', 'campaign', {
      onNextLevel: () => {},
      onReplayPractice: () => {},
      onReturnToCampaign: () => {},
      onViewSummary: () => {}
    });

    expect(panel.textContent).toContain(outcome1A.summary);
    expect(panel.textContent).toContain(outcome1A.reflection.strongestReason);
    expect(panel.textContent).toContain(outcome1A.reflection.ethicalTension);
    expect(panel.textContent).toContain('Raw Fatalities');
  });

  it('verifies representative levels from Section 11 Phase 4 (19, 32, 41, 45, 114, 153, 180, 200)', () => {
    const repIds = [19, 32, 41, 45, 114, 153, 180, 200];
    for (const id of repIds) {
      const lvl = getLevel(id);
      expect(lvl).toBeDefined();
      const pLvl = getPlayerLevel(id);
      expect(pLvl).toBeDefined();

      const def = getTrackDefinition(lvl!.layout.template);
      expect(def).toBeDefined();
      expect(def.branchPaths.length).toBe(lvl!.choices.length);
    }
  });
});
