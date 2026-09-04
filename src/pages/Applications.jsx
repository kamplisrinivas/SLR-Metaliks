import React, { useEffect, useRef, useState } from 'react';
import './Aboutpage.css';
import './Applications.css';

import cc1 from '../images/cc1.png';
import cc2 from '../images/cc2.png';
import cc3 from '../images/cc3.png';
import gs1 from '../images/gs1.png';
import gs2 from '../images/gs2.png';
import gs3 from '../images/gs3.png';
import cr1 from '../images/cr1.png';
import cr2 from '../images/cr2.png';
import cr3 from '../images/cr3.png';
import abd1 from '../images/abd1.png';
import abd2 from '../images/abd2.png';
import abd3 from '../images/abd3.png';
import br1 from '../images/br1.png';
import br2 from '../images/br2.png';
import br3 from '../images/br3.png';
import su1 from '../images/su1.png';
import su2 from '../images/su2.png';
import su3 from '../images/su3.png';
import sb1 from '../images/sb1.png';
import sb2 from '../images/sb2.png';
import ht1 from '../images/ht1.png';
import ht2 from '../images/ht2.png';
import ht3 from '../images/ht3.png';
import hc1 from '../images/hc1.png';
import hc2 from '../images/hc2.png';
import hc3 from '../images/hc3.png';

/*
  SLR Metaliks — Applications Page
  Plain React + CSS, matching AboutPage.css tokens.

  Content is adapted from what you provided: the 9 core application
  descriptions are lightly tightened for web readability (trimming a
  little repetition in a couple of paragraphs) but the technical
  substance and every grade code is preserved exactly as given.

  The "Other Applications" list had a numbering gap in the source
  (jumped from 4 straight to 6, with no 5) — I've dropped numbering
  entirely rather than guess at a missing fifth category.

  NOTE: Header and Footer aren't rendered here, same assumption as
  the other pages — supplied by a shared Layout elsewhere in the app.
*/

/*
  Image convention: each application has exactly 3 photos. Drop your
  files into the public folder using this structure —

    public/images/applications/<slug>/1.jpg
    public/images/applications/<slug>/2.jpg
    public/images/applications/<slug>/3.jpg

  — and they'll show up automatically; nothing else in the code needs
  to change. Until files exist at those paths, each image gracefully
  falls back to a plain accent-colored placeholder instead of a broken
  image icon (see ImageThumb below).
*/

