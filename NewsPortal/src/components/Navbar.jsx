import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { categories } from '../data/i18n'
import { useLang } from '../context/LanguageContext'
import { todayLabel } from '../utils/format'

export default function Navbar() {
  const { lang, t, toggle, txt } = useLang()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  function onSearch(e) {
    e.preventDefault()
    if (!q.trim()) return
    navigate(`/search?q=${encodeURIComponent(q.trim())}`)
    setOpen(false)
  }

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap px-2 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
      isActive ? 'text-crimson border-b-2 border-crimson' : 'text-navy hover:text-crimson'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur-md">
      <div className="hidden border-b border-navy/5 bg-navy text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] tracking-wide md:px-6">
          <span>{t.company} · Kantipath, Kathmandu</span>
          <span>{todayLabel(lang)} · {t.edition}</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label={t.brand}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson font-serif text-lg font-black text-gold shadow-sm">
            ह
          </span>
          <span>
            <span className="block font-serif text-lg font-black leading-none text-navy md:text-xl">{t.brand}</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">{t.tagline}</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <form onSubmit={onSearch} className="hidden items-center rounded-full border border-navy/15 bg-white shadow-sm transition focus-within:border-crimson md:flex">
            <label htmlFor="site-search" className="sr-only">
              {t.search}
            </label>
            <input
              id="site-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-44 bg-transparent px-4 py-1.5 text-sm outline-none lg:w-64"
            />
            <button type="submit" className="rounded-full px-3 py-1.5 text-sm font-semibold text-crimson">
              {t.search}
            </button>
          </form>
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-navy/20 px-3 py-1.5 text-xs font-bold uppercase transition hover:bg-navy hover:text-white"
          >
            {t.language}
          </button>
          <button
            type="button"
            className="rounded-md border border-navy/20 px-2 py-1 text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-navy/10 md:block" aria-label="Categories">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 md:px-6">
          <NavLink to="/" end className={linkClass}>
            {t.home}
          </NavLink>
          {categories.map((c) => (
            <NavLink key={c.slug} to={`/category/${c.slug}`} className={linkClass}>
              {txt(c)}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <div className="animate-slide-down border-t border-navy/10 bg-white px-4 py-4 md:hidden">
          <form onSubmit={onSearch} className="mb-3 flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="flex-1 rounded-md border border-navy/20 px-3 py-2 text-sm"
            />
            <button className="rounded-md bg-crimson px-3 py-2 text-sm text-white">{t.search}</button>
          </form>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm font-semibold text-navy">
              {t.home}
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-navy"
              >
                {txt(c)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
