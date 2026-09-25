import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Newsletter() {
  const { t } = useLang()
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  function submit(e) {
    e.preventDefault()
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!ok) {
      setMsg(t.newsletterInvalid)
      return
    }
    setMsg(t.newsletterSuccess)
    setEmail('')
  }

  return (
    <section className="rounded-2xl bg-navy px-6 py-8 text-white shadow-lg md:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold">{t.newsletterTitle}</h2>
          <p className="mt-2 max-w-md text-sm text-white/75">{t.newsletterText}</p>
        </div>
        <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            {t.emailPlaceholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm text-navy outline-none"
          />
          <button type="submit" className="rounded-full bg-crimson px-5 py-2.5 text-sm font-bold">
            {t.subscribe}
          </button>
        </form>
      </div>
      {msg && <p className="mx-auto mt-3 max-w-4xl text-sm text-gold">{msg}</p>}
    </section>
  )
}
