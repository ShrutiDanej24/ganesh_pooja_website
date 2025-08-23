import React from "react";
import aartis from "../data/aartis";
import './Aartis.css'
export default function Aarti() {
  return (
    <section className="aarti-sec container">
      <h2 className="section-title">Daily Aartis</h2>
      <div className="aarti-grid">
        {aartis.map((aarti) => (
          <div className="aarti-card" key={aarti.id}>
            <div
              className="aarti-thumb"
              style={{ backgroundImage: `url(${aarti.img})` }}
            ></div>
            <div className="aarti-body">
              <h3>{aarti.title}</h3>
              <p>⏱ {aarti.duration}</p>
              <p>📖 {aarti.language}</p>
              {aarti.lyrics && (
                <a href={aarti.lyrics} className="lyrics-link">
                  View Lyrics
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
