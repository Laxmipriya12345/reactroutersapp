import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="image">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className="img"
    />

    <ul className="items">
      <li>
        <Link className="nav-item" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
