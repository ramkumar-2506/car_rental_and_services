import {
  FaUsers,
  FaGasPump,
  FaCogs,
  FaStar,
  FaMapMarkerAlt,
  FaHeart,
} from "../Icons/FaFallback";
import { Link } from "react-router-dom";


const FleetCard = ({
  image,
  name,
  brand,
  category,
  fuel,
  transmission,
  seats,
  location,
  rating,
  reviews,
  price,
}) => {
  return (
    <article className="fleet-card overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-44 w-full object-cover sm:h-52 md:h-56"
        />

        <span className="absolute left-4 top-4 rounded-full bg-gray-900/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {category}
        </span>

        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm hover:bg-white"
          aria-label="Add to wishlist"
        >
          <FaHeart className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              {name}
            </h3>
            <p className="mt-0.5 text-sm text-gray-600">{brand}</p>
          </div>

          <div className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-900">
            <FaStar className="h-4 w-4 text-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-sm text-gray-700">
          <FaMapMarkerAlt className="h-4 w-4 text-gray-500" />
          <span>{location}</span>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700">
            <FaGasPump className="h-4 w-4 text-gray-500" />
            <span className="whitespace-nowrap">{fuel}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700">
            <FaCogs className="h-4 w-4 text-gray-500" />
            <span className="whitespace-nowrap">{transmission}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700">
            <FaUsers className="h-4 w-4 text-gray-500" />
            <span className="whitespace-nowrap">{seats} Seats</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              ₹{price}
              <span className="ml-1 text-sm font-semibold text-gray-600">/day</span>
            </h2>
            <small className="text-sm text-gray-500">{reviews} Reviews</small>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Link to="/car-details" className="flex-1">
              <button
                type="button"
                className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Details
              </button>
            </Link>

            <Link to="/booking" className="flex-1">
              <button
                type="button"
                className="w-full rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FleetCard;