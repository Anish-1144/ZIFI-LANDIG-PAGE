import React from "react";

const SupportComponent = () => {
  return (
    <div className="section w-screen h-screen flex-shrink-0 bg-pink-100 flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl text-black px-24">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746531061/1234654_fb3dgj.png"
          alt="Support Agent"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-5xl  mb-4 font-thin">
          24/7 Human Support—Real People, Real Help
        </h2>
        <p className="text-lg mb-4">
          Get expert assistance anytime you need it—via email, live chat, or
          social media. Phone support available for Business and Enterprise
          users.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Free customer support across all plans</li>
          <li>
            Priority phone assistance for Business & Enterprise subscribers
          </li>
          <li>
            Dedicated account managers with 1-hour response time for Enterprise
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportComponent;
