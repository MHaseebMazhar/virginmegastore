import React from "react";

const Pets = ({ title = "Pets", items = [] }) => {
  return (
    <section className="pets">
      <h2>{title}</h2>
      <ul>
        {items.length === 0 ? (
          <li>No pets available.</li>
        ) : (
          items.map((pet, i) => <li key={i}>{pet}</li>)
        )}
      </ul>
    </section>
  );
};

export default Pets;