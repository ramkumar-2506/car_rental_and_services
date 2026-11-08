import { motion } from "framer-motion";
import { HiStar, HiChatAlt2 } from "react-icons/hi";
import testimonials from "../../data/testimonials";
import Reveal from "../Common/Reveal";

const stars = (count) =>
  Array.from({ length: 5 }, (_, i) => (
    <HiStar
      key={i}
      className={`h-4 w-4 ${i < count ? "text-amber-400" : "text-slate-200"}`}
    />
  ));

const Card = ({ t }) => (
  <div className="flex w-72 shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:w-80">
    <div className="flex items-center gap-4">
      <img
        src={t.image}
        alt={t.name}
        loading="lazy"
        className="h-12 w-12 rounded-full object-cover ring-2 ring-sky-100"
      />
      <div>
        <h3 className="text-sm font-bold text-slate-950">{t.name}</h3>
        <p className="text-xs font-medium text-slate-500">{t.city}</p>
      </div>
    </div>
    <div className="mt-4 flex items-center gap-1">{stars(t.rating)}</div>
    <div className="relative mt-4">
      <HiChatAlt2 className="absolute -top-1 -left-1 h-6 w-6 text-sky-100 -rotate-6" />
      <p className="relative pl-5 text-sm leading-relaxed text-slate-600">{t.review}</p>
    </div>
    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-400">
      <span>{t.car}</span>
      <span>{t.date}</span>
    </div>
  </div>
);

const Testimonials = () => {
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700">
            Customer Reviews
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Real feedback from people who booked with us for business trips, family vacations, airport transfers, and weekend getaways.
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[...row1, ...row1].map((t, i) => (
                <Card key={`r1-${t.id}-${i}`} t={t} />
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[...row2, ...row2].map((t, i) => (
                <Card key={`r2-${t.id}-${i}`} t={t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
