import React from 'react';
import './Aboutpage.css';
import './Products.css';

/*
  SLR Metaliks — Product Portfolio Page
  Plain React + CSS, matching the tokens already established in
  AboutPage.css (maroon/copper/cream/ink, Barlow Condensed + Inter).

  Content below is transcribed directly from what you provided — steel
  type list, product size ranges, and pig iron grades. The only added
  copy is the hero intro paragraph (lightly adapted from your portfolio
  line) and the three pig iron grade descriptions, which are generic
  industry-standard explanations of what each grade name typically
  means — worth a quick check against your own spec sheets before
  publishing, since I'm not asserting anything SLRM-specific there.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const STEEL_TYPES = [
  'Carbon Steel',
  'Free, Semi Free Cutting & Leaded Steel',
  'Cold Heading Steel',
  'Bearing Steels',
  'Alloy Steels',
  'Boiler Quality Steel',
  'Spring Steel',
  'Micro Alloyed Steel',
  'Low Electro Resistivity Steel',
  'Ultra Low Carbon Steel',
];

const SIZE_RANGE = [
  { shape: 'circle', name: 'Wire Rod (Round)', range: '16.3mm \u2013 27mm' },
  { shape: 'hex', name: 'Wire Rod (Hex)', range: '17.4mm \u2013 23.5mm' },
  { shape: 'circle', name: 'Round Bar', range: '16mm \u2013 95mm' },
  { shape: 'hex', name: 'Hexagon Bar', range: '18.5mm \u2013 56mm' },
  { shape: 'rcs', name: 'RCS', range: '55mm \u2013 85mm, 122mm' },
  { shape: 'flat', name: 'Flat', range: 'Width 70 \u2013 101.6mm\nThickness 11 \u2013 32mm' },
  { shape: 'ground', name: 'Peeled & Ground Bars', range: '17.5mm \u2013 75mm (h9/h11)' },
  { shape: 'colddrawn', name: 'Cold Drawn & Ground Bars', range: '20mm \u2013 50mm (h9/h11)' },
];

const PIG_IRON_GRADES = [
  { name: 'Basic Grade', desc: 'General-purpose pig iron used as a base charge material in steelmaking.' },
  { name: 'Foundry Grade', desc: 'Formulated for foundry casting applications requiring controlled composition.' },
  { name: 'S.G. Grade', desc: 'Spheroidal-graphite grade used as a feedstock for ductile (SG) iron castings.' },
];

function ProductShape({ type }) {
  const stroke = 'var(--copper)';
  switch (type) {
    case 'hex':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48">
          <polygon points="32,6 54,19 54,45 32,58 10,45 10,19" fill="none" stroke={stroke} strokeWidth="3" />
        </svg>
      );
    case 'rcs':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48">
          <rect x="10" y="10" width="44" height="44" rx="12" fill="none" stroke={stroke} strokeWidth="3" />
        </svg>
      );
    case 'flat':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48">
          <rect x="6" y="22" width="52" height="20" rx="3" fill="none" stroke={stroke} strokeWidth="3" />
        </svg>
      );
    case 'ground':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48">
          <circle cx="32" cy="32" r="22" fill="none" stroke={stroke} strokeWidth="3" />
          <circle cx="32" cy="32" r="15" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    case 'colddrawn':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48">
          <circle cx="32" cy="32" r="22" fill="none" stroke={stroke} strokeWidth="3" />
          <circle cx="32" cy="32" r="15" fill="none" stroke={stroke} strokeWidth="3" />
        </svg>
      );
    case 'circle':
    default:
      return (
        <svg viewBox="0 0 64 64" width="48" height="48">
          <circle cx="32" cy="32" r="22" fill="none" stroke={stroke} strokeWidth="3" />
        </svg>
      );
  }
}

function ProductsHero() {
  return (
    <section className="slr-prod-hero">
      <div className="slr-container">
        <div className="slr-prod-breadcrumb">
          <a href="/">Home</a> / <span className="slr-accent">Products</span>
        </div>
        <span className="slr-eyebrow">Product Portfolio</span>
        <h1 className="slr-app-title">
            Alloy &amp; Special Steel, Engineered to Spec
        </h1>
        <p>
          SLRM manufactures a wide range of alloy and special steels conforming to
          international specifications, engineered for demanding applications
          across the automotive, engineering, railways, and defence sectors.
        </p>
        <div className="slr-prod-hero-chips">
          <div className="slr-prod-chip"><b>10</b>Steel Type Families</div>
          <div className="slr-prod-chip"><b>8</b>Product Forms</div>
          <div className="slr-prod-chip"><b>3</b>Pig Iron Grades</div>
        </div>
      </div>
    </section>
  );
}

function SteelTypes() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-prod-head">
          <span className="slr-eyebrow">Type of Steel</span>
          <h2>A grade family for every application</h2>
          <p>Ten steel type families produced to conform with international specifications.</p>
        </div>
        <div className="slr-steel-grid">
          {STEEL_TYPES.map((t) => (
            <div key={t} className="slr-steel-card">
              <div className="slr-steel-icon">{t[0]}</div>
              <h4>{t}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SizeRange() {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-prod-head">
          <span className="slr-eyebrow">Product Size Range</span>
          <h2>Precision across every profile</h2>
          <p>From wire rod to cold drawn and ground bars, produced to tight dimensional tolerance.</p>
        </div>
        <div className="slr-size-grid">
          {SIZE_RANGE.map((p) => (
            <div key={p.name} className="slr-size-card">
              <div className="slr-size-shape">
                <ProductShape type={p.shape} />
              </div>
              <h4>{p.name}</h4>
              <div className="slr-size-range">
                {p.range.split('\n').map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PigIron() {
  return (
    <section className="slr-section slr-pigiron">
      <div className="slr-container">
        <div className="slr-prod-head">
          <span className="slr-eyebrow">Pig Iron</span>
          <h2>Foundation-grade pig iron</h2>
          <p>Produced across three grades to feed foundry, casting, and steelmaking applications.</p>
        </div>
        <div className="slr-grade-grid">
          {PIG_IRON_GRADES.map((g) => (
            <div key={g.name} className="slr-grade-card">
              <span className="slr-grade-badge">Grade</span>
              <h4>{g.name}</h4>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsCta() {
  return (
    <section className="slr-prod-cta">
      <div className="slr-container">
        <h2>Need a grade or size not listed here?</h2>
        <div className="slr-prod-cta-actions">
          <a href="/contact" className="slr-btn slr-btn-primary">Request a Quote</a>
          <a href="/downloads/product-catalogue.pdf" className="slr-btn slr-btn-outline">Download Catalogue</a>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <div className="slr-about">
      <ProductsHero />
      <SteelTypes />
      <SizeRange />
      <PigIron />
      <ProductsCta />
    </div>
  );
}