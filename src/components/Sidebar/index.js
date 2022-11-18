import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#ced4da" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#ced4da" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ced4da" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="antiquewhite"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul className={showNav ? 'mobile-show' : ''}>
        <li>
          <a
            onClick={() => setShowNav(false)}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/zuraabu/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ced4da" />
          </a>
        </li>
        <li>
          <a
            onClick={() => setShowNav(false)}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/zuraabu"
          >
            <FontAwesomeIcon icon={faGithub} color="#ced4da" />
          </a>
        </li>
        <li>
          <a
            onClick={() => setShowNav(false)}
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/zuraabu"
          >
            <FontAwesomeIcon icon={faCodepen} color="#ced4da" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="antiquewhite"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
