import React from "react";
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
  return (
    <footer className="bg-black text-white py-10 mt-12 ">
      <div className="max-w-[2000px]  mx-auto px-4">
        {/* Grid of navigation links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-center mb-10">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Media Icons row */}
        {/* <div className="flex justify-center flex-wrap gap-4 mb-6">
          {socialIcons.map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div> */}

        {/* Copyright */}
        
        <SocialMediaNavBar />
         <hr />
        <div className="text-center text-sm mt-4">
          <p>© 2025 Made with ♥ by NineXFold</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
