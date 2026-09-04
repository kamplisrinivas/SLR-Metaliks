import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";



function AnimatedNumber({ value, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;

        started = true;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          // Premium ease-out animation
          const eased = 1 - Math.pow(1 - progress, 4);

          setCount(value * eased);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 900) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      hero.style.setProperty("--mouse-x", `${x}`);
      hero.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" ref={heroRef}>

      {/* Background */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      {/* Cinematic light */}
      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />

      {/* Main Content */}
      <div className="hero-content">

        <div className="hero-tag">
          <span className="tag-dot" />
          ENGINEERING INDIA'S FUTURE
        </div>

        <h1>
          Forging Strength.
          <br />
          <span>Building India's Future.</span>
        </h1>

        <p>
          One of India's leading integrated steel manufacturers,
          producing premium Pig Iron, Billets, GGBS and Steel
          Products with world-class manufacturing and sustainable
          industrial excellence.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={scrollToProducts}
          >
            <span>Explore Products</span>
            <span className="btn-arrow">↗</span>
          </button>

          <button
            className="secondary-btnn"
            onClick={() => navigate("/contact")}
          >
            <span>Contact Us</span>
            <span className="btn-arrow">→</span>
          </button>


        </div>

      </div>

      {/* Statistics */}
      <div className="hero-right">

        {/* Card 1 */}
        <div className="hero-card card-one">

          <div className="card-number">
            <AnimatedNumber value={21} suffix="+" />
          </div>

          <p>Years of Excellence</p>

          <div className="card-line">
            <span />
          </div>

        </div>

        {/* Capacity Card */}
        <div className="hero-card capacity-card">

          <div className="capacity-top">

            <div>
              <div className="card-number">
                <AnimatedNumber
                  value={0.7}
                  suffix="M+"
                  decimals={1}
                />
              </div>

              <p>Total Annual Capacity</p>
            </div>

            <div className="capacity-icon">
              ◈
            </div>

          </div>

          <div className="capacity-visual">

            <div className="capacity-bar">
              <span />
            </div>

            <div className="capacity-labels">

              <div>
                <strong>
                  <AnimatedNumber
                    value={0.4}
                    suffix="M"
                    decimals={1}
                  />
                </strong>

                <small>Alloy Steel</small>
              </div>

              <div>
                <strong>
                  <AnimatedNumber
                    value={0.3}
                    suffix="M"
                    decimals={1}
                  />
                </strong>

                <small>Pig Iron</small>
              </div>

            </div>

          </div>

        </div>

        {/* Card 3 */}
        <div className="hero-card card-three">

          <div className="card-number">
            <AnimatedNumber value={20} suffix="+" />
          </div>

          <p>Countries Served</p>

          <div className="country-dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <button
        className="scroll-indicator"
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <span className="scroll-text">SCROLL TO EXPLORE</span>

        <span className="scroll-line">
          <span />
        </span>
      </button>

    </section>
  );
}