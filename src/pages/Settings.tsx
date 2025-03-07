import React, { useState } from "react";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings: React.FC = () => {
  const [email, ] = useState("your-email@example.com");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="container mt-5 text-white" style={{ backgroundColor: "var(--navy)", minHeight: "100vh", padding: "20px", borderRadius: "10px" }}>
      <h2 className="mb-4">Settings</h2>
      
      <div className="mb-3">
        <label className="form-label">Your Email:</label>
        <input 
          type="email" 
          className="form-control" 
          value={email} 
          readOnly
          style={{ backgroundColor: "var(--light-gray)", color: "var(--charcoal)" }}
        />
      </div>

      <div className="form-check mb-3">
        <input 
          type="checkbox" 
          className="form-check-input" 
          id="emailSubscription" 
          checked={subscribed} 
          onChange={() => setSubscribed(!subscribed)} 
        />
        <label className="form-check-label" htmlFor="emailSubscription">
          Subscribe to Email List
        </label>
      </div>

      <div className="mb-4">
        <label className="form-label">Preferences:</label>
        <select className="form-select" style={{ backgroundColor: "var(--light-gray)", color: "var(--charcoal)" }}>
          <option>Dark Mode</option>
          <option>Light Mode</option>
          <option>Auto-Play Next Chapter</option>
          <option>Disable Auto-Play</option>
        </select>
      </div>

      <button className="btn w-100 mb-2" style={{ backgroundColor: "var(--burnt-orange)", color: "white" }}>
        Delete Account
      </button>
      
      <button className="btn btn-secondary w-100">Logout</button>
    </div>
  );
};

export default Settings;
