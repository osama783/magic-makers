import { photos, type PhotoAssetId } from "@/assets/photos.registry";

export type ThemeId =
  | "bluey"
  | "toystory"
  | "monster"
  | "gingerbread"
  | "grinch"
  | "patriotic"
  | "halloween"
  | "kidchella";

export interface Theme {
  id: ThemeId;
  /** URL slug — identical to the id. */
  slug: ThemeId;
  label: string;
  portalPhotoId: PhotoAssetId;
  order: number;
  /** Derived at runtime from the graded photo's dominant color. */
  accent: string;
}

interface ThemeSeed {
  id: ThemeId;
  label: string;
  portalPhotoId: PhotoAssetId;
}

const seeds: ThemeSeed[] = [
  { id: "bluey", label: "Bluey", portalPhotoId: "mm-bluey-hero-environment-01" },
  { id: "toystory", label: "Toy Story", portalPhotoId: "mm-toystory-setup-easels-01" },
  { id: "monster", label: "Monster Trucks", portalPhotoId: "mm-monster-play-ballpit-01" },
  { id: "gingerbread", label: "Gingerbread", portalPhotoId: "mm-gingerbread-detail-centerpiece-01" },
  { id: "grinch", label: "Grinchmas", portalPhotoId: "mm-grinch-backdrop-delilah-01" },
  { id: "patriotic", label: "Patriotic", portalPhotoId: "mm-patriotic-hero-environment-01" },
  { id: "halloween", label: "Halloween", portalPhotoId: "mm-halloween-station-plush-01" },
  { id: "kidchella", label: "Kidchella", portalPhotoId: "mm-kidchella-hero-table-01" },
];

export const themes: Theme[] = seeds.map((seed, index) => ({
  ...seed,
  slug: seed.id,
  order: index + 1,
  accent: photos[seed.portalPhotoId].dominant,
}));

export const themeById: Record<ThemeId, Theme> = themes.reduce(
  (acc, theme) => {
    acc[theme.id] = theme;
    return acc;
  },
  {} as Record<ThemeId, Theme>,
);
