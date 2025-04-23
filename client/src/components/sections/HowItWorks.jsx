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
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-lg text-gray-600">
            Build an income-generating real estate portfolio, easily
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4">
              <StepCard
                number="1"
                title="Browse"
                description="Access prime real estate across multiple markets. Sign up in less than 3 minutes and browse our collection of global properties and funds, sourced by experts."
                isActive={true}
              />

              <StepCard
                number="2"
                title="Invest"
                description="Grab a piece of the ones you love, from only AED 500. Skip the hassle, and buy shares in your favourite deals, no matter where you are in the world."
              />

              <StepCard
                number="3"
                title="Earn"
                description="Enjoy regular passive income with no effort. Sit back and earn consistent rental income from your brand new real estate portfolio, paid directly to your Stake wallet."
              />

              <StepCard
                number="4"
                title="Sell"
                description="Tap into liquidity when you need it most. Realise your full investment appreciation at maturity or take early profits by selling within our community."
              />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <img
                  src="https://getstake.com/images/how-it-works-video-thumbnail.webp"
                  alt="How it works video thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Video play button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="bg-white p-4">
                <p className="font-medium">Watch how it works</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
