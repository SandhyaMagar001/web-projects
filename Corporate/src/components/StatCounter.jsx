import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

function parseStat(value) {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/)
  if (!match) return null
  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
    decimals: match[2].includes('.') ? match[2].split('.')[1].length : 0,
  }
}

function isYear(parsed) {
  return (
    parsed.decimals === 0 &&
    parsed.prefix === '' &&
    parsed.suffix.trim() === '' &&
    parsed.number >= 1900 &&
    parsed.number <= 2099
  )
}

function format(parsed, current) {
  const number = parsed.decimals ? current.toFixed(parsed.decimals) : Math.round(current).toLocaleString('en-US')
  return `${parsed.prefix}${number}${parsed.suffix}`
}

export function StatCounter({ value, label, onDark = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const parsed = parseStat(value)
  const [current, setCurrent] = useState(() => {
    if (!parsed || isYear(parsed)) return parsed?.number ?? 0
    return 0
  })

  const shown = parsed
    ? format(parsed, reduce || isYear(parsed) ? parsed.number : current)
    : value

  useEffect(() => {
    const next = parseStat(value)
    if (!next || !inView || reduce || isYear(next)) return undefined

    const start = performance.now()
    let frame = 0
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / 1100)
      const eased = 1 - (1 - progress) ** 3
      setCurrent(next.number * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value])

  return (
    <div ref={ref}>
      <p
        className={`font-display text-4xl font-medium sm:text-5xl ${onDark ? 'text-cream' : 'text-forest'}`}
        aria-label={String(value)}
      >
        <span aria-hidden="true">{shown}</span>
      </p>
      <p className={`mt-2 max-w-xs text-sm leading-relaxed ${onDark ? 'text-gold-soft' : 'text-muted'}`}>{label}</p>
    </div>
  )
}
