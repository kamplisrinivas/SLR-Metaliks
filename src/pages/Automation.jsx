import React, { useEffect, useRef, useState } from 'react';
import './Aboutpage.css';
import './Automation.css';

/*
  SLR Metaliks — Automation System Page
  Plain React + CSS, matching AboutPage.css tokens.

  Signature element: ControlNode — a small SVG generated from each
  system's own data (PLC label, redundancy, HMI station count) showing
  the controller and its connected HMI stations as a live-looking
  network diagram. This is real generated markup, not a decorative
  stock graphic, so it stays accurate if you edit the data below.

  Content is transcribed from what you provided, lightly tightened for
  web readability; every PLC model, supplier, and technical detail is
  preserved as given. Where your source didn't state an HMI count
  numerically (e.g. "three HMI stations and one engineering station"),
  I've read that directly into hmiCount / engineeringStations fields.

  Image convention matches ApplicationsPage.jsx / PlantPage.jsx:
    public/images/automation/<slug>/1.jpg (2.jpg, 3.jpg)
  Missing files fall back to a placeholder automatically.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const DIVISIONS = [
  {
    id: 'iron-making',
    label: 'Iron Making Division',
    intro: 'Level-1 automation across the blast furnace complex, sinter plant, and PCI system.',
    systems: [
      {
        name: 'Blast Furnace',
        slug: 'blast-furnace-automation',
        tech: 'Rockwell ControlLogix',
        redundant: true,
        hmiCount: 3,
        engineeringStations: 1,
        desc: "The Level-1 automation system consists of a Rockwell Control Logix system. One PLC controller with a redundant processor covers the complete blast furnace complex — Stock House, Hot Blast Stoves, BF auxiliary, SGP, GCP, and cooling water supply facilities. Conventional MCC systems with hardwired interlock control the various motors. If the main processor fails, the standby processor takes over automatically without any break or bump.",
        monitors: [
          'Stoves and blast furnace proper (HMI 1)',
          'Stock house control and monitoring (HMI 2)',
          'Water supply and other services facilities (HMI 3)',
          'HMI roles are interchangeable — any station can control the full plant if needed',
          'Dual communication bus per HMI, so loss of one bus doesn\u2019t affect monitoring',
          'HMI stations 3 & 4 double as operator-cum-engineering stations for PLC programming',
        ],
      },
      {
        name: 'Sinter Plant',
        slug: 'sinter-plant-automation',
        tech: 'PLC + SCADA, "Three-Electro" Integration',
        redundant: false,
        hmiCount: 1,
        engineeringStations: 0,
        desc: "Instrumentation and automation for SLR's 1×25 m² sinter plant covers the main sinter machine building, proportioning room, main exhaust room, tail ESP, head ESP, water treatment station, and sinter bunker. The design philosophy adopts a \u201cThree-Electro\u201d integration: a primary PLC control station completes the control process using field instrumentation data, while a secondary computer operation station — running multitask system software — handles supervision and operating instructions for the process and equipment status.",
        monitors: [
          'Proportioning system detection, via a dedicated proportioning computer system',
          'Panel-type instruments for water treatment station, end ESP, head ESP, and main exhaust alarm indication',
          'All fault alarms handled through the foundational automation layer',
          'Principal parameters transmitted to the main building computer system',
        ],
      },
      {
        name: 'PCI (Pulverised Coal Injection)',
        slug: 'pci-automation',
        tech: 'Siemens S7-400',
        redundant: false,
        hmiCount: 1,
        engineeringStations: 0,
        desc: 'The PCI automated control system combines advancement and practicality, using new technology to improve automation equipment, expand system reach, and realize production automation management — reducing personnel allocation, operating cost, and production cost while ensuring product quality and comprehensive benefits.',
        monitors: [],
      },
    ],
  },
  {
    id: 'power-plant',
    label: 'Power Plant Division',
    intro: 'Redundant PLC control across the boiler, turbine, air-cooled condenser, and burner management system.',
    systems: [
      {
        name: 'Power Plant Control',
        slug: 'power-plant-automation',
        tech: 'Allen Bradley — Rockwell ControlLogix',
        redundant: true,
        hmiCount: 3,
        engineeringStations: 1,
        desc: 'The Level-1 automation system uses Allen Bradley — Rockwell Automation\u2019s Control Logix PLC system. One PLC controller with a redundant processor covers the complete power plant — Boiler, Turbine, Air Cooled Condenser, and Balance of Plant — with a second redundant-processor PLC dedicated to the Burner Management System (BMS). If the main processor fails, the standby processor takes over automatically without any break or bump.',
        monitors: [
          'Boiler process control (HMI 1)',
          'Turbine process control (HMI 2)',
          'Air-cooled condenser and pump house control (HMI 3)',
          'HMI roles are interchangeable across the full plant',
          'Dual communication bus per HMI for uninterrupted monitoring',
          'Conventional MCC systems with hardwired interlock for motor control',
          'Majority of motors driven by VVVF drives for efficient power consumption',
        ],
      },
    ],
  },
  {
    id: 'steel-melt-shop',
    label: 'Steel Melt Shop',
    intro: 'EOF, twin LRF with VD and wire feeding, and a 3-strand CCM — each running its own dedicated control layer.',
    systems: [
      {
        name: 'Energy Optimizing Furnace (EOF)',
        slug: 'eof-automation',
        tech: 'Rockwell ControlLogix 5573',
        redundant: true,
        hmiCount: 0,
        engineeringStations: 0,
        desc: 'The Level-1 automation system uses a Rockwell Control Logix system (Allen Bradley 1756-L73 ControlLogix 5573 Controller) with one redundant-processor PLC controller. The EOF automation system monitors and controls the process through the Valve Stand, Hydraulic Tilting System, Cooling Water System with emergency backup, Gas Cleaning Plant (with 2×1MW ID fans and Siemens drives), and the Furnace & Ladle Feeding system with bin weighing. Basic reporting of alloy and gaseous consumption is generated by this system.',
        monitors: [],
      },
      {
        name: 'LRF 1 & 2 (Ladle Refining Furnace)',
        slug: 'lrf-dcs-automation',
        tech: 'ABB AC800M, PM861 (DCS)',
        redundant: false,
        hmiCount: 0,
        engineeringStations: 0,
        desc: 'A Distributed Control System (DCS) realizes Level 1 and Level 2 automation, subdividing each shop system by functional requirement across open-loop and closed-loop control. LRF 1 & 2 use an ABB AC800M, PM861 controller to monitor and control electrode regulation — including the hydraulics system, 2×8MVA transformers, 6.6kV VCB, vessel car, argon purging system, and cooling water system with emergency backup. Basic reporting of power, arcing, and argon consumption is generated by this system.',
        monitors: [],
        subsystems: [
          {
            name: 'VD & FAFA PLC System',
            tech: 'Siemens S7-400',
            desc: 'Monitors and controls the VD hydraulics system, VD line pneumatic valve auto operation, and VD bag house pulsing, plus the furnace feeding system with bin weighing. Basic reporting of alloy consumption is generated by this system.',
          },
          {
            name: 'VD Pump PLC System',
            tech: 'Siemens S7-300',
            desc: 'Monitors and controls the VD pumps and drives.',
          },
          {
            name: 'Wire Feeder PLC System',
            tech: 'Siemens S7-1200',
            desc: 'Monitors and controls the 4-stand wire feeding machine.',
          },
          {
            name: 'FES PLC System',
            tech: 'Siemens S7-300',
            desc: 'Monitors and controls ID fans with drives, dust discharging motors, bag house pulsing, and duct line pneumatic valve auto operation.',
          },
        ],
      },
      {
        name: 'CCM (Continuous Casting Machine)',
        slug: 'ccm-automation',
        tech: 'Siemens S7-400 (Common + 3 Strand PLCs)',
        redundant: false,
        hmiCount: 0,
        engineeringStations: 0,
        desc: 'The CCM automation system is split across a Common PLC and three Strand PLCs, all on Siemens S7-400. The Common PLC monitors and controls shared equipment — the hydraulics system, turret system, tundish cars 1 & 2, cross transfer system, TOCB system, slide gate power pack, EMS DM water cooling, emergency cooling water, and steam exhaust fans — with all casting parameter trend backup available. Each Strand PLC (1, 2 & 3) monitors and controls its own AMLC, EMS system, mould oscillation system, withdrawal & straightener units, dummy bar system, auxiliary withdrawal, CEPR, torch cutting machines, and strand roller tables, with alarm generation and trend backup available, and grade-wise recipes uploaded to the PLC as required.',
        monitors: [],
      },
    ],
  },
  {
    id: 'rms',
    label: 'RMS Automation',
    intro: 'Rolling mill Level-1 automation, advanced rolling equipment control, and online dimensional inspection.',
    systems: [
      {
        name: 'RMS Level-1 & Rolling Control',
        slug: 'rms-automation',
        tech: 'PLC + HMI + SCADA',
        redundant: false,
        hmiCount: 0,
        engineeringStations: 0,
        desc: 'Basic Level-1 automation includes programmable automation units (PLCs) and operation/monitoring HMIs in a SCADA system, in centralized or distributed topology, interconnected via fieldbus and local area networks (LAN). The mill runs with advanced rolling equipment — reducing and sizing mill, high-speed shear, and pinch rolls — alongside controlled temperature rolling and controlled cooling to meet processing requirements across carbon and alloy steel grades.',
        facts: [
          { num: 'Oribis', lbl: 'Online Hot Bar Gauge (Pomini)' },
          { num: 'iba', lbl: 'Historical Data System' },
        ],
        monitors: [
          'Online hot bar inspection via Oribis gauge (M/s Pomini) — accurate bar dimension measurement through constant rotation around the bar',
          'iba system for historical analysis, with comprehensive connectivity for high-resolution process data acquisition',
          'Triggered or time-based data storage in measurement files or the iba HD-Server, with multiple simultaneous recordings',
          'Individually configurable live displays on a client-server architecture, used by maintenance, production, QA, technology, and data analyst teams',
        ],
      },
    ],
  },
].map((division) => ({
  ...division,
  systems: division.systems.map((s) => ({
    ...s,
    images: [1, 2, 3].map((n) => `/images/automation/${s.slug}/${n}.jpg`),
  })),
}));

const SYSTEM_COUNT = DIVISIONS.reduce((sum, d) => sum + d.systems.length, 0);

/* ---------- generated control-node diagram ---------- */

