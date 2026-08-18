# MAGICMINDS — CREATIVE DIRECTION (DEFINITIVE)

**Status:** LOCKED · authoritative art direction · supersedes the three-concept exploration for execution purposes.
**Locked direction:** **Concept 2 — "The Title Sequence."**
**Core concept:** *Step Into Their Imagination.*
**Signature transition family:** Magic Portal.
**Balance target:** 60% premium / 30% playful / 10% delightful weirdness.
**Authoritative facts:** the Brand Intelligence Brief (`01-brand-intelligence.md`). No services, prices, testimonials, guarantees, or geographic claims are invented here. Confirmed region: **Boston · MA · RI · NH**. Confirmed brand promise: **"WE CREATE MAGIC."**

This document is written so a second designer/developer can execute without inventing a new aesthetic. Where a value is given (hex, rem, easing, ms), treat it as the spec, not a suggestion, unless a documented reason overrides it.

---

## 1. The decision, and the one permitted borrow

**Concept 2 is the single locked aesthetic.** We are not averaging the three directions. The Pop-Up Book (paper craft) and the tactile flat-lay *look* of the Imagination Table are **not** adopted.

**One idea is borrowed — deliberately and only one:**

> **BORROW: the "Table Assembly" reveal (from Concept 3), re-rendered cinematically.**
> After the camera pushes through the portal, the themed world it reveals *assembles onto a table* as the payoff, resolving on the line **"We bring that world to the table."**

**Why it belongs (all three tests met):**
1. **It improves the selected concept.** Concept 2's one real weakness is that "cinematic premium" can feel generic and cold, lacking a moment that is unmistakably *MagicMinds*. The table assembly supplies the ownable, on-brand payoff the cinematic wrapper otherwise lacks, and it literally dramatizes the confirmed product (styled themed tables).
2. **It does not create stylistic inconsistency.** We adopt the *choreography* (an empty table becoming a complete themed world), **not** the Imagination Table's tactile flat-lay aesthetic, its object-physics-everywhere, or its neutral-linen look. The table is **lit and revealed through the portal** in this concept's cinematic light-grade — it reads as the film's hero shot, not a change of art direction.
3. **Explicitly scoped.** The table assembly appears **once**, as the homepage Transformation payoff. It is scroll-scrubbed reveal + light, not free physics. It does not spread across the site.

Nothing else is borrowed. Do not reintroduce paper folds, page-turns, scrapbook pages, or ambient object physics.

---

## 2. Creative north star (for this concept specifically)

The site is the **opening title sequence of a beautiful film about your child's imagination**, followed by a push *through a portal* into the world they love. It begins composed, dim, and adult — the parent's world — and, on scroll, the child's world **illuminates and floods in**. The emotional beat we are recreating is the child's face the moment they walk into their finished party: *the reveal.*

Restrained → Reveal → Warmth. The film gets more alive as it goes, but it never becomes chaotic. Spectacle serves clarity; it never replaces it.

---

## 3. How 60 / 30 / 10 is expressed here

- **60% premium** — the near-monochrome title-card opening, cinematic full-bleed grade, wide-tracked titling, restraint, generous negative space, disciplined motion.
- **30% playful** — warm light-accents flooding in, the star-light constellations, the table-assembly payoff, Past-Adventure "trailers," a cursor that focuses and blooms.
- **10% delightful weirdness** — "post-credits" easter eggs: a lens flare that reveals a hidden character, a projector flicker, a clickable star. Bounded, never noisy.

**Guardrail:** because the base register is dark/premium, the playful 30% must be actively protected. If a scene feels cold or corporate, add warmth via light, photography of real children mid-delight, and the star motifs — never via primary colors or clip art.

---

## 4. Color system

