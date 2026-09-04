import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`products ${
        visible ? "is-visible" : ""
      }`}
    >

      <div className="products-container">

        {/* =================================
            PRODUCT GRID
        ================================= */}

        <div className="products-grid">

          {products.map((product, index) => (
            <div
              className="product-card"
              key={product.name}
              style={{
                "--card-delay": `${index * 100}ms`,
              }}
            >

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="product-overlay" />

              {/* Shine */}
              <div className="product-shine" />

              {/* Product Number */}
              <span className="product-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="product-content">

                <span className="product-category">
                  SLR METALIKS
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="product-bottom">

                  <span className="product-line" />

                  <span className="product-arrow">
                    ↗
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =================================
            HEADING
        ================================= */}

        <div className="products-head">

          <div className="products-tag">

            <span />

            <span>OUR PRODUCTS</span>

          </div>

          <h2>
            Engineered
            <br />
            <em>Steel Solutions</em>
          </h2>

          <p>
            Discover our premium range of steel products
            manufactured with world-class technology and
            uncompromising quality.
          </p>

          <div className="products-divider">
            <span />
          </div>

          <div className="products-meta">

            <strong>06</strong>

            <span>
              PREMIUM<br />
              PRODUCT CATEGORIES
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}