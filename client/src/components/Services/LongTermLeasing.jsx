import {
  FaCarSide,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "../Icons/FaFallback";


const leasingPlans = [
  {
    id: 1,
    title: "6 Month Lease",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",

    price: "₹24,999",
    duration: "/Month",

    vehicle: "Sedan / Hatchback",
    maintenance: "Free Maintenance",
    insurance: "Comprehensive Insurance",

    features: [
      "No Down Payment",
      "Routine Service Included",
      "Roadside Assistance",
      "Easy Upgrade Option",
    ],
  },

  {
    id: 2,
    title: "12 Month Lease",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",

    price: "₹19,999",
    duration: "/Month",

    vehicle: "SUV / Premium Sedan",
    maintenance: "Free Maintenance",
    insurance: "Full Insurance Included",

    features: [
      "Unlimited Support",
      "Replacement Vehicle",
      "Flexible Contract",
      "Scheduled Maintenance",
    ],
  },

  {
    id: 3,
    title: "24 Month Lease",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",

    price: "₹16,999",
    duration: "/Month",

    vehicle: "Luxury Fleet",
    maintenance: "Premium Maintenance",
    insurance: "Premium Coverage",

    features: [
      "Lowest Monthly Cost",
      "Priority Customer Support",
      "Free Vehicle Replacement",
      "Dedicated Relationship Manager",
    ],
  },
];

const LongTermLeasing = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700">
              Long Term Leasing
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Flexible Vehicle Leasing Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Lease a vehicle for months instead of purchasing one. Enjoy fixed
              monthly payments, maintenance coverage, insurance, and hassle-free
              ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {leasingPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="h-44 w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 inline-flex rounded-full bg-gray-900/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {plan.vehicle}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {plan.title}
                </h3>

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
                    <FaCarSide className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Vehicle
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.vehicle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaTools className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Maintenance
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.maintenance}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaShieldAlt className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Insurance
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.insurance}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-bold text-gray-900">
                    Highlights
                  </div>
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
                    Lease Now{' '}
                    <FaArrowRight className="inline h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaCarSide className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Latest Vehicle Fleet
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Drive the latest models without worrying about depreciation,
              resale value, or ownership responsibilities.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaTools className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Maintenance Included
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Routine servicing, repairs, and scheduled maintenance are included
              throughout your lease period at no extra cost.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaShieldAlt className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Insurance Coverage
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Every lease includes comprehensive insurance coverage and 24/7
              roadside assistance for complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongTermLeasing;