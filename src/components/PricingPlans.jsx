import React, { useState, useEffect, useRef } from "react";

// PricingCard Component for individual plan cards
const PricingCard = ({
  name,
  monthlyPrice,
  annualPrice,
  description,
  features,
  buttonText,
  isPopular,
  index,
  billing,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Arrival animation: slide in from sides with stagger
    const direction = index % 2 === 0 ? -100 : 100; // Alternate left and right

    // Animation logic would normally be here with GSAP
    // Since we can't use external libraries, we're keeping the ref for structure
  }, [index]);

  // Calculate displayed price based on billing
  const displayPrice = billing ? annualPrice : monthlyPrice * 12;
  const monthlyEquivalent = billing
    ? (annualPrice / 12).toFixed(2)
    : monthlyPrice;
  const yearlySavings = monthlyPrice * 12 - annualPrice;
  const savingsPercentage = Math.round(
    (yearlySavings / (monthlyPrice * 12)) * 100
  );

  return (
    <div
      ref={cardRef}
      className={`relative bg-black rounded-xl ${
        isPopular ? "p-10 scale-105 border-purple-500 shadow-2xl" : "p-8"
      } text-center shadow-xl border ${
        isPopular ? "border-blue-500" : "border-gray-700"
      } transition-all duration-300 hover:scale-105`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-purple-500 text-white text-sm font-bold px-4 py-2 rounded-bl-lg rounded-tr-lg">
          MOST POPULAR
        </div>
      )}
      <h3
        className={`${
          isPopular ? "text-2xl" : "text-xl"
        } font-bold text-white uppercase`}
      >
        {name}
      </h3>

      {billing ? (
        <>
          <p className="text-4xl font-bold mt-4 text-white">
            ${Math.round(annualPrice)}{" "}
            <span className="text-base font-normal">/year</span>
          </p>
          <div className="mt-2">
            <p className="text-green-400 text-sm font-medium">
              ${monthlyEquivalent}/mo equivalent
            </p>
            <p className="text-green-500 font-semibold mt-1">
              Save ${yearlySavings} ({savingsPercentage}%)
            </p>
          </div>
        </>
      ) : (
        <>
          <p className="text-4xl font-bold mt-4 text-white">
            ${monthlyPrice}{" "}
            <span className="text-base font-normal">/month</span>
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            ${monthlyPrice * 12}/year if paid monthly
          </p>
        </>
      )}

      <ul className="text-left text-gray-300 mt-6 space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-green-500 mr-2">✔</span> {feature}
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 ${
          isPopular
            ? "bg-purple-600 text-white hover:bg-purple-400"
            : "bg-white text-black hover:bg-gray-200"
        } font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full ${
          isPopular ? "text-lg" : ""
        }`}
      >
        {buttonText}
      </button>
      <p className="text-gray-500 mt-4 text-sm">{description}</p>
    </div>
  );
};

// Main PricingPlans Component
const PricingPlans = () => {
  const [billing, setBilling] = useState(false); // false for monthly, true for annual

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 278, // Approx 20% discount: 29 * 12 * 0.8
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "48-hour support response time",
        "Limited API access",
        "Community support",
        "Basic analytics",
        "48-hour support response time",
        
      ],
      buttonText: "Start Free Trial",
      isPopular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 99,
      annualPrice: 950, // Approx 20% discount: 99 * 12 * 0.8
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "24-hour support response time",
        "Full API access",
        "Priority support",
        "Team collaboration",
        "Custom integrations",
      ],
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 299,
      annualPrice: 2868, // Approx 20% discount: 299 * 12 * 0.8
      description: "For large organizations with specific needs",
      features: [
        "Everything in Professional",
        "Custom solutions",
        "Dedicated account manager",
        "1-hour support response time",
        "SSO Authentication",
        "Advanced security",
        "Custom contracts",
        "SLA agreement",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <div className="p-10 bg-black min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-thin text-white text-center">
         Pricing Plans 
      </h1>
      <p className="text-gray-400 mt-4 text-center max-w-2xl">
        Choose the plan that works for you. All plans include access to our
        platform, lead generation tools, and dedicated support.
      </p>

      {/* Billing toggle with enhanced visibility */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex items-center justify-center bg-black p-4 rounded-full shadow-lg border border-gray-700">
          <span
            className={`text-lg mr-3 ${
              !billing ? "text-white font-semibold" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={billing}
              onChange={() => setBilling(!billing)}
            />
            <div className="w-16 h-8 bg-black rounded-full px-1 flex items-center border border-gray-700 transition-all duration-300">  
              <div
                className={`w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billing ? "ml-8" : "ml-0"
                }`}
              ></div>
            </div>
          </label>
          <div className="flex flex-col items-start ml-3">
            <span
              className={`text-lg ${
                billing ? "text-white font-semibold" : "text-gray-400"
              }`}
            >
              Annual
            </span>
            {billing && (
              <span className="text-purple-500 text-sm font-medium">
                Save 20% yearly
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-12">
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            monthlyPrice={plan.monthlyPrice}
            annualPrice={plan.annualPrice}
            description={plan.description}
            features={plan.features}
            buttonText={plan.buttonText}
            isPopular={plan.isPopular}
            index={index}
            billing={billing}
          />
        ))}
      </div>

      {/* Added benefit reminder */}
      {billing && (
        <div className="mt-8 bg-purple-900 bg-opacity-30 border border-purple-700 rounded-lg p-4 max-w-lg text-center">
          <p className="text-purple-400 font-medium">
            You're saving 20% with annual billing! That's up to $358/year on the
            Enterprise plan.
          </p>
        </div>
      )}
    </div>
  );
};

export default PricingPlans;
