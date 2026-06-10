import CategoryPage from './CategoryPage'
import heroImg from '../assets/commercial.jpg'
import fortofinoImg from '../assets/fortofino.avif'
import milkPointImg from '../assets/milk-point.avif'
import imgDevra from '../assets/projects/com-devra.jpg'

const projects = [
  {
    id: 1,
    size: '',
    year: '2025',
    type: 'Office',
    name: 'Devra Architects',
    location: 'PH-1 Cassia, New Chandigarh',
    img: imgDevra,
    to: '/services/commercial/devra-architects',
    overview: 'A refined workspace crafted with soft lighting, curved forms, and a calm neutral palette - shaping an environment that feels inviting, efficient, and elevated.',
  },
  {
    id: 2,
    size: '',
    year: '2024',
    type: 'Commercial',
    name: 'FortoFino',
    location: 'Srinagar',
    img: fortofinoImg,
    to: '/services/commercial/fortofino',
    overview: 'A refined boutique interior crafted in soft neutrals, sculpted arches, and warm lighting - creating an atmosphere of quiet luxury.',
  },
  {
    id: 3,
    size: '',
    year: '2020',
    type: 'Commercial',
    name: 'Milk Point',
    location: 'Chandigarh',
    img: milkPointImg,
    to: '/services/commercial/milk-point',
    overview: 'A refined retail interior blending warm materials, clean geometry, and controlled lighting - balancing display clarity with experiential movement.',
  },
]

export default function CommercialPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Commercial"
      description="Innovative commercial spaces designed for impact, functionality, and brand presence - built with precision and enduring architectural quality."
      projects={projects}
    />
  )
}
