import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ApolloSection from "./components/Features";
import ZifyBotHero from "./components/About";
// import SalesPlatform from"./components/SalesPlatform"
import TestimonialCarousel from "./components/Testimonial";
import HorizontalScroll from "./components/HorizontalScroll";
import GrowthIQHero from "./components/GrowthIQHero";
import Footer from "./components/Footer";
import Nevbar from "./components/Nevbar";

function App() {
  // const [scrolled, setScrolled] = useState(false);



  return (
    <div className="min-h-screen bg-transparent text-white">
     

      <main>
       < Nevbar />
        <Hero />
        <ApolloSection />
        {/* <Stats /> */}
        <ZifyBotHero />
        {/* <SalesPlatform /> */}
        <HorizontalScroll />
        <TestimonialCarousel />
        <GrowthIQHero />
        <Footer />
      </main>
    </div>
  );
}

export default App;
