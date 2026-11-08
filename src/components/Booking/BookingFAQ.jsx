import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiQuestionMarkCircle } from "react-icons/hi2";
import faqs from "../../data/faqs";
import Reveal from "../Common/Reveal";

const BookingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const list = Array.isArray(faqs) ? faqs.slice(0, 6) : [];

  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="page-container">
        <Reveal>
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Booking FAQs
          </h2>
        </Reveal>

        {list.length ? (
          <div className="mt-8 grid gap-4">
            {list.map((f, idx) => {
              const isOpen = openIndex === idx;
              const question = f.question || f.title;
              const answer = f.answer || f.description;
              return (
                <div key={question} className="premium-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <HiQuestionMarkCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                      <span className="text-base font-bold text-slate-900">{question}</span>
                    </div>
                    <HiChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                        isOpen ? "rotate-180 text-sky-500" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-6 py-4">
                          <p className="text-sm leading-7 text-slate-600">{answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-6 text-sm font-semibold text-slate-500">No FAQs available.</p>
        )}
      </div>
    </section>
  );
};

export default BookingFAQ;
