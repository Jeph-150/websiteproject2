import React, { useState } from 'react';
import './styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 id="titre">Log in</h1>
        <div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="button-group">
            <Link to="/backUp"><button id="back-Up">Back</button></Link>

            <Link to="/log">
              <button id="login-button" disabled={!email || !password} className={email && password ? '' : 'disabled-button'}>
                Log in
              </button>
            </Link>
          </div>
        </div>
        <div className="signup-link">
          <Link to="/signUp" className="s-Up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
