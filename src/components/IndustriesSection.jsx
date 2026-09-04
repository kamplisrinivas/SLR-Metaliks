import { useEffect, useRef, useState } from "react";
import "./IndustriesSection.css";

import infrastructure from "../images/infrastructure.jpg";
import Bearing from "../images/Bearing1.jpg";
import automotive from "../images/Automotive.jpg";
import energy from "../images/Energy.jpg";

import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    name: "Automotive",
    image: automotive,
    description: "Precision steel solutions for demanding automotive applications.",
  },
  {
    name: "Infrastructure",
    image: infrastructure,
    description: "High-performance steel supporting India's infrastructure growth.",
  },
  {
    name: "Bearing",
    image: Bearing,
    description: "Engineered steel for high-performance bearing applications.",
  },
  {
    name: "Energy",
    image: energy,
    description: "Reliable steel solutions for critical energy systems.",
  },
];

export default function IndustriesSection() {

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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();

  }, []);


  return (
    <section
      ref={sectionRef}
      className={`industries ${
        visible ? "is-visible" : ""
      }`}
    >

      {/* =================================
          HEADER
      ================================= */}

      <div className="industries-header">

        <div className="industries-tag">

          <span className="tag-line" />

          <span>
            INDUSTRIES WE SERVE
          </span>

          <span className="tag-line" />

        </div>


        <h2>
          Powering <em>Critical Industries</em>
        </h2>


        <p>
          Our engineered steel solutions support
          industries that shape India's infrastructure,
          mobility, energy and industrial future.
        </p>

      </div>


      {/* =================================
          INDUSTRY GRID
      ================================= */}

      <div className="industry-grid">

        {industries.map((industry, index) => (

          <article
            className="industry-card"
            key={industry.name}
            style={{
              "--card-delay": `${index * 140}ms`,
            }}
          >

            {/* Image */}

            <div
              className="industry-image"
              style={{
                backgroundImage:
                  `url("${industry.image}")`,
              }}
            />


            {/* Overlay */}

            <div className="industry-overlay" />


            {/* Number */}

            <div className="industry-number">

              {String(index + 1).padStart(2, "0")}

            </div>


            {/* Content */}

            <div className="industry-content">

              <span className="industry-label">
                INDUSTRY
              </span>

              <h3>
                {industry.name}
              </h3>

              <p>
                {industry.description}
              </p>

              <div className="industry-action">

                <span>
                  Explore
                </span>

                <ArrowUpRight size={18} />

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* =================================
          BOTTOM STATEMENT
      ================================= */}

      <div className="industries-bottom">

        <span>
          ENGINEERED FOR PERFORMANCE
        </span>

        <div className="bottom-line" />

        <span>
          BUILT FOR THE FUTURE
        </span>

      </div>

    </section>
  );
}