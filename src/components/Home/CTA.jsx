import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { prefillBookingDraft } from "../../utils/prefillBookingDraft";

const CTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.20),transparent_40%)]" />
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="page-container relative py-8 text-center sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-100 backdrop-blur">
            Ready to drive?
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Book in minutes.
            <span className="block text-sky-200">Drive in comfort.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Pick your car, choose your dates, and get an instant quote. No hidden costs, no surprises.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/booking"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              onClick={() =>
                prefillBookingDraft({
                  pickupLocation: "Chennai",
                  dropLocation: "Chennai",
                  vehicle: "Sedan",
                })
              }
            >
              Book Now
              <HiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/cars"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore Cars
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
