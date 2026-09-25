import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/i18n'
import { byCategory } from '../data/news'
import { useLang } from '../context/LanguageContext'
import SEO from '../components/SEO'
import NewsCard from '../components/NewsCard'
import Sidebar from '../components/Sidebar'
import Reveal from '../components/Reveal'

export default function Category() {
  const { slug } = useParams()
  const { txt, t } = useLang()
  const category = categories.find((c) => c.slug === slug)
  const stories = byCategory(slug)

  if (!category) {
    return <p className="py-16 text-center">{t.noResults}</p>
  }

  return (
    <>
      <SEO title={txt(category)} description={`${txt(category)} news from Nepal — ${t.brand}`} path={`/category/${slug}`} />
      <nav className="mb-4 text-sm text-neutral-500">
        <Link to="/" className="hover:text-crimson">
          {t.home}
        </Link>
        <span> / </span>
        <span className="text-navy">{txt(category)}</span>
      </nav>
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <Reveal>
        <section>
          <h1 className="mb-6 border-l-4 border-crimson pl-3 font-serif text-3xl font-black">{txt(category)}</h1>
          <div className="grid gap-6 sm:grid-cols-2">
            {stories.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
        </Reveal>
        <Reveal delay={80}>
        <Sidebar />
        </Reveal>
      </div>
    </>
  )
}
