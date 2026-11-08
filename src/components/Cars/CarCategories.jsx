import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  HiSquares2X2,
  HiCurrencyRupee,
  HiTruck,
  HiStar,
  HiRectangleGroup,
} from "react-icons/hi2";
import Reveal from "../Common/Reveal";

const categories = [
  { key: "All", icon: HiSquares2X2 },
  { key: "Economy", icon: HiCurrencyRupee },
  { key: "SUV", icon: HiTruck },
  { key: "Luxury", icon: HiStar },
  { key: "Vans", icon: HiRectangleGroup },
];

const CarCategories = ({ onCategorySelect }) => {
  const [active, setActive] = useState("All");
  const available = useMemo(() => categories, []);

  const handleSelect = (cat) => {
    setActive(cat);
    onCategorySelect?.(cat);
  };

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="page-container">
        <Reveal>
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Browse by Type
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Car Categories
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          {available.map(({ key, icon: Icon }) => (
            <motion.button
              key={key}
              type="button"
              layout
              onClick={() => handleSelect(key)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                active === key
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-200"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Icon className="h-4 w-4" />
              {key}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCategories;
