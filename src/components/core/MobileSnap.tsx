import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { registerGsap } from "@/anim/registerGsap";
import { gsapEaseNames } from "@/anim/tokens";
import { motionProfile } from "@/anim/shouldAnimate";
import { CORE_PAGES } from "./core.pages";
import "./core.css";

/**
 * MOBILE PATH — native HORIZONTAL CSS scroll-snap panels. No pin, no
 * normalizeScroll, no ScrollTrigger. One left swipe = one page (next enters
 * from the right). The entrance animation is purely decorative and fail-safe:
 * panels render in their final readable state.
 */
export function MobileSnap() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [hintGone, setHintGone] = useState(false);

  useEffect(() => {
    if (active > 0) setHintGone(true);
  }, [active]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    const reduced = motionProfile() === "reduced";
    registerGsap();

    const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-snap-panel]"));
    const played = new Set<number>();
    const tweens: gsap.core.Tween[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const index = Number(el.dataset["snapPanel"]);
          setActive((prev) => (prev === index ? prev : index));
          if (reduced || played.has(index)) return;
          played.add(index);
          const boards = el.querySelectorAll<HTMLElement>("[data-core-board-inner]");
          tweens.push(
            gsap.fromTo(
              boards,
              { x: 34, y: 10, scale: 0.97, opacity: 0.35 },
              {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.55,
                stagger: 0.07,
                ease: gsapEaseNames.reveal,
                overwrite: "auto",
                clearProps: "transform,opacity",
              },
            ),
          );
          const doodles = el.querySelectorAll<HTMLElement>("[data-core-doodle-float]");
          if (doodles.length) {
            tweens.push(
              gsap.fromTo(
                doodles,
                { y: 8 },
                { y: -4, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 },
              ),
            );
          }
        });
      },
      { root, threshold: 0.6 },
    );

    panels.forEach((p) => io.observe(p));
    return () => {
      io.disconnect();
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="core-snap" ref={scrollerRef}>
      <div className="core-hud" aria-hidden="true">
        {CORE_PAGES.map((page, i) => (
          <span
            key={page.key}
            className="core-hud-tick"
            data-on={i === active}
            style={{ ["--core-accent" as string]: `var(${page.accent})` }}
          />
        ))}
      </div>
      {CORE_PAGES.map((page, i) => (
        <section
          key={page.key}
          className="core-snap-panel"
          data-snap-panel={i}
          data-active={i === active}
          aria-label={page.name}
          style={{
            ["--core-accent" as string]: `var(${page.accent})`,
            ["--core-accent-2" as string]: `var(${page.secondary ?? page.accent})`,
          }}
        >
          <div className="core-snap-glow" aria-hidden="true" />
          <div className="core-snap-scan" aria-hidden="true" />
          {i === 0 ? (
            <div className="core-snap-hint" aria-hidden="true" data-dismissed={hintGone}>
              Swipe →
            </div>
          ) : null}
          <div className="core-snap-content">
            {page.title ? <div className="core-page-title">{page.title}</div> : null}
            <div className="core-snap-cluster" data-count={page.boards.length}>
              {page.boards.map((board) => (
                <div key={board.key} className="core-board">
                  <div
                    className="core-board-inner"
                    data-core-board-inner
                    style={board.flush ? { padding: 0, overflow: "hidden" } : undefined}
                  >
                    {board.node}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default MobileSnap;
