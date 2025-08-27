import React, { useState } from "react";
import "./PCGamingDeals.css";

const products = [
  {
    id: 1,
    name: "Razer Barracuda X Wireless Multi-Platform Gaming And Mobile Headset - Black",
    price: 375,
    oldPrice: 425,
    img: "816796-main.jpeg",
  },
  {
    id: 2,
    name: "HyperX Cloud III Gaming Headset - Black/Red",
    price: 329,
    oldPrice: 389,
    img: "Detail-51749-main.jpg",
  },
  {
    id: 3,
    name: "MSI Katana 15 Gaming Laptop Intel Core I9-14900Hx/ 16 GB RAM/ 1 Tb SSD/ Nvidia Geforce RTX 5060 8GB/ 15.6-Inch QHD (2560 X 1440) 165Hz/ Windows 11 ...",
    price: 6299,
    oldPrice: 6499,
    img: "Detail-1051871-main.jpg",
  },
  {
    id: 4,
    name: "HyperX Cloud III Gaming Headset - Black",
    price: 329,
    oldPrice: 389,
    img: "Detail-379264-main.jpg",
  },
  {
    id: 5,
    name: "Razer Deathadder Essential Gaming Mouse Black",
    price: 109,
    oldPrice: 139,
    img: "785153-main.jpeg",
  },
];

export default function PCGamingDeals() {
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
      <h2>Best Selling PC Gaming Deals</h2>

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
                <p className="brand">RAZER</p>
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
        <button>VIEW ALL PC GAMING DEALS</button>
      </div>
    </div>
  );
}
