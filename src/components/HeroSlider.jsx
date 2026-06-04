import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from '../router'
import Navbar from './Navbar'
import './HeroSlider.css'

const defaultSlides = [
  {
    id: 1,
    src: '/slides/slide1.avif',
    fallback: 'linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)',
  },
  {
    id: 2,
    src: '/slides/slide2.avif',
    fallback: 'linear-gradient(135deg, #1a2a3a 0%, #3d5a4a 100%)',
  },
  {
    id: 3,
    src: '/slides/slide3.png',
    fallback: 'linear-gradient(135deg, #263040 0%, #4a5568 100%)',
  },
]

const INTERVAL = 5000
// How much the image moves relative to scroll — 0.4 = 40% speed (gentle)
const PARALLAX_SPEED = 0.4

export default function HeroSlider({ hideContent = false, slides = defaultSlides }) {
  const [current, setCurrent] = useState(0)
  const [imageErrors, setImageErrors] = useState({})
  const slidesRef = useRef(null)
  const rafRef = useRef(null)
  const scrollYRef = useRef(0)

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length)
  }, [slides.length])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [current, goTo])

  // Parallax — translate the slides layer upward as user scrolls down
  useEffect(() => {
    const onScroll = () => {
      scrollYRef.current = window.scrollY
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        if (slidesRef.current) {
          const offset = scrollYRef.current * PARALLAX_SPEED
          slidesRef.current.style.transform = `translateY(${offset}px)`
        }
        rafRef.current = null
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="hero" aria-label="Hero slideshow">
      {/* Logo — only over the hero, not floating on whole site */}
      <Navbar />
      {/* Slides — this layer gets the parallax translateY */}
      <div className="hero__slides" ref={slidesRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__slide ${index === current ? 'hero__slide--active' : ''}`}
            style={imageErrors[slide.id] ? { background: slide.fallback } : undefined}
          >
            {!imageErrors[slide.id] && (
              <img
                src={slide.src}
                alt=""
                className="hero__slide-img"
                onError={() => handleImageError(slide.id)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Content — hidden on About page */}
      {!hideContent && (
        <div className="hero__content">
          <h1 className="hero__heading">
            Best Architects &amp; <br />
            Interior Designers in <br />
            Chandigarh
          </h1>
          <p className="hero__subheading">
            Luxury Architecture That Defines Modern Living
          </p>
          <div className="hero__actions">
            <Link to="/about-us" className="hero__btn">
              About us <span className="hero__btn-arrow">↗</span>
            </Link>
            <Link to="/contact" className="hero__btn">
              Contact us <span className="hero__btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      )}

      {/* Slide indicators */}
      <div className="hero__dots" role="tablist" aria-label="Slide indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero__dot ${index === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(index)}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero__progress">
        <div
          key={current}
          className="hero__progress-bar"
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>
    </section>
  )
}
