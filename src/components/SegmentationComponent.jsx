import React from "react";

const SegmentationComponent = () => {
  return (
    <div className="section w-screen h-screen flex-shrink-0 bg-purple-100 flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl text-black px-24">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-5xl  mb-4 font-thin">
          Precision Targeting with Smart Segmentation
        </h2>
        <p className="text-lg mb-4">
          Maximize your email engagement with AI-powered segmentation that
          ensures the right message reaches the right audience.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Easily group recipients using advanced filters</li>
          <li>
            Segment users based on demographics, behavior, and purchase patterns
          </li>
          <li>Automate list updates based on subscriber interactions</li>
        </ul>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746531061/1234654_fb3dgj.png"
          alt="Person Working at Desk"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SegmentationComponent;
