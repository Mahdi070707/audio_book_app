import React, { useState, useEffect } from "react";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pencil } from "react-bootstrap-icons";

const Settings: React.FC = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "John Doe");
  const [email] = useState("your-email@example.com");
  const [subscribed, setSubscribed] = useState(localStorage.getItem("subscribed") === "true");
  const [playbackSpeed, setPlaybackSpeed] = useState(localStorage.getItem("playbackSpeed") || "Normal");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Dark Mode");
  const [subscription, setSubscription] = useState(localStorage.getItem("subscription") || "None");
  const [editingName, setEditingName] = useState(false);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("subscribed", subscribed.toString());
    localStorage.setItem("playbackSpeed", playbackSpeed);
    localStorage.setItem("theme", theme);
    localStorage.setItem("subscription", subscription);
  }, [name, subscribed, playbackSpeed, theme, subscription]);

  useEffect(() => {
    document.documentElement.style.setProperty("--background", theme === "Dark Mode" ? "var(--navy)" : "var(--cream)");
    document.documentElement.style.setProperty("--text-color", theme === "Dark Mode" ? "white" : "var(--charcoal)");
  }, [theme]);

  const handleSubscriptionChange = () => {
    if (!subscribed || window.confirm("Are you sure you want to unsubscribe from the email list?")) {
      setSubscribed(!subscribed);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center" style={{ backgroundColor: "var(--background)", color: "var(--text-color)", minHeight: "100vh", padding: "50px 0" }}>
      <div className="w-75">
        <h2 className="mb-4 text-center">Settings</h2>
        
        <div className="mb-4 d-flex align-items-center">
          <h5 className="mb-1 me-2">Your Name:</h5>
          {editingName ? (
            <input 
              type="text" 
              className="form-control w-50" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              onBlur={() => setEditingName(false)}
              autoFocus
            />
          ) : (
            <span style={{ fontSize: "1.2rem" }}>{name}</span>
          )}
          <button className="btn btn-outline-light ms-2" onClick={() => setEditingName(true)}>
            <Pencil />
          </button>
        </div>

        <div className="mb-4">
          <h5 className="mb-1">Your Email:</h5>
          <p style={{ fontSize: "1.2rem" }}>{email}</p>
        </div>

        <div className="mb-4">
          <h5 className="mb-2">Email Preferences</h5>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="emailSubscription" 
              checked={subscribed} 
              onChange={handleSubscriptionChange} 
            />
            <label className="form-check-label" htmlFor="emailSubscription">
              Subscribe to Email List
            </label>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="mb-2">Playback Speed</h5>
          <select className="form-select" value={playbackSpeed} onChange={(e) => setPlaybackSpeed(e.target.value)}>
            <option>Slow</option>
            <option>Normal</option>
            <option>Fast</option>
          </select>
        </div>

        <div className="mb-4">
          <h5 className="mb-2">Theme</h5>
          <select className="form-select" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option>Dark Mode</option>
            <option>Light Mode</option>
          </select>
        </div>

        <div className="mb-4">
          <h5 className="mb-2">Subscription Plan</h5>
          <div className="d-flex gap-3">
            <div 
              className={`p-3 border rounded text-center w-50 ${subscription === "Basic" ? "bg-primary text-white" : "bg-light text-dark"}`}
              style={{ cursor: "pointer" }}
              onClick={() => setSubscription("Basic")}
            >
              <h6>Basic</h6>
              <p>$2.99/month</p>
            </div>
            <div 
              className={`p-3 border rounded text-center w-50 ${subscription === "Premium" ? "bg-primary text-white" : "bg-light text-dark"}`}
              style={{ cursor: "pointer" }}
              onClick={() => setSubscription("Premium")}
            >
              <h6>Premium</h6>
              <p>$5.00/month</p>
            </div>
          </div>
          {subscription !== "None" && (
            <button className="btn btn-success w-100 mt-3">Checkout</button>
          )}
        </div>

        <button className="btn w-100 mb-3" style={{ backgroundColor: "var(--burnt-orange)", color: "white" }}>
          Delete Account
        </button>
        
        <button className="btn btn-secondary w-100">Logout</button>
      </div>
    </div>
  );
};

export default Settings;