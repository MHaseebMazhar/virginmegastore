import React, { useState } from "react";
import "./BestSellingMusicDeals.css";

const musicDeals = [
  {
    brand: "PLEDIS ENTERTAINMENT",
    title: "Directors Cut: Special Album (Kihno Ver) | Seventeen",
    price: 25,
    oldPrice: 185,
    img: "C1.jpg"
  },
  {
    brand: "YAMAHA",
    title: "Yamaha EZ-310 Portable Keyboard Lighting Keys - White",
    price: 999,
    oldPrice: 1219,
    img: "C2.jpg"
  },
  {
    brand: "TAYLOR",
    title: "Taylor BBT Big Baby Taylor Layered Walnut Acoustic Guitar Spruce Top - Natural (Includes Taylor Gig Bag)",
    price: 1749,
    oldPrice: 1849,
    img: "C3.jpg"
  },
  {
    brand: "PRESONUS",
    title: "Presonus Eris 3.5 Gen 2 - 3.5-Inch Powered Desktop Speakers - Black (Pair)",
    price: 399,
    oldPrice: 499,
    img: "C4.jpg"
  },
  {
    brand: "SONY MUSIC CG",
    title: "Diamond Life (Reissue) | Sade",
    price: 125,
    oldPrice: 149,
    img: "B1.jpg"
  },
   {
    brand: "PLEDIS ENTERTAINMENT",
    title: "Directors Cut: Special Album (Kihno Ver) | Seventeen",
    price: 25,
    oldPrice: 185,
    img: "C1.jpg"
  },
  {
    brand: "YAMAHA",
    title: "Yamaha EZ-310 Portable Keyboard Lighting Keys - White",
    price: 999,
    oldPrice: 1219,
    img: "C2.jpg"
  },
  {
    brand: "TAYLOR",
    title: "Taylor BBT Big Baby Taylor Layered Walnut Acoustic Guitar Spruce Top - Natural (Includes Taylor Gig Bag)",
    price: 1749,
    oldPrice: 1849,
    img: "C3.jpg"
  },
  {
    brand: "PRESONUS",
    title: "Presonus Eris 3.5 Gen 2 - 3.5-Inch Powered Desktop Speakers - Black (Pair)",
    price: 399,
    oldPrice: 499,
    img: "C4.jpg"
  },
  {
    brand: "SONY MUSIC CG",
    title: "Diamond Life (Reissue) | Sade",
    price: 125,
    oldPrice: 149,
    img: "B1.jpg"
  },
];

export default function BestSellingMusicDeals() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 5;
  const totalSlides = Math.ceil(musicDeals.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="best-selling-music-deals-container">
      <h2 className="best-selling-music-deals-title">Best Selling Music Deals</h2>
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
            {musicDeals.map((deal, idx) => (
              <div className="best-selling-music-deal-card deal-card" key={idx}>
                <div className="best-selling-music-deal-img">
                  <img src={deal.img} alt={deal.title} />
                </div>
                <div className="best-selling-music-deal-brand">{deal.brand}</div>
                <div className="best-selling-music-deal-title">{deal.title}</div>
                <hr />
                <div className="best-selling-music-deal-prices">
                  <span className="aed-label highlight">AED</span>
                  <span className="price highlight">{deal.price}</span>
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
      <div className="best-selling-music-deals-btn-container btn-container">
        <button className="best-selling-music-deals-btn">VIEW ALL MUSIC DEALS</button>
      </div>
      <hr className="best-selling-music-deals-divider" />
    </div>
  );
}