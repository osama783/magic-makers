# MAGICMINDS — HOMEPAGE STORYBOARD (v2 · "THE SPIRE")

**Status:** authoritative scene choreography. Supersedes `04-homepage-storyboard.md`'s
continuous-dolly staging with **The Spire** axis-rotation model. Scene keys, order, and the
clarity-delivery schedule are unchanged; only the staging is re-choreographed.
**Governed by:** `02-creative-direction-SPIRE.md`, `03-design-constitution.md`. Where a value
(hex, ease, ms, token) is given elsewhere, this doc consumes it, not re-decides it.

---

## 0. The mechanic (how a floor works)

- One 3D stage (`transform-style: preserve-3d`) holds a **rotating rig** around the vertical (Y) axis.
- The rig carries only a **small live set of facets** at any moment — **front, incoming, outgoing,
  (back)** — ~3–4 panels. Scenes are **conveyed onto a facet as they approach the front and
  released as they leave.** All 11 are never mounted on one drum at once.
- **Front panel only is crisp**, flat-on, fully legible. Side/back facets are **dimmed + scaled +
  pushed back in depth** (opacity/scale, not blur) → cinematic depth of field and focus.
- Rotation is driven by **one GSAP pin-scrub value** (verified mechanic). Scroll 0→1 maps to
  rotation; each floor owns a scroll slice; at each slice's **center the panel settles flat-on**
  using ease `mm.reveal` so **text is never read mid-spin**.
- The **axis** is a CSS gradient/mask glow (no WebGL) whose hue advances per floor.
- Header / persistent CTA / footer live **outside** the rotating subtree — always mounted, always
  legible (constitution Rule: clarity outside the transition subtree).

**Per-floor spec format:** *panel content → swap-in family → axis/light state → clarity delivered
→ mobile → reduced-motion.*

---

## 1. FIRST BUILD SCOPE — floors 1–5 (proof of concept)

The initial Lovable build implements the **rotating shell + floors 1–5 only**, to validate the
mechanic, the first Portal swap, the Ken-Burns hero, and the table-assembly payoff before the full
tower is deployed. Floors 6–11 are specified below but built in a later pass.

---

## Floor 1 — invitation
- **Panel:** dark title card. "MagicMinds" (serif, letter-spacing resolves), kicker "WE CREATE
  MAGIC", region "Boston · MA · RI · NH", scroll cue. One `--lavender` star drifting on the axis.
- **Swap-in:** — (entry point).
- **Axis/light:** near-black `--ink-900`; a single lavender star; axis barely glowing.
- **Clarity:** brand name, tagline, region visible immediately; header CTA present.
- **Mobile:** full-screen static title; fewer stars.
- **Reduced-motion:** title fully resolved, star static.

## Floor 2 — imagination
- **Panel:** serif line "Every child has a world inside their head." + one-line grotesque
  what-we-do subhead (party entertainment, customized to what a child loves).
- **Swap-in:** Storybook (soft dissolve as it settles).
- **Axis/light:** axis wakes; faint lavender travels up it.
- **Clarity:** the plain-language "what MagicMinds does" line lands here.
- **Mobile:** vertical section; same copy.
- **Reduced-motion:** static, legible.

## Floor 3 — themes
- **Panel:** "What are they into right now?" → **8 real theme portals** (Bluey, Toy Story, Monster
  Trucks, Gingerbread, Grinchmas, Patriotic, Halloween, Kidchella) as luminous portals using each
  theme's real portal photo via `Picture`. Copy states themes are **examples of range, not a fixed
  menu** — customization is the message.
- **Swap-in:** **Magic Portal** (front facet blooms open into the theme field).
- **Axis/light:** first warm bloom; lavender → warm rim light on portals.
- **Clarity:** customization-first message; a portal also deep-links to `/worlds/:slug`.
- **Mobile:** swipe carousel of theme portals (no rotation).
- **Reduced-motion:** static grid of portals, no bloom.

