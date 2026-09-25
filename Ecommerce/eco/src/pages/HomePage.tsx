import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Headphones, Package, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { ButtonLink } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/Section';
import {
  FREE_SHIPPING, PROMO_CODE, SALE_ENDS_AT, categoryCards, countCategory, isNewArrival, money, products, slides,
} from '../data';
import { useMixora } from '../store';

function useSaleClock() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const remain = Math.max(0, SALE_ENDS_AT - now);
  return {
    days: Math.floor(remain / 86_400_000),
    hours: Math.floor((remain % 86_400_000) / 3_600_000),
    minutes: Math.floor((remain % 3_600_000) / 60_000),
  };
}

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const clock = useSaleClock();
  const current = slides[slide];
  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);
  const trending = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  const arrived = products.filter(isNewArrival).slice(0, 4);

  return (
    <main>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-brand md:h-[78vh]">
        <img src={current.image} alt="" className="absolute inset-0 h-full w-full object-cover animate-fade-in" />
        <div className={`absolute inset-0 ${current.tone === 'dark' ? 'bg-gradient-to-r from-black/70 to-black/10' : 'bg-gradient-to-r from-white/90 via-white/55 to-transparent'}`} />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <div className={`max-w-xl animate-fade-up ${current.tone === 'dark' ? 'text-white' : 'text-ink'}`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{current.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">{current.title}</h1>
            <p className={`mt-5 max-w-md text-sm leading-relaxed md:text-base ${current.tone === 'dark' ? 'text-slate-200' : 'text-muted'}`}>{current.text}</p>
            <ButtonLink to="/shop" className="mt-8" variant={current.tone === 'dark' ? 'light' : 'primary'}>
              Shop the edit <ArrowUpRight size={16} />
            </ButtonLink>
          </div>
          <div className={`absolute bottom-8 left-4 flex items-center gap-3 md:left-8 ${current.tone === 'dark' ? 'text-white' : 'text-ink'}`}>
            <span className="text-xs tracking-widest">0{slide + 1} / 0{slides.length}</span>
            <div className="h-px w-24 bg-current/20"><i className="block h-px bg-current transition-all" style={{ width: `${((slide + 1) / slides.length) * 100}%` }} /></div>
            <button type="button" aria-label="Previous slide" className="grid h-8 w-8 place-items-center border border-current/30" onClick={() => setSlide((slide + slides.length - 1) % slides.length)}><ArrowLeft size={16} /></button>
            <button type="button" aria-label="Next slide" className="grid h-8 w-8 place-items-center border border-current/30" onClick={() => setSlide((slide + 1) % slides.length)}><ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Curated for you" title="Shop by category" link="View all" to="/shop" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {categoryCards.map((item, index) => (
            <Link key={item.name} to={`/shop?category=${encodeURIComponent(item.category)}`} className={`group relative h-44 overflow-hidden text-white delay-${index + 1} animate-fade-up`}>
              <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4">
                <strong className="block">{item.name}</strong>
                <small className="text-[10px] uppercase tracking-wider text-slate-200">{item.category === 'Beauty' ? countCategory('Beauty') + countCategory('Makeup') : countCategory(item.category)} pieces</small>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <SectionHeading eyebrow="Most requested" title="Trending now" link="Shop all" to="/shop" />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">{trending.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="mx-auto my-16 max-w-7xl overflow-hidden bg-brand px-8 py-16 text-white md:flex md:items-center md:justify-between md:px-16">
        <div className="max-w-lg animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent">The Velune edit / 2026</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Seasonal drop.<br /><em className="font-serif text-accent">Ten percent off.</em></h2>
          <p className="mt-4 text-sm text-slate-300">Use {PROMO_CODE} at checkout. Static demo — no live payment.</p>
          <ButtonLink to="/shop?filter=deals" variant="light" className="mt-8">Explore deals <ArrowUpRight size={16} /></ButtonLink>
        </div>
        <div className="mt-10 flex gap-4 font-semibold md:mt-0">
          {[['Days', clock.days], ['Hours', clock.hours], ['Minutes', clock.minutes]].map(([label, value]) => (
            <div key={String(label)} className="text-center">
              <div className="text-4xl">{String(value).padStart(2, '0')}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <SectionHeading eyebrow="Just landed" title="New arrivals" link="See everything" to="/shop?filter=new" />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">{arrived.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 border-y border-line px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
        <Link to="/shipping" className="flex items-start gap-4 transition hover:-translate-y-1">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-accent-dark"><Truck size={18} /></span>
          <span><strong className="block text-sm">Free shipping</strong><small className="mt-1 block text-[11px] uppercase tracking-wider text-muted">On orders over {money(FREE_SHIPPING)}</small></span>
        </Link>
        <Link to="/faq" className="flex items-start gap-4 transition hover:-translate-y-1">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-accent-dark"><ShieldCheck size={18} /></span>
          <span><strong className="block text-sm">Secure checkout</strong><small className="mt-1 block text-[11px] uppercase tracking-wider text-muted">Validated on this device only</small></span>
        </Link>
        <Link to="/returns" className="flex items-start gap-4 transition hover:-translate-y-1">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-accent-dark"><Package size={18} /></span>
          <span><strong className="block text-sm">Easy returns</strong><small className="mt-1 block text-[11px] uppercase tracking-wider text-muted">30-day return window</small></span>
        </Link>
        <Link to="/help" className="flex items-start gap-4 transition hover:-translate-y-1">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-accent-dark"><Headphones size={18} /></span>
          <span><strong className="block text-sm">Human support</strong><small className="mt-1 block text-[11px] uppercase tracking-wider text-muted">Real people, real replies</small></span>
        </Link>
      </section>
      <Newsletter />
    </main>
  );
}

function Newsletter() {
  const { subscribe } = useMixora();
  const [email, setEmail] = useState('');
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.includes('@')) return;
    subscribe(email.trim());
    setEmail('');
  }
  return (
    <section className="bg-[#efe8dc]">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-start gap-4">
          <Sparkles className="text-accent-dark" size={22} />
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent-dark">Stay informed</p>
            <h2 className="mt-1 text-3xl font-semibold text-brand">Join the Velune list.</h2>
            <p className="mt-1 text-sm text-muted">New drops and member-only notes. Saved in this browser only.</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex w-full max-w-md gap-3">
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email" className="flex-1 border-b border-slate-400 bg-transparent py-3 outline-none" />
          <button type="submit" className="bg-brand px-5 py-3 text-xs font-semibold text-white hover:bg-brand-dark">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
