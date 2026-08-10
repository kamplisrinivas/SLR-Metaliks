import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta">

      <div className="cta-container">

        {/* Left Empty/Image Area */}
        <div className="cta-image">
        </div>


        {/* Right Content */}
        <div className="cta-box">

          <span>
            CONNECT WITH US
          </span>

          <h2>
            Let's Build a Stronger Future Together
          </h2>

          <p>
            Partner with SLR Metaliks for premium steel solutions
            backed by quality, technology and reliability.
          </p>


          <div className="cta-buttons">

            <button>
              Request Quote
            </button>

            <button className="outline">
              Download Brochure
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}