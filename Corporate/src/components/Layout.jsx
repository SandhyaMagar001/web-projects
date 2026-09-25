import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!hash) return undefined
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <div className="flex min-h-svh flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <motion.main
        id="main"
        className="flex-1"
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}
