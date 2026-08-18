import { create } from "zustand";

export type CursorState = "default" | "interactive" | "gallery" | "drag" | "booking";
export type TransitionPhase = "idle" | "exiting" | "entering";
export type TransitionFamily = "portal" | "storybook" | "wipe" | null;

export interface CursorSlice {
  state: CursorState;
  locked: boolean;
}

export interface TransitionSlice {
  phase: TransitionPhase;
  family: TransitionFamily;
  from: string | null;
  to: string | null;
  lock: boolean;
}

interface MagicMindsStore {
  /** Wired now. */
  reducedMotion: boolean;
  setReducedMotion: (v: boolean) => void;

  /** Wired now. */
  saveData: boolean;
  setSaveData: (v: boolean) => void;

  /** Typed placeholder — populated by Packet 4 (MagicCursor). */
  cursor: CursorSlice;
  setCursor: (next: Partial<CursorSlice>) => void;

  /** Typed placeholder — populated by Packet 5 (PageTransition). */
  transition: TransitionSlice;
  setTransition: (next: Partial<TransitionSlice>) => void;
}

/** THE single global store. Do not create a second one. */
export const useStore = create<MagicMindsStore>((set) => ({
  reducedMotion: false,
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),

  saveData: false,
  setSaveData: (saveData) => set({ saveData }),

  cursor: { state: "default", locked: false },
  setCursor: (next) => set((s) => ({ cursor: { ...s.cursor, ...next } })),

  transition: { phase: "idle", family: null, from: null, to: null, lock: false },
  setTransition: (next) => set((s) => ({ transition: { ...s.transition, ...next } })),
}));
