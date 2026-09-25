export function formatDate(iso, lang) {
  return new Intl.DateTimeFormat(lang === 'np' ? 'ne-NP' : 'en-NP', {
    timeZone: 'Asia/Kathmandu',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
}

export function formatShortDate(iso, lang) {
  return new Intl.DateTimeFormat(lang === 'np' ? 'ne-NP' : 'en-NP', {
    timeZone: 'Asia/Kathmandu',
    day: 'numeric',
    month: 'short',
  }).format(new Date(iso))
}

export function todayLabel(lang) {
  return new Intl.DateTimeFormat(lang === 'np' ? 'ne-NP' : 'en-GB', {
    timeZone: 'Asia/Kathmandu',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())
}
