import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-303.jpg'
import img2 from '../../assets/projects/res-villa-303-2.jpg'
import img3 from '../../assets/projects/res-villa-303-3.jpg'
import img4 from '../../assets/projects/res-villa-303-4.jpg'
import img5 from '../../assets/projects/res-villa-303-5.jpg'
import img6 from '../../assets/projects/res-villa-303-6.jpg'
import img7 from '../../assets/projects/res-villa-303-7.jpg'
import img8 from '../../assets/projects/res-villa-303-8.jpg'
import img9 from '../../assets/projects/res-villa-303-9.jpg'

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
      overview="A striking contemporary façade anchored by a bold sculpted terrace and a floating living room cantilevered elegantly above the pool. Clean lines, warm soffit textures, and deep overhangs shape a resort-like character — balancing openness, privacy, and architectural drama in a serene residential setting."
      overview2="The interiors blend soft luxury with expressive details — double-height volumes, refined lighting, and signature feature walls that enrich every space. Calm colours, warm materials, and purposeful layouts create an inviting flow, making each room feel curated, comfortable, and unmistakably elegant."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
