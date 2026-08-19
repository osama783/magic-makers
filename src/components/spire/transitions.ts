/**
 * The three — and only three — transition families that swap Spire facets.
 * Each contributes to the shared pin-scrub timeline. transform / opacity / mask only.
 */
import type { gsap } from "gsap";
import { gsapEaseNames } from "@/anim/tokens";

export type TransitionFamily = "portal" | "storybook" | "objectWipe";

export interface TransitionElements {
  /** The facet inner element swinging to the front. */
  incoming: Element;
  /** The facet inner element leaving the front, when there is one. */
  outgoing: Element | null;
}

export type TransitionFn = (
  tl: gsap.core.Timeline,
  els: TransitionElements,
  position: number,
  duration: number,
) => void;

/** Magic Portal — iris/bloom open. Used entering the theme and reveal floors. */
export const portal: TransitionFn = (tl, els, position, duration) => {
  tl.fromTo(
    els.incoming,
    { opacity: 0, scale: 0.88, clipPath: "circle(0% at 50% 50%)" },
    {
      opacity: 1,
      scale: 1,
      clipPath: "circle(78% at 50% 50%)",
      duration,
      ease: gsapEaseNames.reveal,
    },
    position,
  );
  if (els.outgoing) {
    tl.to(els.outgoing, { opacity: 0, duration: duration * 0.6, ease: "none" }, position);
  }
};

/** Storybook — soft cross-dissolve with a 12px rise. */
export const storybook: TransitionFn = (tl, els, position, duration) => {
  tl.fromTo(
    els.incoming,
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration, ease: gsapEaseNames.reveal },
    position,
  );
  if (els.outgoing) {
    tl.to(els.outgoing, { opacity: 0, duration: duration * 0.7, ease: "none" }, position);
  }
};

/** Object-Wipe — a masked wipe carries the swap. */
export const objectWipe: TransitionFn = (tl, els, position, duration) => {
  tl.fromTo(
    els.incoming,
    { opacity: 1, clipPath: "inset(0% 100% 0% 0%)" },
    { clipPath: "inset(0% 0% 0% 0%)", duration, ease: gsapEaseNames.reveal },
    position,
  );
  if (els.outgoing) {
    tl.to(els.outgoing, { opacity: 0, duration: duration * 0.6, ease: "none" }, position);
  }
};

export const transitions: Record<TransitionFamily, TransitionFn> = {
  portal,
  storybook,
  objectWipe,
};