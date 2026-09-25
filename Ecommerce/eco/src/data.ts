import type { Article, Category, Product } from './types';

export const images = {
  fashion: 'https://images.pexels.com/photos/28645956/pexels-photo-28645956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sneakers: 'https://images.pexels.com/photos/3944690/pexels-photo-3944690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sandals: 'https://images.pexels.com/photos/9267592/pexels-photo-9267592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  redSneakers: 'https://images.pexels.com/photos/14447345/pexels-photo-14447345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  interior: 'https://images.pexels.com/photos/12277013/pexels-photo-12277013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sofa: 'https://images.pexels.com/photos/11295890/pexels-photo-11295890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  living: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  foundation: 'https://images.pexels.com/photos/1776331/pexels-photo-1776331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  makeup: 'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  skincare: 'https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tech: 'https://images.pexels.com/photos/16247545/pexels-photo-16247545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  headphones: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  smartwatch: 'https://images.pexels.com/photos/9741348/pexels-photo-9741348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const colorNames: Record<string, string> = {
  '#171717': 'Ink',
  '#d9d2c7': 'Sand',
  '#d86f5b': 'Coral',
  '#c24a35': 'Cinnabar',
  '#f0e9df': 'Ivory',
  '#ad7b56': 'Cognac',
  '#141414': 'Noir',
  '#ded9cf': 'Stone',
  '#232323': 'Graphite',
  '#c7bcaa': 'Oat',
  '#6a7779': 'Slate',
  '#c49b7e': 'Warm beige',
  '#9a6e57': 'Umber',
  '#efd1b2': 'Porcelain',
};

export const shopCategories: Category[] = [
  'Shoes', 'Clothing', 'Makeup', 'Beauty', 'Electronics', 'Watches', 'Bags', 'Furniture', 'Home & Living', 'Accessories',
];

const reviews = {
  shoes: [
    { author: 'Maya R.', date: '12 Aug 2026', rating: 5, text: 'Light on the foot and still look sharp with jeans. I walk to work in these most days.' },
    { author: 'Jonah P.', date: '3 Jul 2026', rating: 4, text: 'True to size. The sole took a couple of wears to break in, then they disappeared on my feet.' },
    { author: 'Asha K.', date: '21 Jun 2026', rating: 5, text: 'Packaging was careful and the pair matched the photos. Will buy another colour.' },
  ],
  fashion: [
    { author: 'Elena V.', date: '29 Aug 2026', rating: 5, text: 'The fabric feels considered, not cheap. I get compliments every time I wear it.' },
    { author: 'Priya S.', date: '8 Aug 2026', rating: 4, text: 'Runs slightly roomy. I kept my usual size and it still looks tailored.' },
  ],
  beauty: [
    { author: 'Nora L.', date: '2 Sep 2026', rating: 5, text: 'Sits on the skin without looking heavy. The shade range actually includes me.' },
    { author: 'Camille D.', date: '18 Aug 2026', rating: 4, text: 'Lovely texture. A little goes a long way, so the bottle lasts.' },
  ],
  tech: [
    { author: 'Chris M.', date: '26 Aug 2026', rating: 5, text: 'Battery lasts a full workday plus a commute. Sound is clear without being harsh.' },
    { author: 'Ivy T.', date: '9 Aug 2026', rating: 4, text: 'Setup was simple. Wish the case were a touch slimmer, otherwise excellent.' },
  ],
  home: [
    { author: 'Sam W.', date: '15 Aug 2026', rating: 5, text: 'Changed the room immediately. Solid build and the finish is exactly as described.' },
    { author: 'Leah G.', date: '30 Jul 2026', rating: 5, text: 'Arrived well packed. Assembly was straightforward and it feels made to last.' },
  ],
};

const NPR_PER_USD = 154; // Nepal Rastra Bank sell rate ~153.84 on 16 Sep 2026

function npr(usd: number) {
  return Math.round(usd * NPR_PER_USD);
}

