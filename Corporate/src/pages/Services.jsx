import { ClosingCta } from '../components/ClosingCta'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/site'

export function Services() {
  return (
    <>
      <PageMeta
        title="Services · Shikhar Group"
        description="Infrastructure, energy, digital services, and agribusiness from a Kathmandu-based group."
      />
      <PageHero
        eyebrow="Services"
        title="Four practices, staffed as businesses."
        lede="We do not keep a catalogue of everything a client might someday need. These are the four we can mobilise with our own people."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
      <ClosingCta />
    </>
  )
}
