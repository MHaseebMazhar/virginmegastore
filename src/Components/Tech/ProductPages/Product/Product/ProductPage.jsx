import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const products = {
  "apple-airpods-pro": {
    id: "apple-airpods-pro",
    name: "Apple AirPods Pro (2nd generation) True Wireless Earbuds with MagSafe Case (USB-C)",
    brand: "Apple",
    model: "MTJV3ZE/A",
    price: 859,
    oldPrice: 949,
    images: ["/1.jpg", "/1.jpg", "/1.jpg", "/1.jpg"],
    description: `AirPods Pro feature up to 2x more Active Noise Cancellation,
    Transparency mode, and now Adaptive Audio. Personalized Spatial Audio
    with dynamic head tracking immerses you in sound.`,
    reviews: 46,
    rating: 4.6,
    loyalty: 859,
  },
  "bose-headphones": {
    id: "bose-headphones",
    name: "BOSE Headphones 700 Wireless Over-Ear Noise Cancelling",
    brand: "BOSE",
    model: "794297-0100",
    price: 1599,
    oldPrice: 1799,
    images: ["/2.jpg", "/2.jpg"],
    description:
      " Wireless headphones with powerful noise cancellation, touch controls, and clear call quality. Perfect for travel and work.",
    reviews: 28,
    rating: 4.8,
    loyalty: 1599,
  },
  "samsung-s24": {
    id: "samsung-s24",
    name: "Samsung Galaxy S24 Ultra 5G Dual SIM",
    brand: "Samsung",
    model: "SM-S928BZKDEUE",
    price: 5299,
    oldPrice: 5699,
    images: ["/3.jpg", "/3.jpg"],
    description:
      " Samsung’s flagship smartphone with Snapdragon 8 Gen 3, quad camera system, and S-Pen support.",
    reviews: 122,
    rating: 4.7,
    loyalty: 5299,
  },
  "gopro-13": {
    id: "gopro-13",
    name: "GoPro HERO13 Black 5.3K Ultra HD Action Camera",
    brand: "GoPro",
    model: "CHDHX-131-RW",
    price: 1999,
    oldPrice: 2299,
    images: ["/4.jpg", "/4.jpg"],
    description:
      "The most powerful GoPro yet with 5.3K video, HyperSmooth stabilization, and waterproof up to 10m.",
    reviews: 64,
    rating: 4.9,
    loyalty: 1999,
  },
  "insta360-x5": {
    id: "insta360-x5",
    name: "Insta360 X5 8K 360° Camera",
    brand: "Insta360",
    model: "CINOSXX/A",
    price: 2499,
    oldPrice: 2699,
    images: ["/5.jpg", "/5.jpg"],
    description:
      "Capture everything in 8K 360°. Perfect for vlogging, travel, and immersive content creation.",
    reviews: 31,
    rating: 4.5,
    loyalty: 2499,
  },
};

export default function ProductPage() {
  const { id } = useParams();
  const product = products[id];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [qty, setQty] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-page">
      {/* Images Section */}
      <div className="product-images">
        <img src={selectedImage} alt={product.name} className="main-image" />
        <div className="thumbnails">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              className={`thumb ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>
          <b>BRAND:</b> {product.brand} | <b>MODEL:</b> {product.model}
        </p>
        <p>
          ⭐ {product.rating} ({product.reviews} Reviews)
        </p>

        <div>
          <span className="old-price">AED {product.oldPrice}</span>
          <span className="new-price">AED {product.price}</span>
        </div>

        {/* Qty + Add to Cart */}
        <div className="qty-cart">
          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
          <button className="add-to-cart">ADD TO CART</button>
        </div>

        <p>{product.description}</p>

        <div className="warranty">
          <h4>Protect your purchase</h4>
          <p>Free 1-year manufacturer's warranty</p>
          <div className="warranty-options">
            <button>1 Year AED 67</button>
            <button>2 Years AED 100</button>
            <button>3 Years AED 152</button>
          </div>
          <div className="warranty-options">
            <button>Accidental Damage 1 Year AED 129</button>
          </div>
          <div className="warranty-options">
            <button>Extended + Accidental (1+2 Years) AED 178</button>
            <button>Extended + Accidental (2+3 Years) AED 230</button>
          </div>
        </div>
      </div>
    </div>
  );
}
