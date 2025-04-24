import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const StepCard = ({ number, title, description, isActive = false }) => {
  return (
    <div
      className={`p-6 rounded-xl transition-all ${
        isActive
          ? "bg-primary/5 border-l-4 border-primary"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      <div className="flex items-start">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
            isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          {number}
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  // Array of section data
  const sections = [
    {
      id: "browse",
      title: "Browse",
      heading: "Access prime real estate across multiple markets",
      description:
        "Sign up in less than 3 minutes and browse our collection of global properties and funds, sourced by experts",
      bgColor: "bg-white",
      textColor: "text-[#121726]",
      accentColor: "text-[#30D48C]",
      appImageUrl: "/images/how-it-works/browse-app.png",
      extraContent: (
        <div className="flex mt-6 gap-4">
          <a href="#" className="block">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on App Store"
              className="h-10"
            />
          </a>
          <a href="#" className="block">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-10"
            />
          </a>
        </div>
      ),
    },
    {
      id: "invest",
      title: "Invest",
      heading: "Grab a piece of the ones you love, from only AED 500",
      description:
        "Skip the hassle, and buy shares in your favourite deals, no matter where you are in the world.",
      bgColor: "bg-[#121726]",
      textColor: "text-white",
      accentColor: "text-[#30D48C]",
      appImageUrl: "/images/how-it-works/invest-app.png",
      extraContent: (
        <div className="flex mt-6 items-center gap-4">
          <img src="/images/payment/visa.svg" alt="Visa" className="h-6" />
          <img
            src="/images/payment/mastercard.svg"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="/images/payment/applepay.svg"
            alt="Apple Pay"
            className="h-6"
          />
        </div>
      ),
    },
    {
      id: "earn",
      title: "Earn",
      heading: "Enjoy regular passive income with no effort",
      description:
        "Sit back and earn consistent rental income from your brand new real estate portfolio",
      bgColor: "bg-[#FFC940]",
      textColor: "text-[#121726]",
      accentColor: "text-[#121726]",
      appImageUrl: "/images/how-it-works/earn-app.png",
      extraContent: (
        <div className="flex items-center mt-6 text-[#121726]">
          <span className="inline-flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-[#30D48C]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            Paid directly to your Stake wallet
          </span>
        </div>
      ),
    },
    {
      id: "sell",
      title: "Sell",
      heading: "Tap into liquidity when you need it most",
      description:
        "Realise your full investment appreciation at maturity or take early profits by selling within our community",
      bgColor: "bg-white",
      textColor: "text-[#121726]",
      accentColor: "text-[#30D48C]",
      appImageUrl: "/images/how-it-works/sell-app.png",
      extraContent: (
        <div className="flex flex-col mt-6 space-y-3">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-[#30D48C]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Sell during our Exit Windows</span>
            <span className="ml-4 px-2 py-1 bg-[#30D48C] bg-opacity-10 text-[#30D48C] rounded-full text-xs">
              Every 6 months
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-[#30D48C]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 7h10v10H7z" />
            </svg>
            <span>Full sale of properties and funds</span>
            <span className="ml-4 px-2 py-1 bg-[#30D48C] bg-opacity-10 text-[#30D48C] rounded-full text-xs">
              2-5 year holding terms
            </span>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveSection(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0.1,
      }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      const sectionDivs = sectionElement.querySelectorAll(".section-trigger");
      sectionDivs.forEach((div) => {
        observer.observe(div);
      });
    }

    return () => {
      if (sectionElement) {
        const sectionDivs = sectionElement.querySelectorAll(".section-trigger");
        sectionDivs.forEach((div) => {
          observer.unobserve(div);
        });
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div className="mx-auto max-w-[1000px] px-4">
        {/* Header */}
        <div className="text-center py-12 md:py-20">
          <h3 className="text-[#30D48C] text-lg font-medium mb-3">
            How it works
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold">
            Build an income-generating
            <br className="hidden sm:block" />
            real estate portfolio, easily
          </h2>
        </div>

        {/* Mobile view for the sections */}
        <div className="md:hidden space-y-12 pb-16">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`${section.bgColor} rounded-2xl p-6 transition-all duration-300`}
            >
              <div className="mb-6">
                <h3 className={`${section.accentColor} text-lg font-medium mb-2`}>
                  {section.title}
                </h3>
                <h2 className={`${section.textColor} text-2xl font-bold mb-3`}>
                  {section.heading}
                </h2>
                <p className={`${section.textColor} opacity-80 text-base mb-4`}>
                  {section.description}
                </p>
                {section.extraContent}
              </div>
              
              {/* App screenshot container */}
              <div className="relative w-full h-[420px] mx-auto">
                <div className={`${section.bgColor} rounded-2xl p-4 flex items-center justify-center overflow-hidden shadow-lg w-full h-full`}>
                  <div className="relative w-full h-full max-w-[240px] mx-auto">
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full h-full flex items-center justify-center">
                      <img
                        src={section.appImageUrl}
                        alt={`${section.title} app screenshot`}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Floating UI elements specific to each section */}
                    {section.id === "browse" && (
                      <div className="absolute right-[-20px] top-[20%] bg-white rounded-2xl shadow-xl p-2 transform rotate-6">
                        <img
                          src="/images/ui/property-card.jpg"
                          alt="Property"
                          className="w-24 h-16 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {section.id === "invest" && (
                      <div className="absolute bottom-[20%] right-[-15px] bg-white rounded-2xl shadow-xl p-2">
                        <div className="font-medium text-sm">AED 500</div>
                        <div className="text-xs text-gray-500">~$136.15</div>
                      </div>
                    )}

                    {section.id === "earn" && (
                      <div className="absolute top-[15%] left-[-15px] bg-white rounded-2xl shadow-xl p-2">
                        <div className="text-xs">All time returns</div>
                        <div className="font-bold text-sm">AED 89,000</div>
                        <span className="inline-block bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5">
                          30.8%
                        </span>
                      </div>
                    )}

                    {section.id === "sell" && (
                      <div className="absolute top-[60%] right-[-20px] bg-white rounded-2xl shadow-xl p-2 transform rotate-12">
                        <img
                          src="/images/ui/property-card-2.jpg"
                          alt="Property"
                          className="w-20 h-14 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view with sticky phone */}
        <div className="relative hidden md:flex md:flex-row">
          {/* Left side: scrollable text content */}
          <div className="md:w-1/2 md:pr-12">
            {sections.map((section, index) => (
              <div
                key={section.id}
                data-index={index}
                className={`section-trigger py-32 md:py-40 px-4 md:px-8 ${
                  index === activeSection ? "opacity-100" : "opacity-40"
                } transition-opacity duration-300`}
              >
                <div>
                  <h3
                    className={`${section.accentColor} text-lg font-medium mb-3`}
                  >
                    {section.title}
                  </h3>
                  <h2
                    className={`${section.textColor} text-3xl md:text-4xl font-bold mb-4`}
                  >
                    {section.heading}
                  </h2>
                  <p className={`${section.textColor} opacity-80 text-lg mb-6`}>
                    {section.description}
                  </p>
                  {section.extraContent}
                </div>
              </div>
            ))}
          </div>

          {/* Right side: sticky phone mockup */}
          <div className="hidden md:block md:w-1/2 sticky top-0 h-screen">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[380px] h-[780px]">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    className={`absolute inset-0 ${section.bgColor} rounded-3xl p-8 flex items-center justify-center overflow-hidden shadow-xl`}
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{
                      opacity: index === activeSection ? 1 : 0,
                      scale: index === activeSection ? 1 : 0.9,
                      y: index === activeSection ? 0 : 40,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Phone mockup with app screenshot */}
                    <div className="relative w-full h-full">
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full h-full flex items-center justify-center">
                        <img
                          src={section.appImageUrl}
                          alt={`${section.title} app screenshot`}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Floating UI elements specific to each section */}
                      {section.id === "browse" && (
                        <div className="absolute right-[-30px] top-[20%] bg-white rounded-2xl shadow-xl p-3 transform rotate-6">
                          <img
                            src="/images/ui/property-card.jpg"
                            alt="Property"
                            className="w-32 h-20 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      {section.id === "invest" && (
                        <div className="absolute bottom-[20%] right-[-20px] bg-white rounded-2xl shadow-xl p-3">
                          <div className="font-medium">AED 500</div>
                          <div className="text-sm text-gray-500">~$136.15</div>
                        </div>
                      )}

                      {section.id === "earn" && (
                        <div className="absolute top-[15%] left-[-20px] bg-white rounded-2xl shadow-xl p-3">
                          <div className="text-sm">All time returns</div>
                          <div className="font-bold">AED 89,000</div>
                          <span className="inline-block bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5">
                            30.8%
                          </span>
                        </div>
                      )}

                      {section.id === "sell" && (
                        <div className="absolute top-[60%] right-[-30px] bg-white rounded-2xl shadow-xl p-2 transform rotate-12">
                          <img
                            src="/images/ui/property-card-2.jpg"
                            alt="Property"
                            className="w-24 h-16 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
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