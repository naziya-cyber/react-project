import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    // Demo credentials check
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful! Welcome back!');
      navigate('/');
    } else {
      setError('Invalid credentials. Try: user@example.com / password123');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p className="subtitle">Welcome back! Please login to your account.</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
          </div>

          <button onClick={handleSubmit} className="login-btn">Login</button>
        </div>

       
      </div>
    </div>
  );
};

export default Login;