import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/fh-nagra-1.avif'
import img2 from '../../assets/projects/fh-nagra-2.avif'
import img3 from '../../assets/projects/fh-nagra-3.avif'

export default function FhNagraFarmhousePage() {
  return (
    <ProjectDetailPage
      backTo="/services/farm-houses"
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
