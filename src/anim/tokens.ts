/**
 * Motion tokens — JS mirror of the motion side of the design system.
 * Later packets EXTEND this file; never rewrite it.
 */

export const eases = {
  reveal: "cubic-bezier(0.22,1,0.36,1)",
  dolly: "cubic-bezier(0.65,0,0.35,1)",
  micro: "cubic-bezier(0.4,0,0.2,1)",
} as const;

/** Raw bezier control points, used to build named GSAP CustomEases. */
export const easeBeziers = {
  reveal: [0.22, 1, 0.36, 1],
  dolly: [0.65, 0, 0.35, 1],
  micro: [0.4, 0, 0.2, 1],
} as const;

/** Named GSAP eases registered by registerGsap(). */
export const gsapEaseNames = {
  reveal: "mm.reveal",
  dolly: "mm.dolly",
  micro: "mm.micro",
} as const;

/** Seconds. */
export const durations = {
  micro: 0.18,
  short: 0.3,
  reveal: 0.7,
  cinematic: 1.1,
} as const;

export const distances = {
  rise: 12,
  float: 6,
  magneticMax: 12,
  kenBurns: [1.0, 1.08],
} as const;

export type EaseName = keyof typeof eases;
export type DurationName = keyof typeof durations;

/** Scroll defaults (additive — Packet 3). */
export const scroll = {
  scrub: 1,
  startDefault: "top 85%",
  pinScrub: true,
  kenBurns: distances.kenBurns,
} as const;
