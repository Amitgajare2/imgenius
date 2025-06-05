// components/Card.jsx
import React from 'react';
import './Card.css';

function Card({ src, alt, onClick, animationProps }) {
  return (
    <img
      src={src}
      alt={alt}
      className="card-image"
      onClick={onClick}
      {...animationProps}
    />
  );
}

export default Card;
