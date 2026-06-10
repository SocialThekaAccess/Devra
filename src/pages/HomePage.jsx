import HeroSlider from '../components/HeroSlider'
import Collection from '../components/Collection'
import Transformation from '../components/Transformation'
import VideoSection from '../components/VideoSection'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import { heroSlides } from '../content/heroSlides'
import { useMeta } from '../hooks/useMeta'

export default function HomePage() {
  useMeta({
    title:
      'Best Architects in Chandigarh | Luxury Architecture & Interior Design | Devra Architects',
    description:
      'Devra Architects creates luxury residential, commercial, hospitality & housing projects across Chandigarh, Mohali & Punjab. 475+ projects delivered with innovative architecture & timeless design.',
  })

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
