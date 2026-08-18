# MAGICMINDS — DESIGN CONSTITUTION

**Status:** BINDING · governs Claude, Lovable, and all manual/GitHub edits.
**Derived from:** `02-creative-direction-FINAL.md` (locked direction: **Concept 2 — The Title Sequence**). Where this document gives a value, it is a **rule**, not a suggestion. Conflicts resolve in favor of the more specific rule; unresolved conflicts must be flagged, not guessed.
**Prohibited language in any brief or commit built from this doc:** "make it nice," "make it magical," "make it premium," "add wow," "surprise me," "modernize." State objective, component, behavior, and acceptance criteria instead.

---

## 1. TYPOGRAPHY

**Display-font personality (serif — "story voice").** High-contrast display serif extending the existing expressive-serif logo spirit. Recommended: Canela / Ogg / GT Sectra Display, or equivalent. Emotional, literary, composed. Used only for emotional hero/section lines.

**Structure-font personality (grotesque — "credits voice").** Clean neutral grotesque. Recommended: Söhne / Neue Haas Grotesk / Neue Montreal, or equivalent. Used UPPERCASE + tracked for kickers, labels, nav, captions, UI.

**Body-font personality.** The grotesque family's text weight (fallback Inter). Neutral, highly legible, humanist. Never decorative.

**The logo** is an immutable studio mark. Never restyle, recolor arbitrarily, or substitute a font for it.

**Hierarchy (strict order):** Kicker (grotesque, tracked) → Display (serif) → H2 (serif) → Body (sans) → Caption (grotesque). Max **two type families visible per scene**, plus the logo mark.

**Desktop scale (min→max, fluid):**

| Style | Family | Size | Leading | Tracking | Case |
|---|---|---|---|---|---|
| Display XL | Serif | 2.75→6.5rem | 1.02 | 0em | Sentence |
| Display L | Serif | 2.25→4rem | 1.05 | 0em | Sentence |
| H2 | Serif | 1.75→3rem | 1.1 | 0em | Sentence |
| Kicker/Label | Grotesque | 0.8125→1rem | 1.2 | 0.28em | UPPER |
| Body | Sans | 1→1.125rem | 1.6 | 0em | Sentence |
| Caption | Grotesque | 0.75→0.8125rem | 1.3 | 0.12em | UPPER |

**Mobile scale (caps):** Display XL ≤ 2.75rem, Display L ≤ 2rem, H2 ≤ 1.75rem, Body ≥ 1rem. Never shrink body below 1rem.

**Line heights:** display 1.0–1.1; body 1.6; caption 1.3. Never set body tighter than 1.5.

**Line lengths (measure):** body 60–75ch; captions 40–50ch; display lines 2–8 words (hero ≤ ~20ch). Never allow body lines beyond 80ch.

**Capitalization:** Sentence case for serif and body. UPPERCASE only for grotesque kickers/labels/captions. No ALL-CAPS body, no Title Case Everywhere.

**Letter spacing:** 0em on serif and body; 0.28em on kickers, 0.12em on captions. Title-entry may animate spacing from ~0.5em settling to spec value once (hero/section titles only).

**When expressive typography is allowed:** only for (a) the animated title-resolve on hero/section entry, and (b) the logo-dissolution moment. Never in body copy, nav, forms, or captions. Expressive ≠ novelty fonts — the serif *is* the expression.

---

## 2. COLOR

**Primary background — dark state:** `--ink-900 #0A0E20` (title card, portal void, cinematic scenes).
**Primary background — light state:** `--ivory-50 #F8F3EA` (revealed/editorial scenes).
**Secondary backgrounds:** `--ink-800 #121736` (dark panels), `--cream-100 #FCF8F1` (lightest surface).
**Primary text:** `--ivory-50` on dark; `--text-ink #14183A` on light.
**Muted text:** ivory/ink at 60–72% opacity. Never introduce a separate grey; muted = reduced opacity of the primary text color.
**Primary accent:** `--lavender #B3A0E6` (brand) + depth `--violet-deep #5C3FA0`. Used for portal rims, focus bloom, star light, focus rings.
**Secondary accents:** `--butter #F5D27C`, `--sky #86C5E8`, `--pink #E7A6B7`, `--mint #A4D8C3`. Used as *light/glow*, not flat fills.

