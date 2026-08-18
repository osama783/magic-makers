import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ivory-50/15 px-4 py-16 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-[1.375rem] text-ivory-50">{site.brandName}</p>
          <p className="t-caption text-muted-ivory mt-3">{site.region}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          {/* contact is null — only Instagram + CTA are shown. */}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="t-caption inline-flex min-h-[44px] items-center text-ivory-50"
          >
            {site.instagram.handle}
          </a>
          <Link
            to={site.ctaHref}
            className="t-caption inline-flex min-h-[44px] items-center border border-ivory-50/50 px-5 text-ivory-50"
          >
            {site.ctaLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
