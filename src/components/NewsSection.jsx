import "./NewsSection.css";

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
  return (
    <section className="featured-projects">

      <div className="projects-header">

        <div>
          <span>FEATURED PROJECTS</span>
          <h2>Featured Projects</h2>
          <p>
            Delivering value in critical projects around the globe.
          </p>
        </div>

        <a href="#">View All Projects →</a>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className="overlay"></div>

            <div className="project-content">

              <div className="project-icon">
                ✓
              </div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}