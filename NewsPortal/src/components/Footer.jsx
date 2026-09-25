import { Link } from 'react-router-dom'
import { categories } from '../data/i18n'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t, txt } = useLang()

  return (
    <footer className="mt-16 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        <div>
          <p className="font-serif text-2xl font-black">{t.brand}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{t.company}</p>
          <p className="mt-3 text-sm text-white/70">{t.tagline}</p>
          <p className="mt-4 text-sm text-white/60">{t.contactBody}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold">{t.home}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="transition hover:text-gold">
                  {txt(c)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold">{t.follow}</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Facebook · HimalayanHerald</li>
            <li>X · @HimalayanHerald</li>
            <li>YouTube · Himalayan Herald News</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold">{t.about}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/about" className="transition hover:text-gold">
                {t.about}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-gold">
                {t.contact}
              </Link>
            </li>
            <li>{t.privacy}</li>
            <li>{t.terms}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {t.company}. {t.rights}
      </div>
    </footer>
  )
}
