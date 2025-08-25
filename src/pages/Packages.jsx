import React, { useState } from "react";
import PackagesList from "../components/PackagesList.jsx";
import "./Packages.css";

export default function Packages() {
  const [category, setCategory] = useState("");

  return (
    <section className="section">
      {/* HERO / BANNER */}
      <div className="pooja-hero">
        <div className="pooja-hero__overlay" />
        <div className="container pooja-hero__content">
          <h1 className="pooja-hero__title">Pujas</h1>

          <div className="pooja-hero__controls">
            <label htmlFor="poojaCategory" className="sr-only">
              Filter by Category
            </label>
            <select
              id="poojaCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="pooja-hero__select"
            >
              <option value="">All Categories</option>
              <option value="shanti">Shanti Pujas</option>
              <option value="pitru">Pitru Puja</option>
              <option value="pujas">Pujas</option>
              <option value="havans">Havans</option>
              {/* <option value="jaaps">Jaaps</option>
              <option value="paths">Paths</option>
              <option value="bhajans">Bhajans &amp; Chowki</option>
              <option value="festival">Festival Pooja</option> */}
            </select>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="container">
        <PackagesList category={category} />
      </div>
    </section>
  );
}
