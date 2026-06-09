import ProjectDetailPage from '../ProjectDetailPage'
import img1 from '../../assets/projects/fh-gills-1.avif'
import img2 from '../../assets/projects/fh-gills-2.avif'
import img3 from '../../assets/projects/fh-gills-3.avif'
import img4 from '../../assets/projects/fh-gills-4.avif'
import img5 from '../../assets/projects/fh-gills-5.avif'
import img6 from '../../assets/projects/fh-gills-6.avif'
import img7 from '../../assets/projects/fh-gills-7.avif'
import img8 from '../../assets/projects/fh-gills-8.avif'

export default function FhGillsFarmhousePage() {
  return (
    <ProjectDetailPage
      backTo="/farm-houses"
      backLabel="Farm Houses"
      title="Gill's Farmhouse"
      location="Baddi Road"
      category="Farm Houses"
      size="1200 gaj"
      year="2020"
      overview="This farmhouse is designed as a composition of solid brick volumes and light, open frames, creating a balance between mass and transparency. Perforated jaali walls and deep recesses introduce layered depth, allowing natural light to filter softly through spaces, shaping an environment often regarded among the best farmhouse designs in India for its quiet spatial clarity."
      overview2="The architecture extends seamlessly into the landscape through shaded decks, pergola structures, and large glazed openings. Warm materials, clean horizontal lines, and controlled proportions create a calm, breathable environment that responds to climate, encouraging natural ventilation and a strong connection between indoor living and the outdoors."
      images={[img1, img2, img3, img4, img5, img6, img7, img8]}
    />
  )
}
