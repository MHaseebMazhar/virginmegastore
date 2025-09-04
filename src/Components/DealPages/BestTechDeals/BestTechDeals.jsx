import React from "react";
import { Link } from "react-router-dom";
import "./BestTechDeals.css";

export default function BestTechDeals() {
  const products = [
    {
      id: "apple-airpods-pro",
      brand: "APPLE",
      name: "Apple AirPods Pro (2nd generation) True Wireless Earbuds with MagSafe Case (USB-C)",
      img: "./1.jpg",
      price: "859",
      oldPrice: "949",
    },
    {
      id: "bose-headphones",
      brand: "BOSE",
      name: "Bose QuietComfort Ultra Headphones - Black",
      img: "/5.jpg",
      price: "1,199",
      oldPrice: "1,699",
    },
    {
      id: "samsung-s24",
      brand: "SAMSUNG",
      name: "Samsung Galaxy S24 Ultra 5G Smartphone 12GB/256GB",
      img: "/3.jpg",
      price: "2,899",
      oldPrice: "5,099",
    },
    {
      id: "gopro-13",
      brand: "GOPRO",
      name: "GoPro Hero 13 Action Camera - Accessory Bundle",
      img: "/4.jpg",
      price: "1,525",
      oldPrice: "1,889",
    },
    {
      id: "insta360-x5",
      brand: "INSTA360",
      name: "Insta360 X5 360 Action Camera - Black",
      img: "/5.jpg",
      price: "2,019",
      oldPrice: "2,169",
    },
  ];

  return (
    <div className="deals-container">
      <h3 className="section-title">Best Selling Tech Deals</h3>

      <div className="product-grid">
        {products.map((item, index) => (
          <Link to={`/product/${item.id}`} key={index} className="product-card">
            <img src={item.img} alt={item.name} />
            <p className="brand">{item.brand}</p>
            <p className="name">{item.name}</p>
            <div className="price-row">
              <span className="price">AED {item.price}</span>
              <span className="old-price">AED {item.oldPrice}</span>
            </div>
          </Link>
        ))}
      </div>

      <button className="view-all">VIEW ALL TECH DEALS</button>
    </div>
  );
}
