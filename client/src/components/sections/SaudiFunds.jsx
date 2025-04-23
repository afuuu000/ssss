import React from "react";

const SaudiFunds = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Phone image mockup - Right */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-[#00838F] rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden">
              {/* Main phone mockup */}
              <div className="relative z-20 mx-auto max-w-sm">
                <div className="rounded-[38px] bg-white overflow-hidden shadow-xl border-8 border-black">
                  <div className="h-6 bg-black relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-black rounded-b-xl"></div>
                  </div>
                  <div className="relative">
                    <div className="h-48 bg-blue-100">
                      {/* Navigation controls */}
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
                      <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black/30 text-white px-2 py-0.5 text-xs rounded-full">
                        9:41
                      </span>
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-lg mb-2">
                        Al Nakhla Hills Real Estate Fund
                      </h3>

                      <div className="flex space-x-6 mb-4">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-gray-500 mr-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16m-4.5-4.5v-11a1 1 0 00-1-1h-5a1 1 0 00-1 1v11" />
                          </svg>
                          <span className="text-sm">18,000m²</span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-gray-500 mr-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">Income Generating</span>
                        </div>
                      </div>

                      <div className="flex mb-4 space-x-3">
                        <button className="flex items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Fund Memo
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
                            purchase price
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
                          <span className="text-gray-400 text-xs ml-auto flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            15 days left
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
                    </div>
                  </div>
                </div>
              </div>

              {/* Property card - Top left */}
              <div className="absolute top-12 left-4 z-10 transform -rotate-6 shadow-xl max-w-[200px]">
                <div className="bg-white rounded-xl p-3">
                  <div className="relative w-full h-28 bg-blue-100 rounded-lg mb-2 overflow-hidden">
                    {/* Image would go here */}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">
                      Al Khuzama Real Estate Fund
                    </p>
                    <p className="text-[#00C853] font-bold">+32.2%</p>
                  </div>
                </div>
              </div>

              {/* Property card - Top right */}
              <div className="absolute top-4 right-16 z-10 transform rotate-6 shadow-xl max-w-[200px]">
                <div className="bg-white rounded-xl p-3">
                  <div className="relative w-full h-28 bg-blue-100 rounded-lg mb-2 overflow-hidden">
                    {/* Image would go here */}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">
                      Al Yasmeen Real Estate Fund
                    </p>
                    <p className="text-[#00C853] font-bold">+41.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Left */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm mb-6">
              <div className="mr-2 w-6 h-6 bg-green-800 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white absolute">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-green-800"
                      fill="currentColor"
                    >
                      <path d="M12 2L5 12l7 4 7-4-7-10z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="font-medium">Saudi Arabia</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#121726] leading-tight">
              Private funds in the world's fastest growing economy
            </h2>

            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Invest in commercial and residential funds that are otherwise only
              available to high net worth investors
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaudiFunds;
