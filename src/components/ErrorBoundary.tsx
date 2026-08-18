import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

/** Global boundary. Per-route boundaries are Packet 10. */
export class ErrorBoundary extends Component<Props, State> {
  override state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  override render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-screen items-center justify-center bg-ink-900 px-6">
        <div className="max-w-md">
          <p className="t-kicker text-lavender">Error</p>
          <h1 className="t-display-l mt-4 text-ivory-50">Something broke</h1>
          <p className="t-body text-muted-ivory mt-4">
            The page could not be rendered. You can head back to the start.
          </p>
          <a
            href="/"
            className="t-caption mt-6 inline-block border border-ivory-50/40 px-4 py-3 text-ivory-50"
          >
            Go home
          </a>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
