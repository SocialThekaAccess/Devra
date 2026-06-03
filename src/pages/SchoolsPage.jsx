import CategoryPage from './CategoryPage'
import heroImg        from '../assets/schools.avif'
import imgMs1         from '../assets/projects/sch-ms-school.png'
import imgMs2         from '../assets/projects/sch-ms-school-2.png'
import imgMs3         from '../assets/projects/sch-ms-school-3.png'

const projects = [
  {
    id: 1,
    size: '',
    year: '',
    type: 'School',
    name: 'M S School',
    location: 'India',
    img: imgMs1,
    overview: 'Planned as a structured yet breathable campus — clear linear planning and layered façades create a strong sense of order. Controlled openings balance light, ventilation, and privacy.',
  },
  {
    id: 2,
    size: '',
    year: '',
    type: 'School',
    name: 'M S School — Elevation',
    location: 'India',
    img: imgMs2,
    overview: 'The elevation blends warm materials with contemporary detailing, giving the institution a grounded yet progressive identity.',
  },
  {
    id: 3,
    size: '',
    year: '',
    type: 'School',
    name: 'M S School — Campus View',
    location: 'India',
    img: imgMs3,
    overview: 'Shaded corridors and landscape edges enhance movement and interaction, resulting in a learning environment that is efficient, climate-responsive, and quietly expressive.',
  },
  {
    id: 4,
    size: '',
    year: '',
    type: 'School',
    name: 'J P International',
    location: 'Rohtak, Haryana',
    img: heroImg,
    overview: 'A contemporary institutional landmark — strong linear planning and a layered façade of exposed brick, concrete bands, and dynamic screening balances openness with control.',
  },
]

export default function SchoolsPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Schools"
      description="Designing future-ready learning environments where architecture inspires curiosity, nurtures growth, and shapes young minds with clarity, comfort, and purpose."
      projects={projects}
    />
  )
}
