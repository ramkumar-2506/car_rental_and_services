import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight, HiPhone } from "react-icons/hi";

const ServicesHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 90]);

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <motion.div
        className="absolute inset-0 -z-20 bg-cover bg-center will-change-transform"
        style={{
          y,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.94),rgba(15,23,42,0.76),rgba(2,6,23,0.38))]" />

      <div className="page-container relative flex min-h-[68svh] items-center py-16 sm:py-20 lg:py-54">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-100 backdrop-blur-xl">
            Services that actually help on the road
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Not just rental cars.
            <span className="block text-sky-200">Complete travel support.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Pick a car for a day, send a driver for a meeting, arrange airport pickup, or keep a vehicle for months. We keep the service practical, clear, and easy to use.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/booking" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
              Book a Car
              <HiArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">
              <HiPhone className="h-4 w-4" />
              Speak to Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
