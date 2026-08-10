import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">

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
          <button className="primary-btn">
            Explore Products
          </button>

          <button className="primary-btn">
            Contact Us
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">
          <h3>21+</h3>
          <p>Years of Excellence</p>
        </div>

        <div className="hero-card">
          <h3>0.4M+</h3>
          <p>Tons Annual Capacity</p>
        </div>

        <div className="hero-card">
          <h3>20+</h3>
          <p>Countries Served</p>
        </div>

      </div>

    </section>
  );
}