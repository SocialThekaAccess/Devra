import { Link } from '../router'
import devraLogo from '../assets/devraLogo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo-link" aria-label="Go to homepage">
        <img src={devraLogo} alt="Devra" className="navbar__logo" />
      </Link>
    </header>
  )
}
