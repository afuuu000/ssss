import React from "react";

const DubaiFunds = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Phone image mockup - Left */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-[#00C853] rounded-3xl p-6 lg:p-12 relative z-0 overflow-hidden">
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
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-lg mb-2">
                        Park Islands, Dubai Marina
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
                            18 days left
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

              {/* Property card - Top right */}
              <div className="absolute top-8 right-10 z-10 transform rotate-6 shadow-xl max-w-[220px]">
                <div className="bg-white rounded-xl p-3">
                  <div className="relative w-full h-28 bg-blue-100 rounded-lg mb-2 overflow-hidden">
                    {/* Image would go here */}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">
                      Boulevard Point, Downtown Dubai
                    </p>
                    <p className="text-[#00C853] font-bold">+10.4%</p>
                  </div>
                </div>
              </div>

              {/* Property card - Bottom left */}
              <div className="absolute bottom-10 left-6 z-10 transform -rotate-6 shadow-xl max-w-[220px]">
                <div className="bg-white rounded-xl p-3">
                  <div className="relative w-full h-28 bg-blue-100 rounded-lg mb-2 overflow-hidden">
                    {/* Image would go here */}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">
                      Marina Gate 1, Dubai Marina
                    </p>
                    <p className="text-[#00C853] font-bold">+12.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm mb-6">
              <div className="mr-2 w-6 h-4 bg-red-500 relative overflow-hidden rounded-sm">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-full bg-white"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1/2 bg-white"></div>
                </div>
              </div>
              <span className="font-medium">United Arab Emirates</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#121726] leading-tight">
              Invest in the world's best performing residential market
            </h2>

            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Purchase shares in high yield properties in Dubai and start
              building a passive income stream today
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium"
              >
                Learn more
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-gray-300 bg-white px-6 py-3 rounded-lg text-gray-800 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2 text-[#00C853]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l6 4-6 4V8z" fill="white" />
                </svg>
                Watch how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DubaiFunds;
