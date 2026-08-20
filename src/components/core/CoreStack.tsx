import { CORE_PAGES } from "./core.pages";

/**
 * Static path: prefers-reduced-motion only. No orbit, no pin, no scrub and
 * zero ScrollTriggers — every page rendered in its final readable state,
 * identical content and order.
 */
export function CoreStack() {
  return (
    <div className="core-stack">
      <div className="core-stack-line" aria-hidden="true" />
      {CORE_PAGES.map((page) => (
          <section
            key={page.key}
            aria-label={page.name}
            className="flex flex-col gap-4 py-[var(--section-padding-mobile)] pr-4"
            style={{
              ["--core-accent" as string]: `var(${page.accent})`,
              ["--core-accent-2" as string]: `var(${page.secondary ?? page.accent})`,
            }}
          >
            {page.title ? <div>{page.title}</div> : null}
            <div className="flex flex-col gap-4">
              {page.boards.map((board) => (
                <div key={board.key} className="core-board-inner">
                  {board.node}
                </div>
              ))}
            </div>
          </section>
      ))}
    </div>
  );
}

export default CoreStack;