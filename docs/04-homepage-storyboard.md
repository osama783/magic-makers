# MAGICMINDS — HOMEPAGE STORYBOARD

**Status:** execution spec · governed by `02-creative-direction-FINAL.md` (Concept 2 — The Title Sequence) and `03-design-constitution.md`.
**Model:** the homepage is **one continuous title sequence**. Scroll = time = transformation. Scenes are beats in one film, not independent stacked sections; each ends *inside* the next.
**Total length:** ≈ **1,780vh** (~18 viewport heights). Provisional copy is marked *(prov.)* — a creative direction, not locked marketing copy. No business facts are invented; unconfirmed items are flagged.

## Emotional arc → scene map
Adult world (1) → curiosity (2) → imagination breaking through (3) → full childlike world (4–5) → real MagicMinds experiences (5–7) → trust (8–9) → clear booking action (10–11).

## Business-clarity delivery schedule (spectacle must never hide these)
| Required understanding | Lands by | How |
|---|---|---|
| What MagicMinds does | Scene 1 (kicker) → Scene 2 (subhead) | Persistent kicker + explicit one-line subhead |
| For whom (parents planning kids' events) | Scene 2 | Subhead |
| Experiences are **customized** | Scene 3 | Theme selector + label |
| Examples of real work | Scenes 4–5, 7 | Real photography, Past Adventures |
| How the process works | Scene 8 | Four-step sequence |
| Service area (Boston · MA · RI · NH) | Scene 9 | Stated plainly |
| Trust | Scene 9 | Confirmed cues only |
| How to inquire/book | Persistent + Scene 10 | Always-visible `Create Their Day ✦` + booking scene |

## Persistent clarity layer (all scenes)
A slim top bar rides above every scene in the current contrast mode: logo studio-mark · minimal nav (Experiences · Past Adventures · Process · Contact) · persistent **`Create Their Day ✦`** CTA. Booking is reachable from any scroll position. This layer is exempt from all scene motion and never fades out.

---

# SCENE 1 — THE INVITATION

- **Scene number:** 1
- **Name:** The Invitation
- **Approx scroll length:** 120vh
- **Business purpose:** Establish MagicMinds as a premium party-entertainment studio; state what it is in one line; expose nav + CTA immediately.
- **Emotional purpose:** The adult world — composed, quiet, anticipatory. "The lights are dimming."
- **Starting state:** `--ink-900` void, letterboxed, logo studio-mark centered, one `--lavender` star.
- **Ending state:** Kicker + scroll cue resolved; a single point of light beginning to gather (portal anticipation).
- **Headline:** *(prov.)* "MagicMinds — WE CREATE MAGIC" (serif studio card).
- **Supporting copy:** kicker *(prov., grotesque)* "CUSTOM CHILDREN'S EXPERIENCES · BOSTON · MA · RI · NH"; scroll cue *(prov.)* "Make a little magic ↓".
- **CTA if present:** persistent `Create Their Day ✦` (top bar) only; no in-scene CTA.
- **Foreground:** persistent nav/CTA; scroll cue.
- **Midground:** logo studio-mark; kicker.
- **Background:** `--ink-900` void; single drifting star.
- **Photography requirements:** none (restraint earns the later reveal).
- **Illustration requirements:** one star (light-based, ~1.5px luminous), low drift.
- **Decorative elements:** letterbox bars (`--ink-900`); faint vignette.
- **Scroll behavior:** short pin; title letter-spacing resolves on entry, then holds.
- **Pinning:** pinned ~100vh.
- **Parallax:** minimal — star on a slow back layer only.
- **User interaction:** hover on CTA → booking cursor; scroll cue reacts to pointer proximity subtly.
- **Cursor state:** default; interactive on nav/CTA.
- **Entrance:** title-resolve (letter-spacing 0.5em→0em, 700–800ms, ease-out `0.22,1,0.36,1`), star fades in.
- **Main timeline:** hold; star drifts; scroll cue pulses low-amplitude.
- **Exit:** letterbox begins to thin; the star brightens into a gathering point of light.
- **Transition into next scene:** **camera begins to dolly forward** (Portal anticipation — light gathers). Not a cut.
- **Desktop behavior:** full title card + custom cursor.
- **Tablet behavior:** same, reduced star drift; letterbox retained.
- **Mobile behavior:** full-screen; smaller type per mobile caps; no cursor; scroll cue tappable.
- **Reduced-motion fallback:** static title card, star static, no letter-spacing animation; content identical.
- **Technical risk:** pin/scroll-cue conflict on short pins; ensure clean ScrollTrigger start.
- **Performance considerations:** trivial; preload logo + fonts; no media = fast LCP anchor.

### ▶ HANDOFF 1 → 2
The composed adult title card gives way to *curiosity*: the single star the parent has been watching brightens and the camera leans forward, as if drawn toward it. Narrative logic — the film has introduced itself; now it moves. Emotional shift: stillness → pull.

---

# SCENE 2 — ENTER THEIR IMAGINATION

- **Scene number:** 2
- **Name:** Enter Their Imagination
- **Approx scroll length:** 150vh
- **Business purpose:** State plainly what MagicMinds does and for whom, before spectacle escalates.
- **Emotional purpose:** Curiosity → the sense that a world is about to open.
- **Starting state:** dolly into the void; star growing.
- **Ending state:** a `--lavender` point blooms into a portal aperture at frame center.
- **Headline:** *(prov., serif)* "Every child has a world inside their head."
- **Supporting copy:** *(prov.)* "MagicMinds designs customized, hands-on party experiences built around what your child loves — for families across Boston, MA, RI & NH." (the explicit what + who + customized seed).
- **CTA if present:** none in-scene (persistent CTA remains).
- **Foreground:** subhead text zone (scrimmed); persistent layer.
- **Midground:** serif headline; growing point of light.
- **Background:** deepening starfield; slow constellation forming (brand star motif).
- **Photography requirements:** none yet (reveal is withheld to Scene 4).
- **Illustration requirements:** constellation build (light lines connecting stars), luminous, low weight.
- **Decorative elements:** particle light (low count), letterbox thinning.
- **Scroll behavior:** scrubbed dolly forward; headline resolves, subhead reveals, portal seed appears.
- **Pinning:** pinned through the dolly (~130vh).
- **Parallax:** 3 layers (stars back, constellation mid, text front).
- **User interaction:** pointer proximity nudges nearby stars (subtle); focus reticle blooms near CTA.
- **Cursor state:** default; interactive.
- **Entrance:** headline title-resolve; subhead fades up (600ms).
- **Main timeline:** camera pushes; constellation completes; a single star migrates to center and blooms.
- **Exit:** the bloom forms a portal aperture; grade edges warm.
- **Transition into next scene:** **Magic Portal (signature) begins** — aperture opens into theme worlds.
- **Desktop behavior:** full dolly + parallax + cursor proximity.
- **Tablet behavior:** ≤3 layers; proximity reduced.
- **Mobile behavior:** dolly → scale/opacity; constellation simplified; subhead fully legible.
- **Reduced-motion fallback:** headline + subhead shown statically over a still starfield; portal appears without scrub.
- **Technical risk:** long pin + parallax jank on low-end; keep transforms GPU-friendly.
- **Performance considerations:** cap particles; pause offscreen; no blur on large areas (fake glow via gradient).

### ▶ HANDOFF 2 → 3
Curiosity becomes *imagination breaking through*: the point of light the parent leaned toward opens into a doorway, and through it appears not one world but many — the child's obsessions, waiting. Narrative logic — "a world inside their head" literally opens. This is the film's first spectacle, and it immediately carries the customization message (many worlds = built around what *they* love).

---

# SCENE 3 — WHAT ARE THEY INTO?

- **Scene number:** 3
- **Name:** What Are They Into?
- **Approx scroll length:** 180vh
- **Business purpose:** Communicate that experiences are **customized** to the child's current obsession; show breadth via real themes.
- **Emotional purpose:** Delight of recognition — "that's *my* kid's thing."
- **Starting state:** portal open; theme worlds as luminous portals/objects.
- **Ending state:** one theme selected/emphasized, primed to be entered.
- **Headline:** *(prov., serif)* "What are they into right now?"
- **Supporting copy:** *(prov.)* "Bluey. Toy Story. Monster trucks. Gingerbread. Whatever they love — we build the world around it." Label: "Themes are examples. Every experience is customized."
- **CTA if present:** secondary text link *(prov.)* "See more worlds →" (scrolls/loads within scene); persistent CTA remains.
- **Foreground:** interactive theme portals/objects; selection label.
- **Midground:** headline; portal rims.
- **Background:** `--ink-900`/`--ink-800` void with faint theme light leaking from each portal.
- **Photography requirements:** a representative real photo peeks inside each theme portal (Bluey setup, Toy Story canvas/costume, monster-truck pit party, gingerbread, patriotic, Halloween stuff-a-plush, Kidchella). Pull selects from asset manifest.
- **Illustration requirements:** luminous portal rims (`--lavender→--sky`); star sparkle on hover.
- **Decorative elements:** light beams from portals; particle drift.
- **Scroll behavior:** semi-horizontal reveal of theme portals as camera pans across the doorway; scrubbed.
- **Pinning:** pinned during pan (~150vh).
- **Parallax:** portals on staggered depth layers.
- **User interaction:** hover/focus a theme → reticle blooms, portal brightens, real photo sharpens; click/enter → primes Scene 4. Keyboard-operable list of themes.
- **Cursor state:** interactive → gallery (over a portal's photo).
- **Entrance:** portals fade/scale in staggered (60–120ms).
- **Main timeline:** camera pans themes; user or auto-emphasis selects one; label reinforces customization.
- **Exit:** selected theme's object detaches to wipe the frame.
- **Transition into next scene:** **Object-Wipe (tertiary)** — the selected theme's object (e.g., balloon/racecar/star) sweeps across into the full reveal.
- **Desktop behavior:** hover-rich; pan + cursor bloom.
- **Tablet behavior:** swipe/tap portals; reduced beams.
- **Mobile behavior:** horizontal **swipe carousel** of theme cards; tap to enter; hover→tap.
- **Reduced-motion fallback:** static grid/list of theme cards with real photos + the customization label; no pan, no wipe.
- **Technical risk:** many media inside portals = load cost; lazy-load offscreen themes; hover state must have keyboard equal.
- **Performance considerations:** thumbnail-grade images inside portals; upgrade on entry; limit simultaneous decoded images.

### ▶ HANDOFF 3 → 4
Imagination breaks fully through: the parent chooses (or the film chooses) a world, and its object sweeps the screen aside to drop them *inside* it. Narrative logic — selection → immersion. Emotional shift: browsing many worlds → standing in one, full and alive.

---

# SCENE 4 — THEIR WORLD COMES ALIVE

- **Scene number:** 4
- **Name:** Their World Comes Alive
- **Approx scroll length:** 150vh
- **Business purpose:** First full immersion in a real MagicMinds experience — proof it's real, not rendered.
- **Emotional purpose:** Full childlike world; awe.
- **Starting state:** object-wipe resolves into a full-bleed real event, warm-lit.
- **Ending state:** camera begins pulling toward a table (setup for Transformation).
- **Headline:** *(prov., serif, minimal)* "This is their world — brought to life."
- **Supporting copy:** one short line only; photography dominates.
- **CTA if present:** none (persistent only).
- **Foreground:** thin caption (grotesque, scrimmed); persistent layer.
- **Midground:** full-bleed real event photography.
- **Background:** graded environment of the same photo (depth via layered crops).
- **Photography requirements:** hero wide immersive shot of a real event (e.g., Bluey party wide, or monster-truck party wide), full-bleed, consistent cinematic grade, Ken-Burns 1.0→1.08. **This is a peak LCP asset — optimize hard.**
- **Illustration requirements:** minimal; a few drifting stars at low opacity.
- **Decorative elements:** soft vignette; light bloom at edges.
- **Scroll behavior:** scrubbed Ken-Burns push; caption reveals then recedes.
- **Pinning:** light pin (~120vh).
- **Parallax:** 2 layers (subject vs. background crop).
- **User interaction:** gallery cursor over the photo; optional click → theme detail (post-MVP).
- **Cursor state:** gallery.
- **Entrance:** object-wipe reveal; grade warms in.
- **Main timeline:** slow push into the scene; caption in/out.
- **Exit:** camera dollies toward a table within/implied by the scene.
- **Transition into next scene:** **dolly + Portal resolve** toward the table (into Transformation).
- **Desktop behavior:** full-bleed push + cursor.
- **Tablet behavior:** full-screen photo, reduced parallax.
- **Mobile behavior:** full-screen photo; push → gentle scale; caption below-fold-safe.
- **Reduced-motion fallback:** static full-bleed hero photo + caption; no push.
- **Technical risk:** LCP/CLS from full-bleed hero; reserve space, use poster + responsive srcset.
- **Performance considerations:** preload this hero; modern format; avoid decoding multiple full-bleed images at once.

### ▶ HANDOFF 4 → 5
From the whole world, the camera narrows to the thing MagicMinds actually makes: the table. Narrative logic — awe → "how does this happen?" The film moves from *being in* the world to *watching it built*, which is the most ownable MagicMinds beat.

---

# SCENE 5 — THE TRANSFORMATION  *(borrowed Table-Assembly reveal — cinematic)*

- **Scene number:** 5
- **Name:** The Transformation
- **Approx scroll length:** 200vh (longest — the hero beat)
- **Business purpose:** Show *what you actually get*: an ordinary space becoming a complete, themed, hands-on experience. This is the "what you're buying" scene.
- **Emotional purpose:** The magic made legible — transformation and payoff.
- **Starting state:** a bare, elegantly lit table in warm light.
- **Ending state:** a complete themed setup; resolves on the tagline.
- **Headline:** *(prov., serif, resolves at end)* "We bring that world to the table."
- **Supporting copy:** *(prov.)* micro-labels appear per assembly stage: "Seating · Materials · Décor · Theme · Complete." Then a one-line what-you-get summary.
- **CTA if present:** soft inline `Create Their Day ✦` may appear at resolve (secondary to the persistent one).
- **Foreground:** stage labels; resolving headline.
- **Midground:** the table and its assembling elements (real photography composited in stages / cut-outs with contact shadows).
- **Background:** warm-lit room, softly graded, low depth.
- **Photography requirements:** ideally a real **empty→complete setup sequence**. **[MISSING ASSET: confirm a staged sequence exists. Fallback: reveal one hero setup photo in masked stages so elements appear to arrive.]**
- **Illustration requirements:** light sparkle as each element "arrives"; star accents only.
- **Decorative elements:** soft contact shadows; warm light beams; no confetti/rainbow.
- **Scroll behavior:** **scroll-scrubbed assembly** — elements arrive in sequence tied to scroll progress (reveal + light, **not free physics**).
- **Pinning:** long pin (~180vh) — the centerpiece.
- **Parallax:** shallow; elements arrive on the table plane, not deep parallax.
- **User interaction:** scrubbing controls assembly; pointer proximity adds subtle light to nearest element.
- **Cursor state:** default → interactive at resolve CTA.
- **Entrance:** bare table fades up in warm light.
- **Main timeline:** staged arrivals (seating→materials→décor→theme→complete), each with a light beat + micro-label; headline resolves at completion.
- **Exit:** the completed table settles; warm light steadies; a keepsake element lifts (bridge to Scene 6).
- **Transition into next scene:** **Storybook cross-dissolve** into personalization/keepsakes.
- **Desktop behavior:** full scrubbed assembly + labels.
- **Tablet behavior:** fewer stages combined; still scrubbed.
- **Mobile behavior:** **sequential drop-in reveals** (simplified), one element per short scroll; labels stacked.
- **Reduced-motion fallback:** show the **complete** table immediately with a static stage legend; no assembly.
- **Technical risk:** the most complex beat; keep it a **scrubbed reveal**, never a physics sim (constitution). Guard against scrub jank on long pin.
- **Performance considerations:** composite from a few optimized layers, not many images; decode staged assets progressively; kill timeline on unmount.

### ▶ HANDOFF 5 → 6
The finished table lifts one made-by-them keepsake into focus. Narrative logic — from *the space* to *the child within it*: the payoff isn't the table, it's what the child makes and takes home. Emotional shift: spectacle → intimacy.

---

# SCENE 6 — MADE FOR THEM

- **Scene number:** 6
- **Name:** Made for Them
- **Approx scroll length:** 140vh
- **Business purpose:** Communicate personalization + take-home keepsakes as core value (named signage, adopt-a-plush, painted ceramics/canvas).
- **Emotional purpose:** Warmth, care, "this was made for *my* child."
- **Starting state:** warm light/editorial; a keepsake in focus.
- **Ending state:** a small cluster of personalization details; primed for proof.
- **Headline:** *(prov., serif)* "Made for them — and theirs to keep."
- **Supporting copy:** *(prov.)* "Personalized signage, take-home crafts, and keepsakes your child makes and adopts — so the day goes home with them."
- **CTA if present:** none (persistent only).
- **Foreground:** detail photography + short copy in an editorial column (≤720px).
- **Midground:** personalization details (name signage, adoption certificate, painted piece) as real photos.
- **Background:** `--cream-100` warm surface, low light.
- **Photography requirements:** real detail/close-up shots — named signage, stuff-a-plush/adoption, paint-your-own ceramics/canvas, sensory bins. Detail + candid-child mix.
- **Illustration requirements:** subtle star accents; a luminous line may frame one keepsake.
- **Decorative elements:** hairline dividers; soft light; no cards.
- **Scroll behavior:** gentle reveals (fade-up, stagger 80ms); editorial pacing, not cinematic.
- **Pinning:** none or very light.
- **Parallax:** minimal (detail photos drift slightly).
- **User interaction:** gallery cursor over photos; optional lightbox (post-MVP).
- **Cursor state:** gallery; default on text.
- **Entrance:** Storybook dissolve in; keepsake settles.
- **Main timeline:** copy + 2–3 detail photos reveal in editorial rhythm.
- **Exit:** details recede; frame prepares for the Past Adventures reel.
- **Transition into next scene:** **Object-Wipe** — a keepsake/star object sweeps into the reel gallery.
- **Desktop behavior:** editorial two-column (text + detail photos), asymmetric.
- **Tablet behavior:** stacked, generous spacing.
- **Mobile behavior:** single column; photos full-width; tap for lightbox.
- **Reduced-motion fallback:** static editorial layout; no drift; identical content.
- **Technical risk:** low; watch contrast of text on cream.
- **Performance considerations:** lazy-load detail photos; modest sizes.

### ▶ HANDOFF 6 → 7
Intimacy becomes *evidence*: "made for them" is a promise — here is that promise kept, many times. Narrative logic — personalization claim → proof across real past events. A keepsake object wipes us into the gallery of adventures.

---

# SCENE 7 — PAST ADVENTURES

- **Scene number:** 7
- **Name:** Past Adventures
- **Approx scroll length:** 220vh
- **Business purpose:** Proof of range and quality via real prior events — the portfolio, told as stories.
- **Emotional purpose:** Trust-through-delight; "they've really done this, beautifully, many times."
- **Starting state:** a row/stack of "trailer" title cards for real events.
- **Ending state:** trailers viewed; frame settles toward process.
- **Headline:** *(prov., serif)* "Past adventures."
- **Supporting copy:** per-event one-liner *(prov., factual-safe)* e.g., "A Bluey backyard, brought to life." / "A monster-truck pit party." No invented guest counts/claims.
- **CTA if present:** *(prov.)* "See all adventures →" (to gallery page); persistent CTA remains.
- **Foreground:** trailer title cards; expanded reel; captions.
- **Midground:** full-bleed reels of real event photography on expand.
- **Background:** `--ink-900`/warm depending on open reel.
- **Photography requirements:** curated real sets per event (Bluey, monster-truck, gingerbread/Grinch, patriotic, Kidchella, Halloween, Toy Story). Consistent grade. **Never a bare grid.**
- **Illustration requirements:** star sparkle on trailer hover; luminous wipe object.
- **Decorative elements:** letterbox on expanded reels; light bloom.
- **Scroll behavior:** horizontal-feel progression through trailers (scrubbed); a trailer expands to full-bleed reel on interaction.
- **Pinning:** pinned during the trailer run (~190vh).
- **Parallax:** trailer cards staggered; reel photos push (Ken-Burns).
- **User interaction:** hover/focus trailer → reticle bloom + title; click/enter → expand reel; Object-Wipe between adventures. Keyboard-navigable list.
- **Cursor state:** interactive → gallery (over reels).
- **Entrance:** Object-Wipe in; trailers stagger in.
- **Main timeline:** camera moves along trailers; user expands one or more; each reel plays a slow push.
- **Exit:** last trailer collapses; frame calms toward process.
- **Transition into next scene:** **Storybook cross-dissolve** into the process narrative.
- **Desktop behavior:** rich hover + expand; horizontal progression.
- **Tablet behavior:** tap trailers; reduced parallax.
- **Mobile behavior:** **vertical trailer stack**, tap to expand to full-screen reel; swipe within a reel.
- **Reduced-motion fallback:** static list of trailers → static photo sets on tap; no wipes/push.
- **Technical risk:** heaviest media scene; strict lazy-loading and decode limits; keyboard parity for hover.
- **Performance considerations:** virtualize offscreen trailers; only decode the open reel; cap concurrent full-bleed images to 1–2.

### ▶ HANDOFF 7 → 8
Proof earns a practical question: "so how do I get this?" Narrative logic — delight/trust → mechanics. The film cools from spectacle to a calm, legible explanation of the process.

---

# SCENE 8 — HOW THE MAGIC HAPPENS

- **Scene number:** 8
- **Name:** How the Magic Happens
- **Approx scroll length:** 160vh
- **Business purpose:** Explain the process clearly so booking feels easy and low-risk.
- **Emotional purpose:** Reassurance; "this is simple and handled."
- **Starting state:** calm warm/editorial; step 1 in focus.
- **Ending state:** all four steps understood; momentum toward booking.
- **Headline:** *(prov., serif)* "How the magic happens."
- **Supporting copy:** four steps *(prov. — confirm with owner before publishing):* "1 · Tell us what they love → 2 · We dream it up → 3 · We bring the magic → 4 · They take it from here."
- **CTA if present:** *(prov.)* inline "Start with step one →" leading to booking; persistent CTA remains.
- **Foreground:** step labels + short copy; a light-line connecting steps.
- **Midground:** one supporting real photo per step (optional).
- **Background:** `--ivory-50`/`--cream-100`, calm.
- **Photography requirements:** optional small real photos illustrating a step; may be omitted for clarity.
- **Illustration requirements:** a luminous connecting line/constellation linking the four steps (the star motif as a path).
- **Decorative elements:** hairline rhythm; light nodes at each step. No icon-grid.
- **Scroll behavior:** step reveals on scroll (stagger); the connecting line draws.
- **Pinning:** light pin while line draws (~140vh).
- **Parallax:** minimal.
- **User interaction:** default cursor; steps are readable static content.
- **Cursor state:** default; interactive on inline CTA.
- **Entrance:** Storybook dissolve; step 1 appears.
- **Main timeline:** line draws step→step; each label + copy reveals; final step points to CTA.
- **Exit:** line resolves toward the booking scene.
- **Transition into next scene:** **Storybook settle** into Parent Trust (quiet).
- **Desktop behavior:** horizontal 4-step path (asymmetric, not equal columns).
- **Tablet behavior:** 2×2 or vertical path.
- **Mobile behavior:** vertical stepped list; line draws top-to-bottom.
- **Reduced-motion fallback:** static four-step list with the path shown complete; no draw.
- **Technical risk:** low; ensure steps read as ordered content for SR.
- **Performance considerations:** SVG line draw is cheap; keep nodes light.

### ▶ HANDOFF 8 → 9
A clear process invites the last hesitation to be answered: "can I trust them, and do they serve me?" Narrative logic — how it works → who it's by and where. The film stays calm and factual.

---

# SCENE 9 — PARENT TRUST

- **Scene number:** 9
- **Name:** Parent Trust
- **Approx scroll length:** 120vh
- **Business purpose:** Deliver service area (**Boston · MA · RI · NH**) and confirmed trust cues; remove final objections.
- **Emotional purpose:** Confidence; "these are the right people, and they come to me."
- **Starting state:** calm warm scene.
- **Ending state:** trust established; CTA emphasized.
- **Headline:** *(prov., serif)* "Trusted with their favorite day."
- **Supporting copy:** **confirmed:** "Serving families across Boston, Massachusetts, Rhode Island, and New Hampshire." **Trust cues (reviews, insurance, experience) only if business-confirmed — otherwise omit; do not invent.**
- **CTA if present:** prominent `Create Their Day ✦` (in-scene, `book` state).
- **Foreground:** service-area line; trust cues (if confirmed); CTA.
- **Midground:** one warm real candid photo (child mid-delight).
- **Background:** `--ivory-50`.
- **Photography requirements:** one emotional candid real photo; consistent grade.
- **Illustration requirements:** subtle star accents; a small MA/RI/NH light-map is optional **only if geographically accurate** (else omit).
- **Decorative elements:** hairline; light bloom on CTA.
- **Scroll behavior:** gentle reveal; CTA blooms.
- **Pinning:** none/light.
- **Parallax:** minimal.
- **User interaction:** interactive/book cursor on CTA.
- **Cursor state:** interactive → booking.
- **Entrance:** Storybook settle in.
- **Main timeline:** service area + trust reveal; CTA emphasized.
- **Exit:** warm dolly toward the closing title.
- **Transition into next scene:** **dolly** into the booking closing title (warm).
- **Desktop behavior:** editorial + emphasized CTA.
- **Tablet behavior:** stacked.
- **Mobile behavior:** stacked; CTA prominent; sticky CTA persists.
- **Reduced-motion fallback:** static; CTA static-emphasized.
- **Technical risk:** avoid publishing unconfirmed trust claims (governance risk, not technical).
- **Performance considerations:** light scene; single photo.

### ▶ HANDOFF 9 → 10
Trust plus "we come to you" converts naturally into action. Narrative logic — reassurance → invitation. The film returns to its title-sequence register for a closing card that asks for the booking.

---

# SCENE 10 — CREATE THEIR DAY

- **Scene number:** 10
- **Name:** Create Their Day
- **Approx scroll length:** 140vh
- **Business purpose:** Convert — a clear, short inquiry entry inside a light cinematic wrapper.
- **Emotional purpose:** Anticipation of their child's day; easy, warm commitment.
- **Starting state:** closing title card, warm-lit.
- **Ending state:** inquiry form ready/opened; clear path to submit.
- **Headline:** *(prov., serif)* "Create their day."
- **Supporting copy:** *(prov.)* "Tell us what they love — we'll bring it to life." Micro-reassurance: quick to fill, no obligation *(confirm wording with owner)*.
- **CTA if present:** primary `Create Their Day ✦` opens the form; form fields (placeholders, confirm with owner): child's name · their current obsession/theme · event date · your contact · message.
- **Foreground:** the form (clear labels, large targets) OR the CTA that reveals it.
- **Midground:** soft marquee/clapperboard framing (atmosphere only, minimal).
- **Background:** `--ink-900`→warm, low glow.
- **Photography requirements:** none, or one faint background still (must not reduce form legibility).
- **Illustration requirements:** star accents; CTA `book` bloom.
- **Decorative elements:** minimal cinematic frame; no glassmorphism.
- **Scroll behavior:** settle; form reveal; no heavy motion around inputs.
- **Pinning:** light.
- **Parallax:** none around the form.
- **User interaction:** full form interaction; validation; booking cursor.
- **Cursor state:** booking.
- **Entrance:** dolly settle; title resolves; form fades up.
- **Main timeline:** form completion; success state warm and reassuring.
- **Exit:** on submit → confirmation; scene eases to footer.
- **Transition into next scene:** **Portal iris close** into the footer (a gentle wind-down), or fade if reduced-motion.
- **Desktop behavior:** form + light frame; fields never obscured by effects.
- **Tablet behavior:** full-width form.
- **Mobile behavior:** single-column form; sticky CTA; large inputs; **wrapper stripped if it competes with legibility**.
- **Reduced-motion fallback:** static title + immediately-visible form; no marquee motion.
- **Technical risk:** never let spectacle delay/obscure the form; keep it a standard, accessible form.
- **Performance considerations:** form is lightweight; defer any background media.

### ▶ HANDOFF 10 → 11
The ask is made; the film exhales. Narrative logic — action → graceful close. The world the parent stepped into gently returns them to the studio, leaving contact and reassurance behind.

---

# SCENE 11 — MAGICAL EXIT / FOOTER

- **Scene number:** 11
- **Name:** Magical Exit / Footer
- **Approx scroll length:** 100vh
- **Business purpose:** Final clarity + contact: nav, contact, service area, social, and a last CTA — nothing hidden.
- **Emotional purpose:** Calm afterglow; "come back when you're ready."
- **Starting state:** iris-close from booking; dimming to studio card.
- **Ending state:** static footer with all utility links.
- **Headline:** *(prov., serif, small)* "Make a little magic." + logo studio-mark.
- **Supporting copy:** contact · service area (Boston · MA · RI · NH) · social (@_magicminds) · nav repeat · last `Create Their Day ✦`.
- **CTA if present:** final `Create Their Day ✦`.
- **Foreground:** footer utility content (fully legible, standard).
- **Midground:** logo mark; a single settling star.
- **Background:** `--ink-900`.
- **Photography requirements:** none.
- **Illustration requirements:** one final star settling (mirrors Scene 1 — the film closes where it opened).
- **Decorative elements:** hairline; faint vignette.
- **Scroll behavior:** static footer after the iris-close.
- **Pinning:** none.
- **Parallax:** none.
- **User interaction:** all links/CTA interactive; standard.
- **Cursor state:** interactive; booking on CTA.
- **Entrance:** iris-close resolves to footer.
- **Main timeline:** static; star settles once.
- **Exit:** end of page.
- **Transition into next scene:** n/a (page end); the closing star callbacks Scene 1.
- **Desktop behavior:** full footer, multi-column utility.
- **Tablet behavior:** condensed columns.
- **Mobile behavior:** stacked footer; sticky CTA remains until here.
- **Reduced-motion fallback:** static footer; star static; no iris.
- **Technical risk:** minimal.
- **Performance considerations:** minimal; ensure no lingering timelines/particles running at page end.

---

## Continuity rules across the whole film
1. **No hard cuts.** Every scene ends *inside* the next via one of the three transition families (Portal primary; Storybook for editorial calm; Object-Wipe between events/themes).
2. **One primary motion per scene** (constitution §7); ambient motion stays low-amplitude.
3. **Grade continuity:** dark→warm shifts happen only through a portal/reveal; never an abrupt fill swap.
4. **The star motif** threads the entire film (opens Scene 1, guides Scenes 2/3/8, closes Scene 11) as the connective signature.
5. **Clarity is never gated:** persistent nav + `Create Their Day ✦` ride above every scene; with motion disabled the whole narrative still reads and every required business fact is present (see delivery schedule).
6. **Provisional copy** and any **trust cue** must be owner-confirmed before publish; unconfirmed = flagged, never fabricated.

## Global performance & risk notes
- Peak-cost scenes: **4** (hero LCP photo), **5** (long scrubbed assembly), **7** (heavy media reel). Budget these first; lazy-load and cap concurrent decodes elsewhere.
- Every pinned ScrollTrigger and timeline is killed on unmount; pin-spacing managed to avoid layout jank.
- Reduced-motion path is a first-class build target, not an afterthought — content parity is mandatory.
- Assets flagged **MISSING ASSET** (empty→complete table sequence; accurate service-area map; confirmed trust cues) must be resolved or their fallbacks used before launch.
