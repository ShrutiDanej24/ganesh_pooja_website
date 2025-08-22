import React from "react";
import Hero from "../components/Hero.jsx";
import PoojaTimings from "../components/PoojaTimings.jsx";
import SevaList from "../components/SevaList.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home-sections">
        <PoojaTimings />
        <SevaList />
      </div>
    </>
  );
}
