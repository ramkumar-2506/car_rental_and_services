import {
  FaBuilding,
  FaBullseye,
  FaEye,
  FaUsers,
  FaCarSide,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
} from "../Icons/FaFallback";
const companyStats = [
  {
    id: 1,
    icon: <FaCarSide />,

    value: "500+",
    title: "Premium Vehicles",
  },
  {
    id: 2,
    icon: <FaUsers />,
    value: "15K+",
    title: "Happy Customers",
  },
  {
    id: 3,
    icon: <FaAward />,
    value: "10+",
    title: "Years Experience",
  },
  {
    id: 4,
    icon: <FaBuilding />,
    value: "25+",
    title: "Service Locations",
  },
];

const CompanyOverview = () => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img
              className="h-72 w-full object-cover sm:h-80 md:h-[28rem]"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Company Office"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
              About Our Company
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Driving Excellence With Trusted Car Rental Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              We are committed to providing safe, reliable, and affordable vehicle
              rental services for individuals, families, and businesses. Our
              mission is to make every journey comfortable through a modern fleet,
              transparent pricing, and exceptional customer support.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-900">
                  Premium & Well Maintained Fleet
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-900">
                  Transparent Pricing with No Hidden Fees
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-900">
                  24/7 Customer & Roadside Assistance
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <FaCheckCircle className="mt-1 h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-900">
                  Trusted by Thousands of Customers
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Explore Our Fleet
              <FaArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <FaBullseye className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              To deliver safe, affordable, and premium mobility solutions through
              quality vehicles, innovative technology, and outstanding customer
              service.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <FaEye className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              To become the most trusted car rental company by providing seamless
              travel experiences and continuously exceeding customer expectations.
            </p>
          </div>
        </div>

        {/* COMPANY STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {companyStats.map((stat) => (
            <div
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              key={stat.id}
            >
              <div className="text-blue-600">{stat.icon}</div>
              <h3 className="mt-3 text-2xl font-extrabold text-gray-900">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm font-semibold text-gray-600">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        {/* CORE VALUES */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Our Core Values</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Everything we do is guided by our commitment to quality, customer
            satisfaction, and continuous innovation.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <FaCheckCircle className="h-6 w-6 text-green-600" />
              <h4 className="mt-3 text-lg font-bold text-gray-900">Customer First</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Every decision we make is focused on delivering the best possible
                experience for our customers.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <FaAward className="h-6 w-6 text-yellow-600" />
              <h4 className="mt-3 text-lg font-bold text-gray-900">Quality Service</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                We maintain our vehicles to the highest standards to ensure every
                journey is safe, comfortable, and reliable.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <FaUsers className="h-6 w-6 text-blue-600" />
              <h4 className="mt-3 text-lg font-bold text-gray-900">Integrity</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Honest pricing, transparent policies, and ethical business practices
                are at the heart of everything we do.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <FaBuilding className="h-6 w-6 text-blue-600" />
              <h4 className="mt-3 text-lg font-bold text-gray-900">Innovation</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                We continuously improve our services using modern technology to make
                booking and travelling easier than ever.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CUSTOMERS TRUST US */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Why Thousands of Customers Trust Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              From short city rides to long-distance business trips, we provide
              dependable transportation backed by experienced professionals,
              transparent pricing, and 24/7 customer support.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "No Hidden Charges",
                "Professional Customer Support",
                "Modern & Fully Insured Fleet",
                "Fast & Secure Online Booking",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-gray-800">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img
              className="h-72 w-full object-cover sm:h-80 md:h-[28rem]"
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Customer Service"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;