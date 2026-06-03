import { useRoute } from './router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const path = useRoute()

  if (path === '/about-us') return <AboutPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}

export default App
