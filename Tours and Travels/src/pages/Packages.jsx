import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { destinations } from "../data/destinations";
import { images } from "../data/images";
import { filterPackages, packages } from "../data/packages";
import { budgetOptions, durationOptions, tripTypes } from "../data/site";

export default function Packages() {
  usePageTitle("Packages");
  const [params, setParams] = useSearchParams();

  const filters = {
    destination: params.get("destination") || "all",
    type: params.get("type") || "all",
    budget: params.get("budget") || "any",
    days: params.get("days") || "any",
    q: params.get("q") || "",
  };

  function update(key, value, emptyValue) {
    const next = new URLSearchParams(params);
    if (!value || value === emptyValue) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  }

  const results = useMemo(() => filterPackages(packages, filters), [filters.destination, filters.type, filters.budget, filters.days, filters.q]);

  return (
    <>
      <PageHero
        image={images.trekkers}
        eyebrow="Packages"
        title="Choose a pace, then a place."
        text="Filter by region, style, length, and sample budget. Every card opens a full itinerary."
      />
      <section className="mx-auto max-w-6xl px-5 py-12">
        <form
          className="grid gap-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-ink/10 md:grid-cols-2 xl:grid-cols-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Search
            <input
              value={filters.q}
              onChange={(event) => update("q", event.target.value, "")}
              placeholder="Everest, lake, safari..."
              className="field mt-2"
            />
          </label>
          <Select label="Destination" value={filters.destination} onChange={(value) => update("destination", value, "all")}>
            <option value="all">All regions</option>
            {destinations.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </Select>
          <Select label="Style" value={filters.type} onChange={(value) => update("type", value, "all")}>
            <option value="all">Any style</option>
            {tripTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
          <Select label="Length" value={filters.days} onChange={(value) => update("days", value, "any")}>
            {durationOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
          <Select label="Budget" value={filters.budget} onChange={(value) => update("budget", value, "any")}>
            {budgetOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </form>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-muted">
            {results.length} {results.length === 1 ? "journey" : "journeys"}
          </p>
          <button
            type="button"
            className="text-sm font-semibold underline decoration-gold underline-offset-4"
            onClick={() => setParams(new URLSearchParams(), { replace: true })}
          >
            Reset filters
          </button>
        </div>
        {results.length ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {results.map((trip) => (
              <PackageCard key={trip.slug} trip={trip} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl bg-white p-8 text-center ring-1 ring-line">
            <p className="font-display text-3xl">No journeys match those filters.</p>
            <p className="mt-2 text-sm text-muted">Widen the budget or clear the search to see the full list.</p>
          </div>
        )}
      </section>
    </>
  );
}

function Select({ label, value, onChange, children }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="field mt-2">
        {children}
      </select>
    </label>
  );
}
