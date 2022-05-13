import { useState } from 'react'
import './header.styles.scss'

const Header = () => {
  const [shown, setShown] = useState(false)
  const toggleMenu = () => setShown((prev) => !prev)
  const hideMenu = () => setShown(false)
  return (
    <div className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          Kolerov
        </a>
        <div className={`menu${shown ? ' shown' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={hideMenu}>
                <i className="bx bx-home nav-icon"></i>Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#profile" className="nav-link" onClick={hideMenu}>
                <i className="bx bx-user nav-icon"></i>Profile
              </a>
            </li>

            <li className="nav-item">
              <a href="#education" className="nav-link" onClick={hideMenu}>
                <i className="bx bx-book nav-icon"></i>Education
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={hideMenu}>
                <i className="bx bx-receipt nav-icon"></i>Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#experience" className="nav-link" onClick={hideMenu}>
                <i className="bx bx-briefcase nav-icon"></i>Experience
              </a>
            </li>

            <li className="nav-item">
              <a href="#certificates" className="nav-link" onClick={hideMenu}>
                <i className="bx bx-award nav-icon"></i>Certificates
              </a>
            </li>

            <li className="nav-item">
              <a href="#references" className="nav-link" onClick={hideMenu}>
                <i className="bx bx-link-external nav-icon"></i>References
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </div>
  )
}

export default Header
