import { useState } from "react"
import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo" onClick={() => scrollToSection("hero")}>
          <span className="logo-icon">🏢</span>
          <span className="logo-text">Consultoría Antisísmica</span>
        </div>

        <button
          className={`header-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul className="header-nav-list">
            <li>
              <button
                className="header-nav-link"
                onClick={() => scrollToSection("services")}
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                className="header-nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header