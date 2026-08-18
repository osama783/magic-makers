/**
 * Minimal decode coordinator: caps concurrent high-cost image decodes.
 * Max in-flight = 2 (1 when the store's saveData flag is on).
 * Only priority images should use it; lazy images bypass it entirely.
 */
import { useStore } from "@/lib/store";

type Task = () => void;

let inFlight = 0;
const queue: Task[] = [];

function maxInFlight(): number {
  return useStore.getState().saveData ? 1 : 2;
}

function pump(): void {
  while (inFlight < maxInFlight() && queue.length > 0) {
    const next = queue.shift();
    if (next) {
      inFlight += 1;
      next();
    }
  }
}

function done(): void {
  inFlight = Math.max(0, inFlight - 1);
  pump();
}

export function requestDecode(img: HTMLImageElement): Promise<void> {
  return new Promise<void>((resolve) => {
    const run = () => {
      const settle = () => {
        done();
        resolve();
      };
      if (typeof img.decode === "function") {
        img.decode().then(settle, settle);
      } else if (img.complete) {
        settle();
      } else {
        img.addEventListener("load", settle, { once: true });
        img.addEventListener("error", settle, { once: true });
      }
    };
    queue.push(run);
    pump();
  });
}
