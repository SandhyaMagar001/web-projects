import { Link, useParams } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { getDestination } from "../data/destinations";
import { packagesForDestination } from "../data/packages";
import NotFound from "./NotFound";

export default function DestinationDetail() {
  const { slug } = useParams();
  const destination = getDestination(slug);
  usePageTitle(destination ? destination.name : "Destination");

  if (!destination) return <NotFound />;

  const trips = packagesForDestination(destination.slug);

  return (
    <>
      <PageHero image={destination.image} eyebrow="Destination" title={destination.name} text={destination.tagline} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {destination.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link to={`/packages?destination=${destination.slug}`} className="inline-block pt-2 text-sm font-semibold text-ink underline decoration-gold underline-offset-4">
            Filter all {destination.name} journeys
          </Link>
        </div>
        <ul className="space-y-3 rounded-3xl bg-white p-6 ring-1 ring-line">
          {destination.highlights.map((item) => (
            <li key={item} className="border-b border-line pb-3 text-sm last:border-0 last:pb-0">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="font-display text-4xl">Journeys from {destination.name}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trips.map((trip) => (
            <PackageCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>
    </>
  );
}
