import { useRef, useState } from 'react'
import { Link } from '../router'
import './Transformation.css'

import beforeImg from '../assets/before.avif'
import afterImg from '../assets/after.avif'

const tags = [
  'Architectural Balance',
  'Textural Warmth',
  'Subtle Grandeur',
  'Spatial Flow',
  'Timeless Detailing',
]

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)
  const sliderRef = useRef(null)

  const updatePosition = (clientX, element) => {
    const rect = element.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }

  const handlePointerDown = (event) => {
    dragging.current = true
    event.currentTarget.setPointerCapture?.(event.pointerId)
    updatePosition(event.clientX, event.currentTarget)
  }

  const handlePointerMove = (event) => {
    if (!dragging.current) return
    updatePosition(event.clientX, event.currentTarget)
  }

  const handlePointerUp = (event) => {
    dragging.current = false
    event.currentTarget.releasePointerCapture?.(event.pointerId)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setPosition((current) => Math.max(0, current - 5))
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setPosition((current) => Math.min(100, current + 5))
    }
  }

  return (
    <div
      ref={sliderRef}
      className="ba-slider"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      role="slider"
      aria-label="Before and after room transformation comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After image — full width baseline */}
      <img
        src={afterImg}
        alt="After transformation"
        className="ba-slider__img ba-slider__img--after"
        loading="lazy"
        decoding="async"
      />

      {/*
        Before image — always full size, clipped by clip-path so
        only the left `position`% is visible. No wrapper needed,
        no zoom, no shift.
      */}
      <img
        src={beforeImg}
        alt="Before transformation"
        className="ba-slider__img ba-slider__img--before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        loading="lazy"
        decoding="async"
      />

      <div className="ba-slider__divider" style={{ left: `${position}%` }} />

      <button
        type="button"
        className="ba-slider__handle"
        style={{ left: `${position}%` }}
        aria-hidden="true"
        tabIndex={-1}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 11V6.5a1.5 1.5 0 0 0-3 0V11" />
          <path d="M15 7.5a1.5 1.5 0 0 0-3 0V11" />
          <path d="M12 9a1.5 1.5 0 0 0-3 0v5" />
          <path d="M9 9.5a1.5 1.5 0 0 0-3 0v5.5a6 6 0 0 0 12 0v-3a1.5 1.5 0 0 0-3 0" />
        </svg>
      </button>

      <span className="ba-slider__label ba-slider__label--before">Before</span>
      <span className="ba-slider__label ba-slider__label--after">After</span>
    </div>
  )
}

export default function Transformation() {
  return (
    <>
      <section className="transform-section" id="features">
        <div className="transform-section__left">
          <span className="transform-section__pill">Room Transformation</span>
          <h2 className="transform-section__heading">The Devra transformation</h2>
          <p className="transform-section__sub">Every project is a transformation.</p>
          <ul className="transform-section__tags">
            {tags.map((tag) => (
              <li key={tag}># {tag}</li>
            ))}
          </ul>
        </div>

        <div className="transform-section__right">
          <BeforeAfterSlider />
        </div>
      </section>

      <section className="who-section" id="vision">
        <span className="who-section__pill">WHO ARE WE</span>
        <h2 className="who-section__heading">
          Designing meaningful
          <br />
          spaces with clarity and intent
        </h2>
        <p className="who-section__sub">
          Designed by architects from India&apos;s top institutes
          <br />
          (SPA, IIT, CCA, NIT).
        </p>
        <Link to="/about-us" className="who-section__btn">
          KNOW MORE ABOUT US&nbsp; {'->'}
        </Link>
      </section>
    </>
  )
}
