import { Link } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { Button } from '../components/Button'
import { ClosingCta } from '../components/ClosingCta'
import { Container } from '../components/Container'
import { Marquee } from '../components/Marquee'
import { Media } from '../components/Media'
import { PageMeta } from '../components/PageMeta'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceRow } from '../components/ServiceRow'
import { StatCounter } from '../components/StatCounter'
import { articles, company, images, principles, projects, services, stats } from '../data/site'

export function Home() {
  return (
    <>
      <PageMeta title="Shikhar Group · Kathmandu" description={company.description} />
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <Container className="relative grid items-end gap-12 pb-16 lg:grid-cols-12 lg:pb-24">
          <Reveal className="lg:col-span-6">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold">
              Kathmandu · Since {company.founded}
            </p>
            <p className="font-dev mt-4 text-base text-pine" lang="ne">
              {company.nepali}
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-[4.4rem]">
              {company.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Shikhar Group designs, builds, and operates infrastructure, energy assets, ward-service software, and
              cold-chain. Four businesses, one standard, based in Nepal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/projects" arrow>
                View selected work
              </Button>
              <Button to="/about" variant="ghost" arrow>
                About the group
              </Button>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden bg-sand">
                <Media
                  src={images.ridge.src}
                  alt={images.ridge.alt}
                  priority
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 border-l-2 border-brass bg-forest/95 p-5 text-cream sm:right-auto sm:max-w-xs">
                <p className="font-display text-4xl font-medium">40+</p>
                <p className="mt-1 text-sm leading-relaxed text-cream/75">
                  Project packages delivered across six provinces.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Marquee />

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="The group"
              title="Independent, and based here."
              lede="Founded in Naxal in 2008 by a roads team that stayed. We still price work from Kathmandu, Hetauda, and Biratnagar rather than from a visiting office."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Each business has its own lead and its own accounts. Clients still get one group conversation when a road,
              a plant, and a desk need to land in the same district.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pine">
              Our story <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden bg-sand">
              <Media src={images.build.src} alt={images.build.alt} className="aspect-[4/3] w-full object-cover" />
            </div>
            <p className="mt-3 text-sm text-muted">Civil works are still the centre of the group.</p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Practices"
            title="Four businesses, one operating standard."
            lede="Each unit has its own lead. The rules do not change with the sector: a named manager, a written programme, and a crew hired near the work."
          />
          <div className="mt-10 border-b border-line">
            {services.map((service, index) => (
              <ServiceRow key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="band-grid bg-forest">
        <Container className="grid gap-10 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} onDark />
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Recent delivery"
            lede="Six packages from the current book. The full list is longer. These are the ones that show how we actually work."
            action={
              <Button to="/projects" variant="ghost" arrow>
                All projects
              </Button>
            }
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ProjectCard project={projects[0]} featured />
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {[projects[2], projects[4]].map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How we work" title="Four rules we do not decorate." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <Reveal key={item.number} delay={Math.min(index * 0.06, 0.2)}>
                <p className="font-display text-sm text-gold">{item.number}</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Insights"
            title="Notes from the practices"
            action={
              <Button to="/insights" variant="ghost" arrow>
                All insights
              </Button>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  )
}
