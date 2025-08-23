import React, { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [city, setCity] = useState("Pune"); // default city
  const [puja, setPuja] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just redirect to booking page with params
    window.location.href = `/booking?city=${city}&puja=${puja}`;
  };

  return (
    <section className="hero-split">
      <div className="hero-overlay">
        <div className="container hero-grid">
          {/* Left side - text */}
          <div className="hero-text">
            <h1>Book Authentic Poojas With Trusted Pandits</h1>
            <p>
              From daily rituals to special ceremonies — easily reserve your
              pooja, seva, or homa online at your temple.
            </p>
            <button className="btn">Start Booking</button>
          </div>

          {/* Right side - booking form */}
          <div className="hero-form-card">
            <h3>Find & Book a Pooja in {city}</h3>
            <form onSubmit={handleSubmit}>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input"
              >
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>

              <input
                type="text"
                placeholder="Enter pooja name (e.g. Satyanarayan)"
                value={puja}
                onChange={(e) => setPuja(e.target.value)}
                className="input"
              />

              <button type="submit" className="btn btn-primary">
                Reserve Slot
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
