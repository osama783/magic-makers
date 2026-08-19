import { Doodle } from "@/components/media/Doodle";
import { sceneCopy } from "@/content/sceneCopy";
import { site } from "@/content/site";
import type { SpireFloorProps } from "../spire.types";
import { floorShellClass } from "../spire.types";

const copy = sceneCopy[1];

export function Floor01Invitation({ mode }: SpireFloorProps) {
  return (
    <section
      aria-labelledby="spire-floor-invitation"
      className={`${floorShellClass(mode)} items-center justify-center text-center`}
    >
      <p className="t-kicker text-lavender">{copy.kicker}</p>
      <h1 id="spire-floor-invitation" className="t-display-xl mt-4 text-ivory-50">
        {site.brandName}
      </h1>
      {copy.concept ? (
        <p className="t-body text-muted-ivory mt-5 max-w-[36ch]">{copy.concept}</p>
      ) : null}
      <p className="t-caption text-muted-ivory mt-6">{copy.label}</p>

      <span
        data-spire-star
        className="mt-8 inline-flex text-lavender"
        style={{ animation: "none" }}
      >
        <Doodle name="star" variant="glow" size={28} />
      </span>

      <p className="t-caption text-muted-ivory mt-8">Scroll</p>
    </section>
  );
}

export default Floor01Invitation;