import React from "react";
import "./WhatYouGet.css";

const items = [
  {
    icon: "/images/whatyouget/live.png",
    desc: "Experience live Puja conveniently from home",
  },
  {
    icon: "/images/whatyouget/pandit.jpg",
    desc: "Conducted with utmost sanctity by veda pandits",
  },
  {
    icon: "/images/whatyouget/prasad.webp",
    desc: "Sacred prasad from the puja will be delivered",
  },
  {
    icon: "/images/whatyouget/booking.webp",
    desc: "24x7 Support for booking and ritual guidance",
  },
  {
    icon: "/images/whatyouget/rituals.png",
    desc: "Customizable rituals based on traditions",
  },
];

export default function WhatYouGet() {
  return (
    <section className="whatyouget">
      <div className="container">
        <h2 className="section-title">
          <b>What You</b> <span className="highlight">Get</span>
        </h2>

        <span className="underline"></span>

        <div className="wy-grid">
          {items.map((item, idx) => (
            <div className="wy-cell" key={idx}>
              <img src={item.icon} alt={item.desc} />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
