import React from "react";
import "./GalleryGrid.css";

export default function GalleryGrid() {
  const imgs = [
    "/images/gallery/modak-prasad-1.jpg",
    "/images/gallery/aarti-1.jpg",
    "/images/gallery/rangoli-1.jpg",
    "/images/gallery/idol-closeup-1.jpg",
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {imgs.map((src) => (
            <img
              key={src}
              src={src}
              alt="Ganesh festival"
              className="gallery-img"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
