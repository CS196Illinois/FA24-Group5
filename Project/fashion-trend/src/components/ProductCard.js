import React from 'react';
import './ProductCard.css';

function ProductCard({ name, image, link }) {
  return (
    <div className="product-card">
      <a href={link} className="product-link">
        <img src={image} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
      </a>
    </div>
  );
}

export default ProductCard;