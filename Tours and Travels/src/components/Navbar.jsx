import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company, navLinks } from "../data/site";
import Button from "./Button";

function Logo({ light }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/80">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path
            d="M4 24 L12 10 L16 16 L21 7 L28 24"
            fill="none"
            stroke="#c6a15b"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        <span className={`block font-display text-2xl leading-none ${light ? "text-white" : "text-cream"}`}>
          {company.name}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          {company.tagline}
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const overlay = location.pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition hover:text-gold ${
      isActive ? "text-gold" : overlay ? "text-white" : "text-cream"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        overlay ? "bg-transparent" : "bg-ink/95 shadow-lg backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Logo light={overlay} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button to="/book">Book now</Button>
        </div>
        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
            overlay ? "border-white/40 text-white" : "border-white/20 text-cream"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            <NavLink to="/" className="rounded-xl px-3 py-3 text-cream hover:bg-white/5">
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="rounded-xl px-3 py-3 text-cream hover:bg-white/5"
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/book" className="mt-3">
              Book now
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
