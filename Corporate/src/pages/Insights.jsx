import { ArticleCard } from '../components/ArticleCard'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { articles } from '../data/site'

export function Insights() {
  return (
    <>
      <PageMeta
        title="Insights · Shikhar Group"
        description="Notes from Shikhar Group on hill roads, municipal service desks, and cold-chain routes in Nepal."
      />
      <PageHero
        eyebrow="Insights"
        title="Field notes, not thought leadership."
        lede="Short pieces from the people who run the practices. They are about sequencing, counters, and routes."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
