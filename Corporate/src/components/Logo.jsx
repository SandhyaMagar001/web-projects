import { Link } from 'react-router-dom'

export function Logo({ light = false }) {
  const peak = light ? '#e7d3b4' : '#143028'
  const word = light ? 'text-cream' : 'text-ink'
  const sub = light ? 'text-gold-soft' : 'text-gold'

  return (
    <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Shikhar Group, home">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <path d="M4 26 L16 6 L28 26" fill="none" stroke={peak} strokeWidth="1.6" />
        <path d="M10 26 L16 15 L22 26" fill="none" stroke="#c6a36a" strokeWidth="1.6" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[1.15rem] font-medium tracking-tight ${word}`}>Shikhar</span>
        <span className={`mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.22em] ${sub}`}>
          Group
        </span>
      </span>
    </Link>
  )
}
