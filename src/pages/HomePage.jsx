import HeroSlider from '../components/HeroSlider'
import Collection from '../components/Collection'
import Transformation from '../components/Transformation'
import VideoSection from '../components/VideoSection'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import { heroSlides } from '../content/heroSlides'

export default function HomePage() {
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
