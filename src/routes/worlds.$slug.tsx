import { createFileRoute } from "@tanstack/react-router";
import { defaultSeo } from "@/content/seo";

export const Route = createFileRoute("/worlds/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — MagicMinds` },
      { name: "description", content: defaultSeo.description },
      { property: "og:title", content: `${params.slug} — MagicMinds` },
      { property: "og:description", content: defaultSeo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `/worlds/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/worlds/${params.slug}` }],
  }),
  component: ThemeWorld,
});

function ThemeWorld() {
  const { slug } = Route.useParams();
  return (
    <section className="section-pad mx-auto max-w-[1400px]">
      <p className="t-kicker text-lavender">Theme world</p>
      <h1 className="t-display-l mt-6 text-ivory-50">{slug}</h1>
      <p className="t-body text-muted-ivory mt-6 max-w-[46ch]">
        Theme world content arrives in a later build.
      </p>
    </section>
  );
}
