import { ClosingCta } from '../components/ClosingCta'
import { Container } from '../components/Container'
import { Media } from '../components/Media'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { TeamCard } from '../components/TeamCard'
import { TextCard } from '../components/TextCard'
import { images, leaders, milestones, offices, provinces, values } from '../data/site'

export function About() {
  return (
    <>
      <PageMeta
        title="About · Shikhar Group"
        description="Shikhar Group is an independent Kathmandu group founded in 2008, working across infrastructure, energy, digital services, and agribusiness."
      />
      <PageHero
        eyebrow="About"
        title="A roads team that did not leave."
        lede="We started with fourteen people and a habit of finishing the drains. The group is larger now. The habit is the company."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                Shikhar Group opened in Naxal in 2008. The first work was hill roads. The first argument, which we
                still have, was whether to bid a length we could not drain before the monsoon. We bid the shorter one.
              </p>
              <p>
                The Hetauda yard came in 2013 so planning and testing could sit with the plant, not in a Kathmandu
                drawer. Public buildings followed. Energy grew out of hydro civil works. Counterline grew out of
                watching municipal software miss the queue. The cold hub grew out of a route, not a brochure about
                agriculture.
              </p>
              <p>
                We are still independent. Four businesses, three offices, and project sites in six provinces. Clients
                who want a visiting brand with a local subcontractor are better served elsewhere.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {provinces.map((province) => (
                <li key={province} className="border border-line bg-paper px-3 py-1.5 text-sm text-ink">
                  {province}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden bg-sand">
              <Media src={images.ridge.src} alt={images.ridge.alt} className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Timeline" title="A short history." />
          <ol className="space-y-8">
            {milestones.map((item) => (
              <li key={item.year} className="relative border-l border-line pl-8">
                <span className="absolute top-2 left-0 h-2.5 w-2.5 -translate-x-1/2 bg-brass" aria-hidden="true" />
                <p className="text-sm font-medium text-gold">{item.year}</p>
                <p className="mt-1 leading-relaxed text-ink">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Values" title="What we will not trade away." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <TextCard key={value.title} title={value.title}>
                {value.text}
              </TextCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="leadership" className="border-t border-line bg-paper py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The people who sign the programme."
            lede="Portraits are initials on purpose. These are sample biographies for a demonstration company, written as a working team rather than a poster."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leaders.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Offices" title="Three desks. Sites beyond them." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <article key={office.city} className="border border-line bg-paper p-6">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold">{office.role}</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink">{office.city}</h3>
                <p className="mt-3 text-sm text-ink">{office.address}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{office.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  )
}
