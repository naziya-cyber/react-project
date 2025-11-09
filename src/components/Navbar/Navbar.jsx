import react, { useEffect, useState } from 'react'
import './navbar.css'
import logo from './../../assets/logo2.jpeg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
   <nav className={`navbar container ${sticky ? 'sticky' : ''}`}>
    <img  className="img"  src={logo} alt="" />
    <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Contect</li>
        

    </ul>
    <div className="navbar-auth">
          <Link to="/login" className="login-link">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
   </nav>
  )
}

export default Navbar
