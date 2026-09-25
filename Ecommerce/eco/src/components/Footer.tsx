import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

function Col({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="flex flex-col gap-3">
      <strong className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{title}</strong>
      {links.map(([label, href]) => (
        <Link key={label} to={href} className="text-sm text-slate-400 transition hover:text-white">{label}</Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Link to="/" aria-label="Velune home"><Logo light /></Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
            Considered goods for work and home. A corporate edit of fashion, beauty, tech, and living.
          </p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="mt-5 inline-flex text-slate-300 hover:text-white">
            <Instagram size={18} />
          </a>
        </div>
        <Col title="Shop" links={[['All products', '/shop'], ['New arrivals', '/shop?filter=new'], ['Deals', '/shop?filter=deals'], ['Best sellers', '/shop?filter=deals']]} />
        <Col title="Customer care" links={[['Contact', '/contact'], ['Shipping', '/shipping'], ['Returns', '/returns'], ['FAQ', '/faq'], ['Help', '/help']]} />
        <Col title="Company" links={[['About', '/about'], ['Our story', '/story'], ['Careers', '/careers'], ['Privacy', '/privacy'], ['Terms', '/terms']]} />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-4 py-5 text-[11px] uppercase tracking-wider text-slate-500 md:flex-row md:justify-between md:px-8">
        <span>© 2026 Velune. All rights reserved.</span>
        <span>Visa · Amex · Paypal · NPR</span>
      </div>
    </footer>
  );
}
