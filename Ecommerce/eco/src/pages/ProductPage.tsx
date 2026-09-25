import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Minus, Plus, Search, ShieldCheck, ShoppingBag, Star, Truck, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { EmptyState, SectionHeading } from '../components/Section';
import { FREE_SHIPPING, colorLabel, discount, money, productById, relatedProducts } from '../data';
import { useMixora } from '../store';

export function ProductPage() {
  const { id } = useParams();
  const product = productById(Number(id));
  const { wishlist, toggleWishlist, addToCart } = useMixora();
  const [quantity, setQuantity] = useState(1);
  const [guide, setGuide] = useState(false);
  const [photo, setPhoto] = useState(0);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (!product) return;
    setSize(product.sizes?.[0] ?? '');
    setColor(product.colors?.[0] ?? '');
    setPhoto(0);
    setQuantity(1);
  }, [product]);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16">
        <EmptyState icon={<Search size={28} />} title="Piece not found" text="It may have left the edit." to="/shop" action="Back to shop" />
      </main>
    );
  }

  const gallery = product.gallery.length ? product.gallery : [product.image];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <Link to="/shop" className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-brand"><ChevronLeft size={16} /> Back to shop</Link>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="animate-fade-in">
          <div className="bg-slate-200">
            <img src={gallery[photo] ?? product.image} alt={product.name} className="h-[420px] w-full object-cover md:h-[560px]" />
          </div>
          <div className="mt-3 flex gap-2">
            {gallery.map((src, index) => (
              <button type="button" key={src} className={`h-20 w-20 overflow-hidden border ${photo === index ? 'border-brand' : 'border-transparent opacity-70'}`} onClick={() => setPhoto(index)}>
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="animate-slide-in">
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent-dark">{product.category} / {product.badge || 'The edit'}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand md:text-5xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1 text-accent-dark"><Star size={14} fill="currentColor" /> {product.rating}</span>
            <a href="#reviews">{product.reviews} reviews</a>
          </div>
          <div className="mt-6 flex items-baseline gap-3 border-b border-line pb-5">
            <strong className="text-2xl">{money(product.price)}</strong>
            <del className="text-muted">{money(product.originalPrice)}</del>
            <span className="text-sm text-accent-dark">Save {discount(product)}%</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">{product.description}</p>
          {product.colors && (
            <div className="mt-6">
              <div className="mb-3 text-sm">Color <strong className="ml-2 font-normal text-muted">{colorLabel(color)}</strong></div>
              <div className="flex gap-2">
                {product.colors.map((item) => (
                  <button type="button" key={item} aria-label={colorLabel(item)} className={`h-7 w-7 rounded-full border-2 ${color === item ? 'border-brand' : 'border-white ring-1 ring-line'}`} style={{ backgroundColor: item }} onClick={() => setColor(item)} />
                ))}
              </div>
            </div>
          )}
          {product.sizes && (
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span>Size</span>
                <button type="button" className="text-[11px] uppercase tracking-wider text-muted underline" onClick={() => setGuide(true)}>Size guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((item) => (
                  <button type="button" key={item} className={`min-w-11 border px-3 py-2 text-sm ${size === item ? 'border-brand bg-brand text-white' : 'border-line'}`} onClick={() => setSize(item)}>{item}</button>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8 flex gap-2">
            <div className="flex h-12 w-28 items-center justify-around border border-line">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button>
            </div>
            <button type="button" className="flex flex-1 items-center justify-center gap-2 bg-brand text-sm font-semibold text-white hover:bg-brand-dark" onClick={() => addToCart(product.id, quantity, size, color)}>
              Add to bag <ShoppingBag size={16} />
            </button>
            <button type="button" className={`grid h-12 w-12 place-items-center border border-line ${wishlist.includes(product.id) ? 'text-red-500' : ''}`} onClick={() => toggleWishlist(product.id)}>
              <Heart size={18} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="mt-6 space-y-2 border-t border-line pt-5 text-[11px] uppercase tracking-wider text-muted">
            <p className="flex items-center gap-2"><Truck size={16} className="text-accent-dark" /> Free shipping over {money(FREE_SHIPPING)}</p>
            <p className="flex items-center gap-2"><ShieldCheck size={16} className="text-accent-dark" /> Demo checkout — no live API</p>
          </div>
        </div>
      </div>
      <section id="reviews" className="mt-20">
        <SectionHeading eyebrow="What people say" title="Reviews" />
        <div className="grid gap-4 md:grid-cols-3">
          {product.reviewList.map((review) => (
            <article key={review.author + review.date} className="bg-white p-5">
              <div className="text-xs text-accent-dark"><Star size={12} className="inline" fill="currentColor" /> {review.rating}.0</div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{review.text}</p>
              <small className="mt-3 block text-muted">{review.author} · {review.date}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <SectionHeading eyebrow="You may also like" title="Complete the look" />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">{relatedProducts(product.id).map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </section>
      {guide && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/45 p-4" onClick={() => setGuide(false)}>
          <div className="w-full max-w-lg bg-white p-6" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-accent-dark">Fit notes</p>
                <h2 className="text-2xl font-semibold">Size guide</h2>
              </div>
              <button type="button" onClick={() => setGuide(false)} aria-label="Close"><X size={18} /></button>
            </div>
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-line">{(product.sizes?.some((item) => Number(item) > 20) ? ['EU', 'US', 'UK'] : ['Size', 'Chest', 'Waist']).map((h) => <th key={h} className="py-2">{h}</th>)}</tr></thead>
              <tbody>
                {(product.sizes?.some((item) => Number(item) > 20)
                  ? [['36', '6', '3.5'], ['38', '7.5', '5'], ['40', '9', '6.5'], ['42', '11', '8']]
                  : [['XS', '82–86', '64–68'], ['S', '86–90', '68–72'], ['M', '90–96', '72–78'], ['L', '96–102', '78–84']]
                ).map((row) => <tr key={row[0]} className="border-b border-line">{row.map((cell) => <td key={cell} className="py-2">{cell}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
