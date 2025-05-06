import React from "react";

const EmailMarketingPage = () => {
  return (
    <div className="w-full bg-white rounded-xl text-black pt-12 pb-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl text-center font-light mb-4">
        DESIGN YOUR EMAIL IN MINUTES
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-black py-10 px-6 md:px-12">
          {/* Intro Text */}
          <p className="text-black text-lg mb-10 text-center md:text-left">
            Create stunning, professional emails and newsletters that adapt
            perfectly to any screen size. Use our intuitive drag-and-drop editor
            to build from scratch or choose from expertly designed templates—no
            design experience required!
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            <div className="border-t border-gray-300 pt-4">
              <p className="text-xl font-medium">
                Generate high-quality content effortlessly with AI
              </p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-xl font-medium">
                Ensure your emails land directly in the inbox
              </p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-xl font-medium">
                Gain deep insights with advanced analytics
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746527908/hero_upst4a.svg"
            alt="Email Marketing Illustration"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailMarketingPage;
