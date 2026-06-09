import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-kangs.avif'
import img2 from '../../assets/projects/res-kangs-2.avif'
import img3 from '../../assets/projects/res-kangs-3.avif'

export default function ResKangsPage() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="The Kang's"
      location="DLF, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A Mediterranean heritage villa distinguished by arched openings, warm stucco textures, hand-carved stone details, and deep wooden balconies. The façade balances classical charm with refined proportion, creating a home that feels elegant, inviting, and timelessly rooted in coastal architecture."
      images={[img1, img2, img3]}
    />
  )
}
