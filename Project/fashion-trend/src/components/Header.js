import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">🖤</div>
      <nav>
        <a href="#sources">Sources</a>
        <a href="#archives">Archives</a>
        <a href="#about">About</a>
        <button className="search-btn">Search Products</button>
      </nav>
    </header>
  );
}

  

export default Header;