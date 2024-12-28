import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Menu
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Shop
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
