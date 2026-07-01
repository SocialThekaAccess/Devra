import Header from '../components/Header'
import Footer from '../components/Footer'
import { blogPosts } from '../content/blogPosts'
import { useMeta } from '../hooks/useMeta'
import { seoConfig } from '../seoConfig'
import './BlogPage.css'

function renderParagraph(paragraph, paragraphIndex) {
  if (typeof paragraph === 'string') {
    return paragraph
  }

  return paragraph.map((part, partIndex) => {
    if (typeof part === 'string') {
      return part
    }

    return (
      <a href={part.href} key={`${paragraphIndex}-${partIndex}`}>
        {part.text}
      </a>
    )
  })
}

export default function BlogArticlePage() {
  const currentPath = decodeURIComponent(window.location.pathname)
  const blog = blogPosts.find((post) => post.path === currentPath) ?? blogPosts[0]

  useMeta(seoConfig[blog.path])

  return (
    <div className="blog-page">
      <Header variant="static" />
      <main className="blog-main">
        <article className="blog-article">
          <header className="blog-hero">
            <div className="blog-hero__copy">
              <p className="blog-hero__eyebrow">{blog.category}</p>
              <h1>{blog.title}</h1>
              <p className="blog-hero__description">{blog.description}</p>
            </div>
            <div className="blog-hero__image-wrap">
              <img className="blog-hero__image" src={blog.image} alt={blog.imageAlt} />
            </div>
          </header>

          <div className="blog-content">
            {blog.sections.map((section, index) => (
              <section className="blog-section" key={section.heading || index}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={`${section.heading || index}-${paragraphIndex}`}>
                    {renderParagraph(paragraph, paragraphIndex)}
                  </p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="blog-faq">
              <h2>FAQs</h2>
              <div className="blog-faq__list">
                {blog.faqs.map((item) => (
                  <div className="blog-faq__item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
