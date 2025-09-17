
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/ThankYouContact"); 
  };

  return (
    <div className="w-full min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl shadow-blue-500/50 rounded-2xl p-8 w-full max-w-lg">
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-sky-800">
          Contact Us 
        </h1>
        <p className="text-center text-gray-500 mb-8">
          We’d love to hear from you! Fill out the form below.
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            required/>
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            required></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
