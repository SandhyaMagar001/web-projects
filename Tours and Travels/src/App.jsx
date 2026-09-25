import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import DestinationDetail from "./pages/DestinationDetail";
import Destinations from "./pages/Destinations";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Packages from "./pages/Packages";
import TourDetail from "./pages/TourDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:slug" element={<DestinationDetail />} />
        <Route path="packages" element={<Packages />} />
        <Route path="tours/:slug" element={<TourDetail />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Book />} />
        <Route path="book/:slug" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
