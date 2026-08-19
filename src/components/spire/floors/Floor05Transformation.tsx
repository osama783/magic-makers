import { Picture } from "@/components/media/Picture";
import { sceneCopy } from "@/content/sceneCopy";
import type { SpireFloorProps } from "../spire.types";
import { floorShellClass } from "../spire.types";

const copy = sceneCopy[5];

export function Floor05Transformation({ mode }: SpireFloorProps) {
  return (
    <section
      aria-labelledby="spire-floor-transformation"
      className={`${floorShellClass(mode)} relative !p-0`}
    >
      {/* MISSING ASSET — a real empty→complete table sequence does not exist; this is the
          documented masked-reveal fallback. No assembly steps are generated or faked. */}
      <div data-spire-wipe className="absolute inset-0">
        <Picture
          id="mm-bluey-setup-garden-01"
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--ink-900) 80%, transparent), transparent 62%)",
        }}
      />
      <h2
        id="spire-floor-transformation"
        className="t-h2 relative mt-auto max-w-[22ch] p-6 text-ivory-50"
      >
        {copy.headline}
      </h2>
    </section>
  );
}

export default Floor05Transformation;