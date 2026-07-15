import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCarSide,
  FaPhoneAlt,
} from "../Icons/FaFallback";

// Tailwind migration: removed Navbar.css



const navLinks = [
  { name: "Home", path: "/" },

  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Cars", path: "/fleet" },
  { name: "Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${sticky ? "bg-white/95 backdrop-blur shadow-md" : "bg-white/70 backdrop-blur-sm"}`}>
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 py-4">
          <FaCarSide className="text-3xl text-blue-600" />
          <div>
            <h2 className="text-lg font-bold text-gray-900 leading-none">DriveEase</h2>
            <span className="block text-xs text-gray-500 mt-0.5">Car Rental & Services</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </nav>

        {/* Book Now */}
        <Link
          to="/booking"
          className="hidden lg:inline-flex rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
        </button>

      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-3 shadow-inner">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm py-2 px-3 rounded-lg ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-50/50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-gray-150 flex flex-col gap-2">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>
            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;