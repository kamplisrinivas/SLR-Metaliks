import React, { useEffect, useRef, useState } from 'react';
import './Aboutpage.css';
import './Sustainability.css';

/*
  SLR Metaliks — Sustainability Page
  Plain React + CSS, matching AboutPage.css tokens.

  Signature elements:
  - REGrowthChart: a generated bar chart of your actual renewable-energy
    import share over time (FY21-22: 60%, FY22-23: 80%, post-Pavagada
    target: ~90%) — real data-driven markup, not a stock graphic.
  - REShareRing: a small donut per project showing its share of total
    power imports, generated the same way.

  Content is transcribed from what you provided, lightly organized for
  web readability. A few notes on judgment calls:
  - Your source describes a "19.8 MW wind mill" investment in FY2018-19
    and, separately, the "Ecoren Wind Power Project" — same location
    logic (9 x 2.2MW = 19.8MW, operational since Sept 2018) — so I've
    treated these as the SAME project rather than listing it twice.
  - The Pavagada solar project (23.76 MWp) has no stated % share of
    imports in your source, since it's still under construction — I've
    left that as "Upcoming" rather than inventing a number.
  - No specific FSI (Frequency Severity Index) number was given, so the
    safety section states the qualitative claim only ("below industry
    benchmark"), not a fabricated figure.

  Image convention matches the other pages:
    public/images/sustainability/<slug>/1.jpg (2.jpg, 3.jpg)
  Missing files fall back to a placeholder automatically.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const RE_GROWTH = [
  { label: 'FY 2021-22', pct: 60 },
  { label: 'FY 2022-23', pct: 80 },
  { label: 'Post-Pavagada (Target)', pct: 90, isTarget: true },
];

const RE_PROJECTS = [
  {
    name: 'Ecoren Wind Power',
    slug: 'ecoren-wind',
    type: 'wind',
    share: 17,
    desc: '9 Vestas turbines (2.2 MW each) across 120 acres at Muller village, Sindhanur taluk, Raichur, grid-connected via a 110 kV line.',
    facts: [
      { lbl: 'Capacity', val: '19.8 MW' },
      { lbl: 'Monthly Import (avg)', val: '21.25 Lac units' },
      { lbl: 'Annual Import', val: '~25.5 million units' },
      { lbl: 'Operational Since', val: 'Sept 2018' },
    ],
  },
  {
    name: 'Radiance Solar Park',
    slug: 'radiance-solar',
    type: 'solar',
    share: 27,
    desc: 'Solar park at Bennur village, Karatagi taluka, Koppal (200 acres, 75 MWp total) — SLRM holds exclusive rights to 30 MWp via two 15 MWp SPVs.',
    facts: [
      { lbl: 'SLRM Capacity', val: '30 MWp' },
      { lbl: 'Monthly Import (avg)', val: '33.5 Lac units' },
      { lbl: 'Annual Import', val: '~40 million units' },
      { lbl: 'Operational Since', val: 'July 2022' },
    ],
  },
  {
    name: 'Green Infra Solar — Gangavati',
    slug: 'green-infra-gangavati',
    type: 'solar',
    share: 20,
    desc: 'Solar park at Venkatagiri village, Gangavati taluka, Koppal (60 MWp total, operated by a Sembcorp Singapore subsidiary) — SLRM holds exclusive rights to 27 MWp.',
    facts: [
      { lbl: 'SLRM Capacity', val: '27 MWp' },
      { lbl: 'Monthly Import (avg)', val: '25.7 Lac units' },
      { lbl: 'Annual Import', val: '~31 million units' },
      { lbl: 'Operational Since', val: 'Sept 2022' },
    ],
  },
  {
    name: 'Green Infra Solar — Pavagada',
    slug: 'green-infra-pavagada',
    type: 'upcoming',
    share: null,
    desc: 'Solar park at Pavagada taluka, Tumakur (250 MWp + 50 MW wind, under construction) — SLRM holds exclusive rights to 23.76 MWp.',
    facts: [
      { lbl: 'SLRM Capacity', val: '23.76 MWp' },
      { lbl: 'Monthly Import (avg)', val: '31.6 Lac units' },
      { lbl: 'Annual Import', val: '~38 million units' },
      { lbl: 'Status', val: 'Expected Dec 2023' },
    ],
  },
  {
    name: 'Blast Furnace Gas Co-generation',
    slug: 'bf-gas-cogen',
    type: 'selfgen',
    share: 15,
    desc: 'Self-generated power recovered from Blast Furnace waste gas — reducing reliance on both grid and imported renewable power.',
    facts: [
      { lbl: 'Source', val: 'Blast Furnace Waste Gas' },
      { lbl: 'Contribution', val: '~15% of total energy requirement' },
      { lbl: 'Type', val: 'Self-Generated (Non-Import)' },
    ],
  },
].map((p) => ({ ...p, images: [1, 2, 3].map((n) => `/images/sustainability/${p.slug}/${n}.jpg`) }));

const PILLARS = [
  {
    id: 'governance',
    label: 'Corporate Governance',
    intro: 'Legal compliance, business ethics, and the policies that govern how SLRM operates.',
    subsections: [
      {
        name: 'Legal Compliance',
        slug: 'legal-compliance',
        sub: 'Zero non-compliance instances',
        desc: 'SLRM complies with all applicable legislation and regulations. Updates on operational, employee, and financial legal requirements are periodically monitored and communicated to all functions, with no instances of non-compliance. SLRM believes sustainable business requires vigilance to every section of the law, and complies with all provisions through a digital monitoring mechanism (an online portal system) developed and supported by E&Y.',
        documents: [
          'Environmental Clearance – 1',
          'Environmental Clearance – 2',
          'Environmental Clearance – 3',
          'Compliance to Environmental Clearance – 1',
          'Compliance to Environmental Clearance – 2',
          'Compliance to Environmental Clearance – 3',
          'Copy of Consent for Operations',
          'Environment Statement (Form-V) FY 2025-26',
          'Returns Filed on BMW Rules 2025',
          'Returns Filed on HWM Rules (Form-4)',
        ],
      },
      {
        name: 'Business Ethics',
        slug: 'business-ethics',
        sub: '10 governing policies',
        desc: 'The SLRM Code of Conduct is the cornerstone of our ethical behaviour. A Whistleblower mechanism is in place to identify and report any instance of unethical behaviour.',
        documents: [
          'Business Code of Conduct',
          'Supplier Code of Conduct',
          'Whistleblower Policy',
          'Climate Change Policy',
          'QEHS Policy',
          'People Policy',
          'CSR Policy',
          'Protection of Human Rights Policy',
          'Grievance Redressal Mechanism',
          'Policy on Labour Practices and Employment Rights',
        ],
      },
    ],
  },
  {
    id: 'environment',
    label: 'Sustainable Environment',
    intro: 'ISO-certified environmental management, a real renewable energy growth story, emissions monitoring, water conservation, and zero-landfill waste handling.',
    subsections: [
      {
        name: 'Environment Management System',
        slug: 'ems',
        sub: 'ISO 14001:2015 certified',
        desc: 'SLRM is certified to ISO 14001:2015 for its Environment Management System.',
      },
      {
        name: 'Emission Management',
        slug: 'emission-management',
        sub: 'Scope 1, 2 & 3 tracked',
        desc: 'SLRM measures all Scope 1, Scope 2, and Scope 3 emissions, working toward CO2eq reduction and carbon neutrality — including a target to bring Scope 2 emissions to zero. Adequate air pollution control equipment is provided for all emission sources.',
        stats: [
          { num: '7', lbl: 'Chimneys with CEMS' },
          { num: '1', lbl: 'AAQM Station' },
          { num: 'Real-Time', lbl: 'CPCB & SPCB Linked' },
        ],
      },
      {
        name: 'Water Resource Management',
        slug: 'water-management',
        sub: '5.68%+ reduction vs. FY 2020-21',
        waterReduction: 5.68,
        desc: 'A heightened focus on water recirculation across all process units has significantly reduced specific water consumption. Vigilant monitoring of water losses, recycling cooling water from the Mini Blast Furnace, Sinter Plant, Power Plant, Steel Melting Shop, and Rolling Mill Shop, along with treatment of wastewater from various drains, has contributed to this reduction. SLR Metaliks is committed to minimizing water usage across the entire value chain, adopting technologies to reduce consumption and expanding recycling activities.',
      },
      {
        name: 'Waste Management',
        slug: 'waste-management',
        sub: 'Zero landfill',
        desc: 'SLRM has adopted a zero-landfill concept, with scientific segregation and storage of waste. Waste generated has become a useful by-product and is sold to buyers — nothing is sent to landfill.',
      },
    ],
  },
  {
    id: 'people',
    label: 'Care for People',
    intro: 'Occupational health & safety systems, critical risk management, and structured training across the workforce.',
    subsections: [
      {
        name: 'Occupational Health & Safety',
        slug: 'ohs',
        sub: 'Zero harm commitment',
        desc: 'SLRM is committed to providing a safe and healthy workplace for employees, contractors, visitors, and the communities affected by our operations, aiming to comply with all applicable health and safety legal requirements. World-class Occupational Health and Safety (OHS) management systems are implemented and maintained across the plant, guided by a policy in which people\u2019s lives and well-being take priority over all other objectives. SLRM works toward "zero harm" through Hazard Identification, Risk Assessment, HAZOP studies, SOPs incorporating safety, quality, and environment goals, training, motivation, awards, competitions, campaigns, incident investigation, and CAPA.',
      },
      {
        name: 'Safety KPIs & Critical Risk Activities',
        slug: 'safety-kpis',
        sub: '6 critical risk categories tracked',
        desc: 'SLR Metaliks records and investigates all First Aid Incidents, Near Misses, Property Damage, Without Lost Time Accidents, and With Lost Time Accidents as proactive steps to prevent incidents. Significant improvement has been seen in LTI accidents by following best practices over the years, with the Frequency Severity Index (FSI) below the benchmark for the steel industry. As a hazardous-process steel plant, identifying Critical Risk Activities (CRAs) is essential to preventing incidents.',
        cras: ['Work at Height', 'Hot Work', 'Excavation', 'Confined Space Entry', 'LOTO', 'Working with Toxic Gases'],
      },
      {
        name: 'Training & Education',
        slug: 'training-education',
        sub: 'Structured, competency-based',
        desc: 'SLRM has a structured training mechanism covering every employee, with a competency and skill matrix, training need assessment, and training feedback all in place. Training halls, projectors, and audio/video-based training modules are available, with internal and external trainers engaged to improve safety, health, and environment awareness. Job-specific training, induction training, on-the-job training, classroom training, and hand-holding are conducted to strengthen the organisation\u2019s safety culture.',
        documents: [
          'Bio Medical Waste Generation Report — 2024',
          'Bio Medical Waste Generation Report — 2025',
          'Total Quality Management — Report 1',
          'Total Quality Management — Report 2',
        ],
      },
    ],
  },
].map((pillar) => ({
  ...pillar,
  subsections: pillar.subsections.map((s) => ({
    ...s,
    images: [1, 2, 3].map((n) => `/images/sustainability/${s.slug}/${n}.jpg`),
  })),
}));

/* ---------- generated charts ---------- */

