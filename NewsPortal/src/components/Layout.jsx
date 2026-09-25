import { Outlet } from 'react-router-dom'
import BreakingTicker from './BreakingTicker'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Reveal from './Reveal'

export default function Layout() {
  return (
    <div className="min-h-screen animate-fade-in">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <BreakingTicker />
      <Navbar />
      <main id="main" className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <Outlet />
      </main>
      <div className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <Reveal>
          <Newsletter />
        </Reveal>
      </div>
      <Footer />
    </div>
  )
}
