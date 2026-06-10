import { Link } from '../router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useMeta } from '../hooks/useMeta'
import './CategoryPage.css'

export default function CategoryPage({ heroImg, title, description, projects, seo }) {
  useMeta(seo)

  return (
    <div className="cat-page">
      <section className="cat-hero">
        <img
          src={heroImg}
          alt={title}
          className="cat-hero__img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="cat-hero__overlay" />
        <Header variant="overlay" />
        <div className="cat-hero__content">
          <h1 className="cat-hero__title">{title}</h1>
          <p className="cat-hero__desc">{description}</p>
        </div>
      </section>

      <section className="cat-projects">
        <div className="cat-projects__grid">
          {projects.map((project) => {
            const CardWrapper = project.to ? Link : 'div'
            const wrapperProps = project.to ? { to: project.to } : {}

            return (
              <CardWrapper key={project.id} className="cat-project-card" {...wrapperProps}>
                <div className="cat-project-card__img-wrap">
                  <img
                    src={project.img || heroImg}
                    alt={project.name}
                    className="cat-project-card__img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="cat-project-card__overlay" />
                </div>
                <div className="cat-project-card__body">
                  <div className="cat-project-card__meta">
                    {project.size && <span>{project.size}</span>}
                    {project.year && <span>{project.year}</span>}
                    {project.type && <span className="cat-project-card__type">{project.type}</span>}
                  </div>
                  <h3 className="cat-project-card__name">{project.name}</h3>
                  <p className="cat-project-card__location">{project.location}</p>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </section>

      <section className="cat-cta">
        <div className="cat-cta__inner">
          <span className="cat-cta__dot" aria-hidden="true" />
          <h2 className="cat-cta__heading">Let's</h2>
          <p className="cat-cta__body">
            Whether you have a vision in mind or are just exploring, our team is here
            to bring beauty, purpose, and elegance to your space.
          </p>
          <Link to="/contact" className="cat-cta__btn">
            Let's talk -&gt;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
