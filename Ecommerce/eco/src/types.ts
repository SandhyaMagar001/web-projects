export type Category =
  | 'Shoes'
  | 'Clothing'
  | 'Makeup'
  | 'Beauty'
  | 'Electronics'
  | 'Watches'
  | 'Bags'
  | 'Furniture'
  | 'Home & Living'
  | 'Accessories';

export type Review = { author: string; date: string; rating: number; text: string };

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  badge?: string;
  description: string;
  colors?: string[];
  sizes?: string[];
  reviewList: Review[];
};

export type CartLine = {
  productId: number;
  quantity: number;
  size: string;
  color: string;
};

export type Account = { name: string; email: string; passwordHash: string };

export type OrderItem = {
  productId: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  size: string;
  color: string;
};

export type Order = {
  id: string;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  promo?: string;
  last4: string;
};

export type Article = { slug: string; title: string; date: string; excerpt: string; body: string[]; image: string };
