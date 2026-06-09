import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/sch-jp-1.avif'
import img2 from '../../assets/projects/sch-jp-2.avif'
import img3 from '../../assets/projects/sch-jp-3.avif'

export default function SchJpInternationalPage() {
  return (
    <ProjectDetailPage
      backTo="/schools"
      backLabel="Schools"
      title="J P International"
      location="Rohtak, Haryana"
      category="School"
      size="-"
      year="-"
      overview="This school is envisioned as a contemporary institutional landmark, where strong linear planning and a layered façade create clarity, identity, and visual rhythm. The combination of exposed brick, concrete bands, and a dynamic screening layer balances openness with control, allowing filtered light and ventilation—an approach aligned with some of the best school environments in India."
      overview2="The design integrates landscape, shaded edges, and a welcoming entrance zone to enhance movement and interaction. Clean proportions and climate-responsive elements ensure comfort and efficiency, resulting in a campus that feels structured, modern, and engaging for everyday learning."
      images={[img1, img2, img3]}
    />
  )
}
