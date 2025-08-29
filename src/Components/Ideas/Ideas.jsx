import React from "react";

const Ideas = ({ title = "Ideas", children }) => {
  return (
    <section className="ideas">
      <h2>{title}</h2>
      <div className="ideas-content">
        {children ?? <p>Start adding your ideas here.</p>}
      </div>
    </section>
  );
};

export default Ideas;