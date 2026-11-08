import { useNavigate } from "react-router-dom";

import {
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaArrowRight,
} from "../Icons/FaFallback";

const DriversService = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
              Chauffeur & Drivers
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Professional Drivers for Airport Transfers, Corporate Travel & More
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              We provide trained, polite, and punctual drivers for a smoother journey.
              Choose this option when you need a hands-free ride.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <FaClock className="mt-1 text-sky-500" />
                <span className="text-sm font-semibold text-gray-800">
                  On-time pickup & scheduled arrivals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaShieldAlt className="mt-1 text-sky-500" />
                <span className="text-sm font-semibold text-gray-800">
                  Safety-first, insured & verified
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaUserTie className="mt-1 text-sky-500" />
                <span className="text-sm font-semibold text-gray-800">
                  Professional, courteous driving standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaHeadset className="mt-1 text-sky-500" />
                <span className="text-sm font-semibold text-gray-800">
                  24/7 assistance before and during your trip
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/booking")}
                className="inline-flex items-center gap-2 rounded-full bg-sky- px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-/30 transition-all hover:bg-sky- hover:scale-105 active:scale-95"
              >
                Book With a Driver
                <FaArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1200&q=80"
                alt="Professional driver"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { value: "24/7", label: "Support" },
                { value: "Verified", label: "Drivers" },
                { value: "Fast", label: "Response" },
                { value: "Safe", label: "Journeys" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl bg-white p-4 shadow-sm border border-gray-100"
                >
                  <div className="text-xl font-bold text-gray-900">
                    {c.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-gray-500">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriversService;

