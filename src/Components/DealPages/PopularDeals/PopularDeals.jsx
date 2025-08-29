import React, { useState } from "react";
import "./PopularDeals.css";

const vinylDeals = [
  {
    brand: "SONY MUSIC CG",
    title: "Diamond Life (Reissue) | Sade",
    price: 125,
    oldPrice: 149,
    img: "B1.jpg"
  },
  {
    brand: "WARNER",
    title: "Swimming (Blue & Pink Colored Vinyl) (Limited Edition) (2 Discs) | Mac Miller",
    price: 799,
    oldPrice: 860,
    img: "B2.jpg"
  },
  {
    brand: "BIG HIT ENTERTAINMENT",
    title: "Indigo (Clear With Splatter Colored Vinyl) (1 Disc) | RM (BTS)",
    price: 175,
    oldPrice: 375,
    img: "B3.jpg"
  },
  {
    brand: "INDEPENDENT",
    title: "Nausicaa Of The Valley Of Wind Symphony Version By Joe Hisaishi | Original Soundtrack",
    price: 399,
    oldPrice: 450,
    img: "B4.jpg"
  },
  {
    brand: "PARKWOOD ENTERTAINMENT/COLUMBI",
    title: "Cowboy Carter (Cowboy Hat Back Cover) (Blue Colored Vinyl) (Limited Edition) (2 Discs) | Beyoncé",
    price: 165,
    oldPrice: 210,
    img: "B5.jpg  "
  }
];

export default function PopularDeals() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 5;
  const totalSlides = Math.ceil(vinylDeals.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="popular-deals-container">
      <h2 className="popular-deals-title">Popular Vinyl Deals</h2>
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
            {vinylDeals.map((deal, idx) => (
              <div className="popular-deal-card deal-card" key={idx}>
                <div className="popular-deal-img">
                  <img src={deal.img} alt={deal.title} />
                </div>
                <div className="popular-deal-brand">{deal.brand}</div>
                <div className="popular-deal-title">{deal.title}</div>
                <hr />
                <div className="popular-deal-prices">
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
      <div className="popular-deals-btn-container btn-container">
        <button className="popular-deals-btn">VIEW ALL VINYL DEALS</button>
      </div>
      <hr className="popular-deals-divider" />
    </div>
  );
}