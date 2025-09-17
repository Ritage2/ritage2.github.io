import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section
      className="relative bg-cover bg-center h-screen w-full text-white"
      style={{ backgroundImage: "url('/images/wall3.jpg')" }}
      
    >
      

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-20">
        
        
        <div className="max-w-lg mt-10">
  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
    Explore <br /> and Travel
  </h1>
  <p className="text-white mb-6">
    Discover the World, One Adventure at a Time
  </p>

  {/* Buttons */}
  <div className="flex gap-4">
    <Link
      to="/login"
      className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition "
    >
      Login
    </Link>
    <Link
      to="/signup"
      className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
    >
      Sign Up
    </Link>
  </div>
</div>


        
        <div className="flex gap-4 mt-8 md:mt-7">
          <img
    src="/images/cup.jpg"
    alt="cup travel 1"
    className="w-60 h-90 object-cover  shadow-lg"
  />

  <img
    src="/images/person.jpg"
    alt="person 2"
    className="w-60 h-80 object-cover  shadow-lg -mt-6"
  />

  <img
    src="/images/window (2).jpg"
    alt="plane window "
    className="w-60 h-90 object-cover  shadow-lg"
  />
        </div>
      </div>
    </section>
  );
}
