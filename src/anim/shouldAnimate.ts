/**
 * THE single motion gate. Every primitive and the smooth-scroll driver
 * consults this module; no primitive may read media queries directly.
 */
import { useStore } from "@/lib/store";
import { BREAKPOINTS } from "@/lib/useBreakpoint";

export type MotionProfile = "full" | "reduced" | "lite";

function isDesktop(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(`(min-width: ${BREAKPOINTS.desktop}px) and (pointer: fine)`).matches;
}

function isMobile(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return !window.matchMedia(`(min-width: ${BREAKPOINTS.tablet}px)`).matches;
}

export function shouldAnimate(): boolean {
  return !useStore.getState().reducedMotion;
}

export function motionProfile(): MotionProfile {
  const { reducedMotion, saveData } = useStore.getState();
  if (reducedMotion) return "reduced";
  if (saveData || isMobile()) return "lite";
  return "full";
}

/** True only for the full-fat desktop profile (Lenis eligibility). */
export function isFullDesktopMotion(): boolean {
  return motionProfile() === "full" && isDesktop();
}
