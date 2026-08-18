import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Providers } from "../app/Providers";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StickyCTA } from "../components/layout/StickyCTA";
import { SkipLink } from "../components/layout/SkipLink";
import { defaultSeo } from "../content/seo";

function NotFoundComponent() {
  return (
    <section className="section-pad mx-auto max-w-[1400px]">
      <p className="t-kicker text-lavender">404</p>
      <h1 className="t-display-l mt-6 text-ivory-50">Lost the thread</h1>
      <p className="t-body text-muted-ivory mt-6 max-w-[46ch]">
        This page doesn't exist. Head back to the start.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="t-caption inline-flex min-h-[44px] items-center border border-ivory-50/50 px-5 text-ivory-50"
        >
          Go home
        </Link>
        <Link
          to="/create"
          className="t-caption inline-flex min-h-[44px] items-center border border-lavender px-5 text-ivory-50"
        >
          Create Their Day ✦
        </Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: defaultSeo.title },
      { name: "description", content: defaultSeo.description },
      { property: "og:site_name", content: "MagicMinds" },
      { property: "og:title", content: defaultSeo.title },
      { property: "og:description", content: defaultSeo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <SkipLink />
        <Header />
        <main id="main" className="min-h-screen pt-20 pb-24 md:pb-0">
          {/* Required: nested routes render here — the only transitioning subtree later. */}
          <Outlet />
        </main>
        <Footer />
        <StickyCTA />
      </Providers>
    </QueryClientProvider>
  );
}
