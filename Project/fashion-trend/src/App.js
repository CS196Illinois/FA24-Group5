import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ProductCard from './components/ProductCard.js';
import './App.css';


function App() {
  const products = [
    { name: 'Shirts', image: '/images/shirt.jpg' },
    { name: 'Pants', image: '/images/pants.jpg' },
    { name: 'Dresses', image: '/images/dress.jpg' },
    { name: 'Shoes', image: '/images/shoes.jpg' },
    { name: 'Accessories', image: '/images/accessories.jpg' },
  ];

  return (
    <div className="app">
      <Header />
      <About />
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
