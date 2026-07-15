import {
  FaCarSide,
  FaUserTie,
  FaHeadset,
  FaShieldAlt,
  FaMoneyBillWave,
  FaClock,
  FaArrowRight,
} from "../Icons/FaFallback";

const features = [
  {
    id: 1,
    icon: <FaCarSide />,
    title: "Premium Fleet",
    description:
      "Choose from luxury sedans, SUVs, hatchbacks, and premium vehicles that are regularly serviced and maintained.",
  },

  {
    id: 2,
    icon: <FaMoneyBillWave />,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Enjoy competitive prices with complete transparency from booking to vehicle return.",
  },

  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Fully Insured Cars",
    description:
      "Every vehicle comes with comprehensive insurance coverage for a safe and worry-free journey.",
  },

  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description:
      "Our support team is always available to assist you before, during, and after your rental experience.",
  },

  {
    id: 5,
    icon: <FaClock />,
    title: "Instant Booking",
    description:
      "Book your preferred vehicle within minutes using our simple and secure online booking process.",
  },

  {
    id: 6,
    icon: <FaUserTie />,
    title: "Professional Chauffeurs",
    description:
      "Experienced and courteous drivers are available for business trips, airport transfers, and special occasions.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Experience The Difference With Our Premium Car Rental Services
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            We combine a modern fleet, transparent pricing, experienced
            professionals, and exceptional customer support to deliver a
            seamless travel experience.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-600">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                Learn More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        {/* EXTRA SECTION */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
              Trusted By Thousands
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Your Reliable Travel Partner For Every Journey
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Whether you're planning a business trip, family vacation, airport
              transfer, or weekend getaway, we ensure every ride is
              comfortable, safe, and hassle-free.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <FaShieldAlt className="mt-1 text-green-600" />
                <span className="text-sm font-semibold text-gray-800">
                  100% Well-Maintained &amp; Sanitized Vehicles
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaClock className="mt-1 text-green-600" />
                <span className="text-sm font-semibold text-gray-800">
                  Quick Pickup &amp; Easy Return Process
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaMoneyBillWave className="mt-1 text-green-600" />
                <span className="text-sm font-semibold text-gray-800">
                  Affordable Daily, Weekly &amp; Monthly Rentals
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaHeadset className="mt-1 text-green-600" />
                <span className="text-sm font-semibold text-gray-800">
                  24/7 Customer Assistance &amp; Roadside Support
                </span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img
              className="h-72 w-full object-cover sm:h-80 md:h-[28rem]"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Car Rental Office"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;