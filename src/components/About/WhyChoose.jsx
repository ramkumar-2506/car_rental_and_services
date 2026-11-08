import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiClock,
  HiCreditCard,
  HiLocationMarker,
  HiShieldCheck,
  HiSparkles,
  HiSupport,
} from "react-icons/hi";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const features = [
  {
    icon: HiSparkles,
    title: "Clean Premium Fleet",
    description: "Choose from hatchbacks, sedans, SUVs, luxury cars, and vans maintained for comfort and safety.",
  },
  {
    icon: HiCreditCard,
    title: "Transparent Pricing",
    description: "Clear daily, weekly, and monthly rates with upfront fees before you confirm the booking.",
  },
  {
    icon: HiShieldCheck,
    title: "Insured & Verified",
    description: "Every rental includes verified documentation, insurance coverage, and pre-trip inspection.",
  },
  {
    icon: HiClock,
    title: "Quick Pickup & Return",
    description: "Fast handovers, flexible return windows, and convenient location-based vehicle delivery.",
  },
  {
    icon: HiSupport,
    title: "24/7 Assistance",
    description: "Get human support for route help, extensions, vehicle questions, and roadside assistance.",
  },
  {
    icon: HiLocationMarker,
    title: "Airport & City Services",
    description: "Book airport transfers, chauffeur rides, corporate travel, and outstation rental packages.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Why Rent With DriveEase
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Everything you need before, during, and after the ride.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We combine premium vehicle care, reliable service teams, and simple booking flows so customers can travel without stress.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} variants={staggerItem} className="premium-card group p-6">
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:gap-3 hover:text-sky-500">
                  Learn More
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-16 grid gap-10 rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] sm:p-8 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right" className="p-1 sm:p-3">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
              Built For Real Trips
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              From airport pickup to long-term leasing, we keep travel simple.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Whether you need a self-drive car for a weekend, a chauffeur for a business meeting, or a monthly plan for your team, our rental support is designed around your schedule.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Self-drive rentals", "Chauffeur service", "Corporate packages", "Roadside assistance"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-slate-100 backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" className="overflow-hidden rounded-[1.5rem]">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury rental car on city road"
              loading="lazy"
              className="h-80 w-full object-cover transition duration-700 hover:scale-105 sm:h-[28rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
