import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { pinScrub } from "@/anim/primitives";
import { useScrollScene } from "@/anim/useScrollScene";
import { motionProfile } from "@/anim/shouldAnimate";
import { CoreAmbient } from "./CoreAmbient";
import { CorePage } from "./CorePage";
import { CoreStack } from "./CoreStack";
import { MobileSnap } from "./MobileSnap";
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
  const [path, setPath] = useState<"static" | "snap" | "orbit">("static");

  useEffect(() => {
    // reduced -> static document; mobile/lite -> native scroll-snap panels;
    // full desktop -> the pinned spring-and-replace (unchanged).
    const profile = motionProfile();
    setPath(profile === "reduced" ? "static" : profile === "full" ? "orbit" : "snap");
  }, []);

  if (path === "orbit") return <CoreOrbit />;
  if (path === "snap") return <MobileSnap />;
  return <CoreStack />;
}

const ACCENTS = CORE_PAGES.map((p) => p.accent);

/** Cached gsap.quickSetter per element so per-frame writes don't re-parse
 *  transform props every frame (the source of desktop chunkiness). Remounted
 *  clusters get fresh setters automatically since the WeakMap keys on the
 *  element instance. */
type SetterBag = {
  x: (v: number) => void;
  y: (v: number) => void;
  z: (v: number) => void;
  rotateY: (v: number) => void;
  scale: (v: number) => void;
  opacity: (v: number) => void;
};
const setters = new WeakMap<HTMLElement, SetterBag>();
function boardSetter(el: HTMLElement): SetterBag {
  let s: SetterBag | undefined = setters.get(el);
  if (!s) {
    s = {
      x: gsap.quickSetter(el, "x", "px") as (v: number) => void,
      y: gsap.quickSetter(el, "y", "px") as (v: number) => void,
      z: gsap.quickSetter(el, "z", "px") as (v: number) => void,
      rotateY: gsap.quickSetter(el, "rotateY", "deg") as (v: number) => void,
      scale: gsap.quickSetter(el, "scale") as (v: number) => void,
      opacity: gsap.quickSetter(el, "opacity") as (v: number) => void,
    };
    setters.set(el, s);
  }
  return s;
}
type TitleSetterBag = { y: (v: number) => void; opacity: (v: number) => void };
const titleSetters = new WeakMap<HTMLElement, TitleSetterBag>();
function titleSetter(el: HTMLElement): TitleSetterBag {
  let s: TitleSetterBag | undefined = titleSetters.get(el);
  if (!s) {
    s = {
      y: gsap.quickSetter(el, "y", "px") as (v: number) => void,
      opacity: gsap.quickSetter(el, "opacity") as (v: number) => void,
    };
    titleSetters.set(el, s);
  }
  return s;
}
const glowSetters = new WeakMap<HTMLElement, (v: number) => void>();
function glowSetter(el: HTMLElement): (v: number) => void {
  let s: ((v: number) => void) | undefined = glowSetters.get(el);
  if (!s) {
    s = gsap.quickSetter(el, "opacity") as (v: number) => void;
    glowSetters.set(el, s);
  }
  return s;
}

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
      });

      glowRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: clamp01(1 - Math.abs(p - i)) });
      });

      const next = Math.min(CORE_PAGES.length - 1, Math.max(0, Math.round(p)));
      setActive((prev) => (prev === next ? prev : next));
    };

    // ONE scroll driver for the whole core — the tuned pinScrub primitive
    // (uses scroll.scrub token + correct pin config).
    pinScrub(stage, {
      end: `+=${CORE_PAGES.length * 100}%`,
      build: (tl) => {
        tl.to(state, {
          p: CORE_PAGES.length - 1,
          duration: 1,
          ease: "none",
          onUpdate: apply,
        });
      },
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

    apply();
  }, []);

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
