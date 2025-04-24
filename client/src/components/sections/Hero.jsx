import { useState } from "react";
import portfolio from "../../assets/images/mobileportfolio.avif";
import property from "../../assets/images/mobileimgdubaitower.avif";
import funds from "../../assets/images/mobilefunds.png";

// Import the app store and google play SVGs - using exact images from getstake.com
const appStoreSVG =
  "https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg";
const googlePlaySVG =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

const Hero = () => {
  return (
    <section className="py-8 md:py-16 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-42 ">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center bg-green-50  border-green-300 border rounded-full px-4 py-1 text-sm mb-8 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-600 font-medium ">
                10.1% average investor returns in 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Build your wealth through{" "}
              <span className="text-[#41CE8E]">real estate</span>
            </h1>
            <p className="text-[16px] tracking-tighter font-medium text-gray-600 mb-8">
              Thousands of investors all over the world are using Stake to
              access income generating real estate deals in high growth markets,
              from only AED 500
            </p>

            <div className=" flex  gap-1 ">
              <div className="h-18 w-[150px]   rounded ">
                <a href="#applesote">
                  <img
                    src={appStoreSVG}
                    alt="Download on App Store"
                    className="h-full w-full object-contain rounded"
                  />
                </a>
              </div>

              <div className="h-18 w-[190px]   rounded ">
                <a href="#googleplay">
                  <img
                    src={googlePlaySVG}
                    alt="Get it on Google Play"
                    className="h-full w-full object-cover rounded
                  "
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side phones - with responsive adjustments */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] mx-auto lg:mx-0 w-full max-w-[500px]">
            {/* Property phone on left */}
            <div className="absolute left-0 top-[30%] z-20 transform scale-75 sm:scale-90 md:scale-100 origin-center">
              <div className="relative">
                <div className="rounded-[30px] overflow-hidden border-[8px] border-black shadow-lg">
                  <div className="bg-black w-full h-6 relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-black rounded-b-lg"></div>
                  </div>
                  <img
                    src={property}
                    alt="Property screen"
                    className="w-[220px] sm:w-[260px] md:w-[280px]"
                  />
                </div>
              </div>
            </div>

            {/* Portfolio phone on top right */}
            <div className="absolute right-0 top-0 z-30 transform scale-75 sm:scale-90 md:scale-100 origin-top-right">
              <div className="relative">
                <div className="rounded-[30px] overflow-hidden border-[8px] border-black shadow-lg">
                  <div className="bg-black w-full h-6 relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-black rounded-b-lg"></div>
                  </div>
                  <img
                    src={portfolio}
                    alt="Portfolio screen"
                    className="w-[240px] sm:w-[280px] md:w-[300px]"
                  />
                </div>
              </div>
            </div>

            {/* Funds phone at bottom */}
            <div className="absolute bottom-0 right-[20%] z-10 transform scale-75 sm:scale-90 md:scale-100 origin-bottom">
              <div className="relative">
                <div className="rounded-[30px] overflow-hidden border-[8px] border-black shadow-lg">
                  <div className="bg-black w-full h-6 relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-black rounded-b-lg"></div>
                  </div>
                  <img
                    src={funds}
                    alt="Funds screen"
                    className="w-[220px] sm:w-[240px] md:w-[260px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
