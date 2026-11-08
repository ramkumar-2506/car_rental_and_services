import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiOutlinePhone, HiX } from "react-icons/hi";
import navlogo from "../../assets/DriveEase.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Cars", path: "/cars" },
  { name: "Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

const setDefaultBookingDraft = () => {
  localStorage.setItem(
    "carrental.booking.draft",
    JSON.stringify({
      pickupLocation: "Chennai",
      dropLocation: "Chennai",
      pickupDate: new Date().toISOString().split("T")[0],
      pickupTime: "10:00",
      returnDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
      returnTime: "10:00",
      vehicle: "Sedan",
    })
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navClass = ({ isActive }) =>
    `relative rounded-full px-4 py-2 text-sm font-bold transition duration-300 ${
      isActive
        ? "bg-sky-50 text-sky-700 shadow-sm shadow-sky-900/5"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
    }`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/60 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white/90 backdrop-blur"
      }`}
    >
      <div className="page-container flex min-h-[76px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-300" onClick={() => setMenuOpen(false)}>
          <img src={navlogo} alt="DriveEase car rental logo" className="h-16 w-auto sm:h-18" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-sm backdrop-blur-xl lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <NavLink key={item.name} to={item.path} className={navClass}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+919876543210" className="btn-ripple inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:border-sky-200 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300">
            <HiOutlinePhone className="h-5 w-5" />
            Call Now
          </a>
          <Link to="/booking" onClick={setDefaultBookingDraft} className="btn-ripple inline-flex min-h-11 items-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-300 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-[76px] z-50 bg-slate-950/35 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="mx-4 mt-3 rounded-[1.75rem] border border-white/80 bg-white p-3 shadow-2xl"
              aria-label="Mobile navigation"
              onClick={(event) => event.stopPropagation()}
            >
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `mb-1 block rounded-2xl px-4 py-3 text-base font-bold transition ${
                      isActive
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3">
                <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25" onClick={() => setMenuOpen(false)}>
                  <HiOutlinePhone className="h-4 w-4" />
                  Call Now
                </a>
                <Link to="/booking" onClick={() => { setDefaultBookingDraft(); setMenuOpen(false); }} className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white">
                  Book Now
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
