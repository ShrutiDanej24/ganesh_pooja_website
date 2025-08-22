import React from "react";
import "./EventSchedule.css";

export default function EventSchedule() {
  const rows = [
    {
      date: "Aug 28",
      title: "Murti Sthapana & Pranapratishtha",
      time: "7:00 AM",
    },
    { date: "Aug 29", title: "Sahastranaam Archana", time: "6:00 PM" },
    { date: "Aug 31", title: "Maha Aarti & Bhajans", time: "7:00 PM" },
    { date: "Sep 01", title: "Visarjan Procession", time: "5:00 PM" },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Festival Schedule</h2>
        <div className="event-table card">
          <div className="event-row header">
            <span>Date</span>
            <span>Event</span>
            <span>Time</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="event-row">
              <span>{r.date}</span>
              <span>{r.title}</span>
              <span>{r.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
