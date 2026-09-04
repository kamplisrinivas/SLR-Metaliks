import React, { useEffect } from 'react';
import './Aboutpage.css';
import { Link } from 'react-router-dom';

import mdImage from '../images/MD.jpg';
import leadershipImg from '../images/leadership-team.jpg';

/*
  SLR Metaliks — About Page
  Animated version:
  - Scroll reveal animations
  - Staggered stats/cards
  - Timeline animation
  - Image reveal + hover zoom
  - Button hover effects
  - Respect prefers-reduced-motion
*/

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about', active: true },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Contact', href: '/contact' },
];

const HERO_STATS = [
  { num: '21+', label: 'Years of Excellence' },
  { num: '0.7 M+', label: 'Tons Annual Capacity' },
  { num: '20+', label: 'Countries Served' },
];

const STRIP_STATS = [
  { num: '21+', label: 'Years of Excellence' },
  { num: '0.4M+', label: 'Tons Annual Capacity' },
  { num: '20+', label: 'Countries Served' },
  { num: '500+', label: 'Clients Worldwide' },
];

const STORY_STATS = [
  { num: '35+', label: 'Years Experience' },
  { num: '2M+', label: 'TPA Capacity' },
  { num: '1500+', label: 'Employees' },
];

const MILESTONES = [
  {
    year: '2005',
    title: 'Foundation',
    desc: 'SLR Metaliks is established in Hosapete, Karnataka, as a pig iron manufacturer.',
  },
  {
    year: '2012',
    title: 'Strategic JV',
    desc: 'A joint venture brings in capital and expertise to scale into alloy steel.',
  },
  {
    year: '2015',
    title: 'Steel Producer',
    desc: 'Integrated steelmaking comes online, moving beyond pig iron into finished steel.',
  },
  {
    year: '2020',
    title: 'Green Initiatives',
    desc: 'Captive power and renewable allocations reduce the plant’s energy footprint.',
  },
  {
    year: 'Today',
    title: '21+ Years On',
    desc: 'A full alloy and engineering steel producer serving industries worldwide.',
  },
];

const VALUES = [
  {
    icon: '⚙',
    title: 'Quality',
    desc: 'Every heat is tested, traced, and held to the spec our customers build against.',
  },
  {
    icon: '⚡',
    title: 'Sustainability',
    desc: 'Cleaner captive power and disciplined resource use, built into how we operate.',
  },
  {
    icon: '⛨',
    title: 'Safety',
    desc: 'A plant floor where every process is designed around the people running it.',
  },
  {
    icon: '✦',
    title: 'Innovation',
    desc: 'Continuous investment in technology, from casting to quality testing.',
  },
  {
    icon: '◈',
    title: 'Integrity',
    desc: 'Transparent dealings with customers, partners, and the communities we work in.',
  },
  {
    icon: '⚭',
    title: 'Partnership',
    desc: 'Long-term relationships with OEMs and industries, not one-off transactions.',
  },
];

const SUSTAIN_STATS = [
  { num: '72%', label: 'Carbon Emission Reduction' },
  { num: '85%', label: 'Water Recycling Rate' },
  { num: '45%', label: 'Renewable Energy Usage' },
  { num: '92%', label: 'Waste Recovery Rate' },
];


/* =========================================================
   SCROLL REVEAL HOOK
========================================================= */

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '[data-reveal], [data-reveal-left], [data-reveal-right], [data-reveal-scale]'
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}


/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="slr-hero">
      <div className="slr-hero-overlay" />

      <div className="slr-container slr-hero-inner">

        <div className="slr-hero-content">

          <div
            className="slr-breadcrumb hero-animate hero-delay-1"
          >
            <a href="/">Home</a>
            <span> / </span>
            <span className="slr-accent">About Us</span>
          </div>

          <h1 className="slr-app-title hero-animate hero-delay-2">
  <span>Two decades of forging</span>
  <span>India&rsquo;s steel future.</span>
