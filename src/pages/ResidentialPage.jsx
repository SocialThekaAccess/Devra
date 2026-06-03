import CategoryPage from './CategoryPage'
import heroImg       from '../assets/residential.avif'
import img121        from '../assets/projects/res-121-122.jpg'
import imgVilla361   from '../assets/projects/res-villa-361.jpg'
import imgVilla58    from '../assets/projects/res-villa-58.jpg'
import imgVilla303   from '../assets/projects/res-villa-303.jpg'
import imgVilla201d  from '../assets/projects/res-villa-201d.jpg'
import imgKangs      from '../assets/projects/res-kangs.jpg'
import imgSupreet    from '../assets/projects/res-supreet.jpg'
import imgMidhas     from '../assets/projects/res-midhas.jpg'
import imgMinzs      from '../assets/projects/res-minzs.jpg'

const projects = [
  { id: 1, size: '300 + 300 SQYD', year: '2024', type: 'Home',  name: '121 & 122 PH-1 Omaxe',   location: 'New Chandigarh', img: img121 },
  { id: 2, size: '500 SQYD',       year: '2021', type: 'House', name: 'Villa 361 PH-3 Cassia',   location: 'New Chandigarh', img: imgVilla361 },
  { id: 3, size: '300 SQYD',       year: '2025', type: 'House', name: 'Villa 58 PH-3 Cassia',    location: 'New Chandigarh', img: imgVilla58 },
  { id: 4, size: '500 SQYD',       year: '2023', type: 'House', name: 'Villa 303 PH-1 Cassia',   location: 'New Chandigarh', img: imgVilla303 },
  { id: 5, size: '300 SQYD',       year: '2025', type: 'House', name: 'Villa 201D PH-3 Cassia',  location: 'New Chandigarh', img: imgVilla201d },
  { id: 6, size: '300 SQYD',       year: '2025', type: 'House', name: "The Kang's",              location: 'DLF, New Chandigarh', img: imgKangs },
  { id: 7, size: '300 SQYD',       year: '2025', type: 'House', name: 'Col. Supreet Ji',         location: 'Eco City, New Chandigarh', img: imgSupreet },
  { id: 8, size: '300 SQYD',       year: '2025', type: 'House', name: "The Midha's",             location: 'PH-3 Cassia, New Chandigarh', img: imgMidhas },
  { id: 9, size: '300 SQYD',       year: '2024', type: 'House', name: "The Minz's",              location: 'PH-3 Cassia, New Chandigarh', img: imgMinzs },
]

export default function ResidentialPage() {
  return (
    <CategoryPage
      heroImg={heroImg}
      title="Residential"
      description="Luxury residential projects crafted with elegance, blending modern design, comfort, and timeless architectural excellence."
      projects={projects}
    />
  )
}
