import { describe, expect, it } from 'vitest';
import { getLevel, getOutcome, getPlayerLevel } from '../../src/content/catalog';
import type { LayoutTemplate } from '../../src/content/types';
import { createScene, parseChoiceTarget } from '../../src/render/scene';
import {
  APPROACH_TRAVEL_SPEED_MULTIPLIER,
  getTrackDefinition,
  PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER,
  sampleApproachPosition,
  sampleBranchPosition,
  samplePreCommitPosition,
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

  it('accelerates the opening approach and adds a second boost after selection', () => {
    expect(APPROACH_TRAVEL_SPEED_MULTIPLIER).toBe(2.2);
    expect(PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER).toBe(1.5);
    expect(sampleApproachPosition(0.5 / APPROACH_TRAVEL_SPEED_MULTIPLIER, APPROACH_TRAVEL_SPEED_MULTIPLIER).x).toBeCloseTo(
      sampleApproachPosition(0.5).x,
      5
    );
    expect(
      sampleApproachPosition(
        0.5 / (APPROACH_TRAVEL_SPEED_MULTIPLIER * PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER),
        APPROACH_TRAVEL_SPEED_MULTIPLIER * PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER
      ).x
    ).toBeCloseTo(sampleApproachPosition(0.5).x, 5);
    expect(sampleApproachPosition(0.5, APPROACH_TRAVEL_SPEED_MULTIPLIER).x).toBeCloseTo(430, 5);
    expect(
      sampleApproachPosition(1 / 3, APPROACH_TRAVEL_SPEED_MULTIPLIER * PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER).x
    ).toBeCloseTo(430, 5);
  });

  it('continues directly from the approach onto the selected branch', () => {
    const speed = APPROACH_TRAVEL_SPEED_MULTIPLIER;
    const junction = samplePreCommitPosition('fork2', 1, 1 / speed, speed);
    expect(junction.x).toBeCloseTo(430, 5);
    expect(junction.y).toBeCloseTo(300, 5);

    const onBranch = samplePreCommitPosition('fork2', 1, 0.75, speed);
    expect(onBranch.x).toBeGreaterThan(430);
    expect(onBranch.y).toBeGreaterThan(300);

    const branchEnd = samplePreCommitPosition('fork2', 1, 1, speed);
    expect(branchEnd.x).toBeCloseTo(900, 1);
    expect(branchEnd.y).toBeCloseTo(380, 1);
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
      onResume: () => {}
    });

    const btnB = controls.element.querySelector('.choice-btn-B') as HTMLButtonElement;
    expect(btnB).toBeDefined();
    btnB.click();
    expect(selectedId).toBe('B');

    btnB.click();
    expect(resolved).toBe(true);

    expect(controls.element.querySelector('.btn-resolve')).toBeNull();

    controls.destroy();
  });

  it('result panel displays complete reflections and exact counts', () => {
    const lvl1 = getLevel(1)!;
    const outcome1A = getOutcome(1, 'A')!;

    const panel = createResultPanel(lvl1, 'A', 'default', 'campaign', {
      onReplayPractice: () => {},
      onReturnToCampaign: () => {},
      onViewSummary: () => {}
    });

    expect(panel.textContent).toContain(outcome1A.summary);
    expect(panel.textContent).toContain(outcome1A.reflection.strongestReason);
    expect(panel.textContent).toContain(outcome1A.reflection.ethicalTension);
    expect(panel.textContent).toContain('Fatalities');
    expect(panel.textContent).not.toContain('Humans:');
    expect(panel.textContent).not.toContain('Combined biological deaths');
    expect(panel.firstElementChild?.className).toBe('result-header');
    expect(panel.querySelector('.btn-next')).toBeNull();
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

  it('correctly renders 5 people on track A and 1 person on track B for Level 4', () => {
    const pLvl4 = getPlayerLevel(4)!;
    expect(pLvl4).toBeDefined();

    const targetA = parseChoiceTarget(pLvl4, pLvl4.choices[0]!, 0);
    const targetB = parseChoiceTarget(pLvl4, pLvl4.choices[1]!, 1);

    expect(targetA.type).toBe('human');
    expect(targetA.count).toBe(5);
    expect(targetB.type).toBe('human');
    expect(targetB.count).toBe(1);

    const scene = createScene(pLvl4);
    const targetGA = scene.element.querySelector('.target-glyph-A');
    const targetGB = scene.element.querySelector('.target-glyph-B');
    expect(targetGA).not.toBeNull();
    expect(targetGB).not.toBeNull();
    // Track A has 5-person multiplier group badge
    expect(targetGA?.querySelector('.glyph-group')).not.toBeNull();
    expect(targetGA?.textContent).toContain('×5');
    // Track B has single person
    expect(targetGB?.querySelector('.glyph-person')).not.toBeNull();

    scene.destroy();
  });

  it('uses public route facts to choose the right opening sprites', () => {
    const l1 = getPlayerLevel(1)!;
    expect(parseChoiceTarget(l1, l1.choices[0]!, 0)).toMatchObject({ type: 'human', count: 1 });
    expect(parseChoiceTarget(l1, l1.choices[1]!, 1).type).toBe('none');

    const l2 = getPlayerLevel(2)!;
    expect(parseChoiceTarget(l2, l2.choices[1]!, 1)).toMatchObject({ type: 'bug', count: 1 });

    const l3 = getPlayerLevel(3)!;
    expect(parseChoiceTarget(l3, l3.choices[1]!, 1)).toMatchObject({ type: 'butterfly', count: 1 });

    const l7 = getPlayerLevel(7)!;
    expect(parseChoiceTarget(l7, l7.choices[1]!, 1).type).toBe('object');

    const l8 = getPlayerLevel(8)!;
    expect(parseChoiceTarget(l8, l8.choices[0]!, 0)).toMatchObject({ type: 'human', count: 1 });
    expect(parseChoiceTarget(l8, l8.choices[1]!, 1).type).toBe('object');

    const l15 = getPlayerLevel(15)!;
    expect(parseChoiceTarget(l15, l15.choices[1]!, 1)).toMatchObject({ type: 'bug', count: 20 });
  });

  it('renders every route and non-graphic scene for levels 1 through 25', () => {
    for (let id = 1; id <= 25; id += 1) {
      const playerLevel = getPlayerLevel(id)!;
      const scene = createScene(playerLevel);
      expect(scene.element.querySelectorAll('.route-plaque').length).toBe(playerLevel.choices.length);
      expect(scene.element.querySelectorAll('.blood-splatter, .glyph-blood-splatter').length).toBe(0);
      scene.destroy();
    }
  });

  it('renders the exact authored target counts and a matching scene theme for levels 1 through 28', () => {
    const expectedThemes = [
      'siding',
      'cockroach-crossing',
      'butterfly-crossing',
      'crowd',
      'platforms',
      'crowd',
      'porcelain-ducks',
      'lever',
      'workshop',
      'medical',
      'hat',
      'passenger',
      'wax-figure',
      'robot',
      'cockroach-crossing',
      'name-tags',
      'sleepers',
      'collection',
      'sidings',
      'brake',
      'badge',
      'driver',
      'automatic',
      'net',
      'net',
      'remote',
      'hand',
      'jam'
    ];
    const expected: Array<Array<{ type: 'human' | 'bug' | 'butterfly' | 'robot' | 'object' | 'none'; count: number }>> = [
      [{ type: 'human', count: 1 }, { type: 'none', count: 0 }],
      [{ type: 'human', count: 1 }, { type: 'bug', count: 1 }],
      [{ type: 'human', count: 1 }, { type: 'butterfly', count: 1 }],
      [{ type: 'human', count: 5 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 1 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 2 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 1 }, { type: 'object', count: 0 }],
      [{ type: 'human', count: 1 }, { type: 'object', count: 0 }],
      [{ type: 'human', count: 2 }, { type: 'object', count: 0 }],
      [{ type: 'human', count: 3 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 1 }, { type: 'human', count: 2 }],
      [{ type: 'human', count: 1 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 1 }, { type: 'object', count: 0 }],
      [{ type: 'human', count: 1 }, { type: 'robot', count: 1 }],
      [{ type: 'human', count: 1 }, { type: 'bug', count: 20 }],
      [{ type: 'human', count: 2 }, { type: 'human', count: 3 }],
      [{ type: 'human', count: 1 }, { type: 'human', count: 2 }],
      [{ type: 'human', count: 1 }, { type: 'object', count: 0 }],
      [{ type: 'human', count: 4 }, { type: 'human', count: 2 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 5 }, { type: 'human', count: 1 }, { type: 'object', count: 0 }],
      [{ type: 'human', count: 5 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 5 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 1 }, { type: 'human', count: 5 }],
      [{ type: 'object', count: 0 }, { type: 'human', count: 5 }],
      [{ type: 'human', count: 5 }, { type: 'object', count: 0 }],
      [{ type: 'human', count: 5 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 5 }, { type: 'human', count: 1 }],
      [{ type: 'human', count: 3 }, { type: 'human', count: 1 }]
    ];

    for (let id = 1; id <= 28; id += 1) {
      const playerLevel = getPlayerLevel(id)!;
      const scene = createScene(playerLevel);
      expect(scene.element.querySelector('.scene-theme-prop')?.getAttribute('data-theme')).toBe(expectedThemes[id - 1]);
      expect(scene.element.querySelector('.scene-theme-connector')).not.toBeNull();

      playerLevel.choices.forEach((choice, index) => {
        const target = parseChoiceTarget(playerLevel, choice, index);
        const expectedTarget = expected[id - 1]![index]!;
        expect(target, `level ${id} choice ${choice.id}`).toMatchObject(expectedTarget);

        const targetElement = scene.element.querySelector(`.target-glyph-${choice.id}`);
        if (!targetElement) {
          expect(expectedTarget.type).toBe('none');
          return;
        }
        const spriteSelector =
          expectedTarget.type === 'human'
            ? '.glyph-person'
            : expectedTarget.type === 'bug'
              ? '.glyph-cockroach'
              : expectedTarget.type === 'butterfly'
                ? '.glyph-butterfly'
                : expectedTarget.type === 'robot'
                  ? '.glyph-robot'
                  : null;
        if (spriteSelector) {
          expect(targetElement.querySelectorAll(spriteSelector).length).toBe(expectedTarget.count);
        } else {
          expect(targetElement.querySelector('.glyph-person, .glyph-cockroach, .glyph-butterfly, .glyph-robot')).toBeNull();
        }
      });
      scene.destroy();
    }
  });

  it('uses quiet fade treatment and a clickable physical switch during resolution', () => {
    const pLvl4 = getPlayerLevel(4)!;
    const rawLvl4 = getLevel(4)!;

    let selectedChoice = 'A';
    const scene = createScene(pLvl4, (id) => {
      selectedChoice = id;
    });

    expect(scene.element.querySelector('.blood-splatter-A')).toBeNull();
    expect(scene.element.querySelector('.blood-splatter-B')).toBeNull();

    // Simulate resolution of choice A at full impact
    scene.update(
      {
        levelId: 4,
        level: rawLvl4,
        mode: 'campaign',
        selectedChoiceId: 'A',
        selectionOrigin: 'player',
        timingMode: 'standard',
        deadlineMs: 30000,
        activeElapsedMs: 30000,
        resolutionElapsedMs: 2000,
        anchorMs: null,
        phaseBeforePause: null,
        pauseReason: null,
        committed: {
          choiceId: 'A',
          outcomeId: 'L004-A',
          outcome: rawLvl4.choices[0]!.outcome,
          committedAtMs: 30000,
          selectionOrigin: 'player'
        },
        sessionId: 'test-sess',
        campaignId: 'test-camp'
      },
      false
    );

    const targetA = scene.element.querySelector('.target-glyph-A .glyph-group') as SVGGElement;
    expect(targetA.style.opacity).toBe('0.18');
    expect(scene.element.querySelector('.glyph-blood-splatter')).toBeNull();

    // Target glyph and plaque should be clickable
    const plaqueB = scene.element.querySelector('.route-plaque-B') as SVGGElement;
    plaqueB.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(selectedChoice).toBe('B');

    scene.update(
      {
        levelId: 4,
        level: rawLvl4,
        mode: 'campaign',
        selectedChoiceId: 'B',
        selectionOrigin: 'player',
        timingMode: 'standard',
        deadlineMs: 30000,
        activeElapsedMs: 1000,
        resolutionElapsedMs: 0,
        anchorMs: null,
        phaseBeforePause: null,
        pauseReason: null,
        committed: null,
        sessionId: 'test-sess',
        campaignId: 'test-camp'
      },
      false
    );

    const switchHitArea = scene.element.querySelector('.scene-switch-hit-area') as SVGRectElement;
    switchHitArea.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(selectedChoice).toBe('A');

    scene.destroy();
  });
});
