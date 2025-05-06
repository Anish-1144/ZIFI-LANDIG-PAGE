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
    { text: "Logoipsum", style: "font-bold text-gray-400" },
    { text: "logo", style: "font-bold text-gray-400" },
    { text: "LOQO", style: "font-bold text-gray-400" },
    { text: "IPSUM", style: "font-bold text-gray-400" },
    { text: "Logoipsum", style: "font-bold text-gray-400" },
  ];

  return (
    <div>
      <Hero />
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
          <h1 className='text-thin text-5xl'>Over 30+ integrations</h1>
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
