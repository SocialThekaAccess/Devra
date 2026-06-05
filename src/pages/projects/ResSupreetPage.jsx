import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-supreet.jpg'
import img2 from '../../assets/projects/res-supreet-2.jpg'
import img3 from '../../assets/projects/res-supreet-3.jpg'

export default function ResSupreetPage() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="Col. Supreet Ji"
      location="Eco City, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A sleek modern villa defined by strong horizontal lines, deep overhangs, and a warm palette of wood, glass, and stone. The façade sits low and confident, blending minimal geometry with rich natural textures to create a refined, contemporary presence surrounded by greenery."
      images={[img1, img2, img3]}
    />
  )
}
