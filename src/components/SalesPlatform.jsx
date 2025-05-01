import React from "react";
import { Wifi, AlertTriangle, Activity, RotateCw } from "lucide-react";

export default function SalesPlatform() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Pipeline Builder",
      description:
        "Build pipeline faster with better data, smarter AI, and easier automation.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Call Assistant",
      description:
        "Close every winnable deal with call recordings, meeting scheduling, and AI insights.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Data Enrichment",
      description:
        "Keep your CRM and marketing automation data up to date, all the time.",
    },
    {
      icon: <RotateCw className="w-6 h-6" />,
      title: "Go-To-Market Platform",
      description:
        "Manage your entire end-to-end sales cycle in AppCo — your ultimate command center.",
    },
  ];

  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-8xl rounded-2xl bg-white text-black overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center justify-center bg-white pt-20 pb-32">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-5xl font-thin mb-2">Everything you need</h1>
            <h2 className="text-5xl font-thin">to sell, scale, and succeed</h2>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center text-black"
              >
                <div className="mb-4 p-2 bg-gray-100 rounded-md">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
