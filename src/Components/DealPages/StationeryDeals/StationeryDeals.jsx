import React, { useState } from "react";
import "./StationeryDeals.css";

const products = [
  {
    id: 1,
    name: "Cricut Linerless Transfer Tape (15 Ft)",
    price: 69,
    oldPrice: 89,
    img: "Detail-1026959-main.jpg",
  },
  {
    id: 2,
    name: "Cricut Premium Fine-Point Blade Plus Housing (1.1mm) - Gold",
    price: 89,
    oldPrice: 125,
    img: "Detail-1026960-main.jpg",
  },
  {
    id: 3,
    name: "Cricut Smart Paper Sticker Cardstock Pack (33 x 33cm) (Pack of 10) - Pastel",
    price: 55,
    oldPrice: 79,
    img: "Detail-1026956-main.jpg",
  },
  {
    id: 4,
    name: "Cricut Glitter Iron-On Roll (30.5 x 48cm) - Black",
    price: 55,
    oldPrice: 79,
    img: "Detail-1026954-main.jpg",
  },
  {
    id: 5,
    name: "Cricut Glitter Iron-On Sampler (30.5 x 30.5cm) (3 Sheet) - Sangria",
    price: 59,
    oldPrice: 89,
    img: "Detail-1026958-main.jpg",
  },
];

export default function StationeryDeals() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 3; // show minimum 3 items
  const totalSlides = Math.ceil(products.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="deals-container">
      <h2>Limited-Time Deals on Stationery</h2>

      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {products.map((item) => (
              <div key={item.id} className="deal-card">
                <img src={item.img} alt={item.name} />
                <p className="brand">CRICUT</p>
                <h3><b>{item.name}</b></h3>
                <div className="price">
                  <span className="new-price">AED {item.price}</span>
                  <span className="old-price">AED {item.oldPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="btn-container">
        <button>VIEW ALL STATIONERY DEALS</button>
      </div>
    </div>
  );
}
