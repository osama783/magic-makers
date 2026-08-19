import { useScrollScene } from "@/anim/useScrollScene";
import { revealOnScroll } from "@/anim/primitives";
import { motionProfile } from "@/anim/shouldAnimate";
import { CORE_PAGES } from "./core.pages";

/**
 * Flat path: mobile, lite and reduced motion. No orbit, no pin, no scrub —
 * same pages, same order, each cluster stacked as full-width cards.
 * Under reduced motion no ScrollTrigger is created at all.
 */
export function CoreStack() {
  const scope = useScrollScene<HTMLDivElement>((ctx) => {
    if (motionProfile() === "reduced") return;
    const cards = ctx.selector?.("[data-stack-card]") as Element[] | undefined;
    cards?.forEach((el) => revealOnScroll(el));
  }, []);

  return (
    <div ref={scope} className="core-stack">
      <div className="core-stack-line" aria-hidden="true" />
      {CORE_PAGES.map((page) => {
        const isPortals = page.key === "themes";
        return (
          <section
            key={page.key}
            aria-label={page.name}
            className="flex flex-col gap-4 py-[var(--section-padding-mobile)] pr-4"
            style={{ ["--core-accent" as string]: `var(${page.accent})` }}
          >
            {page.title ? <div data-stack-card>{page.title}</div> : null}
            <div className={isPortals ? "core-portal-row" : "flex flex-col gap-4"}>
              {page.boards.map((board) => (
                <div key={board.key} data-stack-card className="core-board-inner">
                  {board.node}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default CoreStack;