
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Bright Future
        </div>
        
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="navbar-auth">
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;