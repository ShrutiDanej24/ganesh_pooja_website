import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-inner">
          <h1>Shree Ganeshay Namah</h1>
          <p>
            Join us for Ganesh Chaturthi celebrations—Pooja, Aarti & Prasad.
          </p>
          <div className="hero-cta">
            <a href="#timings" className="btn">
              Today’s Aarti Timings
            </a>
            <a href="/events" className="btn btn-outline">
              Festival Schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
