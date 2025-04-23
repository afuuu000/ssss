import { useState } from "react";
import { motion } from "framer-motion";

// Define our success stories data
const successStories = [
  {
    id: 1,
    name: "Venus",
    role: "Stake investor",
    avatarUrl: "/images/testimonials/venus-avatar.jpg", // Add your avatar image here
    videoUrl: "/videos/venus-testimonial.mp4", // Add your video here
    quote:
      "I really enjoyed using the app! Being able to actually own a stake in a property with just a button, literally like you're shopping for a property, that's a really cool concept honestly",
  },
  {
    id: 2,
    name: "David",
    role: "Stake investor",
    avatarUrl: "/images/testimonials/david-avatar.jpg", // Add your avatar image here
    videoUrl: "/videos/david-testimonial.mp4", // Add your video here
    quote:
      "[You're] solving that problem of not necessarily having to explore too many different investment opportunities, while still having the opportunity to invest with a couple of clicks, into an asset that I'm really interested in",
  },
  {
    id: 3,
    name: "Dan",
    role: "Stake investor",
    avatarUrl: "/images/testimonials/dan-avatar.jpg", // Add your avatar image here
    videoUrl: "/videos/dan-testimonial.mp4", // Add your video here
    quote:
      "Liquidity in property is sometimes tough, but with the Stake exit windows it just makes life so much easier if you want to sell certain stakes – you just put them on the secondary market",
  },
];

const Testimonials = () => {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-green-500 text-lg font-medium mb-2">
            Success Stories
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold">
            Hear from our
            <br />
            global investors
          </h2>
        </div>

        {/* Green line divider */}
        <div className="h-0.5 w-full max-w-3xl bg-green-500 mx-auto mb-12"></div>

        {/* Avatar tabs */}
        <div className="flex justify-center gap-16 mb-16">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              className="flex flex-col items-center"
              onClick={() => setActiveStory(index)}
            >
              <div
                className={`rounded-full ${
                  activeStory === index ? "ring-2 ring-green-500" : ""
                }`}
              >
                <img
                  src={story.avatarUrl}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="text-center mt-3">
                <h4 className="font-semibold text-lg">{story.name}</h4>
                <p className="text-gray-600">{story.role}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Content section */}
        <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Video panel */}
          <div className="rounded-3xl overflow-hidden aspect-video bg-gray-100 relative">
            {/* This is where you'll add your video element */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-green-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonial panel */}
          <div className="flex flex-col pt-8">
            <div className="flex items-center mb-6">
              <img src="/images/stake-logo.svg" alt="Stake" className="h-7" />
              <span className="ml-3 text-xl">Testimonials</span>
            </div>

            <div className="my-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 28H20L16 36H24V20H12V28ZM28 28H36L32 36H40V20H28V28Z"
                  fill="#10B981"
                />
              </svg>
            </div>

            <blockquote className="text-xl text-gray-700 font-medium italic mb-12">
              "{successStories[activeStory].quote}"
            </blockquote>

            <div className="mt-auto flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                {successStories[activeStory].name}
              </h3>
              <svg
                width="60"
                height="48"
                viewBox="0 0 60 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-30"
              >
                <path
                  d="M48 20H40L44 12H36V28H48V20ZM32 20H24L28 12H20V28H32V20Z"
                  fill="#10B981"
                />
              </svg>
            </div>
            <p className="text-gray-600">{successStories[activeStory].role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
