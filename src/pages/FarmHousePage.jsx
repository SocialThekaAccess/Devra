import CategoryPage from './CategoryPage'
import heroImg   from '../assets/farmHouse.avif'
import imgGills  from '../assets/projects/fh-gills.avif'
import imgNagra  from '../assets/nagra-farmhouse.avif'

const projects = [
  {
    id: 1,
    size: '1200 gaj',
    year: '2020',
    type: 'Farm House',
    name: "Gill's Farmhouse",
    location: 'Baddi Road',
    img: imgGills,
    to: '/services/farm-houses/gill-s-farmhouse',
    overview: "This farmhouse is designed as a composition of solid brick volumes and light, open frames, creating a balance between mass and transparency. Perforated jaali walls and deep recesses introduce layered depth, allowing natural light to filter softly through spaces.",
  },
  {
    id: 2,
    size: '2000 gaj',
    year: '2021',
    type: 'Farm House',
    name: 'Nagra Farmhouse',
    location: 'Chandigarh',
    img: imgNagra,
    to: '/services/farm-houses/nagra-farmhouse',
    overview: 'This farmhouse is conceived as a timeless courtyard residence, where classical proportions and arched colonnades define a strong architectural rhythm. Soft plastered volumes, symmetrical compositions, and deep verandahs create a sense of elegance and permanence.',
  },
]

export default function FarmHousePage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Farm House"
      description="Crafting refined farmhouse environments where architecture dissolves into nature, balancing openness, privacy, and material warmth to create calm, luxurious living experiences rooted in landscape and light."
      projects={projects}
    />
  )
}
