import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
