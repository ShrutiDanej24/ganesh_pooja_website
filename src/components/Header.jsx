import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Header() {
  const { dark, setDark } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-row">
        <Link to="/" className="brand">
          <img src="/images/icons/logo.jpg" alt="Om" className="brand-icon" />
          <span></span>
        </Link>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </NavLink>
          <NavLink to="/events" className="nav-link" onClick={() => setMenuOpen(false)}>
            EVENTS
          </NavLink>
          <NavLink to="/gallery" className="nav-link" onClick={() => setMenuOpen(false)}>
            GALLERY
          </NavLink>
          <NavLink to="/packages" className="nav-link" onClick={() => setMenuOpen(false)}>
            PUJAS
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            CONTACT US
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
