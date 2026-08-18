# MAGICMINDS — SIGNATURE INTERACTIONS (REFINED)

**Status:** execution spec · governed by `02-creative-direction-FINAL.md`, `03-design-constitution.md`, `04-homepage-storyboard.md`.
**Rule for this document:** these refinements **do not change the approved storyboard**. Each moment is anchored to an existing scene and uses only the constitution's tokens, easing, durations, cursor states, and three transition families.

**Shared timing vocabulary (from the constitution):**
- Easing — reveal/settle `R = cubic-bezier(0.22, 1, 0.36, 1)`; cinematic dolly `D = cubic-bezier(0.65, 0, 0.35, 1)`; micro `M = cubic-bezier(0.4, 0, 0.2, 1)`.
- Durations — micro 150–250ms · reveal 600–900ms · cinematic 900–1400ms · dolly/assembly = **scroll-scrubbed** (no fixed duration).
- Animate `transform` + `opacity` only. One primary motion per scene. Glow via gradient/mask, never large-area `blur()`.

**Three reconciliations applied (so the locked direction holds):**
1. **A — objects are luminous line forms** that bloom into light, not flat cartoon fills (constitution §Illustration).
2. **B — threaded across Scenes 2 → 5**, not compressed; the "table" line is *promised* in Scene 2 and *visually delivered* in Scene 5 (storyboard unchanged).
3. **F — cinematic memory composition, not a paper scrapbook** (constitution Rule 12). ⚠️ See F for the flagged conflict and override path.

---

## A. LOGO DISSOLUTION
**Storyboard anchor:** Scene 1 (The Invitation) primary motion + the Scene 1→2 bridge; optional idle micro-interaction on the persistent logo mark.

- **Narrative purpose:** imagination escaping the ordinary adult interface — the studio mark "leaks" the child's world, seeding the starfield/constellation that Scene 2 uses. It is the film's first hint that this restrained surface is about to open.
- **Visual behavior:** the serif logo mark holds; from its counters/negative space, luminous **line-drawn** objects emerge in sequence — star · crayon · soccer ball · butterfly · racecar · flowers · toy · rocket — drift up/outward, and dissolve into points of light that become Scene 1's star (and Scene 2's constellation). Recognizable silhouettes in glowing line; no flat fills.
- **Exact trigger:** auto, once, after the Scene 1 title-resolve completes; a gentle idle re-emission if the visitor lingers >~8s; optional desktop hover on the persistent logo mark emits **one** object. Never on scroll.
- **Motion / timing:** per object — emerge (scale 0.6→1, opacity 0→1, 500ms, `R`) → drift (translate + ≤8° rotate, 900–1200ms) → dissolve to light (opacity→glow, 400ms). Stagger 180–260ms. Full run ~2.6–3.4s, resolving into the constellation (not looping indefinitely).
- **Cursor:** `default`; `interactive` when hovering the logo mark (emits one object).
- **Mobile:** reduced set (3–4 objects), single emission on load, no idle loop, no hover; objects smaller; resolves into the mobile starfield.
- **Reduced motion:** logo mark static; objects appear as a few faint, pre-placed static stars (or omitted). Title framing and meaning identical.
- **Performance implications:** inline SVG line objects (cheap); transform/opacity only; cap 8 desktop / 4 mobile; glow via radial gradient; destroy the timeline after it resolves; pause on `visibilitychange`.

---

## B. "EVERY CHILD HAS A WORLD INSIDE THEIR HEAD"
**Storyboard anchor:** Scene 2 (setup + themes-enter). ⚠️ The closing line **"We bring that world to the table"** is *set up here* and **visually delivered in Scene 5** — this keeps the storyboard intact (do not build the table here).

