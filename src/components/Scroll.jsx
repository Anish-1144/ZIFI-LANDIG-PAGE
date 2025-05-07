"use client";
import { CheckCircle } from "lucide-react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Scroll() {
  const sectionContainer = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get the sections
    const sections = sectionsRef.current.querySelectorAll(".section");
    const container = sectionsRef.current;

    // Calculate the total width of all sections
    const totalWidth = Array.from(sections).reduce(
      (width, section) => width + section.offsetWidth,
      0
    );

    // Set the container width to the total width of all sections
    gsap.set(container, { width: totalWidth });

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(container, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer.current,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Clean up on component unmount
    return () => {
      if (scrollTween) scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-black" ref={sectionContainer}>
      <div
        ref={sectionsRef}
        className="flex gap-8 p-8 overflow-x-auto snap-x snap-mandatory"
      >
        {/* Section 1 */}
        <section className="section w-screen h-screen flex-shrink-0 bg-black flex flex-col md:flex-row items-center justify-center gap-12 p-8 rounded-2xl snap-center">
          <div className="bg-white text-black p-10 rounded-lg max-w-lg">
            <img
              src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746615920/Clip_path_group_lsdo8j.svg"
              alt=""
            />
          </div>
          <div className="bg-white text-black p-10 rounded-lg max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Personalized Client Follow-ups
            </h2>
            <p className="text-gray-600 mb-6">
              Enhance client relationships with tailored follow-up calls and
              messages.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle
                  className="text-blue-500 mr-2 mt-1 flex-shrink-0"
                  size={24}
                />
                <span className="text-gray-700">
                  Send personalized follow-up messages based on client
                  preferences.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  className="text-blue-500 mr-2 mt-1 flex-shrink-0"
                  size={24}
                />
                <span className="text-gray-700">
                  Automate post-appointment feedback collection.
                </span>
              </li>
            </ul>
            <div className="mt-8 ml-12">
              <div className="h-12 w-12 border-t-2 border-l-2 border-white rounded-tl-full"></div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="section w-screen h-screen flex-shrink-0 bg-black flex flex-col md:flex-row items-center justify-center gap-12 p-8 rounded-2xl snap-center">
          <div className="bg-white text-black p-10 rounded-lg max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Real-Time Analytics
            </h2>
            <p className="text-gray-600 mb-6">
              Gain insights into your call scheduling and client engagement with
              real-time data.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle
                  className="text-blue-500 mr-2 mt-1 flex-shrink-0"
                  size={24}
                />
                <span className="text-gray-700">
                  Track appointment trends and client behavior.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  className="text-blue-500 mr-2 mt-1 flex-shrink-0"
                  size={24}
                />
                <span className="text-gray-700">
                  Optimize staff schedules based on peak call times.
                </span>
              </li>
            </ul>
            <div className="mt-8 ml-12">
              <div className="h-12 w-12 border-t-2 border-l-2 border-white rounded-tl-full"></div>
            </div>
          </div>
          <div className="bg-white text-black p-10 rounded-lg max-w-lg">
            <img
              src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746424087/call-ai5_itpohb.svg"
              alt=""
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="section w-screen h-screen flex-shrink-0 bg-black flex flex-col md:flex-row items-center justify-center gap-12 p-8 rounded-2xl snap-center">
          <div className="bg-white text-black p-10 rounded-lg max-w-lg">
            <img
              src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746614065/0998_wb4a5e.png"
              alt=""
            />
          </div>
          <div className="bg-white text-black p-10 rounded-lg max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Secure & Compliant
            </h2>
            <p className="text-gray-600 mb-6">
              Protect client data with secure and compliant automation systems.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle
                  className="text-blue-500 mr-2 mt-1 flex-shrink-0"
                  size={24}
                />
                <span className="text-gray-700">
                  Ensure GDPR and HIPAA compliance for client data.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  className="text-blue-500 mr-2 mt-1 flex-shrink-0"
                  size={24}
                />
                <span className="text-gray-700">
                  Encrypt all client communications for maximum security.
                </span>
              </li>
            </ul>
            <div className="mt-8 ml-12">
              <div className="h-12 w-12 border-t-2 border-l-2 border-white rounded-tl-full"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
