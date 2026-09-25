import { Link } from 'react-router-dom'
import { Media } from './Media'

export function ProjectCard({ project, featured = false }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden bg-sand">
        <Media
          src={project.image.src}
          alt={project.image.alt}
          className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${featured ? 'aspect-[16/10]' : 'aspect-[3/2]'}`}
        />
      </div>
      <p className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold">
        {project.sector} · {project.year}
      </p>
      <h3 className="mt-2 font-display text-2xl font-medium text-ink transition group-hover:text-pine">{project.name}</h3>
      <p className="mt-1 text-sm text-muted">{project.location}</p>
    </Link>
  )
}
