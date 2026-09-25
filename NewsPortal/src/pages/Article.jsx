import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/i18n'
import { getArticle, relatedArticles } from '../data/news'
import { useLang } from '../context/LanguageContext'
import { formatDate } from '../utils/format'
import SEO from '../components/SEO'
import NewsCard from '../components/NewsCard'
import Sidebar from '../components/Sidebar'
import NewsImage from '../components/NewsImage'

export default function Article() {
  const { id } = useParams()
  const { lang, t, txt } = useLang()
  const article = getArticle(id)

  if (!article) {
    return (
      <p className="py-16 text-center">
        {t.noResults} — <Link to="/" className="text-crimson">{t.home}</Link>
      </p>
    )
  }

  const category = categories.find((c) => c.slug === article.category)
  const related = relatedArticles(article)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: txt(article.title),
    datePublished: article.publishedAt,
    author: { '@type': 'Person', name: txt(article.author) },
    image: article.image,
    articleSection: txt(category),
    inLanguage: lang === 'np' ? 'ne' : 'en',
  }

  return (
    <>
      <SEO title={txt(article.title)} description={txt(article.excerpt)} path={`/news/${article.id}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-10 animate-fade-up lg:grid-cols-[1fr_320px]">
        <article>
          <nav className="mb-4 text-sm text-neutral-500">
            <Link to="/" className="hover:text-crimson">{t.home}</Link>
            <span> / </span>
            <Link to={`/category/${article.category}`} className="hover:text-crimson">
              {txt(category)}
            </Link>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest text-crimson">{txt(category)}</p>
          <h1 className="mt-2 font-serif text-3xl font-black leading-tight md:text-4xl">{txt(article.title)}</h1>
          <p className="mt-3 text-lg text-neutral-600">{txt(article.excerpt)}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-y border-neutral-200 py-3 text-sm text-neutral-600">
            <span>
              {t.author ? `${t.author} ` : ''}
              <strong>{txt(article.author)}</strong>
            </span>
            <span>· {txt(article.location)}</span>
            <time dateTime={article.publishedAt}>
              {t.published} {formatDate(article.publishedAt, lang)}
            </time>
            <span>
              · {article.readTime} {t.minutes}
            </span>
          </div>
          <figure className="mt-6">
            <NewsImage src={article.image} alt={txt(article.title)} className="w-full rounded-xl object-cover md:h-[420px]" loading="eager" />
            <figcaption className="mt-2 text-xs text-neutral-500">{txt(article.location)}</figcaption>
          </figure>
          <div className="mt-6 space-y-4 text-[17px] leading-8 text-neutral-800">
            {txt(article.body).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-white p-4 text-sm">
            <p className="font-semibold">{t.share}</p>
            <p className="mt-1 text-neutral-500">Facebook · X · WhatsApp</p>
          </div>
          <section className="mt-10">
            <h2 className="mb-4 font-serif text-2xl font-bold">{t.related}</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <NewsCard key={item.id} article={item} variant="mini" />
              ))}
            </div>
          </section>
        </article>
        <Sidebar />
      </div>
    </>
  )
}
