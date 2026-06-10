import { useEffect, useRef, useState } from 'react'
import { Link, useRoute } from '../router'
import devraLogo from '../assets/devraLogo.png'
import './Header.css'

const serviceLinks = [
  { to: '/services/residential', label: 'Residential', note: 'Private homes and villas' },
  { to: '/services/housing', label: 'Housing', note: 'Community and multi-unit living' },
  { to: '/services/commercial', label: 'Commercial', note: 'Retail, office and mixed-use' },
  { to: '/services/schools', label: 'Schools', note: 'Educational and institutional spaces' },
  { to: '/services/hospitality', label: 'Hospitality', note: 'Hotels and guest experiences' },
  { to: '/services/farm-houses', label: 'Farm houses', note: 'Retreats shaped around nature' },
]

function isHomePath(pathname) {
  return pathname === '/' || pathname === '/features' || pathname === '/vision' || pathname === '/projects'
}

function isServicesPath(pathname) {
  return pathname === '/services' || pathname.startsWith('/services/')
}

export default function Header({ variant = 'overlay' }) {
  const pathname = useRoute()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const closeTimerRef = useRef(null)

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const openServicesMenu = () => {
    clearCloseTimer()
    setServicesOpen(true)
  }

  const closeServicesMenu = ({ immediate = false } = {}) => {
    clearCloseTimer()

    if (immediate) {
      setServicesOpen(false)
      return
    }

    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false)
      closeTimerRef.current = null
    }, 180)
  }

  useEffect(() => {
    if (!servicesOpen) return undefined

    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeServicesMenu({ immediate: true })
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeServicesMenu({ immediate: true })
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [servicesOpen])

  useEffect(() => () => clearCloseTimer(), [])

  return (
    <header className={`site-header site-header--${variant}`}>
      <div className="site-header__inner">
        <div className="site-header__bar">
          <Link
            to="/"
            className="site-header__logo-link"
            aria-label="Go to homepage"
            onClick={() => setMenuOpen(false)}
          >
            <img src={devraLogo} alt="Devra" className="site-header__logo" />
          </Link>

          <button
            type="button"
            className={`site-header__menu-toggle ${menuOpen ? 'site-header__menu-toggle--open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="site-header-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => {
              setMenuOpen((open) => !open)
              closeServicesMenu({ immediate: true })
            }}
          >
            <span />
            <span />
          </button>

          <nav className="site-header__nav" aria-label="Primary navigation">
            <div
              id="site-header-navigation"
              className={`site-header__nav-shell ${menuOpen ? 'site-header__nav-shell--open' : ''}`}
            >
              <Link
                to="/"
                className={`site-header__navlink ${isHomePath(pathname) ? 'site-header__navlink--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={`site-header__navlink ${pathname === '/about-us' ? 'site-header__navlink--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                About us
              </Link>

              <div
                ref={dropdownRef}
                className={`site-header__dropdown ${servicesOpen ? 'site-header__dropdown--open' : ''}`}
                onMouseEnter={openServicesMenu}
                onMouseLeave={() => closeServicesMenu()}
              >
                <button
                  type="button"
                  className={`site-header__navlink site-header__dropdown-toggle ${isServicesPath(pathname) ? 'site-header__navlink--active' : ''}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="site-header-services-menu"
                  onClick={() => {
                    if (servicesOpen) {
                      closeServicesMenu({ immediate: true })
                    } else {
                      openServicesMenu()
                    }
                  }}
                >
                  Services
                  <span className="site-header__dropdown-caret" aria-hidden="true" />
                </button>

                <div
                  id="site-header-services-menu"
                  className="site-header__dropdown-menu"
                  role="menu"
                  aria-label="Services menu"
                >
                  <div className="site-header__dropdown-head">
                    <span className="site-header__dropdown-kicker">Explore</span>
                    <p className="site-header__dropdown-title">Architecture across scales and typologies</p>
                  </div>
                  <div className="site-header__dropdown-grid">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="site-header__dropdown-link"
                        onClick={() => {
                          setMenuOpen(false)
                          closeServicesMenu({ immediate: true })
                        }}
                      >
                        <span className="site-header__dropdown-link-title">{link.label}</span>
                        <span className="site-header__dropdown-link-note">{link.note}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className={`site-header__navlink ${pathname === '/contact' ? 'site-header__navlink--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
