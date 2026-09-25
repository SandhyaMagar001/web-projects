import { Link } from "react-router-dom";
import { usePageTitle } from "../components/ScrollToTop";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-start justify-center px-5 pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">404</p>
      <h1 className="mt-3 font-display text-5xl">That page is not on the route.</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        The link may be mistyped. The packages and destinations lists are the surest way back.
      </p>
      <div className="mt-6 flex gap-4 text-sm font-semibold">
        <Link to="/" className="underline decoration-gold underline-offset-4">
          Home
        </Link>
        <Link to="/packages" className="underline decoration-gold underline-offset-4">
          Packages
        </Link>
      </div>
    </section>
  );
}
