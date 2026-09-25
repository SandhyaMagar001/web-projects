import { useLang } from '../context/LanguageContext'
import SEO from '../components/SEO'

export default function Contact() {
  const { t } = useLang()
  return (
    <article className="mx-auto max-w-2xl">
      <SEO title={t.contactTitle} description={t.contactBody} path="/contact" />
      <h1 className="font-serif text-3xl font-black">{t.contactTitle}</h1>
      <p className="mt-4 text-lg leading-8 text-neutral-700">{t.contactBody}</p>
    </article>
  )
}
