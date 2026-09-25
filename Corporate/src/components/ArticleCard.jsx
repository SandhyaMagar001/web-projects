import { Link } from 'react-router-dom'
import { readingMinutes } from '../data/site'

export function ArticleCard({ article }) {
  const minutes = readingMinutes(article.paragraphs)

  return (
    <Link to={`/insights/${article.slug}`} className="group flex h-full flex-col border border-line bg-paper p-6">
      <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold">
        {article.category} · {minutes} min
      </p>
      <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-ink transition group-hover:text-pine">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
      <p className="mt-6 text-sm text-ink">
        {article.date}
        <span className="text-muted"> · {article.author}</span>
      </p>
    </Link>
  )
}