- **Narrative purpose:** the child's inner world fills with what they love, and MagicMinds promises to externalize it — planting the customization idea before Scene 3 makes it interactive.
- **Visual behavior:** after the serif line resolves, themed **light-objects** (dinosaur · princess/crown · car · art/paint · rocket/space · …) enter from the periphery and coalesce toward center into a single glowing "world" (constellation/sphere of light). Grade stays cool-dark. Sequence ends on the promise title *(prov.)* "We bring that world to the table," which Scene 5 later fulfills.
- **Exact trigger:** scroll progress within Scene 2's pinned segment (scrubbed): themes enter 0–70% · coalesce 70–90% · promise title 90–100%.
- **Motion / timing:** each theme object enters (fade + inward drift, scrubbed to ~600–800ms feel), staggered by scroll; coalescence = scale-to-center + brighten; promise title uses the letter-spacing resolve (~700ms, `R`).
- **Cursor:** `default`; subtle proximity nudge on theme objects.
- **Mobile:** 4–5 themes; enter via scale/opacity on scroll; simplified coalesce; promise title static-reveals.
- **Reduced motion:** show the headline + a static cluster of theme objects + the promise title; no orbit/scrub.
- **Performance implications:** SVG light objects, cap ~6; transform/opacity; pause offscreen; no per-frame blur.

---

## C. "WHAT ARE THEY INTO RIGHT NOW?"
**Storyboard anchor:** Scene 3 (theme selector).

- **Narrative purpose:** make customization tangible — the child's current obsession is a world you reach *toward*, not a form control. Objects must not read as buttons.
- **Visual behavior:** themed objects/portals (dino, princess, car, art, space + real-event themes) float with a gentle idle bob. They react rather than depress: on approach they **lean toward the pointer** (proximity tilt), brighten, emit a star sparkle, and a real photo sharpens inside. Selection detaches the object and wipes into the world.
- **Exact trigger:** desktop pointer proximity → lean/brighten (no click needed); hover/focus → photo sharpen + reticle bloom; click/Enter → Object-Wipe to Scene 4.
- **Motion / timing:** idle bob (translateY ±6px, 3–4s ease-in-out, low amplitude); proximity lean (≤6° rotate + slight translate toward cursor, 200ms, `M`); select → detach + Object-Wipe (900–1200ms, `D`).
- **Cursor:** `interactive` → `gallery` over the object's photo.
- **Mobile:** horizontal **swipe carousel**; tap to select (sparkle + open); no proximity — objects drift gently; targets ≥44px.
- **Reduced motion:** static objects (no bob/lean), fully selectable; inner photo appears on focus/tap without animation.
- **Performance implications:** cap floating objects on-screen (≤7); proximity via rAF-throttled pointer listener; lazy-load inner photos, decode near-viewport/on-hover.

---

## D. MAGIC LENS
**Storyboard anchor:** selected photography in Scenes 4, 6, and 7 (a microinteraction, not a scene).

- **Narrative purpose:** discovery — peeking "through" a photo reveals a detail or an alternate/"after" image, rewarding curiosity. Uses the circular portal/iris language, the only curved form permitted.
- **Visual behavior:** a circular lens with a `--lavender→--sky` rim glow follows the cursor over eligible photos; inside the circle a masked alternate/detail image shows (e.g., wide→close-up, before→after).
- **Exact trigger:** hover/move over a photo marked `data-lens` (desktop, fine pointer). Lens appears on enter, tracks pointer, hides on leave.
- **Motion / timing:** lens fade+scale in 200ms (`M`); tracks pointer with slight eased lag; subtle inner parallax. No blur.
- **Cursor:** `gallery`; the dot merges into / hides beneath the lens while active.
- **Mobile:** no hover — replace with a **tap-to-toggle crossfade** to the detail image, or a draggable fixed lens. Optional; must never block the base photo.
- **Reduced motion:** disable the moving lens; provide a static toggle/button that crossfades to the detail image, plus a caption.
- **Performance implications:** preload the alternate image only when the host photo enters the viewport or on first hover; reuse one lens instance; mask via CSS clip/radial-gradient (no per-frame blur); throttle pointer.

---

