import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children, isHomepage } = props
  const [toggleNav, setToggleNav] = React.useState(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Listen for scroll events to show or hide the button
window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (window.scrollY > 2000) {
      backToTopBtn.style.opacity = '1';
  } else {
      backToTopBtn.style.opacity = '0';
  }
});


  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className={`site-head ${isHomepage ? 'homepage-header' : ''}`}>
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
            </ul>
          </nav>
          
            <div className="site-head-center">
              <Link className={`site-head-logo ${isHomepage ? 'site-head-logo-home' : ''}`} to={`/`}>
                {title}
              </Link>
            </div>

          
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="/BenjaminShanahanCV2023.pdf"
                title="View CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
              <a
                href="https://www.linkedin.com/in/benshan"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>

      <button id="backToTop" className="back-to-top" onClick={scrollToTop}>Back to Top</button>

      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>
      </footer>
    </div>
  )
}

export default Layout
