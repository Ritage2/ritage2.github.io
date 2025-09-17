import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
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
          Welcome Back 
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please login to your account
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
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
           required />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition duration-300"
          >
            Login
          </button>
        </form>

       
        <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
          <a href="#" className="hover:text-sky-600">
            Forgot password?
          </a>
          <Link to="/signup" className="hover:text-sky-600">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
