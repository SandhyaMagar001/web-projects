import { Container } from './Container'
import { Eyebrow } from './SectionHeading'
import { Reveal } from './Reveal'

export function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="border-b border-line bg-cream pt-28 pb-14 sm:pt-32 sm:pb-16">
      <Container>
        <Reveal>
          {children}
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-ink sm:text-6xl">
            {title}
          </h1>
          {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p> : null}
        </Reveal>
      </Container>
    </section>
  )
}
