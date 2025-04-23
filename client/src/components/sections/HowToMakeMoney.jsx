import React from "react";

const HowToMakeMoney = () => {
  return (
    <section className="bg-[#f8fafb] py-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#00C853] font-medium mb-4">
            It's your money, grow it
          </p>
          <h2 className="text-[#121726] text-4xl md:text-5xl font-bold">
            So, how do I make money?
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto">
            Join other real estate investors who made{" "}
            <span className="text-[#00C853] font-bold">10.1%</span> in 2024
          </p>
        </div>

        {/* First Feature - Passive Income */}
        <div className="flex flex-col lg:flex-row items-center mb-32">
          {/* Phone Image Container - Left */}
          <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="rounded-full bg-[#00C853]/20 w-[450px] h-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              {/* Phone mockup with wallet screen */}
              <div className="rounded-[38px] bg-white overflow-hidden shadow-xl border-8 border-black">
                {/* This is where you'll add the wallet image */}
                <div className="h-6 bg-black relative">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-black rounded-b-xl"></div>
                </div>
                <div className="px-3 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs">9:41</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Wallet</h3>
                  <div className="bg-teal-600 rounded-lg p-4 mb-4">
                    <p className="text-white text-xs mb-1">Total balance</p>
                    <p className="text-white text-2xl font-bold">
                      AED 20,150.00
                    </p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Invest</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Deposit</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Withdraw</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 6V18M6 12H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Settings</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="font-semibold mb-2">Transactions</p>
                    <div className="flex space-x-2 mb-3 overflow-x-auto">
                      <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                        All
                      </div>
                      <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        Investments
                      </div>
                      <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        Incoming
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">July 2023</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium">
                            1 bed in Park Tower
                          </p>
                          <p className="text-xs text-gray-500">Rent Payment</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-500 font-medium">+ AED 320</p>
                        <p className="text-xs text-gray-500">6th July '23</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium">
                            Emirates NBD ****34
                          </p>
                          <p className="text-xs text-orange-500">
                            Pending deposit
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-500 font-medium">
                          + AED 6,000
                        </p>
                        <p className="text-xs text-gray-500">6th July '23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#121726]">
              Earn consistent
              <br />
              passive income
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Build new income streams with rental payments from income
              generating properties and funds
            </p>

            <div className="flex flex-col md:flex-row gap-8 mb-4">
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-bold text-[#121726]">
                    AED 31
                  </span>
                  <span className="text-3xl font-bold text-[#00C853]">M+</span>
                </p>
                <p className="text-gray-500">Total Rental Income Paid</p>
              </div>
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-bold text-[#121726]">
                    5.40
                  </span>
                  <span className="text-3xl font-bold text-[#00C853]">%</span>
                </p>
                <p className="text-gray-500">Average Rental Yield in 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature - Liquidity */}
        <div className="flex flex-col lg:flex-row-reverse items-center">
          {/* Phone Image Container - Right */}
          <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="rounded-full bg-[#00C853]/20 w-[450px] h-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              {/* Phone mockup with property listing screen */}
              <div className="rounded-[38px] bg-white overflow-hidden shadow-xl border-8 border-black">
                {/* This is where you'll add the property image */}
                <div className="h-6 bg-black relative">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-black rounded-b-xl"></div>
                </div>
                <div className="relative">
                  <div className="h-48 bg-blue-100">
                    {/* Property image would go here */}
                    <div className="absolute top-2 left-2 bg-white rounded-full p-1">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15 19l-7-7 7-7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <div className="bg-white rounded-full p-1">
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="bg-white rounded-full p-1">
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white text-[#00C853] px-3 py-1 rounded-full text-xs font-medium">
                      Dubai
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-lg mb-2">
                      Studio One, Dubai Marina
                    </h3>
                    <div className="flex space-x-4 mb-2">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-500 mr-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M3 7h18" />
                        </svg>
                        <span className="text-sm">2</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-500 mr-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">3</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-500 mr-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M3 7h18" />
                        </svg>
                        <span className="text-sm">#1020</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-500 mr-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14-2l-5-5-5 5m5-5v12" />
                        </svg>
                        <span className="text-sm">170 sqm</span>
                      </div>
                    </div>
                    <div className="flex mb-4 space-x-3">
                      <button className="flex items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Virtual Tour
                      </button>
                      <button className="flex items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        6 photos
                      </button>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#00C853] font-bold text-xl">
                          AED 1,305,990
                        </span>
                        <span className="text-gray-600 text-sm">
                          Purchase price
                        </span>
                      </div>
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 text-gray-400 mr-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="text-gray-600 text-sm">
                          368 investors
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-[#00C853] h-2 rounded-full w-[75%]"></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#00C853] font-medium">
                          75% funded
                        </span>
                        <span className="text-gray-600">
                          AED 764,000 available
                        </span>
                      </div>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">
                          5 year total return
                        </span>
                        <span className="font-bold">47.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Yearly investment return
                        </span>
                        <span className="font-bold">9.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Left */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#121726]">
              Liquidity, when you
              <br />
              need it most
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Exit your investments at maturity or take early profits by selling
              during our bi-annual exit windows
            </p>

            <div className="flex flex-col md:flex-row gap-8 mb-4">
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-bold text-[#121726]">10</span>
                  <span className="text-3xl font-bold text-[#00C853]">+</span>
                </p>
                <p className="text-gray-500">Properties Fully Exited</p>
              </div>
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-bold text-[#121726]">
                    AED 12.3
                  </span>
                  <span className="text-3xl font-bold text-[#00C853]">M+</span>
                </p>
                <p className="text-gray-500">Traded During Exit Windows</p>
              </div>
            </div>
          </div>
        </div>
         {/* First Feature - Passive Income */}
         <div className="flex flex-col lg:flex-row items-center mb-32">
          {/* Phone Image Container - Left */}
          <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="rounded-full bg-[#00C853]/20 w-[450px] h-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              {/* Phone mockup with wallet screen */}
              <div className="rounded-[38px] bg-white overflow-hidden shadow-xl border-8 border-black">
                {/* This is where you'll add the wallet image */}
                <div className="h-6 bg-black relative">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-black rounded-b-xl"></div>
                </div>
                <div className="px-3 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs">9:41</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Wallet</h3>
                  <div className="bg-teal-600 rounded-lg p-4 mb-4">
                    <p className="text-white text-xs mb-1">Total balance</p>
                    <p className="text-white text-2xl font-bold">
                      AED 20,150.00
                    </p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Invest</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Deposit</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Withdraw</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 6V18M6 12H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-xs">Settings</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="font-semibold mb-2">Transactions</p>
                    <div className="flex space-x-2 mb-3 overflow-x-auto">
                      <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                        All
                      </div>
                      <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        Investments
                      </div>
                      <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        Incoming
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">July 2023</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium">
                            1 bed in Park Tower
                          </p>
                          <p className="text-xs text-gray-500">Rent Payment</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-500 font-medium">+ AED 320</p>
                        <p className="text-xs text-gray-500">6th July '23</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full mr-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium">
                            Emirates NBD ****34
                          </p>
                          <p className="text-xs text-orange-500">
                            Pending deposit
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-500 font-medium">
                          + AED 6,000
                        </p>
                        <p className="text-xs text-gray-500">6th July '23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#121726]">
              Earn consistent
              <br />
              passive income
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Build new income streams with rental payments from income
              generating properties and funds
            </p>

            <div className="flex flex-col md:flex-row gap-8 mb-4">
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-bold text-[#121726]">
                    AED 31
                  </span>
                  <span className="text-3xl font-bold text-[#00C853]">M+</span>
                </p>
                <p className="text-gray-500">Total Rental Income Paid</p>
              </div>
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-bold text-[#121726]">
                    5.40
                  </span>
                  <span className="text-3xl font-bold text-[#00C853]">%</span>
                </p>
                <p className="text-gray-500">Average Rental Yield in 2024</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToMakeMoney;