const catalog: Product[] = [
  { id: 1, name: 'Aero Run 2.0', category: 'Shoes', price: 129, originalPrice: 180, rating: 4.8, reviews: 128, image: images.sneakers, gallery: [images.sneakers, images.redSneakers, images.sandals], badge: 'Best seller', description: 'A light-as-air everyday runner built for long days and even longer walks.', colors: ['#171717', '#d9d2c7', '#d86f5b'], sizes: ['38', '39', '40', '41', '42'], reviewList: reviews.shoes },
  { id: 2, name: 'Sunday Canvas Low', category: 'Shoes', price: 84, originalPrice: 110, rating: 4.6, reviews: 84, image: images.redSneakers, gallery: [images.redSneakers, images.sneakers, images.sandals], badge: 'New', description: 'Your new off-duty essential with an easy, everyday silhouette.', colors: ['#c24a35', '#f0e9df'], sizes: ['36', '37', '38', '39', '40'], reviewList: reviews.shoes },
  { id: 3, name: 'Luna Leather Shoulder Bag', category: 'Bags', price: 168, originalPrice: 225, rating: 4.9, reviews: 96, image: images.fashion, gallery: [images.fashion, images.tech, images.interior], badge: 'Limited', description: 'A structured leather shoulder bag with room for the things you carry daily.', colors: ['#ad7b56', '#141414'], reviewList: reviews.fashion },
  { id: 4, name: 'Sculpted Silk Blazer', category: 'Clothing', price: 198, originalPrice: 260, rating: 4.7, reviews: 52, image: images.fashion, gallery: [images.fashion, images.sofa, images.living], description: 'A softly tailored layer that brings polish to every look.', colors: ['#ded9cf', '#232323'], sizes: ['XS', 'S', 'M', 'L', 'XL'], reviewList: reviews.fashion },
  { id: 5, name: 'Cloud Knit Sweater', category: 'Clothing', price: 96, originalPrice: 128, rating: 4.8, reviews: 73, image: images.living, gallery: [images.living, images.sofa, images.fashion], badge: 'New', description: 'A plush, relaxed knit that feels as good as it looks.', colors: ['#c7bcaa', '#6a7779'], sizes: ['XS', 'S', 'M', 'L'], reviewList: reviews.fashion },
  { id: 6, name: 'Vital Skin Tint', category: 'Makeup', price: 42, originalPrice: 52, rating: 4.6, reviews: 201, image: images.foundation, gallery: [images.foundation, images.makeup, images.skincare], badge: 'Trending', description: 'Breathable, buildable coverage for your most natural-looking finish.', colors: ['#c49b7e', '#9a6e57', '#efd1b2'], reviewList: reviews.beauty },
  { id: 7, name: 'Nocturne Eau de Parfum', category: 'Beauty', price: 88, originalPrice: 115, rating: 4.9, reviews: 64, image: images.makeup, gallery: [images.makeup, images.skincare, images.foundation], description: 'A warm, skin-close fragrance with notes of cedar, fig, and soft musk.', reviewList: reviews.beauty },
  { id: 8, name: 'Daily Ritual Set', category: 'Beauty', price: 58, originalPrice: 76, rating: 4.7, reviews: 117, image: images.skincare, gallery: [images.skincare, images.foundation, images.makeup], badge: 'Glow edit', description: 'A three-step ritual to keep your skin calm, hydrated, and luminous.', reviewList: reviews.beauty },
  { id: 9, name: 'Studio Wireless Headphones', category: 'Electronics', price: 149, originalPrice: 199, rating: 4.8, reviews: 340, image: images.headphones, gallery: [images.headphones, images.tech, images.smartwatch], badge: 'Best seller', description: 'Immersive sound, soft memory foam, and all-day battery for the studio or street.', reviewList: reviews.tech },
  { id: 10, name: 'Arc Smartwatch', category: 'Watches', price: 219, originalPrice: 289, rating: 4.5, reviews: 88, image: images.smartwatch, gallery: [images.smartwatch, images.headphones, images.tech], badge: 'New', description: 'A minimal smartwatch that keeps your day moving with thoughtful insights.', reviewList: reviews.tech },
  { id: 11, name: 'Form Desk Chair', category: 'Furniture', price: 289, originalPrice: 360, rating: 4.7, reviews: 42, image: images.interior, gallery: [images.interior, images.sofa, images.living], description: 'Ergonomic comfort with a sculptural silhouette for focused work.', reviewList: reviews.home },
  { id: 12, name: 'Calm Corner Lamp', category: 'Home & Living', price: 68, originalPrice: 92, rating: 4.8, reviews: 61, image: images.living, gallery: [images.living, images.interior, images.sofa], badge: 'Staff pick', description: 'Warm, ambient light for slow mornings and cozy evenings.', reviewList: reviews.home },
  { id: 13, name: 'Everyday Pack', category: 'Accessories', price: 74, originalPrice: 98, rating: 4.6, reviews: 39, image: images.tech, gallery: [images.tech, images.fashion, images.headphones], description: 'A clean, organized carryall for commutes, weekends, and everywhere between.', reviewList: reviews.fashion },
  { id: 14, name: 'Meridian Sideboard', category: 'Furniture', price: 640, originalPrice: 790, rating: 4.9, reviews: 26, image: images.interior, gallery: [images.interior, images.sofa, images.living], badge: 'New', description: 'A refined oak sideboard that gives your space a little more room to breathe.', reviewList: reviews.home },
  { id: 15, name: 'Contour Sunglasses', category: 'Accessories', price: 62, originalPrice: 85, rating: 4.7, reviews: 94, image: images.fashion, gallery: [images.fashion, images.sandals, images.tech], description: 'A softly angular frame with UV400 lenses and a lightweight feel.', reviewList: reviews.fashion },
  { id: 16, name: 'Cloudline Sofa', category: 'Home & Living', price: 1290, originalPrice: 1590, rating: 4.8, reviews: 17, image: images.sofa, gallery: [images.sofa, images.living, images.interior], badge: 'Made to order', description: 'Deep comfort and clean lines, designed to anchor the room.', reviewList: reviews.home },
];

export const products: Product[] = catalog.map((item) => ({
  ...item,
  price: npr(item.price),
  originalPrice: npr(item.originalPrice),
}));

