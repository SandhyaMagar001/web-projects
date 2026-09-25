import { Link } from 'react-router-dom'
import { articles } from '../data/news'
import { useLang } from '../context/LanguageContext'
import NewsCard from './NewsCard'

export default function Sidebar() {
  const { t, txt } = useLang()
  const trending = [...articles].sort((a, b) => b.views - a.views).slice(0, 5)

  return (
    <aside className="space-y-8">
      <section>
        <h2 className="mb-4 border-b-2 border-crimson pb-2 font-serif text-xl font-bold">{t.trending}</h2>
        <ol className="space-y-4">
          {trending.map((article, i) => (
            <li key={article.id} className="flex gap-3">
              <span className="font-serif text-2xl font-black text-crimson/30">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <Link to={`/news/${article.id}`} className="font-serif text-sm font-bold leading-snug hover:text-crimson">
                  {txt(article.title)}
                </Link>
                <p className="mt-1 text-xs text-neutral-500">
                  {article.views.toLocaleString()} {t.views}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 font-serif text-lg font-bold">{t.weather}</h2>
        <p className="text-3xl font-black text-navy">24°C</p>
        <p className="text-sm text-neutral-600">Kathmandu Valley · Partly cloudy</p>
        <p className="mt-2 text-xs text-neutral-500">H 27° · L 18° · AQI 86</p>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 font-serif text-lg font-bold">{t.market}</h2>
        <p className="text-2xl font-black text-emerald-700">
          2,184.32 <span className="text-sm">+28.14</span>
        </p>
        <p className="text-xs text-neutral-500">NEPSE · Turnover Rs 8.12bn</p>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-lg font-bold">{t.latest}</h2>
        <div className="space-y-4">
          {articles.slice(0, 4).map((a) => (
            <NewsCard key={a.id} article={a} variant="compact" />
          ))}
        </div>
      </section>
    </aside>
  )
}
