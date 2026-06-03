import CategoryPage from './CategoryPage'
import heroImg      from '../assets/commercial.jpg'
import imgDevra     from '../assets/projects/com-devra.jpg'
import imgDevra2    from '../assets/projects/com-devra-2.jpg'
import imgDevra3    from '../assets/projects/com-devra-3.jpg'

const projects = [
  {
    id: 1,
    size: '',
    year: '2025',
    type: 'Office',
    name: 'Devra Architects Studio',
    location: 'PH-1 Cassia, New Chandigarh',
    img: imgDevra,
    overview: 'A refined workspace crafted with soft lighting, curved forms, and a calm neutral palette — shaping an environment that feels inviting, efficient, and elevated.',
  },
  {
    id: 2,
    size: '',
    year: '2025',
    type: 'Office',
    name: 'Devra Studio — Interior',
    location: 'PH-1 Cassia, New Chandigarh',
    img: imgDevra2,
    overview: 'From reception to work bays, meeting rooms, and lounges, the interiors express a unified design language of warm textures, seamless lines, and ambient lighting.',
  },
  {
    id: 3,
    size: '',
    year: '2025',
    type: 'Office',
    name: 'Devra Studio — Workbay',
    location: 'PH-1 Cassia, New Chandigarh',
    img: imgDevra3,
    overview: 'Thoughtful spatial planning brings clarity and comfort to daily operations, creating a workspace that inspires focus, collaboration, and effortless sophistication.',
  },
  {
    id: 4,
    size: '',
    year: '2024',
    type: 'Commercial',
    name: 'FortoFino',
    location: 'Srinagar',
    img: heroImg,
    overview: 'A refined boutique interior crafted in soft neutrals, sculpted arches, and warm lighting — creating an atmosphere of quiet luxury.',
  },
  {
    id: 5,
    size: '',
    year: '2020',
    type: 'Commercial',
    name: 'Milk Point',
    location: 'Chandigarh',
    img: heroImg,
    overview: 'A refined retail interior blending warm materials, clean geometry, and controlled lighting — balancing display clarity with experiential movement.',
  },
]

export default function CommercialPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Commercial"
      description="Innovative commercial spaces designed for impact, functionality, and brand presence — built with precision and enduring architectural quality."
      projects={projects}
    />
  )
}
