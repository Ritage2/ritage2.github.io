import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate("/home"); 
  };

  return (
    <div className="w-full min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-blue-500/50">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-sky-800">
          Create Account 
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please fill in your details to sign up
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
           required />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            required/>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

       
        <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
          
          <Link to="/login" className="hover:text-sky-600 font-semibold">
            <span>Already have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
