import { useState, useRef } from 'react'
import './VideoSection.css'

import devraVideo from '../assets/devraVideo.mp4'
import videoPoster from '../assets/residential.avif'  // swap with a real thumbnail if you have one

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

  return (
    <section className="video-section" id="projects">
      <div className="video-section__wrapper">
        {/* Poster shown until user hits play */}
        {!playing && (
          <img
            src={videoPoster}
            alt="Devra architecture showreel"
            className="video-section__poster"
          />
        )}

        {/* Actual video */}
        <video
          ref={videoRef}
          className={`video-section__video ${playing ? 'video-section__video--visible' : ''}`}
          poster={videoPoster}
          controls={playing}
          playsInline
          onEnded={() => setPlaying(false)}
          src={devraVideo}
        />

        {/* Dark overlay (hidden when playing) */}
        {!playing && <div className="video-section__overlay" />}

        {/* Play button */}
        {!playing && (
          <button
            className="video-section__play-btn"
            onClick={handlePlay}
            aria-label="Play showreel video"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
