import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

// Dummy testimonial data
const testimonials = [
  {
    category: "SALES LEADERS",
    name: "Nicole Coetzer",
    title: "Head of Sales Development",
    company: "Kinsta",
    companyLogo: "/api/placeholder/100/30",
    years: 5,
  },
  {
    category: "ACCOUNT EXECS",
    name: "Diego Cobian",
    title: "Enterprise Account Executive",
    company: "Amobee",
    companyLogo: "/api/placeholder/100/30",
    years: 3,
  },
  {
    category: "SDRS",
    name: "Andrew Froning",
    title: "SDR Leader",
    company: "Cyera",
    companyLogo: "/api/placeholder/100/30",
    years: 2,
  },
  {
    category: "REV OPS",
    name: "Mark Turner",
    title: "VP of Revenue Operations",
    company: "Built",
    companyLogo: "/api/placeholder/100/30",
    years: 6,
  },
  {
    category: "MARKETING",
    name: "Sarah Johnson",
    title: "Head of Digital Marketing",
    company: "TechFlow",
    companyLogo: "/api/placeholder/100/30",
    years: 4,
  },
  {
    category: "CUSTOMER SUCCESS",
    name: "Michael Chen",
    title: "Customer Success Manager",
    company: "CloudWave",
    companyLogo: "/api/placeholder/100/30",
    years: 3,
  },
  {
    category: "PRODUCT",
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "Nexos",
    companyLogo: "/api/placeholder/100/30",
    years: 4,
  },
  {
    category: "ENGINEERING",
    name: "David Kim",
    title: "Lead Developer",
    company: "Synapt",
    companyLogo: "/api/placeholder/100/30",
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
                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mb-2">
                      <img
                        src={`/api/placeholder/100/100`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-600">{testimonial.title}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>@ {testimonial.years} years</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <img
                      src={testimonial.companyLogo}
                      alt={`${testimonial.company} logo`}
                      className="h-6"
                    />
                  </div>
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
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mb-2">
                    <img
                      src={`https://www.fotor.com/features/random-image-generator/`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-base">{testimonial.name}</h3>
                  <p className="text-xs text-gray-600">{testimonial.title}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>@ {testimonial.years} years</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <img
                    src={testimonial.companyLogo}
                    alt={`${testimonial.company} logo`}
                    className="h-6"
                  />
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
                className={isTransitioning ? "opacity-50" : "opacity-100"}
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
                className={isTransitioning ? "opacity-50" : "opacity-100"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
