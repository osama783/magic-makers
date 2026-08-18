import { createFileRoute } from "@tanstack/react-router";
import { defaultSeo } from "@/content/seo";

export const Route = createFileRoute("/adventures/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — MagicMinds` },
      { name: "description", content: defaultSeo.description },
      { property: "og:title", content: `${params.slug} — MagicMinds` },
      { property: "og:description", content: defaultSeo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `/adventures/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/adventures/${params.slug}` }],
  }),
  component: AdventureDetail,
});

function AdventureDetail() {
  const { slug } = Route.useParams();
  return (
    <section className="section-pad mx-auto max-w-[1400px]">
      <p className="t-kicker text-lavender">Adventure</p>
      <h1 className="t-display-l mt-6 text-ivory-50">{slug}</h1>
      <p className="t-body text-muted-ivory mt-6 max-w-[46ch]">
        Adventure content arrives in a later build.
      </p>
    </section>
  );
}