Two states: **Cinematic Dark** (title-card / portal void) and **Warm Light** (revealed / editorial). Color enters as *light*, not as backgrounds.

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--ink-900` | `#0A0E20` | Primary dark background (title card, portal void) |
| `--ink-800` | `#121736` | Dark panel / elevated dark surface |
| `--ink-700` | `#1E2450` | Dark accent / dividers on dark |
| `--ivory-50` | `#F8F3EA` | Warm paper base (light state); text on dark |
| `--cream-100` | `#FCF8F1` | Lightest surface |
| `--text-ink` | `#14183A` | Body text on light surfaces |
| `--lavender` | `#B3A0E6` | **Brand primary accent** (portal rim, focus bloom, star light) |
| `--violet-deep` | `#5C3FA0` | Brand identity depth (logo lockup, deep glows) |
| `--butter` | `#F5D27C` | Warm light accent (CTA glow, sunrise reveals) |
| `--sky` | `#86C5E8` | Cool light accent (portal gradients) |
| `--pink` | `#E7A6B7` | Warm light accent (highlights) |
| `--mint` | `#A4D8C3` | Fresh light accent (sparingly) |

### Rules
- **Opening is near-monochrome:** `--ink-900` + `--ivory-50` only, with a single `--lavender` star. No theme color until the first portal.
- **Color arrives as light:** accents are used as *glows, rims, and beams* (portal edges, focus bloom, star constellations), not as flat fills, especially in dark scenes.
- **Theme worlds temporarily saturate.** When a portal opens into a specific theme (e.g., a real Bluey or gingerbread event), that world may adopt its own event palette **inside the portal**, then recede to the ivory/ink system on exit. This is the only place saturated theme color lives.
- **Never rainbow-overload.** At most 2 accents visible together in any non-theme scene.
- **Contrast:** long-form text is only `--ivory-50` on dark or `--text-ink` on light (both exceed AA). Accents are for display/decoration/glow only — never body copy on their own.

---

## 5. Typography system

Three roles. Keep them strictly separated — this separation *is* the system.

1. **Emotional display — serif (the "story voice").** High-contrast display serif that extends the spirit of the existing expressive-serif logo. Used for the film's emotional lines ("Every child has a world inside their head"). *Recommended:* Canela, Ogg, or GT Sectra Display — or equivalent high-contrast display serif. Sentence case or small caps. Tight leading (1.0–1.05).
2. **Cinematic structure — grotesque (the "credits voice").** Clean neutral grotesque, **UPPERCASE, wide-tracked**, for kickers, section labels, nav, captions, credits, and UI. *Recommended:* Söhne, Neue Haas Grotesk, or Neue Montreal — or equivalent. This carries the prestige-title-sequence feel.
3. **Body — humanist sans.** The grotesque family's text weight (or Inter as fallback) for all reading copy. Leading 1.6.
4. **The MagicMinds logo** is used as the immutable **studio mark** — do not restyle it; treat it like a film studio's logo card.

### Type scale (fluid; min → max)

| Style | Family | Size (min→max) | Case / tracking | Leading |
|---|---|---|---|---|
| Display XL (hero line) | Serif | 2.75rem → 6.5rem | Sentence · 0em | 1.02 |
| Display L | Serif | 2.25rem → 4rem | Sentence · 0em | 1.05 |
| Kicker / label | Grotesque | 0.8125rem → 1rem | UPPER · 0.28em | 1.2 |
| H2 | Serif | 1.75rem → 3rem | Sentence · 0em | 1.1 |
| Body | Sans | 1rem → 1.125rem | Sentence · 0em | 1.6 |
| Caption / credit | Grotesque | 0.75rem → 0.8125rem | UPPER · 0.12em | 1.3 |

### Rules
- Titling animates letter-spacing on entry: from ~0.5em settling to the spec tracking over ~700–800ms (the "title resolving into focus" move). Use sparingly — hero and section titles only.
- Never set body copy uppercase or heavily tracked.
- Two type families visible max per scene (plus the logo mark).

---

## 6. Layout, composition & the letterbox

