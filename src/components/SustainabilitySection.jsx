import "./SustainabilitySection.css";

export default function SustainabilitySection() {
  return (
    <section className="sustainability">

      <div className="s-left">

        <p className="section-tag">
          SUSTAINABLE STEEL.
        </p>

        <h2>
          Sustainable Steel.
          <br />
          <span>Responsible Future.</span>
        </h2>

        <p className="section-desc">
          We are committed to reducing our environmental impact
          and building a sustainable future.
        </p>

        <div className="kpis">

          <div className="kpi-card">
            <h3>72%</h3>
            <p>Carbon Emission Reduction</p>
          </div>

          <div className="kpi-card">
            <h3>85%</h3>
            <p>Water Recycling Rate</p>
          </div>

          <div className="kpi-card">
            <h3>45%</h3>
            <p>Renewable Energy Usage</p>
          </div>

          <div className="kpi-card">
            <h3>92%</h3>
            <p>Waste Recovery Rate</p>
          </div>

        </div>

        <button
  className="learn-btn"
  onClick={() => window.location.href = "/sustainability"}
>
  Learn More →
</button>

      </div>

      <div className="s-right">

        <div className="image-wrapper">

          <div className="image-inner">

            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              alt="Earth"
            />

          </div>

        </div>

      </div>

    </section>
  );
}