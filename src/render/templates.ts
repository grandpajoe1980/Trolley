import type { LayoutTemplate } from '../content/types';

export interface Point2D {
  x: number;
  y: number;
  angle?: number;
}

export interface TrackDefinition {
  approachPath: string;
  branchPaths: string[];
  junctionPoint: Point2D;
  targetPoints: Point2D[];
}

export const STAGE_WIDTH = 1000;
export const STAGE_HEIGHT = 600;
export const JUNCTION_X = 430;
export const JUNCTION_Y = 300;
export const APPROACH_START_X = 60;
export const APPROACH_START_Y = 300;

export function getTrackDefinition(template: LayoutTemplate): TrackDefinition {
  const approachPath = `M ${APPROACH_START_X} ${APPROACH_START_Y} L ${JUNCTION_X} ${JUNCTION_Y}`;

  switch (template) {
    case 'fork2':
      return {
        approachPath,
        branchPaths: [
          `M ${JUNCTION_X} ${JUNCTION_Y} C 580 300, 720 220, 900 220`,
          `M ${JUNCTION_X} ${JUNCTION_Y} C 580 300, 720 380, 900 380`
        ],
        junctionPoint: { x: JUNCTION_X, y: JUNCTION_Y },
        targetPoints: [
          { x: 780, y: 220 },
          { x: 780, y: 380 }
        ]
      };

    case 'fork3':
      return {
        approachPath,
        branchPaths: [
          `M ${JUNCTION_X} ${JUNCTION_Y} C 580 300, 700 160, 900 160`,
          `M ${JUNCTION_X} ${JUNCTION_Y} L 900 300`,
          `M ${JUNCTION_X} ${JUNCTION_Y} C 580 300, 700 440, 900 440`
        ],
        junctionPoint: { x: JUNCTION_X, y: JUNCTION_Y },
        targetPoints: [
          { x: 780, y: 160 },
          { x: 780, y: 300 },
          { x: 780, y: 440 }
        ]
      };

    case 'action2':
      return {
        approachPath,
        branchPaths: [
          `M ${JUNCTION_X} ${JUNCTION_Y} L 900 300`,
          `M ${JUNCTION_X} ${JUNCTION_Y} L 650 300`
        ],
        junctionPoint: { x: JUNCTION_X, y: JUNCTION_Y },
        targetPoints: [
          { x: 780, y: 300 },
          { x: 650, y: 230 }
        ]
      };

    case 'action3':
      return {
        approachPath,
        branchPaths: [
          `M ${JUNCTION_X} ${JUNCTION_Y} L 900 300`,
          `M ${JUNCTION_X} ${JUNCTION_Y} L 650 300`,
          `M ${JUNCTION_X} ${JUNCTION_Y} L 520 300`
        ],
        junctionPoint: { x: JUNCTION_X, y: JUNCTION_Y },
        targetPoints: [
          { x: 780, y: 300 },
          { x: 650, y: 230 },
          { x: 520, y: 230 }
        ]
      };

    case 'footbridge':
      return {
        approachPath,
        branchPaths: [
          `M ${JUNCTION_X} ${JUNCTION_Y} L 900 300`,
          `M ${JUNCTION_X} ${JUNCTION_Y} L 550 300`
        ],
        junctionPoint: { x: JUNCTION_X, y: JUNCTION_Y },
        targetPoints: [
          { x: 780, y: 300 },
          { x: 550, y: 200 }
        ]
      };

    case 'loop':
      return {
        approachPath,
        branchPaths: [
          `M ${JUNCTION_X} ${JUNCTION_Y} L 900 300`,
          `M ${JUNCTION_X} ${JUNCTION_Y} C 500 300, 560 170, 650 170 C 740 170, 780 260, 820 300`
        ],
        junctionPoint: { x: JUNCTION_X, y: JUNCTION_Y },
        targetPoints: [
          { x: 860, y: 300 },
          { x: 650, y: 170 }
        ]
      };
  }
}

/**
 * Standard / Extended approach interpolation:
 * u in [0, 1] travels linearly from (60, 300) to (430, 300)
 */
export function sampleApproachPosition(u: number): Point2D {
  const clampedU = Math.max(0, Math.min(1, u));
  const x = APPROACH_START_X + clampedU * (JUNCTION_X - APPROACH_START_X);
  return { x, y: JUNCTION_Y, angle: 0 };
}