- **Grid:** 12-column, generous margins. Content max-width ~1280–1440px for editorial blocks; hero/reveal scenes are **full-bleed**.
- **Letterbox as a device:** thin cinematic bars (`--ink-900`) frame title-card and reveal moments, then **retract** to signal "entering the world." Letterbox is punctuation, not a permanent frame — do not letterbox reading sections.
- **Few elements per frame.** Cinematic composition = one focal subject, rule-of-thirds staging, deep negative space that later floods with light.
- **Persistent clarity layer:** a slim, always-available top bar (logo mark + minimal nav + persistent `Create Their Day ✦` CTA) rides above the cinematic canvas at all times, in the current scene's contrast mode. Business clarity is never gated behind a scene.

---

## 7. Camera & depth model (core mechanic)

The scroll is a **camera**, not a page.

- **Z-layers (back→front):** sky/void → distant light/stars → mid subject (photography or table) → foreground glow/particles → letterbox/UI.
- **Dolly:** scroll drives forward depth (scale + translateZ-feel via transform/opacity on layers). Parallax rates increase toward the foreground. Max **4 parallax layers** per scene (perf).
- **Feel:** a slow, weighted camera move — never a snap. Scenes are pinned; the camera pushes; then releases to the next.
- **No true 3D engine.** Achieve depth with layered transforms, scale, opacity, and SVG masks. **Three.js/WebGL is out** unless a specific approved interaction cannot be done otherwise (document if so).

---

## 8. Light & the Portal system (the signature)

A **portal** is the concept's hero object and its primary transition.

**Visual definition:** a masked aperture (SVG clip-path / radial mask) with a **luminous rim** (a `--lavender → --sky` gradient glow), through which a themed world is visible. Around it, the void is `--ink-900`.

**Portal Push (signature interaction):**
1. Title-card line resolves ("Every child has a world inside their head").
2. A point of `--lavender` light appears and blooms into a portal aperture.
3. On scroll, the world inside **scales up** while the aperture **expands to full-bleed**; letterbox retracts; grade shifts cool-dark → warm-lit.
4. Payoff: the world assembles onto a **table** (the borrowed beat), resolving on **"We bring that world to the table."**

**Bloom construction:** layered semi-transparent radial gradients (additive look). **Do not** apply heavy CSS `blur()` across large areas — fake glow with gradients/mask for performance.

**Iris variant:** a circular iris wipe using the same rim, for route/page transitions.

---

## 9. Motion language

- **Only `transform` and `opacity` animate.** No layout/reflow animation.
- **Scrubbed vs. timed:** camera depth, portal expansion, and table assembly are **scroll-scrubbed** (ScrollTrigger scrub). Micro-interactions (hover, focus, cursor) are **time-based**.
- **Easing:**
  - Reveal / settle: `cubic-bezier(0.22, 1, 0.36, 1)`
  - Slow dolly / cinematic in-out: `cubic-bezier(0.65, 0, 0.35, 1)`
  - Micro (cursor, hover): `cubic-bezier(0.4, 0, 0.2, 1)`
- **Durations:** micro 150–250ms · reveals 600–900ms · portal/scene 900–1400ms · dolly = scrubbed (no fixed duration).
- **Pacing rule:** one primary motion event per scene. Layer subtle secondary motion (drifting stars, faint particle light) at low amplitude. Never animate every element.
- **Cleanup:** every ScrollTrigger and timeline must be killed on unmount; pin-spacing managed to avoid jank.

---

## 10. Cursor system (desktop only)

A **focus reticle / lens bloom** — the camera's focus, made cursor. Removed entirely on coarse/touch pointers. Maps to the constitution's five states:

| State | Behavior |
|---|---|
| `default` | 6px soft `--ivory-50` dot, ~40% opacity, faint. |
| `interactive` | Expands to ~28px ring with a faint `--lavender` bloom; nearby label hint optional. |
| `view` (media) | Aperture/focus ring with a small `VIEW` micro-label (grotesque, tracked). |
| `drag` | Elongates into a light streak trailing pointer velocity. |
| `book` (CTA) | Bright pulse with warm `--butter` glow. |

