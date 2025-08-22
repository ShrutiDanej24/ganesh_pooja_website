import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Ganesh Pooja</h4>
          <p>May Lord Ganesha remove obstacles and bring wisdom.</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>Shri Siddhivinayak Mandir Road, Your City</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            +91-98765-43210
            <br />
            ganeshpooja@example.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Ganesh Pooja. All rights reserved.
      </div>
    </footer>
  );
}
