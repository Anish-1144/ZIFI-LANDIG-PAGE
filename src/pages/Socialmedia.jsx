import React from 'react'
import Hero from '../components/Hero'
import Marquee from "react-fast-marquee";
import IconCloud from "../components/icons.jsx";
import AIWritingComponent from "../components/AIWritingComponent.jsx";
import FeaturesComponent from "../components/FeaturesComponent.jsx";
import PricingPlans from "../components/PricingPlans.jsx";


function Socialmedia() {

   const iconSlugs = [
     "facebook",
     "instagram",
     "twitter",
     "linkedin",
     "tiktok",
     "pinterest",
     "youtube",
     "google",
     "shopify",
     "woocommerce",
     "zapier",
     "airtable",
     "canva",
     "slack",
     "discord",
     "reddit",
     "whatsapp",
     "telegram",
     "snapchat",
     "wordpress",
     "elementor",
     "wix",
     "squarespace",
     "spotify",
     "soundcloud",
     "twitch",
     "figma",
   ];
  

  const logoImages = [
    { text: "Apollo.ai", style: "font-bold text-gray-400" },
    { text: "Close.io", style: "font-bold text-gray-400" },
    { text: "Five9", style: "font-bold text-gray-400" },
    { text: "Seamless.ai", style: "font-bold text-gray-400" },
    { text: "Clay.run", style: "font-bold text-gray-400" },
  ];

  return (
    <div>
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-70"
            style={{ filter: "brightness(0.5)" }}
          >
            <source
              src="https://res.cloudinary.com/dfcbjgt3w/video/upload/v1745980442/abstract-nirvana_3_j3uk4h.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="content-container relative  container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-thin mb-6 tracking-tight text-white drop-shadow-lg">
            Next-Gen AI Agent for Smart, Automated Social Media Engagement{" "}
            <br />
            
          </h1>

          <div className="max-w-md mx-auto mt-10 mb-16">
            <div className="flex bg-black/30 backdrop-blur-md rounded-md overflow-hidden p-1 border border-white/10">
              <input
                type="text"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent py-3 px-4 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
      <Marquee speed={40} gradient={false} className="w-full mb-8">
        <div className="flex items-center space-x-12 px-4">
          {logoImages.map((logo, index) => (
            <div key={index} className="flex text-5xl items-center mx-4">
              <span className={logo.style}>{logo.text}</span>
            </div>
          ))}
        </div>
      </Marquee>
      <div className="min-h-screen bg-black">
        <div className="flex flex-col items-center justify-center bg-black text-center py-16 px-4">
          <h1 className="text-thin text-5xl">Over 30+ integrations</h1>
          {/* <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            We help you generate and post content quickly - both manually and
            automatically.
          </p> */}
        </div>
        <div className="container mx-auto px-4 py-2">
          {/* Use the IconCloud component */}
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 mb-8 relative">
        <AIWritingComponent />
      </div>
      <div>
        <FeaturesComponent />
      </div>
      <div>
        <PricingPlans />
      </div>
    </div>
  );
}

export default Socialmedia
