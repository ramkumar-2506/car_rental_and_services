import { FaUsers, FaTools as FaSuitcase, FaGasPump, FaCogs as FaCog, FaArrowRight } from "../Icons/FaFallback";


const FleetCard = ({ car }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Car Image */}
      <div className="relative aspect-[16/10] w-full bg-gray-100">
        <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-gray-900/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {car.category}
        </span>
      </div>

      {/* Car Details */}
      <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-bold leading-tight text-gray-900 sm:text-lg">
            {car.name}
          </h3>

          <div className="text-right">
            <div className="text-base font-bold text-gray-900">
              ₹{car.price}
              <span className="text-sm font-semibold text-gray-500">/ Day</span>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
          {car.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
            <FaUsers className="text-gray-700" />
            <span className="text-xs font-semibold text-gray-800">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
            <FaSuitcase className="text-gray-700" />
            <span className="text-xs font-semibold text-gray-800">{car.luggage} Bags</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
            <FaGasPump className="text-gray-700" />
            <span className="text-xs font-semibold text-gray-800">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
            <FaCog className="text-gray-700" />
            <span className="text-xs font-semibold text-gray-800">{car.transmission}</span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:w-auto"
          >
            View Details
          </button>
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
          >
            Book Now
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;