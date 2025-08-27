import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const menuItems = [
    "Deals",
    "Tech",
    "Gaming",
    "Toys",
    "Collectibles",
    "House",
    "Sports & Outdoor",
    "Pets",
    "Fashion",
    "Stationery",
    "Books",
    "Music",
    "Musical Instruments",
    "Codes",
    "Ideas 🎁",
    "Tickets",
    "Circle",
  ];

  return (
    <header>
      {/* Top Header */}
      <div className="header-top">
        {/* Logo */}
        <div className="logo">
          <img
            src="/Virgin-Red-Logo.svg"
            alt="Virgin Megastore"
          />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="I'm looking for" />
          <FaSearch className="icon" />
        </div>

        {/* Icons */}
        <div className="header-icons">
          <img src="user.png" alt="Circle" className="icon" />
          <img src="icon-chat-help.svg" alt="Circle" className="icon" />
          <img src="icon-cart.svg" alt="Circle" className="icon" />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>

    
    </header>
  );
}
