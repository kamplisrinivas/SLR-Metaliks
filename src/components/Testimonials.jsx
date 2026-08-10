import "./Testimonials.css";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Infrastructure Partner",
    text: "SLR Metaliks consistently delivers high-quality steel products with excellent reliability, technical support and timely execution.",
  },
  {
    name: "Amit Sharma",
    company: "Construction Group",
    text: "Their product quality, manufacturing capability and delivery commitment have helped us successfully complete multiple projects.",
  },
  {
    name: "Vikram Rao",
    company: "Engineering Solutions",
    text: "A trusted manufacturing partner with excellent technical expertise, consistent quality and professional service.",
  },
];

export default function Testimonials() {

  return (
    <section className="testimonials">


      <div className="testimonial-header">

        <div>
          <span>
            CLIENT TESTIMONIALS
          </span>

          <h2>
            Trusted By Industry Leaders
          </h2>
        </div>


        <p>
          Our commitment to quality, innovation and customer satisfaction
          has helped us build long-term partnerships across industries.
        </p>

      </div>



      <div className="testimonial-grid">

        {testimonials.map((item,index)=>(

          <div className="testimonial-card" key={index}>


            <Quote className="quote-icon" size={45}/>


            <p>
              "{item.text}"
            </p>


            <div className="rating">

              {[1,2,3,4,5].map((star)=>(
                <Star 
                  key={star}
                  size={16}
                  fill="#b88652"
                  color="#b88652"
                />
              ))}

            </div>


            <div className="client">

              <div className="client-avatar">
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

        ))}


      </div>


    </section>
  );
}