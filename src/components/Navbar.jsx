import devraLogo from '../assets/devraLogo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <img src={devraLogo} alt="Devra" className="navbar__logo" />
    </header>
  )
}
