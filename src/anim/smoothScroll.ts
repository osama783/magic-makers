/**
 * Lenis drives scroll POSITION only. GSAP owns every ScrollTrigger and every
 * animated property. Gated by the single motion gate.
 */
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isFullDesktopMotion } from "./shouldAnimate";
import { registerGsap } from "./registerGsap";

let lenis: Lenis | null = null;

export function initSmoothScroll(): () => void {
  if (typeof window === "undefined") return () => {};
  if (!isFullDesktopMotion()) return () => {};
  if (lenis) return () => {};

  registerGsap();
  const instance = new Lenis({ smoothWheel: true });
  lenis = instance;

  const onScroll = () => ScrollTrigger.update();
  instance.on("scroll", onScroll);

  const raf = (time: number) => instance.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(raf);
    gsap.ticker.lagSmoothing(500, 33);
    instance.off("scroll", onScroll);
    instance.destroy();
    if (lenis === instance) lenis = null;
  };
}

/** No-op safe: the transition packet will call these to pause scroll. */
export function stopScroll(): void {
  lenis?.stop();
}

export function startScroll(): void {
  lenis?.start();
}

export function isSmoothScrollActive(): boolean {
  return lenis !== null;
}
