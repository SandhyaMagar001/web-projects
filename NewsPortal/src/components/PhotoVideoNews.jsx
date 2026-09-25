import { Link } from 'react-router-dom'
import { articles } from '../data/news'
import { useLang } from '../context/LanguageContext'
import NewsImage from './NewsImage'

export default function PhotoVideoNews() {
  const { t, txt } = useLang()
  const media = articles.filter((a) => a.media === 'photo' || a.media === 'video').slice(0, 6)

  return (
    <section aria-labelledby="media-heading" className="mt-10">
      <h2 id="media-heading" className="mb-4 font-serif text-2xl font-black">
        {t.photoVideo}
      </h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {media.map((article) => (
          <Link
            key={article.id}
            to={`/news/${article.id}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <NewsImage src={article.image} className="h-full w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <span className="absolute left-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-bold uppercase text-navy">
              {article.media === 'video' ? t.video : t.photo}
            </span>
            <p className="absolute bottom-2 left-2 right-2 font-serif text-sm font-bold text-white line-clamp-2">
              {txt(article.title)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
