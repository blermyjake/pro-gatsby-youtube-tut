import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import logo from '../images/empire.png'
import logo2 from '../images/oldRepublic.png'

// console.log(logo)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'maroon',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {/* {siteTitle} */}
          <div className="logoHeader">
            <img src={logo} alt="Empire logo" />
            <img src={logo2} alt="Empire logo" />
            <img src={logo} alt="Empire logo" />
            <img src={logo2} alt="Empire logo" />
            <img src={logo} alt="Empire logo" />
            <img src={logo2} alt="Empire logo" />
          </div>
        </Link>
      </h1>
    </div>
    <nav className="navLink">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
