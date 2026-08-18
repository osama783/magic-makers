import type { TransitionFamily } from "@/lib/store";

/** Data only — the transition engine lands in Packet 5. */
export const routeMeta: Record<string, TransitionFamily> = {
  "/": null,
  "/worlds/:slug": "portal",
  "/adventures/:slug": "wipe",
  "/about": "storybook",
  "/process": "storybook",
  "/create": "storybook",
  "*": "storybook",
};
