import React, { useEffect, useRef } from "react";
import SocialMediaNavBar from "./FooterShare";
import {
  Mail,
  X,
  Instagram,
  Twitter,
  MessageCircle,
  Facebook,
  Linkedin,
  Youtube,
  Sun,
  Moon,
} from "lucide-react";

// Import GSAP - Make sure you have installed it:
// npm install gsap

const navLinks = [
  "About",
  "Works",
  "Pricing",
  "Products",
  "Agency",
  "Dashboard",
  "Dlcons",
  "DShapes",
  "Design",
  "Components",
  "Graaadients",
  "Blogs",
  "Graphic",
  "3D Icons",
  "Colors",
  "Contact",
  "Terms",
  "Privacy",
];

const socialIcons = [
  { icon: Mail, href: "#" },
  { icon: X, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: MessageCircle, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Sun, href: "#" },
  { icon: Moon, href: "#" },
];

const Footer = () => {
  // Create refs for animation targets
  const footerRef = useRef(null);
  const navLinksRef = useRef([]);
  const socialBarRef = useRef(null);
  const dividerRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default || gsapModule;

      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Main footer reveal animation
      gsap.fromTo(
        footerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=100px",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate nav links with staggered effect
      gsap.fromTo(
        navLinksRef.current.filter(Boolean),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: navLinksRef.current[0],
            start: "top bottom-=80px",
            toggleActions: "play none none none",
          },
        }
      );

      // Social media navigation bar animation
      if (socialBarRef.current) {
        gsap.fromTo(
          socialBarRef.current,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: socialBarRef.current,
              start: "top bottom-=50px",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate divider line
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top bottom-=30px",
            toggleActions: "play none none none",
          },
        }
      );

      // Copyright text animation
      gsap.fromTo(
        copyrightRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: "top bottom-=20px",
            toggleActions: "play none none none",
          },
        }
      );

      // Create hover animations for nav links
      navLinksRef.current.forEach((link) => {
        if (!link) return;

        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            color: "#8A2BE2", // Bright purple color on hover
            y: -3,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            color: "#FFFFFF",
            y: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        });
      });

      // Clean up function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-10 mt-12 overflow-hidden"
    >
      <div className="max-w-[2000px] mx-auto px-4">
        {/* Grid of navigation links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-center mb-10">
          {navLinks.map((item, index) => (
            <a
              key={index}
              ref={(el) => (navLinksRef.current[index] = el)}
              href="#"
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Media Navigation Bar */}
        <div ref={socialBarRef}>
          <SocialMediaNavBar />
        </div>

        {/* Divider line */}
        <hr ref={dividerRef} className="my-6 border-gray-800" />

        {/* Copyright */}
        <div ref={copyrightRef} className="text-center text-sm mt-4">
          <p>© 2025 Made with ♥ by NineXFold</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
