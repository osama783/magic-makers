import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/content/seo";

const meta = seo["/create"];

export const Route = createFileRoute("/create")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/create" },
    ],
    links: [{ rel: "canonical", href: "/create" }],
  }),
  component: Create,
});

function Create() {
  return (
    <section className="section-pad mx-auto max-w-[1400px]">
      <p className="t-kicker text-lavender">Inquiry</p>
      <h1 className="t-display-l mt-6 text-ivory-50">Create Their Day</h1>
      <p className="t-body text-muted-ivory mt-6 max-w-[46ch]">
        Inquiry form arrives in a later build.
      </p>
    </section>
  );
}
