


import {
  FaCarSide,
  FaMoneyBillWave,
  FaShieldAlt,
  FaCheckCircle,
} from "../Icons/FaFallback";

const WhyChooseUs = () => {
  const whyCards = [
    {
      title: "Premium Fleet",
      icon: <FaCarSide className="text-3xl text-blue-600" />,
      description:
        "Choose from luxury sedans, SUVs, hatchbacks, and premium vehicles that are regularly serviced and maintained.",
    },
    {
      title: "Transparent Pricing",
      icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
      description:
        "No hidden charges. Enjoy competitive prices with complete transparency from booking to vehicle return.",
    },
    {
      title: "Fully Insured Cars",
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      description:
        "Every vehicle comes with comprehensive insurance coverage for a safe and worry-free journey.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 border-b border-gray-100">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Experience The Difference With Our Premium Car Rental Services
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            We combine a modern fleet, transparent pricing, experienced
            professionals, and exceptional customer support to deliver a
            seamless travel experience every time.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {whyCards.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* TRUSTED BY THOUSANDS */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 tracking-wider uppercase">
              Trusted By Thousands
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Your Reliable Travel Partner For Every Journey
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Whether you're planning a business trip, family vacation, airport
              transfer, or weekend getaway, we ensure every ride is comfortable,
              safe, and hassle-free with our premium rental services.
            </p>
            
            <ul className="mt-6 space-y-3">
              {[
                "100% Well-Maintained & Sanitized Vehicles",
                "Quick Pickup & Easy Return Process",
                "Affordable Daily, Weekly & Monthly Rentals",
                "24/7 Customer Assistance & Roadside Support"
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Car Rental Office"
              className="h-72 w-full object-cover sm:h-80 md:h-[26rem] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;


