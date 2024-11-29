import React from 'react';
import './ProductCard.css';

function ProductCard({ name, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
    </div>
  );
}

export default ProductCard;