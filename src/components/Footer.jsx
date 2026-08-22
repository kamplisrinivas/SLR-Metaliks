import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/image001.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img src={logo} alt="SLR Metaliks Limited" />
          <p>Forging Strength. Building India's Future.</p>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/milestone">Milestones</Link>
        </div>

        <div>
          <h4>Products</h4>
          <Link to="/products">Products</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/plant">Manufacturing</Link>
        </div>

        <div>
          <h4>Sustainability</h4>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/sourcing">Responsible Sourcing</Link>
          <Link to="/automation">Automation</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Hospet, Karnataka</p>
          <a href="mailto:info@slrmetaliks.com">
            info@slrmetaliks.com
          </a>
          <a href="tel:+91-8394-294061">
            +91-8394-294061 (Marketing)-228
          </a>
        </div>

      </div>

      <div className="copyright">
        © 2026 SLR Metaliks Limited. All Rights Reserved.
      </div>
    </footer>
  );
}