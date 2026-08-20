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
      "Stuff-a-Plush — kids build and adopt their own character — stuffing machine, adoption certificate, the whole ceremony.",
  },
  {
    key: "moments-craft",
    photoId: "mm-toystory-detail-canvas-01",
    caption: "Craft & Paint Studios — paint-your-own canvases and themed craft tables.",
  },
  {
    key: "moments-sensory",
    photoId: "mm-bluey-detail-sensory-01",
    caption:
      "Sensory & Play — play-dough, sensory bins, and themed stations for the smallest hands.",
  },
  {
    key: "moments-bounce",
    photoId: "mm-monster-play-ballpit-01",
    caption: "Bounce & Ball Pits — white bounce castles, ball pits, and slides.",
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
    caption: "Their Name in Lights — personalized backdrops and signage for the guest of honor.",
    // CHILD SAFETY: crop low so the personalized name on the backdrop is never legible.
    objectPosition: "50% 88%",
  },
  {
    key: "made-keepsake",
    photoId: "mm-bluey-station-adopt-01",
    caption:
      "A Keepsake to Keep — adoption certificates, finished crafts, and takeaways that outlast the day.",
  },
  {
    key: "made-character",
    photoId: "mm-grinch-character-photo-01",
    caption: "Character Moments — meet-and-greets and photo ops with the characters they love.",
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
    caption: "A Bluey Backyard — ball pit, bounce castle, craft table, garland of blue.",
  },
  {
    key: adventureBySlug["a-monster-truck-pit-party"]!.slug,
    photoId: adventureBySlug["a-monster-truck-pit-party"]!.coverPhotoId,
    caption: "A Monster-Truck Pit Party — two slides, one giant ball pit.",
  },
  {
    key: adventureBySlug["a-patriotic-party"]!.slug,
    photoId: adventureBySlug["a-patriotic-party"]!.coverPhotoId,
    caption:
      "A Star-Spangled Cookout — gingham tables, white bounce castle, backyard summer.",
  },
  {
    key: adventureBySlug["kidchella"]!.slug,
    photoId: "mm-kidchella-wide-lawn-01",
    caption: "Kidchella, Live — a full pop-up festival activation.",
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
    follow: `Follow Along — see the latest builds on Instagram ${site.instagram.handle}.`,
    href: site.instagram.url,
  },
  {
    key: "create-region",
    body: `Where We Create — proudly serving ${site.region}.`,
    href: null,
  },
] as const;
