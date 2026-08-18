import { site } from "@/content/site";

/**
 * Scene copy — ONLY owner/document-approved framing lines are populated.
 * Every unapproved field is null with a TODO. Do not write new marketing copy here.
 */
export interface SceneCopy {
  /** Scene name from the storyboard (structural label, not marketing copy). */
  name: string;
  concept: string | null;
  kicker: string | null;
  headline: string | null;
  supporting: string | null;
  label: string | null;
  cta: string | null;
}

export type SceneNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export const sceneCopy: Record<SceneNumber, SceneCopy> = {
  1: {
    name: "The Invitation",
    concept: "Step Into Their Imagination",
    kicker: site.tagline, // "WE CREATE MAGIC" — confirmed brand line
    headline: null, // TODO: owner-confirmed copy
    supporting: null, // TODO: owner-confirmed copy
    label: site.region, // "Boston · MA · RI · NH" — confirmed service area
    cta: site.ctaLabel,
  },
  2: {
    name: "Enter Their Imagination",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: "Every child has a world inside their head.",
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: null, // TODO: owner-confirmed copy
  },
  3: {
    name: "What Are They Into?",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: "What are they into right now?",
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: null, // TODO: owner-confirmed copy
  },
  4: {
    name: "Their World Comes Alive",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: null, // TODO: owner-confirmed copy
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: null, // TODO: owner-confirmed copy
  },
  5: {
    name: "The Transformation",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: "We bring that world to the table.",
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: null, // TODO: owner-confirmed copy
  },
  6: {
    name: "Made For Them",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: "Their favorite things, brought to life.",
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: null, // TODO: owner-confirmed copy
  },
  7: {
    name: "Past Adventures",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: null, // TODO: owner-confirmed copy
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: null, // TODO: owner-confirmed copy
  },
  8: {
    name: "How The Magic Happens",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: null, // TODO: owner-confirmed copy
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: null, // TODO: owner-confirmed copy
  },
  9: {
    name: "Parent Trust",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: null, // TODO: owner-confirmed copy
    supporting: null, // TODO: owner-confirmed copy
    label: site.region, // confirmed service area
    cta: null, // TODO: owner-confirmed copy
  },
  10: {
    name: "Create Their Day",
    concept: null, // TODO: owner-confirmed copy
    kicker: null, // TODO: owner-confirmed copy
    headline: "What if their favorite thing became real for one afternoon?",
    supporting: null, // TODO: owner-confirmed copy
    label: null, // TODO: owner-confirmed copy
    cta: site.ctaLabel,
  },
  11: {
    name: "Magical Exit / Footer",
    concept: null, // TODO: owner-confirmed copy
    kicker: site.tagline,
    headline: null, // TODO: owner-confirmed copy
    supporting: null, // TODO: owner-confirmed copy
    label: site.region,
    cta: null, // TODO: owner-confirmed copy
  },
};
