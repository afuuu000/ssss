import React from "react";
import { motion } from "framer-motion";
const appStoreSVG =
  "https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg";
const googlePlaySVG =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

import phoneImg from "../../assets/images/mobileportfolio.avif";
import sideImg from "../../assets/images/invest.png";
import sideImg2 from "../../assets/images/burjalarab.avif";
import sideImg3 from "../../assets/images/dubaicitywalk.avif";
const CTA = () => {
  return (
    <section className="py-10 mx-auto container px-4 ">
      <div className="mx-auto h-[400px] max-w-[1000px] rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Green background */}
        <div className="bg-[#30D48C] pl-9 py-4 w-full md:w-1/2 flex flex-col justify-center">
          <h4 className="text-white text-lg font-medium mb-4">
            Download our app
          </h4>
          <h2 className="text-white text-4xl tracking-tight font-sans font-bold leading-[57.4px] mb-10">
            The modern way for
            <br />
            anyone to invest in
            <br />
            real estate
          </h2>

          <div className="flex ">
            <div className="h-18 w-[190px]   rounded ">
              <a href="#applesote">
                <img
                  src={appStoreSVG}
                  alt="Download on App Store"
                  className="h-full w-full object-contain rounded"
                />
              </a>
            </div>

            <div className="h-18 w-[250px]   rounded ">
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

        {/* Right side - Light/transparent background */}
        <div className="bg-[#30D48C] relative  w-full md:w-1/2 ">
          <img
            src={phoneImg}
            alt="phoneImg"
            className="w-full h-full object-contain md:-rotate-25 md:scale-200  "
          />
          <img
            src={sideImg}
            alt="investimg"
            className="absolute -top-5 -right-20 -rotate-25"
          />
          <img
            src={sideImg2}
            alt="investimg"
            className="absolute -bottom-10 -left-10 -rotate-25 w-60
            "
          />
          <img
            src={sideImg3}
            alt="img"
            className="absolute bottom-10 -right-20  -rotate-25 w-60"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
