import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/image001.png";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const [showNavbar, setShowNavbar] = useState(true);


useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 20) {
      setShowNavbar(true);
    } else if (currentScrollY > lastScrollY) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


const closeMenu = () => setMenuOpen(false);

return (
  <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
    <div className="nav-container">


    {/* Logo */}
    <Link to="/" className="logo" onClick={closeMenu}>
      <img src={logo} alt="SLR Metaliks Limited" />
    </Link>

    {/* Navigation */}
    <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

      <Link to="/" onClick={closeMenu}>
        Home
      </Link>

      <div className="mega-menu-wrapper">
  <button className="mega-trigger">
    About Us
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>

  <div className="mega-menu">
    <div className="mega-menu-grid">

      <div className="mega-feature">
        <span className="mega-label">COMPANY</span>
        <h3>Building Steel. Building Trust.</h3>
        <p>
          Explore our journey, leadership vision,
          manufacturing excellence and growth story.
        </p>
      </div>

      <div className="mega-links">
        <Link to="/about" onClick={closeMenu}>
          <span>01</span>
          <div>
            <h4>About Company</h4>
            <p>Who we are and what drives us.</p>
          </div>
        </Link>

        <Link to="/Leadership" onClick={closeMenu}>
          <span>02</span>
          <div>
            <h4>Leadership</h4>
            <p>Meet the people shaping our future.</p>
          </div>
        </Link>

        <Link to="/Milestone" onClick={closeMenu}>
          <span>03</span>
          <div>
            <h4>Milestones</h4>
            <p>21+ years of transformation and growth.</p>
          </div>
        </Link>
      </div>

    </div>
  </div>
</div>

      <div className="mega-menu-wrapper">
  <button className="mega-trigger">
    Products
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>

  <div className="mega-menu">
    <div className="mega-menu-grid">

      <div className="mega-feature">
        <span className="mega-label">PRODUCTS</span>
        <h3>Explore Our Product Portfolio</h3>
        <p>
          Discover our steel grades, engineered products, and
          application-specific solutions for the automotive and engineering
          industries.
        </p>
      </div>

      <div className="mega-links">
        <Link to="/Products" onClick={closeMenu}>
          <span>01</span>
          <div>
            <h4>Products</h4>
            <p>Browse our steel grades and product range.</p>
          </div>
        </Link>

        <Link to="/Applications" onClick={closeMenu}>
          <span>02</span>
          <div>
            <h4>Applications</h4>
            <p>See where our steels are used across industries.</p>
          </div>
        </Link>
      </div>

    </div>
  </div>
</div>

      <div className="mega-menu-wrapper">
  <button className="mega-trigger">
    Industries
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>

  <div className="mega-menu">
    <div className="mega-menu-grid">
      <div className="mega-feature">
        <span className="mega-label">INDUSTRIES</span>
        <h3>Our Manufacturing Facilities</h3>
        <p>
          Explore our plant infrastructure and automation capabilities that
          drive quality, efficiency, and innovation.
        </p>
      </div>

      <div className="mega-links">
        

        <Link to="/Plant" onClick={closeMenu}>
          <span>01</span>
          <div>
            <h4>Plant</h4>
            <p>Explore our manufacturing facilities.</p>
          </div>
        </Link>

        <Link to="/Automation" onClick={closeMenu}>
          <span>02</span>
          <div>
            <h4>Automation</h4>
            <p>Advanced automation for precision manufacturing.</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>

      <Link to="/sustainability" onClick={closeMenu}>
        Sustainability
      </Link>

      <Link to="/Sourcing" onClick={closeMenu}>
        Supplying  to SLRM
      </Link>

      <Link to="/Clients" onClick={closeMenu}>
        Our Clients
      </Link>

      <Link to="https://slrm.procol.ai/send-otp" onClick={closeMenu}>
        Vendor Onboarding
      </Link>

      <Link to="/Careers" onClick={closeMenu}>
        Careers
      </Link>

      <Link to="/contact" onClick={closeMenu}>
        Contact
      </Link>

    </nav>

    {/* CTA Button */}
    <button
  className="quote-btn"
  onClick={() => window.location.href = "http://192.168.11.38:5175/Requestsamplepage"}
>
  Request Quote
</button>

    {/* Mobile Menu */}
    <div
      className={`hamburger ${menuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>
</header>


);
}
