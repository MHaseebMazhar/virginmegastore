import React from "react";
import "./Deals.css";

export default function Deals() {
  const categories = [
    { name: "Tech", img: "VM-Icon-Categories-Deals-Tech-640x640.webp" },
    { name: "Gaming", img: "VM-Icon-Categories-Deals-Gaming-640x640.webp" },
    { name: "Toys", img: "VM-Icon-Categories-Deals-Toys-640x640.webp" },
    { name: "House", img: "VM-Icon-Categories-Deals-House-640x640.webp" },
    { name: "Beauty", img: "VM-Icon-Categories-Deals-Beauty-640x640.webp" },
    { name: "Fashion", img: "VM-Icon-Categories-Deals-Fashion-640x640.webp" },
    { name: "Stationery", img: "VM-Icon-Categories-Deals-Stationery-640x640.webp" },
    { name: "Books", img: "VM-Icon-Categories-Deals-Books-640x640.webp" },
    { name: "Music", img: "VM-Icon-Categories-Deals-Music-640x640.webp" },
  ];

  return (
    <div className="deals-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
      
      </div>

      {/* Banner */}
      <div className="banner">
        <img src="VM-Hero-Thin-Deals-Page-AE-BH-1440x200.webp" alt="Deals Breadcrumb" />
      </div>
      {/* Categories */}
      <h3 className="section-title">Shop Deals by Category</h3>

      {/* Description */}
      <div className="description">
        The deals you don’t want to turn a blind eye on! From 
        <b> Electronics</b> to price drops across <b>gaming</b>, <b>house</b>, 
        <b> Fashion</b>, <b>Music</b>, and many more categories,
        now’s the time to shop & save big with our special offers and deals.
      </div>

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
