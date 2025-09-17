import React from "react";

export default function Hero() {
  return (
    <section
  className="relative bg-cover bg-center h-screen w-full"
  style={{ backgroundImage: "url('/images/mo11.jpg')" }}
>
  <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-20 text-white max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Escape the Ordinary <br /> Travel with Us
    </h1>
    <p className="mt-4 text-gray-200">
     Your Journey Begins Here – Explore, Dream, Travel
    </p>
    <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition ">
      
      Get Started
    </button>
  </div>
</section>

  );
}
