import { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function SocialMediaNavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const socialIcons = [
    { icon: Facebook, label: "Facebook", color: "#1877F2" },
    { icon: MessageCircle, label: "WhatsApp", color: "#25D366" },
    { icon: Instagram, label: "Instagram", color: "#E4405F" },
    { icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
    { icon: Youtube, label: "YouTube", color: "#FF0000" },
  ];

  return (
    <div className="flex justify-center w-full bg-black py-4">
      <div className="flex items-center gap-4 px-6 py-3 bg-black rounded-full">
        {socialIcons.map((item, index) => (
          <motion.div
            key={item.label}
            className="relative"
            onHoverStart={() => setActiveIndex(index)}
            onHoverEnd={() => setActiveIndex(null)}
            initial={{ y: 0 }}
            whileHover={{
              y: -5,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
            }}
          >
            <motion.div
              className="p-3 rounded-full cursor-pointer flex items-center justify-center bg-gray-900"
              initial={{ backgroundColor: "rgba(17, 24, 39, 1)" }}
              animate={{
                backgroundColor:
                  activeIndex === index
                    ? "rgba(31, 41, 55, 1)"
                    : "rgba(17, 24, 39, 1)",
                boxShadow:
                  activeIndex === index
                    ? `0px 0px 12px 2px ${item.color}40`
                    : "0px 0px 0px 0px rgba(0,0,0,0)",
                transition: {
                  type: "tween",
                  duration: 0.2,
                },
              }}
            >
              <motion.div
                initial={{ scale: 1, color: "rgb(156, 163, 175)" }}
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                  color:
                    activeIndex === index ? item.color : "rgb(156, 163, 175)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                <item.icon size={20} />
              </motion.div>
            </motion.div>
            {activeIndex === index && (
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.2,
                    delay: 0.05,
                  },
                }}
              >
                {item.label}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