</h1>


          <p className="slr-hero-sub hero-animate hero-delay-3">
            SLR Metaliks is an integrated alloy and engineering steel manufacturer
            built from the ground up in Hosapete, Karnataka &mdash; from a single
            pig iron unit to a full sinter-to-rolling operation.
          </p>

        </div>

        <div className="slr-hero-stats">

          {HERO_STATS.map((s, index) => (
            <div
              key={s.label}
              className={`slr-hero-stat hero-animate hero-delay-${index + 3}`}
            >
              <div className="num">{s.num}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


/* =========================================================
   OUR STORY
========================================================= */

function OurStory() {
  return (
    <section className="slr-section">
      <div className="slr-container slr-split">

        <div data-reveal-left>

          <span className="slr-eyebrow">
            Our Story
          </span>

          <h2>
            From a single furnace to an integrated steel powerhouse
          </h2>

          <p>
            SLR Metaliks started as a pig iron manufacturer in Hosapete, Karnataka.
            A strategic joint venture brought in the capital to build out a full
            sinter, blast furnace, Coke Oven and steelmaking shop on one 300-acre
            site &mdash; turning a single-product unit into an integrated alloy
            steel producer.
          </p>

          <p>
            Today the plant runs its own rolling mill alongside its melting shop,
            producing engineered grades for automotive, rail, infrastructure, and
            energy customers across the country and beyond.
          </p>

          <div className="slr-split-stats">

            {STORY_STATS.map((s, index) => (
              <div
                key={s.label}
                className="story-stat"
                style={{ '--delay': `${index * 120}ms` }}
              >
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}

          </div>

          <div className="slr-split-cta">

            <a
              href="/SLR-Brochure-new.pdf"
              download="SLR-Company-Profile.pdf"
              className="slr-btn slr-btn-outline-dark"
            >
              <span>Download Company Profile</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>

          </div>

        </div>

        <div
          className="slr-media-frame slr-image-reveal"
          data-reveal-right
        >
          <img
            src={mdImage}
            alt="Managing Director - SLR Metaliks"
          />

          <div className="slr-image-shine" />
        </div>

      </div>
    </section>
  );
}


/* =========================================================
   MILESTONES
========================================================= */

function Milestones() {
  return (
    <section className="slr-section slr-section-cream">

      <div className="slr-container">

        <div
          className="slr-milestones-head"
          data-reveal
        >
          <span className="slr-eyebrow">
            Our Journey
          </span>

          <h2>
            Milestones along the way
          </h2>

          <p>
            Two decades of building capacity, capability, and trust one heat at a time.
          </p>
        </div>

        <div className="slr-milestone-track">

          {MILESTONES.map((m, index) => (
            <div
              key={m.year}
              className="slr-milestone"
              data-reveal
              style={{
                '--delay': `${index * 140}ms`,
              }}
            >

              <div className="slr-milestone-node">
                <span>{m.year}</span>
              </div>

              <h4>{m.title}</h4>

              <p>{m.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   MISSION / VISION
========================================================= */

function MissionVision() {
  return (
    <section className="slr-section">

      <div className="slr-container">

        <div className="slr-mv-grid">

          <div
            className="slr-mv-card"
            data-reveal-left
          >
            <div className="slr-card-number">
              01
            </div>

            <h3>
              Our Mission
            </h3>

            <p>
              To manufacture alloy and engineering steel that Indian industry can
              build on without compromise &mdash; produced responsibly, tested
              rigorously, and delivered on the date we commit to.
            </p>
          </div>

          <div
            className="slr-mv-card"
            data-reveal-right
          >
            <div className="slr-card-number">
              02
            </div>

            <h3>
              Our Vision
            </h3>

            <p>
              To be counted among India&rsquo;s most trusted alloy steel producers,
              known as much for the quality of our steel as for how responsibly
              it&rsquo;s made.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   VALUES
========================================================= */

function Values() {
  return (
    <section className="slr-section slr-section-cream">

      <div className="slr-container">

        <div
          className="slr-values-head"
          data-reveal
        >
          <span className="slr-eyebrow">
            What Drives Us
          </span>

          <h2>
            Our core values
          </h2>

          <p>
            The principles that shape every heat, every hire, and every customer relationship.
          </p>
        </div>

        <div className="slr-values-grid">

          {VALUES.map((v, index) => (
            <div
              key={v.title}
              className="slr-value-card"
              data-reveal
              style={{
                '--delay': `${index * 100}ms`,
              }}
            >

              <div className="slr-value-icon">
                {v.icon}
              </div>

              <h4>
                {v.title}
              </h4>

              <p>
                {v.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   LEADERSHIP
========================================================= */

function LeadershipQuote() {
  return (
    <section className="slr-section slr-section-dark">

      <div className="slr-dark-glow" />

      <div className="slr-container">

        <div
          className="slr-leadership-inner"
          data-reveal
        >

          <span className="slr-eyebrow">
            Leadership
          </span>

          <div className="slr-quote-mark">
            &ldquo;
          </div>

          <p className="slr-quote">
            We don&rsquo;t measure success in tonnage alone. We measure it in the
            grade sheets our customers never have to double-check, and the
            partnerships that have lasted longer than most of our furnaces.
          </p>

          <div className="slr-quote-attr">
            &mdash; SLR Metaliks Leadership Team
          </div>

          <div className="slr-leadership-btn">

            <Link
              to="/Leadership"
              className="slr-btn-primary"
            >
              <span>
                Meet Our Leadership
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function AboutPage() {

  useScrollReveal();

  return (
    <div className="slr-about">

      <Hero />

      <OurStory />

      <Milestones />

      <MissionVision />

      <LeadershipQuote />

      <Values />

    </div>
  );
}
