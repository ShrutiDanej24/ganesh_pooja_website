import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // 👈 add this
import "./Hero.css";

export default function Hero() {
  const [city, setCity] = useState("Pune");
  const [puja, setPuja] = useState("");
  const navigate = useNavigate();   // 👈 hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/booking?city=${city}&puja=${puja}`);   // redirect with params
  };

  return (
    <section className="hero-split">
      <div className="hero-overlay">
        <div className="container hero-grid">
          {/* Left side - text */}
          <div className="hero-text">
    <h1 className="slide-left">
  Book Authentic Poojas <br/> With Trusted Pandits
</h1>



            <p>
              From daily rituals to special ceremonies — easily reserve your
              pooja, seva, or homa online at your temple.
            </p>
            <button
              className="btn"
              onClick={() => navigate("/booking")}   // 👈 go directly to booking page
            >
              Start Booking
            </button>
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

