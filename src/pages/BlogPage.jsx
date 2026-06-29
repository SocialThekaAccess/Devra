import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from '../router'
import { blogPosts } from '../content/blogPosts'
import { useMeta } from '../hooks/useMeta'
import { seoConfig } from '../seoConfig'
import './BlogPage.css'

export default function BlogPage() {
  useMeta(seoConfig['/blog'])

  return (
    <div className="blog-page">
      <Header variant="static" />
      <main className="blog-listing">
        <section className="blog-listing__hero">
          <p className="blog-listing__eyebrow">Journal</p>
          <h1>Architecture & Design Insights</h1>
          <p>
            Practical guides, planning notes, and design thinking from Devra Architects for
            homeowners and project teams.
          </p>
        </section>

        <section className="blog-grid" aria-label="Blog posts">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link to={post.path} className="blog-card__image-link" aria-label={post.title}>
                <img className="blog-card__image" src={post.image} alt={post.imageAlt} />
              </Link>
              <div className="blog-card__body">
                <p className="blog-card__category">{post.category}</p>
                <h2>
                  <Link to={post.path}>{post.title}</Link>
                </h2>
                <p className="blog-card__description">{post.description}</p>
                <Link to={post.path} className="blog-card__read-more">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
