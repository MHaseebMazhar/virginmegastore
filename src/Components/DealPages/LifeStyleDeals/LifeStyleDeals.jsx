import React from "react";
import "./LifeStyleDeals.css";

export default function LifeStyleDeals() {
  const categories = [
    { name: "Diaries, Planners & Calendar Deals", img: "VM-Icon-Categories-Deals-Diaries-Planners-640x640.webp" },
    { name: "Backpack & Lunch Boxes Deals", img: "VM-Icon-Categories-Deals-Backpacks-640x640-.webp" },
    { name: "Decor & Furnishing Deals", img: "VM-Icon-Categories-Deals-Decor-Furnishing-640x640.webp" },
    { name: "Games & Puzzles Deals", img: "VM-Icon-Categories-Deals-Games-Puzzles-640x640-.webp" },
    { name: "Smart Home", img: "VM-Icon-Categories-Deals-Smart-Home-640x640-.webp" },
    { name: "Kitchen & Dining Deals", img: "VM-Icon-Categories-Deals-Kitchen-Dining-640x640-.webp" },
    { name: "Sports & Outdoor", img: "VM-Icon-Categories-Deals-Sports-Outdoors-640x640-.webp" },
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
