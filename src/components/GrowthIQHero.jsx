import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GrowthIQHero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const graphicRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations
    const tl = gsap.timeline();

    // Animate the heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate the paragraph text
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Animate the buttons
    tl.fromTo(
      buttonsRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    // Animate the graphics container
    tl.fromTo(
      graphicRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.7"
    );

    // Animate the image
    tl.fromTo(
      imageRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="p-8 bg-black">
      <div
        ref={containerRef}
        className="w-full text-white p-8 md:p-16 lg:p-20 rounded-2xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        style={{ backgroundColor: "#0840FF" }}
      >
        {/* Left content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8 z-10">
          <h1
            ref={headingRef}
            className="text-3xl md:text-4xl font-medium mb-4"
          >
            The Ultimate AI Sales Platform—Unmatched Power, <br />
            Unbelievable Value
          </h1>

          <div ref={textRef} className="text-lg mb-8">
            <p>
              Why juggle multiple tools? GrowthIQ replaces <br />
              expensive stacks with one powerful platform— <br />
              perfect for sales teams, agencies, SaaS, and service- <br />
              based businesses.
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              See pricing
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get started for free
            </button>
          </div>
        </div>

        {/* Right content - Cloudinary illustration */}
        <div
          ref={graphicRef}
          className="w-full md:w-5/12 flex justify-center items-center"
        >
          <img
            src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746070672/fotter_fjegbx.png"
            alt="GrowthIQ Platform Illustration"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  );
}
