// src/components/dev/DevNav.tsx
// DEV-ONLY route switcher. Renders a fixed dropdown (top-right) listing every
// route so you can jump between real pages and the /dev harnesses.
// Gated behind import.meta.env.DEV — it is NOT included in production builds.
// This is a development convenience, not part of the site design. Safe to delete
// once the real navigation exists.

import { useNavigate, useLocation } from 'react-router-dom';

type DevRoute = { label: string; path: string };

// Static list on purpose (a dev tool shouldn't depend on content files).
// Dynamic routes use a representative sample slug.
const DEV_ROUTES: DevRoute[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Process', path: '/process' },
  { label: 'Create', path: '/create' },
  { label: 'World · Bluey (sample)', path: '/worlds/bluey' },
  { label: 'World · Kidchella (sample)', path: '/worlds/kidchella' },
  { label: 'Adventure · Bluey Backyard (sample)', path: '/adventures/a-bluey-backyard' },
  { label: 'Adventure · Kidchella (sample)', path: '/adventures/kidchella' },
  { label: '— dev harnesses —', path: '' },
  { label: 'Dev · Assets', path: '/dev/assets' },
  { label: 'Dev · Motion', path: '/dev/motion' },
  { label: '404 (sample)', path: '/__not_a_real_route__' },
];

export function DevNav() {
  if (!import.meta.env.DEV) return null;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        position: 'fixed',
        top: 8,
        right: 8,
        zIndex: 9999,
        fontFamily: 'monospace',
        fontSize: 12,
      }}
      aria-label="Development route switcher"
    >
      <select
        value={location.pathname}
        onChange={(e) => {
          const path = e.target.value;
          if (path) navigate(path);
        }}
        style={{
          background: '#0A0E20',
          color: '#F8F3EA',
          border: '1px solid #5C3FA0',
          borderRadius: 4,
          padding: '6px 8px',
          cursor: 'pointer',
        }}
        title="Dev: jump to a route"
      >
        {DEV_ROUTES.map((r) => (
          <option key={r.label} value={r.path} disabled={r.path === ''}>
            {r.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DevNav;
