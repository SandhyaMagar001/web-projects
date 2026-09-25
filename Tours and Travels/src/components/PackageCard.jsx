import { Link } from "react-router-dom";
import { formatPrice } from "../lib/format";
import Button from "./Button";
import Photo from "./Photo";

export default function PackageCard({ trip }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/tours/${trip.slug}`} className="group relative block h-56 overflow-hidden">
        <Photo
          src={trip.image}
          alt={trip.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
          {trip.type}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{trip.region}</p>
        <h3 className="mt-2 font-display text-3xl leading-tight">
          <Link to={`/tours/${trip.slug}`} className="hover:text-navy">
            {trip.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{trip.summary}</p>
        <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/80">
          <div>{trip.duration}</div>
          <div>{trip.difficulty}</div>
          <div>From {formatPrice(trip.price)}</div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button to={`/tours/${trip.slug}`} variant="outline">
            View details
          </Button>
          <Button to={`/book/${trip.slug}`}>Book now</Button>
        </div>
      </div>
    </article>
  );
}
