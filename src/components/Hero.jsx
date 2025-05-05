import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const circleRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    // Rotate animation for the circle gradient
    if (heroRef.current && circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }

    // Subtle zoom animation for the video background
    if (videoContainerRef.current) {
      gsap.fromTo(
        videoContainerRef.current,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 10,
          ease: "power1.out",
        }
      );
    }

    // Fade in content
    const content = heroRef.current?.querySelector(".content-container");
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      {/* Video Background */}
      <div
        ref={videoContainerRef}
        className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
      >
        <video
          ref={videoRef}
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

      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
        <div
          ref={circleRef}
          className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px]"
        >
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-600/25 to-blue-800/15 blur-xl"></div>
          <div className="absolute w-[70%] h-[70%] top-[15%] left-[15%] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-800/5 blur-lg"></div>
        </div>
        <div className="absolute w-[600px] h-[600px] -bottom-[300px] -left-[200px] rounded-full bg-gradient-to-r from-purple-900/20 to-blue-700/5 blur-xl"></div>
      </div> */}

      <div className="content-container relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-thin mb-6 tracking-tight text-white drop-shadow-lg">
          All-in-One AI-Powered Prospecting & <br />
          Outreach Platform
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
  );
};

export default Hero;
