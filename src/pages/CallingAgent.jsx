import React from 'react'

import CallAIComponent from '../components/CallAIComponent'
import Scroll from '../components/Scroll'
import SpeakSmarter from '../components/SpeakSmarter'
import BusinessSolution from '../components/BusinessSolution'
import PricingPlans from '../components/PricingPlans'

function CallingAgent() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-70"
            style={{ filter: "brightness(0.5)" }}
          >
            <source
              src="https://res.cloudinary.com/dfcbjgt3w/video/upload/v1745980562/clarity-stream_yoydsc.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="content-container relative  container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-thin mb-6 tracking-tight text-white drop-shadow-lg">
            Next-Gen AI Voice Agent for Smart, Human-Like Conversations Time{" "}
            <br className="text-4xl" />
          </h1>
          {/* <div className="text-4xl">Human-Like Conversations</div> */}

          <div className="max-w-md mx-auto mt-10 mb-16">
            <div className="flex bg-black/30 backdrop-blur-md rounded-md overflow-hidden p-1 border border-white/10">
              <input
                type="text"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent py-3 px-4 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      <CallAIComponent />
      <Scroll />
      <SpeakSmarter />
      <BusinessSolution />
      <PricingPlans />

      <div className="flex justify-center items-center mt-12 mb-8 relative">
        <img
          src="https://res.cloudinary.com/dfcbjgt3w/image/upload/v1746445325/rt-12_pkwohe.svg"
          alt="Graphic"
        />
        

        <button className="absolute z-10 mt-20  bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default CallingAgent
