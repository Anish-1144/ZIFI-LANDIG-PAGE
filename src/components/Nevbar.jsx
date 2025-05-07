import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  PhoneCall,
  Share2,
  Users,
  CreditCard,
  Building,
  BookOpen,
  Database,
  Layers,
} from "lucide-react";

// Map string names to actual icon components
const iconMap = {
  Mail,
  PhoneCall,
  Share2,
  Users,
  CreditCard,
  Building,
  BookOpen,
  Database,
  Layers,
};

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  // Animation variants for the submenu
  const submenuVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const navItems = [
    {
      name: "Features",
      dropdownItems: [
        {
          title: "Email Marketing",
          description: "Automate targeted email campaigns.",
          icon: "Mail",
          link: "/email",
        },
        {
          title: "Calling Agent",
          description: "AI agents for calls and lead conversion.",
          icon: "PhoneCall",
          link: "/calling-agent",
        },
        {
          title: "Social Media",
          description: "Manage and grow social presence.",
          icon: "Share2",
          link: "/socialmedia",
        },
      ],
      subLinks: [
        {
          name: "B2B Prospecting",
          link: "/features/b2b-prospecting",
          description: "Find and engage B2B leads.",
        },
        {
          name: "Multichannel",
          link: "/features/multichannel",
          description: "Reach prospects across channels.",
        },
        {
          name: "AI Assistants",
          link: "/features/ai-assistants",
          description: "Automate tasks with AI tools.",
        },
        {
          name: "Outbound",
          link: "/features/outbound",
          description: "Enhance outreach effectiveness.",
        },
      ],
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  // Handle mouse enter
  const handleMouseEnter = (itemName) => {
    // Clear any existing timeout to prevent closing
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setHoveredItem(itemName);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 1.5 seconds
    const id = setTimeout(() => {
      setHoveredItem(null);
      setTimeoutId(null);
    }, 1500); // 1.5-second delay
    setTimeoutId(id);
  };

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div className="">
      <header className="bg-transparent">
        <div className="container mx-auto py-2 px-6 flex justify-between items-center">
          {/* Logo on the left */}
          <div className="text-xl font-bold text-white">
            <Link to="/">
              <img
                className="h-10 w-30"
                src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746612707/1234566535_qcbh8s.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Navigation centered in the middle */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative py-4"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.link || `#${item.name.toLowerCase()}`}
                    className="text-md font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>

                  {hoveredItem === item.name && item.dropdownItems && (
                    <motion.div
                      className={`absolute left-1/2 transform -translate-x-1/2 z-50 mt-3 bg-white rounded-xl shadow-lg py-8 flex border border-gray-100 ${
                        item.dropdownItems.length === 3
                          ? "w-[700px]"
                          : "w-[900px]"
                      }`}
                      variants={submenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      // Keep dropdown open when hovering over it
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex-1 px-4">
                        <div
                          className={`grid gap-1 ${
                            item.dropdownItems.length === 3
                              ? "grid-cols-3"
                              : "grid-cols-4"
                          }`}
                        >
                          {item.dropdownItems.map((dropdownItem) => {
                            const IconComponent = iconMap[dropdownItem.icon];
                            return (
                              <div
                                key={dropdownItem.title}
                                className="group flex flex-col items-start text-left p-2"
                              >
                                {IconComponent && (
                                  <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center mb-1">
                                    <IconComponent className="w-5 h-5 text-purple-800" />
                                  </div>
                                )}
                                <h3 className="font-medium text-gray-900 text-sm mb-1">
                                  {dropdownItem.title}
                                </h3>
                                <p className="text-xs text-gray-500 mb-1">
                                  {dropdownItem.description}
                                </p>
                                <a
                                  href={dropdownItem.link}
                                  className="px-3 py-1.5 text-sm font-medium text-purple-800 hover:text-white border border-black hover:bg-purple-800 rounded-md"
                                >
                                  Learn more
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="w-56 bg-gray-50 px-4 py-2">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                          Related
                        </h4>
                        <ul className="space-y-1">
                          {item.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <a
                                href={subLink.link}
                                className="text-sm text-gray-700 hover:text-purple-800"
                              >
                                {subLink.name}
                              </a>
                              {subLink.description && (
                                <p className="text-sm text-gray-500 mt-1">
                                  {subLink.description}
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Login buttons on the right */}
          <div className="flex items-center space-x-4">
            <a
              href="#demo"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Get a demo
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Log in
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
