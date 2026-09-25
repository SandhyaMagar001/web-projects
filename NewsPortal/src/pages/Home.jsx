import SEO from '../components/SEO'
import FeaturedNews from '../components/FeaturedNews'
import LatestNews from '../components/LatestNews'
import PhotoVideoNews from '../components/PhotoVideoNews'
import Sidebar from '../components/Sidebar'
import Reveal from '../components/Reveal'
import { useLang } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <SEO
        title={`${t.brand} | Nepal News`}
        description="Latest news from Nepal — national, politics, business, sports, technology and world — in English and Nepali."
        path="/"
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <FeaturedNews />
          </Reveal>
          <Reveal delay={80}>
            <PhotoVideoNews />
          </Reveal>
          <Reveal delay={120}>
            <LatestNews />
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Sidebar />
        </Reveal>
      </div>
    </>
  )
}
