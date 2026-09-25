import { articles } from '../data/news'
import { useLang } from '../context/LanguageContext'
import NewsCard from './NewsCard'

export default function FeaturedNews() {
  const { t } = useLang()
  const featured = articles.filter((a) => a.featured)
  const [hero, ...rest] = featured

  return (
    <section aria-labelledby="featured-heading">
      <h1 id="featured-heading" className="mb-4 font-serif text-2xl font-black">
        {t.featured}
      </h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <NewsCard article={hero} variant="hero" className="lg:col-span-2" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {rest.slice(0, 2).map((article) => (
            <NewsCard key={article.id} article={article} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  )
}
