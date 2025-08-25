import React from "react";
import "./AboutUs.css";

export default function About() {
  return (
    <>
      {/* About */}
      <section className="about section">
        <div className="container about-grid">
          {/* Image */}
          <div className="about-img">
            <img src="/images/temple.avif" alt="Temple and rituals" />
          </div>

          {/* Copy */}
          <div className="about-text">
            <h2>About Us</h2>

            <p>
              We are a devotee‑first platform that makes it simple to book
              authentic <strong>Vedic poojas, homas, and sevas</strong> with
              verified priests—whether at the temple or at home.
            </p>

            <p>
              Our services span{" "}
              <strong>all major deities and traditions</strong>: Shiva
              (Rudrabhishek), Vishnu/Satyanarayan, Devi/Durga, Ganesh,
              Navagraha, Lakshmi, Hanuman, Griha‑pravesh, Bhoomi‑puja,
              Graha‑shanti, Shraddh/Pitru‑karya and more—aligned to your
              regional customs and the temple’s guidelines.
            </p>

            <ul className="about-list">
              <li>✔ Verified, experienced priests with proper vidhi</li>
              <li>✔ Temple & home ceremonies (as permitted)</li>
              <li>✔ Samagri arrangement options; clear instructions</li>
              <li>✔ Multiple languages (Hindi, Marathi, Kannada, English)</li>
              <li>✔ Transparent steps, reminders & digital confirmation</li>
            </ul>

            <p>
              We’re not tied to one deity or festival. Year‑round, we support
              daily poojas and seasonal observances like <em>Navratri</em>,
              <em> Dussehra</em>, <em> Diwali</em>, <em> Makar Sankranti</em>,
              <em> Mahashivratri</em>, and more—so your family’s rituals are
              organized, serene, and truly devotional.
            </p>

            <p>
              Our commitment is simple:{" "}
              <strong>
                authentic rituals, clear guidance, and a smooth booking
                experience
              </strong>
              —so you can focus on prayer, not logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container vm-grid">
          <div className="vm-card">
            <div className="vm-icon" aria-hidden>
              ❤️
            </div>
            <h3>Our Vision</h3>
            <p>
              To inspire and instill devotion in future generations toward Hindu
              Dharma through advanced technology.
            </p>
          </div>

          <div className="vm-card">
            <div className="vm-icon" aria-hidden>
              📖
            </div>
            <h3>Our Mission</h3>
            <p>
              To bring all Spiritual Services and Traditions of Hindu Dharma
              onto a Single Digital Platform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
