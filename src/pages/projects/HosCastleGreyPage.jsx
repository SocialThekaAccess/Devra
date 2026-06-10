import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/hos-cg-1.avif'
import img2 from '../../assets/projects/hos-cg-2.avif'
import img3 from '../../assets/projects/hos-cg-3.avif'
import img4 from '../../assets/projects/hos-cg-4.avif'
import img5 from '../../assets/projects/hos-cg-5.avif'
import img6 from '../../assets/projects/hos-cg-6.avif'
import img7 from '../../assets/projects/hos-cg-7.avif'
import img8 from '../../assets/projects/hos-cg-8.avif'
import img9 from '../../assets/projects/hos-cg-9.avif'

export default function HosCastleGreyPage() {
  return (
    <ProjectDetailPage
      backTo="/services/hospitality"
      backLabel="Hospitality"
      title="Castle Grey"
      location="Rohtak, Haryana"
      category="Hospitality"
      size="135 GAJ"
      year="2019"
      overview="A refined space where geometry and warmth are balanced through slatted walls, layered ceilings, and suspended greens. Filtered daylight enhances textures, while earthy tones create a calm, crafted, and upscale dining experience."
      overview2="A modern interior defined by clean lines, exposed systems, and precise lighting, softened by cascading greens. Dark ceilings and warm furnishings add depth, creating an intimate yet open, sophisticated environment."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
