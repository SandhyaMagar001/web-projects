import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Minus, Plus, ShieldCheck, ShoppingBag } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { EmptyState, PageIntro } from '../components/Section';
import { FREE_SHIPPING, SHIPPING_FEE, colorLabel, money, productById, products } from '../data';
import { useMixora } from '../store';

export function WishlistPage() {
  const { wishlist } = useMixora();
  const items = products.filter((product) => wishlist.includes(product.id));
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <PageIntro eyebrow="Saved for later" title="Your wishlist" text={items.length ? `${items.length} pieces saved on this device.` : 'Your wishlist is waiting.'} />
      {items.length
        ? <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        : <EmptyState icon={<Heart size={28} />} title="Nothing here yet" text="Save pieces you love and they will show up here." to="/shop" action="Browse the edit" />}
    </main>
  );
}

export function CartPage() {
  const { cart, subtotal, shipping, updateQuantity, removeCart } = useMixora();
  const total = subtotal + shipping;
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <PageIntro eyebrow="Your selection" title={<>Your bag <span className="text-lg text-accent-dark">{cart.reduce((sum, line) => sum + line.quantity, 0)}</span></>} text="Review before checkout. Data stays in this browser." />
      {cart.length ? (
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="divide-y divide-line border-t border-line">
            {cart.map((line) => {
              const product = productById(line.productId);
              if (!product) return null;
              return (
                <div className="flex gap-5 py-5" key={`${line.productId}-${line.size}-${line.color}`}>
                  <img src={product.image} alt={product.name} className="h-32 w-28 object-cover" />
                  <div className="flex flex-1 flex-col">
                    <p className="text-[11px] uppercase tracking-wider text-muted">{product.category}</p>
                    <h3 className="mt-1 font-semibold">{product.name}</h3>
                    <span className="text-sm">{money(product.price)}</span>
                    {(line.size || line.color) && <small className="mt-1 text-muted">{[line.size && `Size ${line.size}`, line.color && colorLabel(line.color)].filter(Boolean).join(' · ')}</small>}
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex h-8 w-24 items-center justify-around border border-line">
                        <button type="button" onClick={() => updateQuantity(line, -1)}><Minus size={12} /></button>
                        <span className="text-sm">{line.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(line, 1)}><Plus size={12} /></button>
                      </div>
                      <button type="button" className="text-xs text-muted underline" onClick={() => removeCart(line)}>Remove</button>
                    </div>
                  </div>
                  <strong className="text-sm">{money(product.price * line.quantity)}</strong>
                </div>
              );
            })}
          </div>
          <aside className="h-fit bg-white p-6 lg:sticky lg:top-32">
            <p className="text-[11px] uppercase tracking-widest text-accent-dark">Order summary</p>
            <h2 className="mt-2 text-2xl font-semibold">Almost yours.</h2>
            <div className="mt-6 space-y-3 border-b border-line pb-4 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
              <div className="flex justify-between"><span>Shipping</span><strong>{shipping === 0 ? 'Free' : money(SHIPPING_FEE)}</strong></div>
            </div>
            <div className="flex justify-between py-4 text-lg font-semibold">
              <span>Total</span><span>{money(total)}</span>
            </div>
            <Link to="/checkout" className="mt-2 flex w-full items-center justify-center gap-2 bg-brand py-3 text-sm font-semibold text-white hover:bg-brand-dark">
              Continue to checkout <ArrowRight size={16} />
            </Link>
            <p className="mt-4 flex items-center gap-2 text-[11px] text-muted"><ShieldCheck size={14} /> Free shipping over {money(FREE_SHIPPING)}.</p>
          </aside>
        </div>
      ) : (
        <EmptyState icon={<ShoppingBag size={28} />} title="Your bag is empty" text="The best things are still waiting to be found." to="/shop" action="Start shopping" />
      )}
    </main>
  );
}
