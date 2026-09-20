import type { ChoiceId, PlayerChoice, PlayerLevel } from '../content/types';
import type { EngineSession } from '../engine/state';
import {
  createBufferStopGlyph,
  createButterflyGlyph,
  createCockroachGlyph,
  createCreatureGroupGlyph,
  createImpactCloudGlyph,
  createObjectGlyph,
  createPersonGlyph,
  createQuestionGlyph,
  createRobotGlyph,
  createSvgElement,
  createSwitchLeverGlyph,
  createThemePropGlyph,
  createTrolleyGlyph
} from './glyphs';
import {
  getTrackDefinition,
  APPROACH_TRAVEL_SPEED_MULTIPLIER,
  PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER,
  sampleBranchPosition,
  samplePreCommitPosition,
  sampleUntimedLoopPosition,
  STAGE_HEIGHT,
  STAGE_WIDTH
} from './templates';
import { sound } from '../audio/sound';

export interface SceneComponent {
  element: SVGSVGElement;
  update: (session: EngineSession, reducedMotion: boolean) => void;
  destroy: () => void;
}

export interface ChoiceTargetInfo {
  type: 'human' | 'bug' | 'butterfly' | 'robot' | 'object' | 'none';
  count: number;
  objectKind?: string;
}

const NUMBER_WORDS: Record<string, number> = {
  zero: 0,
  no: 0,
  nobody: 0,
  one: 1,
  lone: 1,
  both: 2,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  twenty: 20,
  hundred: 100
};

function countFromText(text: string): number | null {
  const normalized = text.toLowerCase();
  const countMatch = normalized.match(
    /\b(\d+|zero|no|nobody|one|lone|both|two|three|four|five|six|seven|eight|nine|ten|twenty|hundred)\b(?:\s+[a-z-]+){0,2}\s+(?:people|person|humans|human|persons|strangers|workers|passengers|patients|civilians|bystanders|children|adults|cockroaches|roaches|butterflies|die|dies|died|death|deaths|survive|survives|on|face|are)\b/i
  );
  if (countMatch?.[1]) {
    const token = countMatch[1].toLowerCase();
    return NUMBER_WORDS[token] ?? Number.parseInt(token, 10);
  }
  if (/\b(the|a|an|one)\s+(human|person|passenger|patient|worker|stranger|celebrity|driver)\b/.test(normalized)) {
    return 1;
  }
  return null;
}

function deathCountFromText(text: string): number | null {
  const normalized = text.toLowerCase();
  const deathIndex = normalized.search(/\b(die|dies|died|death|deaths|killed|killing)\b/);
  if (deathIndex < 0) return null;
  const beforeDeath = normalized.slice(0, deathIndex);
  const countToken = beforeDeath.match(
    /\b(\d+|zero|no|nobody|one|lone|both|two|three|four|five|six|seven|eight|nine|ten|twenty|hundred)\b(?:\s+[a-z-]+){0,2}\s*$/i
  )?.[1];
  if (countToken) return NUMBER_WORDS[countToken] ?? Number.parseInt(countToken, 10);
  if (/\b(the|a|an|one|lone|ill)\s+(human|person|passenger|patient|worker|stranger|celebrity|driver)\b/.test(beforeDeath)) {
    return 1;
  }
  return null;
}

function speciesFromText(text: string): ChoiceTargetInfo['type'] | null {
  const normalized = text.toLowerCase();
  if (/\b(cockroach|cockroaches|roach|roaches|bug|bugs)\b/.test(normalized)) return 'bug';
  if (/\b(butterfly|butterflies)\b/.test(normalized)) return 'butterfly';
  if (/\b(robot|android|automaton)\b/.test(normalized)) return 'robot';
  if (/\b(human|humans|person|people|passenger|passengers|patient|patients|worker|workers|stranger|strangers|celebrity|driver|bystander|bystanders|child|children|adult|adults)\b/.test(normalized)) return 'human';
  return null;
}

function speciesDyingInPreview(text: string): ChoiceTargetInfo['type'] | null {
  const normalized = text.toLowerCase();
  const deathIndex = normalized.search(/\b(die|dies|died|death|deaths|killed|killing)\b/);
  if (deathIndex < 0) return null;
  return speciesFromText(normalized.slice(Math.max(0, deathIndex - 42), deathIndex + 12));
}

