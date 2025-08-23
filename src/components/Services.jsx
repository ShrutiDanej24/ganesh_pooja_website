import React from "react";
import "./Services.css";

const services = [
  {
    title: "Puja",
    img: "/images/pujaservice.jpg",
    link: "/packages?cat=puja",
  },
  {
    title: "E‑Puja",
    img: "/images/epoojaservice.jpg",
    link: "/packages?cat=epuja",
  },
  {
    title: "Astrology",
    img: "/images/astrologyservice.jpg",
    link: "/astrology",
  },
  {
    title: "Other services",
    img: "/images/otherservice.jpg",
    link: "/services",
  },
];

export default function Services() {
  return (
    <section className="services-sec">
      <div className="container">
        <div className="services-head">
          <h2>
            We provide a range of <span className="brand">services</span>
          </h2>
          <p className="subtitle">
            Book online for a sacred, hassle‑free puja ceremony
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <a className="service-card" href={s.link} key={s.title}>
              <div
                className="service-image"
                style={{ backgroundImage: `url(${s.img})` }}
                aria-label={s.title}
              />
              <div className="service-label">{s.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
