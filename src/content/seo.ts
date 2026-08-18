export interface SeoEntry {
  title: string;
  description: string;
}

export const defaultSeo: SeoEntry = {
  title: "MagicMinds — WE CREATE MAGIC",
  description:
    "MagicMinds creates customized, themed children's party experiences across Boston, MA, RI, and NH.",
};

/** Per-route stubs. No JSON-LD yet (Packet 10). */
export const seo = {
  "/": defaultSeo,
  "/about": {
    title: "About — MagicMinds",
    description: "About MagicMinds. Editorial content pending owner confirmation.",
  },
  "/process": {
    title: "How the Magic Happens — MagicMinds",
    description: "How a MagicMinds day comes together. Process content pending owner confirmation.",
  },
  "/create": {
    title: "Create Their Day — MagicMinds",
    description: "Start a customized, themed children's experience with MagicMinds.",
  },
  "404": {
    title: "Lost the thread — MagicMinds",
    description: "This page could not be found.",
  },
} satisfies Record<string, SeoEntry>;
