import type { AccentToken } from "./core.config";

export interface CoreCylinderProps {
  /** All page accents, in order — one stacked glow layer each. */
  accents: readonly AccentToken[];
  /** Opacity per accent layer, driven by the scroll rig. */
  glowRef?: (el: HTMLDivElement | null, index: number) => void;
}

/** The chrome/holographic column with an accent-tinted outer glow. CSS only. */
export function CoreCylinder({ accents, glowRef }: CoreCylinderProps) {
  return (
    <div className="core-cylinder" aria-hidden="true">
      {accents.map((accent, i) => (
        <div
          key={accent + i}
          ref={(el) => glowRef?.(el, i)}
          data-core-glow={i}
          className="core-glow"
          style={{ ["--core-accent" as string]: `var(${accent})`, opacity: i === 0 ? 1 : 0 }}
        />
      ))}
      <div className="core-column" />
      <div className="core-sheen" />
    </div>
  );
}

export default CoreCylinder;