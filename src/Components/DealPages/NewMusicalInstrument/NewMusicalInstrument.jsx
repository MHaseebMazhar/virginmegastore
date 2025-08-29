import React, { useState } from "react";
import "./NewMusicalInstrument.css";

const instrumentDeals = [
  {
    brand: "GIBSON",
    title: "Gibson USA LPSTAA01B8CH1 Les Paul Studio Session Electric Guitar - Bourbon Burst",
    price: 6999,
    oldPrice: 7599,
    img: "D1.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson Custom Shop LPR59ULSTBNH1 Murphy Lab 1959 Les Paul Standard Reissue...",
    price: 27699,
    oldPrice: 38999,
    img: "D2.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson Custom Shop LPC-PSL22512 Les Paul Custom Electric Guitar - Arctic Blast",
    price: 22999,
    oldPrice: 23999,
    img: "D3.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson Jb2RanpsI0712 Sj-200 Original An Acoustic Guitar - Antique Natural",
    price: 22999,
    oldPrice: 24999,
    img: "D4.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson USA LPSSP3O0WHCH1 Artist Slash Signature Les Paul Standard Jessica Electric Guitar ...",
    price: 11499,
    oldPrice: 12999,
    img: "D5.jpg"
  },
    {
    brand: "GIBSON",
    title: "Gibson USA LPSTAA01B8CH1 Les Paul Studio Session Electric Guitar - Bourbon Burst",
    price: 6999,
    oldPrice: 7599,
    img: "D1.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson Custom Shop LPR59ULSTBNH1 Murphy Lab 1959 Les Paul Standard Reissue...",
    price: 27699,
    oldPrice: 38999,
    img: "D2.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson Custom Shop LPC-PSL22512 Les Paul Custom Electric Guitar - Arctic Blast",
    price: 22999,
    oldPrice: 23999,
    img: "D3.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson Jb2RanpsI0712 Sj-200 Original An Acoustic Guitar - Antique Natural",
    price: 22999,
    oldPrice: 24999,
    img: "D4.jpg"
  },
  {
    brand: "GIBSON",
    title: "Gibson USA LPSSP3O0WHCH1 Artist Slash Signature Les Paul Standard Jessica Electric Guitar ...",
    price: 11499,
    oldPrice: 12999,
    img: "D5.jpg"
  },
];

export default function NewMusicalInstrument() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 5;
  const totalSlides = Math.ceil(instrumentDeals.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="new-musical-instrument-container">
      <h2 className="new-musical-instrument-title">New Musical Instrument Deals</h2>
      <div className="slider">
        <button className="arrow left" onClick={prevSlide} disabled={index === 0}>
          &#10094;
        </button>
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {instrumentDeals.map((deal, idx) => (
              <div className="new-musical-instrument-card deal-card" key={idx}>
                <div className="new-musical-instrument-img">
                  <img src={deal.img} alt={deal.title} />
                </div>
                <div className="new-musical-instrument-brand">{deal.brand}</div>
                <div className="new-musical-instrument-title-card">{deal.title}</div>
                <hr />
                <div className="new-musical-instrument-prices">
                  <span className="aed-label highlight">AED</span>
                  <span className="price highlight">{deal.price.toLocaleString()}</span>
                  <span className="old-price">AED {deal.oldPrice.toLocaleString()}</span>
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
      <div className="new-musical-instrument-btn-container btn-container">
        <button className="new-musical-instrument-btn">VIEW ALL MUSICAL INSTRUMENT DEALS</button>
      </div>
      <hr className="new-musical-instrument-divider" />
    </div>
  );
}