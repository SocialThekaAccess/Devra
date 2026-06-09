import HeroSlider from '../components/HeroSlider'
import Collection from '../components/Collection'
import Transformation from '../components/Transformation'
import VideoSection from '../components/VideoSection'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import slider1 from '../assets/slider1.jpeg'
import slider2 from '../assets/slider2.jpeg'
import slider3 from '../assets/slider3.jpeg'

const homeSlides = [
  {
    id: 1,
    src: slider1,
    fallback: 'linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)',
  },
  {
    id: 2,
    src: slider2,
    fallback: 'linear-gradient(135deg, #1a2a3a 0%, #3d5a4a 100%)',
  },
  {
    id: 3,
    src: slider3,
    fallback: 'linear-gradient(135deg, #263040 0%, #4a5568 100%)',
  },
]

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSlider slides={homeSlides} overlayVariant="soft" />
        <Collection />
        <Transformation />
        <VideoSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
