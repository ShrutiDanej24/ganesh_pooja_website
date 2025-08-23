import React, { useState } from "react";
import PackagesList from "../components/PackagesList.jsx";
import "./Packages.css";

export default function Packages() {
  const [category, setCategory] = useState("");

  return (
    <section className="section">
      <div className="container">
        <div className="pkg-filter">
          <label>Filter by Category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="shanti">Shanti Pujas</option>
            <option value="pitru">Pitru Puja</option>
            <option value="pujas">Pujas</option>
            <option value="havans">Havans</option>
            <option value="jaaps">Jaaps</option>
            <option value="paths">Paths</option>
            <option value="bhajans">Bhajans & Chowki</option>
            <option value="festival">Festival Pooja</option>
          </select>
        </div>

        {/* Pass category to PackagesList */}
        <PackagesList category={category} />
      </div>
    </section>
  );
}
