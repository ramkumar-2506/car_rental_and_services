import { motion } from "framer-motion";
import { HiSparkles, HiShieldCheck, HiBanknotes } from "react-icons/hi2";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const features = [
  {
    icon: HiSparkles,
    title: "Best-in-class comfort",
    description: "Clean interiors and smooth ride quality.",
  },
  {
    icon: HiShieldCheck,
    title: "Safety first",
    description: "Well-maintained vehicles and verified options.",
  },
  {
    icon: HiBanknotes,
    title: "Affordable deals",
    description: "Transparent pricing and frequent offers.",
  },
];

const CarFeatures = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-18">
      <div className="page-container">
        <Reveal>
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Why Drive With Us
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Features you&rsquo;ll love
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="premium-card p-6 sm:p-7"
              >
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CarFeatures;
