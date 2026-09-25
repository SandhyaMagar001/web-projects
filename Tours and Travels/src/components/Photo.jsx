import { useState } from "react";

export default function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-navy text-center text-xs uppercase tracking-[0.18em] text-gold-light ${className}`}
        role="img"
        aria-label={alt}
      >
        Himalaya Crest
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
