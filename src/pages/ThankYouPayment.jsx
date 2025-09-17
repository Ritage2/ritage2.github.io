import React from "react";
import { Link } from "react-router-dom";

export default function ThankYouPayment() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl md:text-5xl font-bold text-green-600 text-center">
        Payment Successful!
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 text-center max-w-xl">
       Thank you for your purchase. Your booking is confirmed, and we’ll keep you updated every step of the way.
      </p>
      <p className="mt-6 italic text-gray-600 text-center">
        "Travel is the only thing you buy that makes you richer."
      </p>

      <Link
        to="/home"
        className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
