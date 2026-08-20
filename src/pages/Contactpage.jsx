import React, { useState } from 'react';
import './Aboutpage.css';
import './ContactPage.css';

/*
  SLR Metaliks — Contact Us Page
  Plain React + CSS, matching AboutPage.css tokens.

  All addresses, emails, phone numbers, and names below are transcribed
  directly from what you provided — nothing invented or approximated.

  On maps: no embedded map with pins is used. I don't have verified
  coordinates for these specific addresses, and plotting invented
  lat/long values would present fabricated precision as real data.
  Instead, each office has a "Get Directions" link that opens a Google
  Maps text search on the actual address — accurate without requiring
  coordinates.

  "Vendor Onboarding" and "Our Works" from your original paste look
  like footer navigation labels that got swept up with the page
  content, not real sections — they aren't rendered here. Let me know
  if that's wrong and you actually want them as sections on this page.

  The Product Enquiry form's Product dropdown reuses your real product
  families from the Products page content for consistency across the
  site, with an "Other" option that reveals a free-text field.

  NOTE: Header and Footer aren't rendered here, same assumption as the
  other pages — supplied by a shared Layout elsewhere in the app.
*/

const ZONES = [
  {
    id: 'south',
    label: 'South Zone',
    address: 'No. 2732, Darpana Square, 2nd Floor, 14th Main, Sahakarnagar, Bangalore-560 092.',
    email: 'prasannakumar@slrm.in',
    phone: '+91-9449-596155',
  },
  {
    id: 'west',
    label: 'West Zone',
    address: 'No. 408 & 409, Lunkad Sky Station, Near HDFC Bank, Dutta Mandir Chowk, Viman Nagar, Pune \u2013 411014',
    email: 'prkulkarni@slrm.in',
    phone: '+91-9011-066793',
  },
  {
    id: 'north',
    label: 'North Zone',
    address: 'No. 708, 7th Floor (Gate No: 4), Ambience Mall Complex, NH \u2013 8, Gurugram \u2013 122002, Haryana',
    email: 'panchanan.mishra@slrm.in',
    phone: '+91-9555-355087',
  },
  {
    id: 'export',
    label: 'Export',
    address: 'No. 408 & 409, Lunkad Sky Station, Near HDFC Bank, Dutta Mandir Chowk, Viman Nagar, Pune \u2013 411014',
    email: 'ramesh@slrm.in',
    phone: '+91-9449-867279',
  },
];

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
  'Other',
];

function mapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

/* ---------- hero ---------- */

