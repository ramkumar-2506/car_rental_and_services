import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiUserGroup,
  HiBeaker,
  HiAdjustmentsHorizontal,
  HiStar,
  HiBuildingStorefront,
  HiCube,
  HiChevronDown,
} from "react-icons/hi2";
import Button from "../Common/Button";
import { staggerItem } from "../Common/Reveal";

const primaryDetails = [
  { key: "fuel", icon: HiBeaker, label: "Fuel", getValue: (c) => c.fuel },
  { key: "transmission", icon: HiAdjustmentsHorizontal, label: "Transmission", getValue: (c) => c.transmission },
  { key: "seats", icon: HiUserGroup, label: "Seats", getValue: (c) => `${c.seats} Seats` },
];

const extraDetails = [
  { key: "brand", icon: HiBuildingStorefront, label: "Brand", getValue: (c) => c.brand },
  { key: "luggage", icon: HiCube, label: "Luggage", getValue: (c) => `${c.luggage} Bags` },
];

const CarCard = ({
  image,
  name,
  category,
  fuel,
  transmission,
  seats,
  price,
  rating,
  brand,
  luggage,
}) => {
  const [showExtra, setShowExtra] = useState(false);
  const car = { fuel, transmission, seats, brand, luggage };

  return (
    <motion.article variants={staggerItem} className="premium-card group flex flex-col overflow-hidden">
      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-950">
              {name}
            </h3>
            <span className="mt-0.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              {category}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 ring-1 ring-amber-200">
            <HiStar className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-sm font-bold text-slate-900">{rating}</span>
          </div>
        </div>

        <div className="mt-4 border-y border-slate-100 py-3">
          <div className="grid grid-cols-3 gap-2">
            {primaryDetails.map((d) => {
              const Icon = d.icon;
              return (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => setShowExtra((prev) => !prev)}
                  className="flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-center transition hover:bg-slate-50 active:scale-95"
                >
                  <Icon className="h-4 w-4 text-sky-500" />
                  <span className="text-[11px] font-bold leading-tight text-slate-700">
                    {d.getValue(car)}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showExtra && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-2">
                  {extraDetails.map((d) => {
                    const Icon = d.icon;
                    const val = d.getValue(car);
                    if (!val && val !== 0) return null;
                    return (
                      <div
                        key={d.key}
                        className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0 text-sky-500" />
                        {val}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setShowExtra((prev) => !prev)}
            className="mx-auto mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 transition hover:text-sky-500"
          >
            <HiChevronDown
              className={`h-3.5 w-3.5 transition ${showExtra ? "rotate-180" : ""}`}
            />
            {showExtra ? "Less" : "More"}
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-950">
              ₹{price}
            </span>
            <span className="ml-1 text-xs font-semibold text-slate-500">/day</span>
          </div>
          <Link
            to="/booking"
            onClick={() => {
              const pickupDate = new Date().toISOString().split("T")[0];
              const returnDate = new Date(Date.now() + 86400000)
                .toISOString()
                .split("T")[0];
              localStorage.setItem(
                "carrental.booking.draft",
                JSON.stringify({
                  pickupLocation: "Chennai",
                  dropLocation: "Chennai",
                  pickupDate,
                  pickupTime: "10:00",
                  returnDate,
                  returnTime: "10:00",
                  vehicle: category,
                  carName: name,
                  carCategory: category,
                })
              );
            }}
          >
            <Button text="Book Now" variant="primary" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default CarCard;
