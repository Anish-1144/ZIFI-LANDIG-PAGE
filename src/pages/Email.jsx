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
      <Hero />

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
