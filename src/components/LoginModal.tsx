import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { handleLogin } from "../utils/login";
import { handleRegister } from "../utils/register";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [subscribe, setSubscribe] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login/Register</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            <a href="#" className="ms-3" onClick={() => setShowRegister(true)}>Register</a>
          </div>
          <div className="modal-body">
            {showRegister ? (
              <form onSubmit={(evenimport React, { useState } from 'react';

                const Login = () => {
                  const [username, setUsername] = useState('');
                  const [password, setPassword] = useState('');
                  const [error, setError] = useState('');
                
                  const handleLogin = async (
                    event: React.FormEvent,
                    subscribe: boolean,
                    onClose: () => void
                  ) => {
                    event.preventDefault();
                    const form = event.target as HTMLFormElement;
                    const email = (form.elements.namedItem('username') as HTMLInputElement).value;
                    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
                
                    console.log('Form submitted with:', { email, password, subscribe });
                
                    try {
                      const response = await fetch('/login', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                      });
                
                      const data = await response.json();
                      console.log('Login response:', data);
                
                      if (data.message === 'Login successful') {
                        if (subscribe) {
                          const subscribeResponse = await fetch('/subscribe', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email }),
                          });
                          const subscribeData = await subscribeResponse.json();
                          console.log('Subscribe response:', subscribeData);
                        }
                        onClose();
                      } else {
                        setError('Invalid email or password');
                        console.log('Login failed:', data.message);
                      }
                    } catch (error) {
                      console.error('Error logging in:', error);
                      setError('An error occurred. Please try again.');
                    }
                  };
                
                  return (
                    <div>
                      <h2>Login</h2>
                      <form onSubmit={(e) => handleLogin(e, false, () => {})}>
                        <div>
                          <label htmlFor="username">Username:</label>
                          <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="password">Password:</label>
                          <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit">Login</button>
                      </form>
                    </div>
                  );
                };
                
                export default Login;
                t) => handleRegister(event, onClose)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            ) : (
              <form onSubmit={(event) => handleLogin(event, subscribe, onClose)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    id="subscribe"
                    className="form-check-input"
                    checked={subscribe}
                    onChange={() => setSubscribe(!subscribe)}
                  />
                  <label htmlFor="subscribe" className="form-check-label">
                    Subscribe to newsletter
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;