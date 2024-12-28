import React, { useEffect } from 'react';
import './Navbar.jsx';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('sticky', window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fa-solid fa-mug-saucer"></i>
        <div className="logo-text">
          <span>Coffee</span>
          <span>House</span>
        </div>
      </div>
      <div className="navigation">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#contact">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
