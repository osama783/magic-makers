import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { pinScrub, revealOnScroll } from "@/anim/primitives";
import { useScrollScene } from "@/anim/useScrollScene";
import { motionProfile, shouldAnimate } from "@/anim/shouldAnimate";
import { gsapEaseNames, scroll } from "@/anim/tokens";
import { SpireAxis } from "./SpireAxis";
import { SpirePanel } from "./SpirePanel";
import { transitions } from "./transitions";
import {
  PERSPECTIVE_PX,
  ROTATE_PORTION,
  SCROLL_END,
  SLOT_COUNT,
  SPIRE_FLOORS,
  STEP_DEG,
  liveFloorIndices,
  slotForFloor,
} from "./spire.config";
import "./spire.css";

/**
 * The Spire — a faceted CSS-3D tower. Exactly ONE pinScrub drives the rig's
 * rotation; each floor owns an equal scroll slice with a settle plateau in the
 * middle so copy is always read stationary and flat-on.
 */
export function Spire() {
  const [tower, setTower] = useState(false);

  useEffect(() => {
    setTower(motionProfile() === "full");
  }, []);

  return tower ? <SpireTower /> : <SpireStack />;
}

/* ------------------------------------------------------------------ tower */

function SpireTower() {
  const [active, setActive] = useState(0);

  const scope = useScrollScene<HTMLDivElement>((ctx) => {
    const root = ctx.selector?.(".spire-stage")[0] as HTMLElement | undefined;
    if (!root) return;
    const rig = root.querySelector<HTMLElement>(".spire-rig");
    if (!rig) return;

    const state = { rot: 0, kb: 0 };
    const applyRig = () => {
      gsap.set(rig, { rotateY: state.rot });
      const next = Math.min(
        SPIRE_FLOORS.length - 1,
        Math.max(0, Math.round(-state.rot / STEP_DEG)),
      );
      setActive((prev) => (prev === next ? prev : next));
    };

    pinScrub(root, {
      end: SCROLL_END,
      build: (tl) => {
        tl.eventCallback("onUpdate", applyRig);

        const rotate = ROTATE_PORTION;
        const half = rotate / 2;

        // Floor 1 holds through its settle plateau before the first swap.
        tl.to(state, { rot: 0, duration: 1 - half, ease: "none" }, 0);

        SPIRE_FLOORS.forEach((floor, i) => {
          if (i === 0) return;
          const position = i - half;

          tl.to(
            state,
            { rot: -i * STEP_DEG, duration: rotate, ease: gsapEaseNames.reveal },
            position,
          );

          const incoming = root.querySelector(`[data-facet-inner="${slotForFloor(i)}"]`);
          const outgoing = root.querySelector(`[data-facet-inner="${slotForFloor(i - 1)}"]`);
          const family = floor.transition;
          if (incoming && family) {
            transitions[family](tl, { incoming, outgoing }, position, rotate);
          }

          // Axis advances one state per floor: near-black → lavender → warm → golden.
          const prevLayer = root.querySelector(`[data-axis-layer="${i - 1}"]`);
          const layer = root.querySelector(`[data-axis-layer="${i}"]`);
          if (prevLayer) tl.to(prevLayer, { opacity: 0, duration: rotate, ease: "none" }, position);
          if (layer) tl.to(layer, { opacity: 1, duration: rotate, ease: "none" }, position);
        });

        // Scrubbed Ken-Burns on the reveal floor, driven by the single timeline.
        tl.to(
          state,
          {
            kb: 1,
            duration: 1,
            ease: "none",
            onUpdate: () => {
              const img = root.querySelector("[data-spire-kenburns] img");
              if (img) gsap.set(img, { scale: 1 + (scroll.kenBurns[1] - 1) * state.kb });
            },
          },
          3 - half,
        );

        // Trailing plateau so the final floor is read stationary.
        tl.to(state, { rot: -(SPIRE_FLOORS.length - 1) * STEP_DEG, duration: half, ease: "none" });
      },
    });

    if (shouldAnimate()) {
      const star = root.querySelector("[data-spire-star]");
      if (star) {
        gsap.to(star, { y: -8, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
      }
    }
  }, []);

  const live = liveFloorIndices(active);

  return (
    <div ref={scope}>
      <div className="spire-stage" style={{ perspective: `${PERSPECTIVE_PX}px` }}>
        <SpireAxis variant="tower" />
        <div className="spire-dolly">
          <div className="spire-rig">
            {Array.from({ length: SLOT_COUNT }, (_, slot) => {
            const index = live.find((i) => slotForFloor(i) === slot);
            const floor = index === undefined ? undefined : SPIRE_FLOORS[index];
            const Component = floor?.component;
            return (
              <SpirePanel key={slot} slot={slot} isFront={index === active}>
                {Component ? <Component mode="tower" /> : null}
              </SpirePanel>
            );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ stack */

/**
 * Flattened path: mobile, save-data / lite, and reduced motion. Same five floors,
 * same order, same content — no rotation, no pin, no scrub. Under reduced motion
 * no ScrollTrigger is created at all and every floor is in its final state.
 */
function SpireStack() {
  const scope = useScrollScene<HTMLDivElement>((ctx) => {
    if (motionProfile() === "reduced") return;
    const sections = ctx.selector?.("[data-stack-floor]") as Element[] | undefined;
    sections?.forEach((el) => revealOnScroll(el));
  }, []);

  return (
    <div ref={scope} className="relative">
      <SpireAxis variant="stack" state="wake" />
      {SPIRE_FLOORS.map((floor) => {
        const Component = floor.component;
        return (
          <div key={floor.key} data-stack-floor className="relative pl-6">
            <Component mode="stack" />
          </div>
        );
      })}
    </div>
  );
}

export default Spire;