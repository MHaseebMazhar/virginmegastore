import React from "react";
import "./Footer.css";

export default function FooterColumn({ title, links }) {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      <ul>
        {links.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    </div>
  );
}
