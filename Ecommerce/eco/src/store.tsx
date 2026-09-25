import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { FREE_SHIPPING, PROMO_CODE, PROMO_RATE, SHIPPING_FEE, productById } from './data';
import type { Account, CartLine, Order, OrderItem } from './types';

const CART_KEY = 'velune-cart';
const WISH_KEY = 'velune-wishlist';
const USER_KEY = 'velune-user';
const SESSION_KEY = 'velune-session';
const ORDERS_KEY = 'velune-orders';
const NEWS_KEY = 'velune-newsletter';

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch {
    return fallback;
  }
}

async function hashPassword(password: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
  return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export type CheckoutInput = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  promo: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

type Store = {
  cart: CartLine[];
  wishlist: number[];
  account: Account | null;
  orders: Order[];
  toast: string;
  setToast: (message: string) => void;
  toggleWishlist: (id: number) => void;
  addToCart: (productId: number, quantity: number, size: string, color: string) => void;
  updateQuantity: (line: CartLine, amount: number) => void;
  removeCart: (line: CartLine) => void;
  subscribe: (email: string) => void;
  register: (name: string, email: string, password: string) => Promise<string | null>;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  placeOrder: (input: CheckoutInput) => { id: string } | { error: string };
  cartCount: number;
  subtotal: number;
  shipping: number;
};

const MixoraContext = createContext<Store | null>(null);

function lineKey(line: Pick<CartLine, 'productId' | 'size' | 'color'>) {
  return `${line.productId}|${line.size}|${line.color}`;
}

export function MixoraProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(() => readJson(CART_KEY, []));
  const [wishlist, setWishlist] = useState<number[]>(() => readJson(WISH_KEY, []));
  const [account, setAccount] = useState<Account | null>(() => {
    const email = localStorage.getItem(SESSION_KEY);
    if (!email) return null;
    return readJson<Account[]>(USER_KEY, []).find((item) => item.email === email) ?? null;
  });
  const [orders, setOrders] = useState<Order[]>(() => readJson(ORDERS_KEY, []));
  const [toast, setToast] = useState('');

  useEffect(() => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(WISH_KEY, JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)); }, [orders]);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const toggleWishlist = useCallback((id: number) => {
    setWishlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }, []);

  const addToCart = useCallback((productId: number, quantity: number, size: string, color: string) => {
    const product = productById(productId);
    if (!product) return;
    setCart((current) => {
      const key = lineKey({ productId, size, color });
      const existing = current.find((item) => lineKey(item) === key);
      return existing
        ? current.map((item) => lineKey(item) === key ? { ...item, quantity: item.quantity + quantity } : item)
        : [...current, { productId, quantity, size, color }];
    });
    setToast(`${product.name} added to your bag`);
  }, []);

  const updateQuantity = useCallback((line: CartLine, amount: number) => {
    setCart((current) => current.map((item) => lineKey(item) === lineKey(line) ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
  }, []);

  const removeCart = useCallback((line: CartLine) => {
    setCart((current) => current.filter((item) => lineKey(item) !== lineKey(line)));
  }, []);

  const subscribe = useCallback((email: string) => {
    const list = readJson<string[]>(NEWS_KEY, []);
    if (!list.includes(email)) localStorage.setItem(NEWS_KEY, JSON.stringify([...list, email]));
    setToast('You are on the list. Welcome.');
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    const users = readJson<Account[]>(USER_KEY, []);
    if (users.some((item) => item.email === email.toLowerCase())) return 'An account with that email already exists.';
    const next: Account = { name, email: email.toLowerCase(), passwordHash: await hashPassword(password) };
    localStorage.setItem(USER_KEY, JSON.stringify([...users, next]));
    localStorage.setItem(SESSION_KEY, next.email);
    setAccount(next);
    return null;
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const users = readJson<Account[]>(USER_KEY, []);
    const hash = await hashPassword(password);
    const found = users.find((item) => item.email === email.toLowerCase() && item.passwordHash === hash);
    if (!found) return 'Email or password is not right.';
    localStorage.setItem(SESSION_KEY, found.email);
    setAccount(found);
    return null;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setAccount(null);
  }, []);

  const subtotal = useMemo(() => cart.reduce((total, line) => {
    const product = productById(line.productId);
    return product ? total + product.price * line.quantity : total;
  }, 0), [cart]);
  const shipping = subtotal >= FREE_SHIPPING || subtotal === 0 ? 0 : SHIPPING_FEE;
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);

  const placeOrder: Store['placeOrder'] = useCallback((input) => {
    if (!cart.length) return { error: 'Your bag is empty.' };
    const digits = input.cardNumber.replace(/\s/g, '');
    if (digits.length < 13 || digits.length > 19 || !/^\d+$/.test(digits)) return { error: 'Enter a valid card number.' };
    if (!/^\d{2}\/\d{2}$/.test(input.expiry)) return { error: 'Use expiry as MM/YY.' };
    if (!/^\d{3,4}$/.test(input.cvc)) return { error: 'Enter a 3 or 4 digit CVC.' };
    const promo = input.promo.trim().toUpperCase();
    const discount = promo === PROMO_CODE ? subtotal * PROMO_RATE : 0;
    const items: OrderItem[] = cart.flatMap((line) => {
      const product = productById(line.productId);
      if (!product) return [];
      return [{ productId: product.id, name: product.name, image: product.image, quantity: line.quantity, price: product.price, size: line.size, color: line.color }];
    });
    const order: Order = {
      id: `VL-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      address: input.address,
      city: input.city,
      postcode: input.postcode,
      items,
      subtotal,
      shipping,
      discount,
      total: subtotal + shipping - discount,
      promo: discount ? promo : undefined,
      last4: digits.slice(-4),
    };
    setOrders((current) => [order, ...current]);
    setCart([]);
    return { id: order.id };
  }, [cart, shipping, subtotal]);

  const value = useMemo(() => ({
    cart, wishlist, account, orders, toast, setToast, toggleWishlist, addToCart, updateQuantity, removeCart,
    subscribe, register, login, logout, placeOrder, cartCount, subtotal, shipping,
  }), [account, addToCart, cart, cartCount, login, logout, orders, placeOrder, register, removeCart, shipping, subtotal, subscribe, toast, toggleWishlist, updateQuantity, wishlist]);

  return <MixoraContext.Provider value={value}>{children}</MixoraContext.Provider>;
}

export function useMixora() {
  const value = useContext(MixoraContext);
  if (!value) throw new Error('useMixora must be used inside MixoraProvider');
  return value;
}
