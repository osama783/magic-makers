# MAGICMINDS — CREATIVE DIRECTION (DEFINITIVE, v2 · "THE SPIRE")

**Status:** LOCKED · authoritative art direction. Supersedes `02-creative-direction-FINAL.md`
for the **spatial/scroll model only**. All other locked values (grade, palette, typography,
60/30/10, transition families, business-fact rules) are **carried forward unchanged**.
**Conflict note (per constitution §"docs conflict → newer + more specific wins, flagged"):**
where `02-FINAL` describes a camera *dolly forward through a portal*, this document overrides it
with an *axis rotation* model. Nothing else is overridden.

**Core concept:** *Step Into Their Imagination.*
**Spatial model:** **The Spire** — a luminous vertical axis; story scenes are panels that rotate
around it on scroll.
**Signature transition family:** Magic Portal (now a panel-swap family, see §5).
**Balance target:** 60% premium / 30% playful / 10% delightful weirdness.
**Confirmed facts (only these are publishable):** Category "Party Entertainment"; tagline
"WE CREATE MAGIC"; region "Boston · MA · RI · NH"; Instagram @_magicminds. Nothing else is
invented — unconfirmed items are flagged placeholders.

---

## 1. What The Spire is

The website is a single continuous **vertical tower**. A glowing vertical **axis** runs down the
center of the viewport and is the one constant. The eleven story scenes are mounted as **panels
(facets) around that axis**, like the faces of a slowly turning column. Scrolling **rotates the
column**: the scene facing the viewer settles flat-on and perfectly legible; as scrolling
continues it rotates away and dissolves, while the next scene's panel swings to the front and
settles. The camera never moves — it stays fixed on the axis from top to bottom.

**Scroll = rotation = time.** The film gets more alive as the column turns, but never chaotic.

This replaces the earlier "dolly through a portal" staging. The *emotional* arc is identical:
restrained → reveal → warmth; the parent's composed world turning, floor by floor, into the
child's illuminated one.

---

## 2. Why a rotation model (rationale)

- It gives MagicMinds an **ownable, unmistakable** structure — not another vertical scroll site.
- It literally dramatizes "step into their imagination": you turn a corner and a new world faces you.
- It reuses the exact **pin-scrub** mechanic already verified in the animation engine, so it is
  buildable in CSS/GSAP with **no Three.js** (constitution hard rule preserved).
- It concentrates spectacle into **one reusable system** (the rotating rig) rather than bespoke
  per-section animation — protecting credits and mobile performance.

---

## 3. The 60 / 30 / 10 balance, expressed in The Spire

- **60% premium** — the fixed camera, the dark restrained opening floors, the cinematic grade,
  wide-tracked titling, generous negative space, and the discipline of showing **one crisp
  front panel at a time** (side facets dimmed and pushed back = built-in depth of field).
- **30% playful** — the axis waking up and shifting hue, warm light flooding the front panel on
  the reveal floors, real children mid-delight in the photography, theme portals blooming.
- **10% delightful weirdness** — bounded "post-credits" moments (a lens flare, a clickable star,
  a hidden character) that never clutter the front panel.

**Guardrail:** because the base register is dark/premium, the playful 30% is delivered through
**light, real photography, and the axis glow — never** through flat primary color, rainbow, or
clip art.

---

## 4. Color as light (unchanged tokens)

Two states, exactly as locked: **Cinematic Dark** (opening floors, axis void) and **Warm Light**
(reveal floors). Color enters as **glow, rim, and beam** — never as flat fills.

| Token | Hex | Role |
|---|---|---|
| `--ink-900` | `#0A0E20` | primary dark background / axis void |
| `--ink-800` | `#121736` | dark panel surface |
| `--ivory-50` | `#F8F3EA` | text on dark; warm light base |
| `--lavender` | `#B3A0E6` | brand accent — axis light, portal rim, focus bloom |
| `--violet-deep` | `#5C3FA0` | brand depth / deep glows |
| `--butter` | `#F5D27C` | warm accent (CTA glow, sunrise reveals) |
| `--sky` | `#86C5E8` | cool accent (portal gradients) |
| `--pink` | `#E7A6B7` | warm highlight |
| `--mint` | `#A4D8C3` | fresh accent (sparingly) |

The **axis** carries the color journey: near-black + one lavender star at floor 1, waking to
lavender, blooming warm at the reveal floors, settling back to dark at the exit.

---

## 5. Transition families (unchanged set; now they swap panels)

Exactly three, reused — novelty comes from reuse, never a per-panel gimmick:

- **Magic Portal** — for entering theme worlds and the reveal (floors 3–4). The front facet
  irises/blooms open into the next.
- **Storybook** — for editorial/narrative floors (imagination, made-for-them, process, trust,
  booking). A soft cross-dissolve as the panel settles.
- **Object-Wipe** — for object/event-driven floors (transformation, past adventures). A masked
  wipe carries the swap.

The Portal Push is a **transition between imagination and themes**, not its own floor.

---

## 6. The eleven floors (clarity schedule preserved)

Same scenes, same "business is never hidden" schedule as the storyboard — re-choreographed as
rotation. See `04-homepage-storyboard-SPIRE.md` for the per-floor detail. Summary:

1. invitation · 2. imagination · 3. themes · 4. reveal · 5. transformation ·
6. madeForThem · 7. pastAdventures · 8. process · 9. trust · 10. booking · 11. exit

**Clarity rule (binding):** what MagicMinds does, where it serves, and how to book are legible in
**floors 1–2 and the always-present header** — a parent never solves the tower to understand the
business. Unconfirmed facts stay flagged placeholders.

---

## 7. Photography, typography, illustration (carried forward)

- **Photography:** real MagicMinds event photos only, through `Picture` + the registry, on the
  cinematic grade (variant B). Slow Ken-Burns on reveal floors. Text never sits only over moving
  photography without a legibility scrim.
- **Type:** Fraunces (serif, story voice) + Inter (grotesque, UI/labels/body). Max two families.
- **Illustration:** the 8-glyph luminous doodle system + star constellations. Light-based, one
  weight, one glow. Never clip art or emoji-as-design.

---

## 8. Mobile & reduced-motion (first-class, not afterthoughts)

- **Mobile:** no 3D rotation. The tower **flattens to a vertical stack** — each floor a full-screen
  section in the same order; the axis becomes a glowing vertical line; panel swaps become vertical
  reveals/fades. Same content, same story, same clarity.
- **Reduced-motion:** no rotation, no pin. A clean linear document; every floor in its final
  readable state; axis static; colors applied without animation. Identical content, order, meaning.

---

## 9. What is preserved vs. changed (the honest diff)

- **Changed:** spatial staging only — axis rotation replaces dolly-through-portal.
- **Preserved:** the cinematic grade; dark→warm "color as light"; 60/30/10; the three transition
  families; the table-assembly payoff (now floor 5, via the documented masked-reveal fallback);
  real-photography-only; every design token; and all business-fact rules.

This is a **re-choreography, not a new aesthetic.**
