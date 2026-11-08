import { motion } from "framer-motion";
import { HiCreditCard, HiBanknotes, HiBuildingOffice } from "react-icons/hi2";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const methods = [
  { icon: HiCreditCard, title: "UPI / Cards", desc: "Quick and secure digital payments." },
  { icon: HiBanknotes, title: "Cash on Pickup", desc: "Pay when you receive your car." },
  { icon: HiBuildingOffice, title: "Corporate Billing", desc: "For businesses and bulk bookings." },
];

const PaymentOptions = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-18">
      <div className="page-container">
        <Reveal>
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Secure Checkout
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Payment Options
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
            Choose how you want to pay. Final payment method will be confirmed at checkout.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.title} variants={staggerItem} className="premium-card p-6 sm:p-7">
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{m.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{m.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentOptions;
