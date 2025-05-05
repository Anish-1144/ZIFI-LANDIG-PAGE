import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import ApolloSection from "./components/Features";
import ZifyBotHero from "./components/About";
import TestimonialCarousel from "./components/Testimonial";
import HorizontalScroll from "./components/HorizontalScroll";
import GrowthIQHero from "./components/GrowthIQHero";
import Footer from "./components/Footer";
import Nevbar from "./components/Nevbar";
import CallingAgent from "./pages/CallingAgent";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Nevbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero/>
                  <ApolloSection />
                  <ZifyBotHero />
                  <HorizontalScroll />
                  <TestimonialCarousel />
                  <GrowthIQHero />
                </>
              }
            />
            <Route path="/calling-agent" element={<CallingAgent />} />
            {/* <Route path="/email" element={<Email />} />
            <Route path="/socialmedia" element={<SocialMedia />} /> */}
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
