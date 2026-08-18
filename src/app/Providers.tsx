import { useEffect, type ReactNode } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { DoodleSprite } from "@/components/media/DoodleSprite";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useBreakpoint } from "@/lib/useBreakpoint";
import { useStore } from "@/lib/store";
import { registerGsap } from "@/anim/registerGsap";
import { initSmoothScroll } from "@/anim/smoothScroll";


/**
 * Wires the global concerns exactly once:
 * GSAP registration, reduced-motion + save-data detection, error boundary.
 * Head metadata is handled by TanStack Router's route-level head() option
 * (this stack's single head mechanism — react-helmet-async is not used).
 */
export function Providers({ children }: { children: ReactNode }) {
  usePrefersReducedMotion();
  const breakpoint = useBreakpoint();
  const reducedMotion = useStore((s) => s.reducedMotion);
  const saveData = useStore((s) => s.saveData);

  useEffect(() => {
    registerGsap();
  }, []);

  // Re-evaluate the smooth-scroll driver whenever the motion profile can change.
  useEffect(() => {
    const teardown = initSmoothScroll();
    return teardown;
  }, [breakpoint, reducedMotion, saveData]);


  return (
    <ErrorBoundary>
      <DoodleSprite />
      {children}
    </ErrorBoundary>
  );
}

export default Providers;
