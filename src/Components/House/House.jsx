import React from "react";

const House = ({ title = "House", children }) => {
  return (
    <section className="house">
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default House;