// src/components/cursor/MagicCursor.tsx
// The MagicMinds desktop cursor. Subtle, light-based, five reusable states.
// - Desktop + pointer:fine only. Disabled on touch, reduced-motion, and save-data
//   (keeps the native cursor, per the accessibility rules — motion is never required).
// - State is driven declaratively: any element can opt in with a data-cursor attribute:
//     data-cursor="interactive"  -> links / buttons
//     data-cursor="gallery"      -> viewable imagery (label: View)
//     data-cursor="drag"         -> draggable surfaces (label: Drag)
//     data-cursor="booking"      -> booking / CTA (label: Book)
//   No per-component wiring needed — this component delegates from the document.
// - GSAP owns the cursor element transforms only. No other system touches them.
//
// Programmatic control (e.g. locking to "drag" during a tower drag) is added when
// the tower is built; this file is self-contained until then.

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type CursorState = 'default' | 'interactive' | 'gallery' | 'drag' | 'booking';

const LABELS: Record<CursorState, string> = {
  default: '',
  interactive: '',
  gallery: 'View',
  drag: 'Drag',
  booking: 'Book',
};

function useCursorEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)');
    const wide = window.matchMedia('(min-width: 1024px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    // @ts-expect-error - saveData is non-standard but widely supported
    const saveData = navigator.connection?.saveData === true;

    const compute = () =>
      setEnabled(fine.matches && wide.matches && !reduce.matches && !saveData);

    compute();
    fine.addEventListener('change', compute);
    wide.addEventListener('change', compute);
    reduce.addEventListener('change', compute);
    return () => {
      fine.removeEventListener('change', compute);
      wide.removeEventListener('change', compute);
      reduce.removeEventListener('change', compute);
    };
  }, []);
  return enabled;
}

export function MagicCursor() {
  const enabled = useCursorEnabled();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>('default');

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    document.body.classList.add('mm-cursor-active');

    // Smoothed followers: dot is snappy, ring trails slightly (premium feel).
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.38, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.38, ease: 'power3' });

    let magnetEl: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      let x = e.clientX;
      let y = e.clientY;
      // Subtle magnetic pull toward the center of an interactive target.
      if (magnetEl) {
        const r = magnetEl.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const MAX = 12; // tokens.distances.magneticMax
        x += Math.max(-MAX, Math.min(MAX, (cx - x) * 0.25));
        y += Math.max(-MAX, Math.min(MAX, (cy - y) * 0.25));
      }
      dotX(x); dotY(y); ringX(x); ringY(y);
    };

    const resolve = (t: EventTarget | null): { s: CursorState; el: HTMLElement | null } => {
      const el = (t as HTMLElement | null)?.closest?.('[data-cursor]') as HTMLElement | null;
      if (el) {
        const v = el.getAttribute('data-cursor') as CursorState;
        if (v && v in LABELS) return { s: v, el };
      }
      const interactive = (t as HTMLElement | null)?.closest?.(
        'a, button, [role="button"], input, select, textarea, label'
      ) as HTMLElement | null;
      if (interactive) return { s: 'interactive', el: interactive };
      return { s: 'default', el: null };
    };

    const onOver = (e: PointerEvent) => {
      const { s, el } = resolve(e.target);
      magnetEl = s === 'interactive' ? el : null;
      setState(s);
    };
    const onOut = (e: PointerEvent) => {
      if (!(e.relatedTarget as HTMLElement | null)?.closest?.('[data-cursor],a,button')) {
        magnetEl = null;
        setState('default');
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });

    return () => {
      document.body.classList.remove('mm-cursor-active');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      gsap.killTweensOf([dot, ring]);
    };
  }, [enabled]);

  if (!enabled) return null;

  const label = LABELS[state];

  return (
    <>
      <style>{`
        .mm-cursor-active, .mm-cursor-active * { cursor: none !important; }
        .mm-cursor-dot, .mm-cursor-ring {
          position: fixed; top: 0; left: 0; pointer-events: none;
          z-index: 9998; transform: translate(-50%, -50%);
          will-change: transform;
        }
        .mm-cursor-dot {
          width: 6px; height: 6px; margin: -3px 0 0 -3px; border-radius: 50%;
          background: var(--ivory-50, #F8F3EA);
          transition: opacity .2s ease;
        }
        .mm-cursor-ring {
          margin: 0; border-radius: 50%;
          border: 1.5px solid var(--lavender, #B3A0E6);
          box-shadow: 0 0 18px 2px rgba(179,160,230,.28);
          display: grid; place-items: center;
          transition: width .28s cubic-bezier(.22,1,.36,1),
                      height .28s cubic-bezier(.22,1,.36,1),
                      background-color .28s ease, border-color .28s ease;
        }
        .mm-cursor-ring[data-state="default"]     { width: 30px; height: 30px; }
        .mm-cursor-ring[data-state="interactive"] { width: 48px; height: 48px;
          background: rgba(179,160,230,.10); }
        .mm-cursor-ring[data-state="gallery"]     { width: 68px; height: 68px;
          background: rgba(10,14,32,.28); }
        .mm-cursor-ring[data-state="drag"]        { width: 60px; height: 60px;
          background: rgba(179,160,230,.10); }
        .mm-cursor-ring[data-state="booking"]     { width: 62px; height: 62px;
          background: rgba(92,63,160,.20); border-color: var(--violet-deep,#5C3FA0); }
        .mm-cursor-label {
          font-family: var(--font-grotesque, Inter, sans-serif);
          font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
          color: var(--ivory-50, #F8F3EA); user-select: none;
        }
        /* hide the small dot when the ring shows a label */
        .mm-cursor-dot[data-hidden="true"] { opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
          .mm-cursor-dot, .mm-cursor-ring { display: none; }
          .mm-cursor-active, .mm-cursor-active * { cursor: auto !important; }
        }
      `}</style>
      <div ref={dotRef} className="mm-cursor-dot" data-hidden={label ? 'true' : 'false'} aria-hidden />
      <div ref={ringRef} className="mm-cursor-ring" data-state={state} aria-hidden>
        {label && <span className="mm-cursor-label">{label}</span>}
      </div>
    </>
  );
}

export default MagicCursor;
