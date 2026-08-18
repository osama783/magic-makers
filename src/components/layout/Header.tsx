import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

/**
 * Scene-driven contrast switching (data-contrast) lands in Packet 6+.
 * For now the header is permanently ivory-on-ink.
 */
export function Header() {
  return (
    <header
      data-contrast="dark"
      className="fixed top-0 right-0 left-0 z-[40] bg-ink-900/90 backdrop-blur-[2px]"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 lg:px-10"
      >
        {/* MISSING ASSET: replace with mm-logo-mark-dark.svg / mm-logo-mark-light.svg
            when vectors are supplied — do not restyle the real logo. */}
        <Link
          to="/"
          className="font-serif text-[1.375rem] leading-none text-ivory-50"
          aria-label={`${site.brandName} — home`}
        >
          {site.brandName}
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <ul className="flex items-center gap-4 md:gap-6">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="t-caption inline-flex min-h-[44px] items-center text-ivory-50"
                  activeProps={{ className: "text-lavender" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to={site.ctaHref}
            className="t-caption inline-flex min-h-[44px] items-center border border-ivory-50/50 px-3 text-ivory-50 md:px-5"
          >
            {site.ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
