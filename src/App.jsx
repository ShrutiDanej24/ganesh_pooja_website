import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
      <Link className="floating-cta btn" to="/contact" aria-label="Contact">
        Book a Pooja
      </Link>
    </div>
  );
}
