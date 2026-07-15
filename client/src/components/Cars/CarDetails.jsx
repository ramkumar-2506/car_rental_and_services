import { useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaGasPump,
  FaCogs,
  FaUsers,
  FaSuitcase,
  FaSnowflake,
  FaHeart,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// Tailwind migration: legacy CSS removed for responsive styling
// import "./CarDetails.css";

const car = {
  name: "BMW 5 Series",
  brand: "BMW",
  category: "Luxury Sedan",
  location: "Chennai",
  rating: 4.9,
  reviews: 128,
  price: "8,500",

  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  luggage: 3,
  ac: "Automatic Climate Control",

  description:
    "The BMW 5 Series delivers the perfect balance of luxury, performance, and comfort. Designed for business executives and family trips alike, this premium sedan offers advanced technology, spacious interiors, and exceptional driving dynamics.",

  images: [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
  ],

  features: [
    "Bluetooth Connectivity",
    "Reverse Camera",
    "Apple CarPlay",
    "Android Auto",
    "GPS Navigation",
    "Leather Seats",
    "ABS",
    "Cruise Control",
    "Sunroof",
    "Airbags",
    "Parking Sensors",
    "USB Charging",
  ],
};

const CarDetails = () => {
  const [mainImage, setMainImage] = useState(car.images[0]);

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="relative">
                <img
                  src={mainImage}
                  alt={car.name}
                  className="h-64 w-full rounded-t-2xl object-cover sm:h-72 md:h-80"
                />

                <button
                  type="button"
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm hover:bg-white"
                  aria-label="Add to wishlist"
                >
                  <FaHeart className="h-4 w-4" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2 p-4">
                {car.images.map((image, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={
                      mainImage === image
                        ? "overflow-hidden rounded-lg border-2 border-gray-900"
                        : "overflow-hidden rounded-lg border border-gray-200"
                    }
                    aria-label={`Select image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Car ${index + 1}`}
                      className="h-16 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Header */}
            <div className="mt-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800">
                    {car.category}
                  </span>
                  <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {car.name}
                  </h1>
                  <h4 className="mt-1 text-sm font-medium text-gray-600">
                    {car.brand}
                  </h4>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2">
                  <FaStar className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-900">
                    {car.rating}
                  </span>
                  <small className="text-sm text-gray-600">({car.reviews} Reviews)</small>
                </div>
              </div>

              {/* Location */}
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700">
                <FaMapMarkerAlt className="h-4 w-4 text-gray-500" />
                <span>{car.location}</span>
              </div>

              {/* Specifications */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <FaGasPump className="h-5 w-5 text-gray-600" />
                  <h5 className="mt-2 text-sm font-semibold text-gray-900">Fuel</h5>
                  <span className="mt-1 block text-sm text-gray-600">{car.fuel}</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <FaCogs className="h-5 w-5 text-gray-600" />
                  <h5 className="mt-2 text-sm font-semibold text-gray-900">Transmission</h5>
                  <span className="mt-1 block text-sm text-gray-600">{car.transmission}</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <FaUsers className="h-5 w-5 text-gray-600" />
                  <h5 className="mt-2 text-sm font-semibold text-gray-900">Seats</h5>
                  <span className="mt-1 block text-sm text-gray-600">{car.seats}</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <FaSuitcase className="h-5 w-5 text-gray-600" />
                  <h5 className="mt-2 text-sm font-semibold text-gray-900">Luggage</h5>
                  <span className="mt-1 block text-sm text-gray-600">{car.luggage} Bags</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:col-span-2 xl:col-span-1">
                  <FaSnowflake className="h-5 w-5 text-gray-600" />
                  <h5 className="mt-2 text-sm font-semibold text-gray-900">Air Conditioning</h5>
                  <span className="mt-1 block text-sm text-gray-600">{car.ac}</span>
                </div>
              </div>

              {/* Vehicle Overview */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">Vehicle Overview</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{car.description}</p>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">Features & Amenities</h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {car.features.map((feature, index) => (
                    <div
                      className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
                      key={index}
                    >
                      <FaCheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rental Includes */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">Rental Includes</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <FaShieldAlt className="h-5 w-5 text-gray-700" />
                    <h4 className="mt-3 text-sm font-bold text-gray-900">Basic Insurance</h4>
                    <p className="mt-1 text-sm text-gray-600">Insurance coverage included with every rental.</p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <FaCheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="mt-3 text-sm font-bold text-gray-900">24/7 Roadside Assistance</h4>
                    <p className="mt-1 text-sm text-gray-600">Support whenever you need it during your trip.</p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <FaCheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="mt-3 text-sm font-bold text-gray-900">Unlimited Kilometers</h4>
                    <p className="mt-1 text-sm text-gray-600">Drive freely without worrying about mileage limits.</p>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <FaCheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="mt-3 text-sm font-bold text-gray-900">Free Cancellation</h4>
                    <p className="mt-1 text-sm text-gray-600">Cancel your booking within the allowed period.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sticky top-24">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Starting From</span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                ₹{car.price}
                <span className="ml-2 text-sm font-semibold text-gray-600">/day</span>
              </h2>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✔ Premium Sanitized Vehicle</li>
                <li>✔ Instant Booking Confirmation</li>
                <li>✔ No Hidden Charges</li>
                <li>✔ 24/7 Customer Support</li>
              </ul>

              <div className="mt-6 space-y-3">
                <Link to="/booking">
                  <button className="w-full rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                    Book This Vehicle
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;