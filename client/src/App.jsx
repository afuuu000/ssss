import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import DubaiFunds from "./components/sections/DubaiFunds";
import SaudiFunds from "./components/sections/SaudiFunds";
import Trust from "./components/sections/Trust";
import CTA from "./components/sections/CTA";
import Stats from "./components/sections/Stats";
import HowToMakeMoney from "./components/sections/HowToMakeMoney";
import ReviewCarousel from "./components/sections/ReviewCarousel";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-jakarta">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="flex-grow">
          <Hero />
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
  );
}

export default App;
