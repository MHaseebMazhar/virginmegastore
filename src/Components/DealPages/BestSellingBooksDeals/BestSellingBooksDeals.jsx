import React, { useState } from "react";
import "./BestSellingBooksDeals.css";

const books = [
  {
    img: "A1.jpeg",
    publisher: "TASCHEN",
    title: "Life Hollywood | Taschen",
    price: 675,
    oldPrice: 899,
  },
  {
    img: "A2.jpeg",
    publisher: "MARVEL COMICS",
    title: "Miles Morales - Spider-Man By Saladin Ahmed Omnibus | Saladin Ahmed",
    price: 357,
    oldPrice: 549,
  },
  {
    img: "A3.jpeg",
    publisher: "TASCHEN UK",
    title: "Shoes Az - The Collection of The Museum At Fit | Daphne Guinness",
    price: 319,
    oldPrice: 425,
  },
  {
    img: "A4.jpeg",
    publisher: "PENGUIN BOOKS UK",
    title: "The Lyrics 1956 To The Present | Paul Mccartney",
    price: 279,
    oldPrice: 429,
  },
  {
    img: "A5.jpeg",
    publisher: "FLAMMARION UK",
    title: "Dream Makers- Bespoke Celebrations | Guendalina Litta",
    price: 266,
    oldPrice: 409,
  },
  // Duplicate for demo (optional)
  {
    img: "A1.jpeg",
    publisher: "TASCHEN",
    title: "Life Hollywood | Taschen",
    price: 675,
    oldPrice: 899,
  },
  {
    img: "A2.jpeg",
    publisher: "MARVEL COMICS",
    title: "Miles Morales - Spider-Man By Saladin Ahmed Omnibus | Saladin Ahmed",
    price: 357,
    oldPrice: 549,
  },
  {
    img: "A3.jpeg",
    publisher: "TASCHEN UK",
    title: "Shoes Az - The Collection of The Museum At Fit | Daphne Guinness",
    price: 319,
    oldPrice: 425,
  },
  {
    img: "A4.jpeg",
    publisher: "PENGUIN BOOKS UK",
    title: "The Lyrics 1956 To The Present | Paul Mccartney",
    price: 279,
    oldPrice: 429,
  },
  {
    img: "A5.jpeg",
    publisher: "FLAMMARION UK",
    title: "Dream Makers- Bespoke Celebrations | Guendalina Litta",
    price: 266,
    oldPrice: 409,
  },
];

export default function BestSellingBooksDeals() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 5;
  const totalSlides = Math.ceil(books.length / itemsPerView);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="best-selling-books-deals-container">
      <h2 className="deals-title">Best Selling Books Deals</h2>
      <div className="slider">
        <button className="arrow left" onClick={prevSlide} disabled={index === 0}>
          &#10094;
        </button>
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {books.map((book, idx) => (
              <div className="book-card" key={idx}>
                <img src={book.img} alt={book.title} className="book-img" />
                <div className="book-publisher">{book.publisher}</div>
                <div className="book-title">{book.title}</div>
                <hr className="divider" />
                <div className="book-prices">
                  <span className="price-label">AED</span>
                  <span className="book-price">{book.price}</span>
                  <span className="old-price-label">AED</span>
                  <span className="book-old-price">{book.oldPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="arrow right"
          onClick={nextSlide}
          disabled={index === totalSlides - 1}
        >
          &#10095;
        </button>
      </div>
      <div className="view-all-btn-container">
        <button className="view-all-btn">VIEW ALL BOOKS DEALS</button>
      </div>
    </div>
  );
}