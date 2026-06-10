import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/com-fortofino-1.avif'
import img2 from '../../assets/projects/com-fortofino-2.avif'
import img3 from '../../assets/projects/com-fortofino-3.avif'
import img4 from '../../assets/projects/com-fortofino-4.avif'
import img5 from '../../assets/projects/com-fortofino-5.avif'
import img6 from '../../assets/projects/com-fortofino-6.avif'
import img7 from '../../assets/projects/com-fortofino-7.avif'
import img8 from '../../assets/projects/com-fortofino-8.avif'
import img9 from '../../assets/projects/com-fortofino-9.avif'

export default function ComFortofinoPage() {
  return (
    <ProjectDetailPage
      backTo="/services/commercial"
      backLabel="Commercial"
      title="FortoFino"
      location="Srinagar"
      category="Commercial"
      size=""
      year="2024"
      overview="A refined boutique interior crafted in soft neutrals, sculpted arches, and warm lighting—creating an atmosphere of quiet luxury. Every display, surface, and detail is designed to elevate the jewellery itself, offering an experience that feels exclusive, graceful, and timeless."
      overview2="The space blends artisanal textures, curated lighting, and tailored arrangements to guide the customer journey with ease. From intimate display zones to lounge-like seating, each corner reflects sophistication and comfort, shaping a boutique that feels both premium and inviting."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
