import React from "react";
import "./TechDeals.css";

export default function TechDeals() {
  const categories = [
    { name: "Portable & Home Speakers", img: "1.webp" },
    { name: "Headphones & Earphones", img: "2.webp" },
    { name: "Camera & Photography", img: "3.webp" },
    { name: "Smart Watches & Fitness", img: "4.webp" },
    { name: "Computers & Accessories", img: "5.webp" },
    { name: "Tablets & Accessories", img: "6.webp" },
    { name: "Mobile & Accessories", img: "7.webp" },
    { name: "Home Theater", img: "8.webp" },
  ];

  return (
    <div className="deals-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
      
      </div>

   
      {/* Categories */}
      <h3 className="section-title">Lifestyle Deals</h3>

      
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <div className="circle">
              <img src={cat.img} alt={cat.name} />
            </div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
