import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { ClosingCta } from '../components/ClosingCta'
import { Container } from '../components/Container'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { ProjectCard } from '../components/ProjectCard'
import { StatCounter } from '../components/StatCounter'
import { findBySlug, projects, services } from '../data/site'
import { NotFound } from './NotFound'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = findBySlug(services, slug)
  if (!service) return <NotFound />

  const related = projects.filter((project) => project.sector === service.name)

  return (
    <>
      <PageMeta title={`${service.name} · Shikhar Group`} description={service.summary} />
      <PageHero eyebrow={service.name} title={service.lede} lede={service.summary}>
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: 'Services', to: '/services' },
            { label: service.name },
          ]}
        />
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="overflow-hidden bg-sand">
            <Media src={service.image.src} alt={service.image.alt} className="aspect-[4/3] w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium text-ink">What the practice covers</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {service.capabilities.map((item) => (
                <li key={item} className="py-3 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {service.outcomes.map((item) => (
              <StatCounter key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-medium text-ink">Related work</h2>
              <Link to="/projects" className="text-sm font-medium text-pine">
                All projects
              </Link>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <ClosingCta />
    </>
  )
}
