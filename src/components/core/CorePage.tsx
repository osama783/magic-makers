import { CoreBoard } from "./CoreBoard";
import type { CorePageSpec } from "./core.pages";

export interface CorePageProps {
  page: CorePageSpec;
  index: number;
  isActive: boolean;
}

/** One page = a cluster of 1–4 boards wrapped around the core face. */
export function CorePage({ page, index, isActive }: CorePageProps) {
  const count = page.boards.length;
  return (
    <section
      className="core-page"
      data-core-page={index}
      data-active={isActive}
      aria-label={page.name}
      aria-hidden={!isActive}
      inert={!isActive}
      style={{
        ["--core-accent" as string]: `var(${page.accent})`,
        ["--core-accent-2" as string]: `var(${page.secondary ?? page.accent})`,
      }}
    >
      {page.title ? (
        <div className="core-page-title" data-core-title>
          {page.title}
        </div>
      ) : null}
      <div className="core-cluster" data-count={count}>
        {page.boards.map((board, i) => (
          <CoreBoard
            key={board.key}
            index={i}
            count={count}
            {...(board.flush ? { flush: true } : {})}
            {...(board.wide ? { wide: true } : {})}
          >
            {board.node}
          </CoreBoard>
        ))}
      </div>
    </section>
  );
}

export default CorePage;