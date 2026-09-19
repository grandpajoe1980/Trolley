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

/**
 * Group of people with explicit multiplier badge
 */
export function createGroupGlyph(count: number): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-group' });

  const shadow = createSvgElement('ellipse', {
    cx: 0,
    cy: 20,
    rx: 26,
    ry: 6,
    fill: 'rgba(0,0,0,0.2)'
  });
  g.appendChild(shadow);

  // Tiered silhouettes
  const p1 = createPersonGlyph('#0284c7');
  p1.setAttribute('transform', 'translate(-16, -2) scale(0.85)');

  const p2 = createPersonGlyph('#0ea5e9');
  p2.setAttribute('transform', 'translate(16, -2) scale(0.85)');

  const p3 = createPersonGlyph('#2563eb');
  p3.setAttribute('transform', 'translate(-8, 3) scale(0.95)');

  const p4 = createPersonGlyph('#1d4ed8');
  p4.setAttribute('transform', 'translate(8, 3) scale(0.95)');

  const pCenter = createPersonGlyph('#1e40af');
  pCenter.setAttribute('transform', 'translate(0, 6) scale(1)');

  g.appendChild(p1);
  g.appendChild(p2);
  g.appendChild(p3);
  g.appendChild(p4);
  g.appendChild(pCenter);

  // Multiplier plaque
  const badge = createSvgElement('rect', {
    x: -24,
    y: 22,
    width: 48,
    height: 20,
    rx: 5,
    fill: '#0f172a',
    stroke: '#38bdf8',
    'stroke-width': 1.5,
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))'
  });
  const text = createSvgElement('text', {
    x: 0,
    y: 36,
    'text-anchor': 'middle',
    fill: '#38bdf8',
    'font-size': '13',
    'font-weight': '800',
    'font-family': 'system-ui, sans-serif'
  });
  text.textContent = `×${count}`;

  g.appendChild(badge);
  g.appendChild(text);

  return g;
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
