const SVG_NS = 'http://www.w3.org/2000/svg';

export function createSvgElement<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number> = {}
): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [key, val] of Object.entries(attrs)) {
    el.setAttribute(key, String(val));
  }
  return el;
}

/**
 * Rich, detailed vintage trolley with cowcatcher, headlights, pole, and passengers
 */
export function createTrolleyGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-trolley' });

  // Cowcatcher / Pilot on front
  const cowcatcher = createSvgElement('polygon', {
    points: '32,14 46,24 32,24',
    fill: '#27272a',
    stroke: '#18181b',
    'stroke-width': 1.5
  });
  const cowcatcherGrill = createSvgElement('path', {
    d: 'M 36,18 L 36,24 M 40,20 L 40,24',
    stroke: '#71717a',
    'stroke-width': 1.5
  });
  g.appendChild(cowcatcher);
  g.appendChild(cowcatcherGrill);

  // Wheel truck base / chassis
  const chassis = createSvgElement('rect', {
    x: -36,
    y: 12,
    width: 72,
    height: 8,
    rx: 2,
    fill: '#18181b',
    stroke: '#09090b',
    'stroke-width': 1.5
  });
  g.appendChild(chassis);

  // Trolley Main Body
  const body = createSvgElement('rect', {
    x: -34,
    y: -22,
    width: 68,
    height: 36,
    rx: 5,
    fill: '#b91c1c', // Crimson red
    stroke: '#7f1d1d',
    'stroke-width': 2
  });
  g.appendChild(body);

  // Decorative gold body pinstripe
  const stripe = createSvgElement('line', {
    x1: -33,
    y1: -2,
    x2: 33,
    y2: -2,
    stroke: '#fbbf24',
    'stroke-width': 1.5
  });
  g.appendChild(stripe);

  // Cream color clerestory roof
  const roofBase = createSvgElement('path', {
    d: 'M -38,-22 Q 0,-30 38,-22 L 36,-25 Q 0,-33 -36,-25 Z',
    fill: '#fef3c7',
    stroke: '#d97706',
    'stroke-width': 1.5
  });
  g.appendChild(roofBase);

  // Roof Trolley Pole (Catenary contact)
  const trolleyPole = createSvgElement('path', {
    d: 'M -10,-28 L -28,-48 L -22,-49',
    fill: 'none',
    stroke: '#52525b',
    'stroke-width': 2.5,
    'stroke-linecap': 'round'
  });
  const poleWheel = createSvgElement('circle', {
    cx: -28,
    cy: -48,
    r: 3,
    fill: '#e4e4e7',
    stroke: '#3f3f46',
    'stroke-width': 1
  });
  g.appendChild(trolleyPole);
  g.appendChild(poleWheel);

  // Brass roof bell
  const bell = createSvgElement('path', {
    d: 'M 10,-27 Q 14,-32 18,-27 Z',
    fill: '#f59e0b',
    stroke: '#b45309',
    'stroke-width': 1
  });
  g.appendChild(bell);

  // Windows with warm glow
  const windowXs = [-24, -8, 8, 22];
  windowXs.forEach((wx, i) => {
    const isFront = i === windowXs.length - 1;
    const win = createSvgElement('rect', {
      x: wx - 5,
      y: -18,
      width: 11,
      height: 14,
      rx: 2,
      fill: isFront ? '#fef08a' : '#fef9c3',
      stroke: '#7f1d1d',
      'stroke-width': 1.2
    });
    g.appendChild(win);

    if (isFront) {
      // Driver silhouette in front window
      const driver = createSvgElement('circle', {
        cx: wx,
        cy: -10,
        r: 3,
        fill: '#3f3f46'
      });
      g.appendChild(driver);
    }
  });

  // Front glowing headlight beam
  const lightBeam = createSvgElement('polygon', {
    points: '34,-4 130,-28 130,22 34,4',
    fill: 'rgba(254, 240, 138, 0.25)',
    style: 'pointer-events: none;'
  });
  g.appendChild(lightBeam);

  const headlightHousing = createSvgElement('path', {
    d: 'M 34,-5 L 38,-3 L 38,3 L 34,5 Z',
    fill: '#f59e0b',
    stroke: '#b45309',
    'stroke-width': 1.5
  });
  const headlightBulb = createSvgElement('circle', {
    cx: 37,
    cy: 0,
    r: 3,
    fill: '#ffffff'
  });
  g.appendChild(headlightHousing);
  g.appendChild(headlightBulb);

  // Steel wheels with hubcaps
  for (const cx of [-22, 20]) {
    const wheelRim = createSvgElement('circle', {
      cx,
      cy: 21,
      r: 8,
      fill: '#27272a',
      stroke: '#71717a',
      'stroke-width': 2
    });
    const wheelHub = createSvgElement('circle', {
      cx,
      cy: 21,
      r: 3,
      fill: '#a1a1aa'
    });
    g.appendChild(wheelRim);
    g.appendChild(wheelHub);
  }

  return g;
}

/**
 * Expressive illustrated character
 */
export function createPersonGlyph(color = '#2563eb'): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-person' });

  // Shadow on track
  const shadow = createSvgElement('ellipse', {
    cx: 0,
    cy: 16,
    rx: 12,
    ry: 4,
    fill: 'rgba(0,0,0,0.18)'
  });
  g.appendChild(shadow);

  // Legs & shoes
  const legs = createSvgElement('path', {
    d: 'M -4,6 L -4,15 L -7,16 M 4,6 L 4,15 L 7,16',
    stroke: '#1e293b',
    'stroke-width': 3,
    'stroke-linecap': 'round',
    fill: 'none'
  });
  g.appendChild(legs);

  // Torso / Jacket
  const body = createSvgElement('path', {
    d: 'M -8,6 C -10,-4 -6,-8 0,-8 C 6,-8 10,-4 8,6 Z',
    fill: color,
    stroke: '#0f172a',
    'stroke-width': 1.5
  });
  g.appendChild(body);

  // Collar / tie
  const collar = createSvgElement('path', {
    d: 'M -3,-7 L 0,-2 L 3,-7',
    fill: 'none',
    stroke: '#ffffff',
    'stroke-width': 1.2
  });
  g.appendChild(collar);

  // Head with hair/hat
  const head = createSvgElement('circle', {
    cx: 0,
    cy: -16,
    r: 8,
    fill: '#fed7aa', // skin tone
    stroke: '#ea580c',
    'stroke-width': 1.2
  });
  g.appendChild(head);

  const hair = createSvgElement('path', {
    d: 'M -8,-17 C -8,-24 8,-24 8,-17 C 5,-22 -5,-22 -8,-17 Z',
    fill: '#451a03'
  });
  g.appendChild(hair);

  return g;
}

