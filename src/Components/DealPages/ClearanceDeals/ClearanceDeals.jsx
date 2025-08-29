import React, { useState } from "react";
import "./ClearanceDeals.css";

const clearanceItems = [
  {
    img: "B1.jpeg",
    publisher: "LEGAMI",
    title: "Legami Bag Clips - Avocado",
    price: 9,
    oldPrice: 18,
  },
  {
    img: "B2.jpeg",
    publisher: "HASBRO",
    title: "Hasbro Legends Series Marvel Avengers Disney Plus Content Character 4 6-Inch Action Figure",
    price: 239,
    oldPrice: 49,
  },
  {
    img: "B33.jpg",
    publisher: "MR. WONDERFUL",
    title: "Mr. Wonderful Set Erasers - Unicorn",
    price: 19,
    oldPrice: 49,
  },
  {
    img: "B44.jpg",
    publisher: "STUDIO 96",
    title: "She Kicks | Nav Gill",
    price: 109,
    oldPrice: 435,
  },
  {
    img: "B55.jpg",
    publisher: "OOLY",
    title: "OOLY Chunkies Paint Sticks - Metallic (Set of 6)",
    price: 9,
    oldPrice: 38,
  },
  // Add more items if you want to test the slider
];

export default function ClearanceDeals() {
  const [index, setIndex] = useState(0);
  const itemsPerView = 5;
  const totalSlides = Math.ceil(clearanceItems.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="clearance-deals-container">
      <h2 className="clearance-deals-title">
        Clearance Deals: Books, Fashion, Toys, Stationery & more
      </h2>
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
            {clearanceItems.map((item, idx) => (
              <div className="clearance-card" key={idx}>
                <img src={item.img} alt={item.title} className="clearance-img" />
                <div className="clearance-publisher">{item.publisher}</div>
                <div className="clearance-title">{item.title}</div>
                <hr className="divider" />
                <div className="clearance-prices">
                  <span className="price-label">AED</span>
                  <span className="clearance-price">{item.price}</span>
                  <span className="old-price-label">AED</span>
                  <span className="clearance-old-price">{item.oldPrice}</span>
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
      <div className="view-all-btn-container">
        <button className="view-all-btn">VIEW ALL CLEARANCE DEALS</button>
      </div>
    </div>
  );
}