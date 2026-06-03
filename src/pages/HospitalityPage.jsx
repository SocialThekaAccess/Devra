import CategoryPage from './CategoryPage'
import heroImg   from '../assets/hospitality.avif'
import imgCg1    from '../assets/projects/hos-castle-grey.jpg'
import imgCg2    from '../assets/projects/hos-castle-grey-2.jpg'
import imgCg3    from '../assets/projects/hos-castle-grey-3.jpg'
import imgCg4    from '../assets/projects/hos-castle-grey-4.jpg'
import imgCg5    from '../assets/projects/hos-castle-grey-5.jpg'

const projects = [
  {
    id: 1,
    size: '135 GAJ',
    year: '2019',
    type: 'Hospitality',
    name: 'Castle Grey',
    location: 'Rohtak, Haryana',
    img: imgCg1,
    overview: 'A refined space where geometry and warmth are balanced through slatted walls, layered ceilings, and suspended greens.',
  },
  {
    id: 2,
    size: '135 GAJ',
    year: '2019',
    type: 'Hospitality',
    name: 'Castle Grey — Dining',
    location: 'Rohtak, Haryana',
    img: imgCg2,
    overview: 'Filtered daylight enhances textures, while earthy tones create a calm, crafted, and upscale dining experience.',
  },
  {
    id: 3,
    size: '135 GAJ',
    year: '2019',
    type: 'Hospitality',
    name: 'Castle Grey — Lounge',
    location: 'Rohtak, Haryana',
    img: imgCg3,
    overview: 'Dark ceilings and warm furnishings add depth, creating an intimate yet open, sophisticated environment.',
  },
  {
    id: 4,
    size: '135 GAJ',
    year: '2019',
    type: 'Hospitality',
    name: 'Castle Grey — Bar',
    location: 'Rohtak, Haryana',
    img: imgCg4,
    overview: 'A modern interior defined by clean lines, exposed systems, and precise lighting, softened by cascading greens.',
  },
  {
    id: 5,
    size: '135 GAJ',
    year: '2019',
    type: 'Hospitality',
    name: 'Castle Grey — Detail',
    location: 'Rohtak, Haryana',
    img: imgCg5,
    overview: 'Every corner reflects the craft and intention behind the design — a seamless blend of material, light, and space.',
  },
]

export default function HospitalityPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Hospitality"
      description="Hospitality spaces focused on comfort, flow, and atmosphere — blending warm materials, lighting, and clear planning to create memorable dining and social experiences."
      projects={projects}
    />
  )
}
