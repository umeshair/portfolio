import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import codingsyLogo from '../assets/codingsy.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="navbar-logo">
          <a href="./blog">
            <img src={codingsyLogo} alt="UMESH AIR Logo" />
          </a>
        </div>
        


        {/* Navigation links in the middle */}
        <div className="navbar-menu">
          <ul className="nav-links">
            <li><a href="./blog" className="nav-link"></a></li>
          </ul>
        </div>



        {/* Social icons and Let's Talk button on the right */}
        <div className="navbar-cta">
          <div className="social-icons">
            <a href="https://github.com/umeshair" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={26} />
            </a>
            <a href="https://linkedin.com/in/umeshair" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={26} />
            </a>
          </div>
          <div className="divider">||</div>
         
          <a href="mailto:info@umesh-air.com.np" className="cta-button">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;