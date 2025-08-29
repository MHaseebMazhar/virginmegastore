import React from "react";

const Codes = ({ title = "Codes", children }) => {
  return (
    <section className="codes-component">
      <h2>{title}</h2>
      <div className="codes-content">{children}</div>
    </section>
  );
};

export default Codes;