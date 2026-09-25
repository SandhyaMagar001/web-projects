import { useState } from "react";
import { Link } from "react-router-dom";
import { company, navLinks, whatsappLink } from "../data/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a valid email to join the list.");
      return;
    }
    setMessage("Saved in this browser only. No message was sent.");
    setEmail("");
  }

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl">Himalaya Crest</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Private journeys across Kathmandu, Pokhara, Chitwan, Everest, and Annapurna.
            Established as a studio profile in {company.established}.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/book" className="hover:text-gold">
                Book a journey
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Desk</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{company.address}</li>
            <li>
              <a href={`tel:${company.phoneTel}`} className="hover:text-gold">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-gold">
                {company.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-gold">
                WhatsApp the desk
              </a>
            </li>
            <li>{company.hours}</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Notes</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A short list of seasonal departures. We only store this address on your device.
          </p>
          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="field bg-white/95"
            />
            <button
              type="submit"
              className="min-h-11 rounded-full bg-gold px-5 text-sm font-semibold text-ink transition hover:bg-gold-light"
            >
              Keep me posted
            </button>
            {message ? <p className="text-xs text-gold-light">{message}</p> : null}
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Himalaya Crest. Demonstration website.</p>
          <p>Enquiries stay in your browser unless you continue on WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
