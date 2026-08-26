import { useEffect, useState } from "react";
import "./Stats.css";

const stats = [
  {
    number: 21,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    number: 0.7,
    suffix: "M+",
    label: "Tons Annual Capacity",
  },
  {
    number: 20,
    suffix: "+",
    label: "Countries Served",
  },
  {
    number: 500,
    suffix: "+",
    label: "Clients Worldwide",
  },
];

function AnimatedNumber({ number, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2500;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = number / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <h2>
      {number < 1 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </h2>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <AnimatedNumber
              number={item.number}
              suffix={item.suffix}
            />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
