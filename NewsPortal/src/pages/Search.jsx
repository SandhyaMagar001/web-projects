import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchArticles } from '../data/news'
import { useLang } from '../context/LanguageContext'
import SEO from '../components/SEO'
import NewsCard from '../components/NewsCard'
import Reveal from '../components/Reveal'

export default function Search() {
  const { t } = useLang()
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const results = useMemo(() => searchArticles(q), [q])

  return (
    <>
      <SEO title={`${t.search}: ${q}`} description={`Search Nepal news for ${q}`} path={`/search?q=${q}`} />
      <h1 className="font-serif text-3xl font-black">
        {t.resultsFor}: “{q}”
      </h1>
      {results.length === 0 ? (
        <p className="mt-6 text-neutral-600">{t.noResults}</p>
      ) : (
        <Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
        </Reveal>
      )}
    </>
  )
}
