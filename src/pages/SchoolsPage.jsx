import CategoryPage from './CategoryPage'
import heroImg from '../assets/schools.avif'
import imgMs1  from '../assets/projects/sch-ms-school.avif'
import { seoConfig } from '../seoConfig'

const projects = [
  {
    id: 1,
    size: '',
    year: '',
    type: 'School',
    name: 'M S School',
    location: 'India',
    img: imgMs1,
    to: '/services/schools/m-s-school',
    overview: 'Planned as a structured yet breathable campus — clear linear planning and layered façades create a strong sense of order. Controlled openings balance light, ventilation, and privacy.',
  },
  {
    id: 2,
    size: '',
    year: '',
    type: 'School',
    name: 'J P International',
    location: 'Rohtak, Haryana',
    img: heroImg,
    to: '/services/schools/j-p-international',
    overview: 'A contemporary institutional landmark — strong linear planning and a layered façade of exposed brick, concrete bands, and dynamic screening balances openness with control.',
  },
]

export default function SchoolsPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="School Architects in Chandigarh"
      description="Designing future-ready learning environments where architecture inspires curiosity, nurtures growth, and shapes young minds with clarity, comfort, and purpose."
      projects={projects}
      seo={seoConfig['/school-architects-chandigarh']}
    />
  )
}
