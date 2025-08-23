import React from "react";
import packages from "../data/packages";
import "./PackagesList.css";

export default function PackagesList({ category }) {
  // Filter packages based on category
  const filtered = category
    ? packages.filter((p) => p.category === category)
    : packages;

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Pooja Packages</h2>
        <div className="pkg-grid">
          {filtered.map((p) => (
            <article key={p.id} className="card pkg-card">
              <img className="pkg-img" src={p.img} alt={p.title} />
              <div className="pkg-body">
                <h3 className="pkg-title">{p.title}</h3>
                <div className="pkg-meta">
                  <span className="pkg-price">{p.price}</span>
                  <span className="pkg-duration">{p.duration}</span>
                </div>
                <ul className="pkg-list">
                  {p.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <div className="pkg-actions">
                  <a className="btn" href="/contact">Book Now</a>
                  <button
                    className="btn btn-outline"
                    onClick={() => alert(`Details for ${p.title}`)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