function objectKindFromText(text: string): string | null {
  const normalized = text.toLowerCase();
  const objects: Array<[RegExp, string]> = [
    [/\b(duck|ducks|porcelain)\b/, 'porcelain ducks'],
    [/\b(workshop|livelihood)\b/, 'workshop'],
    [/\b(souvenir|collection|archive|museum|inheritance|memorial)\b/, 'collection'],
    [/\b(net|nets)\b/, 'rescue net'],
    [/\b(brake|brakes)\b/, 'emergency brake'],
    [/\b(gate|door|trapdoor)\b/, 'gate'],
    [/\b(barrier|shield)\b/, 'barrier'],
    [/\b(umbrella)\b/, 'liability umbrella'],
    [/\b(coupon|receipt|ticket|sticker)\b/, 'coupon'],
    [/\b(file|files|data|machine|console|scanner|camera|sensor|switch|lever|button|wrench|sign|alarm)\b/, 'control console'],
    [/\b(hospital|organ|medicine|vaccine|oxygen)\b/, 'medical equipment'],
    [/\b(wax philosopher|wax figure)\b/, 'wax figure'],
    [/\b(destroyed|destroy|break|broken|property|object)\b/, 'object']
  ];
  return objects.find(([pattern]) => pattern.test(normalized))?.[1] ?? null;
}

function objectKindFromActionTarget(actionTarget: PlayerLevel['layout']['actionTarget']): string | null {
  switch (actionTarget) {
    case 'control-console':
      return 'control console';
    case 'rail-switch':
      return 'rail switch';
    case 'trapdoor-control':
      return 'trapdoor';
    default:
      return null;
  }
}

