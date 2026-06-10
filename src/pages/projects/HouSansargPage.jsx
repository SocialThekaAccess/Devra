import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/hou-sansarg-1.avif'
import img2 from '../../assets/projects/hou-sansarg-2.avif'
import img3 from '../../assets/projects/hou-sansarg-3.avif'
import img4 from '../../assets/projects/hou-sansarg-4.avif'
import img5 from '../../assets/projects/hou-sansarg-5.avif'
import img6 from '../../assets/projects/hou-sansarg-6.avif'
import img7 from '../../assets/projects/hou-sansarg-7.avif'
import img8 from '../../assets/projects/hou-sansarg-8.avif'
import img9 from '../../assets/projects/hou-sansarg-9.avif'

export default function HouSansargPage() {
  return (
    <ProjectDetailPage
      backTo="/services/housing"
      backLabel="Housing"
      title="Sansarg"
      location="PH-1 Cassia, New Chandigarh"
      category="Housing"
      size="20,000 SQM"
      year="2021"
      overview="A dynamic housing development defined by sculpted terraces, patterned balconies, and warm material tones. The architecture is shaped to maximise openness—every residence enjoys extended outdoor decks, natural light, and wide community views. Layered forms, rhythmic facades, and landscaped edges create a structure that feels iconic yet comfortably livable."
      overview2="Designed as a socially active neighbourhood, the project integrates shared greens, walkways, wellness pockets, and interactive community zones. Large terraces, elevated courts, and semi-open lounges encourage connection and everyday activity. The environment feels warm, vibrant, and inclusive—shaping a lifestyle where residents experience both privacy and togetherness."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