/**
 * Detailed cartoon cockroach
 */
export function createCockroachGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-cockroach' });

  const shadow = createSvgElement('ellipse', {
    cx: 0,
    cy: 6,
    rx: 14,
    ry: 6,
    fill: 'rgba(0,0,0,0.15)'
  });
  g.appendChild(shadow);

  // Arched antennae
  const leftAntenna = createSvgElement('path', {
    d: 'M -4,-12 C -14,-24 -18,-26 -24,-28',
    fill: 'none',
    stroke: '#451a03',
    'stroke-width': 1.5,
    'stroke-linecap': 'round'
  });
  const rightAntenna = createSvgElement('path', {
    d: 'M 4,-12 C 14,-24 18,-26 24,-28',
    fill: 'none',
    stroke: '#451a03',
    'stroke-width': 1.5,
    'stroke-linecap': 'round'
  });
  g.appendChild(leftAntenna);
  g.appendChild(rightAntenna);

  // Jointed legs
  for (const ly of [-6, 1, 8]) {
    const legL = createSvgElement('path', {
      d: `M -8,${ly} L -16,${ly - 5} L -22,${ly + 4}`,
      fill: 'none',
      stroke: '#451a03',
      'stroke-width': 1.8,
      'stroke-linecap': 'round'
    });
    const legR = createSvgElement('path', {
      d: `M 8,${ly} L 16,${ly - 5} L 22,${ly + 4}`,
      fill: 'none',
      stroke: '#451a03',
      'stroke-width': 1.8,
      'stroke-linecap': 'round'
    });
    g.appendChild(legL);
    g.appendChild(legR);
  }

  // Chitin shell with sheen
  const body = createSvgElement('ellipse', {
    cx: 0,
    cy: 0,
    rx: 11,
    ry: 16,
    fill: '#78350f',
    stroke: '#451a03',
    'stroke-width': 1.5
  });
  const wingSplit = createSvgElement('line', {
    x1: 0,
    y1: -8,
    x2: 0,
    y2: 15,
    stroke: '#451a03',
    'stroke-width': 1.5
  });
  const sheen = createSvgElement('ellipse', {
    cx: -4,
    cy: -2,
    rx: 3,
    ry: 8,
    fill: 'rgba(255,255,255,0.22)',
    transform: 'rotate(-15, -4, -2)'
  });

  g.appendChild(body);
  g.appendChild(wingSplit);
  g.appendChild(sheen);

  return g;
}

/**
 * Stained-glass monarch-style butterfly
 */
export function createButterflyGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-butterfly' });

  const shadow = createSvgElement('ellipse', {
    cx: 0,
    cy: 8,
    rx: 12,
    ry: 4,
    fill: 'rgba(0,0,0,0.12)'
  });
  g.appendChild(shadow);

  // Wings with golden pattern
  const wingL = createSvgElement('path', {
    d: 'M 0,-4 C -18,-28 -28,-10 -16,8 C -24,20 -12,24 0,6 Z',
    fill: '#f59e0b',
    stroke: '#78350f',
    'stroke-width': 2
  });
  const wingLPattern = createSvgElement('path', {
    d: 'M -6,-6 C -14,-18 -18,-8 -12,2',
    fill: 'none',
    stroke: '#fef3c7',
    'stroke-width': 1.5
  });

  const wingR = createSvgElement('path', {
    d: 'M 0,-4 C 18,-28 28,-10 16,8 C 24,20 12,24 0,6 Z',
    fill: '#f59e0b',
    stroke: '#78350f',
    'stroke-width': 2
  });
  const wingRPattern = createSvgElement('path', {
    d: 'M 6,-6 C 14,-18 18,-8 12,2',
    fill: 'none',
    stroke: '#fef3c7',
    'stroke-width': 1.5
  });

  g.appendChild(wingL);
  g.appendChild(wingLPattern);
  g.appendChild(wingR);
  g.appendChild(wingRPattern);

  // Slender body & antennae
  const body = createSvgElement('ellipse', {
    cx: 0,
    cy: 2,
    rx: 3,
    ry: 13,
    fill: '#1f2937',
    stroke: '#111827',
    'stroke-width': 1
  });
  const antL = createSvgElement('path', {
    d: 'M -1,-10 Q -6,-18 -10,-19',
    fill: 'none',
    stroke: '#111827',
    'stroke-width': 1.2
  });
  const antR = createSvgElement('path', {
    d: 'M 1,-10 Q 6,-18 10,-19',
    fill: 'none',
    stroke: '#111827',
    'stroke-width': 1.2
  });

  g.appendChild(body);
  g.appendChild(antL);
  g.appendChild(antR);

  return g;
}

type GroupGlyphKind = 'human' | 'bug' | 'butterfly' | 'robot';

interface GroupPlacement {
  x: number;
  y: number;
  scale: number;
}

