import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import programMakers from "@/assets/program-makers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magic Makers Foundation — funding the maker spirit" },
      {
        name: "description",
        content:
          "Magic Makers Foundation funds hands-on making, mentorship, and creative workshops for young people. Donate or get involved.",
      },
      { property: "og:title", content: "Magic Makers Foundation" },
      {
        property: "og:description",
        content:
          "Magic Makers Foundation funds hands-on making, mentorship, and creative workshops for young people.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#mission", label: "Mission" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const PROGRAMS = [
  {
    tag: "01 — Workshops",
    title: "Maker Workshops",
    body: "Free Saturday workshops where kids build, solder, paint, and prototype with working artists and engineers.",
    stat: "320 workshops / year",
  },
  {
    tag: "02 — Mentorship",
    title: "One-on-One Mentorship",
    body: "Pairing young makers with creative professionals for a season-long build, from first sketch to final showcase.",
    stat: "140 mentors matched",
  },
  {
    tag: "03 — Grants",
    title: "Maker Micro-Grants",
    body: "Small grants that cover materials, tools, and studio time for a young person's first independent project.",
    stat: "$60k granted in 2025",
  },
];

const STATS = [
  { value: "4,200", label: "young makers supported" },
  { value: "18", label: "community studios" },
  { value: "140", label: "volunteer mentors" },
  { value: "$1.2M", label: "in tools & materials" },
];

const TEAM = [
  {
    name: "Amara Okafor",
    role: "Co-Founder & Executive Director",
    bio: "Former art teacher who believes every kid deserves a workbench.",
  },
  {
    name: "Diego Marín",
    role: "Co-Founder & Programs Lead",
    bio: "Industrial designer turned community organizer.",
  },
  {
    name: "Priya Nair",
    role: "Director of Mentorship",
    bio: "Matches curiosity with the right grown-up for the job.",
  },
  {
    name: "Jonas Holt",
    role: "Community Studio Network",
    bio: "Keeps the lights on and the saws sharp across 18 studios.",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* ===================== Nav ===================== */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="container-craft flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Spark className="size-6 text-terracotta" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Magic Makers <span className="text-terracotta">Foundation</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#donate"
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-craft transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              Donate
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-border bg-card md:hidden"
            >
              <span className="text-lg">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <ul className="container-craft flex flex-col gap-1 py-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#donate"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main id="main">
        {/* ===================== Hero ===================== */}
        <section id="top" className="relative overflow-hidden pt-16">
          {/* warm glow backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 55% at 80% 0%, oklch(0.9 0.045 52.8 / 0.9), transparent 70%), radial-gradient(50% 50% at 0% 100%, oklch(0.42 0.072 152.3 / 0.16), transparent 70%)",
            }}
          />
          <Twinkles />

          <div className="container-craft grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise">
              <span className="eyebrow">
                <Spark className="size-4 text-gold" />
                A foundation for young makers
              </span>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.04] md:text-6xl lg:text-7xl">
                Where curiosity
                <br />
                <span className="text-gradient-warm">becomes craft.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Magic Makers Foundation funds hands-on workshops, mentorship, and
                micro-grants so young people can build, break, and remake the
                world around them — with their own two hands.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#donate"
                  className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-craft transition-transform hover:-translate-y-0.5"
                >
                  Donate to the makers
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  See our programs
                </a>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl font-semibold text-ink">
                      {s.value}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="surface-card overflow-hidden p-2">
                <img
                  src={heroImg}
                  alt="Young makers and mentors gathered around a workshop bench crafting colorful sculptures"
                  width={1600}
                  height={1024}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                  fetchPriority="high"
                />
              </div>
              <div className="surface-card absolute -bottom-5 -left-5 hidden max-w-[15rem] rotate-[-3deg] p-4 sm:block">
                <p className="font-display text-sm italic text-ink">
                  "They gave my kid a hammer and a problem. They haven't stopped
                  since."
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  — parent, Mission District studio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== Mission ===================== */}
        <section id="mission" className="relative py-20 md:py-28">
          <div className="container-craft grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="eyebrow">Our mission</span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Making is how kids learn they can change things.
              </h2>
              <div className="rule-gold mt-6 w-32" />
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                We believe the most powerful moment in a young person's life is
                the first time they turn an idea into something they can hold.
                That moment is not a luxury — it is a foundation for confidence,
                persistence, and a lifelong sense of agency.
              </p>
              <p>
                Too many kids never get that moment. Workshops are closing,
                shop classes are gone, and tools cost money families don't have.
                Magic Makers Foundation steps into that gap — funding the
                workshops, the mentors, and the materials that make the moment
                possible.
              </p>
              <p className="font-display text-xl italic text-ink">
                Curiosity is the raw material. Craft is how we honor it.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== Programs ===================== */}
        <section id="programs" className="relative py-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.943 0.024 87.3 / 0.5), transparent)",
            }}
          />
          <div className="container-craft">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">What we fund</span>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Three ways we put tools in young hands.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {PROGRAMS.map((p) => (
                <article
                  key={p.title}
                  className="surface-card surface-card-hover flex flex-col p-7"
                >
                  <span className="eyebrow">{p.tag}</span>
                  <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                  <p className="mt-6 border-t border-border pt-4 font-display text-sm font-semibold text-terracotta">
                    {p.stat}
                  </p>
                </article>
              ))}
            </div>

            {/* featured program strip */}
            <div className="surface-card mt-10 grid overflow-hidden md:grid-cols-2">
              <img
                src={programMakers}
                alt="A mentor and child shaping a small wooden sculpture together"
                width={1200}
                height={1024}
                loading="lazy"
                className="h-64 w-full object-cover md:h-auto"
              />
              <div className="p-8 md:p-12">
                <span className="eyebrow">Featured · Mentorship</span>
                <h3 className="mt-4 text-3xl font-semibold">
                  The Season-Long Build
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Each mentorship runs a full season: a young maker proposes a
                  project, pairs with a professional, and ships it — a guitar, a
                  go-kart, a short film — to a public showcase. We pay for the
                  materials, the studio time, and the mentor's hours.
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-terracotta transition-colors hover:text-ink"
                >
                  Become a mentor
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== Impact ===================== */}
        <section id="impact" className="relative py-20 md:py-28">
          <div className="container-craft">
            <div className="ink-panel overflow-hidden rounded-[2rem] p-10 md:p-16">
              <div className="mx-auto max-w-2xl text-center">
                <span
                  className="eyebrow"
                  style={{ color: "var(--gold)" }}
                >
                  Our impact
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-cream md:text-5xl">
                  Numbers we're proud of — and not done with.
                </h2>
              </div>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="border-t border-white/15 pt-5"
                  >
                    <dt className="font-display text-4xl font-semibold text-gold md:text-5xl">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-sm text-cream/70">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-12 text-center text-sm text-cream/60">
                Figures from the 2025 program year, audited independently.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== Team ===================== */}
        <section id="team" className="py-20 md:py-28">
          <div className="container-craft">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">Who we are</span>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                A small team of makers, run by makers.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((m) => (
                <article key={m.name} className="surface-card p-6">
                  <div
                    className="grid size-14 place-items-center rounded-full text-xl font-semibold text-primary-foreground"
                    style={{ backgroundColor: "var(--terracotta)" }}
                    aria-hidden
                  >
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
                  <p className="text-sm font-medium text-terracotta">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== Donate / Contact ===================== */}
        <section id="contact" className="py-20 md:py-28">
          <div className="container-craft grid gap-12 lg:grid-cols-2">
            {/* Donate panel */}
            <div id="donate" className="surface-card p-8 md:p-10">
              <span className="eyebrow">Get involved</span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Fund a young maker.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                $40 funds a Saturday workshop seat. $250 funds a season-long
                mentorship build. Give what you can — every dollar lands in a
                kid's hands as a real material and a real tool.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { amt: "$40", note: "One workshop seat" },
                  { amt: "$120", note: "A starter toolkit" },
                  { amt: "$250", note: "A season-long build" },
                ].map((t) => (
                  <label
                    key={t.amt}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-terracotta"
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="donate"
                        className="accent-[var(--terracotta)]"
                      />
                      <span className="font-display text-xl font-semibold">
                        {t.amt}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {t.note}
                      </span>
                    </span>
                  </label>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-craft transition-transform hover:-translate-y-0.5"
              >
                Continue to donation
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Secure donation via our payment partner. Tax-deductible.
              </p>
            </div>

            {/* Contact form */}
            <div className="surface-card p-8 md:p-10">
              <span className="eyebrow">Say hello</span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Volunteer, partner, or just reach out.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Want to host a workshop, become a mentor, or bring the
                foundation to your neighborhood? Tell us a little about
                yourself.
              </p>

              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = e.currentTarget as HTMLFormElement & {
                    status: HTMLInputElement;
                  };
                  if (f.status) f.status.value = "Thanks — we'll be in touch.";
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    I'm interested in
                  </label>
                  <select
                    name="interest"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-terracotta focus:outline-none"
                  >
                    <option>Volunteering as a mentor</option>
                    <option>Hosting a workshop</option>
                    <option>Partnering with my organization</option>
                    <option>Bringing the foundation to my neighborhood</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about what you have in mind."
                    className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-terracotta focus:outline-none"
                  />
                </div>
                <input type="hidden" name="status" readOnly />
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
                >
                  Send message
                </button>
                <p
                  className="text-center text-sm font-medium text-terracotta empty:hidden"
                  data-status
                />
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== Footer ===================== */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="container-craft grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Spark className="size-6 text-terracotta" />
              <span className="font-display text-lg font-semibold tracking-tight">
                Magic Makers Foundation
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A nonprofit funding hands-on making, mentorship, and creative
              workshops for young people. Built by makers, for makers.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-terracotta"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Reach us
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>hello@magicmakers.org</li>
              <li>(415) 555-0142</li>
              <li>
                818 Valencia St
                <br />
                San Francisco, CA 94110
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container-craft flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Magic Makers Foundation. A 501(c)(3) nonprofit.</p>
            <p>EIN 84-1942073 · Made with care</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- Small bits ------------------------------------------------------ */

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-terracotta focus:outline-none"
      />
    </div>
  );
}

function Spark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2c.6 4.7 2.3 6.4 7 7-4.7.6-6.4 2.3-7 7-.6-4.7-2.3-6.4-7-7 4.7-.6 6.4-2.3 7-7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Twinkles() {
  const dots = [
    { top: "12%", left: "8%", d: "0s", s: 14 },
    { top: "22%", left: "72%", d: "0.6s", s: 10 },
    { top: "64%", left: "14%", d: "1.2s", s: 12 },
    { top: "78%", left: "82%", d: "1.8s", s: 9 },
    { top: "40%", left: "44%", d: "2.4s", s: 8 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {dots.map((dot, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute animate-twinkle text-gold"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.s,
            height: dot.s,
            animationDelay: dot.d,
          }}
        >
          <path
            d="M12 2c.6 4.7 2.3 6.4 7 7-4.7.6-6.4 2.3-7 7-.6-4.7-2.3-6.4-7-7 4.7-.6 6.4-2.3 7-7Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
