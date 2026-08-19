import { sceneCopy } from "@/content/sceneCopy";
import type { SpireFloorProps } from "../spire.types";
import { floorShellClass } from "../spire.types";

const copy = sceneCopy[2];

export function Floor02Imagination({ mode }: SpireFloorProps) {
  return (
    <section
      aria-labelledby="spire-floor-imagination"
      className={`${floorShellClass(mode)} items-start justify-center`}
    >
      <h2 id="spire-floor-imagination" className="t-display-l max-w-[18ch] text-ivory-50">
        {copy.headline}
      </h2>
    </section>
  );
}

export default Floor02Imagination;