import React from "react";
import "./PoojaTimings.css";

export default function PoojaTimings() {
  const timings = [
    { label: "Kakad Aarti", time: "6:00 AM", img: "/images/kakad1.jpg" },
    { label: "Madhyana Aarti", time: "12:30 PM", img: "/images/madhya1.jpg" },
    { label: "Dhoop Aarti", time: "6:30 PM", img: "/images/doop1.webp" },
    { label: "Shej Aarti", time: "10:00 PM", img: "/images/shez1.jpg" },
  ];

  return (
    <section id="timings" className="section">
      <div className="container">
        <h2 className="section-title">Daily Pooja Timings</h2>
        <div className="timings-grid">
          {timings.map((t) => (
            <div
              key={t.label}
              className="card timing-card"
              style={{ backgroundImage: `url(${t.img})` }}
            >
              <div className="overlay">
                <h3>{t.label}</h3>
                <p>{t.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
