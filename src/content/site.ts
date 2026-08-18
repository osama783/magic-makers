/**
 * Single site-config source of truth.
 * Packet 2 extends /content with themes / adventures / sceneCopy — not here.
 * Nothing may be added that the owner has not confirmed.
 */
export const site = {
  brandName: "MagicMinds",
  tagline: "WE CREATE MAGIC",
  region: "Boston · MA · RI · NH",
  ctaLabel: "Create Their Day ✦",
  ctaHref: "/create",
  instagram: {
    handle: "@_magicminds",
    url: "https://instagram.com/_magicminds",
  },
  nav: [
    { label: "About", to: "/about" },
    { label: "Process", to: "/process" },
  ],
  /** UNKNOWN — no email or phone confirmed. Do not invent one. */
  contact: null,
} as const;

export type Site = typeof site;