function groupPlacements(count: number, kind: GroupGlyphKind): GroupPlacement[] {
  const safeCount = Math.max(2, Math.floor(count));

  // Keep small groups readable and unmistakably countable. Larger insect
  // groups use a compact grid so twenty insects still means twenty insects,
  // rather than one representative sprite plus an unexplained multiplier.
  if (safeCount === 2) return [{ x: -18, y: 2, scale: 0.82 }, { x: 18, y: 2, scale: 0.82 }];
  if (safeCount === 3) {
    return [
      { x: -24, y: 4, scale: 0.76 },
      { x: 0, y: -2, scale: 0.86 },
      { x: 24, y: 4, scale: 0.76 }
    ];
  }
  if (safeCount === 4) {
    return [
      { x: -22, y: -1, scale: 0.7 },
      { x: 22, y: -1, scale: 0.7 },
      { x: -11, y: 12, scale: 0.7 },
      { x: 11, y: 12, scale: 0.7 }
    ];
  }
  if (safeCount === 5) {
    return [
      { x: -24, y: 2, scale: 0.66 },
      { x: 0, y: -5, scale: 0.78 },
      { x: 24, y: 2, scale: 0.66 },
      { x: -12, y: 14, scale: 0.7 },
      { x: 12, y: 14, scale: 0.7 }
    ];
  }

  const columns = Math.min(5, Math.ceil(Math.sqrt(safeCount)));
  const rows = Math.ceil(safeCount / columns);
  const spacing = kind === 'human' ? 25 : 19;
  const scale = kind === 'human' ? 0.52 : 0.42;
  const placements: GroupPlacement[] = [];
  for (let index = 0; index < safeCount; index += 1) {
    const row = Math.floor(index / columns);
    const col = index % columns;
    const rowCount = Math.min(columns, safeCount - row * columns);
    placements.push({
      x: (col - (rowCount - 1) / 2) * spacing,
      y: (row - (rows - 1) / 2) * (kind === 'human' ? 24 : 18),
      scale
    });
  }
  return placements;
}

function makeGroupChild(kind: GroupGlyphKind, index: number): SVGGElement {
  if (kind === 'bug') return createCockroachGlyph();
  if (kind === 'butterfly') return createButterflyGlyph();
  if (kind === 'robot') return createRobotGlyph();
  const colors = ['#0284c7', '#0ea5e9', '#2563eb', '#1d4ed8', '#1e40af'];
  return createPersonGlyph(colors[index % colors.length]);
}

/**
 * Exact-count group glyph. Every visible child represents one member of the
 * group; the badge reinforces the count for larger scenes without replacing
 * the individual sprites.
 */
export function createCreatureGroupGlyph(kind: GroupGlyphKind, count: number): SVGGElement {
  const safeCount = Math.max(2, Math.floor(count));
  const g = createSvgElement('g', {
    class: `glyph-group glyph-group-${kind}`,
    'data-count': safeCount,
    'aria-label': `${safeCount} ${kind === 'human' ? 'people' : `${kind}s`}`
  });

  const shadow = createSvgElement('ellipse', {
    cx: 0,
    cy: safeCount > 5 ? 31 : 25,
    rx: kind === 'human' ? Math.min(42, 18 + safeCount * 3) : Math.min(44, 18 + safeCount * 2),
    ry: 5,
    fill: 'rgba(0,0,0,0.2)'
  });
  g.appendChild(shadow);

  groupPlacements(safeCount, kind).forEach((placement, index) => {
    const child = makeGroupChild(kind, index);
    child.setAttribute('transform', `translate(${placement.x}, ${placement.y}) scale(${placement.scale})`);
    g.appendChild(child);
  });

  const badge = createSvgElement('rect', {
    x: -24,
    y: 31,
    width: 48,
    height: 20,
    rx: 5,
    fill: '#0f172a',
    stroke: kind === 'human' ? '#38bdf8' : '#fbbf24',
    'stroke-width': 1.5,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))'
  });
  const text = createSvgElement('text', {
    x: 0,
    y: 45,
    'text-anchor': 'middle',
    fill: kind === 'human' ? '#38bdf8' : '#fbbf24',
    'font-size': '13',
    'font-weight': '800',
    'font-family': 'system-ui, sans-serif'
  });
  text.textContent = `×${safeCount}`;
  g.append(badge, text);
  return g;
}

/** Backwards-compatible human group factory used by dedicated templates. */
export function createGroupGlyph(count: number): SVGGElement {
  return createCreatureGroupGlyph('human', count);
}

/**
 * Robot destruction glyph for property/non-biological loss scenarios
 */
export function createRobotGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-robot' });

  // Head
  const head = createSvgElement('rect', {
    x: -10,
    y: -24,
    width: 20,
    height: 16,
    rx: 3,
    fill: '#94a3b8',
    stroke: '#475569',
    'stroke-width': 1.5
  });
  // Antenna
  const ant = createSvgElement('line', {
    x1: 0,
    y1: -24,
    x2: 0,
    y2: -32,
    stroke: '#475569',
    'stroke-width': 2
  });
  const antKnob = createSvgElement('circle', {
    cx: 0,
    cy: -32,
    r: 3,
    fill: '#ef4444'
  });
  // Eyes
  const eyeL = createSvgElement('rect', { x: -6, y: -20, width: 4, height: 4, fill: '#38bdf8' });
  const eyeR = createSvgElement('rect', { x: 2, y: -20, width: 4, height: 4, fill: '#38bdf8' });

  // Torso
  const body = createSvgElement('rect', {
    x: -12,
    y: -6,
    width: 24,
    height: 22,
    rx: 4,
    fill: '#64748b',
    stroke: '#334155',
    'stroke-width': 1.5
  });

  // Chest meter
  const meter = createSvgElement('rect', {
    x: -7,
    y: -2,
    width: 14,
    height: 8,
    rx: 2,
    fill: '#1e293b'
  });
  const needle = createSvgElement('line', {
    x1: 0,
    y1: 5,
    x2: 3,
    y2: 0,
    stroke: '#22c55e',
    'stroke-width': 1.5
  });

  g.appendChild(head);
  g.appendChild(ant);
  g.appendChild(antKnob);
  g.appendChild(eyeL);
  g.appendChild(eyeR);
  g.appendChild(body);
  g.appendChild(meter);
  g.appendChild(needle);

  return g;
}

/**
 * Small, text-labelled prop glyphs for non-human route targets. These keep
 * action levels visually specific without pretending that an object is a
 * person or a biological casualty.
 */
export function createObjectGlyph(kind = 'object'): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-object' });
  const card = createSvgElement('rect', {
    x: -46,
    y: -30,
    width: 92,
    height: 58,
    rx: 9,
    fill: '#fef3c7',
    stroke: '#b45309',
    'stroke-width': 2
  });
  const icon = createSvgElement('circle', {
    cx: 0,
    cy: -7,
    r: 12,
    fill: '#f59e0b',
    stroke: '#92400e',
    'stroke-width': 1.5
  });
  const label = createSvgElement('text', {
    x: 0,
    y: 19,
    'text-anchor': 'middle',
    fill: '#78350f',
    'font-size': '9',
    'font-weight': '700',
    'font-family': 'system-ui, sans-serif'
  });
  label.textContent = kind.length > 17 ? `${kind.slice(0, 16)}…` : kind;
  g.append(card, icon, label);
  return g;
}

