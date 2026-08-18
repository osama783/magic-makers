import type { PhotoAssetId } from "@/assets/photos.registry";
import type { ThemeId } from "@/content/themes";

export interface Adventure {
  slug: string;
  title: string;
  coverPhotoId: PhotoAssetId;
  reel: PhotoAssetId[];
  theme: ThemeId;
}

export const adventures: Adventure[] = [
  {
    slug: "a-bluey-backyard",
    title: "A Bluey Backyard",
    coverPhotoId: "mm-bluey-hero-environment-01",
    reel: [
      "mm-bluey-setup-garden-01",
      "mm-bluey-play-ballpit-01",
      "mm-bluey-station-adopt-01",
      "mm-bluey-detail-sensory-01",
      "mm-bluey-detail-sensory-02",
    ],
    theme: "bluey",
  },
  {
    slug: "a-monster-truck-pit-party",
    title: "A Monster-Truck Pit Party",
    coverPhotoId: "mm-monster-play-ballpit-01",
    reel: ["mm-monster-setup-carwash-01"],
    theme: "monster",
  },
  {
    slug: "a-gingerbread-workshop",
    title: "A Gingerbread Workshop",
    coverPhotoId: "mm-gingerbread-setup-houses-01",
    reel: ["mm-gingerbread-detail-centerpiece-01", "mm-gingerbread-candid-toddler-01"],
    theme: "gingerbread",
  },
  {
    slug: "a-grinchmas",
    title: "A Grinchmas",
    coverPhotoId: "mm-grinch-backdrop-delilah-01",
    reel: ["mm-grinch-character-photo-01"],
    theme: "grinch",
  },
  {
    slug: "a-patriotic-party",
    title: "A Patriotic Party",
    coverPhotoId: "mm-patriotic-hero-environment-01",
    reel: ["mm-patriotic-setup-table-01"],
    theme: "patriotic",
  },
  {
    slug: "a-halloween-mischief",
    title: "A Halloween Mischief",
    coverPhotoId: "mm-halloween-station-plush-01",
    reel: ["mm-halloween-candid-craft-01", "mm-halloween-candid-plush-01"],
    theme: "halloween",
  },
  {
    slug: "a-toy-story-studio",
    title: "A Toy Story Studio",
    coverPhotoId: "mm-toystory-setup-easels-01",
    reel: ["mm-toystory-detail-canvas-01", "mm-toystory-detail-costume-01"],
    theme: "toystory",
  },
  {
    slug: "kidchella",
    title: "Kidchella",
    coverPhotoId: "mm-kidchella-hero-table-01",
    reel: ["mm-kidchella-setup-bracelets-01", "mm-kidchella-wide-lawn-01"],
    theme: "kidchella",
  },
];

export const adventureBySlug: Record<string, Adventure> = Object.fromEntries(
  adventures.map((a) => [a.slug, a]),
);
