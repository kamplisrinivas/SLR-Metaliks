import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/image001.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const navbarRef = useRef(null);

  /* ==========================
     HIDE / SHOW NAVBAR
  ========================== */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setActiveMenu(null);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==========================
     CLICK OUTSIDE
  ========================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* ==========================
     CLOSE MENU
  ========================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  /* ==========================
     TOGGLE MEGA MENU
  ========================== */

  const toggleMegaMenu = (menu) => {
    setActiveMenu((current) =>
      current === menu ? null : menu
    );
  };

  return (
    <header
      ref={navbarRef}
      className={`navbar ${showNavbar ? "show" : "hide"}`}
    >
      <div className="nav-container">

        {/* ==========================
            LOGO
        ========================== */}

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="SLR Metaliks Limited"
          />
        </Link>

        {/* ==========================
            NAVIGATION
        ========================== */}

        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          {/* HOME */}

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>


          {/* ==========================
              ABOUT US
          ========================== */}

          <div className="mega-menu-wrapper">

            <button
              type="button"
              className={`mega-trigger ${
                activeMenu === "about"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleMegaMenu("about")
              }
            >
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


            {activeMenu === "about" && (
              <div className="mega-menu open">

                <div className="mega-menu-grid">

                  <div className="mega-feature">

                    <span className="mega-label">
                      COMPANY
                    </span>

                    <h3>
                      Building Steel.
                      <br />
                      Building Trust.
                    </h3>

                    <p>
                      Explore our journey,
                      leadership vision,
                      manufacturing excellence
                      and growth story.
                    </p>

                  </div>


                  <div className="mega-links">

                    <Link
                      to="/about"
                      onClick={closeMenu}
                    >
                      <span>01</span>

                      <div>
                        <h4>
                          About Company
                        </h4>

                        <p>
                          Who we are and what
                          drives us.
                        </p>
                      </div>
                    </Link>


                    <Link
                      to="/leadership"
                      onClick={closeMenu}
                    >
                      <span>02</span>

                      <div>
                        <h4>
                          Leadership
                        </h4>

                        <p>
                          Meet the people
                          shaping our future.
                        </p>
                      </div>
                    </Link>


                    <Link
                      to="/milestone"
                      onClick={closeMenu}
                    >
                      <span>03</span>

                      <div>
                        <h4>
                          Milestones
                        </h4>

                        <p>
                          21+ years of
                          transformation and growth.
                        </p>
                      </div>
                    </Link>

                  </div>

                </div>

              </div>
            )}

          </div>


          {/* ==========================
              PRODUCTS
          ========================== */}

          <div className="mega-menu-wrapper">

            <button
              type="button"
              className={`mega-trigger ${
                activeMenu === "products"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleMegaMenu("products")
              }
            >
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


            {activeMenu === "products" && (
              <div className="mega-menu open">

                <div className="mega-menu-grid">

                  <div className="mega-feature">

                    <span className="mega-label">
                      PRODUCTS
                    </span>

                    <h3>
                      Explore Our
                      Product Portfolio
                    </h3>

                    <p>
                      Discover our steel grades,
                      engineered products and
                      application-specific solutions.
                    </p>

                  </div>


                  <div className="mega-links">

                    <Link
                      to="/products"
                      onClick={closeMenu}
                    >
                      <span>01</span>

                      <div>
                        <h4>
                          Products
                        </h4>

                        <p>
                          Browse our steel grades
                          and product range.
                        </p>
                      </div>
                    </Link>


                    <Link
                      to="/applications"
                      onClick={closeMenu}
                    >
                      <span>02</span>

                      <div>
                        <h4>
                          Applications
                        </h4>

                        <p>
                          See where our steels are
                          used across industries.
                        </p>
                      </div>
                    </Link>

                  </div>

                </div>

              </div>
            )}

          </div>


          {/* ==========================
              INDUSTRIES
          ========================== */}

          <div className="mega-menu-wrapper">

            <button
              type="button"
              className={`mega-trigger ${
                activeMenu === "industries"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleMegaMenu("industries")
              }
            >
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


            {activeMenu === "industries" && (
              <div className="mega-menu open">

                <div className="mega-menu-grid">

                  <div className="mega-feature">

                    <span className="mega-label">
                      INDUSTRIES
                    </span>

                    <h3>
                      Our Manufacturing
                      Facilities
                    </h3>

                    <p>
                      Explore our plant
                      infrastructure and
                      automation capabilities.
                    </p>

                  </div>


                  <div className="mega-links">

                    <Link
                      to="/plant"
                      onClick={closeMenu}
                    >
                      <span>01</span>

                      <div>
                        <h4>
                          Plant
                        </h4>

                        <p>
                          Explore our
                          manufacturing facilities.
                        </p>
                      </div>
                    </Link>


                    <Link
                      to="/automation"
                      onClick={closeMenu}
                    >
                      <span>02</span>

                      <div>
                        <h4>
                          Automation
                        </h4>

                        <p>
                          Advanced automation
                          for precision manufacturing.
                        </p>
                      </div>
                    </Link>

                  </div>

                </div>

              </div>
            )}

          </div>


          {/* ==========================
              NORMAL LINKS
          ========================== */}

          <Link
            to="/sustainability"
            onClick={closeMenu}
          >
            Sustainability
          </Link>


          <Link
            to="/sourcing"
            onClick={closeMenu}
          >
            Supplying to SLRM
          </Link>


          <Link
            to="/clients"
            onClick={closeMenu}
          >
            Our Clients
          </Link>


          <a
            href="https://slrm.procol.ai/send-otp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Vendor Onboarding
          </a>


          <Link
            to="/careers"
            onClick={closeMenu}
          >
            Careers
          </Link>


          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

        </nav>


        {/* ==========================
            REQUEST QUOTE
        ========================== */}

        <Link
          to="/RequestSamplePage"
          className="quote-btn"
          onClick={closeMenu}
        >
          Request Quote
        </Link>


        {/* ==========================
            MOBILE HAMBURGER
        ========================== */}

        <button
          type="button"
          className={`hamburger ${
            menuOpen ? "open" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}