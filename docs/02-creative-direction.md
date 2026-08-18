# MagicMinds — Creative Direction: Three Concepts

**Concept:** *Step Into Their Imagination*
**Authoritative facts:** the Brand Intelligence Brief (`01-brand-intelligence.md`). No services, prices, testimonials, or claims are invented here; booking sections describe *feel and flow only*.
**Target balance:** ~60% premium / 30% playful / 10% delightful weirdness. The paying customer is an adult; the child is the emotional center.
**Shared constraints honored by all three:** real MagicMinds event photography as the hero asset; the existing lavender/star boutique identity preserved; the three-family transition system (Magic Portal · Storybook · Object-Wipe); React/TS/Vite/Tailwind/GSAP + ScrollTrigger; avoid Three.js/WebGL unless justified; Lovable-Free credit discipline; full reduced-motion + keyboard paths.

Each concept below *foregrounds* one transition family as its signature while still using all three across the site. That is the key structural difference — not color.

---

## CONCEPT 1 — "The Pop-Up Book"

*Signature transition family: **Storybook.***

**A. Name** — The Pop-Up Book (working title: *Their Story*).

**B. Central visual metaphor** — The website is a premium pop-up storybook. The interface is *paper*. Flat illustrated scenes fold up into dimensional paper as you read; photographs sit on the page like tipped-in photo plates. Sophistication comes from editorial book-design craft, not from cartoon décor — the reference is a beautifully bound design-store children's book that adults covet, not a coloring book.

**C. Emotional feeling** — Intimate, handcrafted, bedtime-story warmth. A treasured keepsake you turn slowly. Quiet wonder rather than spectacle.

**D. Homepage narrative** — *The Invitation* is a restrained closed cover (ivory stock, embossed serif wordmark, one star). Scrolling "opens the book." *Enter Their Imagination* is the first spread, where a single line of type unfolds a paper scene. *What Are They Into?* is a spread of pop-up theme tabs the reader can lift. *Their World Comes Alive* and *The Transformation* are pop-up spreads that build dimensionally. *Past Adventures* becomes a photo-album chapter. *How the Magic Happens* is a four-step illustrated fold-out. *Create Their Day* is the "write to us" final page.

**E. Composition philosophy** — Page-based editorial grid with generous margins and an implied binding/gutter down the center. Strong typographic hierarchy, drop-cap tradition, tipped-in photo plates. Whitespace is "paper," never empty filler.

**F. Typography personality** — Literary and warm. A characterful high-contrast display serif (a direct, disciplined extension of the existing expressive-serif logo) paired with a humanist sans for body. Occasional hand-lettered marginalia. Personality: *once-upon-a-time, but grown-up.*

**G. Color philosophy** — *Color as ink on paper.* Warm paper-white/cream base, deep ink-navy text, and accents (lavender, butter, sky, dusty pink, mint) that arrive like spot-color / risograph printing — flat, confident, printed. Theme spreads temporarily saturate like a full-color plate, then return to paper.

**H. Photography treatment** — Photos as printed plates: matte, slightly warm, curated small-to-medium, framed or "taped" onto the page. Real events feel like cherished photographs in a family book, not a grid.

**I. Illustration treatment** — Cut-paper / layered paper-craft spot illustration with soft paper shadows. The logo-dissolution reads as paper stars, a crayon, a rocket unfolding off the page.

**J. Cursor concept** — A small glowing "ink dot / firefly." *Default:* subtle dot. *Interactive:* dot warms and words underline. *View:* dot becomes a magnifier for photo plates. *Drag:* dot trails ink. *Book:* near a page edge it becomes a curling page-corner. Removed on touch.

**K. Scroll behavior** — Spread-paced. Scroll turns pages; pinned spreads let pop-ups fold up on entry, then release to the next spread. Gentle, readable pacing — *scrolling is reading.*

**L. Page-transition system** — Storybook-led: page-turn / paper-fold between routes. Portal used only for entering a theme world; Object-Wipe reserved for the transformation beat.

**M. Gallery treatment (Past Adventures)** — A scrapbook chapter: album spreads, tipped-in photos, handwritten-style captions, each past event a short illustrated story rather than a portfolio card.

**N. Booking experience** — "A letter to MagicMinds." A warm, page-styled form themed as filling in the last page of the book ("Tell us what they love…"), but structurally a short, clear, standard inquiry flow. Warmth in the wrapper; clarity in the fields.

**O. Signature interaction** — *The Pop-Up Spread:* as a scene enters, flat illustrated layers physically fold up into a dimensional paper diorama (CSS 3D transforms), a photo plate tips in, and a line of type completes.

