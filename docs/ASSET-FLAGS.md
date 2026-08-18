# MagicMinds — Graded Photo Library (grade B) + Asset Flags

## What's here
- `public/assets/photos/graded/` — all 24 photos, graded (variant B: warm/vibrant, one-film),
  renamed to semantic names, exported as **avif + webp + jpg** at shipped widths.
- `photos.registry.ts` — typed single source of truth (ids, alt, dimensions, widths, formats,
  dominant LQIP hex, LCP flag). Drop into `src/assets/` (or `src/content/`) per Packet 2.

## Path convention
`/assets/photos/graded/{id}-{width}.{format}` — e.g. `mm-bluey-hero-environment-01-952.avif`

## FLAGS (honest gaps — not blockers, but plan for them)
1. **Low-res sources.** Originals are ~950–1010px wide (compressed IG exports). Shipped widths are
   only 640 + native (never upscaled). The **hero LCP will be soft on large desktop screens.**
   → Re-export the hero shots (at least `mm-bluey-hero-environment-01`,
   `mm-patriotic-hero-environment-01`, `mm-kidchella-hero-table-01`) from the ORIGINAL camera roll
   at full resolution and re-run the grade pass. Everything else is fine at this size.
2. **All sources are portrait.** Scene 4 wants a 16:9 landscape hero. Cover-cropping portrait into
   16:9 discards most of the scene. → Either source a landscape wide hero, or design the desktop
   hero portrait/letterboxed. Registry records true master aspect so either path works.
3. **Crops via CSS, not pre-baked.** No 1:1 / 3:2 / 16:9 derivative files were generated. Frames
   crop the master via `object-fit: cover` + `object-position`. If a specific frame needs
   art-directed framing, add a pre-cropped derivative later.
4. **Still MISSING (from manifest, unchanged):** empty→complete table sequence (Scene 5 — use the
   documented `mm-bluey-setup-garden-01` masked fallback), vector logo lockups, doodle SVG set.

## Grade recipe (reproducible)
Variant B: matte black lift (~0.038), gentle S-curve contrast, warm white balance (R×1.065 / B×0.945),
vibrance that eases off on already-saturated pixels (no clipping), subtle radial vignette (~14%),
very-low grain (~1%). Deterministic (seed 7). Re-runnable on higher-res re-exports.