Subtle and magical, never a distracting mascot. One reusable `MagicCursor` component; states driven by data-attributes on targets.

---

## 11. Photography treatment

Real MagicMinds event photography is the hero asset — **never** replaced with stock.

- **Scale:** full-bleed, cinematic. Photography *is* the spectacle in reveal scenes.
- **Grade (apply consistently across all photos):** gentle contrast lift, warm white balance, slightly lifted blacks (filmic, not crushed), a soft vignette, subtle grain optional at very low opacity. Goal: one coherent cinematic grade so a mixed library feels like one film.
- **Motion:** slow Ken-Burns push (scale 1.0→~1.08 over the scene), scrubbed. No fast pans.
- **Mixing:** wide immersive shots for reveals; detail + candid-child shots for warmth beats; avoid a uniform grid.
- **Hard rule:** text must never live *only* over moving footage/photography — always a legibility scrim (`--ink-900` at 30–55%) or a dedicated text zone.

---

## 12. Illustration & graphic system

Small, cohesive, **light-based** — never clip art, never emoji-as-design.

- **Star constellations:** the brand star motif rendered as points of light; used for wayfinding sparkle and scene ambience. This is the primary illustrative signature.
- **Glowing line / silhouette-to-reveal:** minimal luminous line art that blooms into a photo or scene.
- **Logo-dissolution:** the MagicMinds mark can release illustrated objects (star, crayon, racecar, rocket, butterfly) **as points of light** that drift, then reform. In this concept the dissolution is *luminous*, not paper.
- **Consistency:** one illustration file/system, one line weight, one glow treatment. No mixed styles.

---

## 13. Homepage narrative — scene by scene

Eleven beats. Each: **state → motion → transition out → clarity content → mobile.** Provisional copy is marked *(prov.)* and is a creative direction, not locked marketing copy.

1. **The Invitation** — *State:* dark title card, `--ink-900`, letterboxed; serif line *(prov.)* "MagicMinds — WE CREATE MAGIC," one `--lavender` star; scroll cue *(prov.)* "Make a little magic ↓." *Motion:* title letter-spacing resolves; star drifts. *Out:* letterbox holds. *Clarity:* persistent nav + CTA visible. *Mobile:* full-screen, same, reduced star count.
2. **Enter Their Imagination** — *State:* camera begins to push; serif line *(prov.)* "Every child has a world inside their head." *Motion:* dolly forward, stars deepen. *Out:* a point of light blooms → portal. *Clarity:* one-line what-we-do subhead in grotesque. *Mobile:* scale/opacity push.
3. **The Portal Push** *(signature)* — *State:* portal aperture opens; theme worlds visible as points of light. *Motion:* scrubbed portal expansion; grade warms. *Out:* into the theme grid. *Clarity:* label "Customized worlds, built around what they love." *Mobile:* tap-to-enter fallback if scrub is heavy.
4. **What Are They Into?** — *State:* theme worlds as luminous portals/objects (real event themes only — Bluey, Toy Story, gingerbread/Grinch, monster-truck, patriotic, Kidchella, Halloween). *Motion:* focus reticle blooms per theme on hover. *Out:* Object-Wipe into a selected world OR continue. *Clarity:* themes are examples, not a fixed menu; customization is the message. *Mobile:* swipe carousel of theme cards.
5. **Their World Comes Alive** — *State:* full-bleed cinematic reveal of a real event, graded, Ken-Burns. *Motion:* photography push + light. *Out:* dolly toward the table. *Clarity:* short emotional line + real photo. *Mobile:* full-screen photo, reduced parallax.
6. **The Transformation** *(borrowed Table Assembly)* — *State:* through the portal, an empty table assembles: seating → materials → décor → theme details → complete experience; resolves *(prov.)* "We bring that world to the table." *Motion:* scroll-scrubbed reveal + light (not free physics). *Out:* warm light state settles. *Clarity:* this is the "what you actually get" moment — legible. *Mobile:* sequential drop-in reveals, simplified.
7. **Made for Them** — *State:* warm light/editorial; personalization + keepsakes (named signage, adoption certificates, take-home plush/ceramics — all real). *Motion:* gentle; detail photography. *Out:* Storybook transition (secondary family) into Past Adventures. *Clarity:* the customization + keepsake promise, in words. *Mobile:* stacked.
8. **Past Adventures** — *State:* each real event as a "trailer" — a title card that expands to a full-bleed reel of that event's real photography + a one-line story. *Motion:* trailer expand on interaction. *Out:* Object-Wipe between adventures. *Clarity:* proof of range; never a bare grid. *Mobile:* vertical trailer stack, tap to expand.
9. **How the Magic Happens** — *State:* warm, calm; the four steps *(prov., provisional until business-confirmed)* "Tell us what they love → We dream it up → We bring the magic → They take it from here." *Motion:* light step-reveals. *Out:* toward booking. *Clarity:* process legibility. *Mobile:* vertical steps.
10. **Parent Trust** — *State:* warm; region **Boston · MA · RI · NH** stated plainly; trust cues **only when business-confirmed** (reviews, insurance, etc. — otherwise omit, do not invent). *Motion:* minimal. *Out:* to CTA. *Clarity:* the non-negotiable trust block. *Mobile:* stacked.
11. **Create Their Day / Magical Exit** — *State:* cinematic closing title; `Create Their Day ✦`. *Motion:* CTA `book`-state bloom; a final star. *Out:* footer. *Clarity:* clear inquiry entry + contact. *Mobile:* prominent sticky CTA.

