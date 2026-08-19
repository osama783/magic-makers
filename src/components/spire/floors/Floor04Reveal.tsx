import { Picture } from "@/components/media/Picture";
import { sceneCopy } from "@/content/sceneCopy";
import { kenBurns } from "@/anim/primitives";
import { useScrollScene } from "@/anim/useScrollScene";
import type { SpireFloorProps } from "../spire.types";
import { floorShellClass } from "../spire.types";

const copy = sceneCopy[4];

export function Floor04Reveal({ mode }: SpireFloorProps) {
  // In tower mode the rig owns the scrubbed Ken-Burns (one pinScrub for the whole
  // tower); in the flattened stack the floor drives its own.
  const scope = useScrollScene<HTMLElement>(() => {
    if (mode !== "stack") return;
    const img = document.querySelector("[data-spire-kenburns] img");
    if (img) kenBurns(img);
  }, [mode]);

  return (
    <section
      ref={scope}
      aria-label={sceneCopy[4].name}
      className={`${floorShellClass(mode)} relative !p-0`}
    >
      <div data-spire-kenburns className="absolute inset-0 overflow-hidden">
        <Picture
          id="mm-bluey-hero-environment-01"
          aspect="native"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {/* Legibility scrim — required over photography. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--ink-900) 78%, transparent), transparent 60%)",
        }}
      />
      {/* sceneCopy[4].headline is null — no headline is rendered. */}
      {copy.headline ? (
        <p className="t-h2 relative mt-auto max-w-[22ch] p-6 text-ivory-50">{copy.headline}</p>
      ) : null}
    </section>
  );
}

export default Floor04Reveal;