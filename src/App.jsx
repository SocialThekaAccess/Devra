import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Collection from './components/Collection'
import Transformation from './components/Transformation'
import VideoSection from './components/VideoSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
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

export default App
