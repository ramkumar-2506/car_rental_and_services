import { motion } from "framer-motion";
import { HiCheckCircle, HiClock, HiCreditCard, HiShieldCheck, HiSparkles, HiSupport } from "react-icons/hi";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const reasons = [
  {
    icon: HiSparkles,
    title: "Premium Fleet",
    description: "Well-maintained hatchbacks, sedans, SUVs, luxury cars, and vans for every trip.",
  },
  {
    icon: HiCreditCard,
    title: "Transparent Pricing",
    description: "Know the full cost before you book. No hidden charges or surprise fees at return.",
  },
  {
    icon: HiShieldCheck,
    title: "Fully Insured",
    description: "Every rental includes comprehensive insurance coverage for a worry-free drive.",
  },
  {
    icon: HiClock,
    title: "Quick Pickup & Return",
    description: "Fast handovers, flexible return timings, and convenient vehicle delivery options.",
  },
  {
    icon: HiSupport,
    title: "24/7 Support",
    description: "Reach us anytime for booking help, route questions, extensions, or roadside assistance.",
  },
  {
    icon: HiCheckCircle,
    title: "Sanitized & Safe",
    description: "Every car is cleaned, inspected, and documented before handover for your safety.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Built for reliable, everyday travel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We focus on clean vehicles, clear pricing, and dependable support so your rental experience is smooth from booking to return.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative mt-16 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-lg sm:p-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80)",
            }}
          />
          <div className="relative z-10">
            <Reveal>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-100">
                Trusted By Thousands
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Your reliable travel partner for every journey
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Business trips, family vacations, airport transfers, or weekend getaways — we make every ride comfortable, safe, and hassle-free.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Well-maintained & sanitized vehicles",
                  "Quick pickup & easy return process",
                  "Daily, weekly & monthly rental plans",
                  "24/7 customer assistance & roadside support",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <HiCheckCircle className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
                    <span className="text-sm font-medium text-slate-200">{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
