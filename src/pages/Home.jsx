import React from "react";
import Hero from "../components/Hero.jsx";
import PoojaTimings from "../components/PoojaTimings.jsx";
import SevaList from "../components/SevaList.jsx";
import "./Home.css";
import HowItWorks from "../components/HowItWorks.jsx";
import Services from "../components/Services.jsx";
import UpcomingEvents from "../components/UpcomingEvents.jsx";
import WhatYouGet from "../components/WhatYouGet.jsx";
export default function Home() {
  return (
    <>
      <Hero />

      <HowItWorks />

      {/* Intro section */}

      <div className="home-sections">
        <Services />
        <UpcomingEvents />
        <WhatYouGet />
      </div>
    </>
  );
}
