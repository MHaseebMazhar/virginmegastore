import React from 'react';
import PropTypes from 'prop-types';
import './Gaming.css'; // create this file to style the component (optional)

// src/Components/Gaming/Gaming.jsx

const Gaming = ({ title = 'Gaming', children, className = '' }) => {
  return (
    <section className={`gaming ${className}`}>
      <header className="gaming__header">
        <h2 className="gaming__title">{title}</h2>
      </header>
      <div className="gaming__content">
        {children}
      </div>
    </section>
  );
};

Gaming.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Gaming;