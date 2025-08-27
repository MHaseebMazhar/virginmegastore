import React, { useState } from "react";
import "./Trending.css";

const products = [
  {
    id: 1,
    name: "Radio Flyer Busy Buggy Baby Push Toy - Red",
    price: 199,
    oldPrice: 299,
    img: "Detail-29920-main.jpg",
  },
  {
    id: 2,
    name: "Cable Guy One Piece Luffy Gaming Controller & Phone Holder",
    price: 109,
    oldPrice: 129,
    img: "Detail-237038-main.jpg",
  },
  {
    id: 3,
    name: "IVE Official Light Stick | IVE",
    price: 45,
    oldPrice: 399,
    img: "Detail-473460-main.jpg",
  },
  {
    id: 4,
    name: "Hasbro Transformers: Rise of the Beasts Optimus Primal 2-in-1 Converting Mask",
    price: 39,
    oldPrice: 156,
    img: "Detail-302317-main.jpg",
  },
  {
    id: 5,
    name: "Abystyle Grendizer 30 cm Collectible Bust",
    price: 1499,
    oldPrice: 1799,
    img: "Detail-25462-main.jpg",
  },
];

export default function Trending() {
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
      <h2>Trending Toys and Game Deals</h2>

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
        <button>VIEW ALL TOYS AND GAMES DEALS</button>
      </div>
    </div>
  );
}
