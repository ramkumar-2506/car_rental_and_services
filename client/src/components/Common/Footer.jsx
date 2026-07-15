import { Link } from "react-router-dom";
import {
  FaCarSide,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
} from "../Icons/FaFallback";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaCarSide className="footer-logo-icon" />
              <h2 className="text-xl font-bold">DriveEase</h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-300">
              Premium car rental services with affordable pricing, professional
              support, and a wide range of vehicles for every journey.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-100">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/fleet">
                  Fleet
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/booking">
                  Booking
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-100">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Daily Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Corporate Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Wedding Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Airport Pickup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Long-Term Leasing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Roadside Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-100">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>info@driveease.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <span>Tirunelveli, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-3">
              <div className="text-sm text-gray-300">Newsletter</div>
              <div className="flex items-center gap-2">
                <input
                  className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  placeholder="Your Email"
                />
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  aria-label="Subscribe"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DriveEase. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link className="text-gray-400 hover:text-gray-200 transition" to="/">
              Privacy Policy
            </Link>
            <Link className="text-gray-400 hover:text-gray-200 transition" to="/">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

