import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Events from "../pages/Events.jsx";
import Gallery from "../pages/Gallery.jsx";
import Packages from "../pages/Packages.jsx";
import Contact from "../pages/Contact.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Aarti from "../pages/Aarti.jsx";
import BookingPage from "../pages/Booking/index.jsx";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/aarti" element={<Aarti />} />
      <Route path="/booking" element={<BookingPage />} /> {/* 👈 new */}
    </Routes>
  );
}
