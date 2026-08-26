import "./ProductsSection.css";

import pigIron from "../images/pig_iron.jpg";
import billets from "../images/billets.jpg";
import pbar from "../images/pbar.jpg";
import hbar from "../images/Hbar.jpg";
import rbar from "../images/rbar.jpg";
import fbar from "../images/fbar.webp";

const products = [
  {
    name: "Round Bar",
    image: rbar,
  },
  {
    name: "Peeled Bar",
    image: pbar,
  },
  {
    name: "Hexagon Bar",
    image: hbar,
  },
  {
    name: "Flat Bar",
    image: fbar,
  },
  {
    name: "Pig Iron",
    image: pigIron,
  },
  {
    name: "Billets",
    image: billets,
  },
  
];

export default function ProductsSection() {
  return (
    <section className="products">
      <div className="products-container">

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              className="product-card"
              key={index}
              style={{
                backgroundImage: `url("${product.image}")`,
              }}
            >
              <div className="overlay"></div>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        <div className="products-head">
          <span>OUR PRODUCTS</span>

          <h2>
            Engineered <br />
            Steel Solutions
          </h2>

          <p>
            Discover our premium range of steel products manufactured
            with world-class technology and uncompromising quality.
          </p>
        </div>

      </div>
    </section>
  );
}