---

## 14. Transition system (three families, one signature)

- **Magic Portal (PRIMARY):** entering imaginative/theme content and key reveals. Iris variant for routes.
- **Storybook (SECONDARY):** editorial/narrative pages only (About, Process). Used *quietly* — a light cross-dissolve with a page-settle, **not** paper folds or page-turns (those belong to the un-selected concept and must not appear).
- **Object-Wipe (TERTIARY):** a luminous object (star, racecar, balloon) sweeps to wipe between events/theme projects.

Do not invent a unique transition per link. Novelty comes from these reusable systems.

---

## 15. Gallery / Past Adventures spec

Trailer model (see scene 8): title card → expand → full-bleed reel of **real** photography, graded consistently, one-line story per event. No ratings/quotes unless business-confirmed. Never a generic Instagram-style grid.

---

## 16. Booking experience ("Cast Their Day")

- **Wrapper:** a light cinematic framing (marquee/soft clapperboard motif) — atmosphere only.
- **Inside:** a genuinely short, standard, high-clarity inquiry flow. Spectacle never delays completion.
- **CTA label:** `Create Their Day ✦` (approved concept).
- **Fields:** keep to essentials; exact fields depend on business-confirmed process (child's name, theme/interest, date, contact, message are safe placeholders — **do not** hard-code packages, prices, or policies until confirmed).
- **Conversion rules:** CTA persistent site-wide; no more than one screen of friction; success state warm and reassuring; mobile CTA sticky.

---

## 17. Business-clarity / conversion guardrails (non-negotiable)

These must always be legible and never hidden behind effects:
- what MagicMinds does · who it's for · that customization is central · examples of real work · how the process works · that it serves **Boston / MA / RI / NH** · how to inquire.
- Persistent nav + `Create Their Day ✦` in every scene.
- Any scene that can't be understood with motion disabled has failed. *Beautiful confusion is still bad UX.*

---

## 18. Accessibility spec

- **`prefers-reduced-motion`:** disable dolly, portal expansion scrub, Ken-Burns, letter-spacing animation, and cursor effects. Serve **held frames / instant reveals**; content and order unchanged.
- **Contrast:** body only ivory-on-ink or ink-on-light (AA+). Never long text on a mid accent or unscrimmed photo.
- **Keyboard:** full keyboard path; logical focus order per scene; visible focus states (a `--lavender` focus ring); portals/themes operable without pointer.
- **Media:** text never solely over video/photo (scrim or text zone). Provide captions/alt for meaningful imagery. No autoplay audio.
- **Targets:** ≥44px touch targets; the custom cursor never replaces a real focus/hover affordance.

---

## 19. Mobile interpretation

- **Cursor:** removed.
- **Letterbox → full-screen** vertical scenes.
- **Camera push → scale/opacity** (fewer parallax layers; cap at 2–3).
- **Portals → tap-to-enter** where scrub is heavy; keep one hero scrubbed reveal max.
- **Table assembly →** simplified sequential drop-ins.
- **Performance-first:** mobile is a first-class target, not a shrunk desktop. Cut effects before cutting clarity.

---

## 20. Performance budget

- **LCP target:** < 2.5s on mid-tier mobile. Hero uses a graded poster image; heavy media lazy-loads.
- **Media:** responsive `srcset`, modern formats, compressed; cap concurrent full-bleed assets.
- **No WebGL/Three.js** (documented exceptions only). Fake glow with gradients/masks — avoid large-area `blur()` and heavy filters.
- **Motion:** transform/opacity only; batch ScrollTriggers; kill on unmount; avoid layout thrash.
- **Particles/stars:** low counts; pause offscreen; disable on reduced-motion and low-end.

---

## 21. DO / DON'T (anti-genericity for this concept)

**DO**
- Keep the opening restrained and near-monochrome — earn the reveal.
- Let real photography and light carry emotion.
- Protect the 30% playful with warmth, star-light, and the table payoff.
- Use the star motif as the connective signature.
- Keep business info legible in every scene.

**DON'T**
- Don't let it become a generic dark "cinematic agency" site — the MagicMinds warmth, real children's delight, and the table payoff are what make it ours.
- No rainbow overload, clip art, emoji-as-design, or preschool primaries.
- No paper folds, page-turns, or scrapbook pages (belongs to the un-selected concept).
- No ambient object-physics everywhere (the table assembly is the *only* physics-flavored beat, and it's scrubbed reveal, not free physics).
- No text stranded on moving media.
- Don't spend Lovable credits on cosmetic tuning — reserve credits for the portal system and the table-assembly reveal.

---

## 22. Asset manifest (needed to build)

- **Graded photo set** from the real library (wide reveals + detail/candid warmth), one consistent cinematic grade. *[owner to supply/approve selects]*
- **Portal SVG masks + rim-glow gradients** (`--lavender→--sky`).
- **Star / constellation illustration set** (light-based, one style).
- **Logo lockups** — mark on dark + on light; "studio card" version. *[MISSING ASSET: confirm vector logo files]*
- **Cursor assets/states** (dot, ring, aperture, streak, pulse).
- **Table-assembly source frames** — ideally a real setup shot sequence (empty → complete) to drive the reveal. *[MISSING ASSET: confirm availability; if none, use a single hero setup photo revealed in stages]*
- **Type licenses** for chosen serif + grotesque. *[confirm licensing/budget]*

Mark anything unavailable as **MISSING ASSET** — do not silently substitute stock.

---

## 23. Business items still required before launch (do not invent)

Services & package structure · pricing/deposits/cancellation · exact home base + travel radius/fees within MA/RI/NH · age range & max guests · setup/cleanup policy · booking lead time · specific inclusions · testimonials/reviews · insurance/credentials · years in business · exact contact/booking process · full written voice. Provisional hero/process copy above must be confirmed or replaced before it goes public.

---

## 24. Definition of done (for QA against this direction)

A scene is on-direction when: it opens restrained and reveals warmth; motion is transform/opacity and scrubbed where cinematic; color enters as light with ≤2 accents; photography is real and consistently graded; business clarity is legible with motion off; reduced-motion and keyboard paths work; and it feels like MagicMinds — not a generic cinematic template. Score each homepage scene on brand distinction, premium feeling, childhood wonder, motion quality, business clarity, mobile quality, and accessibility; classify issues P0–P3 with the repair method (code/GitHub · Lovable build · asset/content · defer).
