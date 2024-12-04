import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import ProductCard from './components/ProductCard';
import ShirtsPage from './components/shirts';
import PantsPage from './components/pants';
import DressesPage from './components/dresses';
import ShoesPage from './components/shoes';
import AccessoriesPage from './components/accessories';
import predictArticleType  from '/Users/anshimathur/Desktop/FA24-Group5/Project/fashion-trend/src/services/predictArticleType.js'; // Import the function

import './App.css';

const products = [
  { name: 'Shirts', image: '/images/shirt.jpg', link: '/shirts' },
  { name: 'Pants', image: '/images/pants.jpg', link: '/pants' },
  { name: 'Dresses', image: '/images/dress.jpg', link: '/dresses' },
  { name: 'Shoes', image: '/images/shoes.jpg', link: '/shoes' },
  { name: 'Accessories', image: '/images/accessories.jpg', link: '/accessories' },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <About />
        <Routes>
          <Route
            path="/"
            element={
              <div className="product-grid">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    image={product.image}
                    link={product.link}
                  />
                ))}
              </div>
            }
          />
           <Route path="/shirts" element={<ShirtsPage predictArticleType={predictArticleType} />} />
          <Route path="/pants" element={<PantsPage predictArticleType={predictArticleType} />} />
          <Route path="/dresses" element={<DressesPage predictArticleType={predictArticleType} />} />
          <Route path="/shoes" element={<ShoesPage predictArticleType={predictArticleType} />} />
          <Route path="/accessories" element={<AccessoriesPage predictArticleType={predictArticleType} />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
