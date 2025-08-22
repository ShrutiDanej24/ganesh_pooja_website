import React from "react";
import "./SevaList.css";

export default function SevaList() {
  const sevas = [
    { name: "Modak Prasad", price: "₹101" },
    { name: "Ganesh Aarti Sponsorship", price: "₹501" },
    { name: "Laddu Bhog", price: "₹251" },
    { name: "Archana", price: "₹151" },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Offer Seva</h2>
        <div className="seva-grid">
          {sevas.map((s) => (
            <div className="card seva-card" key={s.name}>
              <h3>{s.name}</h3>
              <div className="seva-meta">
                <span className="price">{s.price}</span>
                <button className="btn">Contribute</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
