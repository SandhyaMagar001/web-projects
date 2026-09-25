import { Link } from "react-router-dom";
import { packagesForDestination } from "../data/packages";
import Photo from "./Photo";

export default function DestinationCard({ destination, delay = 0 }) {
  const count = packagesForDestination(destination.slug).length;

  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <Photo
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <p className="absolute bottom-4 left-5 font-display text-3xl text-white">{destination.name}</p>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-muted">{destination.tagline}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          {count} {count === 1 ? "journey" : "journeys"}
        </p>
      </div>
    </Link>
  );
}
