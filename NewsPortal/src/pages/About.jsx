import { useLang } from '../context/LanguageContext'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'

export default function About() {
  const { t } = useLang()
  return (
    <Reveal>
      <article className="mx-auto max-w-2xl">
        <SEO title={t.aboutTitle} description={t.aboutBody} path="/about" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">{t.company}</p>
        <h1 className="mt-2 font-serif text-3xl font-black">{t.aboutTitle}</h1>
        <p className="mt-4 text-lg leading-8 text-neutral-700">{t.aboutBody}</p>
      </article>
    </Reveal>
  )
}
