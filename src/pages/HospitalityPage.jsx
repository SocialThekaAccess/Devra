import CategoryPage from './CategoryPage'
import heroImg from '../assets/hospitality.avif'
import imgCg1 from '../assets/projects/hos-castle-grey.avif'

const projects = [
  {
    id: 1,
    size: '135 GAJ',
    year: '2019',
    type: 'Hospitality',
    name: 'Castle Grey',
    location: 'Rohtak, Haryana',
    img: imgCg1,
    to: '/services/hospitality/castle-grey',
    overview: 'A refined space where geometry and warmth are balanced through slatted walls, layered ceilings, and suspended greens.',
  },
]

export default function HospitalityPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Hospitality"
      description="Hospitality spaces focused on comfort, flow, and atmosphere - blending warm materials, lighting, and clear planning to create memorable dining and social experiences."
      projects={projects}
    />
  )
}
