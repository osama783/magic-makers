import { useEffect, useState } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

/** ONE breakpoint definition, mirrored in the Tailwind screens in styles.css. */
export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
} as const;

const DESKTOP_QUERY = `(min-width: ${BREAKPOINTS.desktop}px) and (pointer: fine)`;
const TABLET_QUERY = `(min-width: ${BREAKPOINTS.tablet}px)`;

function read(): Breakpoint {
  if (typeof window === "undefined" || !window.matchMedia) return "mobile";
  if (window.matchMedia(DESKTOP_QUERY).matches) return "desktop";
  if (window.matchMedia(TABLET_QUERY).matches) return "tablet";
  return "mobile";
}

/** SSR-safe: defaults to "mobile" until hydration measures the client. */
export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("mobile");

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const queries = [window.matchMedia(DESKTOP_QUERY), window.matchMedia(TABLET_QUERY)];
    const update = () => setBp(read());
    update();
    queries.forEach((q) => q.addEventListener("change", update));
    return () => queries.forEach((q) => q.removeEventListener("change", update));
  }, []);

  return bp;
}
