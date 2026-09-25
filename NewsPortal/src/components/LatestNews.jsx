import { useState } from 'react'
import { articles } from '../data/news'
import { useLang } from '../context/LanguageContext'
import NewsCard from './NewsCard'

export default function LatestNews() {
  const { t } = useLang()
  const [visible, setVisible] = useState(6)
  const latest = [...articles].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

  return (
    <section aria-labelledby="latest-heading" className="mt-10">
      <h2 id="latest-heading" className="mb-4 border-b-2 border-navy pb-2 font-serif text-2xl font-black">
        {t.latest}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {latest.slice(0, visible).map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
      {visible < latest.length && (
        <button
          type="button"
          onClick={() => setVisible((v) => v + 4)}
          className="mt-6 w-full rounded-full border border-navy py-2 text-sm font-semibold hover:bg-navy hover:text-white"
        >
          {t.loadMore}
        </button>
      )}
    </section>
  )
}
