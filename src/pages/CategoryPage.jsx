import { Link } from '../router'
import devraLogo from '../assets/devraLogo.png'
import Footer from '../components/Footer'
import './CategoryPage.css'

/**
 * Reusable category page layout.
 * Props:
 *   heroImg      — imported image for the hero background
 *   title        — e.g. "RESIDENTIAL"
 *   description  — one-liner under title
 *   projects     — array of { id, size, year, type, name, location }
 */
export default function CategoryPage({ heroImg, title, description, projects }) {
  return (
    <div className="cat-page">

      {/* Back */}
      <Link to="/" className="cat-back">← Back</Link>

      {/* Hero */}
      <section className="cat-hero">
        <img src={heroImg} alt={title} className="cat-hero__img" />
        <div className="cat-hero__overlay" />
        <header className="cat-hero__nav">
          <Link to="/">
            <img src={devraLogo} alt="Devra" className="cat-hero__logo" />
          </Link>
        </header>
        <div className="cat-hero__content">
          <h1 className="cat-hero__title">{title}</h1>
          <p className="cat-hero__desc">{description}</p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="cat-projects">
        <div className="cat-projects__grid">
          {projects.map((p) => (
            <div key={p.id} className="cat-project-card">
              <div className="cat-project-card__img-wrap">
                <img src={p.img || heroImg} alt={p.name} className="cat-project-card__img" />
                <div className="cat-project-card__overlay" />
              </div>
              <div className="cat-project-card__body">
                <div className="cat-project-card__meta">
                  {p.size && <span>{p.size}</span>}
                  {p.year && <span>{p.year}</span>}
                  {p.type && <span className="cat-project-card__type">{p.type}</span>}
                </div>
                <h3 className="cat-project-card__name">{p.name}</h3>
                <p className="cat-project-card__location">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cat-cta">
        <div className="cat-cta__inner">
          <span className="cat-cta__dot" aria-hidden="true" />
          <h2 className="cat-cta__heading">Let's</h2>
          <p className="cat-cta__body">
            Whether you have a vision in mind or are just exploring, our team is here
            to bring beauty, purpose, and elegance to your space.
          </p>
          <Link to="/contact" className="cat-cta__btn">Let's talk ↗</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
