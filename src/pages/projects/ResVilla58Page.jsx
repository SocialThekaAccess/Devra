import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-58.jpg'
import img2 from '../../assets/projects/res-villa-58-2.jpg'
import img3 from '../../assets/projects/res-villa-58-3.jpg'

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
      overview="A bold modern façade defined by a sculpted angular frame, warm wooden balcony cladding, and clean geometric lines. The deep overhangs and full-height glass create a striking yet welcoming presence, while the layered terraces blend openness with privacy. Inside, the home unfolds in soft, neutral tones with warm textures, effortless lighting, and calm spatial transitions — crafted to feel lived-in, inviting, and timeless."
      images={[img1, img2, img3]}
    />
  )
}