**P. Easter-egg philosophy** — Marginalia and hidden pop-ups: tiny paper creatures tucked in the gutter, a footnote that giggles when hovered, a "read to me" corner. Rewarding, never blocking.

**Q. Mobile interpretation** — Spreads become single vertical pages; page-turns become gentle scroll-driven fold-ins; pop-ups simplify to layered reveals; marginalia becomes tap-to-open. No cursor. Snap disabled if it fights native scroll.

**R. Accessibility risks** — Page-snap can trap keyboard/scroll (mitigate: standard scroll fallback, focus order per spread). Paper textures must keep AA contrast. Fold motion → reduced-motion serves static, pre-folded spreads.

**S. Technical complexity** — *Moderate.* CSS 3D folds + pinned ScrollTrigger spreads; the page-turn is the only tricky primitive. No WebGL required.

**T. Why it fits MagicMinds** — Directly matches the *keepsake* truth of the business (kids leave with something they made/"adopted") and the bedtime-warmth of "their favorite things, brought to life." Editorial craft delivers the "boutique, not preschool" mandate.

**U. Risks of the direction** — Can skew *too soft / too young* if paper-craft isn't disciplined; literal page-turn can feel skeuomorphic/dated; the quiet register may under-deliver on immediate "wow" and risk under-weighting the 30% playful.

---

## CONCEPT 2 — "The Title Sequence"

*Signature transition family: **Magic Portal.***

**A. Name** — The Title Sequence (working title: *The Reveal*).

**B. Central visual metaphor** — The site opens like the title sequence of a beautiful film, then pushes the "camera" through glowing portals into themed worlds. The restrained state is a prestige title card; the imaginative state is a full-bleed cinematic world flooding with light, color, and photography. The metaphor is *light, depth, and the moment before the show begins.*

**C. Emotional feeling** — Awe and anticipation. "The lights dim, something magical is about to start." Grandeur and reveal — it mirrors a child's face the moment they walk into their party.

**D. Homepage narrative** — *The Invitation* is a dark, letterboxed, typographic title card (ink navy, ivory type, one drifting star). *Enter Their Imagination* pushes the camera forward: "Every child has a world inside their head." A portal blooms and *What Are They Into?* worlds appear as points of light. *Their World Comes Alive / Transformation* are full-bleed cinematic reveals resolving to "We bring that world to the table." *Past Adventures* plays as short trailers. *Create Their Day* is the closing title.

**E. Composition philosophy** — Cinematic full-bleed frames, letterbox bars that open, rule-of-thirds staging, deep z-layering, dramatic negative space that then floods. Big scale, few elements per frame.

**F. Typography personality** — Grand and composed. Wide-tracked, mostly uppercase display titling with animated letter-spacing (prestige-film feel), against the existing serif logo used as a "studio mark." Personality: *anticipatory, premium, cinematic.*

**G. Color philosophy** — *Color as light, revealed.* Begins near-monochrome (deep ink/navy, ivory) and restrained; theme color arrives as projected, glowing, saturated light through portals, then recedes. The child's world literally *illuminates* the adult world.

**H. Photography treatment** — Hero, full-bleed, cinematic color grade, slow Ken-Burns push. Photography is the spectacle — the real events shown at their most immersive scale.

**I. Illustration treatment** — Light-based and minimal: glowing line, silhouette-to-reveal, constellations built from the brand's star motif rendered as points of light. Sparse, luminous, never clip-art.

**J. Cursor concept** — A soft focus reticle / lens bloom. *Default:* faint light. *Interactive:* it "focuses" and blooms on interactives. *View:* aperture ring for media. *Drag:* a light streak. *Book:* a bright pulse. Removed on touch.

**K. Scroll behavior** — Continuous cinematic dolly. Scroll drives camera depth and parallax layers; letterbox opens/closes to punctuate scenes. Momentum feels like a slow camera move, not a jump.

**L. Page-transition system** — Portal-led: iris / light-bloom push-through between routes and into theme worlds. Storybook reserved for editorial/about; Object-Wipe for object-driven event pages.

**M. Gallery treatment** — Each Past Adventure is a mini "trailer": a title card that expands to a full-bleed reel of that event's real photography, with a one-line story.

**N. Booking experience** — "Cast their day." A cinematic wrapper (soft clapperboard / marquee framing) around a genuinely short, clear inquiry flow. Spectacle in the frame; plain, fast fields inside.

**O. Signature interaction** — *The Portal Push:* the "world inside their head" line, then the camera pushes through a blooming portal (SVG/clip-path mask + scale + light) into a full-bleed themed world, resolving on the tagline.

**P. Easter-egg philosophy** — "Post-credits" moments: a lens flare that briefly reveals a hidden character, a projector flicker, a star you can click to hear the room. Cinematic winks.

