import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/com-devra-arch-1.jpg'
import img2 from '../../assets/projects/com-devra-arch-2.jpg'
import img3 from '../../assets/projects/com-devra-arch-3.jpg'
import img4 from '../../assets/projects/com-devra-arch-4.jpg'
import img5 from '../../assets/projects/com-devra-arch-5.jpg'
import img6 from '../../assets/projects/com-devra-arch-6.jpg'
import img7 from '../../assets/projects/com-devra-arch-7.avif'
import img8 from '../../assets/projects/com-devra-arch-8.jpg'
import img9 from '../../assets/projects/com-devra-arch-9.jpg'

export default function ComDevraArchPage() {
  return (
    <ProjectDetailPage
      backTo="/services/commercial"
      backLabel="Commercial"
      title="Devra Architects"
      location="PH-1 Cassia, New Chandigarh"
      category="Commercial"
      size=""
      year="2025"
      overview="A refined workspace crafted with soft lighting, curved forms, and a calm neutral palette—shaping an environment that feels inviting, efficient, and elevated. Every zone is designed for comfort and flow, offering a modern workplace experience that blends functionality with quiet luxury."
      overview2="From reception to work bays, meeting rooms, and lounges, the interiors express a unified design language of warm textures, seamless lines, and ambient lighting. Thoughtful spatial planning brings clarity and comfort to daily operations, creating a workspace that inspires focus, collaboration, and a sense of effortless sophistication."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
