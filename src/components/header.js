import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import social icons
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(248, 235, 191)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "rgb(100, 78, 221)",
        }}
      >
        <h2>home</h2>
      </Link>
      <div
        className="social-icon-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "20%",
          marginLeft: "60%",
        }}
      >
        <a href="https://github.com/karlmiche">
          <img
            className="social-icons"
            alt="github social icon - the logo is a cat with eight arms"
            src={github}
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/karly-smith-232953159/">
          <img
            className="social-icons"
            src={linkedin}
            alt="linkedin social icon is a logo made of l and i"
          ></img>
        </a>
        <a href="https://twitter.com/karlymsdev">
          <img
            className="social-icons"
            src={twitter}
            alt="twitter social icon is a bird"
          ></img>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
