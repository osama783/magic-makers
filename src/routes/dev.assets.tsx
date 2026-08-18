import { createFileRoute } from "@tanstack/react-router";
import { Picture } from "@/components/media/Picture";
import { Doodle, type DoodleName } from "@/components/media/Doodle";
import { themes } from "@/content/themes";
import { adventures } from "@/content/adventures";

/** DEV-ONLY acceptance harness for Packet 2. Not in nav, not in the sitemap. */
export const Route = createFileRoute("/dev/assets")({
  head: () => ({
    meta: [
      { title: "Asset harness — MagicMinds (dev)" },
      { name: "description", content: "Internal harness for the MagicMinds photo and doodle primitives." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Asset harness — MagicMinds (dev)" },
      { property: "og:description", content: "Internal harness for the MagicMinds photo and doodle primitives." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DevAssets,
});

const doodleNames: DoodleName[] = [
  "star",
  "sparkle",
  "crayon",
  "racecar",
  "rocket",
  "planet",
  "butterfly",
  "party-hat",
];

function DevAssets() {
  const cover = adventures[0]!;

  return (
    <section className="section-pad mx-auto max-w-[1400px]">
      <h1 className="t-display-l text-ivory-50">Asset harness</h1>

      <h2 className="t-h2 text-ivory-50 mt-10">Theme portals</h2>
      <ul className="mt-6 flex flex-wrap gap-4 list-none p-0">
        {themes.map((theme) => (
          <li key={theme.id} style={{ borderBottom: `2px solid ${theme.accent}` }}>
            <Picture id={theme.portalPhotoId} aspect="1:1" sizes="200px" className="w-[200px]" />
            <p className="t-body text-muted-ivory mt-2">{theme.label}</p>
          </li>
        ))}
      </ul>

      <h2 className="t-h2 text-ivory-50 mt-12">Adventure cover</h2>
      <div className="mt-6 max-w-[640px]">
        <Picture
          id={cover.coverPhotoId}
          aspect="16:9"
          sizes="(min-width: 768px) 640px, 100vw"
          priority
        />
        <p className="t-body text-muted-ivory mt-2">{cover.title}</p>
      </div>

      <h2 className="t-h2 text-ivory-50 mt-12">Doodles</h2>
      <div className="mt-6 flex flex-wrap gap-6 text-lavender">
        {doodleNames.map((name) => (
          <Doodle key={name} name={name} size={48} title={name} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-6 text-lavender">
        <Doodle name="star" size={48} variant="glow" />
        <Doodle name="rocket" size={48} variant="silhouette" />
      </div>
    </section>
  );
}
