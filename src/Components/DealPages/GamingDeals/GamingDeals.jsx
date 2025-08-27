import React from "react";
import "./GamingDeals.css";

export default function GamingDeals() {
  const categories = [
    { name: "Keyboards & Mice", img: "VM-Icon-Categories-Deals-Keyboards-Mice-640x640-.webp" },
    { name: "Gaming Monitors", img: "VM-Icon-Categories-Deals-Gaming-Monitors-640x640-.webp" },
    { name: "Gaming Laptops", img: "VM-Icon-Categories-Deals-PC-Gaming-Laptops-640x640-.webp" },
    { name: "PlayStation", img: "VM-Icon-Categories-Deals-Playstation-640x640-.webp" },
    { name: "Xbox", img: "VM-Icon-Categories-Deals-Xbox-640x640-.webp" },
    { name: "Nintendo Switch", img: "VM-Icon-Categories-Deals-Nintendo-640x640-.webp" },
    { name: "Gaming Headsets", img: "VM-Icon-Categories-Deals-Gaming-Headsets-640x640-.webp" },
    { name: "Gaming Accessories", img: "VM-Icon-Categories-Deals-Gaming-Acceossries-640x640-.webp" },
    { name: "All PC Gaming Deals", img: "VM-Icon-Categories-Deals-PC-Gaming-Laptops-640x640-.webp" },
  ];

  return (
    <div className="deals-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
      
      </div>

   
      {/* Categories */}
      <h3 className="section-title">Gaming Deals</h3>

      
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
