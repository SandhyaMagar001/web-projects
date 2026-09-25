import { Link } from 'react-router-dom'
import { company, nav, offices, services } from '../data/site'
import { Container } from './Container'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-brass/50 bg-forest text-cream">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">{company.tagline}</p>
        </div>
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-brass">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-cream/80 transition hover:text-gold-soft">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/about#leadership" className="text-cream/80 transition hover:text-gold-soft">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-cream/80 transition hover:text-gold-soft">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-brass">Practices</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="text-cream/80 transition hover:text-gold-soft">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-brass">Offices</p>
          <ul className="mt-4 space-y-4 text-sm">
            {offices.map((office) => (
              <li key={office.city}>
                <p className="font-medium text-cream">{office.city}</p>
                <p className="text-cream/70">{office.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs leading-relaxed text-cream/60 sm:flex-row sm:items-end sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.legal}
        </p>
        <p className="max-w-xl sm:text-right">
          Shikhar Group is a fictional company. People, projects, and figures on this site are sample content for a
          static demonstration.
        </p>
      </Container>
    </footer>
  )
}
