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

// Residential project detail pages
import Res121122Page from './pages/projects/Res121122Page'
import ResVilla361Page from './pages/projects/ResVilla361Page'
import ResVilla58Page from './pages/projects/ResVilla58Page'
import ResVilla303Page from './pages/projects/ResVilla303Page'
import ResVilla201DPage from './pages/projects/ResVilla201DPage'
import ResKangsPage from './pages/projects/ResKangsPage'
import ResSupreetPage from './pages/projects/ResSupreetPage'
import ResMidhasPage from './pages/projects/ResMidhasPage'
import ResMinzsPage from './pages/projects/ResMinzsPage'

import './App.css'

function App() {
  const path = useRoute()

  // Category pages
  if (path === '/about-us')      return <AboutPage />
  if (path === '/contact')       return <ContactPage />
  if (path === '/residential')   return <ResidentialPage />
  if (path === '/housing')       return <HousingsPage />
  if (path === '/commercial')    return <CommercialPage />
  if (path === '/schools')       return <SchoolsPage />
  if (path === '/hospitality')   return <HospitalityPage />
  if (path === '/farm-houses')   return <FarmHousePage />

  // Residential project detail pages
  if (path === '/residential/121-122')       return <Res121122Page />
  if (path === '/residential/villa-361')     return <ResVilla361Page />
  if (path === '/residential/villa-58')      return <ResVilla58Page />
  if (path === '/residential/villa-303')     return <ResVilla303Page />
  if (path === '/residential/villa-201d')    return <ResVilla201DPage />
  if (path === '/residential/the-kangs')     return <ResKangsPage />
  if (path === '/residential/col-supreet')   return <ResSupreetPage />
  if (path === '/residential/the-midhas')    return <ResMidhasPage />
  if (path === '/residential/the-minzs')     return <ResMinzsPage />

  return <HomePage />
}

export default App
