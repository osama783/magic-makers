import type { ReactNode } from "react";
import { PERSPECTIVE_PX, STEP_DEG } from "./spire.config";

export interface SpirePanelProps {
  /** Facet slot index (0..SLOT_COUNT-1). */
  slot: number;
  isFront: boolean;
  children: ReactNode;
}

/**
 * One facet of the tower. The outer slot owns depth (opacity/scale via CSS state);
 * the inner element is what the transition families animate — never both at once.
 */
export function SpirePanel({ slot, isFront, children }: SpirePanelProps) {
  return (
    <div
      className="spire-slot"
      data-facet-slot={slot}
      data-front={isFront ? "true" : "false"}
      aria-hidden={isFront ? undefined : true}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      inert={isFront ? undefined : true}
      style={{
        transform: `rotateY(${slot * STEP_DEG}deg) translateZ(var(--spire-radius))`,
      }}
    >
      <div className="spire-facet-inner" data-facet-inner={slot}>
        {children}
      </div>
    </div>
  );
}

export const SPIRE_PERSPECTIVE = PERSPECTIVE_PX;

export default SpirePanel;