import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, User, Building } from "lucide-react";
import gsap from "gsap";

// Testimonial data with company logos and profile images
const testimonials = [
  {
    category: "SALES LEADERS",
    name: "Nicole Coetzer",
    title: "Head of Sales Development",
    company: "Kinsta",
    profileImage:
      "https://imgs.search.brave.com/hE2dPkdYiEEWpn3HBMIyM5yoe070qoOyjjkDSbFipPk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/MjcyMjM0MS9waG90/by9wcm91ZC1ob21l/LW93bmVyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pSGlm/Sm1vdEU1VE04UUxo/WXAxdWpSTmYxN3Fa/UGo2WXZCYjFXV3h0/TTE0PQ",
    
    years: 5,
  },
  {
    category: "ACCOUNT EXECS",
    name: "Diego Cobian",
    title: "Enterprise Account Executive",
    company: "Amobee",
    profileImage:
      "https://imgs.search.brave.com/PER3dhnzikOIuUNdf0IsJKF4ouLCTE_r4QnU1lUenDI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/OTk0ODQ4OC9waG90/by9idXNpbmVzcy1w/b3J0cmFpdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c2Nt/ZUhyaEZmX3J3Q0JU/SXYwb2o3ZXVEbmI5/TzQtMU9rNElVOXBM/ZmJDVT0",
   
    years: 3,
  },
  {
    category: "SDRS",
    name: "Andrew Froning",
    title: "SDR Leader",
    company: "Cyera",
    profileImage:
      "https://imgs.search.brave.com/ZGjwp1rJd-rUeQjLizlgSOIHLLbykaH2n6-haFBBkM0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/OTY3Mzg3MC9waG90/by95b3VuZy1tYWxl/LWNvbGxlZ2Utc3R1/ZGVudC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WUlfSHlB/cUVnUnhpcXdxN0VZ/TU11eHdoSFJkZU1m/R2k0OU5lLXU5M0tM/WT0",
    
    years: 2,
  },
  {
    category: "REV OPS",
    name: "Mark Turner",
    title: "VP of Revenue Operations",
    company: "Built",
    profileImage:
      "https://imgs.search.brave.com/-nmVZDdmB7_ikR8JDC0HbOGRf3KQSrGy0eQCWVo4av0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NTkzODE2Mi9waG90/by9waXp6ZXJpYS1v/d25lci1zbWlsaW5n/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1WdlBiWElwajg2/X0pWQ1p2VlJsRXJn/N0FqMnhpM3VieVY4/S1E3RnBHNXdZPQ",
   
    years: 6,
  },
  {
    category: "MARKETING",
    name: "Sarah Johnson",
    title: "Head of Digital Marketing",
    company: "TechFlow",
    profileImage:
      "https://imgs.search.brave.com/rfoVI-N4nYfq5StycSKfIiRGbQU_2QnGBZ9QgB91unA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/ODA4MjU3Ny9waG90/by9wb3J0cmFpdC1v/Zi1hLWxhdGluby12/ZXRlcmFuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1fOEdO/aUttRFdYWlVTbE5R/VmVvbWRfVjVncVhY/NUw3OHdmWVRtM20y/U1EwPQ",
   
    years: 4,
  },
  {
    category: "CUSTOMER SUCCESS",
    name: "Michael Chen",
    title: "Customer Success Manager",
    company: "CloudWave",
    profileImage:
      "https://imgs.search.brave.com/Nh-P01lpr209Xo0qtAJEEXCZyYw1GI_XOeaJOP_ycrM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/Njk2MjkyNy9waG90/by9zZW5pb3ItY2F1/Y2FzaWFuLW1hbi1w/b3J0cmFpdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UDI3/cXlfbFJOT0s5eGtK/OUdoa002U2J4ZkJJ/V3pHYlphUnpGOWhp/OG5zND0",
  
    years: 3,
  },
  {
    category: "PRODUCT",
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "Nexos",
    profileImage:
      "https://imgs.search.brave.com/ncU58rr6QqiipUIQjWINIoZAZVHXmAflRaCXb5G-kNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/ODk2NjM3NC9waG90/by9wb3J0cmFpdC1v/Zi1hLWhhcHB5LW1l/eGljYW4tYnVzaW5l/c3N3b21hbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9em1J/VXRHUWk1dzJFMlBw/bEo3WXhMa0RnZS1j/WDVNZHF2REZnNl9i/cVo0VT0",
    
    years: 4,
  },
  {
    category: "ENGINEERING",
    name: "David Kim",
    title: "Lead Developer",
    company: "Synapt",
    profileImage:
      "https://imgs.search.brave.com/8hxlnbXZHu8vRSJd2_UlYamYQAI51RF52sDsanK-cGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NTM4MTEyMC9waG90/by9wb3J0cmFpdC1v/Zi1hLXlvdW5nLXdv/bWFuLW91dGRvb3Jz/LXNtaWxpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVQ1/ZHVrUEQxci1vMEJG/cWVxbElhcDd4encw/N2ljdWNldHdLYUVD/Mk1zNU09",
   
    years: 7,
  },
];

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const carouselContainerRef = useRef(null);
  const currentCardsRef = useRef(null);
  const prevCardsRef = useRef(null);

  // Animation timeline ref
  const timelineRef = useRef(null);

  // Get testimonials for the current and previous pages
  const getTestimonialsForPage = (page) => {
    const startIndex = page * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  const currentTestimonials = getTestimonialsForPage(currentPage);
  const prevTestimonials = getTestimonialsForPage(prevPage);

  // Handle navigation with improved animation flow
  const handlePrevious = () => {
    if (isTransitioning) return;

    // Store current page before changing
    setPrevPage(currentPage);
    setDirection("prev");
    setIsTransitioning(true);

    // Calculate next page
    const nextPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
    setCurrentPage(nextPage);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    // Store current page before changing
    setPrevPage(currentPage);
    setDirection("next");
    setIsTransitioning(true);

    // Calculate next page
    const nextPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
    setCurrentPage(nextPage);
  };

  // Apply smooth scrolling effect
  useEffect(() => {
    // Set up smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Create a main timeline that we'll reuse
    timelineRef.current = gsap.timeline();

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  // Handle page transition animations with improved smoothness
  useEffect(() => {
    if (
      !carouselContainerRef.current ||
      !currentCardsRef.current ||
      !prevCardsRef.current ||
      direction === null
    )
      return;

    // Kill any existing timeline to prevent animation conflicts
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create a new timeline for this transition
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setIsTransitioning(false),
    });

    const currentCards =
      currentCardsRef.current.querySelectorAll(".testimonial-card");
    const prevCards =
      prevCardsRef.current.querySelectorAll(".testimonial-card");

    // Set initial states
    if (direction === "next") {
      // Current cards start from right
      gsap.set(currentCards, { x: 60, opacity: 0, scale: 0.95 });

      // Animation sequence
      tl.to(prevCards, {
        x: -60,
        opacity: 0,
        scale: 0.95,
        stagger: 0.06,
        duration: 0.5,
      }).to(
        currentCards,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          clearProps: "all",
        },
        "-=0.3"
      ); // Slight overlap for smoother transition
    } else {
      // Current cards start from left
      gsap.set(currentCards, { x: -60, opacity: 0, scale: 0.95 });

      // Animation sequence
      tl.to(prevCards, {
        x: 60,
        opacity: 0,
        scale: 0.95,
        stagger: 0.06,
        duration: 0.5,
      }).to(
        currentCards,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          clearProps: "all",
        },
        "-=0.3"
      ); // Slight overlap for smoother transition
    }

    // Store the timeline for potential cleanup
    timelineRef.current = tl;
  }, [currentPage, direction]);

  // Initial animation on component mount
  useEffect(() => {
    if (!currentCardsRef.current) return;

    const cards = currentCardsRef.current.querySelectorAll(".testimonial-card");

    gsap.fromTo(
      cards,
      { y: 30, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
        clearProps: "all",
      }
    );
  }, []);

  // Button press animation
  const animateButton = (buttonEl) => {
    gsap.fromTo(
      buttonEl,
      { scale: 1 },
      {
        scale: 0.92,
        duration: 0.15,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      }
    );
  };

  // Pagination indicator animation
  useEffect(() => {
    if (direction !== null) {
      const indicators = document.querySelectorAll(".page-indicator");
      gsap.fromTo(
        indicators[currentPage],
        { scale: 0.5, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [currentPage, direction]);

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("");
  };

  return (
    <div className="p-8">
      <div className="bg-white p-5 rounded-xl">
        {/* Header */}
        <div className="flex justify-between mb-12 items-center">
          <div className="max-w-3xl p-5">
            <h1 className="text-6xl font-thin text-black mb-2">
              ZifyBot for Fastest Growing Businesses
            </h1>
            <p className="text-gray-600 text-base">
              Over 500,000+ companies use ZifyBot to stay ahead of the
              competition.
            </p>
          </div>
          <div className="text-[200px] font-thin text-gray-800">
            500K
            <span className="text-purple-900 text-[200px] font-thin">+</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselContainerRef}
          className="relative min-h-64 overflow-hidden"
        >
          {/* Previous Cards (for animation) */}
          <div
            ref={prevCardsRef}
            className={`grid grid-cols-4 gap-4 absolute top-0 left-0 w-full ${
              currentPage !== prevPage ? "block" : "hidden"
            }`}
          >
            {direction !== null &&
              prevTestimonials.map((testimonial, index) => (
                <div
                  key={`prev-${index}`}
                  className="testimonial-card border rounded-lg p-6 flex flex-col bg-white shadow-sm"
                >
                  <div className="text-xs font-semibold text-gray-500 mb-4">
                    {testimonial.category}
                  </div>

                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-purple-100 overflow-hidden mb-2 flex items-center justify-center">
                      {testimonial.profileImage ? (
                        <img
                          src={testimonial.profileImage}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={32} className="text-purple-500" />
                      )}
                    </div>
                    <h3 className="font-medium text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-600">{testimonial.title}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>@ {testimonial.years} years</span>
                    </div>
                  </div>

                  {/* <div className="mt-auto">
                    {testimonial. ? (
                      <img
                        src={testimonial.companyLogo}
                        alt={`${testimonial.company} logo`}
                        className="h-6"
                      />
                    ) : (
                      <div className="flex items-center gap-1 text-gray-700">
                        <Building size={16} />
                        <span>{testimonial.company}</span>
                      </div>
                    )}
                  </div> */}
                </div>
              ))}
          </div>

          {/* Current Cards */}
          <div ref={currentCardsRef} className="grid grid-cols-4 gap-4">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={`current-${index}`}
                className="testimonial-card border rounded-lg p-6 flex flex-col bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs font-semibold text-gray-500 mb-4">
                  {testimonial.category}
                </div>

                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 overflow-hidden mb-2 flex items-center justify-center">
                    {testimonial.profileImage ? (
                      <img
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={32} className="text-purple-500" />
                    )}
                  </div>
                  <h3 className="font-medium text-base">{testimonial.name}</h3>
                  <p className="text-xs text-gray-600">{testimonial.title}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>@ {testimonial.years} years</span>
                  </div>
                </div>

                <div className="mt-auto">
                  {testimonial.companyLogo ? (
                    <img
                      src={testimonial.companyLogo}
                      alt={`${testimonial.company} logo`}
                      className="h-6"
                    />
                  ) : (
                    <div className="flex items-center gap-1 text-gray-700">
                      <Building size={16} />
                      <span>{testimonial.company}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows with enhanced indicators */}
        <div className="flex justify-between mt-6 items-center">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                className={`page-indicator w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === idx ? "bg-purple-700 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={(e) => {
                animateButton(e.currentTarget);
                handlePrevious();
              }}
              className="p-2 border bg-black rounded-md hover:bg-gray-100 transition-all duration-300 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
              aria-label="Previous testimonials"
              disabled={isTransitioning}
            >
              <ChevronLeft
                size={20}
                className={
                  isTransitioning ? "opacity-50" : "opacity-100 text-white"
                }
              />
            </button>
            <button
              onClick={(e) => {
                animateButton(e.currentTarget);
                handleNext();
              }}
              className="p-2 border bg-black rounded-md hover:bg-gray-100 transition-all duration-300 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
              aria-label="Next testimonials"
              disabled={isTransitioning}
            >
              <ChevronRight
                size={20}
                className={
                  isTransitioning ? "opacity-50" : "opacity-100 text-white"
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
