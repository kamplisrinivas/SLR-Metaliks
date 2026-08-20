import React, { useMemo, useState } from 'react';
import './Aboutpage.css';
import './Requestsamplepage.css';

/*
  SLR Metaliks — Request a Sample Page
  Plain React + CSS, matching AboutPage.css tokens.

  Reuses real product and application data already established
  elsewhere on this site (Products and Applications pages) for the
  dropdowns, rather than inventing a new disconnected list.

  IMPORTANT — Process flow: no real sample-fulfillment process was
  given, so PROCESS_STEPS below is a standard 4-step structure
  (Submit -> Prepare & Test -> Dispatch -> Feedback) offered as a
  reasonable placeholder — flagged on the page itself, not asserted
  as SLRM's actual documented process. Edit freely.

  The form is fully functional client-side (validation, loading ->
  success state) with no backend wired up — see the TODO in
  handleSubmit for where to add your real request.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const PRODUCTS = [
  'Wire Rod (Round)',
  'Wire Rod (Hex)',
  'Round Bar',
  'Hexagon Bar',
  'RCS',
  'Flat',
  'Peeled & Ground Bars',
  'Cold Drawn & Ground Bars',
  'Pig Iron',
];

const APPLICATIONS = [
  'Crankshaft & Camshaft',
  'Gears & Shafts',
  'Connecting Rods',
  'Axle Shaft / Drive Shaft / Axle Beam',
  'Bearings',
  'Suspension',
  'Stabilizer Bars',
  'High Tensile Fasteners',
  'Hydraulic Cylinder Piston Rods',
  'Other',
];

const WHY_SAMPLE = [
  { icon: '\u2699', title: 'Verify Spec Fit', desc: 'Confirm the grade and dimensional tolerance meet your process before committing to volume.' },
  { icon: '\u2726', title: 'Real Mill Output', desc: 'Samples are drawn from actual production, not a separate lab-only batch.' },
  { icon: '\u25C8', title: 'Traceable Certification', desc: 'Every sample ships with its mill test certificate for your own QA records.' },
  { icon: '\u26AD', title: 'Direct Engineering Contact', desc: 'A named contact from our technical team follows up on your specific application.' },
];

/*
  Placeholder structure — see note above. Edit freely to match your
  actual sample fulfillment process.
*/
const PROCESS_STEPS = [
  { title: 'Submit Request', desc: 'Tell us the product, grade, and application you need to validate.' },
  { title: 'Prepare & Test', desc: 'Your sample is drawn from production and checked against spec.' },
  { title: 'Dispatch', desc: 'Shipped to your facility with its mill test certificate.' },
  { title: 'Your Feedback', desc: 'Our technical team follows up on fit, and next steps if you move to order.' },
];

const INITIAL_FORM = {
  name: '', company: '', email: '', phone: '',
  product: '', grade: '', application: '',
  quantity: '', address: '', message: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.company.trim()) errors.company = 'Company name is required.';
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
  if (!form.product) errors.product = 'Select a product.';
  if (!form.application) errors.application = 'Select an application.';
  if (!form.quantity.trim()) errors.quantity = 'Let us know how much you need.';
  if (!form.address.trim()) errors.address = 'Shipping address is required.';
  return errors;
}

/* ---------- hero ---------- */

