import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '../data/site'
import { Logo } from './Logo'
import { Container } from './Container'

export function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [menuPath, setMenuPath] = useState(pathname)
  const [scrolled, setScrolled] = useState(false)
  const firstLinkRef = useRef(null)

  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus())
    return () => {
      window.removeEventListener('keydown', onKey)
      cancelAnimationFrame(frame)
    }
  }, [open])

  const desktopLink = ({ isActive }) =>
    `text-sm font-medium transition hover:text-pine ${isActive ? 'text-pine' : 'text-ink/75'}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        open
          ? 'bg-forest text-cream'
          : scrolled
            ? 'border-b border-line bg-paper/95 text-ink backdrop-blur-md'
            : 'bg-cream/90 text-ink'
      }`}
    >
      <div className="relative z-50">
      <div className="h-0.5 bg-brass" />
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Logo light={open} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((link) => (
            <NavLink key={link.to} to={link.to} className={desktopLink}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-forest px-4 py-2.5 text-sm font-medium text-cream transition hover:bg-pine"
          >
            Contact
          </NavLink>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-px w-6 bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute top-1.5 left-0 h-px w-6 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-px w-6 bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </Container>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-forest lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-6 pb-16" aria-label="Mobile">
              {[...nav, { label: 'Contact', to: '/contact' }].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index + 0.05 }}
                >
                  <NavLink
                    ref={index === 0 ? firstLinkRef : undefined}
                    to={link.to}
                    className="block py-2 font-display text-4xl font-medium text-cream"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