const APPLICATIONS = [
  {
    name: 'Crankshaft & Camshaft',
    slug: 'crankshaft-camshaft',
    desc: "Camshafts work in concert with the crankshaft and pistons to actuate valve motion, synchronized through gears, chains, or belt drives for precise mechanical timing. Cam lobes may be formed from white or chilled cast iron, or from forged steel.",
    groups: [
      { label: 'Crankshaft', codes: ['38MnSiVS5', '41Cr4', 'EN19', 'SAE1541B'] },
      { label: 'Camshaft', codes: ['S48C', 'SAE1541'] },
    ],
    images: [cc1, cc2, cc3], 
  },
  {
    name: 'Gears & Shafts',
    slug: 'gears-shafts',
    desc: "Gears are rotating machine elements that transmit torque from one shaft to another through machined teeth, with matching tooth profiles meshing to transfer power from a driving shaft to a driven one. In a gearbox, this mechanical system of gears and gear trains carries power from the engine to the wheels, letting a driver apply power to the vehicle in a controlled, efficient way.",
    groups: [{ codes: ['SCM420H', 'SCM415H', '16MnCr5', 'SAE4140', '20MnCr5'] }],
    images: [gs1, gs2, gs3], 
  },
  {
    name: 'Connecting Rods',
    slug: 'connecting-rods',
    desc: "A connecting rod links the piston to the crankshaft, converting the piston's reciprocating motion into the crankshaft's rotation. It transmits both compressive and tensile forces from the piston, typically pivoting at the piston end and rotating at the shaft end.",
    groups: [{ codes: ['C70S6', '36MnVS4', '44MnSiVS6'] }],
    images: [cr1, cr2, cr3],
  },
  {
    name: 'Axle Shaft, Drive Shaft & Axle Beam',
    slug: 'axle-shaft-drive-shaft-axle-beam',
    desc: "A longitudinal shaft carries power from the engine and transmission to the far end of the vehicle, with a pair of short drive shafts sending power from a central differential or transaxle to the wheels. An axle is the rod or shaft that rotates the wheels and supports the vehicle's weight, coming in front, rear, and stub configurations. The axle beam connects the front wheels to the chassis as part of the suspension system, and its design and manufacturing quality directly shape suspension performance and driving stability.",
    groups: [
      { label: 'Axle Shaft', codes: ['SAE 1541', '15B41'] },
      { label: 'Drive Shaft', codes: ['SAE 1050M', '38B3'] },
      { label: 'Axle Beam', codes: ['40Cr4C', '42CrMo3'] },
    ],
    images: [abd1, abd2, abd3],
  },
  {
    name: 'Bearings',
    slug: 'bearings',
    desc: "Bearings support a rotating shaft inside machinery, enabling smooth motion while carrying axial and radial loads. Ball bearings — the most common type — are circular joints connecting a rotating part to a stationary one, reducing friction by converting sliding friction into rolling friction, and are used across electric motors, household appliances, automotive motors, office machinery, and industrial automation. Most bearings are made from high-carbon chromium steel — bearing steel, or chrome steel — valued for its durability and cost-effectiveness.",
    groups: [{ codes: ['100Cr6', 'SUJ2', 'SAE 52100'] }],
    images: [br1, br2, br3],
  },
  {
    name: 'Suspension',
    slug: 'suspension',
    desc: "A leaf spring — one of the oldest forms of vehicle suspension — is one or more narrow, arc-shaped plates attached to the axle and chassis, flexing vertically to absorb road irregularities. Laminated and parabolic leaf springs run the length of the vehicle, though transverse arrangements exist too. A coil spring, meanwhile, absorbs road vibration and shock for a smoother ride. These components are typically made from low-alloy manganese, medium-carbon, or high-carbon steel with a high yield strength.",
    groups: [{ codes: ['51CrMoV4', '50CrV4'] }],
    images: [su1, su2, su3],
  },
  {
    name: 'Stabilizer Bars',
    slug: 'stabilizer-bars',
    desc: "A stabilizer bar reduces vehicle body roll during cornering or over road irregularities, linking opposite wheels to a torsion spring through short lever arms. Stabilizer bars are made from steels with higher tensile strength, where material properties and metallurgical process control are critical to performance.",
    groups: [{ codes: ['SUP9', 'SUP11', '51CrV4'] }],
    images: [sb1, sb2],
  },
  {
    name: 'High Tensile Fasteners',
    slug: 'high-tensile-fasteners',
    desc: "High-tensile fasteners are alloy steel fasteners engineered to withstand high mechanical stress and loading, used throughout wind turbine towers, nacelles, and rotor blades where standard fasteners would fail. Wheel nuts — a common example — are threaded fasteners mounted to the vehicle hub through the brake drum or disc to secure the wheel.",
    groups: [{ codes: ['42CrMo4 QT'] }],
    images: [ht1, ht2, ht3],
  },
  {
    name: 'Hydraulic Cylinder Piston Rods',
    slug: 'hydraulic-cylinder-piston-rods',
    desc: "A piston rod protrudes from the cylinder barrel and attaches to the piston inside, working together to convert combustion or fluid pressure into mechanical energy. These rods are typically made from medium carbon steel, induction hardened for durability.",
    groups: [{ codes: ['S43Cr', '15B29', '41B30'] }],
    images: [hc1, hc2, hc3],
  },
]

const OTHER_APPLICATIONS = [
  { name: 'Pinion', codes: ['EN353', '20MnCr5'] },
  { name: 'Rocker Arm', codes: ['SCM420H'] },
  { name: 'UJ Cross', codes: ['16MnCr5'] },
  { name: 'Propeller Shaft', codes: ['ST52-3'] },
  { name: 'Steering Shaft', codes: ['S35C'] },
];

function gradeCount(app) {
  return app.groups.reduce((sum, g) => sum + g.codes.length, 0);
}

function ImageThumb({ src, alt, className = '', onClick, initial }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className={`slr-app-img-fallback ${className}`} onClick={onClick}>
        <span>{initial}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
}

