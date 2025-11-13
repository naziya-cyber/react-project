
import { Link } from 'react-router-dom';
import './Navbar.css';

<<<<<<< HEAD
=======


>>>>>>> 350fe56d753e391ac4c39a342b1e5e3eb2eb484f
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
<<<<<<< HEAD
          <Link to="/">NextCode</Link>
=======
          Bright Future
>>>>>>> 350fe56d753e391ac4c39a342b1e5e3eb2eb484f
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