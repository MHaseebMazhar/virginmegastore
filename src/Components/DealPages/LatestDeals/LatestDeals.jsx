import React, { useState } from "react";
import "./LatestDeals.css";

const tabletDeals = [
  {
    brand: "LENOVO",
    title: "Lenovo Idea Tab Tablet 8GB RAM/256GB/11\" 2.5K (2560x1600) IPS 90Hz/Andriod...",
    price: 799,
    oldPrice: 899,
    img: "A1.jpg"
  },
  {
    brand: "LENOVO",
    title: "Lenovo Idea Tab Tablet 8GB RAM/256GB/11\" 2.5K (2560x1600) IPS 90Hz/Andriod...",
    price: 949,
    oldPrice: 1099,
    img: "A2.jpg"
  },
  {
    brand: "LENOVO",
    title: "Lenovo Legion TAB Qualcomm Snapdragon 8 gen 3 12GB RAM/256GB/Qualcomm Adreno...",
    price: 1999,
    oldPrice: 2099,
    img: "A3.jpg"
  },
  {
    brand: "POWER SUPPORT",
    title: "Power Support Grey Blue iPad Air 10.9 \"/ 11\" Folio With Pencil Holder And Quick Camera Open",
    price: 229,
    oldPrice: 249,
    img: "A4.jpg"
  },
  {
    brand: "POWER SUPPORT",
    title: "Power Support Ice Blue iPad 2025 11Th Gen / 10Th Gen Folio With Pencil Holder And Quick...",
    price: 229,
    oldPrice: 249,
    img: "A5.jpg"
  }
];

export default function LatestDeals() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 5;
  const totalSlides = Math.ceil(tabletDeals.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="latest-deals-container">
      <h2 className="latest-deals-title">Latest Deals on Tablets & Accessories</h2>
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
            {tabletDeals.map((deal, idx) => (
              <div className="latest-deal-card deal-card" key={idx}>
                <div className="latest-deal-img">
                  <img src={deal.img} alt={deal.title} />
                </div>
                <div className="latest-deal-brand">{deal.brand}</div>
                <div className="latest-deal-title">{deal.title}</div>
                <hr />
                <div className="latest-deal-prices">
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
      <div className="latest-deals-btn-container btn-container">
        <button className="latest-deals-btn">VIEW ALL TABLETS & ACCESSORIES DEALS</button>
      </div>
      <hr className="latest-deals-divider" />
    </div>
  );
}