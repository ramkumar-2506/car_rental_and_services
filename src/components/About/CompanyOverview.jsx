import { Link } from "react-router-dom";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";
import AnimatedCounter from "../Common/AnimatedCounter";
import { motion } from "framer-motion";

const highlights = [
  "Sanitized, GPS-enabled, fully insured cars",
  "Daily, weekly, monthly, and corporate rental plans",
  "Airport transfer, chauffeur, and self-drive options",
  "Clear pricing with no hidden charges",
];

const serviceStats = [
  { value: "99%", label: "On-time handovers" },
  { value: "4.9", label: "Average rating" },
  { value: "50K+", label: "Trips completed" },
];

const CompanyOverview = () => {
  return (
    <section className="overflow-hidden bg-slate-50 py-8 sm:py-10">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right" className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-3 shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1300&q=80"
                alt="DriveEase rental fleet lineup"
                loading="lazy"
                className="h-80 w-full rounded-[1.5rem] object-cover sm:h-[30rem]"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">Fleet promise</p>
                <p className="mt-2 text-2xl font-bold">Every car is cleaned, checked, and trip-ready.</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A premium mobility partner for city rides, long trips, and business travel.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              DriveEase is a car rental and services company focused on reliable vehicles, smooth booking, and human support. From compact cars to luxury sedans and SUVs, we help customers choose the right vehicle for every journey.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <HiCheckCircle className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                  <span className="text-sm font-bold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {serviceStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                  <p className="text-2xl font-bold text-slate-950"><AnimatedCounter value={stat.value} /></p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/services" className="btn-ripple mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800">
              View Rental Services
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {[
            ["Our Mission", "Make car rental simple, safe, and transparent with clean vehicles and dependable travel support."],
            ["Our Service Standard", "Inspect every vehicle before handover, communicate clearly, and solve customer needs quickly."],
            ["Our Promise", "No confusing policies, no surprise fees, and no compromise on comfort or safety."],
          ].map(([title, text]) => (
            <motion.article key={title} variants={staggerItem} className="premium-card p-6">
              <h3 className="text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;