/**
 * A small scene prop that makes the authored thought experiment legible at a
 * glance. The prop is intentionally separate from the casualty glyphs: it
 * gives each level a visual subject without leaking outcome-only information.
 */
export function createThemePropGlyph(theme: string): SVGGElement {
  const g = createSvgElement('g', {
    class: 'scene-theme-prop',
    'data-theme': theme
  });
  const panel = createSvgElement('rect', {
    x: -76,
    y: -48,
    width: 152,
    height: 96,
    rx: 12,
    fill: '#ffffff',
    'fill-opacity': '0.88',
    stroke: '#bfdbfe',
    'stroke-width': 2,
    filter: 'drop-shadow(0 4px 8px rgba(15,23,42,0.12))'
  });
  const railLine = createSvgElement('path', {
    d: 'M -62,30 L 62,30',
    stroke: '#94a3b8',
    'stroke-width': 3,
    'stroke-dasharray': '4,5'
  });
  g.append(panel, railLine);

  const label = createSvgElement('text', {
    x: 0,
    y: 42,
    'text-anchor': 'middle',
    fill: '#334155',
    'font-size': '8',
    'font-weight': '800',
    'letter-spacing': '0.6',
    'font-family': 'system-ui, sans-serif'
  });

  const addLabel = (text: string): void => {
    label.textContent = text.toUpperCase();
    g.appendChild(label);
  };
  const addTag = (text: string, fill = '#0f172a'): void => {
    const tag = createSvgElement('text', {
      x: 0,
      y: -28,
      'text-anchor': 'middle',
      fill,
      'font-size': '9',
      'font-weight': '700',
      'font-family': 'system-ui, sans-serif'
    });
    tag.textContent = text;
    g.appendChild(tag);
  };

  switch (theme) {
    case 'cockroach-crossing': {
      const sign = createSvgElement('circle', { cx: 0, cy: -2, r: 19, fill: '#78350f', stroke: '#451a03', 'stroke-width': 2 });
      const bug = createCockroachGlyph();
      bug.setAttribute('transform', 'translate(0, -2) scale(0.7)');
      g.append(sign, bug);
      addTag('LIVING CROSSING', '#78350f');
      addLabel('COCKROACHES');
      break;
    }
    case 'butterfly-crossing': {
      const butterfly = createButterflyGlyph();
      butterfly.setAttribute('transform', 'translate(0, 0) scale(0.72)');
      g.appendChild(butterfly);
      addTag('WILDLIFE CROSSING', '#9a3412');
      addLabel('BUTTERFLY');
      break;
    }
    case 'porcelain-ducks': {
      [-24, 0, 24].forEach((x, index) => {
        const duck = createSvgElement('g', { transform: `translate(${x}, ${index === 1 ? -4 : 1}) scale(0.55)` });
        duck.append(
          createSvgElement('ellipse', { cx: 0, cy: 10, rx: 18, ry: 12, fill: '#fef3c7', stroke: '#b45309', 'stroke-width': 2 }),
          createSvgElement('circle', { cx: -8, cy: -4, r: 10, fill: '#fde68a', stroke: '#b45309', 'stroke-width': 2 }),
          createSvgElement('path', { d: 'M -17,-4 L -26,0 L -17,3 Z', fill: '#f97316', stroke: '#9a3412', 'stroke-width': 1.5 }),
          createSvgElement('circle', { cx: -10, cy: -7, r: 1.5, fill: '#0f172a' })
        );
        g.appendChild(duck);
      });
      addTag('FRAGILE COLLECTION', '#92400e');
      addLabel('PORCELAIN DUCKS');
      break;
    }
    case 'workshop': {
      const workbench = createSvgElement('rect', { x: -38, y: 4, width: 76, height: 13, rx: 2, fill: '#92400e', stroke: '#451a03', 'stroke-width': 2 });
      const legL = createSvgElement('line', { x1: -28, y1: 17, x2: -34, y2: 30, stroke: '#451a03', 'stroke-width': 4 });
      const legR = createSvgElement('line', { x1: 28, y1: 17, x2: 34, y2: 30, stroke: '#451a03', 'stroke-width': 4 });
      const gear = createSvgElement('circle', { cx: -10, cy: -12, r: 13, fill: '#cbd5e1', stroke: '#475569', 'stroke-width': 3, 'stroke-dasharray': '4,3' });
      const hammer = createSvgElement('path', { d: 'M 15,-25 L 15,5 M 5,-25 L 25,-25', stroke: '#475569', 'stroke-width': 5, 'stroke-linecap': 'round' });
      g.append(workbench, legL, legR, gear, hammer);
      addTag('LIVELIHOOD AT RISK', '#92400e');
      addLabel('WORKSHOP');
      break;
    }
    case 'lever': {
      const console = createSvgElement('rect', { x: -34, y: -10, width: 68, height: 34, rx: 6, fill: '#1e293b', stroke: '#38bdf8', 'stroke-width': 2 });
      const lever = createSvgElement('path', { d: 'M 0,10 L 18,-25', stroke: '#f8fafc', 'stroke-width': 5, 'stroke-linecap': 'round' });
      const knob = createSvgElement('circle', { cx: 18, cy: -25, r: 7, fill: '#22c55e', stroke: '#bbf7d0', 'stroke-width': 2 });
      const display = createSvgElement('text', { x: -20, y: 11, fill: '#fef08a', 'font-size': '11', 'font-weight': '800', 'font-family': 'monospace' });
      display.textContent = '$100';
      g.append(console, lever, knob, display);
      addTag('DECISION CONSOLE', '#0369a1');
      addLabel('PAY OR HOLD');
      break;
    }
    case 'wax-figure': {
      const head = createSvgElement('circle', { cx: 0, cy: -17, r: 12, fill: '#f8d7b5', stroke: '#92400e', 'stroke-width': 2 });
      const torso = createSvgElement('path', { d: 'M -20,25 Q -18,-5 0,-4 Q 18,-5 20,25 Z', fill: '#f59e0b', stroke: '#92400e', 'stroke-width': 2 });
      const plaque = createSvgElement('rect', { x: -28, y: 5, width: 56, height: 12, rx: 2, fill: '#fef3c7', stroke: '#b45309', 'stroke-width': 1 });
      g.append(head, torso, plaque);
      addTag('MUSEUM DISPLAY', '#92400e');
      addLabel('WAX FIGURE');
      break;
    }
    case 'robot': {
      const robot = createRobotGlyph();
      robot.setAttribute('transform', 'translate(0, 0) scale(0.9)');
      const circuit = createSvgElement('path', { d: 'M -46,-8 L -30,-8 L -24,-18 M 46,-8 L 30,-8 L 24,-18', fill: 'none', stroke: '#38bdf8', 'stroke-width': 2 });
      g.append(circuit, robot);
      addTag('AUTOMATON DECLARATION', '#0369a1');
      addLabel('ROBOT');
      break;
    }
    case 'name-tags': {
      ['A', 'B', 'C'].forEach((letter, index) => {
        const tag = createSvgElement('rect', { x: -38 + index * 26, y: -13 + (index % 2) * 8, width: 22, height: 28, rx: 3, fill: index === 1 ? '#dbeafe' : '#fef3c7', stroke: '#64748b', 'stroke-width': 1.5 });
        const tagText = createSvgElement('text', { x: -27 + index * 26, y: 5 + (index % 2) * 8, 'text-anchor': 'middle', fill: '#1e3a8a', 'font-size': '12', 'font-weight': '800', 'font-family': 'system-ui, sans-serif' });
        tagText.textContent = letter;
        g.append(tag, tagText);
      });
      addTag('IDENTITY COUNTS', '#1d4ed8');
      addLabel('NAME TAGS');
      break;
    }
    case 'sleepers': {
      const bed = createSvgElement('rect', { x: -42, y: 4, width: 84, height: 20, rx: 4, fill: '#334155', stroke: '#0f172a', 'stroke-width': 2 });
      const pillow = createSvgElement('ellipse', { cx: -23, cy: 0, rx: 14, ry: 8, fill: '#e0f2fe', stroke: '#64748b', 'stroke-width': 1.5 });
      const z = createSvgElement('text', { x: 25, y: -11, fill: '#2563eb', 'font-size': '15', 'font-weight': '800', 'font-family': 'system-ui, sans-serif' });
      z.textContent = 'Z Z';
      g.append(bed, pillow, z);
      addTag('RESTING TRACK', '#1d4ed8');
      addLabel('SLEEPERS');
      break;
    }
    case 'medical': {
      const monitor = createSvgElement('rect', { x: -35, y: -22, width: 70, height: 46, rx: 6, fill: '#f8fafc', stroke: '#64748b', 'stroke-width': 2 });
      const screen = createSvgElement('rect', { x: -25, y: -13, width: 50, height: 18, rx: 2, fill: '#dcfce7', stroke: '#16a34a', 'stroke-width': 1.5 });
      const pulse = createSvgElement('path', { d: 'M -20,-4 L -11,-4 L -6,-11 L 1,1 L 7,-7 L 19,-7', fill: 'none', stroke: '#16a34a', 'stroke-width': 2 });
      const crossV = createSvgElement('rect', { x: -4, y: 9, width: 8, height: 13, fill: '#ef4444' });
      const crossH = createSvgElement('rect', { x: -10, y: 13, width: 20, height: 6, fill: '#ef4444' });
      g.append(monitor, screen, pulse, crossV, crossH);
      addTag('HEALTH STATUS', '#15803d');
      addLabel('MEDICAL CLAIM');
      break;
    }
    case 'hat': {
      const brim = createSvgElement('ellipse', { cx: 0, cy: 13, rx: 39, ry: 8, fill: '#1e3a8a', stroke: '#172554', 'stroke-width': 2 });
      const crown = createSvgElement('path', { d: 'M -25,10 L -19,-24 Q 0,-34 19,-24 L 25,10 Z', fill: '#2563eb', stroke: '#172554', 'stroke-width': 2 });
      const band = createSvgElement('path', { d: 'M -22,-2 Q 0,4 22,-2', fill: 'none', stroke: '#facc15', 'stroke-width': 4 });
      g.append(brim, crown, band);
      addTag('STATUS SYMBOL', '#1d4ed8');
      addLabel('FAMOUS HAT');
      break;
    }
    case 'passenger': {
      const bubble = createSvgElement('path', { d: 'M -46,-25 Q -46,-41 -30,-41 L 34,-41 Q 50,-41 50,-25 L 50,-4 Q 50,10 34,10 L 12,10 L 0,23 L 1,10 L -30,10 Q -46,10 -46,-4 Z', fill: '#ffffff', stroke: '#64748b', 'stroke-width': 2 });
      const dots = createSvgElement('text', { x: 2, y: -12, 'text-anchor': 'middle', fill: '#475569', 'font-size': '18', 'font-weight': '900', 'font-family': 'system-ui, sans-serif' });
      dots.textContent = '!?';
      g.append(bubble, dots);
      addTag('PERSONAL CONFLICT', '#475569');
      addLabel('PASSENGER');
      break;
    }
    case 'platforms': {
      const platformA = createSvgElement('rect', { x: -48, y: -1, width: 38, height: 20, rx: 3, fill: '#dbeafe', stroke: '#2563eb', 'stroke-width': 2 });
      const platformB = createSvgElement('rect', { x: 10, y: -1, width: 38, height: 20, rx: 3, fill: '#dcfce7', stroke: '#16a34a', 'stroke-width': 2 });
      const signA = createSvgElement('text', { x: -29, y: 13, 'text-anchor': 'middle', fill: '#1d4ed8', 'font-size': '14', 'font-weight': '900', 'font-family': 'system-ui, sans-serif' });
      signA.textContent = 'A';
      const signB = createSvgElement('text', { x: 29, y: 13, 'text-anchor': 'middle', fill: '#15803d', 'font-size': '14', 'font-weight': '900', 'font-family': 'system-ui, sans-serif' });
      signB.textContent = 'B';
      const balance = createSvgElement('path', { d: 'M 0,-28 L 0,23 M -27,-24 L 27,-24 M -27,-24 L -39,-6 M 27,-24 L 39,-6', stroke: '#475569', 'stroke-width': 3, 'stroke-linecap': 'round' });
      g.append(platformA, platformB, signA, signB, balance);
      addTag('EQUAL CLAIMS', '#1d4ed8');
      addLabel('TWO PLATFORMS');
      break;
    }
    case 'hand': {
      const palm = createSvgElement('path', { d: 'M -20,21 Q -30,8 -25,-2 L -21,-26 Q -20,-32 -15,-31 Q -10,-30 -11,-24 L -11,-8 L -7,-33 Q -6,-39 0,-37 Q 4,-36 3,-30 L 1,-8 L 6,-32 Q 7,-37 12,-35 Q 16,-33 14,-27 L 9,-7 L 15,-25 Q 17,-30 21,-28 Q 26,-25 23,-19 L 14,12 Q 9,27 -5,29 Z', fill: '#fed7aa', stroke: '#c2410c', 'stroke-width': 2 });
      const motion = createSvgElement('path', { d: 'M 30,-28 Q 45,-14 32,2 M 40,-38 Q 57,-19 43,2', fill: 'none', stroke: '#2563eb', 'stroke-width': 3, 'stroke-linecap': 'round' });
      g.append(palm, motion);
      addTag('INTENT IN MOTION', '#1d4ed8');
      addLabel('YOUR HAND');
      break;
    }
    case 'crowd': {
      [-25, 0, 25].forEach((x, index) => {
        const person = createPersonGlyph(['#0284c7', '#2563eb', '#ea580c'][index]);
        person.setAttribute('transform', `translate(${x}, ${index === 1 ? -2 : 3}) scale(0.7)`);
        g.appendChild(person);
      });
      addTag('COMPETING LIVES', '#1d4ed8');
      addLabel('PEOPLE ON TRACK');
      break;
    }
    case 'collection': {
      const shelf = createSvgElement('rect', { x: -45, y: 14, width: 90, height: 7, fill: '#78350f', stroke: '#451a03', 'stroke-width': 1.5 });
      const items = [-27, -9, 9, 27].map((x) => createSvgElement('rect', { x: x - 6, y: -11, width: 12, height: 25, rx: 2, fill: '#f59e0b', stroke: '#92400e', 'stroke-width': 1.5 }));
      g.append(shelf, ...items);
      addTag('PERSONAL ARCHIVE', '#92400e');
      addLabel('COLLECTION');
      break;
    }
    case 'brake': {
      const brake = createSvgElement('circle', { cx: 0, cy: 0, r: 25, fill: '#dc2626', stroke: '#7f1d1d', 'stroke-width': 3 });
      const handle = createSvgElement('line', { x1: 0, y1: 0, x2: 0, y2: -27, stroke: '#fef2f2', 'stroke-width': 5, 'stroke-linecap': 'round' });
      const labelText = createSvgElement('text', { x: 0, y: 6, 'text-anchor': 'middle', fill: '#ffffff', 'font-size': '10', 'font-weight': '900', 'font-family': 'system-ui, sans-serif' });
      labelText.textContent = 'STOP';
      g.append(brake, handle, labelText);
      addTag('EMERGENCY SEAL', '#b91c1c');
      addLabel('BRAKE');
      break;
    }
    case 'net': {
      const net = createSvgElement('path', { d: 'M -42,-22 L 42,-22 L 30,24 L -30,24 Z', fill: 'none', stroke: '#0f766e', 'stroke-width': 3 });
      for (let x = -30; x <= 30; x += 15) net.appendChild(createSvgElement('line', { x1: x, y1: -22, x2: x * 0.7, y2: 24, stroke: '#14b8a6', 'stroke-width': 1.2 }));
      for (let y = -10; y <= 12; y += 11) net.appendChild(createSvgElement('line', { x1: -42 + (y + 22) * 0.26, y1: y, x2: 42 - (y + 22) * 0.26, y2: y, stroke: '#14b8a6', 'stroke-width': 1.2 }));
      g.appendChild(net);
      addTag('SAFETY EQUIPMENT', '#0f766e');
      addLabel('RESCUE NET');
      break;
    }
    case 'rail-switch':
    case 'siding':
    case 'sidings': {
      const fork = createSvgElement('path', { d: 'M -42,18 L 0,0 L 42,-18 M 0,0 L 42,18', fill: 'none', stroke: '#475569', 'stroke-width': 5, 'stroke-linecap': 'round' });
      const marker = createSvgElement('circle', { cx: 0, cy: 0, r: 8, fill: '#2563eb', stroke: '#dbeafe', 'stroke-width': 2 });
      g.append(fork, marker);
      addTag('ROUTE MAP', '#1d4ed8');
      addLabel(theme === 'sidings' ? 'THREE SIDINGS' : 'EMPTY SIDING');
      break;
    }
    case 'badge': {
      const badge = createSvgElement('path', { d: 'M -21,-18 L 21,-18 L 17,18 L 0,29 L -17,18 Z', fill: '#fef3c7', stroke: '#b45309', 'stroke-width': 2 });
      const star = createSvgElement('text', { x: 0, y: 9, 'text-anchor': 'middle', fill: '#b45309', 'font-size': '22', 'font-weight': '900', 'font-family': 'system-ui, sans-serif' });
      star.textContent = '★';
      g.append(badge, star);
      addTag('DUTY MARKER', '#92400e');
      addLabel('BYSTANDER BADGE');
      break;
    }
    case 'driver': {
      const seat = createSvgElement('rect', { x: -30, y: -14, width: 60, height: 38, rx: 7, fill: '#1e293b', stroke: '#64748b', 'stroke-width': 2 });
      const wheel = createSvgElement('circle', { cx: 0, cy: 3, r: 16, fill: 'none', stroke: '#f8fafc', 'stroke-width': 4 });
      const hub = createSvgElement('circle', { cx: 0, cy: 3, r: 4, fill: '#38bdf8' });
      g.append(seat, wheel, hub);
      addTag('CONTROL CAB', '#0369a1');
      addLabel('DRIVER\'S SEAT');
      break;
    }
    case 'automatic': {
      const chip = createSvgElement('rect', { x: -25, y: -18, width: 50, height: 36, rx: 5, fill: '#1e293b', stroke: '#38bdf8', 'stroke-width': 2 });
      const trace = createSvgElement('path', { d: 'M -15,0 L -7,0 L -3,-9 L 5,9 L 10,0 L 17,0', fill: 'none', stroke: '#22c55e', 'stroke-width': 2 });
      const node = createSvgElement('circle', { cx: 0, cy: 0, r: 4, fill: '#facc15' });
      g.append(chip, trace, node);
      addTag('PRESET ROUTE', '#0369a1');
      addLabel('AUTOMATION');
      break;
    }
    case 'remote': {
      const remote = createSvgElement('rect', { x: -19, y: -29, width: 38, height: 58, rx: 8, fill: '#334155', stroke: '#0f172a', 'stroke-width': 2 });
      const screen = createSvgElement('rect', { x: -11, y: -20, width: 22, height: 12, rx: 2, fill: '#86efac' });
      const button = createSvgElement('circle', { cx: 0, cy: 10, r: 8, fill: '#ef4444', stroke: '#fecaca', 'stroke-width': 2 });
      g.append(remote, screen, button);
      addTag('DISTANT CONTROL', '#b91c1c');
      addLabel('REMOTE');
      break;
    }
    case 'jam': {
      const crate = createSvgElement('rect', { x: -35, y: -17, width: 28, height: 28, fill: '#b45309', stroke: '#78350f', 'stroke-width': 2, transform: 'rotate(-12 -21 -3)' });
      const crate2 = createSvgElement('rect', { x: 5, y: -12, width: 32, height: 32, fill: '#d97706', stroke: '#78350f', 'stroke-width': 2, transform: 'rotate(15 21 4)' });
      const slash = createSvgElement('path', { d: 'M -35,-25 L 35,25', stroke: '#ef4444', 'stroke-width': 5, 'stroke-linecap': 'round' });
      g.append(crate, crate2, slash);
      addTag('SELF-CAUSED OBSTRUCTION', '#b91c1c');
      addLabel('TRACK JAM');
      break;
    }
    default: {
      const marker = createSvgElement('circle', { cx: 0, cy: 0, r: 21, fill: '#dbeafe', stroke: '#2563eb', 'stroke-width': 2 });
      const rail = createSvgElement('path', { d: 'M -13,-10 L 13,10 M 13,-10 L -13,10', stroke: '#1d4ed8', 'stroke-width': 3 });
      g.append(marker, rail);
      addTag('TRACK SCENARIO', '#1d4ed8');
      addLabel('DECISION POINT');
      break;
    }
  }
  return g;
}

