import React, { useState } from "react";
import "./Footer.css";

const countries = [
  { code: "BH", name: "Bahrain", flag: "/BH-flag.svg" },
  { code: "EG", name: "Egypt", flag: "/EG-flag.svg" },
  { code: "KSA", name: "KSA", flag: "/SA-flag.svg" },
  { code: "OM", name: "Oman", flag: "/OM-flag.svg" },
  { code: "QA", name: "Qatar", flag: "/QA-flag.svg" },
  { code: "UAE", name: "UAE", flag: "/AE-flag.svg" },
];

export default function CountrySelector() {
  const [selected, setSelected] = useState(countries[5]); // default UAE
  const [open, setOpen] = useState(false);

  return (
    <div className="country-selector">
      <div className="selected" onClick={() => setOpen(!open)}>
        <img src={selected.flag} alt={selected.name} className="flag-img" />
        <span>{selected.name}</span>
        <span className="arrow">{open ? "^" : "▼"}</span>
      </div>

      {open && (
        <ul className="dropdown">
          {countries.map((c) => (
            <li key={c.code} onClick={() => { setSelected(c); setOpen(false); }}>
              <img src={c.flag} alt={c.name} className="flag-img" />
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
