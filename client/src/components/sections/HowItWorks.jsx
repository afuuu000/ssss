import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import sideImg2 from "../../assets/images/marinapull.avif";
import sideImg3 from "../../assets/images/burjkhalifa.avif";
import pakisland from "../../assets/images/pakislands.png";

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0); // Start with first section active
  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();

  // Track scroll position to determine which section is active
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRect.height;
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;

      // Check if section is in view - start animation when section top reaches 1/3 of viewport height
      const sectionInView = sectionTop < windowHeight / 3;
      setHasScrolledToSection(sectionInView);

      // Calculate scroll position relative to the section
      if (sectionInView) {
        // Calculate progress based on how far we've scrolled into the section
        // This starts at 0 when section is at 1/3 of viewport and reaches 1 when we've scrolled through the section
        const scrolledAmount = Math.min(
          sectionHeight * 0.7, // Only use 70% of section height for scroll progress
          Math.max(0, windowHeight / 3 - sectionTop)
        );

        const progress = scrolledAmount / (sectionHeight * 0.7);
        setScrollProgress(Math.min(1, Math.max(0, progress)));

        // Determine which step is active based on progress
        const newActiveSection = Math.min(3, Math.floor(progress * 4));
        setActiveSection(newActiveSection);
      } else {
        // Reset when section is not in view
        setScrollProgress(0);
        setActiveSection(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define steps data
  const steps = [
    {
      title: "Browse",
      subtitle: "Access prime real estate across multiple markets",
      description:
        "Sign up in less than 3 minutes and browse our collection of global properties and funds, sourced by experts",
      mainImage: pakisland,
      bgColor: "#30D48C",
    },
    {
      title: "Invest",
      subtitle: "Grab a piece of the ones you love, from only AED 500",
      description:
        "Skip the hassle, and buy shares in your favourite deals, no matter where you are in the world.",
      mainImage: pakisland,
      bgColor: "#1A2049",
    },
    {
      title: "Earn",
      subtitle: "Enjoy regular passive income with no effort",
      description:
        "Sit back and earn consistent rental income from your brand new real estate portfolio",
      mainImage: pakisland,
      bgColor: "#FFC947",
    },
    {
      title: "Sell",
      subtitle: "Tap into liquidity when you need it most",
      description:
        "Realise your full investment appreciation at maturity or take early profits by selling within our community",
      mainImage: pakisland,
      bgColor: "#4E63BD",
    },
  ];

  // Calculate finer-grained progress for animations
  const sectionProgress = scrollProgress * 4;
  const currentSectionProgress = sectionProgress - activeSection;

  // Calculate text positions based on active section and scroll progress
  const getTextStyles = (index) => {
    // If not scrolled to the section yet, position all texts below except first one
    if (!hasScrolledToSection) {
      if (index === 0) {
        return {
          transform: "translateY(0)",
          opacity: 1,
        };
      } else {
        return {
          transform: "translateY(100%)",
          opacity: 0,
        };
      }
    }

    // Current visible section
    if (index === activeSection) {
      return {
        transform: `translateY(${-100 * currentSectionProgress}%)`,
        opacity: 1 - currentSectionProgress,
      };
    }
    // Next section coming in
    else if (index === activeSection + 1) {
      return {
        transform: `translateY(${100 - 100 * currentSectionProgress}%)`,
        opacity: currentSectionProgress,
      };
    }
    // Previous sections (already scrolled past)
    else if (index < activeSection) {
      return {
        transform: "translateY(-100%)",
        opacity: 0,
      };
    }
    // Future sections (not visible yet)
    else {
      return {
        transform: "translateY(100%)",
        opacity: 0,
      };
    }
  };

  return (
    <>
      {/* Fixed viewport height section for steps */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center py-20 bg-white overflow-hidden"
        style={{ height: "calc(100vh + 400px)" }} // Extra height to enable scrolling through steps
      >
        <div className="sticky top-0 left-0 w-full h-screen flex items-center z-10">
          <div className="container mx-auto px-4 max-w-[1200px]">
            {/* Section title */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Build your real estate portfolio in a few simple steps
              </p>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left side - Scrolling text sections */}
              <div className="relative h-[450px] overflow-hidden">
                {steps.map((step, index) => {
                  const styles = getTextStyles(index);

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700 ease-in-out"
                      style={styles}
                    >
                      <div className="mb-6">
                        <h3 className="text-[#41CE8E] text-xl font-medium mb-4">
                          {step.title}
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                          {step.subtitle}
                        </h2>
                        <p className="text-gray-600 text-lg">
                          {step.description}
                        </p>
                      </div>

                      {/* App store buttons - only for first section */}
                      {index === 0 && (
                        <div className="flex gap-3 mt-6">
                          <a href="#" className="h-14 w-[130px]">
                            <img
                              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                              alt="Download on App Store"
                              className="h-full w-full object-contain"
                            />
                          </a>
                          <a href="#" className="h-14 w-[160px]">
                            <img
                              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                              alt="Get it on Google Play"
                              className="h-full w-full object-contain"
                            />
                          </a>
                        </div>
                      )}

                      {/* Payment methods - only for second section */}
                      {index === 1 && (
                        <div className="flex gap-3 mt-6">
                          <div className="flex items-center space-x-4">
                            <img
                              src="https://placeholder.pics/svg/48/000000/FFFFFF/VISA"
                              alt="Visa"
                              className="h-8"
                            />
                            <img
                              src="https://placeholder.pics/svg/48/000000/FFFFFF/MASTERCARD"
                              alt="Mastercard"
                              className="h-8"
                            />
                            <img
                              src="https://placeholder.pics/svg/48/000000/FFFFFF/APPLEPAY"
                              alt="Apple Pay"
                              className="h-8"
                            />
                          </div>
                        </div>
                      )}

                      {/* Wallet info - only for third section */}
                      {index === 2 && (
                        <div className="flex items-center gap-2 mt-6 text-gray-700">
                          <svg
                            className="w-6 h-6 text-[#41CE8E]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path
                              fillRule="evenodd"
                              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Paid directly to your Stake wallet</span>
                        </div>
                      )}

                      {/* Exit windows - only for fourth section */}
                      {index === 3 && (
                        <div className="space-y-4 mt-6">
                          <div className="flex items-center gap-2 text-gray-700">
                            <svg
                              className="w-6 h-6 text-[#41CE8E]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Sell during our Exit Windows</span>
                            <span className="ml-auto text-sm bg-[#e8f9f1] text-[#41CE8E] px-2 py-1 rounded-full">
                              Every 6 months
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <svg
                              className="w-6 h-6 text-[#41CE8E]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Full sale of properties and funds</span>
                            <span className="ml-auto text-sm bg-[#e8f9f1] text-[#41CE8E] px-2 py-1 rounded-full">
                              2-5 year holding terms
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right side - Fixed image section that changes */}
              <div ref={imagesRef} className="relative h-[500px]">
                {/* Browse section - Green background */}
                <div
                  className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                    activeSection === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="pl-6 w-full relative">
                    <div
                      className="max-h-[456px] max-w-[548px] rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden"
                      style={{ backgroundColor: "#30D48C" }}
                    >
                      {/* Main phone mockup */}
                      <div className="relative z-20 mx-auto max-w-sm">
                        <div className="h-6 relative"></div>
                        <div className="relative">
                          <div className="h-full object-contain relative overflow-hidden">
                            {/* Main property image */}
                            <img
                              src={pakisland}
                              alt="Browse visualization"
                              className="w-[295px] mx-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property card - Top right */}
                      <div className="absolute top-30 z-20 right-20 transform rotate-5 shadow-xl max-w-[140px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-20 rounded-lg mb-2">
                            <img
                              src={sideImg3}
                              alt="Boulevard Point, Downtown Dubai"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Boulevard Point, Downtown Dubai
                            </p>
                            <p className="text-[#30D48C] font-bold">+10.4%</p>
                          </div>
                        </div>
                      </div>

                      {/* Property card - Bottom left */}
                      <div className="absolute bottom-10 left-10 z-10 transform -rotate-12 shadow-xl max-w-[220px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-24 rounded-lg mb-2 overflow-hidden">
                            <img
                              src={sideImg2}
                              alt="Marina Gate 1, Dubai Marina"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Marina Gate 1, Dubai Marina
                            </p>
                            <p className="text-[#2FB183] text-[16px] font-bold">
                              +12.4%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invest section - Dark blue background */}
                <div
                  className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                    activeSection === 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="pl-6 w-full relative">
                    <div
                      className="max-h-[456px] max-w-[548px] rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden"
                      style={{ backgroundColor: "#1A2049" }}
                    >
                      {/* Main phone mockup */}
                      <div className="relative z-20 mx-auto max-w-sm">
                        <div className="h-6 relative"></div>
                        <div className="relative">
                          <div className="h-full object-contain relative overflow-hidden">
                            {/* Main property image */}
                            <img
                              src={pakisland}
                              alt="Invest visualization"
                              className="w-[295px] mx-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property card - Top right */}
                      <div className="absolute top-30 z-20 right-20 transform rotate-5 shadow-xl max-w-[140px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-20 rounded-lg mb-2">
                            <img
                              src={sideImg3}
                              alt="Boulevard Point, Downtown Dubai"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Boulevard Point, Downtown Dubai
                            </p>
                            <p className="text-[#30D48C] font-bold">+10.4%</p>
                          </div>
                        </div>
                      </div>

                      {/* Property card - Bottom left */}
                      <div className="absolute bottom-10 left-10 z-10 transform -rotate-12 shadow-xl max-w-[220px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-24 rounded-lg mb-2 overflow-hidden">
                            <img
                              src={sideImg2}
                              alt="Marina Gate 1, Dubai Marina"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Marina Gate 1, Dubai Marina
                            </p>
                            <p className="text-[#2FB183] text-[16px] font-bold">
                              +12.4%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earn section - Yellow background */}
                <div
                  className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                    activeSection === 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="pl-6 w-full relative">
                    <div
                      className="max-h-[456px] max-w-[548px] rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden"
                      style={{ backgroundColor: "#FFC947" }}
                    >
                      {/* Main phone mockup */}
                      <div className="relative z-20 mx-auto max-w-sm">
                        <div className="h-6 relative"></div>
                        <div className="relative">
                          <div className="h-full object-contain relative overflow-hidden">
                            {/* Main property image */}
                            <img
                              src={pakisland}
                              alt="Earn visualization"
                              className="w-[295px] mx-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property card - Top right */}
                      <div className="absolute top-30 z-20 right-20 transform rotate-5 shadow-xl max-w-[140px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-20 rounded-lg mb-2">
                            <img
                              src={sideImg3}
                              alt="Boulevard Point, Downtown Dubai"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Boulevard Point, Downtown Dubai
                            </p>
                            <p className="text-[#30D48C] font-bold">+10.4%</p>
                          </div>
                        </div>
                      </div>

                      {/* Property card - Bottom left */}
                      <div className="absolute bottom-10 left-10 z-10 transform -rotate-12 shadow-xl max-w-[220px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-24 rounded-lg mb-2 overflow-hidden">
                            <img
                              src={sideImg2}
                              alt="Marina Gate 1, Dubai Marina"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Marina Gate 1, Dubai Marina
                            </p>
                            <p className="text-[#2FB183] text-[16px] font-bold">
                              +12.4%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sell section - Blue background */}
                <div
                  className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                    activeSection === 3 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="pl-6 w-full relative">
                    <div
                      className="max-h-[456px] max-w-[548px] rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden"
                      style={{ backgroundColor: "#4E63BD" }}
                    >
                      {/* Main phone mockup */}
                      <div className="relative z-20 mx-auto max-w-sm">
                        <div className="h-6 relative"></div>
                        <div className="relative">
                          <div className="h-full object-contain relative overflow-hidden">
                            {/* Main property image */}
                            <img
                              src={pakisland}
                              alt="Sell visualization"
                              className="w-[295px] mx-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property card - Top right */}
                      <div className="absolute top-30 z-20 right-20 transform rotate-5 shadow-xl max-w-[140px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-20 rounded-lg mb-2">
                            <img
                              src={sideImg3}
                              alt="Boulevard Point, Downtown Dubai"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Boulevard Point, Downtown Dubai
                            </p>
                            <p className="text-[#30D48C] font-bold">+10.4%</p>
                          </div>
                        </div>
                      </div>

                      {/* Property card - Bottom left */}
                      <div className="absolute bottom-10 left-10 z-10 transform -rotate-12 shadow-xl max-w-[220px]">
                        <div className="bg-white rounded-xl p-3">
                          <div className="relative w-full h-24 rounded-lg mb-2 overflow-hidden">
                            <img
                              src={sideImg2}
                              alt="Marina Gate 1, Dubai Marina"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium mb-1">
                              Marina Gate 1, Dubai Marina
                            </p>
                            <p className="text-[#2FB183] text-[16px] font-bold">
                              +12.4%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center mt-8">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full mx-1 ${
                    index <= activeSection && hasScrolledToSection
                      ? "bg-[#41CE8E]"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next content after all texts/images have been viewed */}
      <div className="py-10"></div>
    </>
  );
};

export default HowItWorks;
