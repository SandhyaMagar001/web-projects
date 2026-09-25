import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { formatShortDate } from '../utils/format'
import NewsImage from './NewsImage'

const sizes = {
  hero: 'aspect-[16/10] md:aspect-[16/9]',
  featured: 'aspect-[16/10]',
  card: 'aspect-[16/10]',
  compact: 'h-24 w-32 shrink-0',
}

export default function NewsCard({ article, variant = 'card', className = '' }) {
  const { lang, txt, t } = useLang()
  const title = txt(article.title)
  const excerpt = txt(article.excerpt)

  if (variant === 'compact') {
    return (
      <article className={`flex gap-3 ${className}`}>
        <Link to={`/news/${article.id}`} className={`${sizes.compact} overflow-hidden rounded-md bg-navy/10`}>
          <NewsImage src={article.image} className="h-full w-full object-cover" />
        </Link>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-crimson">
            {txt(categoryLabel(article.category))}
          </p>
          <h3 className="mt-0.5 font-serif text-sm font-bold leading-snug">
            <Link to={`/news/${article.id}`} className="transition-colors duration-200 hover:text-crimson">
              {title}
            </Link>
          </h3>
          <time className="mt-1 block text-xs text-neutral-500" dateTime={article.publishedAt}>
            {formatShortDate(article.publishedAt, lang)}
          </time>
        </div>
      </article>
    )
  }

  if (variant === 'hero') {
    return (
      <article className={`relative overflow-hidden rounded-xl bg-navy text-white shadow-sm transition duration-300 hover:shadow-lg ${className}`}>
        <Link to={`/news/${article.id}`} className={`block ${sizes.hero}`}>
          <NewsImage src={article.image} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-5 md:p-8">
            <span className="inline-block rounded bg-crimson px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider">
              {txt(categoryLabel(article.category))}
            </span>
            <h2 className="mt-3 font-serif text-2xl font-black leading-tight md:text-4xl">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/85 md:text-base">{excerpt}</p>
            <p className="mt-3 text-xs text-white/70">
              {txt(article.author)} · {txt(article.location)} · {article.readTime} {t.minutes}
            </p>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className={`group ${className}`}>
      <Link to={`/news/${article.id}`} className={`relative mb-3 block overflow-hidden rounded-lg bg-navy/10 ${sizes[variant] || sizes.card}`}>
        <NewsImage
          src={article.image}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {article.media === 'video' && (
          <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {t.video}
          </span>
        )}
      </Link>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-crimson">
        {txt(categoryLabel(article.category))}
      </p>
      <h3 className="mt-1 font-serif text-lg font-bold leading-snug">
        <Link to={`/news/${article.id}`} className="transition-colors duration-200 hover:text-crimson">
          {title}
        </Link>
      </h3>
      {variant !== 'mini' && <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{excerpt}</p>}
      <p className="mt-2 text-xs text-neutral-500">
        {txt(article.author)} · {formatShortDate(article.publishedAt, lang)}
      </p>
    </article>
  )
}

function categoryLabel(slug) {
  const map = {
    national: { en: 'National', np: 'राष्ट्रिय' },
    politics: { en: 'Politics', np: 'राजनीति' },
    business: { en: 'Business', np: 'व्यापार' },
    sports: { en: 'Sports', np: 'खेलकुद' },
    technology: { en: 'Technology', np: 'प्रविधि' },
    entertainment: { en: 'Entertainment', np: 'मनोरञ्जन' },
    international: { en: 'International', np: 'अन्तर्राष्ट्रिय' },
  }
  return map[slug]
}
