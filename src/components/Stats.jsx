import "./Stats.css";

const stats = [
  {
    number: "21+",
    label: "Years of Excellence",
  },
  {
    number: "0.4M+",
    label: "Tons Annual Capacity",
  },
  {
    number: "20+",
    label: "Countries Served",
  },
  {
    number: "500+",
    label: "Clients Worldwide",
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}