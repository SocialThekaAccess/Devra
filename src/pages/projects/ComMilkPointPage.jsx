import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/com-milk-point-1.png'
import img2 from '../../assets/projects/com-milk-point-2.png'

export default function ComMilkPointPage() {
  return (
    <ProjectDetailPage
      backTo="/commercial"
      backLabel="Commercial"
      title="Milk Point"
      location="Chandigarh"
      category="Commercial"
      size=""
      year="2020"
      overview="A refined retail interior blending warm materials, clean geometry, and controlled lighting. The space balances display clarity with experiential movement, using layered shelving, soft illumination, and subtle human activity to create a premium, inviting environment that enhances product visibility and customer engagement."
      overview2="A contemporary commercial setup focused on realism, material richness, and spatial flow. Neutral tones, integrated lighting, and curated product displays establish a high-end retail identity, while minimal human interaction adds life, making the space feel active, functional, and naturally immersive."
      images={[img1, img2]}
    />
  )
}
