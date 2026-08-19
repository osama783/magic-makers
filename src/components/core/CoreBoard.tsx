import type { ReactNode } from "react";
import { boardBase } from "./core.config";

export interface CoreBoardProps {
  index: number;
  count: number;
  children: ReactNode;
  /** Photo boards drop the inner padding. */
  flush?: boolean;
  /** Spans both columns of the cluster grid. */
  wide?: boolean;
}

/** A frosted-glass panel with an accent rim-light, seated on the core face. */
export function CoreBoard({ index, count, children, flush, wide }: CoreBoardProps) {
  const base = boardBase(index, count);
  return (
    <div
      className="core-board"
      data-core-board={index}
      style={{
        gridColumn: wide ? "1 / -1" : undefined,
        transform: `translateZ(${base.z}px) rotateY(${base.rotateY}deg)`,
      }}
    >
      <div
        className="core-board-inner"
        data-core-board-inner={index}
        style={flush ? { padding: 0, overflow: "hidden" } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

export default CoreBoard;