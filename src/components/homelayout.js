import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Layout = props => {
  const { title, children, isHomepage } = props;
  const [toggleNav, setToggleNav] = useState(false);

  // This function is used to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    // This function is responsible for toggling the visibility of the back to top button
    function toggleBackToTopBtn() {
      const backToTopBtn = document.getElementById('backToTop');
      if (window.scrollY > 3000) { // This value can be adjusted based on when you want the button to appear
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.display = 'block'; // Make the button visible
      } else {
        backToTopBtn.style.opacity = '0';
        // Set timeout to delay hiding the button to allow the opacity transition to finish
        setTimeout(() => {
          if (window.scrollY <= 3000) {
            backToTopBtn.style.display = 'none';
          }
        }, 1000); // Adjust this to match your opacity transition time
      }
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', toggleBackToTopBtn);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', toggleBackToTopBtn);
  }, []);



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
            </ul>
          </nav>

          
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

      <main id="site-main-hom" className="site-main-home">
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
