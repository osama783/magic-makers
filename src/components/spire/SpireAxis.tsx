import type { CSSProperties } from "react";
import { SPIRE_FLOORS, type AxisState } from "./spire.config";

/**
 * The luminous vertical axis. One core line plus stacked gradient glow layers —
 * one per axis state. The rig cross-fades the layers on the same scroll progress,
 * so only opacity ever animates. Tokens only; no WebGL, no filters.
 */

const CORE: Record<AxisState, string> = {
  void: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--lavender) 35%, transparent), transparent)",
  wake: "linear-gradient(to bottom, transparent, var(--lavender), transparent)",
  bloom:
    "linear-gradient(to bottom, transparent, var(--lavender), color-mix(in srgb, var(--butter) 60%, var(--lavender)), transparent)",
  warm: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--butter) 70%, var(--lavender)), transparent)",
  golden: "linear-gradient(to bottom, transparent, var(--butter), transparent)",
};

const GLOW: Record<AxisState, string> = {
  void: "radial-gradient(ellipse 40% 45% at 50% 50%, color-mix(in srgb, var(--violet-deep) 26%, transparent), transparent 70%)",
  wake: "radial-gradient(ellipse 46% 50% at 50% 50%, color-mix(in srgb, var(--lavender) 26%, transparent), transparent 70%)",
  bloom:
    "radial-gradient(ellipse 52% 55% at 50% 50%, color-mix(in srgb, var(--lavender) 34%, transparent), transparent 72%)",
  warm: "radial-gradient(ellipse 58% 60% at 50% 50%, color-mix(in srgb, var(--butter) 30%, transparent), transparent 74%)",
  golden:
    "radial-gradient(ellipse 62% 64% at 50% 50%, color-mix(in srgb, var(--butter) 38%, transparent), transparent 76%)",
};

export interface SpireAxisProps {
  /** Flattened stack renders a single static line at the left edge. */
  variant?: "tower" | "stack";
  /** Static state for the stack / reduced-motion paths. */
  state?: AxisState;
  className?: string;
}

export function SpireAxis({ variant = "tower", state = "void", className }: SpireAxisProps) {
  if (variant === "stack") {
    const style: CSSProperties = { background: CORE[state] };
    return <div aria-hidden="true" className={`spire-stack-axis ${className ?? ""}`} style={style} />;
  }

  return (
    <div aria-hidden="true" className={`spire-axis ${className ?? ""}`} data-spire-axis>
      {SPIRE_FLOORS.map((floor, i) => (
        <div
          key={floor.key}
          className="spire-axis-layer"
          data-axis-layer={i}
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <div className="spire-axis-glow" style={{ background: GLOW[floor.axisState] }} />
          <div className="spire-axis-core" style={{ background: CORE[floor.axisState] }} />
        </div>
      ))}
    </div>
  );
}

export default SpireAxis;