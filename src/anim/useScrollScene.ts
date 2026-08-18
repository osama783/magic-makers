import { useEffect, useRef, type DependencyList, type RefObject } from "react";
import { gsap } from "gsap";
import { useStore } from "@/lib/store";
import { registerGsap } from "./registerGsap";

export type ScrollSceneSetup = (ctx: gsap.Context) => void;

/**
 * Scoped gsap.context with guaranteed cleanup: every tween and ScrollTrigger
 * created inside `setup` is reverted on unmount or deps change.
 */
export function useScrollScene<T extends HTMLElement = HTMLDivElement>(
  setup: ScrollSceneSetup,
  deps: DependencyList = [],
): RefObject<T | null> {
  const scopeRef = useRef<T | null>(null);
  const setupRef = useRef(setup);
  setupRef.current = setup;

  useEffect(() => {
    if (!scopeRef.current) return;
    registerGsap();
    const ctx = gsap.context((self) => setupRef.current(self), scopeRef);
    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}

/** Read-only view of the reduced-motion flag (writer lives in Packet 1). */
export function useReducedMotion(): boolean {
  return useStore((s) => s.reducedMotion);
}
