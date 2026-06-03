import { useRoute } from './router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ResidentialPage from './pages/ResidentialPage'
import HousingsPage from './pages/HousingsPage'
import CommercialPage from './pages/CommercialPage'
import SchoolsPage from './pages/SchoolsPage'
import HospitalityPage from './pages/HospitalityPage'
import FarmHousePage from './pages/FarmHousePage'
import './App.css'

function App() {
  const path = useRoute()

  if (path === '/about-us')      return <AboutPage />
  if (path === '/contact')       return <ContactPage />
  if (path === '/residential')   return <ResidentialPage />
  if (path === '/housing')       return <HousingsPage />
  if (path === '/commercial')    return <CommercialPage />
  if (path === '/schools')       return <SchoolsPage />
  if (path === '/hospitality')   return <HospitalityPage />
  if (path === '/farm-houses')   return <FarmHousePage />
  return <HomePage />
}

export default App
