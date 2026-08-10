// Milestone.jsx

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { milestones } from "./milestones";
import "./Milestone.css";

const AUTOPLAY_INTERVAL = 5000;

export default function TimelineExplorer() {
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const autoplayRef = useRef(null);

  const activeMilestone = useMemo(
    () => milestones[activeIndex],
    [activeIndex]
  );

  const progressPercentage =
    ((activeIndex + 1) / milestones.length) * 100;

  const goToSlide = (index) => {
    const next =
      (index + milestones.length) % milestones.length;

    setActiveIndex(next);
  };

  const nextSlide = () => {
    goToSlide(activeIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(activeIndex - 1);
  };

  useEffect(() => {
    const activeNode = itemRefs.current[activeIndex];

    if (activeNode) {
      activeNode.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!isPlaying) return;

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        prev === milestones.length - 1 ? 0 : prev + 1
      );
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(autoplayRef.current);
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowRight":
          nextSlide();
          break;

        case "ArrowLeft":
          prevSlide();
          break;

        case " ":
          e.preventDefault();
          setIsPlaying((prev) => !prev);
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    const container = timelineRef.current;

    if (!container) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () =>
      container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section
      className="timeline-section"
      aria-label="Company Timeline"
    >
      <div className="timeline-noise" />

      <div className="timeline-container">
        {/* HEADER */}

        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="timeline-eyebrow">
            OUR JOURNEY
          </span>

          <h2 className="timeline-title">
            Building Steel.
            <br />
            Building Trust.
          </h2>

          <p className="timeline-description">
            Every milestone reflects our relentless pursuit
            of innovation, operational excellence and
            sustainable growth. A journey defined by
            technology, trust and transformation.
          </p>
        </motion.div>

        {/* TIMELINE BAR */}

        <div className="timeline-wrapper">
          <div className="timeline-progress-track">
            <motion.div
              className="timeline-progress-fill"
              animate={{
                width: `${progressPercentage}%`,
              }}
              transition={{
                duration: 0.6,
              }}
            />
          </div>

          <div
            ref={timelineRef}
            className="timeline-scroll"
          >
            {milestones.map((item, index) => (
              <button
                key={item.id}
                ref={(el) =>
                  (itemRefs.current[index] = el)
                }
                className={`timeline-node ${
                  activeIndex === index
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setIsPlaying(false);
                  goToSlide(index);
                }}
                aria-label={item.title}
              >
                <span className="timeline-dot" />
                <span className="timeline-year">
                  {item.year}
                </span>

                <div className="timeline-preview">
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* SHOWCASE CARD */}

        <div className="showcase-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.id}
              className="showcase-card"
              initial={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: 40,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="showcase-watermark">
                {activeMilestone.year}
              </div>

              <div className="showcase-content">
                <div className="showcase-badge">
                  {activeMilestone.category}
                </div>

                <h3 className="showcase-title">
                  {activeMilestone.title}
                </h3>

                <p className="showcase-text">
                  {activeMilestone.description}
                </p>

                <ul className="showcase-list">
                  {activeMilestone.bullets.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>

                <div className="showcase-progress">
                  Progress:
                  <span>
                    {activeMilestone.progress}%
                  </span>
                </div>
              </div>

              <motion.div
                className="showcase-image-wrap"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <img
                  src={activeMilestone.image}
                  alt={activeMilestone.title}
                  className="showcase-image"
                />

                <div className="showcase-overlay" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* NAVIGATION */}

        <div className="timeline-actions">
          <button
            className="timeline-btn"
            onClick={prevSlide}
            aria-label="Previous milestone"
          >
            ← Previous
          </button>

          <button
            className="timeline-btn play"
            onClick={() =>
              setIsPlaying((prev) => !prev)
            }
            aria-label="Toggle autoplay"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button
            className="timeline-btn"
            onClick={nextSlide}
            aria-label="Next milestone"
          >
            Next →
          </button>
        </div>

        {/* STATS */}

        <motion.div
          className="timeline-stats"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="stat-card">
            <strong>21+</strong>
            <span>Years</span>
          </div>

          <div className="stat-card">
            <strong>1500+</strong>
            <span>Employees</span>
          </div>

          <div className="stat-card">
            <strong>12+</strong>
            <span>Countries</span>
          </div>

          <div className="stat-card">
            <strong>500+</strong>
            <span>Customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}