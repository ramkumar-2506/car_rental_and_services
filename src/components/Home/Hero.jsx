import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import AnimatedCounter from "../Common/AnimatedCounter";
import Button from "../Common/Button";
import { prefillBookingDraft } from "../../utils/prefillBookingDraft";

const heroVideo =
  "https://cdn.pixabay.com/video/2022/06/14/120266-720504932_large.mp4";

const stats = [
  { value: "500+", label: "Premium vehicles" },
  { value: "20K+", label: "Happy customers" },
  { value: "24/7", label: "Concierge support" },
];

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-slate-950 text-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(15,23,42,0.62),rgba(2,6,23,0.36))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.35),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.26),transparent_28%)]" />

      <div className="page-container relative flex min-h-[calc(100svh-76px)] items-center py-14 sm:py-18 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-100 backdrop-blur-xl">
            Premium Car Rental Services
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Drive Luxury.
            <span className="block text-sky-200">Arrive Effortlessly.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Hassle-free rentals with premium vehicles, transparent pricing, and concierge-level service for business trips, vacations, and weekend escapes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              to="/booking"
              className="w-full sm:w-auto"
              onClick={() =>
                prefillBookingDraft({
                  pickupLocation: "Chennai",
                  dropLocation: "Chennai",
                  vehicle: "Sedan",
                })
              }
            >
              <Button text="Book Your Ride" variant="primary"/>
            </Link>

            <Link to="/cars" className="w-full sm:w-auto">
              <Button text="Explore Fleet" variant="outline" />
            </Link>
          </div>

          {/* <div className="mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.12, duration: 0.55 }}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-white">
                  <AnimatedCounter value={item.value} />
                </h3>
                <span className="mt-1 block text-sm font-medium text-slate-200">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
