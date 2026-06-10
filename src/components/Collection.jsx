import './Collection.css'
import { Link } from '../router'

import residentialImg from '../assets/residential.avif'
import housingsImg from '../assets/housing.avif'
import commercialImg from '../assets/commercial.jpg'
import schoolsImg from '../assets/schools.avif'
import hospitalityImg from '../assets/hospitality.avif'
import farmhouseImg from '../assets/farmHouse.avif'

const collectionItems = [
  { id: 1, label: 'RESIDENTIAL', src: residentialImg, fallback: '#c8b89a', to: '/residential-architects-chandigarh' },
  { id: 2, label: 'HOUSINGS', src: housingsImg, fallback: '#9aab9a', to: '/housing-architects-chandigarh' },
  { id: 3, label: 'COMMERCIAL', src: commercialImg, fallback: '#d4cfc8', to: '/commercial-architects-chandigarh' },
  { id: 4, label: 'SCHOOLS', src: schoolsImg, fallback: '#b8c4c8', to: '/school-architects-chandigarh' },
  { id: 5, label: 'HOSPITALITY', src: hospitalityImg, fallback: '#8a7a6a', to: '/hospitality-architects-chandigarh' },
  { id: 6, label: 'FARM HOUSE', src: farmhouseImg, fallback: '#a89878', to: '/farm-house-architects-chandigarh' },
]

const serviceCards = [
  {
    id: 1,
    title: 'HOUSING\nARCHITECTURE',
    desc: 'Designing refined housing environments with thoughtful planning and timeless clarity.',
    src: housingsImg,
    fallback: '#9aab9a',
  },
  {
    id: 2,
    title: 'RESIDENTIAL\nARCHITECTURE',
    desc: 'Crafting modern residences with precision, comfort and long-lasting architectural value.',
    src: residentialImg,
    fallback: '#c8b89a',
  },
  {
    id: 3,
    title: 'ROOM\nTRANSFORMATION',
    desc: 'Creating complete room makeovers with seamless design and one-week on-site delivery.',
    src: hospitalityImg,
    fallback: '#8a7a6a',
  },
  {
    id: 4,
    title: 'Complete Architecture Solutions',
    desc: 'Comprehensive design solutions for commercial, institutional and specialised projects.',
    src: commercialImg,
    fallback: '#d4cfc8',
  },
]

function CollectionCard({ item }) {
  return (
    <Link to={item.to} className="col-card">
      <div className="col-card__img-wrap" style={{ background: item.fallback }}>
        <img
          src={item.src}
          alt={item.label}
          className="col-card__img"
          loading="lazy"
          decoding="async"
        />
        <div className="col-card__overlay" />
        <span className="col-card__label">{item.label}</span>
      </div>
    </Link>
  )
}

function ServiceCard({ card }) {
  const titleLines = card.title.split('\n')

  return (
    <div className="svc-card">
      <div className="svc-card__img-wrap" style={{ background: card.fallback }}>
        <img
          src={card.src}
          alt={titleLines.join(' ')}
          className="svc-card__img"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="svc-card__body">
        <h3 className="svc-card__title">
          {titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h3>
        <p className="svc-card__desc">{card.desc}</p>
      </div>
    </div>
  )
}

export default function Collection() {
  return (
    <section className="collection-section" id="services">
      <h2 className="collection-section__heading">The Devra Collection</h2>

      <div className="col-grid">
        {collectionItems.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>

      <div className="services-block">
        <span className="services-block__pill">Our Core Architectural Services</span>

        {/*
          SEO: only "Best Architects in Chandigarh" carries h1 weight.
          Visually the full line renders identically.
          "Crafted by the" and "& Beyond" are presentational spans.
        */}
        <h1 className="services-block__heading">
          <span className="services-block__heading-pre">Crafted by the </span>Best Architects in Chandigarh<span className="services-block__heading-post"> &amp; Beyond</span>
        </h1>

        <p className="services-block__body">
          We are Devra Architects, a New Chandigarh-based architecture studio with 475+ completed
          projects across residential, commercial, institutional, and hospitality sectors. We deliver
          complete architectural solutions from concept to execution, driven by proportion, light,
          material honesty, and buildability. Our work spans contemporary, tropical modern, classical,
          and multidisciplinary architecture across Chandigarh, Mohali, Punjab, and beyond.
        </p>
      </div>

      <div className="svc-grid">
        {serviceCards.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
