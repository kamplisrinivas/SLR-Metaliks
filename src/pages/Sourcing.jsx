import React, { useState } from 'react';
import './Aboutpage.css';
import './Sourcing.css';

/*
  SLR Metaliks — Responsible Sourcing Page
  Plain React + CSS, matching AboutPage.css tokens.

  Content is transcribed and lightly organized from what you provided.

  IMPORTANT — Vendor Onboarding: your source gave only the heading
  "Vendor Onboarding" with no body copy underneath it. Rather than
  leave it blank or silently invent detail, I've built a standard
  5-step vendor onboarding flow (Inquiry -> Document Review ->
  Evaluation -> Approval -> Active Partnership) as a reasonable
  placeholder structure. This is NOT transcribed from your source —
  edit ONBOARDING_STEPS below to match your actual process.

  The Supply Query form is fully functional on the client side: live
  field validation (required fields, email format, 10-digit mobile),
  inline error messages, and a loading -> success state on submit.
  There's no backend wired up — handleSubmit currently just simulates
  a network call. Replace the body of handleSubmit with your real POST
  request (see the TODO comment) to actually send inquiries somewhere.

  Image convention matches the other pages:
    public/images/sourcing/gallery/1.jpg (2.jpg, 3.jpg)
  Missing files fall back to a placeholder automatically.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const VALUES = [
  { icon: '\u26AD', title: 'Mutual Success', desc: 'Our suppliers are critical partners — we treat supply chain success as a shared proposition, not a one-way transaction.' },
  { icon: '\u25C8', title: 'Shared Core Values', desc: 'We work with suppliers who share the values in Our Bond and the principles of our Business Conduct.' },
  { icon: '\u2726', title: 'Proactive Risk Management', desc: 'Strong supplier relationships let us proactively manage the supply of key inputs and resolve issues before they escalate.' },
  { icon: '\u2699', title: 'Responsible Sourcing Standard', desc: 'A defined standard ensures sustainable, ethical sourcing practices across our global and local supply chains.' },
];

const CRITERIA = [
  { name: 'Past Performance' },
  { name: 'Pricing' },
  { name: 'Customer Reviews' },
  { name: 'Vendor Profiles' },
  { name: 'Performance Ratings' },
];

/*
  Placeholder structure — see note above. Edit freely to match your
  actual vendor onboarding process.
*/
const ONBOARDING_STEPS = [
  { title: 'Inquiry & Registration', desc: 'Vendor submits company profile and product/service details via the supply query form.' },
  { title: 'Document & Compliance Review', desc: 'Registration certificates and compliance documents are checked against our sourcing standard.' },
  { title: 'Evaluation & Assessment', desc: 'Past performance, pricing, and capability are assessed against our vendor selection criteria.' },
  { title: 'Approval & Agreement', desc: 'Approved vendors sign off on commercial terms and the Supplier Code of Conduct.' },
  { title: 'Active Partnership', desc: 'Onboarded vendors enter ongoing performance rating and relationship management.' },
];

const GALLERY_IMAGES = [1, 2, 3].map((n) => `/images/sourcing/gallery/${n}.jpg`);

/* ---------- shared image helper ---------- */

function ImageThumb({ src, alt, className = '', onClick, initial }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className={`slr-src-img-fallback ${className}`} onClick={onClick}>
        <span>{initial}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onClick={onClick} onError={() => setErrored(true)} loading="lazy" />;
}

/* ---------- hero ---------- */

