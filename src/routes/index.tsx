import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/content/seo";
import { Spire } from "@/components/spire/Spire";

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
  return <Spire />;
}
