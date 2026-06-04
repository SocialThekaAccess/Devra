import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-minzs.jpg'
import img2 from '../../assets/projects/res-minzs-2.jpg'
import img3 from '../../assets/projects/res-minzs-3.jpg'

export default function ResMinzsPage() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="The Minz's"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2024"
      overview="A warm contemporary home defined by its pitched roofline, clean geometry, and tropical landscape setting. Natural materials, deep overhangs, and generous glazing create a balanced façade — modern in expression yet grounded in earthy simplicity. Inside, the home blends artistry and comfort — textured walls, crafted partitions, and soft lighting shaping calm, expressive spaces."
      images={[img1, img2, img3]}
    />
  )
}
