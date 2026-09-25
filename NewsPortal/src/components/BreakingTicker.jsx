import { Link } from 'react-router-dom'
import { breaking } from '../data/news'
import { useLang } from '../context/LanguageContext'

export default function BreakingTicker() {
  const { t, txt } = useLang()
  const items = [...breaking, ...breaking]

  return (
    <div className="bg-crimson text-white" role="region" aria-label={t.breaking}>
      <div className="mx-auto flex max-w-7xl items-stretch">
        <span className="flex shrink-0 items-center bg-crimson-dark px-3 py-2 text-xs font-black uppercase tracking-widest">
          {t.breaking}
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-track flex w-max gap-10 py-2 pr-10">
            {items.map((item, i) => (
              <Link
                key={`${item.id}-${i}`}
                to={`/news/${item.id}`}
                className="whitespace-nowrap text-sm font-medium hover:underline"
              >
                {txt(item)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
