import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/sch-ms-school-a.avif'
import img2 from '../../assets/projects/sch-ms-school-b.avif'
import img3 from '../../assets/projects/sch-ms-school-c.avif'

export default function SchMsSchoolPage() {
  return (
    <ProjectDetailPage
      backTo="/services/schools"
      backLabel="Schools"
      title="M S School"
      location=""
      category="School"
      size="-"
      year="-"
      overview="This school is planned as a structured yet breathable campus, where clear linear planning and layered façades create a strong sense of order. Controlled openings and screened elements balance light, ventilation, and privacy, creating classrooms that feel calm and naturally lit—an approach often seen among the best school designs in India."
      overview2="The elevation blends warm materials with contemporary detailing, giving the institution a grounded yet progressive identity. Shaded corridors and landscape edges enhance movement and interaction, resulting in a learning environment that is efficient, climate-responsive, and quietly expressive."
      images={[img1, img2, img3]}
    />
  )
}
