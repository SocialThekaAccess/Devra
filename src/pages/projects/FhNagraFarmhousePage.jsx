import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/fh-nagra-1.png'
import img2 from '../../assets/projects/fh-nagra-2.png'
import img3 from '../../assets/projects/fh-nagra-3.png'

export default function FhNagraFarmhousePage() {
  return (
    <ProjectDetailPage
      backTo="/farm-houses"
      backLabel="Farm Houses"
      title="Nagra Farmhouse"
      location="Chandigarh"
      category="Farm Houses"
      size="2000 gaj"
      year="2021"
      overview="This farmhouse is conceived as a timeless courtyard residence, where classical proportions and arched colonnades define a strong architectural rhythm. Soft plastered volumes, symmetrical compositions, and deep verandahs create a sense of elegance and permanence, while the central lawn acts as a calm anchor, making the spatial experience feel expansive and composed."
      overview2=""
      images={[img1, img2, img3]}
    />
  )
}
