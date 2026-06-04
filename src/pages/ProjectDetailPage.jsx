import { Link } from '../router'
import devraLogo from '../assets/devraLogo.png'
import Footer from '../components/Footer'
import './ProjectDetailPage.css'

export default function ProjectDetailPage({
  backTo, backLabel, title, location, category, size, year, overview, overview2, images = []
}) {
  const heroImg = images[0]
  const galleryImages = images.slice(1)

  // Split gallery into rows with varying layouts for visual rhythm
  // Row pattern: [full], [two-col], [full], [three-col], [full], [two-col] ...
  const buildRows = (imgs) => {
    const rows = []
    let i = 0
    const patterns = ['two', 'full', 'three', 'full', 'two', 'full', 'three']
    let p = 0
    while (i < imgs.length) {
      const pattern = patterns[p % patterns.length]
      if (pattern === 'full') {
        rows.push({ type: 'full', items: [imgs[i]] })
        i += 1
      } else if (pattern === 'two') {
        const slice = imgs.slice(i, i + 2)
        if (slice.length === 1) { rows.push({ type: 'full', items: slice }); i += 1 }
        else { rows.push({ type: 'two', items: slice }); i += 2 }
      } else {
        const slice = imgs.slice(i, i + 3)
        if (slice.length === 1) { rows.push({ type: 'full', items: slice }); i += 1 }
        else if (slice.length === 2) { rows.push({ type: 'two', items: slice }); i += 2 }
        else { rows.push({ type: 'three', items: slice }); i += 3 }
      }
      p++
    }
    return rows
  }

  const rows = buildRows(galleryImages)

  return (
    <div className="proj-page">

      {/* Back */}
      <Link to={backTo} className="proj-back">← {backLabel}</Link>

      {/* Full-viewport hero */}
      <section className="proj-hero">
        <img src={heroImg} alt={title} className="proj-hero__img" />
        <div className="proj-hero__overlay" />
        <header className="proj-hero__nav">
          <Link to="/"><img src={devraLogo} alt="Devra" className="proj-hero__logo" /></Link>
        </header>
        {/* Title over hero bottom-left */}
        <div className="proj-hero__title-wrap">
          <h1 className="proj-hero__title">{title}</h1>
          <span className="proj-hero__category">{category}</span>
        </div>
      </section>

      {/* Meta strip */}
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

      {/* Overview */}
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

      {/* Gallery — architectural grid */}
      {rows.length > 0 && (
        <section className="proj-gallery">
          {rows.map((row, ri) => (
            <div key={ri} className={`proj-gallery__row proj-gallery__row--${row.type}`}>
              {row.items.map((img, ii) => (
                <div key={ii} className="proj-gallery__cell">
                  <img src={img} alt={`${title} — ${ri * 3 + ii + 2}`} className="proj-gallery__img" />
                </div>
              ))}
            </div>
          ))}
        </section>
      )}

      {/* CTA */}
      <section className="proj-cta">
        <div className="proj-cta__inner">
          <h2 className="proj-cta__heading">Let's</h2>
          <p className="proj-cta__body">
            Whether you have a vision in mind or are just exploring, our team is here
            to bring beauty, purpose, and elegance to your space.
          </p>
          <Link to="/contact" className="proj-cta__btn">Get in touch ↗</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
