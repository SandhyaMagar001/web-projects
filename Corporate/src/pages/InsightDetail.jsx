import { Link, useParams } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { Breadcrumb } from '../components/Breadcrumb'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'
import { articles, findBySlug, readingMinutes } from '../data/site'
import { NotFound } from './NotFound'

export function InsightDetail() {
  const { slug } = useParams()
  const article = findBySlug(articles, slug)
  if (!article) return <NotFound />

  const others = articles.filter((item) => item.slug !== article.slug)
  const minutes = readingMinutes(article.paragraphs)

  return (
    <>
      <PageMeta title={`${article.title} · Shikhar Group`} description={article.excerpt} />
      <PageHero eyebrow={`${article.category} · ${minutes} min read`} title={article.title} lede={article.excerpt}>
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: 'Insights', to: '/insights' },
            { label: article.title },
          ]}
        />
      </PageHero>
      <article className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-sm text-muted">
            {article.date} · {article.author}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/90">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
            More from the practices on the{' '}
            <Link to="/insights" className="text-pine">
              insights index
            </Link>
            .
          </p>
        </Container>
        <Container className="mt-16">
          <h2 className="font-display text-3xl font-medium text-ink">Continue reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Container>
      </article>
    </>
  )
}