function ControlNode({ hmiCount = 0, redundant = false, compact = false }) {
  const width = 260;
  const height = compact ? 120 : 150;
  const cx = compact ? 40 : 60;
  const cy = height / 2;
  const stationCount = Math.max(hmiCount, 1);
  const spread = compact ? 34 : 42;
  const startY = cy - ((stationCount - 1) * spread) / 2;
  const stationX = width - (compact ? 30 : 46);

  const stations = Array.from({ length: stationCount }).map((_, i) => ({
    y: startY + i * spread,
  }));

  const nodeStroke = '#3FA796';
  const lineStroke = 'rgba(63,167,150,0.45)';
  const plcFill = redundant ? '#7E1F2B' : '#BD8148';

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      {stations.map((s, i) => (
        <line key={i} x1={cx + (compact ? 16 : 20)} y1={cy} x2={stationX} y2={s.y} stroke={lineStroke} strokeWidth="1.5" strokeDasharray="3 3" />
      ))}
      {redundant && (
        <circle cx={cx} cy={cy} r={compact ? 22 : 28} fill="none" stroke={plcFill} strokeWidth="1.5" strokeDasharray="2 3" opacity="0.5" />
      )}
      <circle cx={cx} cy={cy} r={compact ? 15 : 19} fill={plcFill} />
      <text x={cx} y={cy + (compact ? 4 : 5)} textAnchor="middle" fontSize={compact ? 8 : 9} fontWeight="700" fill="#fff" fontFamily="Barlow Condensed, sans-serif">PLC</text>
      {stations.map((s, i) => (
        <g key={i}>
          <circle cx={stationX} cy={s.y} r={compact ? 8 : 10} fill="none" stroke={nodeStroke} strokeWidth="2" />
          <circle cx={stationX} cy={s.y} r={compact ? 2.5 : 3} fill={nodeStroke} />
        </g>
      ))}
    </svg>
  );
}

