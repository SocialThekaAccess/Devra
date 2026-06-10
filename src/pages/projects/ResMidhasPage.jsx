import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-midhas.avif'
import img2 from '../../assets/projects/res-midhas-2.avif'
import img3 from '../../assets/projects/res-midhas-3.avif'

export default function ResMidhasPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="The Midha's"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A bold contemporary residence defined by its dark material palette, clean geometry, and warm illuminated volumes. The façade balances privacy and openness, with deep frames, lush landscaping, and a sculpted balcony that adds depth, character, and a distinctly modern edge."
      images={[img1, img2, img3]}
    />
  )
}