**Theme-specific palettes:** saturated event-theme colors (Bluey, gingerbread/Grinch, monster-truck, patriotic, Halloween, Kidchella) are permitted **only inside an open portal/theme world**, then must recede to the ink/ivory system on exit. Theme color never leaks into global chrome, nav, or the base scenes.

**Rules for palette transitions:** color enters as **light** (glows, rims, beams), never as a flat background swap. The opening scene is near-monochrome (`--ink-900` + `--ivory-50` + one `--lavender` star). Max **two accents visible together** in any non-theme scene. Transitions between dark↔light states happen through a portal/reveal, not an abrupt fill change.

**Contrast requirements:** body text ≥ 4.5:1; large text ≥ 3:1. Long text only ivory-on-ink or ink-on-light. Accent colors may be used for text **only** if the specific pairing meets ratio; otherwise accents are decoration/glow. Focus ring `--lavender`, ≥ 3:1 against its background.

---

## 3. LAYOUT

**Grid:** 12 columns desktop / 8 columns tablet / 4 columns mobile. Gutter 24px desktop, 20px tablet, 16px mobile. Margins fluid (clamp), never less than the gutter.

**Maximum widths:** editorial text column 680–720px; standard content container 1280–1440px; hero/reveal/photography scenes **full-bleed** (edge to edge). Body copy never spans full-bleed width.

**Whitespace philosophy:** negative space is a compositional material representing the cinematic void — it is intentional, not "empty to be filled." Reveal scenes are sparse (one focal subject). Do not pack scenes.

**Asymmetry:** cinematic rule-of-thirds staging; asymmetric, deliberate placement is preferred. Dead-center composition is reserved for the intentional title-card and the portal only. Everything else avoids default centered stacks.

**Vertical rhythm:** 8px baseline. Spacing scale: 8 / 16 / 24 / 40 / 64 / 96 / 128. Section padding ≥ 96px desktop, ≥ 64px mobile. Consistent rhythm; no arbitrary gaps.

**Responsive behavior:** desktop = full camera/parallax; tablet = reduced parallax (≤3 layers), letterbox retained; mobile = full-screen vertical scenes, ≤2–3 layers, one scrubbed hero reveal max. Mobile is designed, not shrunk (see §10).

---

## 4. SHAPES

**Radius philosophy:** near-zero. Frames, letterbox bars, and photography are rectangular and sharp (cinematic). Interactive controls may use ≤4px radius. **No pill shapes. No rounded-rectangle card soup.** The **only** curved/organic form permitted is the **circular portal/iris** and the soft radial glow — that scarcity is what makes the portal read as special.

**Border philosophy:** borders are hairlines (1px) in ink/ivory at 12–24% opacity, used rarely. Emphasis comes from **light rims/glow**, not heavy borders. No thick outlines, no double borders.

**Image masks:** two only — full-bleed rectangle, and circular iris/portal mask. No blob masks, no rounded-corner photo thumbnails as a default, no decorative shape masks.

**Cards:** avoid generic cards entirely. Group content with letterbox framing, light scrims, or spacing — not drop-shadowed rounded panels. If a bounded surface is unavoidable, it is a sharp-edged panel in `--ink-800`/`--cream-100` with a hairline, no shadow-heavy elevation.

**Containers:** exactly two modes — full-bleed cinematic frame, or centered editorial column (≤720px). No nested rounded containers within containers.

---

## 5. PHOTOGRAPHY

Real MagicMinds event photography is the hero asset.

**Cropping:** cinematic, rule-of-thirds; tight detail crops allowed for warmth beats. Never crop to decapitate subjects or produce awkward dead-center crops. Preserve aspect — never stretch/distort.

