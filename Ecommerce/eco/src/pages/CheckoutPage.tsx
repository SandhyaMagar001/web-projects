import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Package } from 'lucide-react';
import { EmptyState, PageIntro } from '../components/Section';
import { PROMO_CODE, PROMO_RATE, colorLabel, money, productById } from '../data';
import { useMixora } from '../store';

export function CheckoutPage() {
  const { cart, subtotal, shipping, account, placeOrder } = useMixora();
  const [error, setError] = useState('');
  const [placedId, setPlacedId] = useState<string | null>(null);
  const [promo, setPromo] = useState('');
  const discountValue = promo.trim().toUpperCase() === PROMO_CODE ? subtotal * PROMO_RATE : 0;
  const [form, setForm] = useState({
    email: account?.email ?? '',
    firstName: account?.name.split(' ')[0] ?? '',
    lastName: account?.name.split(' ').slice(1).join(' ') ?? '',
    address: '',
    city: '',
    postcode: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  if (placedId) return <Navigate to={`/order/${placedId}`} replace />;
  if (!cart.length) return <Navigate to="/cart" replace />;

  function field(name: keyof typeof form) {
    return {
      value: form[name],
      onChange: (event: ChangeEvent<HTMLInputElement>) => setForm((current) => ({ ...current, [name]: event.target.value })),
    };
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const result = placeOrder({ ...form, promo });
    if ('error' in result) { setError(result.error); return; }
    setPlacedId(result.id);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <Link to="/cart" className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-brand"><ChevronLeft size={16} /> Back to bag</Link>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr]">
        <form onSubmit={submit} className="space-y-4">
          <p className="text-[11px] uppercase tracking-widest text-accent-dark">Almost there</p>
          <h1 className="text-5xl font-semibold tracking-tight text-brand">Checkout</h1>
          <p className="text-sm text-muted">Frontend-only checkout. Try 4242 4242 4242 4242, 12/28, 123. Promo {PROMO_CODE}.</p>
          <label className="block text-xs text-muted">Email<input required type="email" className="mt-2 w-full border border-line bg-white px-3 py-3 text-sm text-ink outline-none focus:border-brand" {...field('email')} /></label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs text-muted">First name<input required className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('firstName')} /></label>
            <label className="block text-xs text-muted">Last name<input required className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('lastName')} /></label>
          </div>
          <label className="block text-xs text-muted">Address<input required className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('address')} /></label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs text-muted">City<input required className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('city')} /></label>
            <label className="block text-xs text-muted">Postcode<input required className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('postcode')} /></label>
          </div>
          <label className="block text-xs text-muted">Card number<input required inputMode="numeric" className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('cardNumber')} /></label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs text-muted">Expiry<input required placeholder="MM/YY" className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('expiry')} /></label>
            <label className="block text-xs text-muted">CVC<input required className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" {...field('cvc')} /></label>
          </div>
          <label className="block text-xs text-muted">Promo code<input placeholder={PROMO_CODE} value={promo} onChange={(event) => setPromo(event.target.value)} className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none focus:border-brand" /></label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="flex w-full items-center justify-center gap-2 bg-brand py-3 text-sm font-semibold text-white hover:bg-brand-dark">Place order <ArrowRight size={16} /></button>
        </form>
        <aside className="h-fit bg-white p-6">
          <p className="text-[11px] uppercase tracking-widest text-accent-dark">Your order</p>
          <h2 className="mt-2 text-2xl font-semibold">Velune edit.</h2>
          <div className="mt-6 space-y-3 text-sm">
            {cart.map((line) => {
              const product = productById(line.productId);
              if (!product) return null;
              return <div className="flex justify-between gap-3" key={`${line.productId}-${line.size}-${line.color}`}><span>{product.name} × {line.quantity}{line.size ? ` · ${line.size}` : ''}{line.color ? ` · ${colorLabel(line.color)}` : ''}</span><strong>{money(product.price * line.quantity)}</strong></div>;
            })}
            <div className="flex justify-between border-t border-line pt-3"><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
            <div className="flex justify-between"><span>Shipping</span><strong>{shipping === 0 ? 'Free' : money(shipping)}</strong></div>
            {discountValue > 0 && <div className="flex justify-between text-accent-dark"><span>{PROMO_CODE}</span><strong>−{money(discountValue)}</strong></div>}
            <div className="flex justify-between border-t border-line pt-3 text-lg font-semibold"><span>Total</span><span>{money(subtotal + shipping - discountValue)}</span></div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export function OrderPage() {
  const { id } = useParams();
  const { orders } = useMixora();
  const order = orders.find((item) => item.id === id);
  if (!order) return <main className="mx-auto max-w-7xl px-4 py-16"><EmptyState icon={<Package size={28} />} title="Order not found" text="This confirmation lives on this browser only." to="/account" action="View account" /></main>;
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-[11px] uppercase tracking-widest text-accent-dark">Thank you</p>
      <h1 className="mt-2 text-4xl font-semibold text-brand">Order {order.id}</h1>
      <p className="mt-4 text-muted">Packed {order.items.reduce((sum, item) => sum + item.quantity, 0)} piece(s) for {order.firstName}.</p>
      <div className="mt-8 space-y-3">
        {order.items.map((item) => (
          <div className="flex items-center gap-4" key={`${item.productId}-${item.size}-${item.color}`}>
            <img src={item.image} alt="" className="h-16 w-14 object-cover" />
            <div>
              <strong>{item.name}</strong>
              <p className="text-sm text-muted">{item.quantity} × {money(item.price)}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">Ships to {order.address}, {order.city} {order.postcode}. Total {money(order.total)}.</p>
      <Link to="/shop" className="mt-8 inline-flex bg-brand px-5 py-3 text-xs font-semibold text-white">Keep shopping</Link>
    </main>
  );
}

export function AccountPage() {
  const { account, login, register, logout, orders } = useMixora();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(event: FormEvent) {
    event.preventDefault();
    const problem = mode === 'login' ? await login(email, password) : await register(name, email, password);
    setError(problem ?? '');
  }

  if (account) {
    const mine = orders.filter((order) => order.email === account.email);
    return (
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <PageIntro eyebrow="Your Velune" title={`Hello, ${account.name.split(' ')[0]}.`} text={account.email} extra={<button type="button" className="bg-brand px-5 py-3 text-xs font-semibold text-white" onClick={logout}>Log out</button>} />
        <h2 className="mb-4 text-xl font-semibold">Orders</h2>
        {mine.length === 0 && <p className="text-muted">No orders yet.</p>}
        <div className="divide-y divide-line">
          {mine.map((order) => (
            <Link key={order.id} to={`/order/${order.id}`} className="flex justify-between py-4 text-sm hover:text-brand">
              <strong>{order.id}</strong>
              <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              <span>{money(order.total)}</span>
            </Link>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-lg px-4 py-16">
      <PageIntro eyebrow="Account" title={mode === 'login' ? 'Welcome back' : 'Create an account'} text="Sign in to view orders and keep your details in one place." />
      <form className="space-y-4" onSubmit={submit}>
        {mode === 'register' && <label className="block text-xs text-muted">Name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none" /></label>}
        <label className="block text-xs text-muted">Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none" /></label>
        <label className="block text-xs text-muted">Password<input type="password" required minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full border border-line px-3 py-3 text-sm outline-none" /></label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="bg-brand px-5 py-3 text-xs font-semibold text-white">{mode === 'login' ? 'Log in' : 'Create account'}</button>
      </form>
      <button type="button" className="mt-4 text-sm text-muted underline" onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}>
        {mode === 'login' ? 'Need an account?' : 'Already have one?'}
      </button>
    </main>
  );
}
