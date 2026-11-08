import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiPhone } from "react-icons/hi2";
import { prefillBookingDraft } from "../../utils/prefillBookingDraft";

const backgroundImage =
  "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1920&q=80";

const stats = [
  { label: "Premium Cars", value: "500+" },
  { label: "Happy Customers", value: "20K+" },
  { label: "Satisfaction", value: "99%" },
];

const HomeCTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-10 sm:py-12">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.18),transparent_50%)]" />

      <div className="page-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-sky-100 backdrop-blur">
              Premium Car Rental Experience
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Book Your Dream Car
              <span className="block text-sky-200">Today &amp; Start Your Journey</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
              Whether for business, weekend getaway, airport transfer, or a special event — our premium fleet delivers comfort, safety, and style.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-500 px-7 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.97]"
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
              <a
                href="tel:+919876543210"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-[0.97]"
              >
                <HiPhone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="grid grid-cols-3 gap-3 lg:gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur sm:p-6"
              >
                <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-300 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
