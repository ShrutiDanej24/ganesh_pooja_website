import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* About */}
        <div className="footer-col">
          <h4>About Puja Services</h4>
          <p>
            Puja Services is the leading digital platform for all Hindu
            devotional needs and spiritual services.
          </p>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/booking">Online Puja Booking</a>
            </li>
            <li>
              <a href="/packages">Temple Puja Booking</a>
            </li>
            <li>
              <a href="/contact">Priest Booking</a>
            </li>
            <li>
              <a href="/about">Vedic Ashirvaad</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Upcoming Pujas */}
        <div className="footer-col">
          <h4>Upcoming Pujas</h4>
          <div className="puja-item">
            <img src="/images/footer/devi.jpg" alt="MangalaGouri" />
            <span>
              Mangalagouri Vratham
              <small>
                <FaRegCalendarAlt className="cal-icon" />
                Every Tuesday
              </small>
            </span>
          </div>
          <div className="puja-item">
            <img src="/images/footer/somvar.jpg" alt="Sravana" />
            <span>
              Sravana Somavaram
              <small>
                <FaRegCalendarAlt className="cal-icon" />
                Every Monday
              </small>
            </span>
          </div>
        </div>

        {/* Subscribe */}
        <div className="footer-col">
          <h4>Subscribe for Divine Updates!</h4>
          <p>
            Stay informed about upcoming pujas, spiritual insights, and
            blessings. Join us and keep your devotion alive!
          </p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Puja Services | Privacy / Terms &amp;
          Conditions / Contact
        </p>
      </div>
    </footer>
  );
}
