import "./AboutSection.css";
import aboutImage from "../images/_MG_0532.jpg";
import wireImage from "../images/wire.jpg";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    target: 4,
    suffix: "+",
    label: "Expansion Projects",
  },
  {
    target: 16,
    suffix: "+",
    label: "Running Projects",
  },
  {
    target: 415,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    target: 13,
    suffix: "+",
    label: "Awards",
  },
];

function AnimatedCounter({ target, suffix = "", active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime = null;
    let animationFrame;

    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth premium ease-out
      const eased =
        1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(target * eased));

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [active, target]);

  return (
    <h3>
      {count}
      <span>{suffix}</span>
    </h3>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about ${visible ? "is-visible" : ""}`}
      ref={sectionRef}
    >

      <div className="about-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}

        <div className="about-content">

          <div className="about-heading">
            <span className="section-line" />

            <span className="section-tag">
              ABOUT SLR METALIKS
            </span>
          </div>

          <h2>
            Building India's Future Through
            <span> Sustainable Steel Manufacturing</span>
          </h2>

          <p>
            SLR Metaliks Limited is one of India's leading
            integrated steel manufacturers, delivering
            premium-quality steel solutions for
            infrastructure, automotive, engineering,
            power, railways and construction sectors.
          </p>

          <p>
            Backed by advanced technology, sustainable
            manufacturing practices and a customer-first
            approach, we continue to strengthen industries
            while creating long-term value for stakeholders.
          </p>

          {/* =================================
              STATS
          ================================= */}

          <div className="about-stats">

            {stats.map((item, index) => (
              <div
                className="about-stat"
                key={item.label}
                style={{
                  "--stat-delay": `${index * 100}ms`,
                }}
              >
                <AnimatedCounter
                  target={item.target}
                  suffix={item.suffix}
                  active={visible}
                />

                <span>{item.label}</span>
              </div>
            ))}

          </div>

          {/* =================================
              CTA
          ================================= */}

          <a
            href="/about"
            className="about-btn"
          >
            <span>Explore Company</span>

            <span className="about-btn-arrow">
              ↗
            </span>
          </a>

        </div>


        {/* =================================
            RIGHT IMAGE
        ================================= */}

        <div className="about-image">

          <div className="image-frame">

            <img
              className="main-image"
              src={aboutImage}
              alt="SLR Metaliks Steel Plant"
            />

            <div className="image-overlay" />

            <div className="image-corner image-corner-one" />
            <div className="image-corner image-corner-two" />

          </div>


          {/* Floating Image */}

          <div className="floating-image-wrapper">

            <img
              className="floating-image"
              src={wireImage}
              alt="Steel Wire Product"
            />

            <div className="floating-label">
              <span className="floating-dot" />
              PRECISION ENGINEERED
            </div>

          </div>


          {/* Experience Badge */}

          <div className="experience-badge">

            <strong>21</strong>

            <div>
              <span>YEARS</span>
              <small>OF EXCELLENCE</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}