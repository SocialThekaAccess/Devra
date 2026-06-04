import { Link } from '../router'
import devraLogo from '../assets/devraLogo.png'
import Footer from '../components/Footer'
import './ProjectDetailPage.css'

/**
 * Reusable project detail page.
 * Props:
 *   backTo        — e.g. '/residential'
 *   backLabel     — e.g. 'Residential'
 *   title         — project name
 *   location      — location string
 *   category      — category string
 *   size          — project size
 *   year          — year
 *   overview      — paragraph text
 *   images        — array of imported image URLs (first is hero)
 */
export default function ProjectDetailPage({
  backTo, backLabel, title, location, category, size, year, overview, images = []
}) {
  const heroImg = images[0]
  const galleryImages = images.slice(1)

  return (
    <div className="proj-page">

      {/* Back */}
      <Link to={backTo} className="proj-back">← {backLabel}</Link>

      {/* Hero */}
      <section className="proj-hero">
        <img src={heroImg} alt={title} className="proj-hero__img" />
        <div className="proj-hero__overlay" />
        <header className="proj-hero__nav">
          <Link to="/">
            <img src={devraLogo} alt="Devra" className="proj-hero__logo" />
          </Link>
        </header>
      </section>

      {/* Meta + Overview */}
      <section className="proj-info">
        <div className="proj-info__left">
          <h1 className="proj-info__title">{title}</h1>
          <p className="proj-info__type">Architecture</p>
          <Link to={backTo} className="proj-info__cat-link">{backLabel}</Link>
        </div>
        <div className="proj-info__right">
          <div className="proj-info__meta">
            <div className="proj-info__meta-row">
              <span className="proj-info__meta-label">Location</span>
              <span className="proj-info__meta-value">{location}</span>
            </div>
            <div className="proj-info__meta-row">
              <span className="proj-info__meta-label">Category</span>
              <span className="proj-info__meta-value">{category}</span>
            </div>
            {size && (
              <div className="proj-info__meta-row">
                <span className="proj-info__meta-label">Project Size</span>
                <span className="proj-info__meta-value">{size}</span>
              </div>
            )}
            {year && (
              <div className="proj-info__meta-row">
                <span className="proj-info__meta-label">Year</span>
                <span className="proj-info__meta-value">{year}</span>
              </div>
            )}
          </div>
          <div className="proj-info__overview">
            <h2 className="proj-info__overview-label">Overview</h2>
            <p className="proj-info__overview-text">{overview}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="proj-gallery">
          {galleryImages.map((img, i) => (
            <div key={i} className="proj-gallery__item">
              <img src={img} alt={`${title} — view ${i + 2}`} className="proj-gallery__img" />
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
