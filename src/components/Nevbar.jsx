import React, { useState, useEffect } from "react";
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
    // Your navItems array remains unchanged
    {
      name: "Features",
      dropdownItems: [
        {
          title: "Email Marketing",
          description: "Automate targeted email campaigns.",
          icon: "Mail",
          link: "/features/email-marketing",
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
          link: "/features/social-media",
        },
        {
          title: "Lead Generation",
          description: "Capture quality leads at scale.",
          icon: "Users",
          link: "/features/lead-generation",
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
      dropdownItems: [
        {
          title: "Basic",
          description: "Perfect for startups and small teams.",
          icon: "CreditCard",
          link: "/pricing/basic",
        },
        {
          title: "Pro",
          description: "Designed for growing businesses.",
          icon: "CreditCard",
          link: "/pricing/pro",
        },
        {
          title: "Enterprise",
          description: "Tailored for large organizations.",
          icon: "CreditCard",
          link: "/pricing/enterprise",
        },
      ],
      subLinks: [
        {
          name: "Monthly",
          link: "/pricing/monthly",
          description: "Flexible month-to-month plans.",
        },
        {
          name: "Annual",
          link: "/pricing/annual",
          description: "Discounted yearly plans.",
        },
        {
          name: "Custom",
          link: "/pricing/custom",
          description: "Tailored pricing for your needs.",
        },
        {
          name: "Comparison",
          link: "/pricing/comparison",
          description: "Compare all available plans.",
        },
      ],
    },
    {
      name: "About",
      dropdownItems: [
        {
          title: "Our Story",
          description: "Discover our journey.",
          icon: "Building",
          link: "/about/story",
        },
        {
          title: "Team",
          description: "Meet the experts.",
          icon: "Users",
          link: "/about/team",
        },
        {
          title: "Careers",
          description: "Join our team.",
          icon: "Building",
          link: "/about/careers",
        },
      ],
      subLinks: [
        {
          name: "Mission",
          link: "/about/mission",
          description: "Learn about our core mission.",
        },
        {
          name: "Values",
          link: "/about/values",
          description: "Discover our guiding principles.",
        },
        {
          name: "Press",
          link: "/about/press",
          description: "Read our latest news.",
        },
        {
          name: "Contact",
          link: "/about/contact",
          description: "Get in touch.",
        },
      ],
    },
    {
      name: "Studies",
      dropdownItems: [
        {
          title: "Case Studies",
          description: "Success stories.",
          icon: "BookOpen",
          link: "/studies/cases",
        },
        {
          title: "Research",
          description: "Industry insights.",
          icon: "BookOpen",
          link: "/studies/research",
        },
        {
          title: "White Papers",
          description: "In-depth analyses.",
          icon: "BookOpen",
          link: "/studies/white-papers",
        },
      ],
      subLinks: [
        {
          name: "Success",
          link: "/studies/success",
          description: "Client success outcomes.",
        },
        {
          name: "Reports",
          link: "/studies/reports",
          description: "Key industry reports.",
        },
        {
          name: "Benchmarks",
          link: "/studies/benchmarks",
          description: "Performance metrics.",
        },
        {
          name: "Data Sheets",
          link: "/studies/data-sheets",
          description: "Detailed metrics.",
        },
      ],
    },
    {
      name: "CRM",
      dropdownItems: [
        {
          title: "CRM Enrichment",
          description: "Enhance CRM data.",
          icon: "Database",
          link: "/crm/enrichment",
        },
        {
          title: "Waterfall",
          description: "Progressive data.",
          icon: "Database",
          link: "/crm/waterfall",
        },
        {
          title: "CSV",
          description: "Manage large datasets.",
          icon: "Database",
          link: "/crm/csv",
        },
        {
          title: "API",
          description: "Automate workflows.",
          icon: "Database",
          link: "/crm/api",
        },
      ],
      subLinks: [
        {
          name: "Salesforce",
          link: "/crm/salesforce",
          description: "Enhance Salesforce.",
        },
        {
          name: "HubSpot",
          link: "/crm/hubspot",
          description: "Power up HubSpot.",
        },
        {
          name: "Custom",
          link: "/crm/custom",
          description: "Custom CRM connections.",
        },
        { name: "Scanner", link: "/crm/scanner", description: "Fix CRM data." },
      ],
    },
    {
      name: "Personalize",
      dropdownItems: [
        {
          title: "Apollo Platform",
          description: "Comprehensive sales solution.",
          icon: "Layers",
          link: "/personalize/apollo",
        },
        {
          title: "Data Network",
          description: "Dynamic data for campaigns.",
          icon: "Database",
          link: "/personalize/data-network",
        },
        {
          title: "Apollo AI",
          description: "Intelligent automation with AI. ",
          icon: "Layers",
          link: "/personalize/ai",
        },
      ],
      subLinks: [
        {
          name: "Integrations",
          link: "/personalize/integrations",
          description: "Connect tools.",
        },
        {
          name: "Extension",
          link: "/personalize/extension",
          description: "Browser personalization.",
        },
        {
          name: "Automation",
          link: "/personalize/automation",
          description: "Automate tasks.",
        },
        {
          name: "Reports",
          link: "/personalize/reports",
          description: "Review results.",
        },
      ],
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
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-white">ZifyBot</div>
            <nav>
              <ul className="flex space-x-6 ml-8">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="relative py-4"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={`#${item.name.toLowerCase()}`}
                      className="text-md font-medium text-white hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </a>

                    {hoveredItem === item.name && (
                      <motion.div
                        className={`absolute left-0 z-50 mt-3 bg-white rounded-xl shadow-lg py-8 flex border border-gray-100 ${
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
          </div>

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
