import type { AccentToken } from "./core.config";

export interface CoreAmbientProps {
  /** All page accents, in order — one stacked ambient layer each. */
  accents: readonly AccentToken[];
  /** Opacity per accent layer, driven by the scroll rig. */
  glowRef?: (el: HTMLDivElement | null, index: number) => void;
}

/** A faint, wide radial wash behind the cluster — never a bar or column. */
export function CoreAmbient({ accents, glowRef }: CoreAmbientProps) {
  return (
    <div className="core-ambient" aria-hidden="true">
      {accents.map((accent, i) => (
        <div
          key={accent + i}
          ref={(el) => glowRef?.(el, i)}
          data-core-glow={i}
          className="core-ambient-layer"
          style={{ ["--core-accent" as string]: `var(${accent})`, opacity: i === 0 ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

export default CoreAmbient;