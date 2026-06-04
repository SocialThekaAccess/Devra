import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-303.jpg'
import img2 from '../../assets/projects/res-villa-303-2.jpg'
import img3 from '../../assets/projects/res-villa-303-3.jpg'

export default function ResVilla303Page() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="Villa 303"
      location="PH-1 Cassia, New Chandigarh"
      category="Residential"
      size="500 SQYD"
      year="2023"
      overview="A striking contemporary façade anchored by a bold sculpted terrace and a floating living room cantilevered elegantly above the pool. Clean lines, warm soffit textures, and deep overhangs shape a resort-like character — balancing openness, privacy, and architectural drama in a serene residential setting. The interiors blend soft luxury with expressive details — double-height volumes, refined lighting, and signature feature walls that enrich every space."
      images={[img1, img2, img3]}
    />
  )
}