**Scaling:** full-bleed in reveal scenes; never upscale beyond native resolution (no pixelation/softening).

**Layering:** photography sits as the **mid-layer** of the camera depth model; scrims/UI above, light/void behind. Ken-Burns push happens within its frame.

**Overlap:** photos may overlap only with letterbox bars or scrims. No cluttered collage, no overlapping-photo pileups (that belongs to the un-selected concept).

**Image treatment:** one consistent cinematic grade across the whole library — gentle contrast lift, warm white balance, slightly lifted blacks, soft vignette, optional very-low grain. Mixed sources must end up looking like one film.

**Animation:** Ken-Burns scale 1.0→~1.08, scroll-scrubbed. No fast pans, no spin, no parallax jitter.

**Caption style:** grotesque, UPPERCASE, tracked 0.12em, small, ivory at ~72% on a scrim, bottom-left. Captions are optional and quiet.

**When photography dominates:** reveal scenes ("Their World Comes Alive"), the Transformation payoff, and Past-Adventure reels. There, photography is the primary content and type recedes.

**Never:** replace real photography with stock; apply heavy/trendy filters, duotones, or rainbow effects; distort aspect ratio; place text directly on moving/photographic media without a legibility scrim (`--ink-900` 30–55%); add meme text or clip-art overlays; use a generic Instagram-style grid.

---

## 6. ILLUSTRATION

**Visual style:** light-based only. Luminous, minimal, cinematic. **No paper-craft, no cut-paper, no flat cartoon fills** (those belong to un-selected concepts).

**Line character:** thin luminous line, consistent optical weight (~1.5–2px), often with a soft glow. One line weight across the system.

**Fill character:** mostly unfilled; where filled, use soft radial glow, not solid flat color. No hard cartoon fills, no gradients-as-decoration.

**Texture:** soft glow / very-low grain only. No paper texture, no noise-heavy surfaces, no drop shadows on illustration.

**Recurring motifs:** the **star/constellation** is the primary signature. The logo-dissolution objects (star, crayon, racecar, rocket, butterfly) may appear **as points of light**. No other mascot set.

**Scale:** ambient and secondary — small accents, wayfinding sparkle, portal framing. Illustration never becomes the largest element in a scene.

**Placement:** margins, the void, around portals, and as the light that blooms into a photo. Never covering readable text.

**Relationship with photography:** illustration is subordinate — it *introduces, frames, or reveals* photography and never competes with it. A line may bloom into a photo; a constellation may frame one. Illustration never sits on top of a photo as clutter.

---

## 7. MOTION

**Durations:** micro **150–250ms**; normal reveals **600–900ms**; cinematic scene/portal **900–1400ms**; camera dolly = **scroll-scrubbed** (no fixed duration).

**Preferred easing character:**
- Reveal / settle: ease-out, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Cinematic dolly / dark↔light: slow ease-in-out, `cubic-bezier(0.65, 0, 0.35, 1)`.
- Micro (hover/focus/cursor): `cubic-bezier(0.4, 0, 0.2, 1)`.
No linear easing on visible motion; no bouncy/elastic easing anywhere.

**Scroll choreography philosophy:** scroll is a camera. Depth, portal expansion, Ken-Burns, and the table assembly are scrubbed and pinned. **One primary motion event per scene**, plus optional low-amplitude ambient (drifting stars). Never animate every element.

**Sequencing:** stagger grouped reveals 60–120ms. Title resolves first, then supporting content. No simultaneous competing motions.

**Anticipation:** light gathers/holds briefly (~120–200ms) before a portal blooms; a subtle settle precedes a reveal. Anticipation is restrained, not cartoonish.

**Follow-through:** ease-out reveals may carry a slight settle; stars/particles drift to rest after the camera stops. No large overshoot, no wobble.

**Animate only `transform` and `opacity`.** No animating layout, color of large areas, box-shadow, or filters on large surfaces.

