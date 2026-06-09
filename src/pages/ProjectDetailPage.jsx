import { Link } from '../router'
import devraLogo from '../assets/devraLogo.png'
import Footer from '../components/Footer'
import './ProjectDetailPage.css'

function buildRows(images) {
  const rows = []
  const patterns = ['two', 'full', 'three', 'full', 'two', 'full', 'three']
  let imageIndex = 0
  let patternIndex = 0

  while (imageIndex < images.length) {
    const pattern = patterns[patternIndex % patterns.length]

    if (pattern === 'full') {
      rows.push({ type: 'full', items: [images[imageIndex]] })
      imageIndex += 1
    } else if (pattern === 'two') {
      const slice = images.slice(imageIndex, imageIndex + 2)
      rows.push({ type: slice.length === 1 ? 'full' : 'two', items: slice })
      imageIndex += slice.length
    } else {
      const slice = images.slice(imageIndex, imageIndex + 3)
      rows.push({
        type: slice.length === 1 ? 'full' : slice.length === 2 ? 'two' : 'three',
        items: slice,
      })
      imageIndex += slice.length
    }

    patternIndex += 1
  }

  return rows
}

export default function ProjectDetailPage({
  backTo,
  backLabel,
  title,
  location,
  category,
  size,
  year,
  overview,
  overview2,
  images = [],
}) {
  const heroImg = images[0]
  const rows = buildRows(images.slice(1))

  return (
    <div className="proj-page">
      <Link to={backTo} className="proj-back">
        &lt;- {backLabel}
      </Link>

      <section className="proj-hero">
        <img
          src={heroImg}
          alt={title}
          className="proj-hero__img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="proj-hero__overlay" />
        <header className="proj-hero__nav">
          <Link to="/">
            <img src={devraLogo} alt="Devra" className="proj-hero__logo" />
          </Link>
        </header>
        <div className="proj-hero__title-wrap">
          <h1 className="proj-hero__title">{title}</h1>
          <span className="proj-hero__category">{category}</span>
        </div>
      </section>

      <section className="proj-meta-strip">
        <div className="proj-meta-strip__inner">
          {location && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Location</span>
              <span className="proj-meta-strip__value">{location}</span>
            </div>
          )}
          {size && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Project Size</span>
              <span className="proj-meta-strip__value">{size}</span>
            </div>
          )}
          {year && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Year</span>
              <span className="proj-meta-strip__value">{year}</span>
            </div>
          )}
          {category && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Category</span>
              <span className="proj-meta-strip__value">{category}</span>
            </div>
          )}
        </div>
      </section>

      <section className="proj-overview">
        <div className="proj-overview__inner">
          <div className="proj-overview__label-col">
            <span className="proj-overview__label">Overview</span>
          </div>
          <div className="proj-overview__text-col">
            <p className="proj-overview__text">{overview}</p>
            {overview2 && <p className="proj-overview__text proj-overview__text--mt">{overview2}</p>}
          </div>
        </div>
      </section>

      {rows.length > 0 && (
        <section className="proj-gallery">
          {rows.map((row, rowIndex) => (
            <div key={`${row.type}-${rowIndex}`} className={`proj-gallery__row proj-gallery__row--${row.type}`}>
              {row.items.map((image, imageIndex) => (
                <div key={`${rowIndex}-${imageIndex}`} className="proj-gallery__cell">
                  <img
                    src={image}
                    alt={`${title} image ${rowIndex * 3 + imageIndex + 2}`}
                    className="proj-gallery__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ))}
        </section>
      )}

      <section className="proj-cta">
        <div className="proj-cta__inner">
          <h2 className="proj-cta__heading">Let's</h2>
          <p className="proj-cta__body">
            Whether you have a vision in mind or are just exploring, our team is here
            to bring beauty, purpose, and elegance to your space.
          </p>
          <Link to="/contact" className="proj-cta__btn">
            Get in touch -&gt;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
