import "./IndustriesSection.css";

import infrastructure from "../images/infrastructure.jpg";

import Bearing from "../images/Bearing.jpg";
import automotive from "../images/Automotive.jpg";
import energy from "../images/Energy.jpg";

const industries = [
  {
    name: "Automotive",
    image: automotive,
  },
  {
    name: "Infrastructure",
    image: infrastructure,
  },
  
  {
    name: "Bearing",
    image: Bearing,
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