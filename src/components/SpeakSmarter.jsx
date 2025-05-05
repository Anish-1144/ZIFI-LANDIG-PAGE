import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SpeakSmarter = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 h-screen">
      <h1
        ref={titleRef}
        className="text-5xl md:text-6xl font-thin text-center leading-tight"
      >
        Speak Smarter <br /> with AI-Phone Agent
      </h1>
      <p
        ref={textRef}
        className="mt-12 text-lg md:text-xl text-center max-w-3xl text-gray-300"
      >
        AI voice assistants can help improve the user experience by providing
        convenience, personalization, and round-the-clock availability.
        Furthermore, technology may automate repetitive tasks and give proactive
        help, improving overall efficiency and reducing the strain on human
        support staff.
      </p>
      <img
        ref={imageRef}
        className="mt-12"
        src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746424088/call-ai2_troafk.svg"
        alt="AI Phone Agent"
      />
    </div>
  );
};

export default SpeakSmarter;