/**
 * Rail buffer stop / bumper for Level 42 independent loop stopping mechanism
 */
export function createBufferStopGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-buffer-stop' });

  // Timber post legs
  const leg1 = createSvgElement('line', {
    x1: -12,
    y1: 20,
    x2: 0,
    y2: -4,
    stroke: '#475569',
    'stroke-width': 6,
    'stroke-linecap': 'round'
  });
  const leg2 = createSvgElement('line', {
    x1: 12,
    y1: 20,
    x2: 0,
    y2: -4,
    stroke: '#475569',
    'stroke-width': 6,
    'stroke-linecap': 'round'
  });
  // Cross beam
  const beam = createSvgElement('rect', {
    x: -18,
    y: -14,
    width: 36,
    height: 14,
    rx: 2,
    fill: '#991b1b',
    stroke: '#7f1d1d',
    'stroke-width': 2
  });
  // Red warning disk
  const disk = createSvgElement('circle', {
    cx: 0,
    cy: -7,
    r: 6,
    fill: '#ef4444',
    stroke: '#ffffff',
    'stroke-width': 1.5
  });

  g.appendChild(leg1);
  g.appendChild(leg2);
  g.appendChild(beam);
  g.appendChild(disk);

  return g;
}

/**
 * Animated mechanical switch lever with pivoting indicator target disk
 */
