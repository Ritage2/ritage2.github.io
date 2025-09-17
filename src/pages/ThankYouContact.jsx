import React from "react";
import { Link } from "react-router-dom";

export default function ThankYouContact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-center text-sky-800">
        Thank You!
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 text-center max-w-xl">
        Thank you for reaching out to us. Our team will review your message and get back to you shortly.
      </p>

      <Link
        to="/home"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
