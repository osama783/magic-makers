import type { PhotoAssetId } from "@/assets/photos.registry";
import { adventureBySlug } from "@/content/adventures";
import { site } from "@/content/site";

/**
 * Copy for THE CORE pages 5–9. Verbatim, owner-approved framing only.
 * No prices, packages, testimonials, emails, phone numbers or child names.
 */

export interface CoreCopyPage {
  heading: string;
  intro: string;
}

export interface CorePhotoCopy {
  key: string;
  photoId: PhotoAssetId;
  caption: string;
  /** Crop hint when the frame would otherwise show a legible child's name. */
  objectPosition?: string;
}

export interface CoreTextCopy {
  key: string;
  body: string;
}

export const momentsPage: CoreCopyPage = {
  heading: "The Moments They'll Remember",
  intro: "Every party is packed with hands-on things to make, keep, and take home.",
};

export const momentsBoards: CorePhotoCopy[] = [
  {
    key: "moments-plush",
    photoId: "mm-bluey-station-adopt-01",
    caption:
      "Stuff-a-Plush: Every child builds and adopts their own plush — stuffing machine, certificate, and a best friend to take home.",
  },
  {
    key: "moments-craft",
    photoId: "mm-toystory-detail-canvas-01",
    caption:
      "Craft & Paint Studios: Little hands, real canvases — paint-your-own studios they'll be proud of.",
  },
  {
    key: "moments-sensory",
    photoId: "mm-bluey-detail-sensory-01",
    caption:
      "Sensory & Play: Play-dough, sensory bins, and hands-on stations built for even the tiniest guests.",
  },
  {
    key: "moments-bounce",
    photoId: "mm-monster-play-ballpit-01",
    caption:
      "Bounce & Ball Pits: Bounce castles, ball pits, and slides for the ones who came to run wild.",
  },
];

export const madeForThemPage: CoreCopyPage = {
  heading: "Made for Them",
  intro: "The magic hides in the details — and every one is theirs.",
};

export const madeForThemBoards: CorePhotoCopy[] = [
  {
    key: "made-personalized",
    photoId: "mm-grinch-backdrop-delilah-01",
    caption:
      "Their Name in Lights: A backdrop that's unmistakably theirs — personalized for the guest of honor.",
    // CHILD SAFETY: crop low so the personalized name on the backdrop is never legible.
    objectPosition: "50% 88%",
  },
  {
    key: "made-keepsake",
    photoId: "mm-bluey-station-adopt-01",
    caption:
      "A Keepsake to Keep: Certificates, finished crafts, and take-homes that outlast the sugar rush.",
  },
  {
    key: "made-character",
    photoId: "mm-grinch-character-photo-01",
    caption:
      "Character Moments: The characters they love, in person — for the photos you'll keep forever.",
  },
];

export const adventuresPage: CoreCopyPage = {
  heading: "Past Adventures",
  intro: "A few of the worlds we've built.",
};

/** Sourced from the adventures content module; each board points at one adventure. */
export const adventuresBoards: CorePhotoCopy[] = [
  {
    key: adventureBySlug["a-bluey-backyard"]!.slug,
    photoId: adventureBySlug["a-bluey-backyard"]!.coverPhotoId,
    caption:
      "A backyard turned Bluey HQ — ball pit, bounce castle, and a garland of blue from fence to fence.",
  },
  {
    key: adventureBySlug["a-monster-truck-pit-party"]!.slug,
    photoId: adventureBySlug["a-monster-truck-pit-party"]!.coverPhotoId,
    caption: "A full pit party: two slides, one enormous ball pit, and zero quiet moments.",
  },
  {
    key: adventureBySlug["a-patriotic-party"]!.slug,
    photoId: adventureBySlug["a-patriotic-party"]!.coverPhotoId,
    caption: "Gingham, stars, and a white bounce castle — a backyard Fourth done right.",
  },
  {
    key: adventureBySlug["kidchella"]!.slug,
    photoId: "mm-kidchella-wide-lawn-01",
    caption:
      "A pop-up festival for the under-ten crowd — flowers, sequins, and a stage of their own.",
  },
];

export const processPage: CoreCopyPage = {
  heading: "How the Magic Happens",
  intro: "Four steps — and none of them are yours to stress about.",
};

export const processBoards: CoreTextCopy[] = [
  { key: "step-1", body: "1 · Tell us their thing — the character, the colors, the date." },
  {
    key: "step-2",
    body: "2 · We design it — a custom plan for theme, setup, activities, treats, built to your space.",
  },
  { key: "step-3", body: "3 · We build it — we set the whole world up and run the day." },
  { key: "step-4", body: "4 · We clear it — you keep the memories; we take the mess." },
];

export const createPage: CoreCopyPage = {
  heading: "Create Their Day",
  intro: "Let's build their favorite day.",
};

export const createBoards = [
  {
    key: "create-primary",
    body: "Create Their Day — tell us who's celebrating and what they're into.",
    follow: "Follow Along — see the latest builds on Instagram.",
    href: site.instagram.url,
  },
  {
    key: "create-region",
    body: `Where We Create — proudly serving ${site.region}.`,
    href: null,
  },
] as const;
