"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalScroll() {
  const sectionContainer = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get the sections
    const sections = sectionsRef.current.querySelectorAll(".section");
    const container = sectionsRef.current;

    // Calculate the total width of all sections
    const totalWidth = Array.from(sections).reduce(
      (width, section) => width + section.offsetWidth,
      0
    );

    // Set the container width to the total width of all sections
    gsap.set(container, { width: totalWidth });

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(container, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionContainer.current,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Clean up on component unmount
    return () => {
      if (scrollTween) scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-black" ref={sectionContainer}>
      <div className="flex gap-8 p-8" ref={sectionsRef}>
        {/* Section 1 */}
        <section className="section w-screen h-screen flex-shrink-0 bg-pink-100 flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-4">
              Supercharge LinkedIn Prospecting with AI
            </h2>
            <p className="text-lg mb-6 text-black">
              End-to-end sales execution with AI customer data synced to a
              single database and generated lead management.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Get started for free
              </button>
              <button className="border border-black text-black px-4 py-2 rounded-md">
                Learn more
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XTasG3UYLvJsY7fJIKnGuto86D7Lkt.png"
              alt="LinkedIn Prospecting Dashboard"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="section w-screen h-screen flex-shrink-0 bg-purple-100 flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-4">
              Automate Your Social Media with AI
            </h2>
            <p className="text-lg mb-6 text-black">
              Write prospect profiles with 30+ data points, easily use different
              CRM clean-up, and organize all content via AppStore API.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Get started for free
              </button>
              <button className="border border-black  text-black px-4 py-2 rounded-md">
                Learn more
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F3q8WvlR0RzaT7qmEYiS4ExkaRMzlg.png"
              alt="Social Media Automation Dashboard"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="section w-screen h-screen flex-shrink-0 bg-blue-100 flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-4">
              Turn Data into Deals with AI-Powered Emails
            </h2>
            <p className="text-lg mb-6 text-black">
              Meeting scheduler & recording software in one with pre-meeting AI
              triggers, instant AI transcription & call notes, and automatic
              follow-up emails & CRM updates.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Get started for free
              </button>
              <button className="border border-black text-black px-4 py-2 rounded-md">
                Learn more
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IOPjurl50QYeJgLaAlYqansKkPmgNA.png"
              alt="AI-Powered Email Dashboard"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </section>

        {/* Section 4 */}
        <section className="section w-screen h-screen flex-shrink-0 bg-yellow-100 flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-4">
              AI Solutions Built to Convert
            </h2>
            <p className="text-lg mb-6        text-black">
              Leverage AI to analyze customer behavior, personalize outreach,
              and optimize your conversion funnel with data-driven insights.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Get started for free
              </button>
              <button className="border border-black  text-black px-4 py-2 rounded-md">
                Learn more
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7i8HRVbWEr2lE1WvRI1IcBQpfRhaU0.png"
              alt="AI Solutions Dashboard"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
