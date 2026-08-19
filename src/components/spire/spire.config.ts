import type { ComponentType } from "react";
import { Floor01Invitation } from "./floors/Floor01Invitation";
import { Floor02Imagination } from "./floors/Floor02Imagination";
import { Floor03Themes } from "./floors/Floor03Themes";
import { Floor04Reveal } from "./floors/Floor04Reveal";
import { Floor05Transformation } from "./floors/Floor05Transformation";
import type { TransitionFamily } from "./transitions";
import type { SpireFloorProps } from "./spire.types";

/** Axis light states, floor by floor: near-black → lavender → warm → golden. */
export type AxisState = "void" | "wake" | "bloom" | "warm" | "golden";

export interface SpireFloor {
  key: string;
  /** Accessible label / structural name. */
  name: string;
  component: ComponentType<SpireFloorProps>;
  /** Family used to swap this floor IN. Floor 1 is the entry point. */
  transition: TransitionFamily | null;
  axisState: AxisState;
}

export const SPIRE_FLOORS: readonly SpireFloor[] = [
  {
    key: "invitation",
    name: "The Invitation",
    component: Floor01Invitation,
    transition: null,
    axisState: "void",
  },
  {
    key: "imagination",
    name: "Enter Their Imagination",
    component: Floor02Imagination,
    transition: "storybook",
    axisState: "wake",
  },
  {
    key: "themes",
    name: "What Are They Into?",
    component: Floor03Themes,
    transition: "portal",
    axisState: "bloom",
  },
  {
    key: "reveal",
    name: "Their World Comes Alive",
    component: Floor04Reveal,
    transition: "portal",
    axisState: "warm",
  },
  {
    key: "transformation",
    name: "The Transformation",
    component: Floor05Transformation,
    transition: "objectWipe",
    axisState: "golden",
  },
] as const;

/** ---- Geometry ---- */

/** Facet slots mounted at once: outgoing, front, incoming, next. */
export const SLOT_COUNT = 4;
/** Degrees between adjacent facets. */
export const STEP_DEG = 360 / SLOT_COUNT;
export const PERSPECTIVE_PX = 1200;

/** ---- Scroll slice shape (in timeline units; one unit = one floor) ---- */

/** Portion of a slice spent rotating; the remainder is the settle plateau. */
export const ROTATE_PORTION = 0.55;
export const SETTLE_PLATEAU = 1 - ROTATE_PORTION; // 0.45 — copy is read stationary
export const SCROLL_END = `+=${SPIRE_FLOORS.length * 100}%`;

/** Which slot a floor is conveyed onto. */
export function slotForFloor(index: number): number {
  return ((index % SLOT_COUNT) + SLOT_COUNT) % SLOT_COUNT;
}

/** The live facet window: outgoing, front, incoming, next. */
export function liveFloorIndices(active: number): number[] {
  const out: number[] = [];
  for (let i = active - 1; i <= active + 2; i += 1) {
    if (i >= 0 && i < SPIRE_FLOORS.length) out.push(i);
  }
  return out;
}