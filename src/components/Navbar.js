import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default Navbar;