**Q. Mobile interpretation** — Letterbox → full-screen vertical scenes; camera push → scale/opacity; portals → tap-to-enter theme. Parallax layers reduced for performance; autoplay media constrained.

**R. Accessibility risks** — *Highest of the three.* Dark cinematic UI threatens contrast/readability; full-bleed autoplay motion is a vestibular risk; heavy media hurts LCP and screen-reader clarity. Reduced-motion must hold still frames (no dolly), and text must never live only on video.

**S. Technical complexity** — *Moderate-high.* Depth parallax, portal masks, and large-media performance budgeting. Achievable in DOM/CSS/canvas without Three.js **if disciplined** — but this concept carries the strongest temptation toward WebGL.

**T. Why it fits MagicMinds** — Amplifies the confirmed **"WE CREATE MAGIC"** promise and the premium buyer; turns real photography into its most awe-inducing form; the reveal mirrors the actual walk-in moment MagicMinds sells.

**U. Risks of the direction** — "Cinematic premium" is the most *generic* high-end web trope (many agency sites do it) → originality risk. Dark/adult restraint held too long can feel cold and miss the 30% playful. Full-bleed spectacle is the concept most likely to bury business clarity ("beautiful confusion") and to burn Lovable credits on aesthetic tuning.

---

## CONCEPT 3 — "The Imagination Table"

*Signature transition family: **Object-Wipe.***

**A. Name** — The Imagination Table (working title: *Brought to the Table*).

**B. Central visual metaphor** — MagicMinds literally "brings that world to the table." The site opens as a pristine, styled adult tabletop (a calm editorial flat-lay). As you scroll, objects on the table gain playful physics — they wobble, tumble, multiply — and the flat surface tilts into a dimensional diorama play-world. The table is the recurring stage; each theme assembles as a new tabletop scene. The metaphor is *tangible objects and space coming alive.*

**C. Emotional feeling** — Tactile delight and transformation. The specific MagicMinds magic: an ordinary, orderly surface becoming a complete themed world you want to reach into.

**D. Homepage narrative** — *The Invitation* is a serene top-down flat-lay of a bare, beautifully styled table. *Enter Their Imagination* tilts the camera as the first object nudges to life. *What Are They Into?* are theme objects on the table you can pick up. *The Transformation* is the centerpiece: an empty table assembles — seating → materials → décor → theme details → complete experience. *Past Adventures* are dioramas you can peek into. *Create Their Day* builds a table as you answer.

**E. Composition philosophy** — A tabletop stage. Composition anchors to objects and a horizon line (the table edge), shifting from top-down flat-lay to a ¾ diorama view. Objects, not cards, carry hierarchy.

**F. Typography personality** — Playful-tactile but refined. A display face with physical weight that can appear to be "picked up" or settle with momentum, paired with a clean sans. The existing serif logo behaves like an object on the table. Personality: *hands-on, characterful, toy-like without being cartoonish.*

**G. Color philosophy** — *Color as tangible objects.* Base is a styled neutral flat-lay (ivory, warm wood, linen, muted "designer" balloon tones matching their real palettes). Color enters physically — as objects arriving on the table — rather than as backgrounds. Theme palettes are things you can pick up.

**H. Photography treatment** — Photos as objects on the table: cut-out subjects, polaroid/prop framing, layered with real depth and soft contact shadows. The real events sit *in* the scene, tactile and dimensional.

**I. Illustration treatment** — Sticker/toy-like dimensional objects with soft shadows. The logo objects (star, crayon, racecar, rocket, butterfly) become physical toys with weight — the logo-dissolution reads as toys spilling onto the surface.

**J. Cursor concept** — A sparkle-tipped "magic touch." *Default:* small sparkle. *Interactive:* nearby objects lean toward it (pointer-proximity). *View:* a soft lift on photo-objects. *Drag:* pick up and throw with momentum. *Book:* a settling tap. Proximity physics removed on touch; replaced by tap-nudge.

**K. Scroll behavior** — Physics timeline. Scroll scrubs an assembly sequence — objects tumble/settle onto the table and the surface tilts. Motion is *choreographed*, never random bouncing.

**L. Page-transition system** — Object-Wipe-led: an object (racecar, star, balloon) sweeps across to wipe between routes/events. Portal for entering theme worlds; Storybook for the about/process narrative.

**M. Gallery treatment** — Each Past Adventure is a diorama on a table you can peek into / lightly rotate, with overlapping "memory objects" from that event. Real photography layered as props.

**N. Booking experience** — "Set the table." As the parent answers a short, clear inquiry, chosen theme objects drop onto a table — a playful but strictly legible flow. The playfulness must never delay completion; fields stay standard and fast.

