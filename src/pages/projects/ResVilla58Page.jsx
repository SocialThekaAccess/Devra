import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-58.jpg'
import img2 from '../../assets/projects/res-villa-58-2.jpg'
import img3 from '../../assets/projects/res-villa-58-3.jpg'
import img4 from '../../assets/projects/res-villa-58-4.jpg'
import img5 from '../../assets/projects/res-villa-58-5.jpg'
import img6 from '../../assets/projects/res-villa-58-6.jpg'
import img7 from '../../assets/projects/res-villa-58-7.jpg'
import img8 from '../../assets/projects/res-villa-58-8.jpg'

export default function ResVilla58Page() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="Villa 58"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A bold modern façade defined by a sculpted angular frame, warm wooden balcony cladding, and clean geometric lines. The deep overhangs and full-height glass create a striking yet welcoming presence, while the layered terraces blend openness with privacy, giving the home its distinct, contemporary silhouette."
      overview2="Inside, the home unfolds in soft, neutral tones with warm textures, effortless lighting, and calm spatial transitions. From the refined living areas to the elegant staircase volume and serene bedrooms, each space balances comfort with understated luxury — crafted to feel lived-in, inviting, and timeless."
      images={[img1, img2, img3, img4, img5, img6, img7, img8]}
    />
  )
}
