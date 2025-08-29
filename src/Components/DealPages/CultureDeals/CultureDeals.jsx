import React from "react";
import "./CultureDeals.css";

const cultureDeals = [
  {
    title: "K-POP CD Deals",
    img: "A1.webp"
  },
  {
    title: "Vinyl",
    img: "A2.webp"
  },
  {
    title: "Musical Instruments",
    img: "A3.webp"
  },
  {
    title: "Audio & DJ Equipment",
    img: "A4.webp"
  },
  {
    title: "Kids books",
    img: "A5.webp"
  }
];

export default function CultureDeals() {
  return (
    <div className="culture-deals-container">
      <h2 className="culture-deals-title">Culture Deals</h2>
      <div className="culture-deals-list">
        {cultureDeals.map((deal, idx) => (
          <div className="culture-deal-card" key={idx}>
            <div className="culture-deal-img-bg">
              <img src={deal.img} alt={deal.title} className="culture-deal-img" />
            </div>
            <div className="culture-deal-title">{deal.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}