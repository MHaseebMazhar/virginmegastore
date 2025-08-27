import React, { useState } from "react";
import "./BestTechDeals.css";

const techDeals = [
  {
    brand: "APPLE",
    title: "Apple AirPods Pro (2nd generation) True Wireless Earbuds with MagSafe Case...",
    price: 859,
    oldPrice: 949,
    img: "1.jpg"
  },
  {
    brand: "ANKER",
    title: "Anker Anker Maggo Ultra Slim Power Bank 10000mAh/ 30 W With Cable/ 15 W Mag Safe -...",
    price: 269,
    oldPrice: 299,
    img: "2.jpg"
  },
  {
    brand: "APPLE",
    title: "Apple 13-Inch Macbook Air M4 Chip with 10-Core CPU & 8-Core GPU/ 16GB/ 256GB SSD -...",
    price: 3499,
    oldPrice: 3999,
    img: "3.jpg"
  },
  {
    brand: "INSTA360",
    title: "Insta360 X5 360 Action Camera - Black",
    price: 2019,
    oldPrice: 2169,
    img: "4.jpg"
  },
  {
    brand: "BOSE",
    title: "Bose QuietComfort Ultra Headphones - Black",
    price: 1199,
    oldPrice: 1699,
    img: "5.jpg"
  },
   {
    brand: "BOSE",
    title: "Bose QuietComfort Ultra Headphones - Black",
    price: 1199,
    oldPrice: 1699,
    img: "5.jpg"
  },
];

export default function BestTechDeals() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 5;
  const totalSlides = Math.ceil(techDeals.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="best-tech-deals-container">
      <h2 className="best-tech-deals-title">Best Selling Tech Deals</h2>
      <div className="slider">
        <button className="arrow left" onClick={prevSlide} disabled={index === 0}>
          &#10094;
        </button>
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {techDeals.map((deal, idx) => (
              <div className="best-tech-deal-card deal-card" key={idx}>
                <div className="best-tech-deal-img">
                  <img src={deal.img} alt={deal.title} />
                </div>
                <div className="best-tech-deal-brand">{deal.brand}</div>
                <div className="best-tech-deal-title">{deal.title}</div>
                <hr />
                <div className="best-tech-deal-prices">
                  <span className="aed-label">AED</span>
                  <span className="price">{deal.price}</span>
                  <span className="old-price">AED {deal.oldPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="arrow right"
          onClick={nextSlide}
          disabled={index === totalSlides - 1}
        >
          &#10095;
        </button>
      </div>
      <div className="best-tech-deals-btn-container btn-container">
        <button className="best-tech-deals-btn">VIEW ALL TECH DEALS</button>
      </div>
      <hr className="best-tech-deals-divider" />
    </div>
  );
}