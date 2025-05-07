import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Image,
  PenTool,
  Calendar,
  BarChart2,
  Hash,
  ShoppingBag,
  Link,
  Users,
} from "lucide-react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeaturesComponent = () => {
  const features = [
    {
      icon: <Image size={28} />,
      title: "Graphics",
      description: "Awesome templates for your images.",
    },
    {
      icon: <PenTool size={28} />,
      title: "AI Copywriting",
      description: "Generated marketing text, powered by AI.",
    },
    {
      icon: <Calendar size={28} />,
      title: "Scheduling",
      description: "Automatic on all socials.",
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Analytics",
      description: "Real-time metrics on performance.",
    },
    {
      icon: <Hash size={28} />,
      title: "Hashtags",
      description: "Relevant & trending, freshly updated.",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Ecommerce",
      description: "Announce about new products.",
    },
    {
      icon: <Link size={28} />,
      title: "Link Shortener",
      description: "Save space on long links in captions.",
    },
    {
      icon: <Users size={28} />,
      title: "Collaboration",
      description: "Create workspaces for members.",
    },
  ];

  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const headingsRef = useRef([]);
  const textsRef = useRef([]);

  useEffect(() => {
    // Filter out null refs
    cardsRef.current = cardsRef.current.filter((item) => item !== null);
    iconsRef.current = iconsRef.current.filter((item) => item !== null);
    headingsRef.current = headingsRef.current.filter((item) => item !== null);
    textsRef.current = textsRef.current.filter((item) => item !== null);

    // Initial setup with faster animation timing
    gsap.set(cardsRef.current, { autoAlpha: 0, y: 15 });
    gsap.set(iconsRef.current, { autoAlpha: 0, y: 10 });
    gsap.set(headingsRef.current, { autoAlpha: 0, y: 10 });
    gsap.set(textsRef.current, { autoAlpha: 0 });

    // Create a master timeline with optimized settings
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Faster container animation
    masterTl.from(containerRef.current, {
      duration: 0.5,
      autoAlpha: 0,
      ease: "power2.out",
    });

    // Optimized card animations with faster timing
    masterTl.to(
      cardsRef.current,
      {
        duration: 0.4,
        autoAlpha: 1,
        y: 0,
        stagger: 0.05, // Reduced stagger time
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Icons animation - simpler and faster
    masterTl.to(
      iconsRef.current,
      {
        duration: 0.3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.03,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Faster headings animation
    masterTl.to(
      headingsRef.current,
      {
        duration: 0.3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.03,
        ease: "power2.out",
      },
      "-=0.1"
    );

    // Faster text animation
    masterTl.to(
      textsRef.current,
      {
        duration: 0.2,
        autoAlpha: 1,
        stagger: 0.02,
        ease: "power1.out",
      },
      "-=0.1"
    );

    // Quick hover animations
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(card, {
        duration: 0.2,
        y: -5, // Reduced movement
        scale: 1.02, // Subtler scale
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        ease: "power2.out",
      });

      if (iconsRef.current[index]) {
        hoverTl.to(
          iconsRef.current[index],
          {
            duration: 0.2,
            scale: 1.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }

      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative flex flex-col items-center text-center p-6 bg-black rounded-lg shadow-lg text-white cursor-pointer transition-all duration-200 border border-purple-500 hover:bg-purple-900 hover:text-white"
          >
            <div
              ref={(el) => (iconsRef.current[index] = el)}
              className="text-purple-400 mb-4 icon"
            >
              {feature.icon}
            </div>
            <h3
              ref={(el) => (headingsRef.current[index] = el)}
              className="text-lg font-semibold mb-2"
            >
              {feature.title}
            </h3>
            <p
              ref={(el) => (textsRef.current[index] = el)}
              className="text-sm text-gray-300"
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
