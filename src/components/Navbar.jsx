import React, { useState } from 'react';
import "../components/navbar.css"; 
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo"><Link to="/">IMGenius</Link></div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="mailto: syntaxamit@proton.me">Contact us</Link>
        <Link to="/policy">Privacy Policy</Link>
        {/* <input type="text" className="search-input" placeholder="Search..." /> */}
      </div>
      <div
        className={`nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
