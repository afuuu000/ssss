import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import sideImg2 from "../../assets/images/marinapull.avif";
import sideImg3 from "../../assets/images/burjkhalifa.avif";
import pakisland from "../../assets/images/pakislands.png";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import apple from "../../assets/images/apple.png";
const HowItWorks = () => {
  const sectionRef = useRef(null);
  const textSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Steps data
  const steps = [
    {
      title: "Browse",
      titleColor: "#41CE8E",
      subtitle: "Access prime real estate across multiple markets",
      description:
        "Sign up in less than 3 minutes and browse our collection of global properties and funds, sourced by experts",
      mainImage: pakisland,
      bgColor: "#30D48C",
      extraContent: (
        <div className="flex gap-3 mt-6">
          <a href="#" className="h-24 w-[130px] rounded">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on App Store"
              className="h-full w-full object-contain rounded"
            />
          </a>
          <a href="#" className="h-24 w-[170px] rounded">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-full w-full object-contain rounded"
            />
          </a>
        </div>
      ),
    },
    {
      title: "Invest",
      titleColor: "#41CE8E",
      subtitle: "Grab a piece of the ones you love, from only AED 500",
      description:
        "Skip the hassle, and buy shares in your favourite deals, no matter where you are in the world.",
      mainImage: pakisland,
      bgColor: "#121C30",
      extraContent: (
        <div className="flex gap-3 mt-6">
          <div className="flex items-center space-x-4">
            <img src={visa} alt="Visa" className="h-8" />
            <img src={master} alt="Mastercard" className="h-8" />
            <img src={apple} alt="Apple Pay" className="h-8" />
          </div>
        </div>
      ),
    },
    {
      title: "Earn",
      titleColor: "#41CE8E",
      subtitle: "Enjoy regular passive income with no effort",
      description:
        "Sit back and earn consistent rental income from your brand new real estate portfolio",
      mainImage: pakisland,
      bgColor: "#FFD146",
      extraContent: (
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
      ),
    },
    {
      title: "Sell",
      titleColor: "#41CE8E",
      subtitle: "Tap into liquidity when you need it most",
      description:
        "Realise your full investment appreciation at maturity or take early profits by selling within our community",
      mainImage: pakisland,
      bgColor: "#FFFFFF",
      extraContent: (
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
      ),
    },
  ];

  // Calculate which section is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!textSectionRef.current) return;

      const textSectionRect = textSectionRef.current.getBoundingClientRect();
      const textSectionHeight = textSectionRect.height;
      const windowHeight = window.innerHeight;

      // Update scroll position
      setScrollY(window.scrollY);

      // Calculate which text section is currently in view
      const sectionHeight = textSectionHeight / steps.length;
      const scrollPosition = Math.max(
        0,
        window.scrollY - textSectionRect.top - window.scrollY + windowHeight / 2
      );
      const newActiveSection = Math.min(
        steps.length - 1,
        Math.floor(scrollPosition / sectionHeight)
      );

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [steps.length]);

  return (
    <div className="bg-[#F6F7F9]">
      <div
        ref={sectionRef}
        className="relative  py-30 max-w-[1150px] mx-auto"
        style={{ minHeight: "200vh" }} // Make section tall enough to scroll
      >
        <div className="container mx-auto px-4 ">
          {/* Section title */}
          <div className="text-center mb-20">
            <h2 className="text-[16px] text-[#209476] font-bold mb-4">
              How It Works
            </h2>
            <h3 className="text-[#121C30] text-5xl max-w-2xl mx-auto">
              Build an income-generating real estate portfolio, easily
            </h3>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2">
            {/* Left side - Scrolling text content */}
            <div
              ref={textSectionRef}
              className="space-y-[70vh]" // Space sections apart for scrolling
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="min-h-[70vh] flex items-center max-w-[500px]"
                >
                  <div
                    className={`transition-all duration-300 ${
                      activeSection === index ? "opacity-100" : "opacity-10"
                    }`}
                  >
                    <h3
                      className="text-2xl text-[#209476] font-semibold mb-4"
                      style={{ color: step.titleColor }}
                    >
                      {step.title}
                    </h3>
                    <h4 className="text-4xl text-[#121C30] md:text-4xl font-bold mb-6">
                      {step.subtitle}
                    </h4>
                    <p className="text-[#5A616E] text-[16px] mb-6">
                      {step.description}
                    </p>
                    {step.extraContent}
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Fixed image section */}
            <div className="hidden lg:block">
              <div className="sticky top-1/4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-700 ease-in-out ${
                      activeSection === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="pl-4 w-full relative">
                      <div
                        className="max-h-[430px] max-w-[650px] rounded-3xl p-4 lg:p-12 relative z-0 overflow-hidden"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        {/* Main image */}
                        <div className="relative z-20 mx-auto max-w-sm">
                          <div className="relative">
                            <div className="h-full object-contain relative overflow-hidden">
                              <img
                                src={step.mainImage}
                                alt={`${step.title} visualization`}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
