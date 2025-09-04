import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimilarProduct.css"; // custom css

const similarProducts = [
  {
    id: 1,
    name: "Apple AirPods 4 True Wireless Earphones",
    price: 549,
    image: "/1.jpg",
  },
  {
    id: 2,
    name: "Apple AirPods 4 True Wireless Earphones (with Active Noise Cancellation)",
    price: 749,
    image: "/1.jpg",
  },
  {
    id: 3,
    name: "Apple AirPods True Wireless Earphones with MagSafe Charging Case (3rd Gen)",
    price: 669,
    image: "/1.jpg",
  },
  {
    id: 4,
    name: "Apple AirPods True Wireless Earphones with Lightning Charging Case (3rd Gen)",
    price: 629,
    image: "/1.jpg",
  },
  {
    id: 5,
    name: "Apple EarPods (USB-C)",
    price: 79,
    image: "/1.jpg",
  },
];

const SimilarProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,   // ✅ ab 5 ek sath dikhain gey
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="similar-products">
      <h2 className="title">Similar Products</h2>
      <Slider {...settings}>
        {similarProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <span className="brand">APPLE</span>
            <h3>{product.name}</h3>
            <p className="price">AED {product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarProduct;