**When NOT to animate:** body reading blocks, nav, forms, captions; anything under `prefers-reduced-motion`; never add infinite ambient loops that distract from reading; never animate an element with no narrative purpose; never let comprehension depend on motion.

---

## 8. CURSOR SYSTEM

One reusable `MagicCursor` (desktop / fine-pointer only), states driven by target data-attributes:

- **default** — 6px soft `--ivory-50` dot, ~40% opacity, faint.
- **interactive** — expands to ~28px ring with faint `--lavender` bloom on links/buttons/interactive targets.
- **gallery (media/view)** — aperture/focus ring with small `VIEW` micro-label (grotesque, tracked) over photography.
- **drag** — elongates into a light streak trailing pointer velocity (theme/portal drag affordances).
- **booking (CTA)** — bright pulse with warm `--butter` glow on `Create Their Day ✦` and primary CTAs.
- **disabled / reduced-motion / touch** — custom cursor fully removed; native cursor restored; all affordances remain via standard hover/focus states. The cursor is never the only signal that something is interactive.

---

## 9. PAGE TRANSITIONS — exactly three families

No unique per-link transitions. Novelty comes from these reusable systems only.

**A. Magic Portal (PRIMARY / signature)**
- *Purpose:* enter imaginative content, theme worlds, and key reveals.
- *Visual behavior:* a masked aperture with luminous `--lavender→--sky` rim expands from a point of light to full-bleed; grade shifts cool-dark → warm-lit; letterbox retracts. Iris variant for routes.
- *Used:* homepage reveal beats, theme-world entry, and route changes into imaginative pages.
- *NOT used:* between plain editorial paragraphs, inside forms, or as decoration on non-imaginative UI.

**B. Storybook (SECONDARY)**
- *Purpose:* narrative/editorial pages (About, Process).
- *Visual behavior:* quiet light cross-dissolve with a gentle content settle. **No paper folds, no page-turns** (those belong to the un-selected concept).
- *Used:* editorial/narrative route changes only.
- *NOT used:* imaginative reveals (use Portal), or object/event transitions (use Object-Wipe).

**C. Object Wipe (TERTIARY)**
- *Purpose:* move between themed events/projects.
- *Visual behavior:* a single luminous object (star, racecar, balloon) sweeps across to wipe the frame.
- *Used:* Past-Adventure to Past-Adventure, theme project to theme project.
- *NOT used:* primary imaginative entry (Portal) or editorial pages (Storybook); never more than one object per wipe.

---

## 10. MOBILE (touch translation)

- Custom cursor → **removed**; every affordance available via tap/focus states.
- Hover reveals → **tap** to reveal; nothing important is hover-only.
- Camera push/dolly → **scale + opacity**; parallax capped at 2–3 layers; **one** scrubbed hero reveal max.
- Portal push → **tap-to-enter** where scrubbing is heavy; keep the portal visual, drop the heavy scrub.
- Table assembly → **sequential drop-in reveals**, simplified.
- Drag/streak interactions → replaced with tap or removed; no precision-drag requirements on touch.
- Letterbox → **full-screen** vertical scenes.
- Touch targets ≥ 44px. Sticky `Create Their Day ✦` CTA. Cut effects before cutting clarity; mobile is a first-class design, not a shrunk desktop.

---

## 11. ACCESSIBILITY

- **Reduced motion (`prefers-reduced-motion`):** disable dolly, portal-expansion scrub, Ken-Burns, letter-spacing animation, ambient particles, and cursor effects. Serve instant/held reveals. Content, order, and meaning are identical with motion off.
- **Keyboard:** full keyboard operability; logical DOM/focus order matching visual order; skip-to-content link; portals and theme selectors operable without a pointer; no keyboard traps in pinned/scroll scenes.
- **Focus:** visible focus on every interactive element — `--lavender` ring, ≥2px, with offset, ≥3:1 contrast. Never remove focus outlines without an equal-or-better replacement.
- **Text contrast:** body ≥4.5:1, large ≥3:1; text only ivory-on-ink or ink-on-light; accent text only where the pairing passes.
- **Screen readers:** semantic HTML with landmarks (header/nav/main/footer); meaningful `alt` on content photography; decorative illustration/particles `aria-hidden`; scene meaning never conveyed by motion alone; announce route/scene changes politely where needed.
- **Forms:** visible persistent labels (never placeholder-only); explicit error text tied to fields; large targets; logical tab order; the booking form is fully operable stripped of its cinematic wrapper.

