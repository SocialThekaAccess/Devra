import { useEffect, useRef, useState } from 'react'
import { Link, useRoute } from '../router'
import devraLogo from '../assets/devraLogo.png'
import './Header.css'

const serviceLinks = [
  { to: '/#services', label: 'All services', note: 'See the complete design spectrum' },
  { to: '/residential', label: 'Residential', note: 'Private homes and villas' },
  { to: '/housing', label: 'Housing', note: 'Community and multi-unit living' },
  { to: '/commercial', label: 'Commercial', note: 'Retail, office and mixed-use' },
  { to: '/schools', label: 'Schools', note: 'Educational and institutional spaces' },
  { to: '/hospitality', label: 'Hospitality', note: 'Hotels and guest experiences' },
  { to: '/farm-houses', label: 'Farm houses', note: 'Retreats shaped around nature' },
]

function isServicesPath(pathname) {
  return ['/residential', '/housing', '/commercial', '/schools', '/hospitality', '/farm-houses']
    .some((path) => pathname.startsWith(path))
}

export default function Header({ variant = 'overlay' }) {
  const pathname = useRoute()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (!servicesOpen) return undefined

    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') setServicesOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [servicesOpen])

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
              setServicesOpen(false)
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
                className={`site-header__navlink ${pathname === '/' ? 'site-header__navlink--active' : ''}`}
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
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`site-header__navlink site-header__dropdown-toggle ${isServicesPath(pathname) ? 'site-header__navlink--active' : ''}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="site-header-services-menu"
                  onClick={() => setServicesOpen((open) => !open)}
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
                          setServicesOpen(false)
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
