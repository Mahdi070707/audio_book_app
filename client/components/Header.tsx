import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="d-flex justify-content-between align-items-center py-3 px-4 shadow-sm"
      style={{
        backgroundColor: "var(--navy)",
        color: "var(--cream)",
        fontFamily: "Sublima",
        fontSize: "115%",
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "auto", height: "100px", marginRight: "10px" }}
        />
        <Link
          to="/"
          className="text-decoration-none fs-3 fw-bold"
          style={{ color: "var(--cream)", fontFamily: "Sublima" }}
        >
          audiophile
        </Link>
      </div>

      <div className="d-flex align-items-center">
        <Link
          to="/Ai"
          className="text-decoration-none fs-3 mx-3"
          style={{ color: "var(--cream)" }}
        >
          <i className="bi bi-robot"></i>
        </Link>

        <div
          className="dropdown"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ position: "relative" }}
        >
          <button
            className="btn dropdown-toggle"
            style={{ color: "var(--cream)", fontFamily: "Sublima" }}
          >
            Menu <i className="bi bi-list"></i>
          </button>

          <ul
            className={`dropdown-menu${isOpen ? " show" : ""}`}
            style={{
              backgroundColor: "var(--cream)",
              color: "var(--navy)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              right: 0,
            }}
          >
            <li>
              <Link
                to="/"
                className="dropdown-item"
                style={{ fontFamily: "Sublima" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="dropdown-item"
                style={{ fontFamily: "Sublima" }}
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="dropdown-item"
                style={{ fontFamily: "Sublima" }}
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
