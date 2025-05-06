import React from "react";

const AutomationComponent = () => {
  return (
    <div className="section w-screen h-screen flex-shrink-0 bg-purple-100 flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl text-black px-24">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-5xl  mb-4 font-thin">
          Effortless Automation for Smarter Campaigns
        </h2>
        <p className="text-lg mb-4 font-thin">
          Save time and boost efficiency with pre-built automation workflows
          that engage your audience at key moments.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Welcome emails</li>
          <li>Birthday emails</li>
          <li>Abandoned cart emails</li>
        </ul>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746531061/1234654_fb3dgj.png"
          alt="Team Collaborating"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AutomationComponent;
