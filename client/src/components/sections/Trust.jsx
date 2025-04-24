import React, { useState } from "react";
import { motion } from "framer-motion";
import shieldIcon from "../../assets/icons/shield.svg";
import certificationIcon from "../../assets/icons/certification.svg";

const Trust = () => {
  const [activeTab, setActiveTab] = useState("dual");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#121726] py-20 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <p className="text-[#10B981] mb-4 font-medium">Safety never sleeps</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            We value your trust as much as your investments
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === "dual" ? "bg-[#1E293B]" : ""
            }`}
            onClick={() => setActiveTab("dual")}
          >
            <svg
              className="w-6 h-6 text-[#10B981]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04L2 8.006c0 4.992 3.657 9.128 8.438 9.878v-.993c0-1.042.52-1.976 1.312-2.56.798-.59 1.785-.93 2.85-.93s2.058.34 2.85.93c.797.584 1.312 1.518 1.312 2.56v.993C23.346 17.134 27 13 27 8.006l-.382-.022z" />
            </svg>
            <span className="font-medium">Dual regulated</span>
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === "ownership" ? "bg-[#1E293B]" : ""
            }`}
            onClick={() => setActiveTab("ownership")}
          >
            <svg
              className={`w-6 h-6 ${
                activeTab === "ownership" ? "text-[#10B981]" : "text-white"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04L2 8.006c0 4.992 3.657 9.128 8.438 9.878v-.993c0-1.042.52-1.976 1.312-2.56.798-.59 1.785-.93 2.85-.93s2.058.34 2.85.93c.797.584 1.312 1.518 1.312 2.56v.993C23.346 17.134 27 13 27 8.006l-.382-.022z"
              />
            </svg>
            <span className="font-medium">Ownership protection</span>
          </button>
        </div>

        {/* Content Cards */}
        <motion.div
          className="bg-[#1E293B]/60 rounded-3xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={activeTab}
        >
          {activeTab === "dual" && (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column */}
              <div>
                <div className="flex items-center mb-6">
                  <svg
                    className="w-10 h-10 text-[#10B981] mr-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04L2 8.006c0 4.992 3.657 9.128 8.438 9.878v-.993c0-1.042.52-1.976 1.312-2.56.798-.59 1.785-.93 2.85-.93s2.058.34 2.85.93c.797.584 1.312 1.518 1.312 2.56v.993C23.346 17.134 27 13 27 8.006l-.382-.022z" />
                  </svg>
                  <h3 className="text-3xl font-bold">Dual regulated</h3>
                </div>
                <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                  Invest with the assurance that we are dual regulated by the
                  most prestigious regulators in the Middle East
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-[#1E293B] rounded-lg font-medium hover:bg-[#2D3748] transition-colors"
                >
                  Learn more
                </a>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {/* UAE Regulation Card */}
                <div className="bg-[#1E293B] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-4 relative">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-red-600 absolute top-0 left-0"></div>
                        <div className="w-full h-1/3 bg-green-600 absolute top-0 left-0"></div>
                        <div className="w-full h-1/3 bg-white absolute top-1/3 left-0"></div>
                        <div className="w-1/3 h-full bg-black absolute top-0 left-0"></div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold">
                      Regulated in UAE by the DFSA
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    We're regulated by the Dubai Financial Services Authority
                    (DFSA) in Dubai, with a robust business cessation plan.
                  </p>
                </div>

                {/* Saudi Arabia Regulation Card */}
                <div className="bg-[#1E293B] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-4 relative rounded-full overflow-hidden bg-green-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-4 relative">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-4 text-white"
                            fill="currentColor"
                          >
                            <path d="M12 2L5 12l7 4 7-4-7-10z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold">
                      Regulated in Saudi Arabia by the CMA
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    We're regulated by the Capital Markets Authority (CMA) in
                    Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ownership" && (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column */}
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src={shieldIcon}
                    alt="Shield"
                    className="w-10 h-10 mr-4"
                  />
                  <h3 className="text-3xl font-bold">Ownership protection</h3>
                </div>
                <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                  Investors receive verifiable ownership documents issued by
                  globally recognised government bodies and top tier fund
                  managers
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-[#1E293B] rounded-lg font-medium hover:bg-[#2D3748] transition-colors"
                >
                  Learn more
                </a>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {/* Dubai Ownership Card */}
                <div className="bg-[#1E293B] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://stake-prod-ui.s3.me-south-1.amazonaws.com/public/difc.svg"
                        alt="DIFC"
                        className="h-8"
                      />
                      <img
                        src="https://stake-prod-ui.s3.me-south-1.amazonaws.com/public/land-department.svg"
                        alt="Land Department"
                        className="h-8"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Share Certificates and Title Deeds in Dubai
                  </h4>
                  <p className="text-gray-300">
                    Share Certificates are backed by the Dubai International
                    Financial Centre, and Title Deeds are issued by the DLD.
                  </p>
                </div>

                {/* Saudi Arabia Ownership Card */}
                <div className="bg-[#1E293B] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={certificationIcon}
                      alt="Certificate"
                      className="w-10 h-10 mr-4"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Fund Unit Certificates in Saudi Arabia
                  </h4>
                  <p className="text-gray-300">
                    Subscription certificates and fund unit registries are
                    issued by professional fund administrators in Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Backed by logos */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold mb-16">
            We're backed by
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            <svg
              style={{ width: "100%", height: "100%" }}
              viewBox="0 0 126 35"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
            >
              <use href="#svg727047839_934"></use>
            </svg>

            <img
              src="/placeholder-logo-2.svg"
              alt="Wael Group"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-3.svg"
              alt="Mubadala"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-4.svg"
              alt="Republic"
              className="h-10 opacity-80"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center mt-12">
            <img
              src="/placeholder-logo-5.svg"
              alt="Al Jomaih Holding"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-6.svg"
              alt="Madison Marquette"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-7.svg"
              alt="Vinium"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-8.svg"
              alt="B Venture Partners"
              className="h-10 opacity-80"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center mt-12">
            <img
              src="/placeholder-logo-9.svg"
              alt="Guidance"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-10.svg"
              alt="CPL"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-11.svg"
              alt="Verve"
              className="h-10 opacity-80"
            />
            <img
              src="/placeholder-logo-12.svg"
              alt="Capital Guidance"
              className="h-10 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
