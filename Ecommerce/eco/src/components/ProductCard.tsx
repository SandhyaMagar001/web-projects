import { Heart, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { discount, money } from '../data';
import { useMixora } from '../store';
import type { Product } from '../types';

export function ProductCard({ product }: { product: Product }) {
  const { wishlist, toggleWishlist, addToCart } = useMixora();
  const saved = wishlist.includes(product.id);

  return (
    <article className="group flex h-auto min-w-0 flex-col animate-fade-up">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-slate-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-80"
        />
        <div className="absolute inset-x-3 top-3 flex items-start justify-between">
          <span className="bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
            {product.badge || `${discount(product)}% off`}
          </span>
          <button
            type="button"
            aria-label="Save product"
            className={`grid h-8 w-8 place-items-center rounded-full bg-white/90 transition hover:text-red-500 ${saved ? 'text-red-500' : 'text-ink'}`}
            onClick={(event) => { event.preventDefault(); event.stopPropagation(); toggleWishlist(product.id); }}
          >
            <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted">
          <span>{product.category}</span>
          <span className="inline-flex items-center gap-1 text-accent-dark">
            <Star size={12} fill="currentColor" /> {product.rating}
          </span>
        </div>
        <Link to={`/product/${product.id}`} className="mt-2 line-clamp-1 font-semibold tracking-tight transition hover:text-brand">
          {product.name}
        </Link>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <strong className="text-sm">{money(product.price)}</strong>
          <del className="text-xs text-muted whitespace-nowrap">{money(product.originalPrice)}</del>
          <span className="text-[11px] text-accent-dark">-{discount(product)}%</span>
        </div>
        <button
          type="button"
          className="mt-auto flex w-full items-center justify-between border-b border-line pt-4 pb-2 text-sm text-muted transition hover:border-brand hover:text-brand"
          onClick={() => addToCart(product.id, 1, product.sizes?.[0] ?? '', product.colors?.[0] ?? '')}
        >
          Add to bag <Plus size={16} />
        </button>
      </div>
    </article>
  );
}
