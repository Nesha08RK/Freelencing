// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Navbar component defined inline within Login page
  const Navbar = () => (
    <nav className="navbar">
      <div className="navbar-logo">SB Works</div>
      <div className="navbar-links">
        <a href="/">Home</a>
      </div>
    </nav>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling login goes here (API call, validation, etc.)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <Navbar /> {/* Navbar at the top of the page */}
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;