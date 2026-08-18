import { createFileRoute } from "@tanstack/react-router";
import { gsap } from "gsap";
import { Picture } from "@/components/media/Picture";
import { useScrollScene } from "@/anim/useScrollScene";
import { kenBurns, parallax, pinScrub, revealOnScroll, staggerReveal } from "@/anim/primitives";

/** DEV-ONLY acceptance harness for Packet 3. Not in nav, not in the sitemap. */
export const Route = createFileRoute("/dev/motion")({
  head: () => ({
    meta: [
      { title: "Motion harness — MagicMinds (dev)" },
      { name: "description", content: "Internal harness for the MagicMinds scroll-motion primitives." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Motion harness — MagicMinds (dev)" },
      { property: "og:description", content: "Internal harness for the MagicMinds scroll-motion primitives." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DevMotion,
});

function RevealSection() {
  const scope = useScrollScene<HTMLElement>(() => {
    revealOnScroll(".mm-reveal-heading");
    staggerReveal(gsap.utils.toArray<HTMLElement>(".mm-reveal-box"));
  });

  return (
    <section ref={scope} className="section-pad mx-auto max-w-[1200px] min-h-screen">
      <h2 className="t-h2 text-ivory-50 mm-reveal-heading">Reveal + stagger</h2>
      <div className="mt-10 flex flex-wrap gap-4">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="mm-reveal-box h-32 w-32 border border-lavender/60 flex items-center justify-center"
          >
            <span className="t-caption text-muted-ivory">Box {n}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ParallaxSection() {
  const scope = useScrollScene<HTMLElement>(() => {
    parallax(".mm-par-back", { amount: 120 });
    parallax(".mm-par-front", { amount: -60 });
  });

  return (
    <section ref={scope} className="section-pad mx-auto max-w-[1200px] min-h-screen relative">
      <h2 className="t-h2 text-ivory-50">Parallax layers</h2>
      <div className="relative mt-16 h-[40vh]">
        <div className="mm-par-back absolute inset-x-0 top-0 h-40 bg-ink-700" />
        <div className="mm-par-front absolute left-10 top-16 h-40 w-64 border border-butter/70 flex items-center justify-center">
          <span className="t-caption text-muted-ivory">Front layer</span>
        </div>
      </div>
    </section>
  );
}

function PinSection() {
  const scope = useScrollScene<HTMLElement>((ctx) => {
    const root = ctx.selector?.(".mm-pin-root")[0] as Element | undefined;
    if (!root) return;
    pinScrub(root, {
      end: "+=120%",
      build: (tl) => {
        tl.to(".mm-pin-box", { x: 240, ease: "none" }, 0)
          .to(".mm-pin-cap-a", { opacity: 0, ease: "none" }, 0)
          .to(".mm-pin-cap-b", { opacity: 1, ease: "none" }, 0);
      },
    });
  });

  return (
    <section ref={scope}>
      <div className="mm-pin-root section-pad mx-auto max-w-[1200px] min-h-screen">
        <h2 className="t-h2 text-ivory-50">Pin + scrub</h2>
        <div className="mm-pin-box mt-12 h-32 w-32 border border-mint/70" />
        <p className="mm-pin-cap-a t-body text-muted-ivory mt-8">Caption one.</p>
        <p className="mm-pin-cap-b t-body text-muted-ivory mt-2 opacity-0">Caption two.</p>
      </div>
    </section>
  );
}

function KenBurnsSection() {
  const scope = useScrollScene<HTMLElement>((ctx) => {
    const img = ctx.selector?.(".mm-kb img")[0] as Element | undefined;
    if (img) kenBurns(img);
  });

  return (
    <section ref={scope} className="section-pad mx-auto max-w-[1200px] min-h-screen">
      <h2 className="t-h2 text-ivory-50">Ken Burns</h2>
      <div className="mm-kb mt-10 overflow-hidden">
        <Picture id="mm-bluey-hero-environment-01" aspect="16:9" sizes="100vw" />
      </div>
    </section>
  );
}

function DevMotion() {
  return (
    <div>
      <h1 className="section-pad t-display-l text-ivory-50 mx-auto max-w-[1200px]">Motion harness</h1>
      <RevealSection />
      <ParallaxSection />
      <PinSection />
      <KenBurnsSection />
    </div>
  );
}
