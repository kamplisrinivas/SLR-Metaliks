import React from 'react';
import './AboutPage.css';
import { Link } from "react-router-dom";

import mdImage from "../images/MD.jpg";
import leadershipImg from "../images/leadership-team.jpg"; // Update your image path

/*
  SLR Metaliks — About Page
  Built to match the visual language of the existing homepage:
  maroon (#7E1F2B) as the primary accent, copper for process/milestone
  markers, cream section backgrounds, and a near-black footer/leadership band.

  Image URLs below are Unsplash placeholders (industrial/steel subjects) —
  swap in your own plant photography before shipping.
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
  { num: '0.4M+', label: 'Tons Annual Capacity' },
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
  { year: '2005', title: 'Foundation', desc: 'SLR Metaliks is established in Hosapete, Karnataka, as a pig iron manufacturer.' },
  { year: '2012', title: 'Strategic JV', desc: 'A joint venture brings in capital and expertise to scale into alloy steel.' },
  { year: '2015', title: 'Steel Producer', desc: 'Integrated steelmaking comes online, moving beyond pig iron into finished steel.' },
  { year: '2020', title: 'Green Initiatives', desc: 'Captive power and renewable allocations reduce the plant\u2019s energy footprint.' },
  { year: 'Today', title: '21+ Years On', desc: 'A full alloy and engineering steel producer serving industries worldwide.' },
];

const VALUES = [
  { icon: '\u2699', title: 'Quality', desc: 'Every heat is tested, traced, and held to the spec our customers build against.' },
  { icon: '\u26A1', title: 'Sustainability', desc: 'Cleaner captive power and disciplined resource use, built into how we operate.' },
  { icon: '\u26E8', title: 'Safety', desc: 'A plant floor where every process is designed around the people running it.' },
  { icon: '\u2726', title: 'Innovation', desc: 'Continuous investment in technology, from casting to quality testing.' },
  { icon: '\u25C8', title: 'Integrity', desc: 'Transparent dealings with customers, partners, and the communities we work in.' },
  { icon: '\u26AD', title: 'Partnership', desc: 'Long-term relationships with OEMs and industries, not one-off transactions.' },
];

const SUSTAIN_STATS = [
  { num: '72%', label: 'Carbon Emission Reduction' },
  { num: '85%', label: 'Water Recycling Rate' },
  { num: '45%', label: 'Renewable Energy Usage' },
  { num: '92%', label: 'Waste Recovery Rate' },
];



function Hero() {
  return (
    <section className="slr-hero">
      <div className="slr-container slr-hero-inner">
        <div>
          <div className="slr-breadcrumb">
            <a href="/">Home</a> / <span className="slr-accent">About Us</span>
          </div>
          <h1 className="slr-app-title">
            Two decades of forging India&rsquo;s steel future.
          </h1>
          <p className="slr-hero-sub">
            SLR Metaliks is an integrated alloy and engineering steel manufacturer
            built from the ground up in Hosapete, Karnataka &mdash; from a single
            pig iron unit to a full sinter-to-rolling operation.
          </p>
        </div>
        <div className="slr-hero-stats">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="slr-hero-stat">
              <div className="num">{s.num}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function OurStory() {
  return (
    <section className="slr-section">
      <div className="slr-container slr-split">
        <div>
          <span className="slr-eyebrow">Our Story</span>
          <h2>From a single furnace to an integrated steel powerhouse</h2>
          <p>
            SLR Metaliks started as a pig iron manufacturer in Hosapete, Karnataka.
            A strategic joint venture brought in the capital to build out a full
            sinter, blast furnace, and steelmaking shop on one 300-acre site &mdash;
            turning a single-product unit into an integrated alloy steel producer.
          </p>
          <p>
            Today the plant runs its own rolling mill alongside its melting shop,
            producing engineered grades for automotive, rail, infrastructure, and
            energy customers across the country and beyond.
          </p>
          <div className="slr-split-stats">
            {STORY_STATS.map((s) => (
              <div key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="slr-split-cta">
            <a href="/company-profile" className="slr-btn slr-btn-outline-dark">
              Download Company Profile
            </a>
          </div>
        </div>
        <div className="slr-media-frame">
          <img
  src={mdImage}
  alt="Managing Director - SLR Metaliks"
/>
          <div className="slr-media-inset">
            <img
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop"
              alt="Steel billets ready for rolling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-milestones-head">
          <span className="slr-eyebrow">Our Journey</span>
          <h2>Milestones along the way</h2>
          <p>Two decades of building capacity, capability, and trust one heat at a time.</p>
        </div>
        <div className="slr-milestone-track">
          {MILESTONES.map((m) => (
            <div key={m.year} className="slr-milestone">
              <div className="slr-milestone-node">{m.year}</div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-mv-grid">
          <div className="slr-mv-card">
            <h3>Our Mission</h3>
            <p>
              To manufacture alloy and engineering steel that Indian industry can
              build on without compromise &mdash; produced responsibly, tested
              rigorously, and delivered on the date we commit to.
            </p>
          </div>
          <div className="slr-mv-card">
            <h3>Our Vision</h3>
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

function Values() {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-values-head">
          <span className="slr-eyebrow">What Drives Us</span>
          <h2>Our core values</h2>
          <p>The principles that shape every heat, every hire, and every customer relationship.</p>
        </div>
        <div className="slr-values-grid">
          {VALUES.map((v) => (
            <div key={v.title} className="slr-value-card">
              <div className="slr-value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipQuote() {
  return (
    <section className="slr-section slr-section-dark">
      <div className="slr-container">
        <div className="slr-leadership-inner">
          <span className="slr-eyebrow">Leadership</span>

          <div className="slr-quote-mark">&ldquo;</div>

          <p className="slr-quote">
            We don&rsquo;t measure success in tonnage alone. We measure it in the
            grade sheets our customers never have to double-check, and the
            partnerships that have lasted longer than most of our furnaces.
          </p>

          <div className="slr-quote-attr">
            &mdash; SLR Metaliks Leadership Team
          </div>

          <div className="slr-leadership-btn">
  <Link to="/Leadership" className="slr-btn-primary">
    Meet Our Leadership
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






export default function AboutPage() {
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