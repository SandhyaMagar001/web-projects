import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import GalleryGrid from "../components/GalleryGrid";
import PackageCard from "../components/PackageCard";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { formatPrice } from "../lib/format";
import { getPackage, packages } from "../data/packages";
import NotFound from "./NotFound";

export default function TourDetail() {
  const { slug } = useParams();
  const tour = getPackage(slug);
  const [openDay, setOpenDay] = useState(tour?.itinerary[0]?.day ?? 1);
  usePageTitle(tour ? tour.title : "Journey");

  useEffect(() => {
    setOpenDay(tour?.itinerary[0]?.day ?? 1);
  }, [slug, tour]);

  if (!tour) return <NotFound />;

  const shots = tour.gallery.map((src, index) => ({
    src,
    alt: `${tour.title}, photograph ${index + 1}`,
    caption: tour.highlights[index] || tour.title,
    place: tour.region,
  }));
  const related = packages.filter((item) => item.slug !== tour.slug && item.regions.some((region) => tour.regions.includes(region))).slice(0, 3);

  return (
    <>
      <PageHero image={tour.image} eyebrow={`${tour.region} · ${tour.type}`} title={tour.title} text={tour.summary} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Duration" value={tour.duration} />
            <Stat label="From" value={formatPrice(tour.price)} />
            <Stat label="Difficulty" value={tour.difficulty} />
            <Stat label="Season" value={tour.season} />
          </dl>
          <h2 className="mt-10 font-display text-4xl">Highlights</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {tour.highlights.map((item) => (
              <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm ring-1 ring-line">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-4xl">Day by day</h2>
          <div className="mt-4 divide-y divide-line overflow-hidden rounded-3xl bg-white ring-1 ring-line">
            {tour.itinerary.map((item) => {
              const open = openDay === item.day;
              return (
                <div key={item.day}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenDay(open ? 0 : item.day)}
                  >
                    <span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Day {item.day}</span>
                      <span className="mt-1 block font-medium">{item.title}</span>
                    </span>
                    <span className="text-gold">{open ? "–" : "+"}</span>
                  </button>
                  {open ? <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.text}</p> : null}
                </div>
              );
            })}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <List title="Included" items={tour.includes} />
            <List title="Not included" items={tour.excludes} />
          </div>
          <h2 className="mt-10 font-display text-4xl">Along the way</h2>
          <div className="mt-4">
            <GalleryGrid items={shots} />
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-ink p-6 text-cream lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Sample rate</p>
          <p className="mt-2 font-display text-5xl">{formatPrice(tour.price)}</p>
          <p className="mt-1 text-sm text-white/70">Per person, twin share · group {tour.groupSize}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Rates are illustrative for this static site. Confirm dates before treating them as a quote.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button to={`/book/${tour.slug}`}>Book now</Button>
            <Link to="/contact" className="text-center text-sm font-semibold text-gold-light underline underline-offset-4">
              Ask a question first
            </Link>
          </div>
        </aside>
      </section>
      {related.length ? (
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <h2 className="font-display text-4xl">You may also consider</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <PackageCard key={item.slug} trip={item} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
      <dt className="text-xs uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}

function List({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-3xl">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}
