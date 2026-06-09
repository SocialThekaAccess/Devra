import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/res-121-122.avif'
import img2 from '../../assets/projects/res-121-122-2.avif'
import img3 from '../../assets/projects/res-121-122-3.avif'

export default function Res121122Page() {
  return (
    <ProjectDetailPage
      backTo="/residential"
      backLabel="Residential"
      title="121 & 122"
      location="PH-1 OMAXE, New Chandigarh"
      category="Residential"
      size="300 + 300 SQYD"
      year="2024"
      overview="A contemporary residence defined by strong horizontal planes and interlocking volumes, the design balances solidity and transparency with a controlled, modern architectural language. The façade composition is clean yet layered, creating depth without unnecessary complexity."
      images={[img1, img2, img3]}
    />
  )
}
