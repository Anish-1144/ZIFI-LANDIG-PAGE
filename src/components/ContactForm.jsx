import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm font-medium">Get Started</div>
          
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Get in touch with us.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold">
            We're here to assist you.
          </h2>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 focus:border-indigo-500 outline-none pb-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 focus:border-indigo-500 outline-none pb-2"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 focus:border-indigo-500 outline-none pb-2"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-transparent border-b border-gray-700 focus:border-indigo-500 outline-none pb-2"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium"
          >
            Leave us a Message
            <Send size={16} />
          </button>
        </div>

        {/* Dots/circles shown on the right side */}
        <div className="hidden md:flex flex-col gap-4 absolute right-12 top-1/3">
          <div className="w-4 h-4 rounded-full border border-gray-400"></div>
          <div className="w-4 h-4 rounded-full border border-gray-400"></div>
          <div className="w-4 h-4 rounded-full border border-gray-400"></div>
        </div>
      </div>
    </div>
  );
}
