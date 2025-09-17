import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart(); 
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
  `${isActive ? "text-orange-400 font-bold" : "text-black font-semibold"} hover:text-orange-400 transition-colors duration-200`;


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full  z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-500">
            Wanderly
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/home" className={linkClass}>Home</NavLink>
          <NavLink to="/destinations" className={linkClass}>Destinations</NavLink>
          <NavLink to="/planner" className={linkClass}>Planner</NavLink>
          <NavLink to="/blog" className={linkClass}>Reviews & Blog</NavLink>
          <NavLink to="/aboutUs" className={linkClass}>About Us</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <NavLink
            to="/checkout"
            className="ml-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
          >
            Cart ({cartItems?.length || 0})
          </NavLink>

          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 rounded-lg bg-orange-400 text-white hover:bg-orange-600 transition-colors duration-200"
          >
            Logout
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-orange-400 "


          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-3">
            <NavLink to="/home" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/destinations" className={linkClass} onClick={() => setIsOpen(false)}>Destinations</NavLink>
            <NavLink to="/planner" className={linkClass} onClick={() => setIsOpen(false)}>Planner</NavLink>
            <NavLink to="/blog" className={linkClass} onClick={() => setIsOpen(false)}>Reviews & Blog</NavLink>
            <NavLink to="/aboutUs" className={linkClass} onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>

            <NavLink
              to="/checkout"
              className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Cart ({cartItems?.length || 0})
            </NavLink>

            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-orange-400 text-white hover:bg-yellow-400 transition-colors duration-200"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
