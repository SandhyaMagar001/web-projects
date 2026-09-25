import { useReducedMotion } from 'framer-motion'
import { marquee } from '../data/site'

export function Marquee() {
  const reduce = useReducedMotion()
  const items = reduce ? marquee : [...marquee, ...marquee]

  return (
    <div className="max-w-full overflow-hidden border-y border-line bg-paper" aria-hidden="true">
      <div className={`flex gap-x-8 px-5 py-4 ${reduce ? 'flex-wrap justify-center gap-y-3' : 'marquee w-max'}`}>
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted"
          >
            {item}
            <span className="h-1 w-1 bg-brass" />
          </span>
        ))}
      </div>
    </div>
  )
}
