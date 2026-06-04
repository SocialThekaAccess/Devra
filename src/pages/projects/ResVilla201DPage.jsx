import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-201d.jpg'
import img2 from '../../assets/projects/res-villa-201d-2.jpg'
import img3 from '../../assets/projects/res-villa-201d-3.jpg'

export default function ResVilla201DPage() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="Villa 201D"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A tropical-rustic villa defined by deep clay-tile roofs, carved brick surfaces, and layered balconies that open to lush green views. The façade blends vernacular warmth with modern proportion, creating a home that feels rooted, timeless, and naturally welcoming. Inside, the home unfolds through light-filled rooms, textured brick accents, handcrafted details, and soft pastel palettes — bringing together elegance, detail, and an inviting lived-in charm."
      images={[img1, img2, img3]}
    />
  )
}
