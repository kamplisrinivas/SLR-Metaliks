import "./NewsSection.css";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "High-Speed Rail Infrastructure",
    desc: "Supplying advanced alloy steels for high-speed rail components.",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Offshore Energy Platform",
    desc: "Corrosion-resistant steel solutions for offshore environments.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Aerospace Engine Components",
    desc: "High-temperature alloys for critical aerospace applications.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heavy Engineering Solutions",
    desc: "High-strength steels for heavy engineering structures.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
  },
];

export default function NewsSection() {

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);


  useEffect(() => {

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);


  return (
    <section
      ref={sectionRef}
      className={`featured-projects ${
        visible ? "projects-visible" : ""
      }`}
    >

      {/* =================================
          HEADER
      ================================= */}

      <div className="projects-header">

        <div className="projects-heading">

          <span className="projects-tag">
            FEATURED PROJECTS
          </span>

          <h2>
            Featured
            <br />
            <em>Projects.</em>
          </h2>

          <p>
            Delivering engineered steel solutions
            for critical infrastructure and industries
            around the globe.
          </p>

        </div>


        <a
          href="/projects"
          className="view-projects"
        >

          <span>
            View All Projects
          </span>

          <ArrowUpRight size={18} />

        </a>

      </div>


      {/* =================================
          PROJECT GRID
      ================================= */}

      <div className="projects-grid">

        {projects.map((project, index) => (

          <article
            className="project-card"
            key={project.title}
            style={{
              "--project-delay":
                `${index * 120}ms`,
            }}
          >

            {/* Image */}

            <div
              className="project-image"
              style={{
                backgroundImage:
                  `url("${project.image}")`,
              }}
            />


            {/* Overlay */}

            <div className="project-overlay" />


            {/* Top Number */}

            <div className="project-number">

              {String(index + 1).padStart(2, "0")}

            </div>


            {/* Content */}

            <div className="project-content">

              <div className="project-line" />


              <h3>
                {project.title}
              </h3>


              <p>
                {project.desc}
              </p>


              <div className="project-link">

                <span>
                  Explore Project
                </span>

                <div className="project-arrow">

                  <ArrowUpRight
                    size={16}
                  />

                </div>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}