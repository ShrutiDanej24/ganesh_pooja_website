import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-row">
        <Link to="/" className="brand">
          <img src="/images/icons/om.svg" alt="Om" className="brand-icon" />
          <span>Ganesh Pooja</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/Aarti" className="nav-link">
            Aartis
          </NavLink>
          <NavLink to="/events" className="nav-link">
            Events
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <NavLink to="/packages" className="nav-link">
            Pooja Packages
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
