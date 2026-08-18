import { Link, useRouterState } from "@tanstack/react-router";
import { site } from "@/content/site";

/** Mobile-only (<768). Hidden on /create. */
export function StickyCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === site.ctaHref) return null;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-[40] border-t border-ivory-50/15 bg-ink-900 p-3 md:hidden">
      <Link
        to={site.ctaHref}
        className="t-caption flex min-h-[44px] w-full items-center justify-center border border-ivory-50/50 px-4 text-ivory-50"
      >
        {site.ctaLabel}
      </Link>
    </div>
  );
}

export default StickyCTA;
