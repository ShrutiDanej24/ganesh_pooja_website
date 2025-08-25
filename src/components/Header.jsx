import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Header() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="container header-row">
        <Link to="/" className="brand">
          <img src="/images/icons/logo.jpg" alt="Om" className="brand-icon" />
          <span></span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/about" className="nav-link">
            ABOUT US
          </NavLink>
          {/* <NavLink to="/Aarti" className="nav-link">
            Aartis
          </NavLink> */}
          <NavLink to="/events" className="nav-link">
            EVENTS
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <NavLink to="/packages" className="nav-link">
            PUJAS
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            CONTACT US
          </NavLink>
        </nav>

        {/* Theme Toggle Button */}
        {/* <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
        >
          {dark ? "🌙" : "☀️"}
        </button> */}
      </div>
    </header>
  );
}
