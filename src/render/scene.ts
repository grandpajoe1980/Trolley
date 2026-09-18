import type { ChoiceId, PlayerLevel } from '../content/types';
import type { EngineSession } from '../engine/state';
import {
  createButterflyGlyph,
  createCockroachGlyph,
  createGroupGlyph,
  createImpactCloudGlyph,
  createPersonGlyph,
  createQuestionGlyph,
  createSvgElement,
  createTrolleyGlyph
} from './glyphs';
import {
  getTrackDefinition,
  sampleApproachPosition,
  sampleBranchPosition,
  sampleUntimedLoopPosition,
  STAGE_HEIGHT,
  STAGE_WIDTH
} from './templates';

export interface SceneComponent {
  element: SVGSVGElement;
  update: (session: EngineSession, reducedMotion: boolean) => void;
  destroy: () => void;
}

export function createScene(level: PlayerLevel, onSelectChoice?: (id: ChoiceId) => void): SceneComponent {
  const svg = createSvgElement('svg', {
    viewBox: `0 0 ${STAGE_WIDTH} ${STAGE_HEIGHT}`,
    class: 'trolley-stage',
    role: 'img',
    'aria-hidden': 'true'
  });

  // 1. Stage background
  const defs = createSvgElement('defs');
  const bgGrad = createSvgElement('linearGradient', {
    id: 'stage-bg-grad',
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '1'
  });
  bgGrad.appendChild(createSvgElement('stop', { offset: '0%', 'stop-color': '#e2e8f0' }));
  bgGrad.appendChild(createSvgElement('stop', { offset: '100%', 'stop-color': '#f8fafc' }));
  defs.appendChild(bgGrad);
  svg.appendChild(defs);

  const bgRect = createSvgElement('rect', {
    x: 0,
    y: 0,
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    fill: 'url(#stage-bg-grad)',
    rx: 8
  });
  svg.appendChild(bgRect);

  // 2. Track definitions
  const trackDef = getTrackDefinition(level.layout.template);
  const tracksGroup = createSvgElement('g', { class: 'scene-tracks' });

  // Approach track bed
  const approachBed = createSvgElement('path', {
    d: trackDef.approachPath,
    stroke: '#94a3b8',
    'stroke-width': 12,
    'stroke-linecap': 'round',
    fill: 'none'
  });
  const approachRails = createSvgElement('path', {
    d: trackDef.approachPath,
    stroke: '#475569',
    'stroke-width': 4,
    fill: 'none'
  });
  tracksGroup.appendChild(approachBed);
  tracksGroup.appendChild(approachRails);

  // Branches
  const branchElements: SVGPathElement[] = [];
  trackDef.branchPaths.forEach((pathD, idx) => {
    const branchBed = createSvgElement('path', {
      d: pathD,
      stroke: '#94a3b8',
      'stroke-width': 12,
      'stroke-linecap': 'round',
      fill: 'none'
    });
    const branchRail = createSvgElement('path', {
      d: pathD,
      stroke: '#475569',
      'stroke-width': 4,
      fill: 'none',
      class: `branch-rail branch-rail-${idx}`
    });
    tracksGroup.appendChild(branchBed);
    tracksGroup.appendChild(branchRail);
    branchElements.push(branchRail);
  });
  svg.appendChild(tracksGroup);

  // 3. Furniture (switch, console, bridge, loop buffer)
  const furnitureGroup = createSvgElement('g', { class: 'scene-furniture' });

  if (level.layout.template === 'footbridge') {
    // Footbridge overhead structure
    const bridgeArch = createSvgElement('path', {
      d: 'M 510 330 L 510 190 Q 550 170 590 190 L 590 330',
      stroke: '#475569',
      'stroke-width': 6,
      fill: 'none'
    });
    const bridgeDeck = createSvgElement('rect', {
      x: 500,
      y: 185,
      width: 100,
      height: 10,
      rx: 2,
      fill: '#334155'
    });
    furnitureGroup.appendChild(bridgeArch);
    furnitureGroup.appendChild(bridgeDeck);

    // Bridge target / trapdoor / person
    const bridgeActor = createSvgElement('g', {
      transform: 'translate(550, 175)',
      class: 'bridge-actor'
    });
    bridgeActor.appendChild(createPersonGlyph('#dc2626'));
    furnitureGroup.appendChild(bridgeActor);

    // Downstream group
    const groupActor = createSvgElement('g', {
      transform: 'translate(780, 300)',
      class: 'downstream-group'
    });
    groupActor.appendChild(createGroupGlyph(5));
    furnitureGroup.appendChild(groupActor);
  } else if (level.layout.template === 'loop') {
    // Loop person / stopping buffer
    const loopTarget = createSvgElement('g', {
      transform: 'translate(650, 160)',
      class: 'loop-target'
    });
    loopTarget.appendChild(createPersonGlyph('#ea580c'));
    furnitureGroup.appendChild(loopTarget);

    // Downstream main line group
    const groupActor = createSvgElement('g', {
      transform: 'translate(860, 300)',
      class: 'downstream-group'
    });
    groupActor.appendChild(createGroupGlyph(5));
    furnitureGroup.appendChild(groupActor);
  } else if (level.layout.template === 'action2' || level.layout.template === 'action3') {
    // Console / lever mechanism at junction
    const consolePost = createSvgElement('line', {
      x1: 430,
      y1: 290,
      x2: 430,
      y2: 240,
      stroke: '#64748b',
      'stroke-width': 4
    });
    const consoleBox = createSvgElement('rect', {
      x: 410,
      y: 215,
      width: 40,
      height: 25,
      rx: 4,
      fill: '#1e293b',
      stroke: '#0ea5e9',
      'stroke-width': 2
    });
    furnitureGroup.appendChild(consolePost);
    furnitureGroup.appendChild(consoleBox);
  }
  svg.appendChild(furnitureGroup);

  // 4. Target Glyphs & Route Preview Plaques
  const targetsGroup = createSvgElement('g', { class: 'scene-targets' });

  level.choices.forEach((choice, idx) => {
    const pt = trackDef.targetPoints[idx] ?? { x: 800, y: 300 };

    const targetG = createSvgElement('g', {
      transform: `translate(${pt.x}, ${pt.y})`,
      class: `target-glyph target-glyph-${choice.id}`
    });

    if (level.layout.fogOverlay) {
      targetG.appendChild(createQuestionGlyph());
    } else {
      // Decorative glyphs based on preview / opening level hints
      if (level.id === 1) {
        if (choice.id === 'A') {
          targetG.appendChild(createPersonGlyph());
        }
      } else if (level.id === 2) {
        if (choice.id === 'A') {
          targetG.appendChild(createPersonGlyph());
        } else {
          targetG.appendChild(createCockroachGlyph());
        }
      } else if (level.id === 3) {
        if (choice.id === 'A') {
          targetG.appendChild(createPersonGlyph());
        } else {
          targetG.appendChild(createButterflyGlyph());
        }
      } else if (level.layout.template === 'fork2' || level.layout.template === 'fork3') {
        // Person glyph for default branch
        if (idx === 0) {
          targetG.appendChild(createPersonGlyph());
        }
      }
    }

    // Route plaque with label and preview
    const plaqueG = createSvgElement('g', {
      transform: `translate(${pt.x + 35}, ${pt.y - 30})`,
      class: `route-plaque route-plaque-${choice.id}`,
      style: 'cursor: pointer;'
    });

    const plaqueBg = createSvgElement('rect', {
      x: 0,
      y: 0,
      width: 140,
      height: 48,
      rx: 6,
      fill: '#ffffff',
      stroke: '#cbd5e1',
      'stroke-width': 1.5,
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
    });

    const plaqueBadge = createSvgElement('rect', {
      x: 4,
      y: 4,
      width: 20,
      height: 20,
      rx: 3,
      fill: choice.id === 'A' ? '#3b82f6' : '#64748b'
    });

    const plaqueLetter = createSvgElement('text', {
      x: 14,
      y: 18,
      'text-anchor': 'middle',
      fill: '#ffffff',
      'font-size': '12',
      'font-weight': 'bold',
      'font-family': 'system-ui, sans-serif'
    });
    plaqueLetter.textContent = choice.id;

    const plaqueText = createSvgElement('text', {
      x: 28,
      y: 18,
      fill: '#0f172a',
      'font-size': '11',
      'font-weight': '600',
      'font-family': 'system-ui, sans-serif'
    });
    const labelSub = choice.label.length > 16 ? `${choice.label.slice(0, 15)}…` : choice.label;
    plaqueText.textContent = labelSub;

    const plaquePreview = createSvgElement('text', {
      x: 8,
      y: 38,
      fill: '#64748b',
      'font-size': '10',
      'font-family': 'system-ui, sans-serif'
    });
    const prevSub = choice.preview.length > 20 ? `${choice.preview.slice(0, 19)}…` : choice.preview;
    plaquePreview.textContent = prevSub;

    plaqueG.appendChild(plaqueBg);
    plaqueG.appendChild(plaqueBadge);
    plaqueG.appendChild(plaqueLetter);
    plaqueG.appendChild(plaqueText);
    plaqueG.appendChild(plaquePreview);

    if (onSelectChoice) {
      plaqueG.addEventListener('click', () => onSelectChoice(choice.id));
    }

    targetsGroup.appendChild(targetG);
    targetsGroup.appendChild(plaqueG);
  });
  svg.appendChild(targetsGroup);

  // 5. Impact cloud (hidden initially)
  const impactCloud = createImpactCloudGlyph();
  impactCloud.setAttribute('transform', 'translate(550, 270) scale(0)');
  impactCloud.setAttribute('opacity', '0');
  svg.appendChild(impactCloud);

  // 6. Trolley actor
  const trolleyG = createSvgElement('g', { class: 'scene-trolley-actor' });
  const trolleyGlyph = createTrolleyGlyph();
  trolleyG.appendChild(trolleyGlyph);
  svg.appendChild(trolleyG);

  // Helper to set trolley pose
  function setTrolleyPose(x: number, y: number, angle = 0): void {
    trolleyG.setAttribute('transform', `translate(${x}, ${y}) rotate(${angle})`);
  }

  // Initial pose at approach start
  setTrolleyPose(60, 300, 0);

  return {
    element: svg,
    update(session: EngineSession, reducedMotion: boolean): void {
      const selectedSlot = level.choices.findIndex((c) => c.id === session.selectedChoiceId);

      // Highlight selected rail branch
      branchElements.forEach((rail, idx) => {
        if (idx === selectedSlot) {
          rail.setAttribute('stroke', '#2563eb');
          rail.setAttribute('stroke-width', '7');
        } else {
          rail.setAttribute('stroke', '#475569');
          rail.setAttribute('stroke-width', '4');
        }
      });

      // Calculate pose based on session state and timing mode
      if (session.committed !== null) {
        // Committed! Either resolving or result
        const committedSlot = level.choices.findIndex((c) => c.id === session.committed?.choiceId);
        const resolvedSlot = committedSlot >= 0 ? committedSlot : 0;

        if (reducedMotion) {
          // Static result position
          const pose = sampleBranchPosition(level.layout.template, resolvedSlot, 1);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else {
          const v = Math.min(1, session.resolutionElapsedMs / 2400);
          const pose = sampleBranchPosition(level.layout.template, resolvedSlot, v);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        }

        // Footbridge impact cloud
        if (level.layout.template === 'footbridge' && resolvedSlot === 1) {
          impactCloud.setAttribute('transform', 'translate(550, 270) scale(1)');
          impactCloud.setAttribute('opacity', '1');
        }
      } else {
        // Uncommitted running or paused
        if (reducedMotion) {
          // Discrete static positions: start (0), mid (0.5), or pre-commitment (0.95)
          const fraction = session.deadlineMs > 0 ? session.activeElapsedMs / session.deadlineMs : 0;
          let staticU = 0;
          if (fraction >= 0.9) staticU = 0.95;
          else if (fraction >= 0.45) staticU = 0.5;
          const pose = sampleApproachPosition(staticU);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else if (session.timingMode === 'untimed') {
          // Untimed loop animation
          const loopT = (session.activeElapsedMs % 6000) / 6000;
          const pose = sampleUntimedLoopPosition(loopT);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else {
          // Standard / Extended continuous approach
          const u = session.deadlineMs > 0 ? Math.min(1, session.activeElapsedMs / session.deadlineMs) : 0;
          const pose = sampleApproachPosition(u);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        }
      }
    },
    destroy(): void {
      // Clean up event listeners if any
      svg.remove();
    }
  };
}
