import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Pricing from "./pages/pricing";
import Hero from "./components/Hero";
import ApolloSection from "./components/Features";
import ZifyBotHero from "./components/About";
import TestimonialCarousel from "./components/Testimonial";
import HorizontalScroll from "./components/HorizontalScroll";
import GrowthIQHero from "./components/GrowthIQHero";
import Footer from "./components/Footer";
import Nevbar from "./components/Nevbar";
import CallingAgent from "./pages/CallingAgent";
import Email from "./pages/Email";
import Socialmedia from "./pages/Socialmedia";
import Contect from "./pages/Contect";


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
                  <Hero />
                  <ApolloSection />
                  <ZifyBotHero />
                  <HorizontalScroll />
                  <TestimonialCarousel />
                  <GrowthIQHero />
                </>
              }
            />
            <Route path="/calling-agent" element={<CallingAgent />} />
            <Route path="/email" element={<Email />} />
            <Route path="/socialmedia" element={<Socialmedia />} />
            <Route path="/contact" element={<Contect />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
