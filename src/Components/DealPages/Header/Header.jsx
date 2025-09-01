import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  const menuItems = [
    { label: "Deals", path: "/deals" },
    { label: "Tech", path: "/tech" },
    { label: "Gaming", path: "/gaming" },
    { label: "Toys", path: "/toys" },
    { label: "Collectibles", path: "/collectibles" },
    { label: "House", path: "/house" },
    { label: "Sports & Outdoor", path: "/sports-outdoor" },
    { label: "Pets", path: "/pets" },
    { label: "Fashion", path: "/fashion" },
    { label: "Stationery", path: "/stationery" },
    { label: "Books", path: "/books" },
    { label: "Music", path: "/music" },
    { label: "Musical Instruments", path: "/musical-instruments" },
    { label: "Codes", path: "/codes" },
    { label: "Ideas 🎁", path: "/ideas" },
    { label: "Tickets", path: "/tickets" },
    { label: "Circle", path: "/circle" },
  ];

  return (
    <header>
      {/* Top Header */}
      <div className="header-top">
        <div className="logo">
          <img src="/Virgin-Red-Logo.svg" alt="Virgin Megastore" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="I'm looking for" />
          <FaSearch className="icon" />
        </div>
        <div className="header-icons">
          <img src="user.png" alt="Circle" className="icon" />
          <img src="icon-chat-help.svg" alt="Help" className="icon" />
          <img src="icon-cart.svg" alt="Cart" className="icon" />
        </div>
      </div>

      {/* NavBar */}
      <nav className="nav-bar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
