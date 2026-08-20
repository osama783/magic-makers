import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/anim/primitives";
import { useScrollScene } from "@/anim/useScrollScene";
import { motionProfile } from "@/anim/shouldAnimate";
import { CoreAmbient } from "./CoreAmbient";
import { CorePage } from "./CorePage";
import { CoreStack } from "./CoreStack";
import { CORE_PAGES } from "./core.pages";
import {
  PERSPECTIVE_PX,
  SETTLED,
  clamp01,
  enterTransform,
  exitTransform,
  travelPhase,
  type BoardTransform,
} from "./core.config";
import "./core.css";

/** THE CORE — one cylinder, clusters of boards, one pinned scroll driver. */
export function Core() {
  const [orbit, setOrbit] = useState(false);

  useEffect(() => {
    // Mobile + touch get the SAME spring-and-replace mechanic. Only
    // prefers-reduced-motion collapses to the static vertical document.
    setOrbit(motionProfile() !== "reduced");
  }, []);

  return orbit ? <CoreOrbit /> : <CoreStack />;
}

const ACCENTS = CORE_PAGES.map((p) => p.accent);

function CoreOrbit() {
  const [active, setActive] = useState(0);
  const glowRefs = useRef<Array<HTMLDivElement | null>>([]);

  const scope = useScrollScene<HTMLDivElement>((ctx) => {
    const stage = ctx.selector?.(".core-stage")[0] as HTMLElement | undefined;
    if (!stage) return;

    const state = { p: 0 };

    const apply = () => {
      const p = state.p;
      stage.querySelectorAll<HTMLElement>("[data-core-page]").forEach((pageEl) => {
        const index = Number(pageEl.dataset["corePage"]);
        const d = p - index;
        const phase = travelPhase(d);
        const leaving = d > 0;
        const boards = pageEl.querySelectorAll<HTMLElement>("[data-core-board-inner]");
        const count = boards.length;
        boards.forEach((el, i) => {
          const t: BoardTransform =
            phase === 0
              ? SETTLED
              : leaving
                ? exitTransform(i, count, phase)
                : enterTransform(i, count, phase);
          gsap.set(el, {
            x: t.x,
            y: t.y,
            z: t.z,
            rotateY: t.rotateY,
            scale: t.scale,
            opacity: t.opacity,
          });
        });
        const title = pageEl.querySelector<HTMLElement>("[data-core-title]");
        if (title) gsap.set(title, { opacity: 1 - phase, y: -30 * phase });

        // Doodles drift a touch independently of their board (tiny parallax).
        pageEl.querySelectorAll<HTMLElement>("[data-core-doodle]").forEach((el, i) => {
          const dir = i % 2 === 0 ? -1 : 1;
          gsap.set(el, { x: dir * 6 * phase, y: -10 * phase });
        });
      });

      glowRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: clamp01(1 - Math.abs(p - i)) });
      });

      const next = Math.min(CORE_PAGES.length - 1, Math.max(0, Math.round(p)));
      setActive((prev) => (prev === next ? prev : next));
    };

    // Touch-only: normalize scroll so a pinned gesture advances smoothly
    // instead of jumping with the browser's async scrolling. Desktop is
    // left exactly as it was.
    if (ScrollTrigger.isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
      ScrollTrigger.config({ ignoreMobileResize: true });
    }

    // ONE scroll driver for the whole core (desktop and touch alike).
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: "top top",
        end: `+=${CORE_PAGES.length * 100}%`,
        pin: true,
        pinType: ScrollTrigger.isTouch ? "transform" : "fixed",
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    tl.to(state, {
      p: CORE_PAGES.length - 1,
      duration: 1,
      ease: "none",
      onUpdate: apply,
    });

    // Slow ambient float, applied to the inner wrapper so it never fights
    // the phase parallax above.
    (ctx.selector?.("[data-core-doodle-float]") as Element[] | undefined)?.forEach((el, i) => {
      gsap.to(el, {
        y: -6,
        duration: 3.2 + (i % 3) * 0.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    ScrollTrigger.refresh();

    apply();
  }, []);

  useEffect(
    () => () => {
      // Leaving the route must not leave a normalizer bound to the page.
      ScrollTrigger.normalizeScroll(false);
    },
    [],
  );

  // Only the outgoing, active and incoming clusters are mounted.
  const live = [active - 1, active, active + 1].filter((i) => i >= 0 && i < CORE_PAGES.length);

  return (
    <div ref={scope}>
      <div
        className="core-stage"
        data-animate="true"
        style={{ perspective: `${PERSPECTIVE_PX}px` }}
      >
        <CoreAmbient
          accents={ACCENTS}
          glowRef={(el, i) => {
            glowRefs.current[i] = el;
          }}
        />
        {live.map((i) => {
          const page = CORE_PAGES[i];
          if (!page) return null;
          return <CorePage key={page.key} page={page} index={i} isActive={i === active} />;
        })}
      </div>
    </div>
  );
}

export default Core;
