import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type DoodleName =
  | "star"
  | "sparkle"
  | "crayon"
  | "racecar"
  | "rocket"
  | "planet"
  | "butterfly"
  | "party-hat";

export type DoodleVariant = "line" | "glow" | "silhouette";

export interface DoodleProps {
  name: DoodleName;
  /** px */
  size?: number;
  variant?: DoodleVariant;
  className?: string;
  /** When provided the doodle becomes meaningful and is labelled. */
  title?: string;
}

export function Doodle({ name, size = 24, variant = "line", className, title }: DoodleProps) {
  const style: CSSProperties = { width: size, height: size, color: "currentColor" };

  if (variant === "glow") {
    style.filter = "drop-shadow(0 0 6px var(--lavender))";
  } else if (variant === "silhouette") {
    style.opacity = 0.2;
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block shrink-0", className)}
      style={style}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <use href={`#mm-doodle-${name}`} />
    </svg>
  );
}

export default Doodle;
