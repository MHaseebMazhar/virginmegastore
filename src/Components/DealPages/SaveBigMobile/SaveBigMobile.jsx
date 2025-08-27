import React, { useState } from "react";
import "./SaveBigMobile.css";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy A36 5G Smartphone 8GB/128GB - Awesome Lavender",
    price: 999,
    oldPrice: 1299,
    img: "Detail-1033571-main.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy A16 Smartphone LTE/6GB/128GB/Dual Sim - Blue Black",
    price: 499,
    oldPrice: 649,
    img: "Detail-1024491-main.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 FE Smartphone 5G 8GB/256GB - Gray",
    price: 1739,
    oldPrice: 2699,
    img: "Detail-1020157-main.jpg",
  },
  {
    id: 4,
    name: "Cricut Glitter Iron-On Roll (30.5 x 48cm) - Black",
    price: 2899,
    oldPrice: 5099,
    img: "Detail-347964-main.jpg",
  },
  {
    id: 5,
    name: "Samsung Galaxy A06 Smartphone LTE 4GB/128GB - Black",
    price: 329,
    oldPrice: 459,
    img: "Detail-1020164-main.jpg",
  },
];

export default function SaveBigMobile() {
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
      <h2>Save Big on Mobile Phones</h2>

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
                <p className="brand">SAMSUNG</p>
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
        <button>VIEW ALL MOBILE PHONES DEALS</button>
      </div>
    </div>
  );
}