/* ---------- shared image + spec helpers ---------- */

function ImageThumb({ src, alt, className = '', onClick, initial }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className={`slr-auto-img-fallback ${className}`} onClick={onClick}>
        <span>{initial}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onClick={onClick} onError={() => setErrored(true)} loading="lazy" />;
}

/* ---------- system card ---------- */

function SystemCard({ system, isOpen, onToggle, onOpenLightbox }) {
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
    <div className={`slr-auto-card ${isOpen ? 'is-open' : ''}`}>
      <button className="slr-auto-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="slr-auto-node-mini" style={{ display: 'block', overflow: 'hidden' }}>
          <ControlNode hmiCount={system.hmiCount} redundant={system.redundant} compact />
        </span>
        <span className="slr-auto-trigger-text">
          <h3>{system.name}</h3>
          <span className="slr-auto-tech-badge">{system.tech}</span>
        </span>
        <span className="slr-auto-chevron">&#9660;</span>
      </button>
      <div className="slr-auto-panel" style={{ maxHeight, overflow: 'hidden' }}>
        <div className="slr-auto-panel-inner" ref={panelRef}>
          {system.hmiCount > 0 && (
            <div className="slr-auto-schematic-wrap" style={{ height: 190, overflow: 'hidden' }}>
              <ControlNode hmiCount={system.hmiCount} redundant={system.redundant} />
            </div>
          )}

          <p className="slr-auto-desc">{system.desc}</p>

          {(system.hmiCount > 0 || system.engineeringStations > 0 || system.redundant) && (
            <div className="slr-auto-facts">
              <div className="slr-auto-fact">
                <div className="num">{system.redundant ? 'Yes' : 'No'}</div>
                <div className="lbl">Redundant Processor</div>
              </div>
              <div className="slr-auto-fact">
                <div className="num">{system.hmiCount || '\u2014'}</div>
                <div className="lbl">HMI Stations</div>
              </div>
              <div className="slr-auto-fact">
                <div className="num">{system.engineeringStations || '\u2014'}</div>
                <div className="lbl">Engineering Stations</div>
              </div>
            </div>
          )}

          {system.facts && system.facts.length > 0 && (
            <div className="slr-auto-facts">
              {system.facts.map((f) => (
                <div className="slr-auto-fact" key={f.lbl}>
                  <div className="num">{f.num}</div>
                  <div className="lbl">{f.lbl}</div>
                </div>
              ))}
            </div>
          )}

          {system.monitors && system.monitors.length > 0 && (
            <>
              <span className="slr-auto-monitors-label">Monitors &amp; Controls</span>
              <ul className="slr-auto-monitors">
                {system.monitors.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </>
          )}

          {system.subsystems && (
            <div className="slr-auto-subsystems">
              {system.subsystems.map((sub) => (
                <div className="slr-auto-sub" key={sub.name}>
                  <div className="slr-auto-sub-head">
                    <h4>{sub.name}</h4>
                    <span className="slr-auto-tech-badge">{sub.tech}</span>
                  </div>
                  <p className="slr-auto-desc" style={{ marginBottom: 0 }}>{sub.desc}</p>
                </div>
              ))}
            </div>
          )}

          <div className="slr-auto-gallery">
            {system.images.map((src, i) => (
              <ImageThumb
                key={src}
                src={src}
                alt={`${system.name} — photo ${i + 1}`}
                initial={system.name[0]}
                className="slr-auto-gallery-img"
                onClick={() => onOpenLightbox(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- hero ---------- */

function AutomationHero() {
  return (
    <section className="slr-auto-hero">
      <div className="slr-auto-hero-grid-bg" aria-hidden="true" />
      <div className="slr-container slr-auto-hero-grid">
        <div>
          <div className="slr-auto-breadcrumb">
            <a href="/">Home</a> / <span className="slr-accent">Automation System</span>
          </div>
          <span className="slr-eyebrow">Automation System</span>
          <h1 className="slr-plant-title">Control Architecture Behind Every Heat</h1>
          <p>
            Redundant PLC systems, dual-bus HMI stations, and DCS control layers run
            across every division of the plant — from blast furnace to rolling mill —
            so quality, efficiency, and consistency are engineered in, not inspected
            in afterward.
          </p>
          <div className="slr-auto-hero-chips">
            <div className="slr-auto-chip"><b>{DIVISIONS.length}</b>Divisions</div>
            <div className="slr-auto-chip"><b>{SYSTEM_COUNT}</b>Control Systems</div>
            <div className="slr-auto-chip"><b>Redundant</b>Processor Failover</div>
          </div>
        </div>
        <div className="slr-auto-hero-schematic" style={{ height: 220, overflow: 'hidden' }}>
          <ControlNode hmiCount={3} redundant />
        </div>
      </div>
    </section>
  );
}

function DivisionNav({ activeDivision, onNavClick }) {
  return (
    <div className="slr-auto-nav">
      <div className="slr-auto-nav-inner">
        {DIVISIONS.map((d) => (
          <button
            key={d.id}
            className={`slr-auto-nav-btn ${activeDivision === d.id ? 'is-active' : ''}`}
            onClick={() => onNavClick(d.id)}
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function DivisionSection({ division, index, openMap, onToggle, onOpenLightbox }) {
  return (
    <section id={division.id} className="slr-auto-division">
      <div className="slr-container">
        <div className="slr-auto-division-head">
          <span className="slr-auto-division-index">DIVISION {String(index + 1).padStart(2, '0')} / {DIVISIONS.length}</span>
          <h2>{division.label}</h2>
          <p>{division.intro}</p>
        </div>
        <div className="slr-auto-systems">
          {division.systems.map((s) => (
            <SystemCard
              key={s.slug}
              system={s}
              isOpen={!!openMap[s.slug]}
              onToggle={() => onToggle(s.slug)}
              onOpenLightbox={(imgIndex) => onOpenLightbox(s, imgIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomationCta() {
  return (
    <section className="slr-auto-cta">
      <div className="slr-container">
        <h2>Want the full automation architecture walkthrough?</h2>
        <div className="slr-auto-cta-actions">
          <a href="/contact" className="slr-btn slr-btn-primary">Talk to Our Engineers</a>
          <a href="/downloads/automation-overview.pdf" className="slr-btn slr-btn-outline">Download Overview</a>
        </div>
      </div>
    </section>
  );
}

export default function AutomationPage() {
  const [openMap, setOpenMap] = useState({ [DIVISIONS[0].systems[0].slug]: true });
  const [activeDivision, setActiveDivision] = useState(DIVISIONS[0].id);
  const [lightbox, setLightbox] = useState(null);

  function toggle(slug) {
    setOpenMap((cur) => ({ ...cur, [slug]: !cur[slug] }));
  }

  function scrollToDivision(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveDivision(entry.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    DIVISIONS.forEach((d) => {
      const el = document.getElementById(d.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  function closeLightbox() { setLightbox(null); }
  function stepLightbox(delta) {
    setLightbox((cur) => {
      if (!cur) return cur;
      const total = cur.system.images.length;
      return { ...cur, imgIndex: (cur.imgIndex + delta + total) % total };
    });
  }

  return (
    <div className="slr-about">
      <AutomationHero />
      <DivisionNav activeDivision={activeDivision} onNavClick={scrollToDivision} />

      {DIVISIONS.map((division, i) => (
        <DivisionSection
          key={division.id}
          division={division}
          index={i}
          openMap={openMap}
          onToggle={toggle}
          onOpenLightbox={(system, imgIndex) => setLightbox({ system, imgIndex })}
        />
      ))}

      <AutomationCta />

      {lightbox && (
        <div className="slr-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="slr-lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="slr-lightbox-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}>&larr;</button>
          <ImageThumb
            src={lightbox.system.images[lightbox.imgIndex]}
            alt={`${lightbox.system.name} — photo ${lightbox.imgIndex + 1}`}
            initial={lightbox.system.name[0]}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="slr-lightbox-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}>&rarr;</button>
          <div className="slr-lightbox-caption">
            {lightbox.system.name} &mdash; {lightbox.imgIndex + 1} / {lightbox.system.images.length}
          </div>
        </div>
      )}
    </div>
  );
}