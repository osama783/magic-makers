# Magic Minds Foundation

OBJECTIVE
Scaffold the MagicMinds foundation: a navigable, fully tokenized React+TS+Vite+Tailwind skeleton with the layout shell, global store, design tokens, GSAP registration, SEO head, error boundary, and a route skeleton of placeholder pages. NO scenes, NO scroll animation, NO custom cursor, NO page transitions, NO photography in this packet — those are later packets and must not be started here.

EXISTING CONTEXT
Fresh project. This is Packet 1 of a dependency-ordered build. Everything you create here is the single source of truth other packets extend. Prime directive: ONE system per concern — one store, one token surface, one responsive contract, one reduced-motion flag. Do not duplicate infrastructure.

STACK / DEPENDENCIES (install exactly these; do NOT add others)
react, react-dom, react-router-dom@6, zustand, gsap, react-helmet-async, @fontsource-variable/fraunces, @fontsource-variable/inter, clsx, tailwind-merge.
Do NOT install framer-motion, lenis, zod, react-hook-form, or three — they belong to later packets.

FONTS (self-hosted, no external requests)
- Serif "story voice": Fraunces (via @fontsource-variable/fraunces). CSS var --font-serif.
- Grotesque "credits voice" + body: Inter (via @fontsource-variable/inter). CSS var --font-grotesque and --font-sans both map to Inter.
These are documented open substitutes for the licensed Canela/Söhne named in the constitution; label them as substitutes in a comment. Max two families visible per scene.

DESIGN TOKENS — create src/styles/tokens.css as CSS custom properties (runtime source of truth), then mirror them in tailwind.config.ts so utilities read the same vars. Use these EXACT values:

Color:
--ink-900:#0A0E20; --ink-800:#121736; --ink-700:#1E2450;
--ivory-50:#F8F3EA; --cream-100:#FCF8F1; --text-ink:#14183A;
--lavender:#B3A0E6; --violet-deep:#5C3FA0;
--butter:#F5D27C; --sky:#86C5E8; --pink:#E7A6B7; --mint:#A4D8C3;
Muted text = opacity of the primary text color (60–72%), NEVER a new grey.

Spacing scale (px): 8 / 16 / 24 / 40 / 64 / 96 / 128. Section padding ≥96 desktop, ≥64 mobile.
Radius: default 0; controls ≤4px; circular reserved for portal/iris only (unused this packet).
Z-layers (named): void:0, distant:10, subject:20, foreground-glow:30, ui:40, cursor:50, transition-overlay:60.
Breakpoints (ONE definition, mirrored in Tailwind screens AND matchMedia): mobile <768, tablet 768–1023, desktop ≥1024 AND pointer:fine.

Typography scale (fluid clamp, desktop min→max; enforce mobile caps):
- Display XL: serif, clamp(2.75rem, …, 6.5rem), line-height 1.02, tracking 0, sentence case. Mobile cap 2.75rem.
- Display L: serif, clamp(2.25rem, …, 4rem), lh 1.05. Mobile cap 2rem.
- H2: serif, clamp(1.75rem, …, 3rem), lh 1.1. Mobile cap 1.75rem.
- Kicker/Label: grotesque, clamp(0.8125rem, …, 1rem), lh 1.2, tracking 0.28em, UPPERCASE.
- Body: sans, clamp(1rem, …, 1.125rem), lh 1.6, tracking 0. Never below 1rem.
- Caption: grotesque, clamp(0.75rem, …, 0.8125rem), lh 1.3, tracking 0.12em, UPPERCASE.
Expose these as reusable utility classes (e.g. .t-display-xl, .t-display-l, .t-h2, .t-kicker, .t-body, .t-caption).

MOTION TOKENS — create src/anim/tokens.ts (JS mirror of motion tokens; later packets extend this file, do not rewrite it):
eases: reveal = cubic-bezier(0.22,1,0.36,1); dolly = cubic-bezier(0.65,0,0.35,1); micro = cubic-bezier(0.4,0,0.2,1).
durations (s): micro 0.18, short 0.30, reveal 0.70, cinematic 1.10.
distances: rise 12, float 6, magneticMax 12, kenBurns [1.0,1.08].
Export as typed const objects.

GSAP REGISTRATION — create src/anim/registerGsap.ts: register ScrollTrigger, Draggable, Flip, InertiaPlugin, CustomEase ONCE. Register three named eases via CustomEase from the beziers above: "mm.reveal", "mm.dolly", "mm.micro". Do NOT build any timelines or scenes here.