function ContactHero() {
  return (
    <section className="slr-con-hero">
      <div className="slr-container">
        <div className="slr-con-breadcrumb">
          <a href="/">Home</a> / <span className="slr-accent">Contact Us</span>
        </div>
        <span className="slr-eyebrow">Contact Us</span>
        <h1 className="slr-src-hero-title">Four Regions. One Point of Accountability.</h1>
        <p>
          Reach the team closest to you — regional sales offices across South,
          West, North, and Export, alongside our manufacturing plant and
          registered office.
        </p>
        <div className="slr-con-hero-chips">
          <div className="slr-con-chip"><b>4</b>Regional Offices</div>
          <div className="slr-con-chip"><b>1</b>Manufacturing Plant</div>
          <div className="slr-con-chip"><b>PAN-India</b>+ Export</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- zone directory ---------- */

function ZoneDirectory() {
  const [activeZone, setActiveZone] = useState(ZONES[0].id);
  const zone = ZONES.find((z) => z.id === activeZone);

  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-con-head">
          <span className="slr-eyebrow">Regional Offices</span>
          <h2>Find your regional contact</h2>
          <p>Select a zone to see the office address and direct contact for that region.</p>
        </div>

        <div className="slr-con-zone-tabs">
          {ZONES.map((z) => (
            <button
              key={z.id}
              className={`slr-con-zone-tab ${activeZone === z.id ? 'is-active' : ''}`}
              onClick={() => setActiveZone(z.id)}
            >
              {z.label}
            </button>
          ))}
        </div>

        <div className="slr-con-zone-card" key={zone.id}>
          <div className="slr-con-zone-icon">&#9679;</div>
          <div className="slr-con-zone-body">
            <h3>{zone.label}</h3>
            <div className="slr-con-zone-company">SLR Metaliks Limited</div>
            <div className="slr-con-zone-address">{zone.address}</div>
            <div className="slr-con-zone-contacts">
              <div className="slr-con-zone-contact">
                <span className="slr-con-zone-contact-icon">@</span>
                <a href={`mailto:${zone.email}`}>{zone.email}</a>
              </div>
              <div className="slr-con-zone-contact">
                <span className="slr-con-zone-contact-icon">&#9742;</span>
                <a href={`tel:${zone.phone.replace(/[^\d+]/g, '')}`}>{zone.phone}</a>
              </div>
            </div>
            <a
              className="slr-con-directions-link"
              href={mapsSearchUrl(`SLR Metaliks Limited, ${zone.address}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HQ cards (plant + registered office) ---------- */

function HQCards() {
  return (
    <section className="slr-section slr-section-cream">
      <div className="slr-container">
        <div className="slr-con-head">
          <span className="slr-eyebrow">Our Locations</span>
          <h2>Manufacturing plant &amp; registered office</h2>
        </div>
        <div className="slr-con-hq-grid">
          <div className="slr-con-hq-card">
            <span className="slr-con-hq-tag">Manufacturing Plant</span>
            <h3>SLR Metaliks Limited</h3>
            <div className="slr-con-hq-address">
              Sy. No. 632, 636, Narayan Devara Kere, Lokappana Hola (Near Mariyammana Halli),
              Hagari Bommana Halli Taluk, Vijayanagara District &ndash; 583 222, Karnataka &ndash; India.
            </div>
            <div className="slr-con-hq-emails">
              <a href="mailto:info@slrm.co.in">info@slrm.co.in</a>
              <a href="mailto:hrd@slrm.co.in">hrd@slrm.co.in</a>
              <a href="mailto:mktg@slrm.co.in">mktg@slrm.co.in</a>
            </div>
            <div className="slr-con-hq-phone">
              <a href="tel:+918394294061">+91-8394-294061</a>
            </div>
            <div className="slr-con-hq-cin">CIN: U27106DL2005PLC142596</div>
          </div>

          <div className="slr-con-hq-card">
            <span className="slr-con-hq-tag">Registered Office</span>
            <h3>SLR Metaliks Limited</h3>
            <div className="slr-con-hq-address">
              Shop No. G-19, Mangalam Paradise Mall, 502, Sector 3, Rohini, New Delhi-110085.
            </div>
            <div className="slr-con-hq-emails">
              <a href="mailto:info@slrm.co.in">info@slrm.co.in</a>
            </div>
            <div className="slr-con-hq-cin">CIN: U27106DL2005PLC142596</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- grievance & vigil mechanism ---------- */

function ComplianceSection() {
  return (
    <section className="slr-section">
      <div className="slr-container">
        <div className="slr-con-compliance">
          <div className="slr-con-compliance-head">
            <span className="slr-con-compliance-badge">!</span>
            <div>
              <h3>Grievance &amp; Vigil Mechanism</h3>
              <p>For compliance matters, whistleblower reports, and formal grievances</p>
            </div>
          </div>
          <div className="slr-con-compliance-grid">
            <div className="slr-con-compliance-item">
              <h4>Grievance &amp; Query Contact</h4>
              <div className="slr-con-compliance-name">Daman Preet</div>
              <div className="slr-con-compliance-role">Company Secretary &amp; Compliance Officer</div>
              <a href="mailto:daman@slrm.in">daman@slrm.in</a>
            </div>
            <div className="slr-con-compliance-item">
              <h4>Vigil Mechanism</h4>
              <p className="slr-con-compliance-note">
                For reporting concerns under SLRM's Whistleblower Policy, confidentially and directly.
              </p>
              <a href="mailto:vijay_nehra@slrm.in">vijay_nehra@slrm.in</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- product enquiry form ---------- */

const INITIAL_FORM = { name: '', email: '', mobile: '', city: '', product: '', otherProduct: '', company: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
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
  if (!form.city.trim()) errors.city = 'City is required.';
  if (!form.product) errors.product = 'Select a product.';
  if (form.product === 'Other' && !form.otherProduct.trim()) errors.otherProduct = 'Tell us which product.';
  if (!form.company.trim()) errors.company = 'Company name is required.';
  return errors;
}

function ProductEnquiryForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

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
    setTouched({ name: true, email: true, mobile: true, city: true, product: true, otherProduct: true, company: true });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    // TODO: replace with your real submission endpoint, e.g.:
    // await fetch('/api/product-enquiry', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus('success');
  }

  const productLabel = form.product === 'Other' ? form.otherProduct : form.product;

  if (status === 'success') {
    return (
      <section className="slr-section slr-con-form-section">
        <div className="slr-container">
          <div className="slr-con-form-wrap">
            <div className="slr-con-success">
              <span className="slr-con-success-icon">&#10003;</span>
              <span>
                Thanks, {form.name.split(' ')[0]} — your enquiry about
                <strong> {productLabel || 'this product'}</strong> has been received. Our team will follow up shortly.
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="slr-section slr-con-form-section">
      <div className="slr-container">
        <div className="slr-con-head">
          <span className="slr-eyebrow">Product Enquiry</span>
          <h2>How can we help?</h2>
          <p>Feel free to ask a question or simply leave a comment.</p>
        </div>

        <form className="slr-con-form-wrap" onSubmit={handleSubmit} noValidate>
          <div className="slr-con-form-grid">
            <div className="slr-con-field">
              <label htmlFor="c-name">Name<span className="req">*</span></label>
              <input
                id="c-name" type="text" placeholder="Name"
                value={form.name} onChange={(e) => handleChange('name', e.target.value)} onBlur={() => handleBlur('name')}
                className={touched.name && errors.name ? 'has-error' : ''}
                aria-invalid={!!(touched.name && errors.name)} aria-describedby="c-name-error"
              />
              {touched.name && errors.name && <span className="slr-con-field-error" id="c-name-error">{errors.name}</span>}
            </div>

            <div className="slr-con-field">
              <label htmlFor="c-email">Email<span className="req">*</span></label>
              <input
                id="c-email" type="email" placeholder="Email"
                value={form.email} onChange={(e) => handleChange('email', e.target.value)} onBlur={() => handleBlur('email')}
                className={touched.email && errors.email ? 'has-error' : ''}
                aria-invalid={!!(touched.email && errors.email)} aria-describedby="c-email-error"
              />
              {touched.email && errors.email && <span className="slr-con-field-error" id="c-email-error">{errors.email}</span>}
            </div>

            <div className="slr-con-field">
              <label htmlFor="c-mobile">Mobile<span className="req">*</span></label>
              <input
                id="c-mobile" type="tel" placeholder="Number"
                value={form.mobile} onChange={(e) => handleChange('mobile', e.target.value.replace(/[^\d]/g, '').slice(0, 10))} onBlur={() => handleBlur('mobile')}
                className={touched.mobile && errors.mobile ? 'has-error' : ''}
                aria-invalid={!!(touched.mobile && errors.mobile)} aria-describedby="c-mobile-error"
              />
              {touched.mobile && errors.mobile && <span className="slr-con-field-error" id="c-mobile-error">{errors.mobile}</span>}
            </div>

            <div className="slr-con-field">
              <label htmlFor="c-city">City<span className="req">*</span></label>
              <input
                id="c-city" type="text" placeholder="City"
                value={form.city} onChange={(e) => handleChange('city', e.target.value)} onBlur={() => handleBlur('city')}
                className={touched.city && errors.city ? 'has-error' : ''}
                aria-invalid={!!(touched.city && errors.city)} aria-describedby="c-city-error"
              />
              {touched.city && errors.city && <span className="slr-con-field-error" id="c-city-error">{errors.city}</span>}
            </div>

            <div className="slr-con-field">
              <label htmlFor="c-product">Product<span className="req">*</span></label>
              <select
                id="c-product"
                value={form.product}
                onChange={(e) => handleChange('product', e.target.value)}
                onBlur={() => handleBlur('product')}
                className={touched.product && errors.product ? 'has-error' : ''}
                aria-invalid={!!(touched.product && errors.product)}
                aria-describedby="c-product-error"
              >
                <option value="">Select a product</option>
                {PRODUCTS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {touched.product && errors.product && <span className="slr-con-field-error" id="c-product-error">{errors.product}</span>}
            </div>

            {form.product === 'Other' && (
              <div className="slr-con-field">
                <label htmlFor="c-other-product">Please specify<span className="req">*</span></label>
                <input
                  id="c-other-product" type="text" placeholder="Which product?"
                  value={form.otherProduct} onChange={(e) => handleChange('otherProduct', e.target.value)} onBlur={() => handleBlur('otherProduct')}
                  className={touched.otherProduct && errors.otherProduct ? 'has-error' : ''}
                  aria-invalid={!!(touched.otherProduct && errors.otherProduct)}
                  aria-describedby="c-other-product-error"
                />
                {touched.otherProduct && errors.otherProduct && <span className="slr-con-field-error" id="c-other-product-error">{errors.otherProduct}</span>}
              </div>
            )}

            <div className="slr-con-field">
              <label htmlFor="c-company">Company Name<span className="req">*</span></label>
              <input
                id="c-company" type="text" placeholder="Company Name"
                value={form.company} onChange={(e) => handleChange('company', e.target.value)} onBlur={() => handleBlur('company')}
                className={touched.company && errors.company ? 'has-error' : ''}
                aria-invalid={!!(touched.company && errors.company)} aria-describedby="c-company-error"
              />
              {touched.company && errors.company && <span className="slr-con-field-error" id="c-company-error">{errors.company}</span>}
            </div>

            <div className="slr-con-field full">
              <label htmlFor="c-message">Message</label>
              <textarea
                id="c-message" placeholder="Type Message..."
                value={form.message} onChange={(e) => handleChange('message', e.target.value)}
              />
            </div>
          </div>

          <div className="slr-con-submit-row">
            <button type="submit" className="slr-con-submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' && <span className="slr-con-spinner" />}
              {status === 'submitting' ? 'Submitting...' : 'Submit Form'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="slr-about">
      <div className="slr-contact-container">
        <ContactHero />
        <ZoneDirectory />
        <HQCards />
        <ComplianceSection />
        <ProductEnquiryForm />
      </div>
    </div>
  );
}