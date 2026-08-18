/**
 * Five parameterized scroll primitives. Each returns a kill handle.
 * These own transform / opacity / scale for scroll — nothing else may.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { durations, distances, gsapEaseNames, scroll } from "./tokens";
import { motionProfile, shouldAnimate } from "./shouldAnimate";

export type MotionTarget = gsap.TweenTarget;
export interface KillHandle {
  kill: () => void;
}

const noopHandle: KillHandle = { kill: () => {} };

function handleFor(items: Array<{ kill: (...args: never[]) => void } | undefined>): KillHandle {
  return {
    kill: () => items.forEach((i) => i?.kill()),
  };
}

/** Final, legible resting state used whenever motion is off. */
function settle(target: MotionTarget) {
  gsap.set(target, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "willChange" });
}

export interface RevealOptions {
  y?: number;
  start?: string;
  once?: boolean;
  stagger?: number;
}

export function revealOnScroll(target: MotionTarget, opts: RevealOptions = {}): KillHandle {
  const { y = distances.rise, start = scroll.startDefault, once = true, stagger = 0 } = opts;
  if (!shouldAnimate()) {
    settle(target);
    return noopHandle;
  }
  const tween = gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: durations.reveal,
      ease: gsapEaseNames.reveal,
      stagger,
      scrollTrigger: { trigger: target as Element, start, once, toggleActions: "play none none none" },
    },
  );
  return handleFor([tween, tween.scrollTrigger]);
}

export interface ParallaxOptions {
  amount: number;
  axis?: "x" | "y";
}

export function parallax(target: MotionTarget, opts: ParallaxOptions): KillHandle {
  const profile = motionProfile();
  if (profile !== "full") {
    settle(target);
    return noopHandle;
  }
  const { amount, axis = "y" } = opts;
  const tween = gsap.fromTo(
    target,
    { [axis]: -amount / 2 },
    {
      [axis]: amount / 2,
      ease: "none",
      scrollTrigger: {
        trigger: target as Element,
        start: "top bottom",
        end: "bottom top",
        scrub: scroll.scrub,
      },
    },
  );
  return handleFor([tween, tween.scrollTrigger]);
}

export interface PinScrubOptions {
  end?: string;
  build: (tl: gsap.core.Timeline) => void;
}

export function pinScrub(triggerEl: Element, opts: PinScrubOptions): KillHandle {
  const { end = "+=100%", build } = opts;
  const profile = motionProfile();

  if (profile === "reduced") {
    const tl = gsap.timeline({ paused: true });
    build(tl);
    tl.progress(1).pause();
    return handleFor([tl]);
  }

  if (profile === "lite") {
    // No pinning on lite: run the timeline once, scrub-free, when it enters.
    const tl = gsap.timeline({
      scrollTrigger: { trigger: triggerEl, start: scroll.startDefault, once: true },
    });
    build(tl);
    return handleFor([tl, tl.scrollTrigger]);
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: "top top",
      end,
      pin: true,
      scrub: scroll.scrub,
      anticipatePin: 1,
    },
  });
  build(tl);
  return handleFor([tl, tl.scrollTrigger]);
}

export function staggerReveal(
  targets: MotionTarget,
  opts: RevealOptions = {},
): KillHandle {
  return revealOnScroll(targets, { stagger: 0.08, ...opts });
}

export interface KenBurnsOptions {
  from?: number;
  to?: number;
}

export function kenBurns(imgEl: Element, opts: KenBurnsOptions = {}): KillHandle {
  const [defFrom, defTo] = scroll.kenBurns;
  const { from = defFrom, to = defTo } = opts;
  if (motionProfile() !== "full") {
    gsap.set(imgEl, { scale: from, opacity: 1 });
    return noopHandle;
  }
  const tween = gsap.fromTo(
    imgEl,
    { scale: from },
    {
      scale: to,
      ease: "none",
      scrollTrigger: {
        trigger: imgEl,
        start: "top bottom",
        end: "bottom top",
        scrub: scroll.scrub,
      },
    },
  );
  return handleFor([tween, tween.scrollTrigger]);
}

export { ScrollTrigger };
