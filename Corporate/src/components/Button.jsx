import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-forest text-cream hover:bg-pine',
  ghost: 'border border-ink/20 bg-transparent text-ink hover:border-forest hover:bg-forest hover:text-cream',
  light: 'bg-cream text-forest hover:bg-white',
  brass: 'bg-brass text-ink hover:bg-gold-soft',
}

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  arrow = false,
  type = 'button',
  onClick,
}) {
  const classes = `group inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition duration-300 ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow ? (
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
