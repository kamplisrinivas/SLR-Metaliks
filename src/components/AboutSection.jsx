import "./AboutSection.css";
import aboutImage from "../images/_MG_0532.jpg";
import wireImage from "../images/wire.jpg"; // Adjust the path if needed
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // 3 seconds
    const incrementTime = 20;
    const increment = target / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h3>
      {count}
      {suffix}
    </h3>
  );
};


export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-tag">ABOUT SLR METALIKS</span>

          <h2>
            Building India's Future Through
            <span> Sustainable Steel Manufacturing</span>
          </h2>

          <p>
            SLR Metaliks Limited is one of India's leading integrated
            steel manufacturers, delivering premium-quality steel
            solutions for infrastructure, automotive, engineering,
            power, railways and construction sectors.
          </p>

          <p>
            Backed by advanced technology, sustainable manufacturing
            practices and a customer-first approach, we continue to
            strengthen industries while creating long-term value for
            stakeholders.
          </p>

          <div className="about-stats">
  <div className="stat">
    <AnimatedCounter target={4} suffix="+" />
    <span>Expansion Projects</span>
  </div>

  <div className="stat">
    <AnimatedCounter target={16} suffix="+" />
    <span>Running Projects</span>
  </div>

  <div className="stat">
    <AnimatedCounter target={415} suffix="+" />
    <span>Happy Clients</span>
  </div>

  <div className="stat">
    <AnimatedCounter target={13} suffix="+" />
    <span>Awards</span>
  </div>
</div>




          <button 
  className="btn-primary"
  onClick={() => window.location.href = "/about"}
>
  Explore Company
</button>
        </div>

        <div className="about-image">
  <img
    className="main-image"
    src={aboutImage}
    alt="SLR Metaliks Plant"
  />

  <img
    className="floating-image"
    src={wireImage}
    alt="Steel Wire"
  />
</div>
      </div>
    </section>
  );
}