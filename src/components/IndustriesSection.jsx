import "./IndustriesSection.css";

import infrastructure from "../images/infrastructure.jpg";
import construction from "../images/construction.jpg";
import railways from "../images/railways.jpg";
import automotive from "../images/automotive.jpg";
import energy from "../images/energy.jpg";

const industries = [
  {
    name: "Infrastructure",
    image: infrastructure,
  },
  {
    name: "Construction",
    image: construction,
  },
  {
    name: "Railways",
    image: railways,
  },
  {
    name: "Automotive",
    image: automotive,
  },
  {
    name: "Energy",
    image: energy,
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries">

      <div className="section-header">
        <span>INDUSTRIES WE SERVE</span>
        <h2>Powering Critical Industries</h2>
      </div>

      <div className="industry-grid">

        {industries.map((industry, index) => (
          <div
            className="industry-card"
            key={index}
            style={{
              backgroundImage: `url("${industry.image}")`,
            }}
          >

            <div className="industry-overlay"></div>

            <h3>
              {industry.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}