export function createSwitchLeverGlyph(slotIndex = 0): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-switch-lever' });

  // Stand casting
  const stand = createSvgElement('path', {
    d: 'M -14,14 L 14,14 L 8,-2 L -8,-2 Z',
    fill: '#334155',
    stroke: '#1e293b',
    'stroke-width': 1.5
  });
  g.appendChild(stand);

  // Lever shaft that pivots based on choice slot
  const angle = slotIndex === 0 ? -30 : slotIndex === 1 ? 30 : 0;
  const leverG = createSvgElement('g', {
    class: 'switch-lever-arm',
    transform: `rotate(${angle}, 0, 6)`
  });

  const shaft = createSvgElement('line', {
    x1: 0,
    y1: 6,
    x2: 0,
    y2: -24,
    stroke: '#e2e8f0',
    'stroke-width': 3.5,
    'stroke-linecap': 'round'
  });
  const counterweight = createSvgElement('circle', {
    cx: 0,
    cy: -10,
    r: 6,
    fill: '#1e293b'
  });
  const targetDisk = createSvgElement('circle', {
    cx: 0,
    cy: -24,
    r: 7,
    fill: slotIndex === 0 ? '#3b82f6' : '#22c55e',
    stroke: '#ffffff',
    'stroke-width': 1.5
  });

  leverG.appendChild(shaft);
  leverG.appendChild(counterweight);
  leverG.appendChild(targetDisk);
  g.appendChild(leverG);

  return g;
}

