import type { ChoiceId, PlayerLevel } from '../content/types';
import type { EngineSession } from '../engine/state';
import {
  createBufferStopGlyph,
  createButterflyGlyph,
  createCockroachGlyph,
  createGroupGlyph,
  createImpactCloudGlyph,
  createPersonGlyph,
  createQuestionGlyph,
  createRobotGlyph,
  createSvgElement,
  createSwitchLeverGlyph,
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

  // 1. Gradients and Definitions
  const defs = createSvgElement('defs');

  // Sky gradient
  const skyGrad = createSvgElement('linearGradient', {
    id: 'scene-sky-grad',
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '1'
  });
  skyGrad.appendChild(createSvgElement('stop', { offset: '0%', 'stop-color': '#e0f2fe' }));
  skyGrad.appendChild(createSvgElement('stop', { offset: '60%', 'stop-color': '#f0fdf4' }));
  skyGrad.appendChild(createSvgElement('stop', { offset: '100%', 'stop-color': '#f1f5f9' }));
  defs.appendChild(skyGrad);

  // Hills gradient
  const hillGrad = createSvgElement('linearGradient', {
    id: 'scene-hill-grad',
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '1'
  });
  hillGrad.appendChild(createSvgElement('stop', { offset: '0%', 'stop-color': '#cbd5e1', 'stop-opacity': '0.7' }));
  hillGrad.appendChild(createSvgElement('stop', { offset: '100%', 'stop-color': '#94a3b8', 'stop-opacity': '0.4' }));
  defs.appendChild(hillGrad);

  // Ballast filter for track bed
  const ballastPattern = createSvgElement('pattern', {
    id: 'ballast-pattern',
    width: '12',
    height: '12',
    patternUnits: 'userSpaceOnUse'
  });
  ballastPattern.appendChild(
    createSvgElement('rect', { width: '12', height: '12', fill: '#94a3b8' })
  );
  ballastPattern.appendChild(
    createSvgElement('circle', { cx: '3', cy: '4', r: '1.5', fill: '#64748b' })
  );
  ballastPattern.appendChild(
    createSvgElement('circle', { cx: '9', cy: '9', r: '1.8', fill: '#475569' })
  );
  defs.appendChild(ballastPattern);

  svg.appendChild(defs);

  // 2. Scenic Environment Background
  // Sky background
  const bgRect = createSvgElement('rect', {
    x: 0,
    y: 0,
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    fill: 'url(#scene-sky-grad)',
    rx: 8
  });
  svg.appendChild(bgRect);

  // Distant rolling hills
  const hills = createSvgElement('path', {
    d: 'M 0,260 Q 200,200 450,230 T 800,190 Q 920,210 1000,240 L 1000,320 L 0,320 Z',
    fill: 'url(#scene-hill-grad)'
  });
  svg.appendChild(hills);

  // Overhead catenary poles and wire
  const wireGroup = createSvgElement('g', { class: 'scene-catenary' });
  const overheadWire = createSvgElement('path', {
    d: 'M 40,235 Q 240,245 430,235 Q 650,245 920,235',
    fill: 'none',
    stroke: '#71717a',
    'stroke-width': 1.5,
    'stroke-dasharray': '6,2'
  });
  wireGroup.appendChild(overheadWire);

  for (const poleX of [60, 320, 580, 850]) {
    const pole = createSvgElement('line', {
      x1: poleX,
      y1: 300,
      x2: poleX,
      y2: 215,
      stroke: '#475569',
      'stroke-width': 3.5
    });
    const arm = createSvgElement('line', {
      x1: poleX - 10,
      y1: 220,
      x2: poleX + 25,
      y2: 235,
      stroke: '#475569',
      'stroke-width': 2.5
    });
    wireGroup.appendChild(pole);
    wireGroup.appendChild(arm);
  }
  svg.appendChild(wireGroup);

  // 3. Track definitions & Rails
  const trackDef = getTrackDefinition(level.layout.template);
  const tracksGroup = createSvgElement('g', { class: 'scene-tracks' });

  // Approach track ballast bed
  const approachBed = createSvgElement('path', {
    d: trackDef.approachPath,
    stroke: 'url(#ballast-pattern)',
    'stroke-width': 22,
    'stroke-linecap': 'round',
    fill: 'none'
  });
  // Approach wooden ties (sleepers)
  const approachTies = createSvgElement('path', {
    d: trackDef.approachPath,
    stroke: '#451a03',
    'stroke-width': 16,
    'stroke-dasharray': '4,10',
    fill: 'none'
  });
  // Approach steel rails
  const approachRails = createSvgElement('path', {
    d: trackDef.approachPath,
    stroke: '#334155',
    'stroke-width': 6,
    fill: 'none'
  });
  const approachHighlight = createSvgElement('path', {
    d: trackDef.approachPath,
    stroke: '#94a3b8',
    'stroke-width': 1.5,
    fill: 'none'
  });

  tracksGroup.appendChild(approachBed);
  tracksGroup.appendChild(approachTies);
  tracksGroup.appendChild(approachRails);
  tracksGroup.appendChild(approachHighlight);

  // Branches
  const branchElements: SVGPathElement[] = [];
  trackDef.branchPaths.forEach((pathD, idx) => {
    const branchBed = createSvgElement('path', {
      d: pathD,
      stroke: 'url(#ballast-pattern)',
      'stroke-width': 20,
      'stroke-linecap': 'round',
      fill: 'none'
    });
    const branchTies = createSvgElement('path', {
      d: pathD,
      stroke: '#451a03',
      'stroke-width': 16,
      'stroke-dasharray': '4,10',
      fill: 'none'
    });
    const branchRail = createSvgElement('path', {
      d: pathD,
      stroke: '#334155',
      'stroke-width': 6,
      fill: 'none',
      class: `branch-rail branch-rail-${idx}`
    });
    const branchHigh = createSvgElement('path', {
      d: pathD,
      stroke: '#94a3b8',
      'stroke-width': 1.5,
      fill: 'none'
    });

    tracksGroup.appendChild(branchBed);
    tracksGroup.appendChild(branchTies);
    tracksGroup.appendChild(branchRail);
    tracksGroup.appendChild(branchHigh);
    branchElements.push(branchRail);
  });
  svg.appendChild(tracksGroup);

  // 4. Dynamic Turnout Switch Blade & Ground Lever
  const switchGroup = createSvgElement('g', {
    class: 'scene-switch-assembly',
    transform: 'translate(420, 325)'
  });
  let switchLeverEl = createSwitchLeverGlyph(0);
  switchGroup.appendChild(switchLeverEl);
  svg.appendChild(switchGroup);

  // 5. Template Furniture (Footbridge, Loop siding, Console, Signs)
  const furnitureGroup = createSvgElement('g', { class: 'scene-furniture' });

  // Console pulse ring for action commitment
  const pulseRing = createSvgElement('circle', {
    cx: 430,
    cy: 230,
    r: 8,
    fill: 'none',
    stroke: '#0284c7',
    'stroke-width': 3,
    opacity: '0'
  });
  furnitureGroup.appendChild(pulseRing);

  if (level.layout.template === 'footbridge') {
    // Footbridge Stone Arch & Deck
    const bridgeStonework = createSvgElement('path', {
      d: 'M 490,320 L 490,175 Q 550,150 610,175 L 610,320 L 590,320 L 590,200 Q 550,180 510,200 L 510,320 Z',
      fill: '#64748b',
      stroke: '#334155',
      'stroke-width': 2
    });
    const bridgeDeck = createSvgElement('rect', {
      x: 480,
      y: 168,
      width: 140,
      height: 12,
      rx: 2,
      fill: '#78350f',
      stroke: '#451a03',
      'stroke-width': 1.5
    });
    const bridgeRailing = createSvgElement('path', {
      d: 'M 480,154 L 620,154 M 490,154 L 490,168 M 530,154 L 530,168 M 570,154 L 570,168 M 610,154 L 610,168',
      stroke: '#1e293b',
      'stroke-width': 2
    });

    furnitureGroup.appendChild(bridgeStonework);
    furnitureGroup.appendChild(bridgeDeck);
    furnitureGroup.appendChild(bridgeRailing);

    // Trapdoor marking for Level 31
    if (level.id === 31) {
      const trapdoorMark = createSvgElement('rect', {
        x: 535,
        y: 168,
        width: 30,
        height: 12,
        fill: '#b45309',
        stroke: '#fef08a',
        'stroke-width': 1.5,
        'stroke-dasharray': '3,2'
      });
      const trapdoorLever = createSvgElement('line', {
        x1: 530,
        y1: 168,
        x2: 524,
        y2: 150,
        stroke: '#ef4444',
        'stroke-width': 3,
        'stroke-linecap': 'round'
      });
      furnitureGroup.appendChild(trapdoorMark);
      furnitureGroup.appendChild(trapdoorLever);
    }

    // Actor standing on footbridge
    const bridgeActor = createSvgElement('g', {
      transform: 'translate(550, 152)',
      class: 'bridge-actor'
    });
    bridgeActor.appendChild(createPersonGlyph('#dc2626'));
    furnitureGroup.appendChild(bridgeActor);

    // Downstream 5-person group
    const downstreamGroup = createSvgElement('g', {
      transform: 'translate(780, 290)',
      class: 'downstream-group'
    });
    downstreamGroup.appendChild(createGroupGlyph(5));
    furnitureGroup.appendChild(downstreamGroup);
  } else if (level.layout.template === 'loop') {
    // Siding Loop Person or Buffer Stop
    const loopTarget = createSvgElement('g', {
      transform: 'translate(650, 155)',
      class: 'loop-target'
    });
    loopTarget.appendChild(createPersonGlyph('#ea580c'));
    furnitureGroup.appendChild(loopTarget);

    // Level 42 independent buffer stop
    if (level.id === 42) {
      const bufferG = createSvgElement('g', {
        transform: 'translate(720, 175)',
        class: 'independent-buffer'
      });
      bufferG.appendChild(createBufferStopGlyph());
      furnitureGroup.appendChild(bufferG);
    }

    // Downstream group on main line
    const mainGroup = createSvgElement('g', {
      transform: 'translate(860, 290)',
      class: 'downstream-group'
    });
    mainGroup.appendChild(createGroupGlyph(5));
    furnitureGroup.appendChild(mainGroup);
  } else if (level.layout.template === 'action2' || level.layout.template === 'action3') {
    // Railway Dispatch Tower / Signal Console
    const consoleStand = createSvgElement('line', {
      x1: 430,
      y1: 290,
      x2: 430,
      y2: 235,
      stroke: '#475569',
      'stroke-width': 6,
      'stroke-linecap': 'round'
    });
    const consoleBox = createSvgElement('rect', {
      x: 405,
      y: 205,
      width: 50,
      height: 32,
      rx: 5,
      fill: '#1e293b',
      stroke: '#38bdf8',
      'stroke-width': 2.5,
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'
    });
    // Indicator status LEDs
    const ledGreen = createSvgElement('circle', {
      cx: 418,
      cy: 221,
      r: 4,
      fill: '#22c55e',
      stroke: '#15803d',
      'stroke-width': 1
    });
    const ledRed = createSvgElement('circle', {
      cx: 442,
      cy: 221,
      r: 4,
      fill: '#ef4444',
      stroke: '#b91c1c',
      'stroke-width': 1
    });

    // Semaphore arm
    const semaphoreArm = createSvgElement('line', {
      x1: 430,
      y1: 205,
      x2: 455,
      y2: 185,
      stroke: '#e2e8f0',
      'stroke-width': 4,
      'stroke-linecap': 'round'
    });

    furnitureGroup.appendChild(consoleStand);
    furnitureGroup.appendChild(consoleBox);
    furnitureGroup.appendChild(ledGreen);
    furnitureGroup.appendChild(ledRed);
    furnitureGroup.appendChild(semaphoreArm);
  }

  // Restrained Theme Signage
  if (level.layout.theme === 'bureaucratic-comedy') {
    const signG = createSvgElement('g', { transform: 'translate(120, 240)' });
    const signPost = createSvgElement('line', { x1: 0, y1: 0, x2: 0, y2: 40, stroke: '#52525b', 'stroke-width': 2 });
    const signBoard = createSvgElement('rect', {
      x: -40,
      y: -20,
      width: 80,
      height: 24,
      rx: 3,
      fill: '#fef3c7',
      stroke: '#d97706',
      'stroke-width': 1.5
    });
    const signText = createSvgElement('text', {
      x: 0,
      y: -5,
      'text-anchor': 'middle',
      fill: '#92400e',
      'font-size': '8',
      'font-weight': 'bold',
      'font-family': 'system-ui, sans-serif'
    });
    signText.textContent = 'DIV. OF TRACKS';
    signG.appendChild(signPost);
    signG.appendChild(signBoard);
    signG.appendChild(signText);
    furnitureGroup.appendChild(signG);
  }

  svg.appendChild(furnitureGroup);

  // 6. Target Glyphs & Route Preview Plaques
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
      // Meaningful decorative illustration
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
      } else if (level.premise.toLowerCase().includes('robot') || choice.preview.toLowerCase().includes('robot')) {
        targetG.appendChild(createRobotGlyph());
      } else if (level.layout.template === 'fork2' || level.layout.template === 'fork3') {
        if (idx === 0) {
          targetG.appendChild(createPersonGlyph());
        }
      }
    }

    // High-visibility Route Plaque with interactive hover and click
    const plaqueG = createSvgElement('g', {
      transform: `translate(${pt.x + 35}, ${pt.y - 32})`,
      class: `route-plaque route-plaque-${choice.id}`,
      style: 'cursor: pointer;'
    });

    const plaqueBg = createSvgElement('rect', {
      x: 0,
      y: 0,
      width: 155,
      height: 52,
      rx: 7,
      fill: '#ffffff',
      stroke: '#cbd5e1',
      'stroke-width': 1.8,
      filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.08))'
    });

    const plaqueBadge = createSvgElement('rect', {
      x: 6,
      y: 6,
      width: 22,
      height: 22,
      rx: 4,
      fill: choice.id === 'A' ? '#2563eb' : '#64748b'
    });

    const plaqueLetter = createSvgElement('text', {
      x: 17,
      y: 21,
      'text-anchor': 'middle',
      fill: '#ffffff',
      'font-size': '13',
      'font-weight': 'bold',
      'font-family': 'system-ui, sans-serif'
    });
    plaqueLetter.textContent = choice.id;

    const plaqueText = createSvgElement('text', {
      x: 34,
      y: 20,
      fill: '#0f172a',
      'font-size': '12',
      'font-weight': '700',
      'font-family': 'system-ui, sans-serif'
    });
    const labelSub = choice.label.length > 18 ? `${choice.label.slice(0, 17)}…` : choice.label;
    plaqueText.textContent = labelSub;

    const plaquePreview = createSvgElement('text', {
      x: 10,
      y: 41,
      fill: '#475569',
      'font-size': '11',
      'font-family': 'system-ui, sans-serif'
    });
    const prevSub = choice.preview.length > 22 ? `${choice.preview.slice(0, 21)}…` : choice.preview;
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

  // 7. Impact cloud (hidden initially)
  const impactCloud = createImpactCloudGlyph();
  impactCloud.setAttribute('transform', 'translate(550, 270) scale(0)');
  impactCloud.setAttribute('opacity', '0');
  svg.appendChild(impactCloud);

  // 8. Trolley Actor
  const trolleyG = createSvgElement('g', { class: 'scene-trolley-actor' });
  const trolleyGlyph = createTrolleyGlyph();
  trolleyG.appendChild(trolleyGlyph);
  svg.appendChild(trolleyG);

  function setTrolleyPose(x: number, y: number, angle = 0): void {
    trolleyG.setAttribute('transform', `translate(${x}, ${y}) rotate(${angle})`);
  }

  setTrolleyPose(60, 300, 0);

  return {
    element: svg,
    update(session: EngineSession, reducedMotion: boolean): void {
      const selectedSlot = level.choices.findIndex((c) => c.id === session.selectedChoiceId);
      const activeSlot = selectedSlot >= 0 ? selectedSlot : 0;

      // Update switch lever rotation
      switchGroup.innerHTML = '';
      switchLeverEl = createSwitchLeverGlyph(activeSlot);
      switchGroup.appendChild(switchLeverEl);

      // Highlight selected rail branch
      branchElements.forEach((rail, idx) => {
        if (idx === activeSlot) {
          rail.setAttribute('stroke', '#2563eb');
          rail.setAttribute('stroke-width', '8');
        } else {
          rail.setAttribute('stroke', '#334155');
          rail.setAttribute('stroke-width', '6');
        }
      });

      // Trolley Pose calculation
      if (session.committed !== null) {
        const committedSlot = level.choices.findIndex((c) => c.id === session.committed?.choiceId);
        const resolvedSlot = committedSlot >= 0 ? committedSlot : 0;

        if (reducedMotion) {
          const pose = sampleBranchPosition(level.layout.template, resolvedSlot, 1);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else {
          const v = Math.min(1, session.resolutionElapsedMs / 2400);
          const pose = sampleBranchPosition(level.layout.template, resolvedSlot, v);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);

          // Animate console pulse
          if (level.layout.template.startsWith('action') && v < 0.8) {
            pulseRing.setAttribute('r', String(8 + v * 35));
            pulseRing.setAttribute('opacity', String(1 - v * 1.2));
          }
        }

        // Footbridge impact cloud
        if (level.layout.template === 'footbridge' && resolvedSlot === 1) {
          impactCloud.setAttribute('transform', 'translate(550, 270) scale(1)');
          impactCloud.setAttribute('opacity', '1');
        }
      } else {
        if (reducedMotion) {
          const fraction = session.deadlineMs > 0 ? session.activeElapsedMs / session.deadlineMs : 0;
          let staticU = 0;
          if (fraction >= 0.9) staticU = 0.95;
          else if (fraction >= 0.45) staticU = 0.5;
          const pose = sampleApproachPosition(staticU);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else if (session.timingMode === 'untimed') {
          const loopT = (session.activeElapsedMs % 6000) / 6000;
          const pose = sampleUntimedLoopPosition(loopT);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else {
          const u = session.deadlineMs > 0 ? Math.min(1, session.activeElapsedMs / session.deadlineMs) : 0;
          const pose = sampleApproachPosition(u);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        }
      }
    },
    destroy(): void {
      svg.remove();
    }
  };
}
