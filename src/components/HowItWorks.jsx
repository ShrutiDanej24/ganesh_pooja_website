import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="section how">
      <div className="container how-grid">
        <div>
          <h2>
            How <span className="brand">Online Pooja Booking</span> Works
          </h2>
          <p>
            Choose your pooja or seva, select a convenient date and time, and share
            basic details like name and phone. You’ll receive an instant confirmation
            with a booking ID. Materials can be arranged by the temple where applicable.
          </p>

          <div className="how-bullets">
            <div><b>Verified Pandits</b> — experienced and trustworthy</div>
            <div><b>All Samagri Included</b> (where listed) — no last-minute rush</div>
            <div><b>Multilingual Support</b> — Hindi, Marathi, Kannada, etc.</div>
            <div><b>Transparent Pricing</b> — taxes & fees shown upfront</div>
          </div>

          <a href="/packages" className="btn">Explore Poojas</a>
        </div>
      </div>
    </section>
  );
}
