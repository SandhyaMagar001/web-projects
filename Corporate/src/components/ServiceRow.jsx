import { Link } from 'react-router-dom'

export function ServiceRow({ service, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-t border-line py-7 transition hover:bg-paper sm:grid-cols-[4.5rem_1fr_auto] sm:items-center sm:px-4"
    >
      <span className="font-display text-lg text-gold">{number}</span>
      <h3 className="font-display text-2xl font-medium text-ink transition group-hover:text-pine sm:text-3xl">
        {service.name}
      </h3>
      <p className="col-span-2 text-sm leading-relaxed text-muted sm:col-span-1 sm:col-start-2">{service.summary}</p>
      <span className="hidden text-sm font-medium text-pine sm:inline">View</span>
    </Link>
  )
}
