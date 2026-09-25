import { Container } from './Container'
import { Button } from './Button'
import { Reveal } from './Reveal'

export function ClosingCta({
  title = 'Tell us about the work.',
  text = 'A road, a plant, a ward desk, or a collection route. Write with the place and the season, and we will answer plainly.',
}) {
  return (
    <section className="bg-forest text-cream">
      <Container className="grid gap-8 py-16 sm:py-20 md:grid-cols-[1.4fr_auto] md:items-end">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75">{text}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <Button to="/contact" variant="light" arrow>
            Contact the group
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
