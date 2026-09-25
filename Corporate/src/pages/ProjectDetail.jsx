import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { Container } from '../components/Container'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { StatCounter } from '../components/StatCounter'
import { findBySlug, projects } from '../data/site'
import { NotFound } from './NotFound'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = findBySlug(projects, slug)
  if (!project) return <NotFound />

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <PageMeta title={`${project.name} · Shikhar Group`} description={project.summary} />
      <PageHero eyebrow={`${project.sector} · ${project.year}`} title={project.name} lede={project.summary}>
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: 'Projects', to: '/projects' },
            { label: project.name },
          ]}
        />
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container>
          <dl className="grid gap-6 border-y border-line py-6 sm:grid-cols-3">
            <div>
              <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold">Location</dt>
              <dd className="mt-2 text-ink">{project.location}</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold">Status</dt>
              <dd className="mt-2 text-ink">{project.status}</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold">Practice</dt>
              <dd className="mt-2">
                <Link to={`/services/${project.sector.toLowerCase()}`} className="text-pine">
                  {project.sector}
                </Link>
              </dd>
            </div>
          </dl>
          <div className="mt-10 overflow-hidden bg-sand">
            <Media src={project.image.src} alt={project.image.alt} priority className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {project.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              {project.facts.map((fact) => (
                <StatCounter key={fact.label} value={fact.value} label={fact.label} />
              ))}
            </div>
          </div>
          <Link
            to={`/projects/${next.slug}`}
            className="group mt-16 flex items-center justify-between gap-6 border-t border-line py-8"
          >
            <span>
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold">Next project</span>
              <span className="mt-2 block font-display text-2xl font-medium text-ink transition group-hover:text-pine sm:text-3xl">
                {next.name}
              </span>
            </span>
            <span aria-hidden="true" className="text-2xl transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Container>
      </section>
    </>
  )
}