---

## 12. ANTI-GENERICITY RULES (explicit prohibitions)

Each prohibited pattern with the required MagicMinds alternative:

- **No generic SaaS cards.** → Group with letterbox framing, scrims, or spacing.
- **No generic centered hero + two CTA buttons.** → Cinematic title card resolving into a scroll cue + one persistent CTA; asymmetric staging.
- **No excessive pill UI.** → Sharp controls, ≤4px radius, no pill chrome.
- **No gratuitous gradients.** → Gradients only as portal rim/light bloom; never decorative background gradients.
- **No stock/preschool graphics or primary-color clip art.** → Real photography + light-based star illustration only.
- **No unnecessary glassmorphism.** → Legibility scrims and solid panels; no frosted-glass chrome.
- **No generic icon-feature grids.** → Narrative scenes with real photography and star motifs, not icon rows.
- **No repetitive three-column feature sections.** → Cinematic, scene-based, asymmetric composition.
- **No random movement.** → One purposeful primary motion per scene; motion must have narrative reason.
- **No decoration without narrative purpose.** → Every animated/illustrated element serves the reveal, the theme, or wayfinding.
- **No large fields of rounded rectangles.** → Rectangular cinematic frames; the circular portal is the only recurring curved form.

Any element that looks like it came from a default template, an AI website generator, or a generic agency starter is out of spec.

---

## THE 15 NON-NEGOTIABLE RULES

1. **MagicMinds must always** open restrained and near-monochrome, and earn the reveal — the dark title-card state precedes any theme color.
2. **MagicMinds must always** use real MagicMinds event photography as the hero asset, under one consistent cinematic grade.
3. **MagicMinds must never** use stock imagery, clip art, emoji-as-design, or preschool primary-color styling.
4. **MagicMinds must always** introduce color as light (glows, rims, beams) and show at most two accents together outside an open theme world.
5. **MagicMinds must never** hide what MagicMinds does, who it's for, that it serves Boston / MA / RI / NH, or how to inquire behind any motion or effect.
6. **MagicMinds must always** treat the circular portal (and its glow) as the single recurring curved form; everything else is sharp-edged.
7. **MagicMinds must never** use pill UI, rounded-rectangle card soup, glassmorphism, or generic SaaS/agency template patterns.
8. **MagicMinds must always** animate only `transform` and `opacity`, with one primary motion event per scene.
9. **MagicMinds must never** use linear, bouncy, or elastic easing, or animation with no narrative purpose.
10. **MagicMinds must always** ship full parity under `prefers-reduced-motion`: identical content, order, and meaning with motion disabled.
11. **MagicMinds must always** use exactly three transition families — Magic Portal (primary), Storybook (secondary), Object-Wipe (tertiary) — and never invent per-link transitions.
12. **MagicMinds must never** reintroduce the un-selected concepts' aesthetics: no paper folds, page-turns, scrapbook pages, or ambient object-physics (the one table-assembly reveal excepted).
13. **MagicMinds must never** place text on moving or photographic media without a legibility scrim, and must keep body text ivory-on-ink or ink-on-light at AA.
14. **MagicMinds must always** remove the custom cursor on touch/reduced-motion and never make the cursor the only signal that something is interactive.
15. **MagicMinds must never** invent services, prices, testimonials, guarantees, geographic claims, or copy presented as fact — unconfirmed content is flagged, not fabricated.
