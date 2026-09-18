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

export function createTrolleyGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-trolley' });

  // Trolley body
  const body = createSvgElement('rect', {
    x: -32,
    y: -20,
    width: 64,
    height: 38,
    rx: 6,
    fill: '#b91c1c',
    stroke: '#7f1d1d',
    'stroke-width': 2
  });
  g.appendChild(body);

  // Roof
  const roof = createSvgElement('rect', {
    x: -36,
    y: -24,
    width: 72,
    height: 6,
    rx: 2,
    fill: '#450a0a'
  });
  g.appendChild(roof);

  // Windows
  for (const wx of [-22, -6, 10]) {
    const win = createSvgElement('rect', {
      x: wx,
      y: -14,
      width: 12,
      height: 14,
      rx: 2,
      fill: '#fef08a',
      stroke: '#7f1d1d',
      'stroke-width': 1.5
    });
    g.appendChild(win);
  }

  // Headlight beam / lamp
  const lamp = createSvgElement('polygon', {
    points: '32,-4 52,-14 52,6',
    fill: 'rgba(254, 240, 138, 0.45)'
  });
  g.appendChild(lamp);

  // Wheels
  for (const cx of [-20, 20]) {
    const wheel = createSvgElement('circle', {
      cx,
      cy: 20,
      r: 7,
      fill: '#1f2937',
      stroke: '#4b5563',
      'stroke-width': 2
    });
    g.appendChild(wheel);
  }

  return g;
}

export function createPersonGlyph(color = '#1d4ed8'): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-person' });

  // Head
  const head = createSvgElement('circle', {
    cx: 0,
    cy: -16,
    r: 8,
    fill: color,
    stroke: '#1e3a8a',
    'stroke-width': 1.5
  });
  g.appendChild(head);

  // Torso
  const body = createSvgElement('path', {
    d: 'M -10,8 C -10,-4 -6,-8 0,-8 C 6,-8 10,-4 10,8 Z',
    fill: color,
    stroke: '#1e3a8a',
    'stroke-width': 1.5
  });
  g.appendChild(body);

  return g;
}

export function createCockroachGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-cockroach' });

  // Antennae
  const leftAntenna = createSvgElement('path', {
    d: 'M -4,-10 C -12,-20 -16,-22 -20,-24',
    fill: 'none',
    stroke: '#451a03',
    'stroke-width': 1.5
  });
  const rightAntenna = createSvgElement('path', {
    d: 'M 4,-10 C 12,-20 16,-22 20,-24',
    fill: 'none',
    stroke: '#451a03',
    'stroke-width': 1.5
  });
  g.appendChild(leftAntenna);
  g.appendChild(rightAntenna);

  // Body oval
  const body = createSvgElement('ellipse', {
    cx: 0,
    cy: 0,
    rx: 10,
    ry: 15,
    fill: '#78350f',
    stroke: '#451a03',
    'stroke-width': 1.5
  });
  g.appendChild(body);

  // Legs
  for (const ly of [-6, 0, 6]) {
    const legL = createSvgElement('path', {
      d: `M -8,${ly} L -18,${ly - 4}`,
      fill: 'none',
      stroke: '#451a03',
      'stroke-width': 1.5
    });
    const legR = createSvgElement('path', {
      d: `M 8,${ly} L 18,${ly - 4}`,
      fill: 'none',
      stroke: '#451a03',
      'stroke-width': 1.5
    });
    g.appendChild(legL);
    g.appendChild(legR);
  }

  return g;
}

export function createButterflyGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-butterfly' });

  // Wings
  const wingL = createSvgElement('path', {
    d: 'M 0,-4 C -16,-24 -24,-8 -14,6 C -20,16 -12,20 0,6 Z',
    fill: '#f59e0b',
    stroke: '#b45309',
    'stroke-width': 1.5
  });
  const wingR = createSvgElement('path', {
    d: 'M 0,-4 C 16,-24 24,-8 14,6 C 20,16 12,20 0,6 Z',
    fill: '#f59e0b',
    stroke: '#b45309',
    'stroke-width': 1.5
  });
  g.appendChild(wingL);
  g.appendChild(wingR);

  // Body
  const body = createSvgElement('ellipse', {
    cx: 0,
    cy: 2,
    rx: 3,
    ry: 12,
    fill: '#374151',
    stroke: '#111827',
    'stroke-width': 1
  });
  g.appendChild(body);

  return g;
}

export function createGroupGlyph(count: number): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-group' });

  // Silhouette of people
  const p1 = createPersonGlyph('#3b82f6');
  p1.setAttribute('transform', 'translate(-12, 0) scale(0.85)');
  const p2 = createPersonGlyph('#2563eb');
  p2.setAttribute('transform', 'translate(12, 0) scale(0.85)');
  const p3 = createPersonGlyph('#1d4ed8');
  p3.setAttribute('transform', 'translate(0, 4) scale(1)');

  g.appendChild(p1);
  g.appendChild(p2);
  g.appendChild(p3);

  // Multiplier text badge
  const bg = createSvgElement('rect', {
    x: -20,
    y: 18,
    width: 40,
    height: 18,
    rx: 4,
    fill: '#1e293b',
    stroke: '#334155',
    'stroke-width': 1
  });
  const text = createSvgElement('text', {
    x: 0,
    y: 31,
    'text-anchor': 'middle',
    fill: '#f8fafc',
    'font-size': '12',
    'font-weight': 'bold',
    'font-family': 'system-ui, sans-serif'
  });
  text.textContent = `×${count}`;

  g.appendChild(bg);
  g.appendChild(text);

  return g;
}

export function createQuestionGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-question' });
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

  g.appendChild(circle);
  g.appendChild(text);
  return g;
}

export function createImpactCloudGlyph(): SVGGElement {
  const g = createSvgElement('g', { class: 'glyph-impact-cloud' });
  const cloud = createSvgElement('path', {
    d: 'M -30,0 Q -35,-25 -15,-28 Q 0,-35 18,-25 Q 35,-20 32,5 Q 35,25 15,25 Q 0,32 -18,22 Q -35,20 -30,0 Z',
    fill: '#cbd5e1',
    stroke: '#64748b',
    'stroke-width': 2,
    opacity: '0.95'
  });
  g.appendChild(cloud);
  return g;
}
