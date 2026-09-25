import { useEffect, useState, type FormEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react';
import { shopCategories } from '../data';
import { useMixora } from '../store';
import { Logo } from './Logo';

export function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname, search]);
  return null;
}

export function Header() {
  const { cartCount, wishlist } = useMixora();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filter = params.get('filter');
  const category = params.get('category');
  const onShop = location.pathname === '/shop';

  useEffect(() => { setOpen(false); }, [location.pathname, location.search]);

  function search(event: FormEvent) {
    event.preventDefault();
    navigate(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : '/shop');
  }

  const link = (active: boolean) =>
    `text-sm font-medium transition hover:text-brand ${active ? 'text-brand' : 'text-muted'}`;

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <header className="border-b border-line bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 md:px-8">
          <button type="button" className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
          <Link to="/" aria-label="Velune home"><Logo /></Link>
          <nav className="ml-6 hidden items-center gap-6 lg:flex">
            <NavLink to="/" end className={({ isActive }) => link(isActive)}>Home</NavLink>
            <Link className={link(onShop && !filter && !category)} to="/shop">Shop</Link>
            <div className="group relative">
              <Link className={`${link(onShop && Boolean(category))} inline-flex items-center gap-1`} to="/shop">
                Categories <ChevronDown size={14} />
              </Link>
              <div className="invisible absolute left-0 top-full z-20 grid w-72 grid-cols-2 gap-1 border border-line bg-white p-3 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {shopCategories.map((item) => (
                  <Link key={item} to={`/shop?category=${encodeURIComponent(item)}`} className="px-2 py-2 text-sm text-muted hover:bg-paper hover:text-brand">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <Link className={link(onShop && filter === 'deals')} to="/shop?filter=deals">Deals</Link>
            <Link className={link(onShop && filter === 'new')} to="/shop?filter=new">New arrivals</Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <form onSubmit={search} className="hidden items-center gap-2 border-b border-line pb-1 sm:flex">
              <Search size={16} className="text-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                aria-label="Search products"
                className="w-36 bg-transparent text-sm outline-none md:w-44"
              />
            </form>
            <Link to="/wishlist" aria-label="Wishlist" className="relative text-ink hover:text-brand">
              <Heart size={20} />
              {wishlist.length > 0 && <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-brand text-[9px] text-white">{wishlist.length}</span>}
            </Link>
            <Link to="/cart" aria-label="Shopping bag" className="relative text-ink hover:text-brand">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-brand text-[9px] text-white">{cartCount}</span>}
            </Link>
            <Link to="/account" aria-label="Account" className="hidden text-ink hover:text-brand sm:block">
              <UserRound size={20} />
            </Link>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 overflow-auto bg-white p-5 animate-fade-in lg:hidden">
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}><X size={22} /></button>
          </div>
          <form onSubmit={search} className="mb-6 flex items-center gap-2 border-b border-line pb-2">
            <Search size={16} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" className="w-full bg-transparent outline-none" />
          </form>
          {[['Home', '/'], ['Shop', '/shop'], ['Deals', '/shop?filter=deals'], ['New arrivals', '/shop?filter=new'], ['Account', '/account'], ['Help', '/help']].map(([label, href]) => (
            <Link key={href} to={href} className="flex items-center justify-between border-b border-line py-4 text-2xl font-medium">
              {label}
            </Link>
          ))}
          <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-accent-dark">Categories</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {shopCategories.map((item) => (
              <Link key={item} to={`/shop?category=${encodeURIComponent(item)}`} className="border border-line px-3 py-2 text-sm">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
