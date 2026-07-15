import {
  FaBuilding,
  FaUsers,
  FaCarSide,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from "../Icons/FaFallback";


const corporatePlans = [
  {
    id: 1,
    title: "Startup Plan",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",

    price: "₹24,999",

    duration: "/Month",

    suitable: "Up to 10 Employees",

    vehicles: "2 Dedicated Vehicles",

    support: "Business Hour Support",

    features: [
      "Dedicated Account Manager",
      "Monthly Billing",
      "Employee Pick-up & Drop",
      "GPS Tracking",
    ],
  },

  {
    id: 2,
    title: "Business Plan",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",

    price: "₹49,999",

    duration: "/Month",

    suitable: "Up to 50 Employees",

    vehicles: "5 Dedicated Vehicles",

    support: "24/7 Support",

    features: [
      "Priority Booking",
      "Airport Transfers",
      "Executive Cars",
      "Weekly Reports",
    ],
  },

  {
    id: 3,
    title: "Enterprise Plan",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",

    price: "Custom",

    duration: "Pricing",

    suitable: "Unlimited Employees",

    vehicles: "Unlimited Fleet",

    support: "Dedicated Team",

    features: [
      "Custom Fleet Management",
      "24/7 Operations",
      "Premium Chauffeurs",
      "Custom Reporting",
    ],
  },
];

const CorporatePackages = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700">
            Corporate Solutions
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Corporate Travel Made Simple
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            We provide reliable transportation solutions for startups,
            businesses, and large enterprises with flexible fleet management
            and dedicated support.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corporatePlans.map((plan) => (
            <div
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              key={plan.id}
            >
              <div className="relative">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-gray-900/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {plan.suitable}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{plan.title}</h3>

                <div className="mt-3 flex items-end gap-2">
                  <div className="text-2xl font-extrabold text-gray-900">
                    {plan.price}
                  </div>
                  <div className="pb-1 text-sm font-semibold text-gray-600">
                    {plan.duration}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaBuilding className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Vehicles</div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.vehicles}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaUsers className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Suitable For</div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.suitable}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaShieldAlt className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Support</div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.support}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-bold text-gray-900">Features</div>
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm text-gray-700"
                      >
                        <FaCheckCircle className="text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    Contact Sales{' '}
                    <FaArrowRight className="inline h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaCarSide className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Dedicated Fleet
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Access a fleet of professionally maintained vehicles reserved
              exclusively for your organization to ensure reliable daily
              transportation.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaUsers className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Employee Transportation
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Simplify employee commuting with scheduled pick-up and drop
              services, airport transfers, and business travel solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaShieldAlt className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Reliable Business Support
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Benefit from dedicated account managers, priority customer
              support, transparent billing, and customized travel reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporatePackages;