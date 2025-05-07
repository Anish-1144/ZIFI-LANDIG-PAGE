import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ZifyBotHero() {
  const [isHovered, setIsHovered] = useState(null);

  const features = [
    {
      title: "Smart Cold Calling",
      id: "cold-calling",
      link: "/calling-agent",
    },
    
    { title: "AI-email marketing", id: "email", link: "/email" },
    {
      title: "AI-automated social media",
      id: "social",
      link: "/features/social",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center p-8 md:p-16 rounded-2xl">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-thin mb-8">
          ZifyBot, The AI-Driven Sales Acceleration Platform
        </h1>

        <p className="text-lg md:text-xl mb-12 text-gray-300">
          ZifyBot is your all-in-one AI-powered platform for modern sales
          teams—equipping you with intelligent tools to engage, convert, and
          scale faster than ever.
        </p>

        <div className="space-y-6 mb-12">
          {features.map((feature) => (
            <a
              href={feature.link}
              key={feature.id}
              className="flex items-center justify-between border-b border-gray-700 pb-4 cursor-pointer group"
              onMouseEnter={() => setIsHovered(feature.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="text-lg">{feature.title}</span>
              <ArrowRight
                className={`transition-transform duration-300 ${
                  isHovered === feature.id ? "transform translate-x-2" : ""
                }`}
                size={20}
              />
            </a>
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
          Get started for free
        </button>
      </div>
    </div>
  );
}
