import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">NextCode</Link>
        </div>
        
        <ul className="navbar-menu">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Programs</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
        
        <div className="navbar-auth">
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;