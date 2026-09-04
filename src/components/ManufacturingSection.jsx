import { useEffect, useRef, useState } from "react";
import "./ManufacturingSection.css";
import manufacturingBg from "../images/manufacturing-bg.jpg";

import {
  Factory,
  Flame,
  Hammer,
  Box,
  Cog,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react";

const process = [
  {
    title: "Raw Materials",
    icon: Package,
  },
  {
    title: "Blast Furnace",
    icon: Flame,
  },
  {
    title: "Steel Melting",
    icon: Factory,
  },
  {
    title: "Casting",
    icon: Box,
  },
  {
    title: "Rolling",
    icon: Cog,
  },
  {
    title: "Heat Treatment",
    icon: Hammer,
  },
  {
    title: "Quality Testing",
    icon: ShieldCheck,
  },
  {
    title: "Dispatch",
    icon: Truck,
  },
];

export default function ManufacturingSection() {
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
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`manufacturing ${
        visible ? "is-visible" : ""
      }`}
      style={{
        backgroundImage: `url(${manufacturingBg})`,
      }}
    >

      {/* Background */}
      <div className="manufacturing-bg" />

      <div className="manufacturing-overlay" />


      <div className="manufacturing-content">

        {/* =================================
            HEADER
        ================================= */}

        <div className="section-header">

          <div className="manufacturing-tag">

            <span className="tag-line" />

            <span>
              MANUFACTURING EXCELLENCE
            </span>

          </div>

          <h2>
            Our Manufacturing
            <em> Process</em>
          </h2>

          <p>
            From premium raw materials to
            precision-engineered steel products,
            every stage follows rigorous quality,
            safety and sustainability standards.
          </p>

        </div>


        {/* =================================
            PROCESS
        ================================= */}

        <div className="process-wrapper">

          <div className="process-line">

            <div className="process-progress" />

          </div>


          <div className="process-flow">

            {process.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  className="process-item"
                  key={item.title}
                  style={{
                    "--step-delay": `${index * 120}ms`,
                  }}
                >

                  {/* Number */}

                  <span className="step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* Icon */}

                  <div className="icon-wrapper">

                    <div className="icon-circle">

                      <Icon
                        size={26}
                        strokeWidth={1.8}
                      />

                    </div>

                    <span className="icon-pulse" />

                  </div>


                  {/* Content */}

                  <div className="process-info">

                    <h3>
                      {item.title}
                    </h3>

                    <span>
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* =================================
            BOTTOM STATUS
        ================================= */}

        <div className="manufacturing-status">

          <div className="status-item">

            <span className="status-dot" />

            <span>
              QUALITY CONTROL
            </span>

          </div>

          <div className="status-divider" />

          <div className="status-item">

            <span className="status-dot gold" />

            <span>
              ADVANCED TECHNOLOGY
            </span>

          </div>

          <div className="status-divider" />

          <div className="status-item">

            <span className="status-dot" />

            <span>
              SUSTAINABLE PRODUCTION
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}