**O. Signature interaction** — *The Table Assembly:* the Transformation sequence — a bare table progressively gains seating, materials, décor, theme, and completion via scroll-scrubbed object physics, plus pointer-proximity object reactions throughout.

**P. Easter-egg philosophy** — Hidden toys you can fling; over-interacting piles objects up; a drawer at the table edge that opens to reveal a tiny surprise. Tactile mischief, bounded so it never becomes noise.

**Q. Mobile interpretation** — Diorama becomes stacked object reveals on scroll; physics reduced to light tap-nudges (drag-throw removed or minimized); assembly simplified to sequential drop-ins. Performance-first.

**R. Accessibility risks** — Physics + pointer-proximity are not keyboard-operable (need non-physics equivalents and focusable controls). Object motion is a vestibular risk. Drag interactions require alternatives. Reduced-motion serves a pre-assembled, complete table.

**S. Technical complexity** — *High.* A physics layer (matter.js/canvas, or carefully faked physics in GSAP), pointer-proximity, and mobile performance budgeting. The concept most tempted toward WebGL and the hardest to keep smooth on low-end phones.

**T. Why it fits MagicMinds** — The most *ownable* direction: it dramatizes the exact confirmed product (styled tables, themed objects, transformation of a space) and the tagline "we bring that world to the table." No competitor can copy it without copying MagicMinds' actual thing.

**U. Risks of the direction** — Physics everywhere can tip into the explicitly-banned "random bouncing" and 10%-weird overload; heaviest engineering and mobile-performance risk; most credit-hungry in Lovable; if undisciplined, objects can bury business clarity.

---

## Ranking

Scored per criterion (① = strongest, ③ = weakest of the three). Ties noted.

| Criterion | ① | ② | ③ | Note |
|---|---|---|---|---|
| **Brand fit** | Imagination Table | Pop-Up Book | Title Sequence | Table = literally their tagline & product; Book = keepsake warmth; Title = premium but least MagicMinds-specific. |
| **Originality** | Imagination Table | Pop-Up Book | Title Sequence | Tabletop physics is hardest to find elsewhere; cinematic premium is the most common high-end trope. |
| **Emotional impact** | Title Sequence | Imagination Table | Pop-Up Book | Cinematic reveal = biggest first-scroll "wow"; Book's warmth is deep but quieter. |
| **Commercial clarity** | Pop-Up Book | Imagination Table | Title Sequence | Editorial pages keep info legible; dark full-bleed spectacle most risks "beautiful confusion." |
| **Feasibility — React/GSAP** | Pop-Up Book | Title Sequence | Imagination Table | Book needs no WebGL; Table's physics layer is the heaviest build. |
| **Feasibility — Lovable Free credits** | Pop-Up Book | Title Sequence | Imagination Table | Fewest bespoke systems = fewest credits; physics + cinematic tuning are credit-hungry. |

**Aggregate read**

- **Pop-Up Book** — the *feasible, clear, brand-appropriate* pick. Wins clarity and both feasibility axes; strong (2nd) on brand fit and originality. Weakest only on raw emotional impact. Lowest-risk path to a distinctive, shippable site under Lovable-Free.
- **Imagination Table** — the *most ownable and original*, and top brand fit. But last on both feasibility axes and a real discipline risk (banned "random bouncing," mobile perf, credit burn). Highest ceiling, highest cost.
- **Title Sequence** — the *biggest immediate wow*, but the most generic premium trope, the weakest on commercial clarity, and the highest accessibility risk. Middle feasibility.

---

## Director's recommendation (not a fourth concept)

Lead with **The Pop-Up Book** as the structural backbone — it satisfies clarity, feasibility, and the "boutique not preschool" mandate, and its keepsake register is squarely on-brand. Then borrow the single most ownable beat from **The Imagination Table** — *The Table Assembly* — as the homepage's centerpiece Transformation, since "bring that world to the table" is the most MagicMinds-specific moment available. Use **Portal** reveals from *The Title Sequence* sparingly, only for entering theme worlds.

This maps cleanly onto the constitution's three transition families (Storybook as the spine, Object-Wipe for the table centerpiece, Portal for theme entrances), concentrates the expensive physics work into one hero moment instead of the whole site (protecting Lovable credits and mobile performance), and lands the 60/30/10 balance: editorial premium as the base, the table assembly as the playful heart, and bounded marginalia/easter-eggs as the delightful weirdness.

If the goal is maximum differentiation and budget allows more build cycles, promote **The Imagination Table** to the lead instead — with a strict physics-discipline spec and a mobile-perf budget agreed up front.

**Recommended next step:** lock one lead direction, then produce the Design Constitution (`03`) and Homepage Storyboard (`04`) against it.
