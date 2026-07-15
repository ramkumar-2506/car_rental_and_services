import { FaUsers, FaGasPump, FaCogs, FaStar } from "../Icons/FaFallback";
import { Link } from "react-router-dom";
import Button from "../Common/Button";


const CarCard = ({
  image,
  name,
  category,
  fuel,
  transmission,
  seats,
  price,
  rating,
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              {name}
            </h3>
            <span className="mt-1 block text-xs font-medium text-gray-500">
              {category}
            </span>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
            <FaStar className="text-yellow-500" />
            <span className="text-sm font-semibold text-gray-900">{rating}</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3">
          <div className="flex items-center gap-3">
            <FaGasPump className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{fuel}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCogs className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              {transmission}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaUsers className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              {seats} Seats
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <div className="text-xl font-bold text-gray-900">₹{price}</div>
            <span className="text-xs font-medium text-gray-500">/day</span>
          </div>

          <Link to="/booking">
            <Button text="Book Now" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;