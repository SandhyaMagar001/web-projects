import { useState } from 'react'

export function Media({ src, alt, className = '', priority = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-[linear-gradient(160deg,#1c4638_0%,#143028_58%,#6e512c_140%)] ${className}`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width="1600"
      height="1067"
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