## E. TRANSFORMATION SEQUENCE
**Storyboard anchor:** Scene 5 (The Transformation) — the hero pinned beat.

- **Narrative purpose:** make "what you get" legible — an ordinary space becoming a complete, themed, hands-on world. This is the "what you're buying" moment.
- **Visual behavior:** pinned; scroll progress drives staged assembly via reveal + light (**not physics**): **0% empty** warm-lit room · **20% bare table** · **35% seating** · **50% materials** · **65% décor** · **80% theme details** · **100% complete world**. Micro-labels per stage; headline "We bring that world to the table" resolves ~90–100%.
- **Exact trigger:** scroll progress across Scene 5's ~180vh pin; each element reveals within its percentage band (e.g., seating 20–35%).
- **Motion / timing:** each element — mask-reveal + rise (translateY 12→0) + light bloom + arrival sparkle, tied to its scroll band (`R`); headline letter-spacing resolve near end. Scrubbed (no fixed duration).
- **Cursor:** `default`; proximity light on the nearest element; `interactive` on the resolve CTA.
- **Mobile:** simplified to ~4 sequential drop-ins (table → seating+materials → décor+theme → complete), one per short scroll; labels stacked.
- **Reduced motion:** show the **complete** world immediately with a static 0→100 stage legend; no assembly.
- **Performance implications:** composite from few optimized layers — ideally a real empty→complete photo sequence **[MISSING ASSET: confirm; fallback = masked staged reveal of one hero setup photo]**; progressive decode; long pin → keep transforms cheap, no layout animation; kill timeline on unmount.

---

## F. MEMORY SCRAPBOOK  ⚠️ CONFLICT FLAGGED
**Storyboard anchor:** a **reusable photographic treatment** applied *within* existing scenes (best fit: Scene 7 reel expansions; optionally the Scene 4→6 region). **Not a new scene — storyboard unchanged.**

> **⚠️ Conflict & resolution:** Design Constitution **Rule 12** prohibits scrapbook/paper aesthetics (paper, tape, torn edges, craft texture) as an un-selected-concept look. **Refinement adopts the *assembly choreography only*, rendered as a cinematic "memory composition"** — overlapping cinematically-graded stills with light and soft depth, **no paper**. If a literal paper scrapbook is genuinely wanted, that is a deliberate deviation from the locked direction and needs explicit sign-off; flag it and stop.

- **Narrative purpose:** emotional accumulation — one moment becomes many remembered moments; "so many happy days," without breaking the cinematic language.
- **Visual behavior:** a full-screen graded photo recedes/scales down as additional graded stills slide in to overlap at slight angles (≤4°) with soft contact shadows and light — a cinematic "memory wall." No tape, paper, or torn edges.
- **Exact trigger:** scroll progress within the host scene (scrubbed); stills join on progress bands.
- **Motion / timing:** lead photo scale 1→0.7 + reposition; each subsequent still slide+settle (~500–700ms feel, scrubbed), staggered; rotation ≤4° (`R`).
- **Cursor:** `gallery`; Magic Lens optional on individual stills.
- **Mobile:** 3–4 stills, simpler stack, less rotation, scroll-driven; tap to enlarge.
- **Reduced motion:** static pre-composed memory composition; no assembly.
- **Performance implications:** cap stills ≤6; decode progressively; transform/opacity only; soft shadow kept cheap; avoid many simultaneous large decodes.

---

## G. PAST ADVENTURES
**Storyboard anchor:** Scene 7 (Past Adventures) — consistent with its horizontal-feel, scrubbed progression.

