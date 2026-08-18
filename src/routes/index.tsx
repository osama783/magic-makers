import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/content/seo";
import { site } from "@/content/site";

const meta = seo["/"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <section className="section-pad mx-auto max-w-[1400px]">
      <p className="t-kicker text-lavender">{site.tagline}</p>
      <h1 className="t-display-xl mt-6 text-ivory-50">{site.brandName}</h1>
      <p className="t-body text-muted-ivory mt-6 max-w-[46ch]">
        Customized, themed children's experiences — {site.region}.
      </p>
      {/* Film scenes arrive in Packet 6+. */}
    </section>
  );
}
