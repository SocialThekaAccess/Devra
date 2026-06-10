import { lazy } from 'react'
import { homeSectionPaths } from './routeConfig.js'

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

export const routes = {
  '/about-us': AboutPage,
  '/contact': ContactPage,
  '/services/residential': ResidentialPage,
  '/services/housing': HousingsPage,
  '/services/housing/sansarg': HouSansargPage,
  '/services/housing/panchkula-housing': HouPanchkulaPage,
  '/services/commercial': CommercialPage,
  '/services/commercial/devra-architects': ComDevraArchPage,
  '/services/commercial/fortofino': ComFortofinoPage,
  '/services/commercial/milk-point': ComMilkPointPage,
  '/services/schools': SchoolsPage,
  '/services/schools/m-s-school': SchMsSchoolPage,
  '/services/schools/j-p-international': SchJpInternationalPage,
  '/services/hospitality': HospitalityPage,
  '/services/hospitality/castle-grey': HosCastleGreyPage,
  '/services/farm-houses': FarmHousePage,
  '/services/farm-houses/gill-s-farmhouse': FhGillsFarmhousePage,
  '/services/farm-houses/nagra-farmhouse': FhNagraFarmhousePage,
  '/services/residential/121-122': Res121122Page,
  '/services/residential/villa-361': ResVilla361Page,
  '/services/residential/villa-58': ResVilla58Page,
  '/services/residential/villa-303': ResVilla303Page,
  '/services/residential/villa-201d': ResVilla201DPage,
  '/services/residential/the-kangs': ResKangsPage,
  '/services/residential/col-supreet': ResSupreetPage,
  '/services/residential/the-midhas': ResMidhasPage,
  '/services/residential/the-minzs': ResMinzsPage,
}

export const routePaths = [...homeSectionPaths, ...Object.keys(routes)]
