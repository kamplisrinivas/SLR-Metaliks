import "./TestimonialsCTA.css";
import { Quote, ArrowRight } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Mr. Srinivasan, Mr. Srikanth & Mr. Shivaram",
    company: "Stumpp Schuele & Somappa Spring",
    text: "Plant is well established for quality and system online measurement of all critical process parameters is good and well established."
  },
  {
    name: "Mr. Mario A Kaplan",
    company: "Aceros21 / A21, Buenos Aires, Argentina",
    text: "It was an excellent visit. People are friendly and open to answering every question and the equipment is very good, same as the quality."
  },
  {
    name: "Mr. Ashokkumar S.",
    company: "Bonfiglioli Transmission Private Limited, Chennai",
    text: "Improved in 5S, really good and safe for the employees. Team members are very cooperative and open-minded in a continual improvement perspective."
  },
  {
    name: "Mr. Narendra Kakwani",
    company: "Jamna Auto Industries Ltd.",
    text: "It is a world-class company with a joyful team with good experience. The management of the company is also highly motivated and down-to-earth."
  },
  {
    name: "Mr. K. Muruganandan",
    company: "Craftsman Automation Ltd., Coimbatore",
    text: "Excellent facility and well-trained technical team with good approach and strong support during audits."
  },
  {
    name: "Mr. P. Subramanian",
    company: "Wheels India Limited",
    text: "The team is really good and has a customer-centric approach in critical situations with a good strategic partnership."
  },
  {
    name: "Mr. Manjunath G.",
    company: "Timken India Limited, Bangalore",
    text: "Really good system and process in place. Response time is good. Good team overall, both technically and behaviourally."
  },
  {
    name: "Mr. Sanket Tambe",
    company: "Maruti Suzuki India Ltd.",
    text: "Excellent team and a lot of learning for me. The quality system is very good. All the best."
  },
  {
    name: "Mr. Sandeep Garg",
    company: "GKN Automotive",
    text: "Good infrastructure and a great team who can meet any requirement on a consistent basis. Good to see the EOF — Energy Optimization Furnace."
  },
  {
    name: "Amit Behl",
    company: "Hero MotoCorp",
    text: "SLR team is highly committed and capable to understand and deliver as per customer requirement. SLR is focusing a lot on environmental and safety aspects."
  },
  {
    name: "Mr. M. Ashok Kumar",
    company: "TVS Motor Company, Hosur",
    text: "Brilliant team, friendly approach, customer-centric approach, wonderful Green Steel industry, capable team for a growing industry, with 100% satisfaction on standards and records maintenance."
  },
  {
    name: "Mr. Rajesh Goyal",
    company: "GKN Automotive",
    text: "Highly professional organization with highly clean operations from a steel melting perspective. The team is highly courteous."
  }
];

export default function TestimonialsCTA() {
  const [active, setActive] = useState(0);

  // FIX: TESTIMONIALS instead of testimonials
  const item = TESTIMONIALS[active];

  return (
    <section className="trust-section">

      {/* TESTIMONIAL SIDE */}

      <div className="testimonial-area">

        <span className="section-label">
          CLIENT EXPERIENCE
        </span>

        <h2>
          Trusted By
          <br />
          Industry Leaders
        </h2>

        <p className="intro">
          Our commitment to quality and innovation has helped
          us create long-term partnerships across industries.
        </p>

        <div className="testimonial-card">

          <Quote
            className="quote-icon"
            size={38}
          />

          <p>
            "{item.text}"
          </p>

          <div className="client">

            <div className="avatar">
              {item.name.charAt(0)}
            </div>

            <div>
              <h4>
                {item.name}
              </h4>

              <span>
                {item.company}
              </span>
            </div>

          </div>

        </div>

        {/* DOT NAVIGATION */}

        <div className="dots">

          {TESTIMONIALS.map((_, index) => (

            <button
              key={index}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />

          ))}

        </div>

      </div>

      {/* CTA SIDE */}

      <div className="cta-premium">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <span className="section-label">
            PARTNER WITH US
          </span>

          <h2>
            Building Stronger
            Infrastructure Together
          </h2>

          <p>
            Premium steel solutions engineered with
            advanced technology and uncompromising quality.
          </p>

          <div className="cta-buttons">

            <button>
              Request Quote
              <ArrowRight size={17} />
            </button>

            <button className="download">
              Download Brochure
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
