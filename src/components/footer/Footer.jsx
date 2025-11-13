import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        <h3>Educational Platform</h3>
        <p className="footer-tagline">Empowering learners worldwide with quality education</p>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <p className="footer-copyright">© 2024 EduPlatform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;