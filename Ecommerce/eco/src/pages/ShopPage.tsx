import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { EmptyState, PageIntro } from '../components/Section';
import { isDeal, isNewArrival, products, shopCategories } from '../data';
import type { Category } from '../types';

export function ShopPage() {
  const [params, setParams] = useSearchParams();
  const activeCategory = (params.get('category') as Category | null) ?? 'All';
  const filter = params.get('filter') ?? '';
  const search = params.get('q') ?? '';
  const sort = params.get('sort') ?? 'Featured';
  const [draft, setDraft] = useState(search);
  useEffect(() => { setDraft(search); }, [search]);

  const visible = useMemo(() => {
    let list = products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesQuery = `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'deals' ? isDeal(product) : filter === 'new' ? isNewArrival(product) : true;
      return matchesCategory && matchesQuery && matchesFilter;
    });
    if (sort === 'Price: low to high') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'Price: high to low') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'Top rated') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, filter, search, sort]);

  function patch(next: Record<string, string | undefined>) {
    const merged = new URLSearchParams(params);
    Object.entries(next).forEach(([key, value]) => {
      if (!value) merged.delete(key);
      else merged.set(key, value);
    });
    setParams(merged);
  }

  const heading = filter === 'deals' ? 'Deals' : filter === 'new' ? 'New arrivals' : activeCategory !== 'All' ? activeCategory : 'Shop all';

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <PageIntro
        eyebrow="The complete Velune edit"
        title={heading}
        text="Static catalog — search, filter, and sort entirely in the browser."
        extra={(
          <form className="flex w-full items-center gap-2 border-b border-line pb-2 md:w-64" onSubmit={(event) => { event.preventDefault(); patch({ q: draft.trim() || undefined }); }}>
            <Search size={16} className="text-muted" />
            <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Search the collection" className="w-full bg-transparent text-sm outline-none" />
          </form>
        )}
      />
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button type="button" className={`shrink-0 border px-3 py-2 text-[11px] ${activeCategory === 'All' ? 'border-brand bg-brand text-white' : 'border-line text-muted'}`} onClick={() => patch({ category: undefined })}>All</button>
          {shopCategories.map((item) => (
            <button type="button" key={item} className={`shrink-0 border px-3 py-2 text-[11px] ${activeCategory === item ? 'border-brand bg-brand text-white' : 'border-line text-muted'}`} onClick={() => patch({ category: item })}>{item}</button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-xs text-muted">
          {visible.length} pieces
          <select value={sort} aria-label="Sort products" className="bg-transparent text-sm text-ink outline-none" onChange={(event) => patch({ sort: event.target.value === 'Featured' ? undefined : event.target.value })}>
            <option>Featured</option>
            <option>Top rated</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </label>
      </div>
      {visible.length ? (
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      ) : (
        <EmptyState icon={<Search size={28} />} title="No pieces found" text="Try a different search or browse the full collection." />
      )}
      {!visible.length && (
        <div className="mt-4 text-center">
          <button type="button" className="bg-brand px-5 py-3 text-xs font-semibold text-white" onClick={() => setParams({})}>Clear filters</button>
        </div>
      )}
    </main>
  );
}
