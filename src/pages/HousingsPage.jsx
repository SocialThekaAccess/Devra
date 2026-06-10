import CategoryPage from './CategoryPage'
import heroImg from '../assets/housing.avif'
import panchkulaHousingImg from '../assets/pankchkulaHousing.avif'

// Sansarg has no dedicated project image on devra.in,
// so the category hero is used as its representative image.
const projects = [
  {
    id: 1,
    size: '20,000 SQM',
    year: '2021',
    type: 'Housing',
    name: 'Sansarg',
    location: 'PH-1 Cassia, New Chandigarh',
    img: heroImg,
    to: '/services/housing/sansarg',
    overview: 'A dynamic housing development defined by sculpted terraces, patterned balconies, and warm material tones. The architecture is shaped to maximise openness - every residence enjoys extended outdoor decks, natural light, and wide community views.',
  },
  {
    id: 2,
    size: '',
    year: '2024',
    type: 'Housing',
    name: 'Panchkula Housing',
    location: 'Panchkula',
    img: panchkulaHousingImg,
    to: '/services/housing/panchkula-housing',
    overview: 'A contemporary housing development defined by clean geometry, functional planning, and an articulated facade. Cantilevered balconies, framed edges, and vertical breaks give the towers a distinct identity while ensuring ample light, ventilation, and sweeping views.',
  },
]

export default function HousingsPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Housing Architects in Chandigarh"
      description="Luxury housing projects crafted with precision, blending modern architecture, refined comfort, and distinctive spatial experiences."
      projects={projects}
      meta={{
        title: 'Housing Architects in Chandigarh | Township & Housing Design | Devra',
        description:
          'Devra Architects specializes in housing projects, residential townships, and community developments across Chandigarh, Mohali, and Punjab, creating well-planned spaces that support modern living and long-term value.',
      }}
    />
  )
}
