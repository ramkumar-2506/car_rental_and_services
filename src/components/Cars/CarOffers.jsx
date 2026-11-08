import { motion } from "framer-motion";
import { HiTag, HiCalendarDays } from "react-icons/hi2";
import offers from "../../data/offers";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const CarOffers = () => {
  const list = Array.isArray(offers) ? offers : [];

  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="page-container">
        <Reveal>
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Save More
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Special Offers
          </h2>
        </Reveal>

        {list.length ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.slice(0, 6).map((o) => (
              <motion.article
                key={o.title}
                variants={staggerItem}
                className="premium-card group flex flex-col overflow-hidden"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-950">
                      {o.title}
                    </h3>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
                      <HiTag className="h-3.5 w-3.5" />
                      {o.discount}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {o.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-4 text-xs font-semibold text-slate-500">
                    <HiCalendarDays className="h-4 w-4 text-sky-500" />
                    Valid till: {o.validTill}
                  </div>
                  {o.coupon && (
                    <div className="mt-3 rounded-xl border border-dashed border-sky-200 bg-sky-50 px-3 py-2 text-center text-sm font-bold tracking-widest text-sky-700">
                      {o.coupon}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <p className="mt-6 text-sm font-semibold text-slate-500">
            No offers available.
          </p>
        )}
      </div>
    </section>
  );
};

export default CarOffers;