/**
 * Question mark token for fog / epistemic uncertainty
 */
export function createQuestionGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-question' });

  const glow = createSvgElement('circle', {
    cx: 0,
    cy: 0,
    r: 22,
    fill: 'rgba(245, 158, 11, 0.25)',
    filter: 'blur(4px)'
  });
  const circle = createSvgElement('circle', {
    cx: 0,
    cy: 0,
    r: 18,
    fill: '#fef3c7',
    stroke: '#d97706',
    'stroke-width': 2
  });
  const text = createSvgElement('text', {
    x: 0,
    y: 7,
    'text-anchor': 'middle',
    fill: '#b45309',
    'font-size': '22',
    'font-weight': 'bold',
    'font-family': 'system-ui, sans-serif'
  });
  text.textContent = '?';

  g.appendChild(glow);
  g.appendChild(circle);
  g.appendChild(text);
  return g;
}

/**
 * Non-graphic cartoon dust cloud for safe footbridge stopping
 */
export function createImpactCloudGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-impact-cloud' });
  const cloud = createSvgElement('path', {
    d: 'M -32,0 Q -38,-28 -16,-30 Q 0,-38 20,-28 Q 38,-22 34,6 Q 38,28 16,28 Q 0,35 -20,24 Q -38,22 -32,0 Z',
    fill: '#e2e8f0',
    stroke: '#94a3b8',
    'stroke-width': 2.5,
    opacity: '0.96'
  });
  const innerPuff = createSvgElement('circle', {
    cx: -6,
    cy: -4,
    r: 14,
    fill: '#f8fafc',
    opacity: '0.7'
  });
  g.appendChild(cloud);
  g.appendChild(innerPuff);
  return g;
}

