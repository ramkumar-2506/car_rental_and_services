import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight, HiOutlineShieldCheck, HiPhone } from "react-icons/hi";
import AnimatedCounter from "../Common/AnimatedCounter";

const stats = [
  { value: "500+", label: "Inspected vehicles" },
  { value: "20K+", label: "Happy customers" },
  { value: "24/7", label: "Roadside support" },
  { value: "25+", label: "Pickup locations" },
];

const AboutHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <motion.div
        className="absolute inset-0 -z-20 bg-cover bg-center will-change-transform"
        style={{
          y,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.94),rgba(15,23,42,0.74),rgba(14,165,233,0.34))]" />

      <div className="page-container relative flex min-h-[76svh] items-center py-16 sm:py-20 lg:py-34">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-8xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-100 backdrop-blur-xl">
            <HiOutlineShieldCheck className="h-4 w-4 text-cyan-300" />
            About DriveEase
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Car Rental Built For
            <span className="block text-sky-200">Comfortable Journeys.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            We provide clean, insured, well-maintained cars with easy booking, transparent prices, flexible rental plans, chauffeur options, airport transfers, and round-the-clock travel support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/cars" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300">
              Explore Our Fleet
              <HiArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
              <HiPhone className="h-4 w-4" />
              Talk To Us
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
              >
                <p className="text-2xl font-bold sm:text-3xl"><AnimatedCounter value={item.value} /></p>
                <p className="mt-1 text-xs font-medium text-slate-200">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
