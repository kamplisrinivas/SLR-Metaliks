import { useEffect, useRef, useState } from "react";
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
    decimals: 1,
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

function AnimatedNumber({ number, suffix, decimals = 0, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let animationFrame;
    let startTime = null;

    const duration = 2200;

    const timer = setTimeout(() => {
      const animate = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        // Premium ease-out
        const easedProgress =
          1 - Math.pow(1 - progress, 4);

        setCount(number * easedProgress);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(number);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [started, number, delay]);

  return (
    <h2 ref={ref}>
      {count.toFixed(decimals)}
      <span>{suffix}</span>
    </h2>
  );
}

export default function Stats() {
  return (
    <section className="stats">

      <div className="stats-heading">
        <span className="stats-line" />

        <p>OUR IMPACT</p>

        <span className="stats-line" />
      </div>

      <div className="stats-container">

        {stats.map((item, index) => (
          <div
            className="stat-card"
            key={item.label}
            style={{
              "--delay": `${index * 120}ms`,
            }}
          >

            {/* Top accent */}
            <div className="stat-accent" />

            {/* Background number */}
            <span className="stat-bg-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="stat-content">

              <AnimatedNumber
                number={item.number}
                suffix={item.suffix}
                decimals={item.decimals || 0}
                delay={index * 150}
              />

              <p>{item.label}</p>

              <div className="stat-progress">
                <span />
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}