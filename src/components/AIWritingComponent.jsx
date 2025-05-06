import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AIWritingComponent = () => {
  // Create refs for animation targets
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const navItemsRef = useRef([]);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const checklistRef = useRef(null);
  const alternativeTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Initial setup - hide elements
    gsap.set(navRef.current, { autoAlpha: 0, y: -20 });
    gsap.set(navItemsRef.current, { autoAlpha: 0, scale: 0.8 });
    gsap.set(headingRef.current, { autoAlpha: 0, x: -30 });
    gsap.set(paragraphRef.current, { autoAlpha: 0 });
    gsap.set(checklistRef.current.children, { autoAlpha: 0, x: -10 });
    gsap.set(alternativeTextRef.current, { autoAlpha: 0 });
    gsap.set(imageRef.current, { autoAlpha: 0, scale: 0.9, rotation: -3 });

    // Create a timeline controlled by ScrollTrigger
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Animation starts when top of element is 75% from top of viewport
        end: "top 25%", // Animation ends when top of element is 25% from top of viewport
        toggleActions: "play none none reset", // play, pause, resume, reset
        // markers: true, // Uncomment for debugging
      },
    });

    // Container animation
    masterTl.from(containerRef.current, {
      duration: 0.8,
      autoAlpha: 0,
      scale: 0.95,
      ease: "power2.out",
    });

    // Nav bar slides in
    masterTl.to(
      navRef.current,
      {
        duration: 0.6,
        autoAlpha: 1,
        y: 0,
        ease: "power1.out",
      },
      "-=0.3"
    );

    // Nav items pop in one by one
    masterTl.to(
      navItemsRef.current,
      {
        duration: 0.5,
        autoAlpha: 1,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    // Heading slides in from left
    masterTl.to(
      headingRef.current,
      {
        duration: 0.7,
        autoAlpha: 1,
        x: 0,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Paragraph fades in
    masterTl.to(
      paragraphRef.current,
      {
        duration: 0.6,
        autoAlpha: 1,
        ease: "power1.inOut",
      },
      "-=0.4"
    );

    // Checklist items appear with stagger
    masterTl.to(
      checklistRef.current.children,
      {
        duration: 0.5,
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        ease: "power1.out",
      },
      "-=0.3"
    );

    // Alternative text fades in
    masterTl.to(
      alternativeTextRef.current,
      {
        duration: 0.4,
        autoAlpha: 1,
        ease: "power1.inOut",
      },
      "-=0.2"
    );

    // Image rotates and fades in
    masterTl.to(
      imageRef.current,
      {
        duration: 0.8,
        autoAlpha: 1,
        scale: 1,
        rotation: 0,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.8"
    );

    // Setup hover animations for nav items
    navItemsRef.current.forEach((item) => {
      // Create a timeline for each nav item's hover animation
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(item, {
        duration: 0.3,
        y: -5,
        scale: 1.05,
        ease: "power2.out",
      });

      // Add icon animation
      const icon = item.querySelector("div");
      hoverTl.to(
        icon,
        {
          duration: 0.4,
          scale: 1.1,
          rotation: 5,
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.3"
      );

      // Set up event listeners
      item.addEventListener("mouseenter", () => hoverTl.play());
      item.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // Clean up ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Create ref for checklist items to animate them separately
  const createChecklistItems = (paragraph) => {
    // Split the paragraph to extract checklist items
    const parts = paragraph.split("✅");

    // First part is the intro text
    const introText = parts[0];

    // Rest are checklist items
    const checklistItems = parts.slice(1).map((item, index) => (
      <p key={index} className="flex items-start mb-2">
        <span className="text-green-500 font-bold mr-2">✅</span>
        {item.trim()}
      </p>
    ));

    return { introText, checklistItems };
  };

  // Process the paragraph
  const { introText, checklistItems } =
    createChecklistItems(`Our AI assistant helps you generate high-quality marketing text for
            social media posts, blogs, ads, and more — all in 26 global
            languages.
            
            Whether you're launching a product, sharing updates, or engaging
            your audience, our AI delivers compelling, ready-to-publish content
            tailored to your brand voice.
            
            ✅ Multilingual support
            ✅ Time-saving automation
            ✅ SEO-optimized suggestions
            ✅ Customizable tone and style
            
            Start creating content that resonates — faster, smarter, and at
            scale.`);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white rounded-xl text-gray-900 pt-12 pb-32 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Navigation Bar */}
      <nav
        ref={navRef}
        className="flex justify-around items-center bg-gray-100 rounded-lg p-4 mb-8"
      >
        <div
          ref={(el) => (navItemsRef.current[0] = el)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-green-200 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </div>
          <span className="text-sm mt-1">AI Writing</span>
        </div>
        <div
          ref={(el) => (navItemsRef.current[1] = el)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-orange-200 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7-7-7 7"
              ></path>
            </svg>
          </div>
          <span className="text-sm mt-1">Automation</span>
        </div>
        <div
          ref={(el) => (navItemsRef.current[2] = el)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-purple-200 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <span className="text-sm mt-1">Scheduling</span>
        </div>
        <div
          ref={(el) => (navItemsRef.current[3] = el)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-blue-200 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10z"
              ></path>
            </svg>
          </div>
          <span className="text-sm mt-1">Analytics</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex justify-between items-start">
        <div className="w-1/2">
          <h1 ref={headingRef} className="text-4xl font-bold mb-4">
            Write your content using AI.
          </h1>

          <div ref={paragraphRef} className="text-gray-600 mb-4">
            {introText}
          </div>

          <div ref={checklistRef} className="text-gray-600 mb-4">
            {checklistItems}
            <p className="mt-4">
              Start creating content that resonates — faster, smarter, and at
              scale.
            </p>
          </div>

          <p ref={alternativeTextRef} className="text-gray-400 text-sm">
            Alternative to – ChatGPT, Jasper
          </p>
        </div>

        <img
          ref={imageRef}
          src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746520899/w21-1_z6ij9n.svg"
          alt="AI Writing Illustration"
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default AIWritingComponent;
