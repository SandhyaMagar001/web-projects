import { useMemo, useState } from "react";
import GalleryGrid from "../components/GalleryGrid";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { images } from "../data/images";
import { gallery } from "../data/stories";

const places = ["All", ...new Set(gallery.map((item) => item.place))];

export default function Gallery() {
  usePageTitle("Gallery");
  const [place, setPlace] = useState("All");
  const items = useMemo(
    () => (place === "All" ? gallery : gallery.filter((item) => item.place === place)),
    [place],
  );

  return (
    <>
      <PageHero
        image={images.everestNamche}
        eyebrow="Gallery"
        title="The country, without a caption contest."
        text="Open any frame. Arrow keys move through the set, and Escape closes it."
      />
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
          {places.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={place === item}
              onClick={() => setPlace(item)}
              className={`min-h-11 rounded-full px-4 text-sm font-semibold transition ${
                place === item ? "bg-ink text-cream" : "bg-white text-ink ring-1 ring-line hover:ring-gold"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <GalleryGrid items={items} />
      </section>
    </>
  );
}
