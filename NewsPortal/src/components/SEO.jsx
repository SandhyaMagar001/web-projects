import { useEffect } from 'react'

export default function SEO({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title.includes('Himalayan Herald')
      ? title
      : `${title} | Himalayan Herald`
    document.title = fullTitle

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (selector.startsWith('meta[name=')) {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        } else if (selector.startsWith('meta[property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1])
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:type"]', 'content', 'article')
    setMeta('meta[name="robots"]', 'content', 'index,follow')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', path)
  }, [title, description, path])

  return null
}
