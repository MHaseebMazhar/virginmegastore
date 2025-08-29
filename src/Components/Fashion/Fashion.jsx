import React from "react";

const Fashion = ({ title = "Fashion", children }) => {
  return (
    <section className="fashion">
      <h1>{title}</h1>
      <div className="fashion-content">
        {children || <p>Welcome to the Fashion section.</p>}
      </div>
    </section>
  );
};

export default Fashion;