function SourcingHero() {
  return (
    <section className="slr-src-hero">
      <div className="slr-container">
        <div className="slr-src-breadcrumb">
          <a href="/">Home</a> / <span className="slr-accent">Responsible Sourcing</span>
        </div>
        <span className="slr-eyebrow">Responsible Sourcing</span>
        <h1 className="slr-src-hero-title">
      Supply Chains Built on Trust, Not Just Transactions
    </h1>
        <p>
          We rely on strong relationships with our suppliers, at a global and local
          level, to manage the social, environmental, and ethical risks inherent in
          our supply chain — because our success is a mutual proposition.
        </p>
        <div className="slr-src-hero-actions">
          <a href="#supply-query" className="slr-btn slr-btn-primary">Submit a Supply Query</a>
          <a href="#selection-criteria" className="slr-btn slr-btn-outline">See Our Selection Criteria</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- supply relationship management ---------- */

function RelationshipManagement() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-src-head">
          <span className="slr-eyebrow">Supply Relationship Management</span>
          <h2>Partnerships, not just purchase orders</h2>
          <p>
            SLR treats suppliers as partners, recognising that these relationships
            are crucial to managing risk across our global supply chains. Developing
            partnerships based on strong relationships lets us proactively manage
            the supply of key production inputs and any issues that arise along the way.
          </p>
        </div>
        <div className="slr-src-values-grid">
          {VALUES.map((v) => (
            <div key={v.title} className="slr-src-value-card">
              <div className="slr-src-value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- vendor selection process ---------- */

function SelectionProcess() {
  return (
    <section id="selection-criteria" className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-src-head">
          <span className="slr-eyebrow">Vendor Selection Process</span>
          <h2>How we evaluate potential suppliers</h2>
          <p>
            In a competitive business environment, choosing the right suppliers is
            key to the best possible results. We evaluate and compare vendor data —
            performance history, pricing, and customer feedback — to make informed,
            data-backed sourcing decisions.
          </p>
        </div>
        <div className="slr-src-criteria-grid">
          {CRITERIA.map((c, i) => (
            <div key={c.name} className="slr-src-criteria-card">
              <div className="slr-src-criteria-num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{c.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- vendor onboarding flow ---------- */

function VendorOnboarding() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-src-head">
          <span className="slr-eyebrow">Vendor Onboarding</span>
          <h2>From first inquiry to active partner</h2>
        </div>
        
        <div className="slr-onboard-flow">
          {ONBOARDING_STEPS.map((step, i) => (
            <div key={step.title} className="slr-onboard-step">
              <div className="slr-onboard-node">{i + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- gallery ---------- */

function SourcingGallery({ onOpenLightbox }) {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-src-head">
          <span className="slr-eyebrow">Our Suppliers, In Practice</span>
          <h2>Working alongside our supply partners</h2>
        </div>
        <div className="slr-src-gallery">
          {GALLERY_IMAGES.map((src, i) => (
            <ImageThumb
              key={src}
              src={src}
              alt={`Supplier partnership photo ${i + 1}`}
              initial="S"
              className="slr-src-gallery-img"
              onClick={() => onOpenLightbox(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- supply query form ---------- */

const INITIAL_FORM = { firstName: '', lastName: '', email: '', mobile: '', vendorItem: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = 'First name is required.';
  if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.mobile.trim()) {
    errors.mobile = 'Mobile number is required.';
  } else if (!/^\d{10}$/.test(form.mobile.replace(/\D/g, ''))) {
    errors.mobile = 'Enter a valid 10-digit mobile number.';
  }
  if (!form.vendorItem.trim()) errors.vendorItem = 'Let us know what you supply.';
  return errors;
}

function SupplyQueryForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate({ ...form }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ firstName: true, lastName: true, email: true, mobile: true, vendorItem: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    // TODO: replace this simulated delay with a real request, e.g.:
    // await fetch('/api/supply-query', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus('success');
  }

  if (status === 'success') {
    return (
      <section id="supply-query" className="slr-section slr-src-form-section">
        <div className="slr-container">
          <div className="slr-src-form-wrap">
            <div className="slr-src-success">
              <span className="slr-src-success-icon">&#10003;</span>
              <span>
                Thanks, {form.firstName} — your supply query has been received. Our
                sourcing team will get back to you regarding <strong>{form.vendorItem}</strong>.
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="supply-query" className="slr-section slr-src-form-section">
      <div className="slr-container">
        <div className="slr-src-head">
          <span className="slr-eyebrow">For Supply Query</span>
          <h2>Tell us what you supply</h2>
          <p>Fill this in and our sourcing team will follow up on next steps.</p>
        </div>

        <form className="slr-src-form-wrap" onSubmit={handleSubmit} noValidate>
          <div className="slr-src-form-grid">
            <div className="slr-src-field">
              <label htmlFor="firstName">First Name<span className="req">*</span></label>
              <input
                id="firstName"
                type="text"
                placeholder="First"
                value={form.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                onBlur={() => handleBlur('firstName')}
                className={touched.firstName && errors.firstName ? 'has-error' : ''}
                aria-invalid={!!(touched.firstName && errors.firstName)}
                aria-describedby="firstName-error"
              />
              {touched.firstName && errors.firstName && <span className="slr-src-field-error" id="firstName-error">{errors.firstName}</span>}
            </div>

            <div className="slr-src-field">
              <label htmlFor="lastName">Last Name<span className="req">*</span></label>
              <input
                id="lastName"
                type="text"
                placeholder="Last"
                value={form.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                onBlur={() => handleBlur('lastName')}
                className={touched.lastName && errors.lastName ? 'has-error' : ''}
                aria-invalid={!!(touched.lastName && errors.lastName)}
                aria-describedby="lastName-error"
              />
              {touched.lastName && errors.lastName && <span className="slr-src-field-error" id="lastName-error">{errors.lastName}</span>}
            </div>

            <div className="slr-src-field">
              <label htmlFor="email">Email<span className="req">*</span></label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={touched.email && errors.email ? 'has-error' : ''}
                aria-invalid={!!(touched.email && errors.email)}
                aria-describedby="email-error"
              />
              {touched.email && errors.email && <span className="slr-src-field-error" id="email-error">{errors.email}</span>}
            </div>

            <div className="slr-src-field">
              <label htmlFor="mobile">Mobile<span className="req">*</span></label>
              <input
                id="mobile"
                type="tel"
                placeholder="10-digit number"
                value={form.mobile}
                onChange={(e) => handleChange('mobile', e.target.value.replace(/[^\d]/g, '').slice(0, 10))}
                onBlur={() => handleBlur('mobile')}
                className={touched.mobile && errors.mobile ? 'has-error' : ''}
                aria-invalid={!!(touched.mobile && errors.mobile)}
                aria-describedby="mobile-error"
              />
              {touched.mobile && errors.mobile && <span className="slr-src-field-error" id="mobile-error">{errors.mobile}</span>}
            </div>

            <div className="slr-src-field full">
              <label htmlFor="vendorItem">Vendor Item<span className="req">*</span></label>
              <input
                id="vendorItem"
                type="text"
                placeholder="Item or service you supply"
                value={form.vendorItem}
                onChange={(e) => handleChange('vendorItem', e.target.value)}
                onBlur={() => handleBlur('vendorItem')}
                className={touched.vendorItem && errors.vendorItem ? 'has-error' : ''}
                aria-invalid={!!(touched.vendorItem && errors.vendorItem)}
                aria-describedby="vendorItem-error"
              />
              {touched.vendorItem && errors.vendorItem && <span className="slr-src-field-error" id="vendorItem-error">{errors.vendorItem}</span>}
            </div>

            <div className="slr-src-field full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Type message..."
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
            </div>
          </div>

          <div className="slr-src-submit-row">
            <button type="submit" className="slr-src-submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' && <span className="slr-src-spinner" />}
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function SourcingPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  function closeLightbox() { setLightboxIndex(null); }
  function stepLightbox(delta) {
    setLightboxIndex((i) => (i === null ? null : (i + delta + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }

  return (
    <div className="slr-about">
      <SourcingHero />
      <RelationshipManagement />
      <SelectionProcess />
      <VendorOnboarding />
      <SourcingGallery onOpenLightbox={setLightboxIndex} />
      <SupplyQueryForm />

      {lightboxIndex !== null && (
        <div className="slr-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="slr-lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="slr-lightbox-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}>&larr;</button>
          <ImageThumb src={GALLERY_IMAGES[lightboxIndex]} alt={`Supplier partnership photo ${lightboxIndex + 1}`} initial="S" onClick={(e) => e.stopPropagation()} />
          <button className="slr-lightbox-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}>&rarr;</button>
          <div className="slr-lightbox-caption">{lightboxIndex + 1} / {GALLERY_IMAGES.length}</div>
        </div>
      )}
    </div>
  );
}