/**
 * Visual death / casualty indicator with blood splatter, pool, and impact particles
 */
export function createBloodSplatterGlyph(
  victimType: 'human' | 'bug' | 'butterfly' | 'robot' = 'human',
  count = 1
): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-blood-splatter' });

  if (victimType === 'human') {
    const poolRadius = count > 1 ? 34 : 22;

    // Red pooled blood base
    const bloodPool = createSvgElement('ellipse', {
      cx: 0,
      cy: 16,
      rx: poolRadius,
      ry: poolRadius * 0.42,
      fill: '#991b1b', // Deep crimson
      opacity: '0.92'
    });
    g.appendChild(bloodPool);

    // Inner darker arterial blood core
    const innerPool = createSvgElement('ellipse', {
      cx: -2,
      cy: 17,
      rx: poolRadius * 0.65,
      ry: poolRadius * 0.28,
      fill: '#7f1d1d',
      opacity: '0.96'
    });
    g.appendChild(innerPool);

    // Dynamic blood splatter droplets
    const droplets = [
      { cx: -20, cy: 10, r: 3.5 },
      { cx: 22, cy: 13, r: 4 },
      { cx: -30, cy: 18, r: 2.5 },
      { cx: 29, cy: 20, r: 2.8 },
      { cx: 10, cy: 23, r: 3.2 },
      { cx: -14, cy: 24, r: 2.2 },
      { cx: 16, cy: 7, r: 2.8 },
      { cx: -24, cy: 5, r: 2 },
      { cx: 36, cy: 16, r: 1.8 },
      { cx: -36, cy: 14, r: 1.8 },
      { cx: 0, cy: 26, r: 2.5 }
    ];

    droplets.forEach((d) => {
      const drop = createSvgElement('circle', {
        cx: d.cx,
        cy: d.cy,
        r: d.r,
        fill: '#dc2626'
      });
      g.appendChild(drop);
    });

    // Splatter streaks across track rails
    const streak1 = createSvgElement('path', {
      d: 'M -14,14 Q -25,18 -32,26',
      fill: 'none',
      stroke: '#b91c1c',
      'stroke-width': 2.5,
      'stroke-linecap': 'round'
    });
    const streak2 = createSvgElement('path', {
      d: 'M 10,15 Q 24,20 30,27',
      fill: 'none',
      stroke: '#b91c1c',
      'stroke-width': 2.5,
      'stroke-linecap': 'round'
    });
    g.appendChild(streak1);
    g.appendChild(streak2);

    // Red impact shock burst ring
    const impactShock = createSvgElement('ellipse', {
      cx: 0,
      cy: 16,
      rx: poolRadius * 1.35,
      ry: poolRadius * 0.6,
      fill: 'none',
      stroke: '#ef4444',
      'stroke-width': 2,
      opacity: '0.85',
      'stroke-dasharray': '5,3'
    });
    g.appendChild(impactShock);
  } else if (victimType === 'bug') {
    // Greenish-amber bug splat
    const bugPool = createSvgElement('ellipse', {
      cx: 0,
      cy: 8,
      rx: 22,
      ry: 10,
      fill: '#65a30d',
      opacity: '0.92'
    });
    const innerBug = createSvgElement('ellipse', {
      cx: 2,
      cy: 8,
      rx: 14,
      ry: 6,
      fill: '#4d7c0f',
      opacity: '0.96'
    });
    g.appendChild(bugPool);
    g.appendChild(innerBug);

    const bugDrops: [number, number, number][] = [[-16, 4, 3], [18, 6, 2.8], [6, 14, 2.2], [-10, 13, 2.5], [22, 11, 2]];
    for (const [dx, dy, r] of bugDrops) {
      const drop = createSvgElement('circle', {
        cx: dx,
        cy: dy,
        r,
        fill: '#84cc16'
      });
      g.appendChild(drop);
    }
  } else if (victimType === 'butterfly') {
    // Golden amber flutter dust
    const burst = createSvgElement('ellipse', {
      cx: 0,
      cy: 8,
      rx: 18,
      ry: 9,
      fill: 'rgba(245, 158, 11, 0.45)'
    });
    g.appendChild(burst);

    const sparkles: [number, number][] = [[-14, -4], [15, 2], [-8, 12], [9, 11], [0, -11]];
    for (const [dx, dy] of sparkles) {
      const sparkle = createSvgElement('polygon', {
        points: `${dx},${dy - 3} ${dx + 3},${dy} ${dx},${dy + 3} ${dx - 3},${dy}`,
        fill: '#fbbf24'
      });
      g.appendChild(sparkle);
    }
  } else if (victimType === 'robot') {
    // Black machine oil puddle and sparks
    const oilPool = createSvgElement('ellipse', {
      cx: 0,
      cy: 16,
      rx: 26,
      ry: 11,
      fill: '#18181b',
      opacity: '0.95'
    });
    g.appendChild(oilPool);

    const sparks: [number, number][] = [[-16, 6], [18, 8], [-10, 22], [15, 20]];
    for (const [dx, dy] of sparks) {
      const spark = createSvgElement('circle', {
        cx: dx,
        cy: dy,
        r: 2.2,
        fill: '#f59e0b'
      });
      g.appendChild(spark);
    }
  }

  return g;
}
