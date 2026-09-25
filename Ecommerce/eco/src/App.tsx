import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header, ScrollToTop } from './components/Header';
import { Toast } from './components/Toast';
import { AccountPage, CheckoutPage, OrderPage } from './pages/CheckoutPage';
import { CartPage, WishlistPage } from './pages/CartPage';
import { HomePage } from './pages/HomePage';
import {
  AboutPage, ArticlePage, CareersPage, ContactPage, FaqPage, HelpPage, JournalPage,
  PrivacyPage, ReturnsPage, ShippingPage, StoryPage, TermsPage,
} from './pages/InfoPages';
import { ProductPage } from './pages/ProductPage';
import { ShopPage } from './pages/ShopPage';
import { MixoraProvider } from './store';

function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen pt-[72px]">
      <Header />
      <Outlet />
      {pathname !== '/checkout' && <Footer />}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MixoraProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </MixoraProvider>
    </BrowserRouter>
  );
}
