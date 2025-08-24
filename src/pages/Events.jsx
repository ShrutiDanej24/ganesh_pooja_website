import React from "react";
import "./Events.css";

const events = [
  {
    title: "Ganesh Chaturthi",
    date: "Sep 7, 2024",
    day: "07",
    dow: "Saturday",
    desc: "Festival of Lord Ganesha with sthapana, aarti and visarjan.",
    img: "/images/UpcomingEvents/ganesh.jpg",
  },
  {
    title: "Navratri",
    date: "Oct 3–12, 2024",
    day: "03",
    dow: "Thu",
    desc: "Nine nights of Devi worship, garba/dandiya and special pujas.",
    img: "/images/UpcomingEvents/navratri.jpg",
  },
  {
    title: "Dussehra (Vijayadashami)",
    date: "Oct 12, 2024",
    day: "12",
    dow: "Saturday",
    desc: "Victory of dharma; shastra/ayudha puja and processions.",
    img: "/images/UpcomingEvents/dushera.jpg",
  },
  {
    title: "Diwali",
    date: "Oct 31–Nov 4, 2024",
    day: "31",
    dow: "Thu",
    desc: "Festival of lights; Lakshmi Puja, sweets, and diyas.",
    img: "/images/UpcomingEvents/diwali.jpg",
  },
  {
    title: "Makar Sankranti",
    date: "Jan 14, 2025",
    day: "14",
    dow: "Tuesday",
    desc: "Uttarayan begins; tilgul exchange and special pujas.",
    img: "/images/UpcomingEvents/sankranti.jpg",
  },
  {
    title: "Mahashivratri",
    date: "Feb 26, 2025",
    day: "26",
    dow: "Wednesday",
    desc: "Night-long Shiva abhisheks and jaagran.",
    img: "/images/UpcomingEvents/shiva.jpg",
  },
  {
    title: "Rama Navami",
    date: "Apr 6, 2025",
    day: "06",
    dow: "Sunday",
    desc: "Birth of Lord Rama; recitations and bhajans.",
    img: "/images/UpcomingEvents/ram.jpg",
  },
  {
    title: "Janmashtami",
    date: "Aug 16, 2025",
    day: "16",
    dow: "Saturday",
    desc: "Krishna janma, matki-phod, and midnight aarti.",
    img: "/images/UpcomingEvents/krishna.jpg",
  },
];

export default function Events() {
  return (
    <section className="events-page">
      {/* Full-width Hero */}
      <div className="events-hero">
        <h2 className="page-title">Events & Festivals</h2>
        <p className="page-subtitle">
          Famous events and festivals you must experience
        </p>
      </div>

      {/* Container for Events */}
      <div className="container">
        <div className="events-grid">
          {events.map((e) => (
            <article className="event-card" key={e.title}>
              <div className="event-thumb">
                <img src={e.img} alt={e.title} />
              </div>

              <div className="event-body">
                <div className="event-title-row">
                  <h3 className="event-title">{e.title}</h3>
                  <div className="date-pill">
                    <span className="d">{e.day}</span>
                    <span className="w">{e.dow}</span>
                  </div>
                </div>
                <div className="event-date">{e.date}</div>
                <p className="event-desc">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
