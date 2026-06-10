import HeroSlider from '../components/HeroSlider'
import Collection from '../components/Collection'
import Transformation from '../components/Transformation'
import VideoSection from '../components/VideoSection'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import { heroSlides } from '../content/heroSlides'
import { useMeta } from '../hooks/useMeta'
import { seoConfig } from '../seoConfig'

export default function HomePage() {
  useMeta(seoConfig['/'])

  return (
    <>
      <main>
        <HeroSlider slides={heroSlides} overlayVariant="soft" />
        <Collection />
        <Transformation />
        <VideoSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
