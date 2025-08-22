import React from "react";
import "./PoojaTimings.css";

export default function PoojaTimings() {
  const timings = [
    { label: "Kakad Aarti", time: "6:00 AM" },
    { label: "Madhyana Aarti", time: "12:30 PM" },
    { label: "Dhoop Aarti", time: "6:30 PM" },
    { label: "Shej Aarti", time: "10:00 PM" },
  ];
  return (
    <section id="timings" className="section">
      <div className="container">
        <h2 className="section-title">Daily Pooja Timings</h2>
        <div className="timings-grid">
          {timings.map((t) => (
            <div key={t.label} className="card timing-card">
              <h3>{t.label}</h3>
              <p>{t.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
