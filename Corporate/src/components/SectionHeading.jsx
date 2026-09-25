export function Eyebrow({ children, light = false, className = '' }) {
  return (
    <p className={`text-[0.72rem] font-medium uppercase tracking-[0.2em] ${light ? 'text-brass' : 'text-gold'} ${className}`}>
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, lede, action }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">{title}</h2>
        {lede ? <p className="mt-4 text-base leading-relaxed text-muted">{lede}</p> : null}
      </div>
      {action}
    </div>
  )
}
