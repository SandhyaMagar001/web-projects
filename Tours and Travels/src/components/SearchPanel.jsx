import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { budgetOptions, tripTypes } from "../data/site";
import { destinations } from "../data/destinations";

export default function SearchPanel() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("all");
  const [type, setType] = useState("all");
  const [budget, setBudget] = useState("any");

  function onSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (destination !== "all") params.set("destination", destination);
    if (type !== "all") params.set("type", type);
    if (budget !== "any") params.set("budget", budget);
    const query = params.toString();
    navigate(query ? `/packages?${query}` : "/packages");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3 rounded-3xl bg-white p-4 shadow-2xl ring-1 ring-ink/10 md:grid-cols-4 md:items-end"
    >
      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Destination
        <select
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          className="field mt-2"
        >
          <option value="all">All regions</option>
          {destinations.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Style
        <select value={type} onChange={(event) => setType(event.target.value)} className="field mt-2">
          <option value="all">Any style</option>
          {tripTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Budget
        <select
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          className="field mt-2"
        >
          {budgetOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="min-h-12 rounded-2xl bg-ink px-5 text-sm font-semibold text-cream transition hover:bg-navy"
      >
        Search journeys
      </button>
    </form>
  );
}
