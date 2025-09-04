import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

// ✅ Product Data
const products = {
  "apple-airpods-pro": {
    brand: "APPLE",
    name: "Apple AirPods Pro (2nd generation) True Wireless Earbuds with MagSafe Case (USB-C)",
    price: 859,
    oldPrice: 949,
    images: ["/1.jpg", "/2.jpg", "/3.jpg"],
    description:
      "AirPods Pro feature up to 2x more Active Noise Cancellation, Transparency mode, and now Adaptive Audio which automatically tailors the noise control for you.",
  },
  "bose-headphones": {
    brand: "BOSE",
    name: "Bose QuietComfort Ultra Headphones - Black",
    price: 1199,
    oldPrice: 1699,
    images: ["/2.jpg", "/1.jpg"],
    description:
      "Bose QuietComfort Ultra Headphones deliver immersive sound with adaptive noise cancellation and premium comfort.",
  },
  "samsung-s24": {
    brand: "SAMSUNG",
    name: "Samsung Galaxy S24 Ultra 5G Smartphone 12GB/256GB",
    price: 2899,
    oldPrice: 5099,
    images: ["/3.jpg", "/1.jpg"],
    description:
      "The Galaxy S24 Ultra brings next-gen performance, AI features, and pro-grade camera system in a sleek design.",
  },
  "gopro-13": {
    brand: "GOPRO",
    name: "GoPro Hero 13 Action Camera - Accessory Bundle",
    price: 1525,
    oldPrice: 1889,
    images: ["/4.jpg", "/2.jpg"],
    description:
      "The GoPro Hero 13 is the ultimate action camera with 5.3K video, HyperSmooth stabilization and rugged durability.",
  },
  "insta360-x5": {
    brand: "INSTA360",
    name: "Insta360 X5 360 Action Camera - Black",
    price: 2019,
    oldPrice: 2169,
    images: ["/5.jpg", "/3.jpg"],
    description:
      "Insta360 X5 lets you capture everything in 360°, with incredible stabilization and up to 8K resolution.",
  },
};

const ProductPage = () => {
  const { id } = useParams();
  const product = products[id];

  const [quantity, setQuantity] = useState(1);
  const [selectedWarranty, setSelectedWarranty] = useState(null);
  const [selectedAccidental, setSelectedAccidental] = useState(null);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  // Loyalty calculation
  const loyaltyPointsPerItem = product.price;
  const loyaltyAedPerItem = product.price * 0.01;
  const loyaltyPoints = quantity * loyaltyPointsPerItem;
  const loyaltyAed = (quantity * loyaltyAedPerItem).toFixed(2);

  // Warranty options
  const extendedWarrantyOptions = [
    { label: "1 Year", price: 67 },
    { label: "2 Years", price: 100 },
    { label: "3 Years", price: 152 },
  ];
  const accidentalDamageOptions = [{ label: "1 Year", price: 129 }];
  const bundleOptions = [
    { label: "1 + 2 Years", price: 178 },
    { label: "2 + 3 Years", price: 230 },
  ];

  return (
    <div className="product-page-container">
      {/* Left Column: Image Gallery */}
      <div className="column image-gallery-column">
        <div className="main-image-container">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="main-product-image"
          />
        </div>
        <div className="thumbnail-gallery">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${
                currentImageIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Middle Column: Product Details */}
      <div className="column product-details-column">
        <p className="brand">BRAND: {product.brand}</p>
        <h1 className="product-title">{product.name}</h1>
        <div className="reviews">
          <span>★★★★☆</span>
          <span> 4.6 | 31 REVIEWS</span>
        </div>
        <div className="delivery-info">
          <span>Same-day to 2-day delivery</span> |{" "}
          <span>Check availability in store</span>
        </div>
        <div className="description-section">
          <h3 className="description-heading">DESCRIPTION</h3>
          <p className="description-text">
            {isDescriptionExpanded
              ? product.description
              : product.description.slice(0, 100) + "..."}
          </p>
          <button
            className="expand-btn"
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          >
            {isDescriptionExpanded ? "VIEW LESS" : "VIEW FULL DESCRIPTION"}
          </button>
        </div>
        <div className="loyalty-info">
          <div className="loyalty-icon-container">
            <span className="loyalty-icon">★</span>
          </div>
          <p>
            Earn <strong>{loyaltyPoints} loyalty dots</strong> equivalent to{" "}
            <strong>AED {loyaltyAed}</strong> when you sign-in and order
          </p>
        </div>
      </div>

      {/* Right Column: Purchase Options */}
      <div className="column purchase-options-column">
        <div className="price-info">
          <span className="old-price">AED {product.oldPrice}</span>
          <span className="new-price">AED {product.price}</span>
        </div>
        <div className="quantity-selector">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="qty-btn"
          >
            -
          </button>
          <span className="qty-display">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="qty-btn"
          >
            +
          </button>
          <span className="qty-label">QTY</span>
        </div>
        <button className="add-to-cart-btn">ADD TO CART</button>
        <div className="easy-payment-plans">
          <span>💳 Easy Payment Plans</span>
          <p>EPP available for order over AED 1,000</p>
        </div>

        {/* Warranty & Protection */}
        <div className="protection-section">
          <h3>Protect your purchase</h3>
          <div className="warranty-option">
            <p>Free 1-year manufacturer's warranty</p>
          </div>
          <div className="warranty-section-item">
            <p>Protect your new device with AppleCare+</p>
            <div className="applecare-option">
              <span>AppleCare+</span>
              <span>AED 119</span>
            </div>
          </div>
          <div className="option-row">
            <span className="option-label">Extended Warranty</span>
            <div className="option-group">
              {extendedWarrantyOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setSelectedWarranty(option.label)}
                  className={`warranty-btn ${
                    selectedWarranty === option.label ? "selected" : ""
                  }`}
                >
                  <span>{option.label}</span>
                  <span>AED {option.price}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="option-row">
            <span className="option-label">Accidental Damage</span>
            <div className="option-group">
              {accidentalDamageOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setSelectedAccidental(option.label)}
                  className={`warranty-btn ${
                    selectedAccidental === option.label ? "selected" : ""
                  }`}
                >
                  <span>{option.label}</span>
                  <span>AED {option.price}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="option-row">
            <span className="option-label">Extended + Accidental Damage</span>
            <div className="option-group">
              {bundleOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setSelectedBundle(option.label)}
                  className={`warranty-btn ${
                    selectedBundle === option.label ? "selected" : ""
                  }`}
                >
                  <span>{option.label}</span>
                  <span>AED {option.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