function AccordionItem({ app, isOpen, onToggle, onOpenLightbox }) {
  const panelRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    function recalc() {
      if (isOpen && panelRef.current) {
        setMaxHeight(`${panelRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [isOpen]);

  return (
    <div className={`slr-app-item ${isOpen ? 'is-open' : ''}`}>
      <button className="slr-app-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="slr-app-fan" aria-hidden="true">
          {(app.images || []).map((src, i) => (
            <ImageThumb
              key={`${src}-${i}`}
              src={src}
              alt=""
              initial={app.name[0]}
              className={`slr-app-fan-img slr-app-fan-${i}`}
            />
          ))}
        </span>
        <span className="slr-app-trigger-text">
          <h3>{app.name}</h3>
          <span className="slr-app-grade-count">{gradeCount(app)} grade{gradeCount(app) > 1 ? 's' : ''} specified</span>
        </span>
        <span className="slr-app-chevron">&#9660;</span>
      </button>
      <div className="slr-app-panel" style={{ maxHeight }}>
        <div className="slr-app-panel-inner" ref={panelRef}>
          <div className="slr-app-gallery">
            {(app.images || []).map((src, i) => (
              <ImageThumb
                key={`${src}-${i}`}
                src={src}
                alt={`${app.name} — reference photo ${i + 1}`}
                initial={app.name[0]}
                className="slr-app-gallery-img"
                onClick={() => onOpenLightbox(i)}
              />
            ))}
          </div>
          <p className="slr-app-desc">{app.desc}</p>
          <div className="slr-app-grade-groups">
            {app.groups.map((g, i) => (
              <div key={g.label || i}>
                {g.label && <span className="slr-app-grade-group-label">{g.label}</span>}
                <div className="slr-app-pills">
                  {g.codes.map((c) => (
                    <span key={c} className="slr-app-pill">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.slr-app-reveal, .slr-app-item, .slr-app-other-card'
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slr-app-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((element) => {
      element.classList.add('slr-app-reveal');

      // Stagger cards based on their position
      const index = [...element.parentElement.children].indexOf(element);

      if (
        element.classList.contains('slr-app-item') ||
        element.classList.contains('slr-app-other-card')
      ) {
        element.style.setProperty(
          '--reveal-delay',
          `${Math.min(index * 70, 420)}ms`
        );
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}


function ApplicationsHero() {
  const totalGrades =
    APPLICATIONS.reduce((sum, a) => sum + gradeCount(a), 0) +
    OTHER_APPLICATIONS.reduce((sum, a) => sum + a.codes.length, 0);

  return (
    <section className="slr-app-hero">
      <div className="slr-container">

        <div className="slr-app-breadcrumb slr-app-hero-reveal">
          <a href="/">Home</a> /{' '}
          <span className="slr-accent">Applications</span>
        </div>

        <span className="slr-eyebrow slr-app-hero-reveal">
          Applications
        </span>

        <h1 className="slr-app-title slr-app-hero-reveal">
          Steel Engineered for Every Component
        </h1>

        <p className="slr-app-hero-reveal">
          From crankshafts to stabilizer bars, our alloy and special steel grades
          are specified into the components that keep vehicles, machinery, and
          equipment running.
        </p>

        <div className="slr-app-hero-chips slr-app-hero-reveal">
          <div className="slr-app-chip">
            <b>{APPLICATIONS.length}</b>Core Applications
          </div>

          <div className="slr-app-chip">
            <b>{OTHER_APPLICATIONS.length}</b>More Components
          </div>

          <div className="slr-app-chip">
            <b>{totalGrades}+</b>Grades Specified
          </div>
        </div>

      </div>
    </section>
  );
}


function ApplicationsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null); // { appIndex, imgIndex } | null

  const activeApp = lightbox ? APPLICATIONS[lightbox.appIndex] : null;

  function closeLightbox() {
    setLightbox(null);
  }
  function stepLightbox(delta) {
    setLightbox((cur) => {
      if (!cur) return cur;
      const app = APPLICATIONS[cur.appIndex];
      const next = (cur.imgIndex + delta + app.images.length) % app.images.length;
      return { ...cur, imgIndex: next };
    });
  }

  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-app-head">
          <span className="slr-eyebrow">By Component</span>
          <h2>Nine core applications</h2>
          <p>Click any component to see the full detail, reference photos, and grades specified for it.</p>
        </div>
        <div className="slr-app-accordion">
          {APPLICATIONS.map((app, i) => (
            <AccordionItem
              key={app.name}
              app={app}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
              onOpenLightbox={(imgIndex) => setLightbox({ appIndex: i, imgIndex })}
            />
          ))}
        </div>
      </div>

      {activeApp && (
        <div className="slr-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="slr-lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button
            className="slr-lightbox-nav prev"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}
          >
            &larr;
          </button>
          <ImageThumb
            src={activeApp.images[lightbox.imgIndex]}
            alt={`${activeApp.name} — reference photo ${lightbox.imgIndex + 1}`}
            initial={activeApp.name[0]}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="slr-lightbox-nav next"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}
          >
            &rarr;
          </button>
          <div className="slr-lightbox-caption">{activeApp.name} &mdash; {lightbox.imgIndex + 1} / {activeApp.images.length}</div>
        </div>
      )}
    </section>
  );
}

function OtherApplications() {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-app-head slr-app-other-head">
  <span className="slr-eyebrow">Also Specified For</span>
  <h2>Additional components &amp; grades</h2>
</div>
        <div className="slr-app-other-grid">
          {OTHER_APPLICATIONS.map((a) => (
            <div key={a.name} className="slr-app-other-card">
              <h4>{a.name}</h4>
              <div className="slr-app-pills" style={{ justifyContent: 'center' }}>
                {a.codes.map((c) => (
                  <span key={c} className="slr-app-pill">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationsCta() {
  return (
    <section className="slr-app-cta">
      <div className="slr-container">
        <h2>Don't see your component or grade listed?</h2>
        <div className="slr-app-cta-actions">
          <a href="/contact" className="slr-btn slr-btn-primary">Talk to Our Engineers</a>
          <a href="/downloads/grade-catalogue.pdf" className="slr-btn slr-btn-outline">Download Grade Catalogue</a>
        </div>
      </div>
    </section>
  );
}

export default function ApplicationsPage() {
  useScrollReveal();

  return (
    <div className="slr-about">
      <ApplicationsHero />
      <ApplicationsAccordion />
      <OtherApplications />
      <ApplicationsCta />
    </div>
  );
}
