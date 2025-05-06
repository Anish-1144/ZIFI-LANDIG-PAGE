import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeaturesComponent = () => {
  const features = [
    {
      icon: "🖼️",
      title: "Graphics",
      description: "Awesome templates for your images.",
    },
    {
      icon: "✍️",
      title: "AI Copywriting",
      description: "Generated marketing text, powered by AI.",
    },
    {
      icon: "📅",
      title: "Scheduling",
      description: "Automatic on all socials.",
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Real-time metrics on performance.",
    },
    {
      icon: "🏷️",
      title: "Hashtags",
      description: "Relevant & trending, freshly updated.",
    },
    {
      icon: "🛒",
      title: "Ecommerce",
      description: "Announce about new products.",
    },
    {
      icon: "🔗",
      title: "Link Shortener",
      description: "Save space on long links in captions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Create workspaces for members.",
    },
  ];

  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingsRef = useRef([]);
  const iconsRef = useRef([]);
  const textsRef = useRef([]);

  useEffect(() => {
    // Ensure all refs arrays are properly initialized
    cardsRef.current = cardsRef.current.filter((item) => item !== null);
    iconsRef.current = iconsRef.current.filter((item) => item !== null);
    headingsRef.current = headingsRef.current.filter((item) => item !== null);
    textsRef.current = textsRef.current.filter((item) => item !== null);

    // Initial setup - with safer animation setup
    gsap.set(cardsRef.current, { autoAlpha: 0, scale: 0.8 });

    // Make sure we're properly setting each icon individually
    iconsRef.current.forEach((icon) => {
      if (icon) gsap.set(icon, { autoAlpha: 0, scale: 0, rotate: -15 });
    });

    gsap.set(headingsRef.current, { autoAlpha: 0, y: 20 });
    gsap.set(textsRef.current, { autoAlpha: 0 });

    // Create a master timeline that will be controlled by ScrollTrigger
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Animation starts when top of container is 80% from top of viewport
        end: "top 30%", // Animation completes when top of container is 30% from top of viewport
        toggleActions: "play none none none", // play, pause, resume, reverse, restart, reset, complete, none
        // markers: true, // Uncomment for debugging
      },
    });

    // Container animation - subtle scale
    masterTl.from(containerRef.current, {
      duration: 1.2,
      scale: 0.95,
      autoAlpha: 0,
      ease: "power3.out",
    });

    // Cards staggered arrival
    masterTl.to(
      cardsRef.current,
      {
        duration: 0.8,
        autoAlpha: 1,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    );

    // Icons animation with bounce - modified to ensure all icons are included
    iconsRef.current.forEach((icon, idx) => {
      masterTl.to(
        icon,
        {
          duration: 0.6,
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
        },
        `-=${idx > 0 ? 0.4 : 0}`
      );
    });

    // Headings fade in and move up
    masterTl.to(
      headingsRef.current,
      {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Description text fade in
    masterTl.to(
      textsRef.current,
      {
        duration: 0.5,
        autoAlpha: 1,
        stagger: 0.08,
        ease: "power1.inOut",
      },
      "-=0.2"
    );

    // Setup individual scroll triggers for each card for an even more dynamic effect
    cardsRef.current.forEach((card, index) => {
      if (!card) return; // Skip if card isn't properly defined

      // Create a hover animation context for each card
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(card, {
        duration: 0.3,
        y: -10,
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        ease: "power2.out",
      });

      // Make sure the icon exists before trying to animate it
      if (iconsRef.current[index]) {
        hoverTl.to(
          iconsRef.current[index],
          {
            duration: 0.4,
            scale: 1.2,
            rotate: 5,
            ease: "elastic.out(1, 0.3)",
          },
          "-=0.3"
        );
      }

      // Set up hover animation triggers
      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative flex flex-col items-center text-center p-6 bg-black rounded-lg shadow-lg text-white cursor-pointer transition-all duration-300 border-2 border-purple-500 hover:bg-purple-500 hover:text-white"
          >
            <div
              ref={(el) => (iconsRef.current[index] = el)}
              className="text-4xl mb-4 icon"
              style={{ display: "block" }} // Ensure icon is displayed
            >
              {feature.icon}
            </div>
            <h3
              ref={(el) => (headingsRef.current[index] = el)}
              className="text-xl font-semibold mb-2"
            >
              {feature.title}
            </h3>
            <p ref={(el) => (textsRef.current[index] = el)} className="text-sm">
              {feature.description}
            </p>
            {index === 1 && (
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default FeaturesComponent;
