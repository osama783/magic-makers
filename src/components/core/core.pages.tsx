import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Picture } from "@/components/media/Picture";
import { Doodle } from "@/components/media/Doodle";
import { site } from "@/content/site";
import { themeById } from "@/content/themes";
import {
  adventuresBoards,
  adventuresPage,
  createBoards,
  createPage,
  madeForThemBoards,
  madeForThemPage,
  momentsBoards,
  momentsPage,
  processBoards,
  processPage,
  type CoreCopyPage,
  type CorePhotoCopy,
} from "@/content/coreCopy";
import type { PhotoAssetId } from "@/assets/photos.registry";
import type { AccentToken } from "./core.config";
import type { DoodleName } from "@/components/media/Doodle";
import type { ThemeId } from "@/content/themes";

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
  /** Small secondary accent — a single neighbour hue, minor glow only. */
  secondary?: AccentToken;
  title?: ReactNode;
  boards: CoreBoardSpec[];
}

const BOARD_SIZES = "(max-width: 768px) 90vw, 26vw";

/** Theme portals stay on-palette: each theme maps to one accent token. */
const THEME_ACCENT: Record<ThemeId, AccentToken> = {
  bluey: "--acc-cyan",
  toystory: "--acc-butter",
  monster: "--acc-coral",
  gingerbread: "--acc-butter",
  grinch: "--acc-mint",
  patriotic: "--acc-cyan",
  halloween: "--acc-coral",
  kidchella: "--acc-pink",
};

/**
 * Decorative accent glyph for TEXT-ONLY boards. Photo boards never get one.
 * The outer node carries the scroll parallax, the inner one the slow float.
 */
function BoardDoodle({ name, size = 34 }: { name: DoodleName; size?: number }) {
  return (
    <span className="core-doodle" data-core-doodle aria-hidden="true">
      <span className="core-doodle-drift" data-core-doodle-float>
        <Doodle name={name} variant="glow" size={size} />
      </span>
    </span>
  );
}

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
  objectPosition,
  alt,
}: {
  id: PhotoAssetId;
  caption: ReactNode;
  priority?: boolean;
  objectPosition?: string;
  alt?: string;
}) {
  return (
    <figure className="m-0">
      <div className="relative">
        <Picture
          id={id}
          aspect="3:2"
          className="core-photo"
          sizes={BOARD_SIZES}
          {...(priority ? { priority } : {})}
          {...(objectPosition ? { objectPosition } : {})}
          {...(alt ? { alt } : {})}
        />
        <div className="core-scrim" aria-hidden="true" />
      </div>
      <figcaption>
        <Caption>{caption}</Caption>
      </figcaption>
    </figure>
  );
}

function PageTitle({ copy }: { copy: CoreCopyPage }) {
  return (
    <>
      <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[var(--ivory-50)]">
        {copy.heading}
      </h2>
      <p className="mt-2 text-base text-[var(--ivory-50)] opacity-[var(--text-muted-opacity)]">
        {copy.intro}
      </p>
    </>
  );
}

/** Copy-driven photo boards, used by pages 5–7. */
function photoBoards(items: CorePhotoCopy[], altOverrides: Partial<Record<string, string>> = {}) {
  return items.map((item) => ({
    key: item.key,
    flush: true,
    node: (
      <PhotoBoard
        id={item.photoId}
        caption={item.caption}
        {...(item.objectPosition ? { objectPosition: item.objectPosition } : {})}
        {...(altOverrides[item.key] ? { alt: altOverrides[item.key] as string } : {})}
      />
    ),
  }));
}

function ThemePortal({ id, blurb }: { id: keyof typeof themeById; blurb: string }) {
  const theme = themeById[id];
  return (
    <Link
      to="/worlds/$slug"
      params={{ slug: theme.slug }}
      className="core-link block min-h-11"
      aria-label={`${theme.label} — ${blurb}`}
      style={{ ["--core-accent" as string]: `var(${THEME_ACCENT[theme.id]})` }}
    >
      <div className="relative">
        <Picture
          id={theme.portalPhotoId}
          aspect="1:1"
          className="core-photo"
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
    secondary: "--acc-cyan",
    boards: [
      {
        key: "invitation-card",
        node: (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm tracking-[0.28em] text-[var(--acc-lavender)]">
              {site.tagline}
            </p>
            <BoardDoodle name="star" />
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
                className="core-photo"
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
    secondary: "--acc-mint",
    boards: [
      {
        key: "imagination-text",
        node: (
          <div className="flex flex-col gap-3">
            <BoardDoodle name="planet" />
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
    secondary: "--acc-lavender",
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
    secondary: "--acc-coral",
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
          <div className="flex flex-col gap-3">
            <BoardDoodle name="bunting" />
            <p className="text-base text-[var(--ivory-50)]">
              Design &amp; Styling — themed top to bottom: backdrops, balloon garlands, linens,
              florals, signage.
            </p>
          </div>
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
  {
    key: "moments",
    name: momentsPage.heading,
    accent: "--acc-mint",
    secondary: "--acc-cyan",
    title: <PageTitle copy={momentsPage} />,
    boards: photoBoards(momentsBoards),
  },
  {
    key: "made-for-them",
    name: madeForThemPage.heading,
    accent: "--acc-coral",
    secondary: "--acc-pink",
    title: <PageTitle copy={madeForThemPage} />,
    // Alt text is rewritten so no personalized child name is announced.
    boards: photoBoards(madeForThemBoards, {
      "made-personalized": "A personalized balloon backdrop and styled dessert table.",
      "made-character": "A costumed Grinch character greeting a guest at a photo backdrop.",
    }),
  },
  {
    key: "past-adventures",
    name: adventuresPage.heading,
    accent: "--acc-cyan",
    secondary: "--acc-lavender",
    title: <PageTitle copy={adventuresPage} />,
    boards: photoBoards(adventuresBoards),
  },
  {
    key: "how-it-works",
    name: processPage.heading,
    accent: "--acc-lavender",
    secondary: "--acc-pink",
    title: <PageTitle copy={processPage} />,
    boards: processBoards.map((step, i) => ({
      key: step.key,
      node: (
        <div className="flex flex-col gap-3">
          <BoardDoodle name={PROCESS_DOODLES[i] ?? "wand"} size={30} />
          <p className="text-base text-[var(--ivory-50)]">{step.body}</p>
        </div>
      ),
    })),
  },
  {
    key: "create-their-day",
    name: createPage.heading,
    accent: "--acc-butter",
    secondary: "--acc-coral",
    title: <PageTitle copy={createPage} />,
    boards: createBoards.map((board) => ({
      key: board.key,
      node:
        board.key === "create-primary" ? (
          <div className="flex flex-col gap-3">
            <BoardDoodle name="cupcake" size={32} />
            <p className="text-base text-[var(--ivory-50)]">{board.body}</p>
            <InstagramCta />
          </div>
        ) : board.href ? (
          <div className="flex flex-col gap-3">
            <BoardDoodle name="instagram" size={30} />
            <p className="text-base text-[var(--ivory-50)]">
              <HandleText body={board.body} />
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <BoardDoodle name="beach-ball" size={30} />
            <p className="text-base text-[var(--ivory-50)]">{board.body}</p>
          </div>
        ),
    })),
  },
] as const;