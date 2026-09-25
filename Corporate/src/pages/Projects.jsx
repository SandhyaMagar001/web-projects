import { useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { ProjectCard } from '../components/ProjectCard'
import { projects, services } from '../data/site'

const filters = ['All', ...services.map((service) => service.name)]

export function Projects() {
  const [active, setActive] = useState('All')
  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((project) => project.sector === active)),
    [active],
  )

  return (
    <>
      <PageMeta
        title="Projects · Shikhar Group"
        description="Selected infrastructure, energy, digital, and agribusiness projects across six provinces of Nepal."
      />
      <PageHero
        eyebrow="Projects"
        title="Work you can walk."
        lede="A short book of packages. Filter by practice. Each one has a place, a year, and a reason it was scoped the way it was."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by practice">
              {filters.map((filter) => {
                const selected = active === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(filter)}
                    className={`px-4 py-2 text-sm font-medium transition ${
                      selected ? 'bg-forest text-cream' : 'border border-line bg-paper text-ink hover:border-forest'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
            <p className="text-sm text-muted" aria-live="polite">
              Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
          {visible.length === 0 ? (
            <p className="mt-12 text-muted">No projects in this practice yet.</p>
          ) : (
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {visible.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
