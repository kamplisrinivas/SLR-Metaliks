import "./TestimonialsCTA.css";
import { Quote, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Infrastructure Partner",
    text: "SLR Metaliks has consistently delivered superior steel products with exceptional quality, reliability and technical support.",
  },
  {
    name: "Amit Sharma",
    company: "Construction Group",
    text: "Their manufacturing capability and commitment to delivery excellence make them a trusted long-term partner.",
  },
  {
    name: "Vikram Rao",
    company: "Engineering Solutions",
    text: "A trusted manufacturing partner with excellent technical expertise and consistent product quality.",
  },
  {
    name: "Priya Menon",
    company: "Industrial Solutions",
    text: "SLR Metaliks provides reliable solutions with strong engineering capabilities and customer support.",
  },
];


export default function TestimonialsCTA() {

  const [active, setActive] = useState(0);

  const item = testimonials[active];


  return (

    <section className="trust-section">


      {/* TESTIMONIAL SIDE */}

      <div className="testimonial-area">


        <span className="section-label">
          CLIENT EXPERIENCE
        </span>


        <h2>
          Trusted By
          <br/>
          Industry Leaders
        </h2>


        <p className="intro">
          Our commitment to quality and innovation has helped
          us create long-term partnerships across industries.
        </p>



        <div className="testimonial-card">


          <Quote className="quote-icon" size={38}/>


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

          {testimonials.map((_,index)=>(

            <button
              key={index}
              className={
                active === index ? "active" : ""
              }
              onClick={()=>setActive(index)}
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
              <ArrowRight size={17}/>
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