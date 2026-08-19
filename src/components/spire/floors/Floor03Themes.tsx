import { Link } from "@tanstack/react-router";
import { Picture } from "@/components/media/Picture";
import { sceneCopy } from "@/content/sceneCopy";
import { themes } from "@/content/themes";
import type { SpireFloorProps } from "../spire.types";
import { floorShellClass } from "../spire.types";

const copy = sceneCopy[3];

export function Floor03Themes({ mode }: SpireFloorProps) {
  return (
    <section
      aria-labelledby="spire-floor-themes"
      className={`${floorShellClass(mode)} justify-center`}
    >
      <h2 id="spire-floor-themes" className="t-h2 max-w-[20ch] text-ivory-50">
        {copy.headline}
      </h2>

      <ul className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible">
        {themes.map((theme) => (
          <li key={theme.id} className="w-[60vw] shrink-0 snap-start md:w-auto">
            <Link
              to="/worlds/$slug"
              params={{ slug: theme.slug }}
              className="group block min-h-[44px] rounded-[var(--radius-circular)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lavender)]"
            >
              <span
                className="block overflow-hidden rounded-[var(--radius-circular)]"
                style={{ boxShadow: `0 0 0 2px ${theme.accent}` }}
              >
                <Picture
                  id={theme.portalPhotoId}
                  aspect="1:1"
                  sizes="(max-width:768px) 60vw, 18vw"
                  className="rounded-[var(--radius-circular)]"
                />
              </span>
              <span className="t-caption mt-3 block text-ivory-50">{theme.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Floor03Themes;