import { useState, useRef, useCallback, useEffect } from 'react'
import './Transformation.css'

// Drop your real before/after images in src/assets and update these imports
import beforeImg from '../assets/residential.avif'   // placeholder — replace with before image
import afterImg from '../assets/hospitality.avif'    // placeholder — replace with after image

const tags = [
  'Architectural Balance',
  'Textural Warmth',
  'Subtle Grandeur',
  'Spatial Flow',
  'Timeless Detailing',
]

/* ─── Before / After drag slider ─────────────────────────────── */
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const beforeImgRef = useRef(null)
  const dragging = useRef(false)

  // Keep before-image width = full slider width regardless of wrapper clipping
  useEffect(() => {
    const sync = () => {
      if (containerRef.current && beforeImgRef.current) {
        beforeImgRef.current.style.width = containerRef.current.offsetWidth + 'px'
      }
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e) => {
    dragging.current = true
    e.preventDefault()
  }

  useEffect(() => {
    const onMouseMove = (e) => { if (dragging.current) updatePosition(e.clientX) }
    const onMouseUp = () => { dragging.current = false }
    const onTouchMove = (e) => { if (dragging.current) updatePosition(e.touches[0].clientX) }
    const onTouchEnd = () => { dragging.current = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [updatePosition])

  return (
    <div
      className="ba-slider"
      ref={containerRef}
      onTouchStart={(e) => {
        dragging.current = true
        updatePosition(e.touches[0].clientX)
      }}
    >
      {/* After — full bottom layer */}
      <img src={afterImg} alt="After transformation" className="ba-slider__img--after" />

      {/* Before — clipped wrapper, but image spans full slider width */}
      <div className="ba-slider__before-wrap" style={{ width: `${position}%` }}>
        <img
          ref={beforeImgRef}
          src={beforeImg}
          alt="Before transformation"
          className="ba-slider__img--before"
        />
      </div>

      {/* Divider */}
      <div className="ba-slider__divider" style={{ left: `${position}%` }} />

      {/* Handle */}
      <button
        className="ba-slider__handle"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={(e) => { dragging.current = true; e.stopPropagation() }}
        aria-label="Drag to compare before and after"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6.5a1.5 1.5 0 0 0-3 0V11"/>
          <path d="M15 7.5a1.5 1.5 0 0 0-3 0V11"/>
          <path d="M12 9a1.5 1.5 0 0 0-3 0v5"/>
          <path d="M9 9.5a1.5 1.5 0 0 0-3 0v5.5a6 6 0 0 0 12 0v-3a1.5 1.5 0 0 0-3 0"/>
        </svg>
      </button>

      <span className="ba-slider__label ba-slider__label--before">Before</span>
      <span className="ba-slider__label ba-slider__label--after">After</span>
    </div>
  )
}

/* ─── Main section ────────────────────────────────────────────── */
export default function Transformation() {
  return (
    <>
      {/* ══ Part 1: Room Transformation ══ */}
      <section className="transform-section" id="features">
        {/* Left */}
        <div className="transform-section__left">
          <span className="transform-section__pill">Room Transformation</span>
          <h2 className="transform-section__heading">
            The Devra&nbsp; transformation
          </h2>
          <p className="transform-section__sub">Every project is a transformation.</p>
          <ul className="transform-section__tags">
            {tags.map((tag) => (
              <li key={tag}># {tag}</li>
            ))}
          </ul>
        </div>

        {/* Right — before/after slider */}
        <div className="transform-section__right">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* ══ Part 2: Who Are We ══ */}
      <section className="who-section" id="vision">
        <span className="who-section__pill">WHO ARE WE</span>
        <h2 className="who-section__heading">
          Designing meaningful<br />
          spaces with&nbsp; clarity and intent
        </h2>
        <p className="who-section__sub">
          Designed by architects from India's top institutes<br />
          (SPA, IIT, CCA, NIT).
        </p>
        <a href="#about" className="who-section__btn">
          KNOW MORE ABOUT US&nbsp; ↗
        </a>
      </section>
    </>
  )
}
