import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/hou-panchkula-1.avif'
import img2 from '../../assets/projects/hou-panchkula-2.avif'
import img3 from '../../assets/projects/hou-panchkula-3.avif'
import img4 from '../../assets/projects/hou-panchkula-4.avif'
import img5 from '../../assets/projects/hou-panchkula-5.avif'
import img6 from '../../assets/projects/hou-panchkula-6.avif'
import img7 from '../../assets/projects/hou-panchkula-7.avif'
import img8 from '../../assets/projects/hou-panchkula-8.avif'

export default function HouPanchkulaPage() {
  return (
    <ProjectDetailPage
      backTo="/housing"
      backLabel="Housing"
      title="Panchkula Housing"
      location="Panchkula"
      category="Housing"
      size=""
      year="2024"
      overview="A contemporary housing development defined by clean geometry, functional planning, and an articulated façade. Cantilevered balconies, framed edges, and vertical breaks give the towers a distinct identity while ensuring ample light, ventilation, and sweeping views. The architecture balances efficiency with elegance, creating a refined yet practical living environment."
      overview2="The interiors bring a quiet harmony—warm light, natural textures, and thoughtful details shaping spaces that feel alive, lived in, and beautifully at ease."
      images={[img1, img2, img3, img4, img5, img6, img7, img8]}
    />
  )
}
