import { Suspense, lazy } from 'react'
import { useRoute } from './router'
import HomePage from './pages/HomePage'
import './App.css'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ResidentialPage = lazy(() => import('./pages/ResidentialPage'))
const HousingsPage = lazy(() => import('./pages/HousingsPage'))
const CommercialPage = lazy(() => import('./pages/CommercialPage'))
const SchoolsPage = lazy(() => import('./pages/SchoolsPage'))
const HospitalityPage = lazy(() => import('./pages/HospitalityPage'))
const FarmHousePage = lazy(() => import('./pages/FarmHousePage'))

const HouSansargPage = lazy(() => import('./pages/projects/HouSansargPage'))
const HouPanchkulaPage = lazy(() => import('./pages/projects/HouPanchkulaPage'))
const ComDevraArchPage = lazy(() => import('./pages/projects/ComDevraArchPage'))
const ComFortofinoPage = lazy(() => import('./pages/projects/ComFortofinoPage'))
const ComMilkPointPage = lazy(() => import('./pages/projects/ComMilkPointPage'))
const SchMsSchoolPage = lazy(() => import('./pages/projects/SchMsSchoolPage'))
const SchJpInternationalPage = lazy(() => import('./pages/projects/SchJpInternationalPage'))
const HosCastleGreyPage = lazy(() => import('./pages/projects/HosCastleGreyPage'))
const FhGillsFarmhousePage = lazy(() => import('./pages/projects/FhGillsFarmhousePage'))
const FhNagraFarmhousePage = lazy(() => import('./pages/projects/FhNagraFarmhousePage'))
const Res121122Page = lazy(() => import('./pages/projects/Res121122Page'))
const ResVilla361Page = lazy(() => import('./pages/projects/ResVilla361Page'))
const ResVilla58Page = lazy(() => import('./pages/projects/ResVilla58Page'))
const ResVilla303Page = lazy(() => import('./pages/projects/ResVilla303Page'))
const ResVilla201DPage = lazy(() => import('./pages/projects/ResVilla201DPage'))
const ResKangsPage = lazy(() => import('./pages/projects/ResKangsPage'))
const ResSupreetPage = lazy(() => import('./pages/projects/ResSupreetPage'))
const ResMidhasPage = lazy(() => import('./pages/projects/ResMidhasPage'))
const ResMinzsPage = lazy(() => import('./pages/projects/ResMinzsPage'))

const routes = {
  '/about-us': AboutPage,
  '/contact': ContactPage,
  '/residential': ResidentialPage,
  '/housing': HousingsPage,
  '/housing/sansarg': HouSansargPage,
  '/housing/panchkula-housing': HouPanchkulaPage,
  '/commercial': CommercialPage,
  '/commercial/devra-architects': ComDevraArchPage,
  '/commercial/fortofino': ComFortofinoPage,
  '/commercial/milk-point': ComMilkPointPage,
  '/schools': SchoolsPage,
  '/schools/m-s-school': SchMsSchoolPage,
  '/schools/j-p-international': SchJpInternationalPage,
  '/hospitality': HospitalityPage,
  '/hospitality/castle-grey': HosCastleGreyPage,
  '/farm-houses': FarmHousePage,
  '/farm-houses/gill-s-farmhouse': FhGillsFarmhousePage,
  '/farm-houses/nagra-farmhouse': FhNagraFarmhousePage,
  '/residential/121-122': Res121122Page,
  '/residential/villa-361': ResVilla361Page,
  '/residential/villa-58': ResVilla58Page,
  '/residential/villa-303': ResVilla303Page,
  '/residential/villa-201d': ResVilla201DPage,
  '/residential/the-kangs': ResKangsPage,
  '/residential/col-supreet': ResSupreetPage,
  '/residential/the-midhas': ResMidhasPage,
  '/residential/the-minzs': ResMinzsPage,
}

function App() {
  const path = useRoute()
  const Page = routes[path] ?? HomePage

  return (
    <Suspense fallback={<div className="app-loading">Loading page...</div>}>
      <Page />
    </Suspense>
  )
}

export default App
