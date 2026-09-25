import { useState } from 'react'

export default function NewsImage({ src, alt = '', className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-navy via-crimson to-navy text-gold ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-serif text-3xl font-black">ह</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  )
}