- **Narrative purpose:** travel through past worlds — proof of range as a journey, not a grid.
- **Visual behavior:** pinned; vertical scroll translates a **horizontal track** of adventure "trailers." A trailer expands to a full-bleed reel (Ken-Burns); Object-Wipe moves between adventures.
- **Exact trigger:** scroll progress → `translateX` of the track (scrubbed) while pinned; hover/click a trailer → expand; wipe between reels.
- **Motion / timing:** track translateX mapped to scroll; trailer-content parallax; expand = scale to full-bleed + slow push (`D`/`R`); one luminous object per wipe.
- **Cursor:** `interactive` → `gallery` over reels.
- **Mobile:** **do not** run horizontal-on-vertical (janky on touch) — convert to a **vertical trailer stack**, tap to expand to a full-screen reel, swipe within a reel.
- **Reduced motion:** static vertical list of trailers → static photo sets on tap; no horizontal scrub, no wipes.
- **Performance implications:** heaviest scene — virtualize offscreen trailers; decode only the open reel; cap concurrent full-bleed images to 1–2; clean up pins; ensure the horizontal scrub never traps wheel/keyboard (provide keyboard nav + `Esc` to collapse).

---

## H. CREATE THEIR DAY
**Storyboard anchor:** Scene 10 (Create Their Day).

- **Narrative purpose:** hand the visitor from the immersive world into a warm, clear, human conversation — commitment made easy. Clarity leads; spectacle recedes.
- **Visual behavior:** the cinematic world eases/dims into a warm-lit closing card; a minimal marquee/clapperboard frame (atmosphere only) surrounds a high-contrast form with visible labels. On submit → a warm confirmation state.
- **Exact trigger:** reaching Scene 10 (scroll); `Create Their Day ✦` reveals/opens the form; submit → confirmation. Fields *(placeholders — confirm booking process with owner; do not hardcode packages/prices):* child's name · their current obsession/theme · event date · your contact · message.
- **Motion / timing:** dolly settle + title resolve (900–1200ms, `D`); fields fade up staggered 80ms (`R`); success = gentle bloom. **No motion around active inputs.**
- **Cursor:** `booking` on the CTA; `default` in fields.
- **Mobile:** single-column form; sticky CTA; large inputs; wrapper stripped if it competes with legibility; keyboard-friendly.
- **Reduced motion:** static title + immediately-visible form; no dolly/marquee motion.
- **Performance implications:** lightweight; defer any background media; the form must be fully usable without heavy animation; client-side validation; effects never block or delay submission.

---

## I. EASTER EGGS
**Storyboard anchor:** scene-agnostic "post-credits" delight — the 10% weirdness, bounded.

- **Narrative purpose:** reward curiosity and add character without ever interfering with usability, clarity, or conversion.
- **Visual behavior (low-cost menu — pick a few):** (1) click the closing star → a tiny sparkle burst + optional soft chime (user-gesture only); (2) type `magic` → one extra logo-dissolution emission; (3) hover the logo mark 3× → a hidden `toy` object peeks; (4) an occasional lens flare in a reveal briefly shows a hidden character silhouette; (5) idle ~20s on the hero → one extra star drifts in.
- **Exact trigger:** explicit user gesture only (click / key sequence / hover count / idle timer). Never automatic in a way that shifts layout or blocks content.
- **Motion / timing:** micro one-shots (150–250ms, `M`); no loops; no layout shift.
- **Cursor:** unchanged (a brief `booking`/pulse at most).
- **Mobile:** gesture-based (e.g., long-press the logo) or omit; must never interfere with scroll/tap.
- **Reduced motion:** all easter eggs disabled.
- **Performance implications:** negligible; behind event listeners with no always-on cost; no audio autoplay (chime only on gesture, respects reduced-motion/mute); no extra heavy assets beyond a tiny sparkle.

---

## Cross-cutting guarantees (unchanged from governing docs)
- These interactions add **zero** new business claims; all copy is provisional and owner-confirmed before publish.
- Each interaction has a full **reduced-motion** and **keyboard/touch** path; none is the sole way to access content or meaning.
- Peak-cost interactions — **E** (long scrubbed assembly), **G** (media-heavy horizontal reels), **D/F** (extra image decodes) — get lazy-loading, decode caps, and pin/timeline cleanup first.
- Open **MISSING ASSET** dependency: the empty→complete table sequence for **E** (fallback specified). Resolve or use the fallback before launch.
