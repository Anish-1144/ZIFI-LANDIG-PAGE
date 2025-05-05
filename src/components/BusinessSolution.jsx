import React, { useState } from "react";

const FeatureCard = ({ title, description }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg flex items-start space-x-4 border-2 border-transparent hover:border-purple-500 transition duration-300 ease-in-out transform hover:scale-105">
    <div className="w-12 h-12 bg-gray-700 rounded-lg flex-shrink-0"></div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <p className="pb-4 text-gray-400">{answer}</p>}
    </div>
  );
};

const BusinessSolution = () => {
  const features = [
    {
      title: "Get new leads",
      description:
        "Lead generation through personalized recommendations and proactive engagement",
    },
    {
      title: "Inform your customers",
      description:
        "Keep your customers informed about products, services, policies, and company",
    },
    {
      title: "Launch surveys",
      description:
        "Conduct surveys to gather customer feedback, improving products and services",
    },
    {
      title: "Decrease support costs",
      description:
        "Automating repetitive tasks and streamlining operations to save time for human agents",
    },
    {
      title: "Boost conversions",
      description:
        "Provide personalized, efficient customer service with offers and recommendations",
    },
    {
      title: "Provide round-the-clock support",
      description:
        "24/7 support to handle customer queries, boosting satisfaction and loyalty",
    },
  ];

  const faqs = [
    {
      question: "Are VPN providers secure?",
      answer:
        "Some VPN providers may log your internet activity or have vulnerable security systems. When choosing a provider, it’s important to pay attention to privacy, encryption levels, and more.",
    },
    {
      question: "How does ArgusVPN work?",
      answer:
        "ArgusVPN works by encrypting your internet connection and routing it through a secure server, protecting your data and privacy.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes, ArgusVPN offers a free plan with limited features. You can upgrade to a premium plan for more benefits.",
    },
    {
      question: "How to start using ArgusVPN?",
      answer:
        "To start using ArgusVPN, sign up on our website, download the app, and follow the setup instructions.",
    },
    {
      question: "Are there any traffic limits when using ArgusVPN?",
      answer:
        "The free plan has traffic limits, but premium plans offer unlimited bandwidth for uninterrupted usage.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8  ">
      <h1 className="text-5xl font-thin text-center mb-12 text-purple-400 mt-20 ">
        The best solution for your business needs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 mx-auto max-w-3xl ">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className="w-full bg-white rounded-xl text-gray-900 pt-12 pb-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <h2 className="text-5xl font-thin text-center mb-8 mt-20">
          Popular questions
        </h2>
        <div className="max-w-3xl mx-auto text-black">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-12"></div>
      </div>
    </div>
  );
};

export default BusinessSolution;
