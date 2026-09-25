import { Link } from 'react-router-dom'
import { Media } from './Media'

export function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="group flex flex-col border border-line bg-paper">
      <div className="overflow-hidden">
        <Media
          src={service.image.src}
          alt={service.image.alt}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-2xl font-medium text-ink">{service.name}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
        <span className="mt-6 text-sm font-medium text-pine">Explore the practice</span>
      </div>
    </Link>
  )
}
