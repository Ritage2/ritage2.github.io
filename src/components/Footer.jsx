
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-orange-500 text-white mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-20">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-3 flex items-left gap-2">
         <img 
          src="/logo1.png" 
          alt="Wanderly Logo" 
          className="w-6 h-6"
         />
         About Wanderly
         </h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Wanderly is your trusted travel planner. Discover destinations,
            plan your trips, and make memories with ease. Built with love for
            our graduation project.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/planner" className="hover:underline">Planner</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm text-gray-200"> Cairo, Egypt</p>
          <p className="text-sm text-gray-200"> support@wanderly.com</p>
          <p className="text-sm text-gray-200"> +20 123 456 789</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
            <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-600 text-center py-3 text-xs text-black">
        © {new Date().getFullYear()} Wanderly — Made with Love for your graduation project
      </div>
    </footer>
  );
}
