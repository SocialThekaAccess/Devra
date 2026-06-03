import HeroSlider from '../components/HeroSlider'
import Collection from '../components/Collection'
import Transformation from '../components/Transformation'
import VideoSection from '../components/VideoSection'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSlider />
        <Collection />
        <Transformation />
        <VideoSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
