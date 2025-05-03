import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ApolloSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const headerRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    // Initialize GSAP animations
    const tl = gsap.timeline();

    // Animation for logos
    tl.fromTo(
      logoRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" }
    );

    // Animation for header text
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.4"
    );

    // Animation for stat cards
    tl.fromTo(
      statsRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );
  }, []);

  // Company logos
  const companyLogos = [
    { name: "Autodesk", classes: "w-24" },
    { name: "ClickUp", classes: "w-16" },
    { name: "Veeva", classes: "w-16" },
    { name: "Redis", classes: "w-16" },
    { name: "CYERA", classes: "w-16" },
    { name: "Cint", classes: "w-12" },
    { name: "DocuSign", classes: "w-20" },
  ];

  return (
    <div className="bg-black p-8 ">
      <div
        ref={sectionRef}
        className="w-full bg-white rounded-xl text-gray-900 pt-12 pb-32 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      >
        {/* Top text */}
        <div className="text-sm text-gray-600 mb-8">
          JOIN OVER 500,000 BUSINESSES USING ZIFIBOT
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center gap-8 mb-16">
          {companyLogos.map((logo, index) => (
            <div
              key={logo.name}
              ref={(el) => (logoRefs.current[index] = el)}
              className={`grayscale opacity-70 ${logo.classes}`}
            >
              {logo.name}
            </div>
          ))}
        </div>

        {/* Main heading */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <h2 className="text-4xl font-normal leading-tight">
            Our platform empowers businesses ready to revolutionize the way they
            connect with prospects — smarter, faster, and more effectively."
          </h2>
        </div>

        {/* Stats section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-600 mb-6">
              More Qualified Leads
            </div>
            <div className="text-6xl font-medium">5x</div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-600 mb-6">
              Faster Outreach Response
            </div>
            <div className="text-6xl font-medium">3x</div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-600 mb-6">More Data Access</div>
            <div className="text-6xl font-medium">700%</div>
          </div>
        </div>

        {/* Bottom curve shape */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </div>
    </div>
  );
}