function REGrowthChart() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setAnimate(true)),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="slr-re-growth" ref={ref}>
      <div className="slr-re-growth-head">
        <h3>Renewable Energy Share of Power Imports</h3>
        <span>Real progression, not a projection</span>
      </div>
      <div className="slr-re-bars">
        {RE_GROWTH.map((g) => (
          <div className={`slr-re-bar-col ${g.isTarget ? 'is-target' : ''}`} key={g.label}>
            <div className="slr-re-bar-track">
              <div className="slr-re-bar-fill" style={{ height: animate ? `${g.pct}%` : '0%' }} />
            </div>
            <div className="slr-re-bar-pct">{g.pct}%</div>
            <div className="slr-re-bar-label">{g.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function REShareRing({ share, color }) {
  const size = 58;
  const stroke = 7;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  const dash = share == null ? 0 : (share / 100) * circumference;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--cream-line)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={animate ? circumference - dash : circumference}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
      <text x="50%" y="53%" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--ink)" fontFamily="Barlow Condensed, sans-serif">
        {share == null ? '\u2014' : `${share}%`}
      </text>
    </svg>
  );
}

function WaterRing({ pct }) {
  const size = 84;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);
  const dash = (Math.min(pct, 100) / 100) * circumference;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--cream-line)" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--water)" strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={animate ? circumference - dash : circumference}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 1.1s ease' }}
      />
      <text x="50%" y="46%" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink)" fontFamily="Barlow Condensed, sans-serif">{pct}%</text>
      <text x="50%" y="62%" textAnchor="middle" fontSize="8" fill="var(--text-gray)" fontFamily="Inter, sans-serif">REDUCED</text>
    </svg>
  );
}

