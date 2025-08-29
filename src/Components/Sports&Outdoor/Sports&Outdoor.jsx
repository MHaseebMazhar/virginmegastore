import React from 'react';

// src/Components/Sports&Outdoor/Sports&Outdoor.jsx

const SportsAndOutdoor = ({ title = 'Sports & Outdoor', children }) => {
  return (
    <section className="sports-outdoor">
      <h1>{title}</h1>
      <div className="content">
        {children ?? <p>Very short basic template component.</p>}
      </div>
    </section>
  );
};

export default SportsAndOutdoor;