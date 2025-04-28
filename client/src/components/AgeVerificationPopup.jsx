import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AgeVerificationPopup = ({ onClose }) => {
  // Set to true by default to make it visible immediately
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Log that the component mounted
    console.log("Age verification popup mounted");

    // No delay needed as we're setting isVisible to true by default
    // This ensures the popup is visible as soon as it renders
  }, []);

  const handleVerify = () => {
    console.log("User verified age");
    // Set cookie or localStorage to remember verification
    localStorage.setItem("ageVerified", "true");
    setIsVisible(false);

    // Allow animation to complete before removing component
    setTimeout(() => {
      console.log("Removing popup completely");
      onClose();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Blurred overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
            onClick={() => {
              console.log("Clicked overlay");
              handleVerify();
            }}
          />

          {/* Popup card */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] bg-white rounded-xl shadow-xl max-w-md w-[90%] p-8"
          >
            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#121C30] mb-4">
                  Age Verification
                </h2>
                <p className="text-gray-600">
                  You must be 18 years or older to access this website. Please
                  confirm you meet the age requirement.
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    console.log("Clicked Yes button");
                    handleVerify();
                  }}
                  className="bg-[#30D48C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#28b77d] transition-colors"
                >
                  Yes, I am 18 or older
                </button>
                <a
                  href="#"
                  className="text-gray-500 text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Clicked No button");
                    window.location.href = "https://www.google.com";
                  }}
                >
                  No, take me away
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AgeVerificationPopup;
