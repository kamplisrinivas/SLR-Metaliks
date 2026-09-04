import "./SustainabilitySection.css";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Leaf, Droplets, Sun, Recycle } from "lucide-react";

const kpis = [
  {
    value: 72,
    label: "Carbon Emission Reduction",
    icon: Leaf,
  },
  {
    value: 85,
    label: "Water Recycling Rate",
    icon: Droplets,
  },
  {
    value: 45,
    label: "Renewable Energy Usage",
    icon: Sun,
  },
  {
    value: 92,
    label: "Waste Recovery Rate",
    icon: Recycle,
  },
];

function AnimatedKPI({ value, active }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!active) return;

    let start = 0;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {

      const progress =
        Math.min(
          (currentTime - startTime) / duration,
          1
        );

      const eased =
        1 - Math.pow(1 - progress, 3);

      start = Math.round(value * eased);

      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }

    };

    requestAnimationFrame(animate);

  }, [active, value]);

  return (
    <h3>
      {count}%
    </h3>
  );
}


export default function SustainabilitySection() {

  const sectionRef = useRef(null);

  const [active, setActive] = useState(false);


  useEffect(() => {

    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          setActive(true);

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
      ref={sectionRef}
      className={`sustainability ${
        active ? "is-visible" : ""
      }`}
    >

      {/* =================================
          LEFT CONTENT
      ================================= */}

      <div className="s-left">

        <div className="sustainability-tag">

          <span />

          SUSTAINABLE STEEL

        </div>


        <h2>

          Sustainable Steel.

          <br />

          <em>
            Responsible Future.
          </em>

        </h2>


        <p className="section-desc">

          We are committed to reducing our
          environmental impact, improving resource
          efficiency and building a more sustainable
          future through responsible steel manufacturing.

        </p>


        {/* =================================
            KPI GRID
        ================================= */}

        <div className="kpis">

          {kpis.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                className="kpi-card"
                key={item.label}
                style={{
                  "--kpi-delay":
                    `${index * 130}ms`,
                }}
              >

                <div className="kpi-icon">

                  <Icon
                    size={17}
                    strokeWidth={1.8}
                  />

                </div>


                <AnimatedKPI
                  value={item.value}
                  active={active}
                />


                <p>
                  {item.label}
                </p>


                <div className="kpi-progress">

                  <span
                    style={{
                      "--progress":
                        `${item.value}%`,
                    }}
                  />

                </div>

              </div>
            );

          })}

        </div>


        {/* =================================
            BUTTON
        ================================= */}

        <button
          className="learn-btn"
          onClick={() =>
            window.location.href =
              "/sustainability"
          }
        >

          <span>
            Explore Sustainability
          </span>

          <ArrowUpRight
            size={18}
          />

        </button>

      </div>


      {/* =================================
          RIGHT VISUAL
      ================================= */}

      <div className="s-right">

        <div className="sustainability-visual">

          {/* Decorative Rings */}

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />


          {/* Glow */}

          <div className="earth-glow" />


          {/* Earth */}

          <div className="image-wrapper">

            <div className="image-inner">

              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt="Earth representing sustainable development"
              />

            </div>

          </div>


          {/* Floating Sustainability Badge */}

          <div className="impact-badge">

            <div className="badge-icon">

              <Leaf
                size={20}
              />

            </div>

            <div>

              <strong>
                Responsible
              </strong>

              <span>
                Manufacturing
              </span>

            </div>

          </div>


          {/* Small Metric */}

          <div className="eco-badge">

            <span className="eco-dot" />

            <div>

              <strong>
                ESG
              </strong>

              <span>
                Focused
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}