GLOBAL STORE — create src/lib/store.ts (Zustand, single store) with four slices:
- reducedMotion: boolean (wired now)
- saveData: boolean (wired now)
- cursor: { state:'default'|'interactive'|'gallery'|'drag'|'booking'; locked:boolean } (typed placeholder, default 'default'/false; populated by Packet 4)
- transition: { phase:'idle'|'exiting'|'entering'; family:'portal'|'storybook'|'wipe'|null; from:string|null; to:string|null; lock:boolean } (typed placeholder, default idle/null/false; populated by Packet 5)

HOOKS
- src/lib/usePrefersReducedMotion.ts: reads (prefers-reduced-motion: reduce) + change listener, writes reducedMotion into the store. Also detect navigator.connection.saveData → saveData slice.
- src/lib/useBreakpoint.ts: matchMedia-backed, SSR-safe default, returns 'mobile'|'tablet'|'desktop' using the exact breakpoint pixels above (desktop also requires pointer:fine).

SITE CONFIG — create src/content/site.ts (single site-config source; Packet 2 extends the content folder with themes/adventures/sceneCopy — do not create those now):
- brandName: "MagicMinds"
- tagline: "WE CREATE MAGIC" (CONFIRMED)
- region: "Boston · MA · RI · NH" (CONFIRMED)
- ctaLabel: "Create Their Day ✦"
- ctaHref: "/create"
- instagram: { handle: "@_magicminds", url: "https://instagram.com/_magicminds" } (CONFIRMED)
- nav: [ {label:"About", to:"/about"}, {label:"Process", to:"/process"} ]  // minimal, real routes only
- contact: null  // UNKNOWN — no email/phone confirmed; do NOT invent one
Do NOT add services, prices, packages, testimonials, ages, guest counts, or any claim not listed here.

SEO BASE — create src/content/seo.ts with a default entry (title:"MagicMinds — WE CREATE MAGIC", description:"MagicMinds creates customized, themed children's party experiences across Boston, MA, RI, and NH.") plus per-route title/description stubs for /, /about, /process, /create, 404. Create src/lib/seo/Head.tsx using react-helmet-async that renders title, meta description, canonical, and basic OpenGraph from seo.ts. No JSON-LD yet (Packet 10).

ROUTE SKELETON — React Router v6 SPA.
Routes: "/" Home, "/worlds/:slug" ThemeWorld, "/adventures/:slug" AdventureDetail, "/about" About, "/process" Process, "/create" Create, "*" NotFound.
Create src/app/routeMeta.ts mapping each path to a transition family (data only; no engine): "/"→null, "/worlds/:slug"→"portal", "/adventures/:slug"→"wipe", "/about"→"storybook", "/process"→"storybook", "/create"→"storybook", "*"→"storybook".
Each page is a PLACEHOLDER: a semantic  containing exactly one 

, a one-line kicker, and a short legible sentence. Placeholder content per page:
- Home h1: "MagicMinds" · kicker "WE CREATE MAGIC" · line: "Customized, themed children's experiences — Boston · MA · RI · NH." (film scenes arrive in Packet 6+)
- About h1: "About" · line: "Editorial content pending owner confirmation." (flag as provisional)
- Process h1: "How the Magic Happens" · line: "Process content pending owner confirmation." (flag as provisional)
- Create h1: "Create Their Day" · line: "Inquiry form arrives in a later build." (no form yet)
- ThemeWorld h1: reads the :slug param as text placeholder.
- AdventureDetail h1: reads the :slug param as text placeholder.
- NotFound h1: "Lost the thread" · link home + CTA.
No invented copy beyond the above.

LAYOUT SHELL — create src/components/layout/{Header,Footer,StickyCTA,SkipLink}.tsx. These mount OUTSIDE the routed subtree so clarity is never gated by a transition.
- SkipLink: first focusable element, "Skip to content", visually hidden until focused, jumps to #main, visible --lavender focus ring.
- Header: semantic 

 with . Left = studio wordmark linking to "/" — render brandName in the serif as a TEMPORARY placeholder mark; add a comment: "MISSING ASSET: replace with mm-logo-mark-dark.svg / mm-logo-mark-light.svg when vectors are supplied — do not restyle the real logo." Right = the site.nav links + the persistent CTA button (ctaLabel → ctaHref). Header sits fixed/sticky at top, ivory-on-ink styling (dark contrast mode); add a data-contrast="dark" hook and a comment that scene-driven contrast switching lands in Packet 6+. Nav is minimal, no dropdowns, no mega-menu.
