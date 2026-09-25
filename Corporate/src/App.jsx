import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { InsightDetail } from './pages/InsightDetail'
import { Insights } from './pages/Insights'
import { NotFound } from './pages/NotFound'
import { ProjectDetail } from './pages/ProjectDetail'
import { Projects } from './pages/Projects'
import { ServiceDetail } from './pages/ServiceDetail'
import { Services } from './pages/Services'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightDetail />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
