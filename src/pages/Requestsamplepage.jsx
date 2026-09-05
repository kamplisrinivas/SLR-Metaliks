import React, { useState } from "react";
import "./Aboutpage.css";
import "./Requestsamplepage.css";

/*
  SLR Metaliks — Request a Sample Page

  - Live request summary removed
  - Form remains fully functional client-side
  - Validation included
  - Success state included
  - Product and application dropdowns retained
  - No backend connected yet
*/

/* =========================================================
   PRODUCTS
========================================================= */

const PRODUCTS = [
  "Wire Rod (Round)",
  "Wire Rod (Hex)",
  "Round Bar",
  "Hexagon Bar",
  "RCS",
  "Flat",
  "Peeled & Ground Bars",
  "Cold Drawn & Ground Bars",
  "Pig Iron",
];

/* =========================================================
   APPLICATIONS
========================================================= */

const APPLICATIONS = [
  "Crankshaft & Camshaft",
  "Gears & Shafts",
  "Connecting Rods",
  "Axle Shaft / Drive Shaft / Axle Beam",
  "Bearings",
  "Suspension",
  "Stabilizer Bars",
  "High Tensile Fasteners",
  "Hydraulic Cylinder Piston Rods",
  "Other",
];

/* =========================================================
   WHY REQUEST A SAMPLE
========================================================= */

const WHY_SAMPLE = [
  {
    icon: "⚙",
    title: "Verify Spec Fit",
    desc: "Confirm the grade and dimensional tolerance meet your process before committing to volume.",
  },
  {
    icon: "✦",
    title: "Real Mill Output",
    desc: "Samples are drawn from actual production, not a separate lab-only batch.",
  },
  {
    icon: "◈",
    title: "Traceable Certification",
    desc: "Every sample ships with its mill test certificate for your own QA records.",
  },
  {
    icon: "⚭",
    title: "Direct Engineering Contact",
    desc: "A named contact from our technical team follows up on your specific application.",
  },
];

/* =========================================================
   PROCESS STEPS
========================================================= */

const PROCESS_STEPS = [
  {
    title: "Submit Request",
    desc: "Tell us the product, grade, and application you need to validate.",
  },
  {
    title: "Prepare & Test",
    desc: "Your sample is drawn from production and checked against spec.",
  },
  {
    title: "Dispatch",
    desc: "Shipped to your facility with its mill test certificate.",
  },
  {
    title: "Your Feedback",
    desc: "Our technical team follows up on fit and next steps if you move to order.",
  },
];

/* =========================================================
   INITIAL FORM
========================================================= */

const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  grade: "",
  application: "",
  quantity: "",
  address: "",
  message: "",
};

/* =========================================================
   VALIDATION
========================================================= */

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.company.trim()) {
    errors.company = "Company name is required.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
    errors.phone = "Enter a valid 10-digit number.";
  }

  if (!form.product) {
    errors.product = "Select a product.";
  }

  if (!form.application) {
    errors.application = "Select an application.";
  }

  if (!form.quantity.trim()) {
    errors.quantity = "Let us know how much you need.";
  }

  if (!form.address.trim()) {
    errors.address = "Shipping address is required.";
  }

  return errors;
}

/* =========================================================
   HERO
========================================================= */

