import React, { useEffect, useMemo, useState } from 'react';
import './AboutPage.css';
import './Careers.css';

/*
  SLR Metaliks — Careers & Current Openings Page
  Plain React + CSS, matching AboutPage.css tokens.

  IMPORTANT: No real job openings were provided, so every listing below
  is a clearly generic, plausible steel-plant role ("Senior Process
  Engineer", "QA Executive", etc.) tagged with a department — NOT real
  current vacancies at SLRM. Replace OPENINGS with your real postings
  before publishing. Departments (Operations, Engineering, Quality,
  Safety, HR, Sales & Marketing, Finance, Sustainability) match the
  department list already used on the Leadership page for consistency.

  QR CODE — a note on how this works and what to change:
  Writing a QR encoder from scratch risks producing something that
  *looks* like a QR code but doesn't actually scan (QR encoding is
  unforgiving of small mistakes, and I have no way to test-scan the
  output here). So instead, QRCode below renders the code via a
  well-known, free, no-API-key image endpoint (api.qrserver.com),
  which works immediately with no install. Two things worth knowing:
    1. This sends the encoded text (currently: this page's own URL)
       to a third-party service to generate the image — fine for a
       public link, but don't encode anything sensitive this way.
    2. For a dependency-free, fully local alternative, swap in the
       `qrcode` npm package (`npm install qrcode`) and replace the
       QRCode component's <img> with a canvas/SVG render from that
       library — a few lines, commented inline below.

  The application form is fully functional client-side: validation,
  file input for a resume, loading -> success state. No backend is
  wired up — see the TODO in handleSubmit.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const DEPARTMENTS = ['Operations', 'Engineering', 'Quality', 'Safety', 'HR', 'Sales & Marketing', 'Finance', 'Sustainability'];

const OPENINGS = [
  { id: 'op-1', title: 'Senior Process Engineer — Steel Melting Shop', dept: 'Operations', location: 'Hosapete, KA', type: 'Full-time', exp: '5+ yrs' },
  { id: 'op-2', title: 'Shift Engineer — Rolling Mill', dept: 'Operations', location: 'Hosapete, KA', type: 'Full-time', exp: '3+ yrs' },
  { id: 'op-3', title: 'Instrumentation Engineer — Automation', dept: 'Engineering', location: 'Hosapete, KA', type: 'Full-time', exp: '4+ yrs' },
  { id: 'op-4', title: 'Design Engineer — Mechanical', dept: 'Engineering', location: 'Hosapete, KA', type: 'Full-time', exp: '2+ yrs' },
  { id: 'op-5', title: 'Quality Assurance Executive', dept: 'Quality', location: 'Hosapete, KA', type: 'Full-time', exp: '3+ yrs' },
  { id: 'op-6', title: 'NDT Inspector', dept: 'Quality', location: 'Hosapete, KA', type: 'Full-time', exp: '2+ yrs' },
  { id: 'op-7', title: 'Safety Officer', dept: 'Safety', location: 'Hosapete, KA', type: 'Full-time', exp: '4+ yrs' },
  { id: 'op-8', title: 'HR Business Partner', dept: 'HR', location: 'Gurugram, HR', type: 'Full-time', exp: '5+ yrs' },
  { id: 'op-9', title: 'Sales Executive — Automotive Accounts', dept: 'Sales & Marketing', location: 'Gurugram, HR', type: 'Full-time', exp: '3+ yrs' },
  { id: 'op-10', title: 'Finance Analyst', dept: 'Finance', location: 'Gurugram, HR', type: 'Full-time', exp: '2+ yrs' },
  { id: 'op-11', title: 'Sustainability Executive', dept: 'Sustainability', location: 'Hosapete, KA', type: 'Full-time', exp: '2+ yrs' },
  { id: 'op-12', title: 'Graduate Engineer Trainee', dept: 'Engineering', location: 'Hosapete, KA', type: 'Full-time', exp: '0\u20131 yr' },
];

const WHY_JOIN = [
  { icon: '\u2726', title: 'Real Growth', desc: 'Structured training, competency matrices, and clear paths from Graduate Engineer Trainee to plant leadership.' },
  { icon: '\u26E8', title: 'Safety First', desc: 'A "zero harm" culture backed by real hazard identification, risk assessment, and CAPA processes — not just a poster on the wall.' },
  { icon: '\u26A1', title: 'Green Mission', desc: 'Work on a genuine renewable energy journey — from 60% to a targeted ~90% of power imports from clean sources.' },
  { icon: '\u25C8', title: 'Ethical Culture', desc: 'A Code of Conduct, whistleblower mechanism, and grievance redressal that are actually enforced, not just published.' },
];

/* ---------- QR code component ---------- */

