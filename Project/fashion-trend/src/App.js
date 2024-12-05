import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ProductCard from './components/ProductCard.js';
import './App.css';


function App() {
  const products = [
    { name: 'Shirts', image: 'https://cdn11.bigcommerce.com/s-lk0gwzb/images/stencil/1280x1280/products/1645/9508/darkheathergrey-front__00008_7554__51511.1730584884.jpg?c=2&imbypass=on' },
    { name: 'Pants', image: 'https://truewerk.com/cdn/shop/files/t2_werkpants_mens_sand_flat_lay_8ef2f98e-2d28-4d79-9661-ccab84a67cf3.jpg?v=1701119637&width=2048' },
    { name: 'Dresses', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbKP9ZI-ILm51uvfusYiRx5rqLOCJbnafIkqVgpBYydFRvUEqHz7joSCJR46yveValPjWHbom6Ydv37_ei6O8KEVvCqsORTSZxYWn28R0Jp7TkqHayNbWn50wn2fZaxCb_d4VFBg&usqp=CAc' },
    { name: 'Shoes', image: 'https://www.baubax.com/cdn/shop/products/isolaced_11d9fa5f-0020-4258-b091-56b4d335a145_1200x1200.jpg?v=1635903763' },
    { name: 'Accessories', image: 'https://promova.com/content/medium_accessory_79573b939f.png' },
  ];

  

  return (
    <div className="app">
      <div className='blurred-background'></div>
      <div className='background-overlay'></div>
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
