import React from "react";
import "./TechDeals.css";
import { Link } from "react-router-dom";

export default function TechDeals() {
  const categories = [
    { name: "Portable & Home Speakers", img: "1.webp", path: "/tech/speakers" },
    { name: "Headphones & Earphones", img: "2.webp", path: "/tech/headphones" },
    { name: "Camera & Photography", img: "3.webp", path: "/tech/camera" },
    { name: "Smart Watches & Fitness", img: "4.webp", path: "/tech/watches" },
    { name: "Computers & Accessories", img: "5.webp", path: "/tech/computers" },
    { name: "Tablets & Accessories", img: "6.webp", path: "/tech/tablets" },
    { name: "Mobile & Accessories", img: "7.webp", path: "/tech/mobile" },
    { name: "Home Theater", img: "8.webp", path: "/tech/theater" },
  ];

  return (
    <div className="deals-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Tech / Deals
      </div>

      {/* Categories */}
      <h3 className="section-title">Tech Deals</h3>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className="category-card">
            <div className="circle">
              <img src={cat.img} alt={cat.name} />
            </div>
            <p>{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
