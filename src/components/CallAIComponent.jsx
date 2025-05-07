import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { Plus } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function CallAIComponent() {
  const [selected, setSelected] = useState("Male - Friendly and ...");
  const [workspace, setWorkspace] = useState("My workspace");
  const circleRefs = useRef([]);
  const cardsRef = useRef([]);
  const textSectionRef = useRef(null);
  const containerRef = useRef(null);

  const logoImages = [
    { text: "Apollo.ai", style: "font-bold text-gray-400" },
    { text: "Close.io", style: "font-bold text-gray-400" },
    { text: "Five9", style: "font-bold text-gray-400" },
    { text: "Seamless.ai", style: "font-bold text-gray-400" },
    { text: "Clay.run", style: "font-bold text-gray-400" },
  ];

  const peopleImages = [
    "https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746427238/ai_image2_ixzuyy.svg",
    "https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746427238/ai_image_yp7woh.svg",
    "/api/placeholder/120/120",
    "https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746427237/ai_image3_rylaql.svg",
    "https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746427237/ai_image4_df0xbm.svg",
  ];

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger animation for circles
    gsap.set(circleRefs.current, { opacity: 0, x: 0 });

    gsap.to(circleRefs.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      x: (i) => {
        if (i === 0) return -80;
        if (i === 1) return -40;
        if (i === 3) return 40;
        if (i === 4) return 80;
        return 0;
      },
      ease: "power2.out",
    });

    // Animation for feature cards
    gsap.set(cardsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.9,
    });

    gsap.to(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.5)",
    });

    // Animation for the text section
    gsap.set(textSectionRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.to(textSectionRef.current, {
      scrollTrigger: {
        trigger: textSectionRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center justify-start pt-12 px-6">
      {/* Logo Marquee */}
      <Marquee speed={40} gradient={false} className="w-full mb-8">
        <div className="flex items-center space-x-12 px-4">
          {logoImages.map((logo, index) => (
            <div key={index} className="flex text-5xl items-center mx-4">
              <span className={logo.style}>{logo.text}</span>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Animated People Images */}
      <div
        ref={containerRef}
        className="flex items-center justify-center mb-16  relative mt-12"
      >
        {peopleImages.map((img, index) => {
          let size = "w-32 h-32";
          if (index === 1 || index === 3) size = "w-44 h-44";
          if (index === 2) size = "w-56 h-56";

          let bgColor = "bg-white";
          if (index === 1) bgColor = "bg-yellow-400";
          if (index === 2) bgColor = "bg-blue-700 ";
          if (index === 3) bgColor = "bg-pink-300";

          return (
            <div
              key={index}
              ref={(el) => (circleRefs.current[index] = el)}
              className={`${size} rounded-full ${bgColor} flex items-center justify-center p-1 overflow-hidden`}
              style={{ opacity: 0 }}
            >
              {index === 2 ? (
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
              ) : (
                <img
                  src={img}
                  alt="User"
                  className="w-full h-full rounded-full object-cover"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {[
          {
            content: (
              <>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1">
                    <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-sm mb-2">
                  Use{" "}
                  <strong className="text-purple-600">
                    1-click recordings
                  </strong>{" "}
                  to capture and store every interaction.
                </h3>
              </>
            ),
          },
          {
            content: (
              <>
                <div className="flex items-center justify-between mb-8">
                  <select
                    className="bg-gray-100 text-black text-sm rounded-md p-2 pr-8 w-full"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <option>Male - Friendly and ...</option>
                  </select>
                </div>
                <h3 className="text-sm mb-2">
                  Select from diverse{" "}
                  <strong className="text-purple-600">lifelike voices</strong>{" "}
                  to enhance customer engagement
                </h3>
              </>
            ),
          },
          {
            content: (
              <>
                <div className="flex items-center justify-between mb-8">
                  <input
                    type="text"
                    className="bg-gray-100 w-24 text-black text-sm rounded-md p-2 flex-grow"
                    value={workspace}
                    onChange={(e) => setWorkspace(e.target.value)}
                  />
                  <button className="bg-blue-600 text-white p-2 rounded-md ml-2">
                    <Plus size={16} />
                  </button>
                </div>
                <h3 className="text-sm mb-2">
                  Collaborate effectively with{" "}
                  <strong className="text-purple-600">
                    workspaces & team members
                  </strong>
                </h3>
              </>
            ),
          },
          {
            content: (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm">John Doe</div>
                  <select className="bg-gray-100 text-black text-sm rounded-md p-2 pr-8">
                    <option>Outbound</option>
                  </select>
                </div>
                <h3 className="text-sm mb-2">
                  Create agents for both{" "}
                  <strong className="text-purple-600">
                    incoming and outgoing calls
                  </strong>{" "}
                  with 1 click
                </h3>
              </>
            ),
          },
        ].map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white text-black rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
            style={{ opacity: 0 }}
          >
            {card.content}
          </div>
        ))}
      </div>

      {/* Logo Display with Text */}
      <div className="mt-12" ref={textSectionRef} style={{ opacity: 0 }}>
        <div className="flex justify-center items-center">
          <div className="text-white font-thin text-2xl text-center px-4">
            Break free from 1 by 1 phone calls with our AI phone multitasking{" "}
            <br />
            agents. Save thousands on human agents while responding faster,{" "}
            <br />
            converting more clients & offering 24/7 availability.
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <img
            src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746446947/ct-19_ad6zcs.png"
            alt=""
          />
        </div>
       
      </div>
    </div>
  );
}
