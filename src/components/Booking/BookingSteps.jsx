import { motion } from "framer-motion";
import { HiMagnifyingGlass, HiCalendarDays, HiCreditCard, HiKey } from "react-icons/hi2";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const steps = [
  { icon: HiMagnifyingGlass, title: "Choose Car", desc: "Pick the vehicle that matches your needs." },
  { icon: HiCalendarDays, title: "Select Dates", desc: "Set pickup and return times." },
  { icon: HiCreditCard, title: "Confirm Booking", desc: "Review pricing and confirm." },
  { icon: HiKey, title: "Get Ready to Drive", desc: "We'll help you with pickup details." },
];

const BookingSteps = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-18">
      <div className="page-container">
        <Reveal>
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            How Booking Works
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={staggerItem} className="premium-card relative p-6">
                <span className="absolute right-4 top-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Step {idx + 1}
                </span>
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSteps;