/**
 * Untimed loop trajectory:
 * Gentle holding loop oval so trolley moves without crossing junction
 */
export function sampleUntimedLoopPosition(loopProgress: number): Point2D {
  const theta = loopProgress * 2 * Math.PI;
  const cx = 245;
  const cy = 300;
  const rx = 150;
  const ry = 35;
  const x = cx - rx * Math.cos(theta);
  const y = cy + ry * Math.sin(theta);
  const angle = (Math.atan2(ry * Math.cos(theta), rx * Math.sin(theta)) * 180) / Math.PI;
  return { x, y, angle: Math.max(-15, Math.min(15, angle)) };
}

/**
 * Sample cubic bezier at parameter t in [0, 1]
 */
function sampleCubicBezier(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number },
  t: number
): Point2D {
  const mt = 1 - t;
  const x = mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x;
  const y = mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y;

  // Tangent derivative for angle
  const dx = 3 * mt * mt * (p1.x - p0.x) + 6 * mt * t * (p2.x - p1.x) + 3 * t * t * (p3.x - p2.x);
  const dy = 3 * mt * mt * (p1.y - p0.y) + 6 * mt * t * (p2.y - p1.y) + 3 * t * t * (p3.y - p2.y);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  return { x, y, angle };
}

/**
 * Resolution trajectory along committed choice branch:
 * v in [0, 1]
 */
export function sampleBranchPosition(template: LayoutTemplate, slot: number, v: number): Point2D {
  const clampedV = Math.max(0, Math.min(1, v));

  if (template === 'fork2') {
    if (slot === 0) {
      return sampleCubicBezier(
        { x: 430, y: 300 },
        { x: 580, y: 300 },
        { x: 720, y: 220 },
        { x: 900, y: 220 },
        clampedV
      );
    } else {
      return sampleCubicBezier(
        { x: 430, y: 300 },
        { x: 580, y: 300 },
        { x: 720, y: 380 },
        { x: 900, y: 380 },
        clampedV
      );
    }
  }

  if (template === 'fork3') {
    if (slot === 0) {
      return sampleCubicBezier(
        { x: 430, y: 300 },
        { x: 580, y: 300 },
        { x: 700, y: 160 },
        { x: 900, y: 160 },
        clampedV
      );
    } else if (slot === 1) {
      return { x: 430 + clampedV * (900 - 430), y: 300, angle: 0 };
    } else {
      return sampleCubicBezier(
        { x: 430, y: 300 },
        { x: 580, y: 300 },
        { x: 700, y: 440 },
        { x: 900, y: 440 },
        clampedV
      );
    }
  }

  if (template === 'footbridge') {
    if (slot === 0) {
      // Default continues to end
      return { x: 430 + clampedV * (900 - 430), y: 300, angle: 0 };
    } else {
      // Pushing/trapdoor: trolley stops at bridge x=550
      return { x: 430 + clampedV * (550 - 430), y: 300, angle: 0 };
    }
  }

  if (template === 'loop') {
    if (slot === 0) {
      return { x: 430 + clampedV * (900 - 430), y: 300, angle: 0 };
    } else {
      // Siding loop path
      if (clampedV <= 0.5) {
        const t = clampedV * 2;
        return sampleCubicBezier(
          { x: 430, y: 300 },
          { x: 500, y: 300 },
          { x: 570, y: 170 },
          { x: 650, y: 170 },
          t
        );
      } else {
        const t = (clampedV - 0.5) * 2;
        return sampleCubicBezier(
          { x: 650, y: 170 },
          { x: 730, y: 170 },
          { x: 770, y: 260 },
          { x: 820, y: 300 },
          t
        );
      }
    }
  }

  // action2 / action3 default straight travel
  if (slot === 0) {
    return { x: 430 + clampedV * (900 - 430), y: 300, angle: 0 };
  } else if (slot === 1) {
    // Action commits: moves to brake point and halts
    return { x: 430 + clampedV * (650 - 430), y: 300, angle: 0 };
  } else {
    return { x: 430 + clampedV * (520 - 430), y: 300, angle: 0 };
  }
}
