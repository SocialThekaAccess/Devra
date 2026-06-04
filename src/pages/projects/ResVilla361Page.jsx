import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-361.jpg'
import img2 from '../../assets/projects/res-villa-361-2.jpg'
import img3 from '../../assets/projects/res-villa-361-3.jpg'

export default function ResVilla361Page() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="Villa 361"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="500 SQYD"
      year="2021"
      overview="This home blends warm stone, clean modern lines, and generous glazing to create a calm, contemporary atmosphere. Inside, earthy materials and soft lighting shape inviting spaces that feel both refined and effortlessly livable. Defined by crisp architectural geometry and natural textures, the residence offers a seamless transition from sunlit exteriors to warm, understated interiors — balancing modern sophistication with a quiet sense of comfort."
      images={[img1, img2, img3]}
    />
  )
}
