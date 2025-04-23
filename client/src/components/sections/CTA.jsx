import React from "react";

const CTA = () => {
  return (
    <section className="py-10 mx-auto container px-4 ">
      <div className="mx-auto max-w-[1000px] rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Green background */}
        <div className="bg-[#30D48C] py-8 px-8 w-full md:w-1/2 flex flex-col justify-center">
          <h4 className="text-white text-lg font-medium mb-4">
            Download our app
          </h4>
          <h2 className="text-white text-4xl text-[48px] font-bold leading-[57.4px] mb-10">
            The modern way for
            <br />
            anyone to invest in
            <br />
            real estate
          </h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-block"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
            <a
              href="#"
              className="inline-block"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-14"
              />
            </a>
          </div>
        </div>

        {/* Right side - Light/transparent background */}
        <div className="bg-[#ecf7f3] py-8 px-6 w-full md:w-1/2 relative">
          {/* This is where the app screenshots will be placed */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* This is where you'll add your actual phone screenshot image */}
            <div className="absolute inset-0 w-full h-full">
              {/* You can replace this with your actual app screenshots */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
