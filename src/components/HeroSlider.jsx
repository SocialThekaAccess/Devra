import { useState, useEffect, useCallback, useRef } from 'react'
import Header from './Header'
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
const PARALLAX_SPEED = 0.4

export default function HeroSlider({
  hideContent = false,
  slides = defaultSlides,
  overlayVariant = 'default',
}) {
  const [current, setCurrent] = useState(0)
  const [imageErrors, setImageErrors] = useState({})
  const slidesRef = useRef(null)
  const rafRef = useRef(null)
  const scrollYRef = useRef(0)

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, INTERVAL)

    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 900) {
      return undefined
    }

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
      <Header variant="overlay" />

      <div className="hero__slides" ref={slidesRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__slide ${index === current ? 'hero__slide--active' : ''}`}
            style={imageErrors[slide.id] ? { background: slide.fallback } : undefined}
            aria-hidden={index !== current}
          >
            {!imageErrors[slide.id] && (
              <img
                src={slide.src}
                alt=""
                className="hero__slide-img"
                loading={index === current ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === current ? 'high' : 'low'}
                sizes="100vw"
                onError={() => handleImageError(slide.id)}
              />
            )}
          </div>
        ))}
      </div>

      <div className={`hero__overlay ${overlayVariant !== 'default' ? `hero__overlay--${overlayVariant}` : ''}`} />

      {!hideContent && (
        <div className="hero__content">
          <p className="hero__eyebrow">Live The Dream</p>
          <p className="hero__subheading">
            Luxury Architecture That Defines Modern Living
          </p>
        </div>
      )}

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