## Floor 4 — reveal
- **Panel:** full-bleed cinematic hero — the Bluey environment (LCP, `priority`), slow Ken-Burns
  (scale 1.0→~1.08, scrubbed). Short emotional line over a legibility scrim.
- **Swap-in:** Magic Portal (carry-through from floor 3).
- **Axis/light:** full warm light; axis glow at its warmest lavender/butter.
- **Clarity:** the emotional promise; real event photography as hero.
- **Mobile:** full-bleed portrait hero, Ken-Burns held to a gentle scale or static.
- **Reduced-motion:** hero at base scale, no zoom.

## Floor 5 — transformation
- **Panel:** the payoff — "We bring that world to the table." A finished themed setup
  (`mm-bluey-setup-garden-01`) revealed through a **masked cinematic wipe** so it *reads* as
  assembling. **MISSING ASSET:** a real empty→complete table sequence does not exist; this uses the
  documented masked-reveal fallback — **no invented/AI-generated assembly steps.**
- **Swap-in:** **Object-Wipe** (mask carries the reveal).
- **Axis/light:** golden; warmest floor.
- **Clarity:** dramatizes the confirmed product (styled themed tables) without fabricating a process.
- **Mobile:** vertical masked reveal of the same photo.
- **Reduced-motion:** finished setup shown directly, no wipe.

---

## Floors 6–11 (specified; built in the later pass)

## Floor 6 — madeForThem
- **Panel:** customization message + real **detail** photos (sensory bins, craft tables, costume
  vests) via `Picture`; a `Lens` micro-interaction on a detail.
- **Swap-in:** Storybook. **Axis/light:** warm.
- **Clarity:** "built around what they love." **Mobile:** stacked details. **Reduced-motion:** static.

## Floor 7 — pastAdventures
- **Panel:** real events as miniature **"trailers"** (adventure reels), each its own tiny story, not
  a portfolio grid. Cinematic memory-composition treatment (not paper/scrapbook). Deep-links to
  `/adventures/:slug`.
- **Swap-in:** **Object-Wipe**. **Axis/light:** warm, hue varies per theme.
- **Clarity:** proof of real work. **Mobile:** vertical reel stack, swipe. **Reduced-motion:** static reels.

## Floor 8 — process ("How the Magic Happens")
- **Panel:** process steps — **provisional copy, flagged**; no invented specifics.
- **Swap-in:** Storybook. **Axis/light:** calm.
- **Clarity:** how it works (once owner-confirmed). **Mobile:** vertical steps. **Reduced-motion:** static.

## Floor 9 — trust
- **Panel:** region "Boston · MA · RI · NH" + trust cues **placeholder-guarded until confirmed**
  (no fabricated reviews, insurance, counts). **Swap-in:** Storybook. **Axis/light:** steady.
- **Clarity:** where MagicMinds serves. **Mobile:** vertical. **Reduced-motion:** static.

## Floor 10 — booking
- **Panel:** "Create Their Day" → links to `/create`. Warm butter/CTA glow.
- **Swap-in:** Storybook. **Axis/light:** butter CTA glow.
- **Clarity:** the conversion path. **Mobile:** prominent CTA. **Reduced-motion:** static CTA.

## Floor 11 — exit
- **Panel:** footer scene — star callback, region, @_magicminds, persistent CTA. Axis settles back
  to dark. **Swap-in:** —. **Axis/light:** settle to `--ink-900`.
- **Clarity:** contact channel (Instagram) + CTA. **Mobile:** footer. **Reduced-motion:** static.

---

## Global rules (binding)
- **Only three transition families** (Portal / Storybook / Object-Wipe) do every swap.
- **Front panel always settles flat-on and legible** before its copy must be read.
- **No fabricated business facts** anywhere; unconfirmed = flagged placeholder.
- **Header, CTA, footer** always mounted outside the rig.
- **Every floor** ships a mobile (flattened) and reduced-motion (static, final-state) path with
  identical content, order, and meaning.
- **No Three.js.** Rotation/glow are CSS/GSAP only; animate transform/opacity (+ mask) only.
