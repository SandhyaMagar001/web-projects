import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Category from './pages/Category'
import Article from './pages/Article'
import Search from './pages/Search'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/news/:id" element={<Article />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