function QRCode({ value, size = 200 }) {
  const [errored, setErrored] = useState(false);
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`;

  // --- Alternative, fully local/offline option (no third-party call): ---
  // npm install qrcode
  // import QRCodeLib from 'qrcode';
  // then render to a <canvas ref={...}> via QRCodeLib.toCanvas(canvasRef.current, value)
  // inside a useEffect — swap this whole component's return for that canvas.

  if (errored) {
    return (
      <div className="slr-car-qr-fallback">
        QR code unavailable offline.
        <br />
        Visit this page directly to apply.
      </div>
    );
  }

  return <img src={src} alt="QR code to open this careers page on your phone" onError={() => setErrored(true)} loading="lazy" />;
}

/* ---------- hero ---------- */

function CareersHero({ openingsCount }) {
  return (
    <section className="slr-car-hero">
      <div className="slr-container">
        <div className="slr-car-breadcrumb">
          <a href="/">Home</a> / <span className="slr-accent">Careers</span>
        </div>
        <span className="slr-eyebrow">Careers</span>
        <h1 className="slr-src-hero-title">Build Your Career in Steel That Matters</h1>
        <p>
          Join a team producing alloy and engineering steel for India&rsquo;s automotive,
          rail, defence, and energy sectors — backed by real training, a genuine
          safety culture, and a measurable path toward green steel.
        </p>
        <div className="slr-car-hero-chips">
          <div className="slr-car-chip"><b>{openingsCount}</b>Open Positions</div>
          <div className="slr-car-chip"><b>{DEPARTMENTS.length}</b>Departments</div>
          <div className="slr-car-chip"><b>21+</b>Years, Growing</div>
        </div>
        <div className="slr-car-hero-actions">
          <a href="#openings" className="slr-btn slr-btn-primary">View Open Positions</a>
          <a href="#apply" className="slr-btn slr-btn-outline">Apply Now</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- why join ---------- */

function WhyJoin() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-car-head">
          <span className="slr-eyebrow">Why SLRM</span>
          <h2>What it's actually like to work here</h2>
        </div>
        <div className="slr-car-why-grid">
          {WHY_JOIN.map((w) => (
            <div key={w.title} className="slr-car-why-card">
              <div className="slr-car-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- openings board ---------- */

function OpeningsBoard({ onApply }) {
  const [activeDept, setActiveDept] = useState('All');

  const counts = useMemo(() => {
    const map = { All: OPENINGS.length };
    DEPARTMENTS.forEach((d) => {
      map[d] = OPENINGS.filter((o) => o.dept === d).length;
    });
    return map;
  }, []);

  const filtered = activeDept === 'All' ? OPENINGS : OPENINGS.filter((o) => o.dept === activeDept);
  const filterTabs = ['All', ...DEPARTMENTS.filter((d) => counts[d] > 0)];

  return (
    <section id="openings" className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-car-head">
          <span className="slr-eyebrow">Current Openings</span>
          <h2>{OPENINGS.length} roles open across {filterTabs.length - 1} departments</h2>
          <p>Filter by department, or apply directly below.</p>
        </div>

        <div className="slr-car-filters">
          {filterTabs.map((d) => (
            <button
              key={d}
              className={`slr-car-filter-btn ${activeDept === d ? 'is-active' : ''}`}
              onClick={() => setActiveDept(d)}
            >
              {d}<span className="slr-car-filter-count">({counts[d]})</span>
            </button>
          ))}
        </div>

        <div className="slr-car-board">
          {filtered.length === 0 && <div className="slr-car-empty">No open roles in this department right now.</div>}
          {filtered.map((job) => (
            <div key={job.id} className="slr-car-job-card">
              <div className="slr-car-job-main">
                <span className="slr-car-job-dept-tag">{job.dept}</span>
                <div className="slr-car-job-title">{job.title}</div>
                <div className="slr-car-job-meta">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                  <span>{job.exp} experience</span>
                </div>
              </div>
              <button className="slr-car-apply-btn" onClick={() => onApply(job)}>Apply Now</button>
            </div>
          ))}
        </div>

        <p className="slr-car-placeholder-note">
          These are sample listings to demonstrate the page — replace OPENINGS in
          the code with your real current vacancies.
        </p>
      </div>
    </section>
  );
}

/* ---------- application form ---------- */

const INITIAL_FORM = { name: '', email: '', phone: '', position: '', resumeName: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) {
    errors.phone = 'Enter a valid 10-digit number.';
  }
  if (!form.position) errors.position = 'Select the position you\u2019re applying for.';
  return errors;
}

function ApplicationForm({ presetPosition }) {
  const [form, setForm] = useState(() => ({ ...INITIAL_FORM, position: presetPosition || '' }));
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  useEffect(() => {
    if (presetPosition) {
      setForm((f) => ({ ...f, position: presetPosition }));
    }
  }, [presetPosition]);

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }
  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  }
  function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    setForm((f) => ({ ...f, resumeName: file ? file.name : '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, phone: true, position: true });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    // TODO: replace with your real submission endpoint, e.g.:
    // const body = new FormData();
    // body.append('name', form.name); ... body.append('resume', fileObject);
    // await fetch('/api/careers/apply', { method: 'POST', body });
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="slr-car-success">
        <span className="slr-car-success-icon">&#10003;</span>
        <span>
          Thanks, {form.name.split(' ')[0] || 'there'} — your application for
          <strong> {form.position || 'this role'}</strong> has been received. Our HR team will reach out if there's a match.
        </span>
      </div>
    );
  }

  return (
    <form className="slr-car-form-wrap" onSubmit={handleSubmit} noValidate>
      <div className="slr-car-form-grid">
        <div className="slr-car-field">
          <label htmlFor="name">Full Name<span className="req">*</span></label>
          <input
            id="name" type="text" placeholder="Your full name"
            value={form.name} onChange={(e) => handleChange('name', e.target.value)} onBlur={() => handleBlur('name')}
            className={touched.name && errors.name ? 'has-error' : ''}
            aria-invalid={!!(touched.name && errors.name)} aria-describedby="name-error"
          />
          {touched.name && errors.name && <span className="slr-car-field-error" id="name-error">{errors.name}</span>}
        </div>

        <div className="slr-car-field">
          <label htmlFor="email">Email<span className="req">*</span></label>
          <input
            id="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={(e) => handleChange('email', e.target.value)} onBlur={() => handleBlur('email')}
            className={touched.email && errors.email ? 'has-error' : ''}
            aria-invalid={!!(touched.email && errors.email)} aria-describedby="email-error"
          />
          {touched.email && errors.email && <span className="slr-car-field-error" id="email-error">{errors.email}</span>}
        </div>

        <div className="slr-car-field">
          <label htmlFor="phone">Phone<span className="req">*</span></label>
          <input
            id="phone" type="tel" placeholder="10-digit number"
            value={form.phone} onChange={(e) => handleChange('phone', e.target.value.replace(/[^\d]/g, '').slice(0, 10))} onBlur={() => handleBlur('phone')}
            className={touched.phone && errors.phone ? 'has-error' : ''}
            aria-invalid={!!(touched.phone && errors.phone)} aria-describedby="phone-error"
          />
          {touched.phone && errors.phone && <span className="slr-car-field-error" id="phone-error">{errors.phone}</span>}
        </div>

        <div className="slr-car-field">
          <label htmlFor="position">Position<span className="req">*</span></label>
          <select
            id="position"
            value={form.position}
            onChange={(e) => handleChange('position', e.target.value)}
            onBlur={() => handleBlur('position')}
            className={touched.position && errors.position ? 'has-error' : ''}
            aria-invalid={!!(touched.position && errors.position)}
            aria-describedby="position-error"
          >
            <option value="">Select a role</option>
            {OPENINGS.map((o) => (
              <option key={o.id} value={o.title}>{o.title}</option>
            ))}
            <option value="General Application">General Application (no specific role)</option>
          </select>
          {touched.position && errors.position && <span className="slr-car-field-error" id="position-error">{errors.position}</span>}
        </div>

        <div className="slr-car-field full">
          <label htmlFor="resume">Resume / CV</label>
          <div className={`slr-car-file-drop ${form.resumeName ? 'has-file' : ''}`}>
            {form.resumeName ? `Attached: ${form.resumeName}` : 'Click or drop your resume (PDF, DOC)'}
            <input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
          </div>
        </div>

        <div className="slr-car-field full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message" placeholder="Anything you'd like us to know..."
            value={form.message} onChange={(e) => handleChange('message', e.target.value)}
          />
        </div>
      </div>

      <div className="slr-car-submit-row">
        <button type="submit" className="slr-car-submit-btn" disabled={status === 'submitting'}>
          {status === 'submitting' && <span className="slr-car-spinner" />}
          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}

/* ---------- apply section (form + QR) ---------- */

function ApplySection({ presetPosition }) {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://slrmetaliks.com/careers';

  return (
    <section id="apply" className="slr-section slr-car-apply-section">
      <div className="slr-container">
        <div className="slr-car-head">
          <span className="slr-eyebrow">Apply Now</span>
          <h2>Submit your application</h2>
          <p>Fill this in directly, or scan the code to continue on your phone.</p>
        </div>
        <div className="slr-car-apply-grid">
          <ApplicationForm presetPosition={presetPosition} />
          <div className="slr-car-qr-panel">
            <h4>Prefer your phone?</h4>
            <p>Scan this code to open this careers page — with your resume already on your device.</p>
            <div className="slr-car-qr-frame">
              <QRCode value={pageUrl} size={200} />
            </div>
            <div className="slr-car-qr-link">{pageUrl}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareersFootNote() {
  return (
    <section className="slr-car-cta">
      <div className="slr-container">
        <h2>Don't see the right role today?</h2>
        <p>We're growing across every division — send a general application and we'll reach out when there's a fit.</p>
      </div>
    </section>
  );
}

export default function CareersPage() {
  const [presetPosition, setPresetPosition] = useState('');

  function handleApplyClick(job) {
    setPresetPosition(job.title);
    const el = document.getElementById('apply');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="slr-about">
      <CareersHero openingsCount={OPENINGS.length} />
      <WhyJoin />
      <OpeningsBoard onApply={handleApplyClick} />
      <ApplySection presetPosition={presetPosition} />
      <CareersFootNote />
    </div>
  );
}