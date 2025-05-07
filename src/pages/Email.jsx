import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import EmailMarketingPage from "../components/EmailMarketingPage";
import AutomationComponent from "../components/AutomationComponent";
import FeaturesComponent from "../components/FeaturesComponent";
import SegmentationComponent from "../components/SegmentationComponent";
import SupportComponent from "../components/SupportComponent";
import BusinessSolution from "../components/BusinessSolution";
import PricingPlans from "../components/PricingPlans";

gsap.registerPlugin(ScrollTrigger);

function Email() {
  const sectionsRef = useRef([]);
  const contactRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });

    // Button Animation
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

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
              src="https://res.cloudinary.com/dfcbjgt3w/video/upload/v1745980562/clarity-stream_yoydsc.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="content-container relative  container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-thin mb-6 tracking-tight text-white drop-shadow-lg">
            Next-Gen AI Email Agent for Smart Outreach & Quality Lead Conversion{" "}
            <br className="text-4xl" />
          </h1>
          {/* <div className="text-4xl">Human-Like Conversations</div> */}

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

      <div className="py-10" ref={(el) => (sectionsRef.current[0] = el)}>
        <EmailMarketingPage />
      </div>

      <div className="py-10" ref={(el) => (sectionsRef.current[0] = el)}>
        <AutomationComponent />
      </div>

      <div className="py-10" ref={(el) => (sectionsRef.current[1] = el)}>
        <SupportComponent />
      </div>

      <div className="py-10" ref={(el) => (sectionsRef.current[2] = el)}>
        <SegmentationComponent />
      </div>

      <div ref={(el) => (sectionsRef.current[3] = el)}>
        <BusinessSolution />
      </div>

      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <PricingPlans />
      </div>

      {/* Contact Us Section with Animated Button */}
      <div
        className="flex justify-center items-center mt-12 mb-8 relative"
        ref={contactRef}
      >
        <img
          src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746530724/1234wwsd_vl5g5p.svg"
          alt="Graphic"
        />
        <button
          ref={buttonRef}
          className="absolute z-10 mt-20 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Email;
