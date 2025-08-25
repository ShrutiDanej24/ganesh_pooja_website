import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks, ${form.name}! We will reach out shortly.`);
  }

  return (
    <section className="section">
      <div className="container contact-wrap">
        <div className="card contact-card">
          <h2>Get in touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="card contact-side">
          <h3>Temple Address</h3>
          <p>Shri Siddhivinayak Mandir Road, Pune City</p>
          <h3>Phone</h3>
          <p>+91-98765-43210</p>
          <h3>Email</h3>
          <p>satkarmaseva@example.com</p>
        </div>
      </div>
    </section>
  );
}