function sceneThemeFromLevel(level: PlayerLevel): string {
  const text = `${level.title} ${level.premise} ${level.choices.map((choice) => `${choice.label} ${choice.preview}`).join(' ')}`.toLowerCase();
  if (/butterfl/.test(text)) return 'butterfly-crossing';
  if (/cockroach|cockroaches|roach/.test(text)) return 'cockroach-crossing';
  if (/porcelain|duck/.test(text)) return 'porcelain-ducks';
  if (/workshop|livelihood/.test(text)) return 'workshop';
  if (/\$100|pay|lever|money/.test(text)) return 'lever';
  if (/wax philosopher|wax figure/.test(text)) return 'wax-figure';
  if (/robot|android|automaton/.test(text)) return 'robot';
  if (/name tag|named people|unidentified/.test(text)) return 'name-tags';
  if (/sleep|sleepy|awake/.test(text)) return 'sleepers';
  if (/illness|ill person|terminal|patient|hospital|medical/.test(text)) return 'medical';
  if (/famous hat|celebrity|hat/.test(text)) return 'hat';
  if (/rude passenger|insulted|apologize|rude person/.test(text)) return 'passenger';
  if (/souvenir|collection|archive|museum|inheritance|memorial/.test(text)) return 'collection';
  if (/brake|emergency seal/.test(text)) return 'brake';
  if (/rescue net|net deployed|net packed/.test(text)) return 'net';
  if (/three sidings/.test(text)) return 'sidings';
  if (/bystander badge|badge/.test(text)) return 'badge';
  if (/driver|steer|driver's seat/.test(text)) return 'driver';
  if (/automatic|automation/.test(text)) return 'automatic';
  if (/remote/.test(text)) return 'remote';
  if (/jam|obstruction/.test(text)) return 'jam';
  if (/platform|equal platforms/.test(text)) return 'platforms';
  if (/moving your hand|cancel movement|complete diversion/.test(text)) return 'hand';
  if (/familiar fork|five track|two is still more/.test(text)) return 'crowd';
  if (/siding|alternate track|secondary track|empty platform|fork/.test(text)) return 'siding';
  return level.layout.actionTarget === 'rail-switch' ? 'rail-switch' : 'default';
}

type SceneFamily = 'railway' | 'hospital' | 'footbridge' | 'bureaucratic';

function sceneFamilyFromLevel(level: PlayerLevel): SceneFamily {
  if (level.layout.template === 'footbridge') return 'footbridge';

  const text = `${level.title} ${level.premise} ${level.choices
    .map((choice) => `${choice.label} ${choice.preview}`)
    .join(' ')}`.toLowerCase();
  if (/hospital|surgeon|surgery|operating|patient|organ|medical|illness|medicine|vaccine|oxygen|clinic|doctor/.test(text)) {
    return 'hospital';
  }
  if (level.layout.theme === 'bureaucratic-comedy') return 'bureaucratic';
  return 'railway';
}

function createRailwayBackdrop(): SVGGElement {
  const group = createSvgElement('g', { class: 'scene-railway-backdrop' });
  const background = createSvgElement('rect', {
    x: 0,
    y: 0,
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    fill: 'url(#scene-sky-grad)',
    rx: 8
  });
  const hills = createSvgElement('path', {
    d: 'M 0,260 Q 200,200 450,230 T 800,190 Q 920,210 1000,240 L 1000,320 L 0,320 Z',
    fill: 'url(#scene-hill-grad)'
  });
  group.append(background, hills);
  return group;
}

function createHospitalBackdrop(): SVGGElement {
  const group = createSvgElement('g', { class: 'scene-hospital-backdrop' });
  const wall = createSvgElement('rect', {
    x: 0,
    y: 0,
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    fill: '#eff6ff',
    rx: 8
  });
  const ceiling = createSvgElement('rect', { x: 0, y: 0, width: STAGE_WIDTH, height: 44, fill: '#dbeafe' });
  const ceilingLine = createSvgElement('line', {
    x1: 0,
    y1: 44,
    x2: STAGE_WIDTH,
    y2: 44,
    stroke: '#bfdbfe',
    'stroke-width': 2
  });
  const window = createSvgElement('rect', {
    x: 52,
    y: 74,
    width: 260,
    height: 146,
    rx: 10,
    fill: '#bae6fd',
    stroke: '#7dd3fc',
    'stroke-width': 4
  });
  const windowFrameV = createSvgElement('line', { x1: 182, y1: 74, x2: 182, y2: 220, stroke: '#e0f2fe', 'stroke-width': 5 });
  const windowFrameH = createSvgElement('line', { x1: 52, y1: 147, x2: 312, y2: 147, stroke: '#e0f2fe', 'stroke-width': 5 });
  const skyline = createSvgElement('path', {
    d: 'M 55,190 L 92,162 L 116,180 L 145,140 L 174,174 L 204,150 L 242,182 L 271,158 L 309,184 L 309,220 L 55,220 Z',
    fill: '#7dd3fc',
    opacity: '0.72'
  });
  const floor = createSvgElement('rect', { x: 0, y: 280, width: STAGE_WIDTH, height: 320, fill: '#f8fafc' });
  const floorLine = createSvgElement('path', {
    d: 'M 0,280 L 1000,280 M 0,350 L 1000,350 M 0,420 L 1000,420',
    stroke: '#dbeafe',
    'stroke-width': 2,
    'stroke-dasharray': '18,12'
  });

  const sign = createSvgElement('g', { transform: 'translate(752, 78)', class: 'hospital-sign' });
  const signBoard = createSvgElement('rect', {
    x: 0,
    y: 0,
    width: 178,
    height: 72,
    rx: 10,
    fill: '#ffffff',
    stroke: '#93c5fd',
    'stroke-width': 2
  });
  const crossV = createSvgElement('rect', { x: 18, y: 16, width: 18, height: 40, rx: 3, fill: '#ef4444' });
  const crossH = createSvgElement('rect', { x: 7, y: 27, width: 40, height: 18, rx: 3, fill: '#ef4444' });
  const signText = createSvgElement('text', {
    x: 105,
    y: 31,
    'text-anchor': 'middle',
    fill: '#1e3a8a',
    'font-size': 13,
    'font-weight': '800',
    'font-family': 'system-ui, sans-serif'
  });
  signText.textContent = 'SURGERY WARD';
  const signSubtext = createSvgElement('text', {
    x: 105,
    y: 51,
    'text-anchor': 'middle',
    fill: '#64748b',
    'font-size': 9,
    'font-weight': '700',
    'font-family': 'system-ui, sans-serif'
  });
  signSubtext.textContent = 'PATIENT CARE';
  sign.append(signBoard, crossV, crossH, signText, signSubtext);

  const ceilingLight = (x: number): SVGRectElement =>
    createSvgElement('rect', { x, y: 16, width: 90, height: 8, rx: 4, fill: '#ffffff', stroke: '#93c5fd', 'stroke-width': 1.5 });
  group.append(wall, ceiling, ceilingLine, window, windowFrameV, windowFrameH, skyline, floor, floorLine, sign);
  group.append(ceilingLight(390), ceilingLight(535), ceilingLight(680));
  return group;
}

function createFootbridgeBackdrop(): SVGGElement {
  const group = createSvgElement('g', { class: 'scene-footbridge-backdrop' });
  const sky = createSvgElement('rect', {
    x: 0,
    y: 0,
    width: STAGE_WIDTH,
    height: STAGE_HEIGHT,
    fill: '#bae6fd',
    rx: 8
  });
  const sun = createSvgElement('circle', { cx: 865, cy: 76, r: 28, fill: '#fde68a', opacity: '0.95' });
  const farBank = createSvgElement('path', {
    d: 'M 0,248 Q 170,188 332,232 T 645,225 Q 830,170 1000,226 L 1000,390 L 0,390 Z',
    fill: '#86efac',
    opacity: '0.78'
  });
  const nearBank = createSvgElement('path', {
    d: 'M 0,350 Q 180,322 360,360 T 720,345 Q 880,320 1000,350 L 1000,600 L 0,600 Z',
    fill: '#4ade80',
    opacity: '0.82'
  });
  const river = createSvgElement('path', {
    d: 'M 0,404 Q 180,368 360,406 T 720,400 Q 870,372 1000,406 L 1000,600 L 0,600 Z',
    fill: '#38bdf8',
    opacity: '0.82'
  });
  const riverLines = createSvgElement('path', {
    d: 'M 40,454 Q 180,430 310,456 T 590,450 T 940,454 M 80,510 Q 230,490 390,514 T 760,508 T 980,512',
    fill: 'none',
    stroke: '#e0f2fe',
    'stroke-width': 3,
    opacity: '0.72'
  });
  const sign = createSvgElement('g', { transform: 'translate(72, 84)', class: 'footbridge-sign' });
  const signBoard = createSvgElement('rect', { x: 0, y: 0, width: 166, height: 48, rx: 8, fill: '#fefce8', stroke: '#a16207', 'stroke-width': 2 });
  const signText = createSvgElement('text', {
    x: 83,
    y: 21,
    'text-anchor': 'middle',
    fill: '#854d0e',
    'font-size': 12,
    'font-weight': '800',
    'font-family': 'system-ui, sans-serif'
  });
  signText.textContent = 'FOOTBRIDGE';
  const signSubtext = createSvgElement('text', {
    x: 83,
    y: 37,
    'text-anchor': 'middle',
    fill: '#a16207',
    'font-size': 8,
    'font-weight': '700',
    'font-family': 'system-ui, sans-serif'
  });
  signSubtext.textContent = 'KEEP TO THE WALKWAY';
  sign.append(signBoard, signText, signSubtext);
  group.append(sky, sun, farBank, nearBank, river, riverLines, sign);
  return group;
}

function createSceneBackdrop(family: SceneFamily): SVGGElement {
  if (family === 'hospital') return createHospitalBackdrop();
  if (family === 'footbridge') return createFootbridgeBackdrop();
  return createRailwayBackdrop();
}

function createChoiceTargetGlyph(targetInfo: ChoiceTargetInfo, choiceIndex: number): SVGGElement | null {
  if (targetInfo.type === 'bug') {
    return targetInfo.count > 1
      ? createCreatureGroupGlyph('bug', targetInfo.count)
      : createCockroachGlyph();
  }
  if (targetInfo.type === 'butterfly') {
    return targetInfo.count > 1
      ? createCreatureGroupGlyph('butterfly', targetInfo.count)
      : createButterflyGlyph();
  }
  if (targetInfo.type === 'robot') {
    return targetInfo.count > 1
      ? createCreatureGroupGlyph('robot', targetInfo.count)
      : createRobotGlyph();
  }
  if (targetInfo.type === 'object') return createObjectGlyph(targetInfo.objectKind ?? 'object');
  if (targetInfo.type === 'human') {
    return targetInfo.count > 1
      ? createCreatureGroupGlyph('human', targetInfo.count)
      : createPersonGlyph(choiceIndex === 0 ? '#2563eb' : '#ea580c');
  }
  return null;
}

function routeContext(level: PlayerLevel, idx: number): string {
  const premise = level.premise.toLowerCase();
  const sidingIndex = premise.search(/\b(siding|alternate track|secondary track|other track)\b/);
  if (idx > 0 && sidingIndex >= 0) return premise.slice(Math.max(0, sidingIndex - 55));
  if (idx === 0 && sidingIndex >= 0) return premise.slice(0, sidingIndex);
  return premise;
}

export function parseChoiceTarget(level: PlayerLevel, choice: PlayerChoice, idx: number): ChoiceTargetInfo {
  const choiceText = `${choice.label} ${choice.preview}`;
  const routeText = routeContext(level, idx);
  const combined = `${choiceText} ${routeText}`;

  // Resolve the casualty named in a forecast first. This keeps a safe alternative
  // from borrowing a different route's species or count from the full premise.
  const dyingSpecies = speciesDyingInPreview(choiceText);
  if (dyingSpecies) {
    return { type: dyingSpecies, count: Math.max(1, deathCountFromText(choiceText) ?? countFromText(routeText) ?? 1) };
  }

  const explicitSpecies = speciesFromText(choiceText);
  const explicitCount = countFromText(choiceText);

  // Scene actions point at a mechanism or named object, not at a guessed victim.
  if (choice.control === 'scene-action') {
    const actionObject = objectKindFromText(choiceText) ?? objectKindFromActionTarget(level.layout.actionTarget);
    if (level.layout.actionTarget === 'bridge-person') return { type: 'human', count: explicitCount ?? 1 };
    if (actionObject && !/\b(die|dies|died|death|deaths|killed|killing)\b/i.test(choiceText)) {
      return { type: 'object', count: 0, objectKind: actionObject };
    }
  }

  const routeSpecies = speciesFromText(routeText) ?? explicitSpecies;
  if (/\b(die|dies|died|death|deaths|killed|killing)\b/i.test(choiceText) && routeSpecies) {
    return {
      type: routeSpecies,
      count: Math.max(1, deathCountFromText(choiceText) ?? countFromText(routeText) ?? 1)
    };
  }

  if (explicitSpecies && explicitSpecies !== 'human') {
    return { type: explicitSpecies, count: Math.max(1, explicitCount ?? 1) };
  }

  const objectKind = objectKindFromText(choiceText);
  if (objectKind && !dyingSpecies && choice.control !== 'scene-action') {
    return { type: 'object', count: 0, objectKind };
  }

  const explicitlyNamedSafePerson = explicitSpecies === 'human' && !/\bempty siding\b/i.test(choiceText);
  if (
    !dyingSpecies &&
    choice.control !== 'scene-action' &&
    /\b(empty|unused|nothing else|nobody)\b/i.test(combined) &&
    !explicitlyNamedSafePerson
  ) {
    return { type: 'none', count: 0 };
  }

  if (routeSpecies) {
    return { type: routeSpecies, count: Math.max(1, explicitCount ?? countFromText(routeText) ?? 1) };
  }

  // A person is the safe visual fallback for an authored route that does not
  // name a more specific public sprite. Never invent a group size.
  return { type: 'human', count: Math.max(1, explicitCount ?? countFromText(routeText) ?? 1) };
}

export function createScene(level: PlayerLevel, onSelectChoice?: (id: ChoiceId) => void): SceneComponent {
  const sceneFamily = sceneFamilyFromLevel(level);
  const svg = createSvgElement('svg', {
    viewBox: `0 0 ${STAGE_WIDTH} ${STAGE_HEIGHT}`,
    class: `trolley-stage scene-${sceneFamily}`,
    'data-scene-family': sceneFamily,
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

  // 2. Situation-specific scenic environment. This only uses player-visible
  // level copy and layout metadata; hidden outcomes never influence the scene.
  svg.appendChild(createSceneBackdrop(sceneFamily));

  // A level-specific prop anchors the moral problem in the same world as the
  // tracks. It is built only from player-visible copy, so it cannot disclose
  // hidden outcomes before the player commits.
  const themeProp = createThemePropGlyph(sceneThemeFromLevel(level));
  themeProp.setAttribute('transform', sceneFamily === 'hospital' ? 'translate(170, 134)' : 'translate(150, 112)');
  svg.appendChild(themeProp);
  const themeConnector = createSvgElement('path', {
    class: 'scene-theme-connector',
    d: 'M 150,160 C 230,190 300,238 420,300',
    fill: 'none',
    stroke: '#60a5fa',
    'stroke-width': 2,
    'stroke-dasharray': '5,6',
    opacity: '0.72'
  });
  svg.appendChild(themeConnector);

  // Open-air railway infrastructure belongs to the railway scenes. Hospital
  // corridors and footbridges get their own visual vocabulary instead.
  if (sceneFamily !== 'hospital' && sceneFamily !== 'footbridge') {
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
  }

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
  const approachTies = createSvgElement('path', {
    d: trackDef.approachPath,
    stroke: '#451a03',
    'stroke-width': 16,
    'stroke-dasharray': '4,10',
    fill: 'none'
  });
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
    const choice = level.choices[idx];
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
      class: `branch-rail branch-rail-${idx}`,
      style: 'cursor: pointer;'
    });
    const branchHigh = createSvgElement('path', {
      d: pathD,
      stroke: '#94a3b8',
      'stroke-width': 1.5,
      fill: 'none'
    });

    if (onSelectChoice && choice) {
      branchRail.addEventListener('click', () => onSelectChoice(choice.id));
    }

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
  const switchHitArea = createSvgElement('rect', {
    class: 'scene-switch-hit-area',
    x: -30,
    y: -42,
    width: 60,
    height: 84,
    // A nearly transparent painted fill is more reliable for real SVG mouse
    // hit testing than the keyword `transparent` in Chromium.
    fill: '#ffffff',
    'fill-opacity': '0.001',
    'pointer-events': 'all'
  });
  switchGroup.appendChild(switchHitArea);
  let switchLeverEl = createSwitchLeverGlyph(0);
  switchGroup.appendChild(switchLeverEl);
  const isRouteSwitch = level.layout.actionTarget === 'rail-switch';
  switchGroup.dataset.selectedChoice = level.defaultChoiceId;
  if (isRouteSwitch && onSelectChoice) {
    switchGroup.setAttribute('role', 'button');
    switchGroup.setAttribute('tabindex', '0');
    switchGroup.setAttribute('aria-label', 'Rail switch. Click to change the selected route.');
    switchGroup.style.cursor = 'pointer';
    const chooseNextRoute = () => {
      const currentSlot = level.choices.findIndex((choice) => choice.id === switchGroup.dataset.selectedChoice);
      const nextChoice = level.choices[(currentSlot + 1 + level.choices.length) % level.choices.length];
      if (nextChoice) onSelectChoice(nextChoice.id);
    };
    let pointerSelectionPending = false;
    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      pointerSelectionPending = true;
      event.preventDefault();
      event.stopPropagation();
      chooseNextRoute();
    };
    const handleClick = (event: MouseEvent) => {
      event.stopPropagation();
      if (pointerSelectionPending) {
        pointerSelectionPending = false;
        return;
      }
      chooseNextRoute();
    };
    // Pointer-down handles real mouse/touch input on the SVG glyph itself;
    // click remains as a fallback for keyboard and test-generated activation.
    switchGroup.addEventListener('pointerdown', handlePointerDown);
    switchGroup.addEventListener('click', handleClick);
    switchGroup.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        chooseNextRoute();
      }
    });
  } else if (!isRouteSwitch) {
    switchGroup.setAttribute('display', 'none');
  }
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

  let bridgeActorEl: SVGGElement | null = null;
  let downstreamGroupEl: SVGGElement | null = null;
  let loopTargetEl: SVGGElement | null = null;

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

    const choice0 = level.choices[0];
    const choice1 = level.choices[1];

    // Actor standing on footbridge
    bridgeActorEl = createSvgElement('g', {
      transform: 'translate(550, 152)',
      class: 'bridge-actor',
      style: 'cursor: pointer;'
    });
    bridgeActorEl.appendChild(
      (choice1 ? createChoiceTargetGlyph(parseChoiceTarget(level, choice1, 1), 1) : null) ?? createPersonGlyph('#dc2626')
    );
    if (onSelectChoice && choice1) {
      bridgeActorEl.addEventListener('click', () => onSelectChoice(choice1.id));
    }
    furnitureGroup.appendChild(bridgeActorEl);

    downstreamGroupEl = createSvgElement('g', {
      transform: 'translate(780, 290)',
      class: 'downstream-group',
      style: 'cursor: pointer;'
    });
    downstreamGroupEl.appendChild(
      (choice0 ? createChoiceTargetGlyph(parseChoiceTarget(level, choice0, 0), 0) : null) ?? createPersonGlyph('#2563eb')
    );
    if (onSelectChoice && choice0) {
      downstreamGroupEl.addEventListener('click', () => onSelectChoice(choice0.id));
    }
    furnitureGroup.appendChild(downstreamGroupEl);
  } else if (level.layout.template === 'loop') {
    const choice0 = level.choices[0];
    const choice1 = level.choices[1];

    loopTargetEl = createSvgElement('g', {
      transform: 'translate(650, 155)',
      class: 'loop-target',
      style: 'cursor: pointer;'
    });
    loopTargetEl.appendChild(
      (choice1 ? createChoiceTargetGlyph(parseChoiceTarget(level, choice1, 1), 1) : null) ?? createPersonGlyph('#ea580c')
    );
    if (onSelectChoice && choice1) {
      loopTargetEl.addEventListener('click', () => onSelectChoice(choice1.id));
    }
    furnitureGroup.appendChild(loopTargetEl);

    // Level 42 independent buffer stop
    if (level.id === 42) {
      const bufferG = createSvgElement('g', {
        transform: 'translate(720, 175)',
        class: 'independent-buffer'
      });
      bufferG.appendChild(createBufferStopGlyph());
      furnitureGroup.appendChild(bufferG);
    }

    downstreamGroupEl = createSvgElement('g', {
      transform: 'translate(860, 290)',
      class: 'downstream-group',
      style: 'cursor: pointer;'
    });
    downstreamGroupEl.appendChild(
      (choice0 ? createChoiceTargetGlyph(parseChoiceTarget(level, choice0, 0), 0) : null) ?? createPersonGlyph('#2563eb')
    );
    if (onSelectChoice && choice0) {
      downstreamGroupEl.addEventListener('click', () => onSelectChoice(choice0.id));
    }
    furnitureGroup.appendChild(downstreamGroupEl);
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

  // Signage for themes
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

  // 6. Target glyphs and route preview plaques
  const targetsGroup = createSvgElement('g', { class: 'scene-targets' });
  const choiceVictimList: (SVGGElement | null)[] = [];
  let impactSoundPlayed = false;
  const usesDedicatedTargets = level.layout.template === 'footbridge' || level.layout.template === 'loop';

  level.choices.forEach((choice, idx) => {
    const targetInfo = parseChoiceTarget(level, choice, idx);
    const pt = trackDef.targetPoints[idx] ?? { x: 780, y: 300 };

    const targetG = createSvgElement('g', {
      transform: `translate(${pt.x}, ${pt.y})`,
      class: `target-glyph target-glyph-${choice.id}`,
      style: 'cursor: pointer;'
    });

    let victimEl: SVGGElement | null = null;
    if (level.layout.fogOverlay) {
      targetG.appendChild(createQuestionGlyph());
    } else {
      victimEl = createChoiceTargetGlyph(targetInfo, idx);
      if (victimEl) {
        targetG.appendChild(victimEl);
      }
    }
    choiceVictimList.push(victimEl);

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
      targetG.addEventListener('click', () => onSelectChoice(choice.id));
    }

    if (!usesDedicatedTargets && victimEl) {
      targetsGroup.appendChild(targetG);
    }
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
      const activeChoiceId = level.choices[activeSlot]?.id ?? level.defaultChoiceId;
      switchGroup.dataset.selectedChoice = activeChoiceId;
      if (isRouteSwitch && onSelectChoice) {
        switchGroup.setAttribute(
          'aria-label',
          `Rail switch. Route ${activeChoiceId} selected. Click to change the selected route.`
        );
      }

      // Update switch lever rotation
      switchGroup.innerHTML = '';
      switchLeverEl = createSwitchLeverGlyph(activeSlot);
      switchGroup.appendChild(switchHitArea);
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

      // Trolley Pose & Resolution Animations
      if (session.committed !== null) {
        const committedSlot = level.choices.findIndex((c) => c.id === session.committed?.choiceId);
        const resolvedSlot = committedSlot >= 0 ? committedSlot : 0;
        const v = Math.min(1, session.resolutionElapsedMs / 2400);

        if (reducedMotion) {
          const pose = sampleBranchPosition(level.layout.template, resolvedSlot, 1);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else {
          const pose = sampleBranchPosition(level.layout.template, resolvedSlot, v);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);

          // Animate console pulse
          if (level.layout.template.startsWith('action') && v < 0.8) {
            pulseRing.setAttribute('r', String(8 + v * 35));
            pulseRing.setAttribute('opacity', String(1 - v * 1.2));
          }
        }

        // Quiet, non-graphic consequence treatment. Victims fade in place;
        // there is no blood, flattening, or collision close-up.
        const isImpacted = reducedMotion || v >= 0.55;
        if (isImpacted) {
          if (!impactSoundPlayed) {
            impactSoundPlayed = true;
            sound.playImpact();
          }
          choiceVictimList.forEach((vEl, vIdx) => {
            if (vIdx === resolvedSlot && vEl) {
              vEl.style.opacity = reducedMotion ? '0.35' : '0.18';
              vEl.style.filter = 'grayscale(0.85)';
            }
          });

          // Footbridge impact
          if (level.layout.template === 'footbridge') {
            if (resolvedSlot === 1) {
              impactCloud.setAttribute('transform', 'translate(550, 270) scale(1)');
              impactCloud.setAttribute('opacity', '1');
              if (bridgeActorEl) {
                bridgeActorEl.style.opacity = '0.18';
                bridgeActorEl.style.filter = 'grayscale(0.85)';
              }
            } else {
              if (downstreamGroupEl) {
                downstreamGroupEl.style.opacity = '0.18';
                downstreamGroupEl.style.filter = 'grayscale(0.85)';
              }
            }
          }

          // Loop impact
          if (level.layout.template === 'loop') {
            if (resolvedSlot === 1) {
              if (loopTargetEl) {
                loopTargetEl.style.opacity = '0.18';
                loopTargetEl.style.filter = 'grayscale(0.85)';
              }
            } else {
              if (downstreamGroupEl) {
                downstreamGroupEl.style.opacity = '0.18';
                downstreamGroupEl.style.filter = 'grayscale(0.85)';
              }
            }
          }
        }
      } else {
        // Reset impact state if uncommitted/running
        impactSoundPlayed = false;
        choiceVictimList.forEach((vEl) => {
          if (vEl) {
            vEl.style.opacity = '';
            vEl.style.filter = '';
          }
        });
        if (bridgeActorEl) {
          bridgeActorEl.style.opacity = '';
          bridgeActorEl.style.filter = '';
        }
        if (loopTargetEl) {
          loopTargetEl.style.opacity = '';
          loopTargetEl.style.filter = '';
        }
        if (downstreamGroupEl) {
          downstreamGroupEl.style.opacity = '';
          downstreamGroupEl.style.filter = '';
        }
        impactCloud.setAttribute('opacity', '0');
        impactCloud.setAttribute('transform', 'translate(550, 270) scale(0)');

        if (reducedMotion) {
          const fraction = session.deadlineMs > 0 ? session.activeElapsedMs / session.deadlineMs : 0;
          const approachSpeed =
            APPROACH_TRAVEL_SPEED_MULTIPLIER *
            (session.selectionOrigin === 'player' ? PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER : 1);
          const pose = samplePreCommitPosition(level.layout.template, activeSlot, fraction, approachSpeed);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else if (session.timingMode === 'untimed') {
          const loopSpeed = session.selectionOrigin === 'player' ? PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER : 1;
          const loopT = ((session.activeElapsedMs * loopSpeed) % 6000) / 6000;
          const pose = sampleUntimedLoopPosition(loopT);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        } else {
          const u = session.deadlineMs > 0 ? Math.min(1, session.activeElapsedMs / session.deadlineMs) : 0;
          const approachSpeed =
            APPROACH_TRAVEL_SPEED_MULTIPLIER *
            (session.selectionOrigin === 'player' ? PLAYER_SELECTION_TRAVEL_SPEED_MULTIPLIER : 1);
          const pose = samplePreCommitPosition(level.layout.template, activeSlot, u, approachSpeed);
          setTrolleyPose(pose.x, pose.y, pose.angle ?? 0);
        }
      }
    },
    destroy(): void {
      svg.remove();
    }
  };
}
