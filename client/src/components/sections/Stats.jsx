import React from "react";

const Stats = () => {
  return (
    <section className="py-20 bg-[#f8fafb] overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1200px] text-center">
        <p className="text-[#00C853] font-medium mb-4">
          The global leader in digital real estate investing
        </p>

        <h2 className="text-[#121726] text-4xl md:text-5xl font-bold max-w-4xl mx-auto mb-20 leading-tight">
          Diversify across different asset
          <br />
          types and countries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-4xl md:text-5xl font-bold flex items-center">
              <span>1</span>
              <span className="text-[#00C853] font-bold">M+</span>
            </h3>
            <p className="text-gray-500 mt-2">Registered users</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-4xl md:text-5xl font-bold flex items-center">
              <span>AED 909</span>
              <span className="text-[#00C853] font-bold">M+</span>
            </h3>
            <p className="text-gray-500 mt-2">Property transactions</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-4xl md:text-5xl font-bold">
              209
            </h3>
            <p className="text-gray-500 mt-2">User nationalities</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-4xl md:text-5xl font-bold flex items-center">
              <span>AED 32.2</span>
              <span className="text-[#00C853] font-bold">M+</span>
            </h3>
            <p className="text-gray-500 mt-2">Rental income paid</p>
          </div>
        </div>

        {/* Bottom curved shape */}
        <div className="absolute bottom-0 left-0 w-full h-24">
          <svg
            viewBox="0 0 1440 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 74L48 68.2C96 62.3 192 50.7 288 45.7C384 40.7 480 42.3 576 48.3C672 54.3 768 64.7 864 70.8C960 77 1056 79 1152 73.8C1248 68.7 1344 56.3 1392 50.2L1440 44V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V74Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Stats;
