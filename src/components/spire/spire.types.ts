/** Shared Spire types. Kept dependency-free so floors and the rig can both import it. */

export type SpireMode = "tower" | "stack";

export interface SpireFloorProps {
  mode: SpireMode;
}

/** Layout shell every floor shares, in both the rotating tower and the flat stack. */
export function floorShellClass(mode: SpireMode): string {
  return mode === "tower"
    ? "flex h-full w-full flex-col p-6 md:p-10"
    : "relative flex min-h-[100svh] w-full flex-col justify-center p-6 md:p-10";
}