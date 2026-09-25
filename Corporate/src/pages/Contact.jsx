import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { Eyebrow } from '../components/SectionHeading'
import { company, offices } from '../data/site'

export function Contact() {
  return (
    <>
      <PageMeta
        title="Contact · Shikhar Group"
        description="Contact Shikhar Group in Kathmandu, Hetauda, or Biratnagar. This demonstration form does not store messages."
      />
      <PageHero
        eyebrow="Contact"
        title="Write with the place and the season."
        lede="Tell us the district, the constraint, and what has to be true at handover. We answer from Kathmandu on Sunday to Friday."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ContactForm />
          <aside className="bg-forest p-8 text-cream">
            <Eyebrow light>Offices</Eyebrow>
            <ul className="mt-6 space-y-6">
              {offices.map((office) => (
                <li key={office.city}>
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-brass">{office.role}</p>
                  <p className="mt-1 font-display text-2xl font-medium">{office.city}</p>
                  <p className="mt-1 text-sm text-cream/75">{office.address}</p>
                  <p className="mt-1 text-sm text-cream/75">{office.note}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 border-t border-white/15 pt-6 text-sm">
              <p>
                <a href={company.phoneHref} className="text-gold-soft">
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="break-all text-gold-soft">
                  {company.email}
                </a>
              </p>
              <p className="text-cream/75">{company.hours}</p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}
