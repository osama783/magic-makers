import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Picture } from "@/components/media/Picture";
import { Doodle } from "@/components/media/Doodle";
import { site } from "@/content/site";
import { themeById } from "@/content/themes";
import type { PhotoAssetId } from "@/assets/photos.registry";
import type { AccentToken } from "./core.config";

export interface CoreBoardSpec {
  key: string;
  node: ReactNode;
  flush?: boolean;
  wide?: boolean;
}

export interface CorePageSpec {
  key: string;
  /** Accessible name for the page's <section>. */
  name: string;
  accent: AccentToken;
  title?: ReactNode;
  boards: CoreBoardSpec[];
}

const BOARD_SIZES = "(max-width: 768px) 90vw, 26vw";

function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="core-caption px-4 py-3 text-base leading-snug text-[var(--ivory-50)]">
      {children}
    </p>
  );
}

function PhotoBoard({
  id,
  caption,
  priority,
}: {
  id: PhotoAssetId;
  caption: ReactNode;
  priority?: boolean;
}) {
  return (
    <figure className="m-0">
      <div className="relative">
        <Picture id={id} aspect="3:2" sizes={BOARD_SIZES} {...(priority ? { priority } : {})} />
        <div className="core-scrim" aria-hidden="true" />
      </div>
      <figcaption>
        <Caption>{caption}</Caption>
      </figcaption>
    </figure>
  );
}

function ThemePortal({ id, blurb }: { id: keyof typeof themeById; blurb: string }) {
  const theme = themeById[id];
  return (
    <Link
      to="/worlds/$slug"
      params={{ slug: theme.slug }}
      className="core-link block min-h-11"
      aria-label={`${theme.label} — ${blurb}`}
    >
      <div className="relative">
        <Picture
          id={theme.portalPhotoId}
          aspect="1:1"
          sizes="(max-width: 768px) 62vw, 20vw"
        />
        <div className="core-scrim" aria-hidden="true" />
      </div>
      <Caption>{blurb}</Caption>
    </Link>
  );
}

export const CORE_PAGES: readonly CorePageSpec[] = [
  {
    key: "invitation",
    name: "The Invitation",
    accent: "--acc-lavender",
    boards: [
      {
        key: "invitation-card",
        node: (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm tracking-[0.28em] text-[var(--acc-lavender)]">
              {site.tagline}
            </p>
            <Doodle name="star" variant="glow" size={34} className="text-[var(--acc-lavender)]" />
            <h1 className="font-[family-name:var(--font-serif)] text-5xl leading-tight text-[var(--ivory-50)] md:text-6xl">
              {site.brandName}
            </h1>
            <p className="max-w-[34ch] text-base text-[var(--ivory-50)]">
              Full-service children&apos;s parties, built around the one thing they love most.
            </p>
            <div className="relative w-full overflow-hidden rounded-[4px]">
              <Picture
                id="mm-bluey-hero-environment-01"
                aspect="16:9"
                sizes="(max-width: 768px) 90vw, 42vw"
                priority
              />
              <div className="core-scrim" aria-hidden="true" />
            </div>
            <p className="text-sm opacity-[var(--text-muted-opacity)]">{site.region}</p>
            <p className="text-sm text-[var(--acc-lavender)]">Scroll to step inside.</p>
          </div>
        ),
      },
    ],
  },
  {
    key: "imagination",
    name: "Step Into Their Imagination",
    accent: "--acc-cyan",
    boards: [
      {
        key: "imagination-text",
        node: (
          <div className="flex flex-col gap-3">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[var(--ivory-50)]">
              Every child has a world inside their head.
            </h2>
            <p className="text-base text-[var(--ivory-50)]">
              We build the whole thing in yours — the character they love, the colors they light up
              for, and a hundred little details they&apos;ll still be talking about next year.
            </p>
          </div>
        ),
      },
      {
        key: "imagination-photo",
        flush: true,
        node: (
          <PhotoBoard
            id="mm-bluey-play-ballpit-01"
            caption="Their favorite thing, brought to life — for one whole afternoon."
          />
        ),
      },
    ],
  },
  {
    key: "themes",
    name: "What Are They Into Right Now?",
    accent: "--acc-pink",
    title: (
      <>
        <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[var(--ivory-50)]">
          What are they into right now?
        </h2>
        <p className="mt-2 text-base text-[var(--ivory-50)] opacity-[var(--text-muted-opacity)]">
          Whatever they&apos;re into — we can build it.
        </p>
      </>
    ),
    boards: [
      {
        key: "theme-bluey",
        flush: true,
        node: (
          <ThemePortal
            id="bluey"
            blurb="Bluey's Backyard — ball pits, Bingo, and a garden full of blue."
          />
        ),
      },
      {
        key: "theme-toystory",
        flush: true,
        node: <ThemePortal id="toystory" blurb="Toy Story — paint-your-own Woody & Jessie." />,
      },
      {
        key: "theme-monster",
        flush: true,
        node: (
          <ThemePortal
            id="monster"
            blurb="Monster Trucks — a full pit party: ball pit, slides, car-wash craft table."
          />
        ),
      },
      {
        key: "theme-kidchella",
        flush: true,
        node: (
          <ThemePortal
            id="kidchella"
            blurb="Kidchella — a pint-sized music festival, sequins and all."
          />
        ),
      },
    ],
  },
  {
    key: "everything",
    name: "We Take Care of Everything",
    accent: "--acc-butter",
    title: (
      <>
        <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[var(--ivory-50)]">
          We take care of everything
        </h2>
        <p className="mt-2 text-base text-[var(--ivory-50)] opacity-[var(--text-muted-opacity)]">
          You show up. We handle the rest — from the first sketch to the last balloon down.
        </p>
      </>
    ),
    boards: [
      {
        key: "design",
        node: (
          <p className="text-base text-[var(--ivory-50)]">
            Design &amp; Styling — themed top to bottom: backdrops, balloon garlands, linens,
            florals, signage.
          </p>
        ),
      },
      {
        key: "setup",
        flush: true,
        node: (
          <PhotoBoard
            id="mm-monster-setup-carwash-01"
            caption="Setup & Teardown — we build the entire world, and clear every trace when it's over."
          />
        ),
      },
      {
        key: "furniture",
        flush: true,
        node: (
          <PhotoBoard
            id="mm-patriotic-hero-environment-01"
            caption="Furniture & Equipment — kids' tables and chairs, bounce castles, ball pits, slides, stations."
          />
        ),
      },
      {
        key: "catering",
        flush: true,
        node: (
          <PhotoBoard
            id="mm-grinch-backdrop-delilah-01"
            caption="Treats & Catering — dessert tables and party spreads styled to match."
          />
        ),
      },
    ],
  },
] as const;