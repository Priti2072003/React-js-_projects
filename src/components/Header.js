import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>MyFood</h1>
      <nav>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;