export function money(value: number) {
  return `NPR ${Math.round(value).toLocaleString('en-US')}`;
}
export function discount(product: Product) { return Math.round((1 - product.price / product.originalPrice) * 100); }
export function productById(id: number) { return products.find((item) => item.id === id); }
export function colorLabel(hex: string) { return colorNames[hex.toLowerCase()] ?? hex; }
export function isDeal(product: Product) { return discount(product) >= 25; }
export function isNewArrival(product: Product) { return product.badge === 'New'; }
export function countCategory(name: Category) { return products.filter((item) => item.category === name).length; }
export function relatedProducts(id: number) {
  const current = products.find((item) => item.id === id);
  if (!current) return products.slice(0, 4);
  return [...products.filter((item) => item.id !== id && item.category === current.category), ...products.filter((item) => item.id !== id && item.category !== current.category)].slice(0, 4);
}
export const BRAND = 'Velune';
export const CARE_EMAIL = 'care@velune.store';

export const categoryCards: { name: string; category: Category; image: string }[] = [
  { name: 'Shoes', category: 'Shoes', image: images.sneakers },
  { name: 'Beauty', category: 'Beauty', image: images.skincare },
  { name: 'Fashion', category: 'Clothing', image: images.fashion },
  { name: 'Electronics', category: 'Electronics', image: images.tech },
  { name: 'Watches', category: 'Watches', image: images.smartwatch },
  { name: 'Home', category: 'Home & Living', image: images.interior },
];

export const slides = [
  { eyebrow: 'The new everyday', title: 'Everything you love, in one place.', text: 'Discover considered pieces for the way you live, move, and express yourself.', image: images.fashion, tone: 'light' },
  { eyebrow: '01 / New season', title: 'Your edit starts here.', text: 'Fresh silhouettes, effortless layers, and the little details that change everything.', image: images.sofa, tone: 'dark' },
  { eyebrow: 'The home refresh', title: 'Make space for better.', text: 'Objects with purpose, made to bring calm and character home.', image: images.interior, tone: 'light' },
];

export const SALE_ENDS_AT = Date.parse('2026-10-31T23:59:59+05:45');
export const PROMO_CODE = 'VELUNE10';
export const PROMO_RATE = 0.1;
export const FREE_SHIPPING = npr(100);
export const SHIPPING_FEE = npr(12);

export const articles: Article[] = [
  {
    slug: 'how-we-edit',
    title: 'How we choose what belongs at Velune',
    date: '1 Sep 2026',
    excerpt: 'Fewer, better things — and the questions we ask before anything lands in the shop.',
    image: images.fashion,
    body: [
      'Every piece on Velune has to earn its place. We look for objects you will still want in two years, not two weeks.',
      'That means checking materials, fit, and whether the thing actually solves a daily problem. If it is only photogenic, it does not ship.',
      'The mix — shoes beside skincare beside a lamp — is deliberate. Life is not siloed, and neither is a good home.',
    ],
  },
  {
    slug: 'care-notes',
    title: 'A short guide to keeping things longer',
    date: '18 Aug 2026',
    excerpt: 'Simple care that extends the life of knits, leather, and the objects you live with.',
    image: images.living,
    body: [
      'Most damage happens from heat, water, and rushing. Air knits flat. Wipe leather with a barely damp cloth. Dust wood with the grain.',
      'Wash less than you think. Spot-clean first. When you do wash, cold water and a bag for anything with structure.',
      'If something fails early, write to us. We would rather repair or replace than have you live with a disappointment.',
    ],
  },
  {
    slug: 'studio-visit',
    title: 'Inside the quiet of a well-made chair',
    date: '4 Aug 2026',
    excerpt: 'A visit to the workshop behind the Form Desk Chair, and why comfort is a design problem.',
    image: images.interior,
    body: [
      'The Form Desk Chair started as a sketch for people who sit longer than they admit. Lumbar support without looking clinical.',
      'We watched three prototypes fail before the seat depth felt right. The one you can buy now is that fourth try.',
      'Good furniture should disappear once you sit down. That is the whole brief.',
    ],
  },
];

export const faqs = [
  { q: 'How long does shipping take?', a: 'Domestic orders usually leave within 2 business days and arrive in 3–6. Made-to-order furniture is 4–8 weeks. You will get tracking as soon as a label is created.' },
  { q: 'What is the return window?', a: '30 days from delivery for unused items in original condition. Beauty that has been opened cannot return for hygiene reasons, unless it is faulty.' },
  { q: 'Do you ship internationally?', a: 'Yes, to most countries. Duties and taxes may be collected at delivery depending on your region.' },
  { q: 'Can I change or cancel an order?', a: 'Write to care@velune.store as soon as you can. We will stop the order if it has not been packed.' },
  { q: 'Is VELUNE10 a real code?', a: 'Yes. VELUNE10 takes 10% off merchandise in this demo checkout. It does not stack with other promotions.' },
];

export const jobs = [
  { title: 'Buyer, Home', location: 'Lisbon / remote mix', blurb: 'Shape the furniture and objects edit. You know a good chair when you sit in it.' },
  { title: 'Customer care lead', location: 'London', blurb: 'Run a small team that answers like a person, not a script.' },
];
