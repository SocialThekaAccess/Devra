import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-201d.jpg'
import img2 from '../../assets/projects/res-villa-201d-2.jpg'
import img3 from '../../assets/projects/res-villa-201d-3.jpg'
import img4 from '../../assets/projects/res-villa-201d-4.avif'
import img5 from '../../assets/projects/res-villa-201d-5.avif'
import img6 from '../../assets/projects/res-villa-201d-6.avif'
import img7 from '../../assets/projects/res-villa-201d-7.avif'
import img8 from '../../assets/projects/res-villa-201d-8.jpg'
import img9 from '../../assets/projects/res-villa-201d-9.jpg'

export default function ResVilla201DPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="Villa 201D"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A tropical-rustic villa defined by deep clay-tile roofs, carved brick surfaces, and layered balconies that open to lush green views. The façade blends vernacular warmth with modern proportion, creating a home that feels rooted, timeless, and naturally welcoming."
      overview2="Inside, the home unfolds through light-filled rooms, textured brick accents, handcrafted details, and soft pastel palettes. Playful wall art, artisanal finishes, and warm earthy tones create a refreshing atmosphere that feels personal, lively, and effortlessly comfortable."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