function SampleHero() {
  return (
    <section className="slr-dem-hero">

      <div className="slr-container">

        <div className="slr-dem-breadcrumb">
          <a href="/">Home</a>
          <span> / </span>
          <span className="slr-accent">
            Request a Sample
          </span>
        </div>

        <span className="slr-eyebrow">
          Request a Sample
        </span>

        <h1 className="white-title">
          Prove the Grade Before You Commit to Volume
        </h1>

        <p>
          Request a physical sample of the product and grade
          you're evaluating — drawn from real production,
          tested, and shipped with its mill test certificate.
        </p>

        <div className="slr-dem-hero-chips">

          <div className="slr-dem-chip">
            <b>86+</b>
            Grades Available
          </div>

          <div className="slr-dem-chip">
            <b>NABL</b>
            Accredited Lab
          </div>

          <div className="slr-dem-chip">
            <b>21+</b>
            Years in Production
          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   WHY SAMPLE
========================================================= */

function WhySample() {
  return (
    <section className="slr-section">

      <div className="slr-container">

        <div className="slr-dem-head">

          <span className="slr-eyebrow">
            Why Request a Sample
          </span>

          <h2>
            Test before it's a bulk order
          </h2>

        </div>

        <div className="slr-dem-why-grid">

          {WHY_SAMPLE.map((item) => (

            <div
              key={item.title}
              className="slr-dem-why-card"
            >

              <div className="slr-dem-why-icon">
                {item.icon}
              </div>

              <h4>
                {item.title}
              </h4>

              <p>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   PROCESS FLOW
========================================================= */

function ProcessFlow() {
  return (
    <section className="slr-section slr-section-cream">

      <div className="slr-container">

        <div className="slr-dem-head">

          <span className="slr-eyebrow">
            How It Works
          </span>

          <h2>
            From request to your dock
          </h2>

        </div>

        <p className="slr-dem-flow-note">
          This is a standard process structure provided as
          a starting point. Edit PROCESS_STEPS in the code
          to match your actual fulfillment flow.
        </p>

        <div className="slr-dem-flow">

          {PROCESS_STEPS.map((step, index) => (

            <div
              key={step.title}
              className="slr-dem-flow-step"
            >

              <div className="slr-dem-flow-node">
                {index + 1}
              </div>

              <h4>
                {step.title}
              </h4>

              <p>
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   FORM SECTION
========================================================= */

function SampleRequestSection() {

  const [form, setForm] = useState(INITIAL_FORM);

  return (
    <section className="slr-section slr-dem-form-section">

      <div className="slr-container">

        <div className="slr-dem-head">

          <span className="slr-eyebrow">
            Sample Request Form
          </span>

          <h2>
            Tell us what you need to validate
          </h2>

          <p>
            Fill this in and our technical team will confirm
            availability and shipping.
          </p>

        </div>

        <div className="slr-dem-form-grid-outer">

          <SampleRequestFormWithLiftedState
            form={form}
            setForm={setForm}
          />

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   FORM
========================================================= */

function SampleRequestFormWithLiftedState({
  form,
  setForm,
}) {

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  /* -------------------------------------------------------
     CHANGE
  ------------------------------------------------------- */

  function handleChange(field, value) {

    setForm((current) => ({
      ...current,
      [field]: value,
    }));

  }

  /* -------------------------------------------------------
     BLUR
  ------------------------------------------------------- */

  function handleBlur(field) {

    setTouched((current) => ({
      ...current,
      [field]: true,
    }));

    setErrors(validate(form));

  }

  /* -------------------------------------------------------
     SUBMIT
  ------------------------------------------------------- */

  async function handleSubmit(event) {

    event.preventDefault();

    const validationErrors = validate(form);

    setErrors(validationErrors);

    setTouched({
      name: true,
      company: true,
      email: true,
      phone: true,
      product: true,
      application: true,
      quantity: true,
      address: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    /*
      TODO:
      Replace this with your real API/backend submission.
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    setStatus("success");

  }

  /* =======================================================
     SUCCESS STATE
  ======================================================= */

  if (status === "success") {

    return (
      <div className="slr-dem-form-wrap">

        <div className="slr-dem-success">

          <span className="slr-dem-success-icon">
            ✓
          </span>

          <span>

            Thanks,{" "}
            {form.name.split(" ")[0]}
            {" — "}your sample request for{" "}

            <strong>
              {form.product}
            </strong>

            {" "}has been received.

            Our technical team will follow up
            on next steps.

          </span>

        </div>

      </div>
    );
  }

  /* =======================================================
     FORM
  ======================================================= */

  return (
    <form
      className="slr-dem-form-wrap"
      onSubmit={handleSubmit}
      noValidate
    >

      <div className="slr-dem-form-fields">

        {/* NAME */}

        <div className="slr-dem-field">

          <label htmlFor="s-name">
            Name
            <span className="req">*</span>
          </label>

          <input
            id="s-name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(event) =>
              handleChange(
                "name",
                event.target.value
              )
            }
            onBlur={() => handleBlur("name")}
            className={
              touched.name && errors.name
                ? "has-error"
                : ""
            }
          />

          {touched.name && errors.name && (
            <span className="slr-dem-field-error">
              {errors.name}
            </span>
          )}

        </div>

        {/* COMPANY */}

        <div className="slr-dem-field">

          <label htmlFor="s-company">
            Company
            <span className="req">*</span>
          </label>

          <input
            id="s-company"
            type="text"
            placeholder="Company name"
            value={form.company}
            onChange={(event) =>
              handleChange(
                "company",
                event.target.value
              )
            }
            onBlur={() =>
              handleBlur("company")
            }
            className={
              touched.company && errors.company
                ? "has-error"
                : ""
            }
          />

          {touched.company && errors.company && (
            <span className="slr-dem-field-error">
              {errors.company}
            </span>
          )}

        </div>

        {/* EMAIL */}

        <div className="slr-dem-field">

          <label htmlFor="s-email">
            Email
            <span className="req">*</span>
          </label>

          <input
            id="s-email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(event) =>
              handleChange(
                "email",
                event.target.value
              )
            }
            onBlur={() =>
              handleBlur("email")
            }
            className={
              touched.email && errors.email
                ? "has-error"
                : ""
            }
          />

          {touched.email && errors.email && (
            <span className="slr-dem-field-error">
              {errors.email}
            </span>
          )}

        </div>

        {/* PHONE */}

        <div className="slr-dem-field">

          <label htmlFor="s-phone">
            Phone
            <span className="req">*</span>
          </label>

          <input
            id="s-phone"
            type="tel"
            placeholder="10-digit number"
            value={form.phone}
            onChange={(event) =>
              handleChange(
                "phone",
                event.target.value
                  .replace(/[^\d]/g, "")
                  .slice(0, 10)
              )
            }
            onBlur={() =>
              handleBlur("phone")
            }
            className={
              touched.phone && errors.phone
                ? "has-error"
                : ""
            }
          />

          {touched.phone && errors.phone && (
            <span className="slr-dem-field-error">
              {errors.phone}
            </span>
          )}

        </div>

        {/* PRODUCT */}

        <div className="slr-dem-field">

          <label htmlFor="s-product">
            Product
            <span className="req">*</span>
          </label>

          <select
            id="s-product"
            value={form.product}
            onChange={(event) =>
              handleChange(
                "product",
                event.target.value
              )
            }
            onBlur={() =>
              handleBlur("product")
            }
            className={
              touched.product && errors.product
                ? "has-error"
                : ""
            }
          >

            <option value="">
              Select a product
            </option>

            {PRODUCTS.map((product) => (

              <option
                key={product}
                value={product}
              >
                {product}
              </option>

            ))}

          </select>

          {touched.product && errors.product && (
            <span className="slr-dem-field-error">
              {errors.product}
            </span>
          )}

        </div>

        {/* GRADE */}

        <div className="slr-dem-field">

          <label htmlFor="s-grade">

            Specific Grade

            <span className="opt">
              (if known)
            </span>

          </label>

          <input
            id="s-grade"
            type="text"
            placeholder="e.g. 41Cr4, SAE1541"
            value={form.grade}
            onChange={(event) =>
              handleChange(
                "grade",
                event.target.value
              )
            }
          />

        </div>

        {/* APPLICATION */}

        <div className="slr-dem-field">

          <label htmlFor="s-application">

            Application

            <span className="req">*</span>

          </label>

          <select
            id="s-application"
            value={form.application}
            onChange={(event) =>
              handleChange(
                "application",
                event.target.value
              )
            }
            onBlur={() =>
              handleBlur("application")
            }
            className={
              touched.application &&
              errors.application
                ? "has-error"
                : ""
            }
          >

            <option value="">
              Select an application
            </option>

            {APPLICATIONS.map((application) => (

              <option
                key={application}
                value={application}
              >
                {application}
              </option>

            ))}

          </select>

          {touched.application &&
            errors.application && (
              <span className="slr-dem-field-error">
                {errors.application}
              </span>
            )}

        </div>

        {/* QUANTITY */}

        <div className="slr-dem-field">

          <label htmlFor="s-quantity">

            Quantity Needed

            <span className="req">*</span>

          </label>

          <input
            id="s-quantity"
            type="text"
            placeholder="e.g. 5 kg, 10 pieces"
            value={form.quantity}
            onChange={(event) =>
              handleChange(
                "quantity",
                event.target.value
              )
            }
            onBlur={() =>
              handleBlur("quantity")
            }
            className={
              touched.quantity &&
              errors.quantity
                ? "has-error"
                : ""
            }
          />

          {touched.quantity &&
            errors.quantity && (
              <span className="slr-dem-field-error">
                {errors.quantity}
              </span>
            )}

        </div>

        {/* SHIPPING ADDRESS */}

        <div className="slr-dem-field full">

          <label htmlFor="s-address">

            Shipping Address

            <span className="req">*</span>

          </label>

          <textarea
            id="s-address"
            placeholder="Where should we send the sample?"
            value={form.address}
            onChange={(event) =>
              handleChange(
                "address",
                event.target.value
              )
            }
            onBlur={() =>
              handleBlur("address")
            }
            className={
              touched.address &&
              errors.address
                ? "has-error"
                : ""
            }
          />

          {touched.address &&
            errors.address && (
              <span className="slr-dem-field-error">
                {errors.address}
              </span>
            )}

        </div>

        {/* ADDITIONAL REQUIREMENTS */}

        <div className="slr-dem-field full">

          <label htmlFor="s-message">

            Additional Requirements

            <span className="opt">
              (optional)
            </span>

          </label>

          <textarea
            id="s-message"
            placeholder="Anything specific about tolerance, testing, or timeline..."
            value={form.message}
            onChange={(event) =>
              handleChange(
                "message",
                event.target.value
              )
            }
          />

        </div>

      </div>

      {/* SUBMIT */}

      <div className="slr-dem-submit-row">

        <button
          type="submit"
          className="slr-dem-submit-btn"
          disabled={status === "submitting"}
        >

          {status === "submitting" && (
            <span className="slr-dem-spinner" />
          )}

          {status === "submitting"
            ? "Submitting..."
            : "Submit Sample Request"}

        </button>

      </div>

    </form>
  );
}

/* =========================================================
   PAGE
========================================================= */

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
