import { useMemo } from "react";
import { motion } from "framer-motion";
import cars from "../../data/cars";
import CarCard from "./CarCard";
import Reveal, { staggerContainer } from "../Common/Reveal";

const normalizeCategory = (cat) => {
  if (!cat) return "All";
  const v = String(cat).trim();
  return v.toLowerCase();
};

const CarListing = ({ selectedCategory = "All" }) => {
  const items = useMemo(() => {
    const list = Array.isArray(cars) ? cars : [];
    const target = normalizeCategory(selectedCategory);
    if (target === "all") return list;

    const mapped = {
      economy: ["Hatchback", "Sedan"],
      suv: ["SUV"],
      luxury: ["Luxury"],
      vans: ["MPV", "Van"],
    };

    const allowed = mapped[target] ?? [selectedCategory];
    return list.filter((car) => allowed.includes(String(car.category)));
  }, [selectedCategory]);

  return (
    <section className="bg-white pb-14 sm:pb-18 lg:pb-24">
      <div className="page-container">
        <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              {selectedCategory === "All" ? "Featured Vehicles" : selectedCategory}
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Choose Your Ride
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Browse popular cars and book instantly. Prices shown are per day.
          </p>
        </Reveal>

        <motion.div
          key={selectedCategory}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.length ? (
            items.map((car) => (
              <CarCard
                key={car.id}
                image={car.image}
                name={car.name}
                category={car.category}
                fuel={car.fuel}
                transmission={car.transmission}
                seats={car.seats}
                price={car.price}
                rating={car.rating}
                brand={car.brand}
                luggage={car.luggage}
              />
            ))
          ) : (
            <p className="col-span-full py-20 text-center text-sm font-semibold text-slate-500">
              No cars found for this category.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CarListing;
