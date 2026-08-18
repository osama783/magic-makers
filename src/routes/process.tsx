import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/content/seo";

const meta = seo["/process"];

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

/* PROVISIONAL: copy pending owner confirmation. */
function Process() {
  return (
    <section className="section-pad mx-auto max-w-[1400px]">
      <p className="t-kicker text-lavender">Provisional</p>
      <h1 className="t-display-l mt-6 text-ivory-50">How the Magic Happens</h1>
      <p className="t-body text-muted-ivory mt-6 max-w-[46ch]">
        Process content pending owner confirmation.
      </p>
    </section>
  );
}
