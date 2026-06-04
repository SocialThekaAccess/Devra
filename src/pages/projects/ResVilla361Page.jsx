import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-361.jpg'
import img2 from '../../assets/projects/res-villa-361-2.jpg'
import img3 from '../../assets/projects/res-villa-361-3.jpg'
import img4 from '../../assets/projects/res-villa-361-4.jpg'
import img5 from '../../assets/projects/res-villa-361-5.jpg'
import img6 from '../../assets/projects/res-villa-361-6.jpg'
import img7 from '../../assets/projects/res-villa-361-7.jpg'
import img8 from '../../assets/projects/res-villa-361-8.jpg'
import img9 from '../../assets/projects/res-villa-361-9.jpg'

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
      overview="This home blends warm stone, clean modern lines, and generous glazing to create a calm, contemporary atmosphere. Inside, earthy materials and soft lighting shape inviting spaces that feel both refined and effortlessly livable."
      overview2="Defined by crisp architectural geometry and natural textures, the residence offers a seamless transition from sunlit exteriors to warm, understated interiors — balancing modern sophistication with a quiet sense of comfort."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