function SampleHero() {
  return (
    <section className="slr-dem-hero">
      <div className="slr-container">
        <div className="slr-dem-breadcrumb">
          <a href="/">Home</a> / <span className="slr-accent">Request a Sample</span>
        </div>
        <span className="slr-eyebrow">Request a Sample</span>
        <h1>Prove the Grade Before You Commit to Volume</h1>
        <p>
          Request a physical sample of the product and grade you're evaluating —
          drawn from real production, tested, and shipped with its mill test
          certificate.
        </p>
        <div className="slr-dem-hero-chips">
          <div className="slr-dem-chip"><b>86+</b>Grades Available</div>
          <div className="slr-dem-chip"><b>NABL</b>Accredited Lab</div>
          <div className="slr-dem-chip"><b>21+</b>Years in Production</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- why request ---------- */

function WhySample() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-dem-head">
          <span className="slr-eyebrow">Why Request a Sample</span>
          <h2>Test before it's a bulk order</h2>
        </div>
        <div className="slr-dem-why-grid">
          {WHY_SAMPLE.map((w) => (
            <div key={w.title} className="slr-dem-why-card">
              <div className="slr-dem-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- process flow ---------- */

function ProcessFlow() {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-dem-head">
          <span className="slr-eyebrow">How It Works</span>
          <h2>From request to your dock</h2>
        </div>
        <p className="slr-dem-flow-note">
          This is a standard process structure provided as a starting point —
          edit PROCESS_STEPS in the code to match your actual fulfillment flow.
        </p>
        <div className="slr-dem-flow">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="slr-dem-flow-step">
              <div className="slr-dem-flow-node">{i + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- live summary panel ---------- */

function fieldCount(form) {
  const keys = ['name', 'company', 'email', 'phone', 'product', 'application', 'quantity', 'address'];
  return keys.filter((k) => form[k].trim().length > 0).length;
}

function RequestSummary({ form }) {
  const totalFields = 8;
  const filled = useMemo(() => fieldCount(form), [form]);
  const pct = Math.round((filled / totalFields) * 100);

  const rows = [
    { lbl: 'Requested by', val: form.name },
    { lbl: 'Company', val: form.company },
    { lbl: 'Product', val: form.product },
    { lbl: 'Grade (if known)', val: form.grade },
    { lbl: 'Application', val: form.application },
    { lbl: 'Quantity', val: form.quantity },
    { lbl: 'Ship to', val: form.address },
  ];

  return (
    <div className="slr-dem-summary">
      <h4><span className="slr-dem-summary-dot" />Your Request So Far</h4>
      <p className="slr-dem-summary-sub">Updates live as you fill in the form.</p>

      {rows.map((r) => (
        <div className="slr-dem-summary-row" key={r.lbl}>
          <span className="lbl">{r.lbl}</span>
          <span className={`val ${r.val ? '' : 'is-empty'}`}>{r.val || 'Not yet provided'}</span>
        </div>
      ))}

      <div className="slr-dem-summary-progress">
        <div className="slr-dem-summary-progress-track">
          <div className="slr-dem-summary-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="slr-dem-summary-progress-label">{filled} of {totalFields} required fields complete</div>
      </div>
    </div>
  );
}

/* ---------- combined form section ---------- */

function SampleRequestSection() {
  const [form, setForm] = useState(INITIAL_FORM);

  // Lift form state up just far enough to feed the live summary panel,
  // while the form itself still owns its own validation/submit logic.
  return (
    <section className="slr-section slr-dem-form-section">
      <div className="slr-container">
        <div className="slr-dem-head">
          <span className="slr-eyebrow">Sample Request Form</span>
          <h2>Tell us what you need to validate</h2>
          <p>Fill this in and our technical team will confirm availability and shipping.</p>
        </div>
        <div className="slr-dem-form-grid-outer">
          <SampleRequestFormWithLiftedState form={form} setForm={setForm} />
          <RequestSummary form={form} />
        </div>
      </div>
    </section>
  );
}

/*
  Thin wrapper: reuses all of SampleRequestForm's validation/submit
  logic, but takes its form state from the parent so RequestSummary
  can read it live. Keeping this separate from SampleRequestForm above
  avoids duplicating the validation logic in two places.
*/
function SampleRequestFormWithLiftedState({ form, setForm }) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }
  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({
      name: true, company: true, email: true, phone: true,
      product: true, application: true, quantity: true, address: true,
    });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    // TODO: replace with your real submission endpoint.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="slr-dem-form-wrap">
        <div className="slr-dem-success">
          <span className="slr-dem-success-icon">&#10003;</span>
          <span>
            Thanks, {form.name.split(' ')[0]} — your sample request for
            <strong> {form.product}</strong> has been received. Our technical
            team will follow up on next steps.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className="slr-dem-form-wrap" onSubmit={handleSubmit} noValidate>
      <div className="slr-dem-form-fields">
        <div className="slr-dem-field">
          <label htmlFor="s-name">Name<span className="req">*</span></label>
          <input
            id="s-name" type="text" placeholder="Your full name"
            value={form.name} onChange={(e) => handleChange('name', e.target.value)} onBlur={() => handleBlur('name')}
            className={touched.name && errors.name ? 'has-error' : ''}
          />
          {touched.name && errors.name && <span className="slr-dem-field-error">{errors.name}</span>}
        </div>

        <div className="slr-dem-field">
          <label htmlFor="s-company">Company<span className="req">*</span></label>
          <input
            id="s-company" type="text" placeholder="Company name"
            value={form.company} onChange={(e) => handleChange('company', e.target.value)} onBlur={() => handleBlur('company')}
            className={touched.company && errors.company ? 'has-error' : ''}
          />
          {touched.company && errors.company && <span className="slr-dem-field-error">{errors.company}</span>}
        </div>

        <div className="slr-dem-field">
          <label htmlFor="s-email">Email<span className="req">*</span></label>
          <input
            id="s-email" type="email" placeholder="you@company.com"
            value={form.email} onChange={(e) => handleChange('email', e.target.value)} onBlur={() => handleBlur('email')}
            className={touched.email && errors.email ? 'has-error' : ''}
          />
          {touched.email && errors.email && <span className="slr-dem-field-error">{errors.email}</span>}
        </div>

        <div className="slr-dem-field">
          <label htmlFor="s-phone">Phone<span className="req">*</span></label>
          <input
            id="s-phone" type="tel" placeholder="10-digit number"
            value={form.phone} onChange={(e) => handleChange('phone', e.target.value.replace(/[^\d]/g, '').slice(0, 10))} onBlur={() => handleBlur('phone')}
            className={touched.phone && errors.phone ? 'has-error' : ''}
          />
          {touched.phone && errors.phone && <span className="slr-dem-field-error">{errors.phone}</span>}
        </div>

        <div className="slr-dem-field">
          <label htmlFor="s-product">Product<span className="req">*</span></label>
          <select
            id="s-product" value={form.product}
            onChange={(e) => handleChange('product', e.target.value)} onBlur={() => handleBlur('product')}
            className={touched.product && errors.product ? 'has-error' : ''}
          >
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {touched.product && errors.product && <span className="slr-dem-field-error">{errors.product}</span>}
        </div>

        <div className="slr-dem-field">
          <label htmlFor="s-grade">Specific Grade<span className="opt">(if known)</span></label>
          <input
            id="s-grade" type="text" placeholder="e.g. 41Cr4, SAE1541"
            value={form.grade} onChange={(e) => handleChange('grade', e.target.value)}
          />
        </div>

        <div className="slr-dem-field">
          <label htmlFor="s-application">Application<span className="req">*</span></label>
          <select
            id="s-application" value={form.application}
            onChange={(e) => handleChange('application', e.target.value)} onBlur={() => handleBlur('application')}
            className={touched.application && errors.application ? 'has-error' : ''}
          >
            <option value="">Select an application</option>
            {APPLICATIONS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          {touched.application && errors.application && <span className="slr-dem-field-error">{errors.application}</span>}
        </div>

        <div className="slr-dem-field">
          <label htmlFor="s-quantity">Quantity Needed<span className="req">*</span></label>
          <input
            id="s-quantity" type="text" placeholder="e.g. 5 kg, 10 pieces"
            value={form.quantity} onChange={(e) => handleChange('quantity', e.target.value)} onBlur={() => handleBlur('quantity')}
            className={touched.quantity && errors.quantity ? 'has-error' : ''}
          />
          {touched.quantity && errors.quantity && <span className="slr-dem-field-error">{errors.quantity}</span>}
        </div>

        <div className="slr-dem-field full">
          <label htmlFor="s-address">Shipping Address<span className="req">*</span></label>
          <textarea
            id="s-address" placeholder="Where should we send the sample?"
            value={form.address} onChange={(e) => handleChange('address', e.target.value)} onBlur={() => handleBlur('address')}
            className={touched.address && errors.address ? 'has-error' : ''}
          />
          {touched.address && errors.address && <span className="slr-dem-field-error">{errors.address}</span>}
        </div>

        <div className="slr-dem-field full">
          <label htmlFor="s-message">Additional Requirements<span className="opt">(optional)</span></label>
          <textarea
            id="s-message" placeholder="Anything specific about tolerance, testing, or timeline..."
            value={form.message} onChange={(e) => handleChange('message', e.target.value)}
          />
        </div>
      </div>

      <div className="slr-dem-submit-row">
        <button type="submit" className="slr-dem-submit-btn" disabled={status === 'submitting'}>
          {status === 'submitting' && <span className="slr-dem-spinner" />}
          {status === 'submitting' ? 'Submitting...' : 'Submit Sample Request'}
        </button>
      </div>
    </form>
  );
}

export default function RequestSamplePage() {
  return (
    <div className="slr-about">
      <SampleHero />
      <WhySample />
      <ProcessFlow />
      <SampleRequestSection />
    </div>
  );
}