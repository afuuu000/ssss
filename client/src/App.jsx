import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Featured from "./components/sections/Featured";
import Testimonials from "./components/sections/Testimonials";
import DubaiFunds from "./components/sections/DubaiFunds";
import SaudiFunds from "./components/sections/SaudiFunds";
import Trust from "./components/sections/Trust";
import CTA from "./components/sections/CTA";
import Stats from "./components/sections/Stats";
import HowToMakeMoney from "./components/sections/HowToMakeMoney";
import ReviewCarousel from "./components/sections/ReviewCarousel";
import AgeVerificationPopup from "./components/AgeVerificationPopup";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Set to true by default to ensure it shows on page load
  const [showAgeVerification, setShowAgeVerification] = useState(true);

  // Add/remove overflow-hidden to body when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Force popup to display on first render
    const ageVerified = localStorage.getItem("ageVerified");
    console.log("Age verified status:", ageVerified);

    // Clear localStorage for testing purposes - remove this in production
    // localStorage.removeItem("ageVerified");

    if (ageVerified === "true") {
      console.log("User already verified age, not showing popup");
      setShowAgeVerification(false);
    } else {
      console.log("User has not verified age, showing popup");
      setShowAgeVerification(true);
    }
  }, []);

  const closeAgeVerification = () => {
    console.log("Closing age verification popup");
    setShowAgeVerification(false);
  };

  return (
    <>
      {/* Age verification popup */}
      {showAgeVerification && (
        <AgeVerificationPopup onClose={closeAgeVerification} />
      )}

      <Router>
        <div className="min-h-screen flex flex-col font-jakarta">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main className="flex-grow">
            <Hero />
            <Featured />
            <HowItWorks />
            <Stats />
            <DubaiFunds />
            <SaudiFunds />
            <HowToMakeMoney />
            <Trust />
            <Testimonials />
            <ReviewCarousel />
            <CTA />
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
