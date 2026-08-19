/** Geometry + timing constants for THE CORE. Shared by the rig, pages and boards. */

export type AccentToken =
  | "--acc-cyan"
  | "--acc-pink"
  | "--acc-butter"
  | "--acc-mint"
  | "--acc-lavender"
  | "--acc-coral";

export const PERSPECTIVE_PX = 1400;

/** Fraction of a page slice spent fully arrived and STILL (copy read stationary). */
export const SETTLE_PLATEAU = 0.45;
const PLATEAU_HALF = SETTLE_PLATEAU / 2;
const TRAVEL = 1 - SETTLE_PLATEAU;

export function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/** Controlled glide: smooth at both ends, no bounce. */
export function smoothstep(v: number): number {
  const t = clamp01(v);
  return t * t * (3 - 2 * t);
}

/**
 * Distance from a page's settle point (d, in page units) → travel phase 0..1.
 * 0 while inside the settle plateau, 1 once the cluster is fully clear.
 */
export function travelPhase(d: number): number {
  return clamp01((Math.abs(d) - PLATEAU_HALF) / TRAVEL);
}

export interface BoardTransform {
  x: number;
  y: number;
  z: number;
  rotateY: number;
  scale: number;
  opacity: number;
}

export const SETTLED: BoardTransform = { x: 0, y: 0, z: 0, rotateY: 0, scale: 1, opacity: 1 };

/**
 * Fixed exit choreography.
 *  - 2 boards: both rise, then split one LEFT / one RIGHT.
 *  - 3–4 boards: top two rise and exit LEFT/RIGHT; the bottom one/two slide off horizontally.
 *  - 1 board: rises and clears.
 */
export function exitTransform(index: number, count: number, phase: number): BoardTransform {
  const rise = smoothstep(phase / 0.45);
  const fade = 1 - smoothstep((phase - 0.25) / 0.75);
  const split = smoothstep((phase - 0.3) / 0.7);
  const scale = 1 - 0.1 * smoothstep(phase);

  if (count === 1) {
    return { x: 0, y: -220 * rise, z: -160 * split, rotateY: 0, scale, opacity: fade };
  }

  const isTopPair = count === 2 || index < 2;
  if (isTopPair) {
    const dir = index % 2 === 0 ? -1 : 1;
    return {
      x: dir * 560 * split,
      y: -170 * rise,
      z: -120 * split,
      rotateY: dir * 16 * split,
      scale,
      opacity: fade,
    };
  }

  // Bottom row: slide off horizontally.
  const dir = index % 2 === 0 ? -1 : 1;
  const slide = smoothstep(phase);
  return { x: dir * 780 * slide, y: 0, z: 0, rotateY: dir * 10 * slide, scale, opacity: fade };
}

/** Incoming clusters snap on along one consistent path. */
export function enterTransform(index: number, count: number, phase: number): BoardTransform {
  const t = smoothstep(phase);
  const dir = index % 2 === 0 ? -1 : 1;
  return {
    x: dir * 90 * t,
    y: 110 * t,
    z: -460 * t,
    rotateY: dir * 14 * t,
    scale: 1 - 0.07 * t,
    opacity: 1 - smoothstep((phase - 0.05) / 0.55),
  };
}

/** Base resting placement of a board on the curved core face. */
export function boardBase(index: number, count: number): { rotateY: number; z: number } {
  // Boards sit centered on the spine: a single column for 1–2, a tight 2x2 for 3–4.
  if (count <= 2) return { rotateY: 0, z: 0 };
  const dir = index % 2 === 0 ? 1 : -1;
  return { rotateY: dir * 6, z: -24 };
}