- Footer: semantic 

 with region string, the Instagram link, the persistent CTA, and the wordmark. No invented contact details; if contact is null show only Instagram + CTA.
- StickyCTA: mobile-only (<768), fixed bottom, full-width-ish CTA → ctaHref, min touch target 44px, HIDDEN on the /create route.

APP COMPOSITION
src/app/Providers.tsx wires: HelmetProvider, calls registerGsap() once, initializes usePrefersReducedMotion + saveData detection, and mounts the global ErrorBoundary.
src/app/App.tsx order:  →  → 

 →  (the only transitioning subtree later) →  → 

.
Default page background --ink-900, primary text --ivory-50 (the film opens dark). Placeholder pages are legible immediately with zero motion.

ERROR BOUNDARY — create src/components/ErrorBoundary.tsx (global, class component). On error, render a static legible fallback (ink-900 bg, ivory text, "Something broke" + link home), never a blank page. Per-route boundaries are Packet 10.

RESPONSIVE BEHAVIOR
- Header nav collapses gracefully on mobile (<768): keep wordmark + persistent CTA always visible; nav links may move into a simple accessible menu or wrap — no hidden-only-behind-hover behavior, no custom cursor dependency.
- StickyCTA appears only <768.
- Type honors mobile caps above; body never below 1rem.
- Touch targets ≥44px on mobile.
- One breakpoint definition drives Tailwind screens and useBreakpoint identically.

REDUCED-MOTION BEHAVIOR
- usePrefersReducedMotion writes the flag now; there is no motion in this packet, so the skeleton is already motion-free.
- Add the global @media (prefers-reduced-motion: reduce) reset in globals.css (transition/animation duration ~0.01ms) as the baseline every later packet inherits.
- Content, order, and meaning must be identical with motion off (they already are — verify nothing depends on motion).

CONTENT / ASSET REQUIREMENTS
- No photography, no doodles, no cursor art, no logo vectors in this packet (all later). The only "asset" is the temporary text wordmark, flagged MISSING ASSET as above.
- All copy comes from site.ts / seo.ts / the placeholder strings above. Invent nothing.

MUST NOT CHANGE / MUST NOT DO
- Do NOT build scenes, ScrollTrigger timelines, MagicCursor, PageTransition, BookingForm, themes.ts, adventures.ts, sceneCopy.ts, or any photo/doodle registry.
- Do NOT install framer-motion/lenis/zod/react-hook-form/three.
- Do NOT invent services, prices, testimonials, contact info, ages, guest counts, themes, or geographic claims beyond "Boston · MA · RI · NH".
- Do NOT restyle or redraw the logo; use the flagged text placeholder only.
- Do NOT introduce pill shapes, rounded-card panels, glassmorphism, decorative gradients, or centered hero + two-button patterns.
- Do NOT add any grey outside opacity-of-text-color.

ACCEPTANCE CRITERIA
1. Project builds and runs; all seven routes render a placeholder page with exactly one 

 and legible ivory-on-ink text.
2. tokens.css exists with every color/spacing/radius/z/breakpoint value above; tailwind.config.ts reads the same vars; no hardcoded hex outside tokens.css.
3. Fraunces + Inter self-hosted and applied via --font-serif / --font-grotesque / --font-sans; the six type utility classes exist and match the scale (incl. mobile caps).
4. src/anim/tokens.ts and src/anim/registerGsap.ts exist; registerGsap() registers the plugins + the three named CustomEases exactly once; no timelines exist.
5. Single Zustand store exposes all four slices with the exact shapes above; reducedMotion + saveData update live from media/connection changes.
6. useBreakpoint returns mobile/tablet/desktop on the exact pixel thresholds (desktop requires pointer:fine); values match Tailwind screens.
7. Header (wordmark + minimal nav + persistent CTA), Footer (region + Instagram + CTA), StickyCTA (mobile-only, hidden on /create), and SkipLink all render outside the routed subtree; CTA always routes to /create.
8. Skip link works; every interactive element shows a visible --lavender focus ring (≥2px, offset); tab order matches visual order; body contrast ≥4.5:1.
9. Head renders correct title/description per route from seo.ts.
10. Global ErrorBoundary renders a legible fallback instead of a blank page.
11. routeMeta.ts maps every path to its transition family (data only; no engine wired).
12. site.ts contact is null and no fabricated business facts appear anywhere.
13. Prefers-reduced-motion baseline reset is present in globals.css.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9395ed8c-cf53-427a-993e-810218251372).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
