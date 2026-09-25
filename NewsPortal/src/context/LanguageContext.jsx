import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from '../data/i18n'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('hh-lang') || 'en')

  useEffect(() => {
    localStorage.setItem('hh-lang', lang)
    document.documentElement.lang = lang === 'np' ? 'ne' : 'en'
    document.documentElement.classList.toggle('np', lang === 'np')
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: ui[lang],
      toggle: () => setLang((current) => (current === 'en' ? 'np' : 'en')),
      txt: (field) => (field ? field[lang] : ''),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