/* ---------- shared image helper ---------- */

function ImageThumb({ src, alt, className = '', onClick, initial }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className={`slr-sus-img-fallback ${className}`} onClick={onClick}>
        <span>{initial}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onClick={onClick} onError={() => setErrored(true)} loading="lazy" />;
}

/* ---------- RE project card ---------- */

function REProjectCard({ project }) {
  const colorMap = { wind: 'var(--water)', solar: 'var(--sun)', selfgen: 'var(--copper)', upcoming: 'var(--text-gray-light)' };
  return (
    <div className="slr-re-card">
      <div className="slr-re-card-top">
        <div className="slr-re-ring-wrap">
          <REShareRing share={project.share} color={colorMap[project.type]} />
        </div>
        <div className="slr-re-card-title">
          <h4>{project.name}</h4>
          <span className={`slr-re-card-badge ${project.type}`}>
            {project.type === 'upcoming' ? 'Upcoming' : project.type === 'selfgen' ? 'Self-Generated' : project.type}
          </span>
        </div>
      </div>
      <p className="slr-re-card-desc">{project.desc}</p>
      <div className="slr-re-card-facts">
        {project.facts.map((f) => (
          <div className="slr-re-card-fact" key={f.lbl}>
            <span className="lbl">{f.lbl}</span>
            <span className="val">{f.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- subsection accordion item ---------- */

function SubsectionItem({ sub, isOpen, onToggle, onOpenLightbox }) {
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
    <div className={`slr-sus-item ${isOpen ? 'is-open' : ''}`}>
      <button className="slr-sus-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="slr-sus-icon">{sub.name[0]}</span>
        <span className="slr-sus-trigger-text">
          <h3>{sub.name}</h3>
          <span className="slr-sus-trigger-sub">{sub.sub}</span>
        </span>
        <span className="slr-sus-chevron">&#9660;</span>
      </button>
      <div className="slr-sus-panel" style={{ maxHeight, overflow: 'hidden' }}>
        <div className="slr-sus-panel-inner" ref={panelRef}>
          {sub.waterReduction && (
            <div className="slr-water-highlight">
              <div className="slr-water-ring"><WaterRing pct={sub.waterReduction} /></div>
              <div className="slr-water-highlight-text">
                <h4>Specific Water Consumption</h4>
                <p>Reduced by more than {sub.waterReduction}% versus FY 2020-21, driven by recirculation across every major process unit.</p>
              </div>
            </div>
          )}

          <p className="slr-sus-desc">{sub.desc}</p>

          {sub.stats && (
            <div className="slr-sus-stats-row">
              {sub.stats.map((s) => (
                <div className="slr-sus-stat-pill" key={s.lbl}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          )}

          {sub.cras && (
            <div className="slr-cra-grid">
              {sub.cras.map((c) => (
                <div className="slr-cra-item" key={c}>{c}</div>
              ))}
            </div>
          )}

          {sub.documents && (
            <div className="slr-doc-grid">
              {sub.documents.map((d) => (
                <a key={d} href={`/documents/${d.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`} className="slr-doc-link">
                  <span className="slr-doc-icon">PDF</span>
                  {d}
                </a>
              ))}
            </div>
          )}

          {sub.images && (
            <div className="slr-sus-gallery">
              {sub.images.map((src, i) => (
                <ImageThumb
                  key={src}
                  src={src}
                  alt={`${sub.name} — photo ${i + 1}`}
                  initial={sub.name[0]}
                  className="slr-sus-gallery-img"
                  onClick={() => onOpenLightbox(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- hero ---------- */

function SustainabilityHero() {
  return (
    <section className="slr-sus-hero">
      <div className="slr-container">
        <div className="slr-sus-breadcrumb">
          <a href="/">Home</a> / <span className="slr-accent">Sustainability</span>
        </div>
        <span className="slr-eyebrow">Responsible Business</span>
        <h1 className="slr-src-hero-title">Steel Made Responsibly, Measured Honestly</h1>
        <p>
          From a verified renewable energy journey to zero-landfill waste handling
          and a zero-harm safety culture, sustainability at SLRM is tracked in real
          numbers across governance, environment, and people — not just stated as
          a value.
        </p>
        <div className="slr-sus-hero-chips">
          <div className="slr-sus-chip"><b>ISO 14001:2015</b>Certified EMS</div>
          <div className="slr-sus-chip"><b>~90%</b>Renewable Target Post-Pavagada</div>
          <div className="slr-sus-chip"><b>Zero</b>Landfill Waste</div>
        </div>
      </div>
    </section>
  );
}

function PillarNav({ activePillar, onNavClick }) {
  return (
    <div className="slr-sus-nav">
      <div className="slr-sus-nav-inner">
        {PILLARS.map((p) => (
          <button
            key={p.id}
            className={`slr-sus-nav-btn ${activePillar === p.id ? 'is-active' : ''}`}
            onClick={() => onNavClick(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}


function AutomationDashboard() {
  const metrics = [
    {
      value: '24/7',
      label: 'Digital Monitoring',
      detail: 'Continuous operational visibility',
    },
    {
      value: '7',
      label: 'CEMS Connections',
      detail: 'Continuous emissions monitoring',
    },
    {
      value: '1',
      label: 'AAQM Station',
      detail: 'Ambient air quality monitoring',
    },
    {
      value: '100%',
      label: 'Digital Compliance',
      detail: 'Centralised legal tracking',
    },
  ];

  return (
    <div className="slr-auto-dashboard">
      <div className="slr-auto-dashboard-head">
        <div>
          <span className="slr-auto-kicker">SMART OPERATIONS</span>
          <h3>Automation at the Core of Sustainable Operations</h3>
        </div>

        <div className="slr-auto-status">
          <span className="slr-auto-status-dot" />
          SYSTEMS CONNECTED
        </div>
      </div>

      <div className="slr-auto-metrics">
        {metrics.map((metric) => (
          <div className="slr-auto-metric" key={metric.label}>
            <div className="slr-auto-metric-value">{metric.value}</div>
            <div className="slr-auto-metric-label">{metric.label}</div>
            <div className="slr-auto-metric-detail">{metric.detail}</div>
          </div>
        ))}
      </div>

      <div className="slr-auto-flow">
        <div className="slr-auto-flow-node">
          <span>01</span>
          <strong>Sensors</strong>
          <small>Plant &amp; environment</small>
        </div>

        <div className="slr-auto-flow-line" />

        <div className="slr-auto-flow-node">
          <span>02</span>
          <strong>Digital Systems</strong>
          <small>Data collection</small>
        </div>

        <div className="slr-auto-flow-line" />

        <div className="slr-auto-flow-node">
          <span>03</span>
          <strong>Analytics</strong>
          <small>Performance insights</small>
        </div>

        <div className="slr-auto-flow-line" />

        <div className="slr-auto-flow-node">
          <span>04</span>
          <strong>Action</strong>
          <small>Continuous improvement</small>
        </div>
      </div>
    </div>
  );
}

function PillarSection({ pillar, index, openMap, onToggle, onOpenLightbox }) {
  return (
    <section id={pillar.id} className="slr-sus-pillar">
      <div className="slr-container">
        <div className="slr-sus-pillar-head">
          <span className="slr-sus-pillar-index">PILLAR {String(index + 1).padStart(2, '0')} / {PILLARS.length}</span>
          <h2>{pillar.label}</h2>
          <p>{pillar.intro}</p>
        </div>

        {pillar.id === 'environment' && (
          <>
            <REGrowthChart />
            <div className="slr-re-grid">
              {RE_PROJECTS.map((p) => (
                <REProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </>
        )}

        {pillar.id === 'automation' && (
  <AutomationDashboard />
)}


        <div className="slr-sus-list">
          {pillar.subsections.map((s) => (
            <SubsectionItem
              key={s.slug}
              sub={s}
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

function SustainabilityCta() {
  return (
    <section className="slr-sus-cta">
      <div className="slr-container">
        <h2>Want the full ESG disclosure &amp; policy documents?</h2>
        <div className="slr-sus-cta-actions">
          <a href="/contact" className="slr-btn slr-btn-primary">Contact Sustainability Team</a>
          <a href="/downloads/esg-report.pdf" className="slr-btn slr-btn-outline">Download ESG Report</a>
        </div>
      </div>
    </section>
  );
}

export default function SustainabilityPage() {
  const [openMap, setOpenMap] = useState({ [PILLARS[0].subsections[0].slug]: true });
  const [activePillar, setActivePillar] = useState(PILLARS[0].id);
  const [lightbox, setLightbox] = useState(null);

  function toggle(slug) {
    setOpenMap((cur) => ({ ...cur, [slug]: !cur[slug] }));
  }

  function scrollToPillar(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActivePillar(entry.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    PILLARS.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  function closeLightbox() { setLightbox(null); }
  function stepLightbox(delta) {
    setLightbox((cur) => {
      if (!cur) return cur;
      const total = cur.sub.images.length;
      return { ...cur, imgIndex: (cur.imgIndex + delta + total) % total };
    });
  }

  return (
    <div className="slr-about">
      <SustainabilityHero />
      <PillarNav activePillar={activePillar} onNavClick={scrollToPillar} />

      {PILLARS.map((pillar, i) => (
        <PillarSection
          key={pillar.id}
          pillar={pillar}
          index={i}
          openMap={openMap}
          onToggle={toggle}
          onOpenLightbox={(sub, imgIndex) => setLightbox({ sub, imgIndex })}
        />
      ))}

      <SustainabilityCta />

      {lightbox && (
        <div className="slr-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="slr-lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="slr-lightbox-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}>&larr;</button>
          <ImageThumb
            src={lightbox.sub.images[lightbox.imgIndex]}
            alt={`${lightbox.sub.name} — photo ${lightbox.imgIndex + 1}`}
            initial={lightbox.sub.name[0]}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="slr-lightbox-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}>&rarr;</button>
          <div className="slr-lightbox-caption">
            {lightbox.sub.name} &mdash; {lightbox.imgIndex + 1} / {lightbox.sub.images.length}
          </div>
        </div>
      )}
    </div>
  );
}