import { useEffect } from "react";
import { useStore } from "./store";

interface NetworkInformationLike {
  saveData?: boolean;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
}

/**
 * Single source for the reduced-motion + save-data flags.
 * Writes both into the global store and keeps them live.
 */
export function usePrefersReducedMotion() {
  const setReducedMotion = useStore((s) => s.setReducedMotion);
  const setSaveData = useStore((s) => s.setSaveData);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => setReducedMotion(mq.matches);
    onMotionChange();
    mq.addEventListener("change", onMotionChange);

    const conn = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
    const onConnChange = () => setSaveData(Boolean(conn?.saveData));
    onConnChange();
    conn?.addEventListener?.("change", onConnChange);

    return () => {
      mq.removeEventListener("change", onMotionChange);
      conn?.removeEventListener?.("change", onConnChange);
    };
  }, [setReducedMotion, setSaveData]);

  return useStore((s) => s.reducedMotion);
}
