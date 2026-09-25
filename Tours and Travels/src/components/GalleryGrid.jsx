import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Photo from "./Photo";

export default function GalleryGrid({ items }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + items.length) % items.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  const current = active === null ? null : items[active];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`group relative overflow-hidden rounded-2xl text-left ${index % 5 === 0 ? "col-span-2 md:col-span-1 lg:row-span-1" : ""}`}
          >
            <Photo
              src={item.src}
              alt={item.alt}
              className="h-48 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-left text-sm text-white">
              {item.caption}
            </span>
          </button>
        ))}
      </div>
      {current
        ? createPortal(
            <div
              className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4"
              role="dialog"
              aria-modal="true"
              aria-label={current.caption}
            >
              <button
                type="button"
                className="absolute inset-0"
                aria-label="Close gallery"
                onClick={() => setActive(null)}
              />
              <div className="relative z-10 w-full max-w-5xl">
                <Photo src={current.src} alt={current.alt} className="max-h-[78vh] w-full rounded-2xl object-contain" />
                <div className="mt-4 flex items-center justify-between gap-4 text-cream">
                  <p>
                    <span className="text-gold">{current.place}</span>
                    <span className="mx-2 text-white/40">/</span>
                    {current.caption}
                  </p>
                  <div className="flex gap-2">
                    <button type="button" className="min-h-11 rounded-full border border-white/30 px-4" onClick={() => setActive((index) => (index - 1 + items.length) % items.length)}>
                      Prev
                    </button>
                    <button type="button" className="min-h-11 rounded-full border border-white/30 px-4" onClick={() => setActive((index) => (index + 1) % items.length)}>
                      Next
                    </button>
                    <button type="button" className="min-h-11 rounded-full bg-gold px-4 text-ink" onClick={() => setActive(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
