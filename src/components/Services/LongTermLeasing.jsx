import { useState } from "react";
import {
  FaCarSide,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
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
    badge: "Most Popular",
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
    vehicle: "Luxury Cars",
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

const WhatsAppNumber = "919385464830";

const LongTermLeasing = () => {
  const [activePlan, setActivePlan] = useState(null);

  const whatsappText = (plan) => {
    const lines = [
      `Hi, I want details about ${plan.title}.`,
      `Price: ${plan.price} ${plan.duration}`,
      `Vehicle: ${plan.vehicle}`,
      `Maintenance: ${plan.maintenance}`,
      `Insurance: ${plan.insurance}`,
      `Highlights: ${plan.features.join(", ")}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const contactSales = (plan) => {
    const text = whatsappText(plan);
    window.open(
      `https://wa.me/${WhatsAppNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="leasing" className="bg-white py-14 sm:py-20">
      {activePlan && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Plan details"
          onClick={() => setActivePlan(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={activePlan.image}
                alt={activePlan.title}
                className="h-60 w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActivePlan(null)}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-800 shadow-sm hover:bg-white"
                aria-label="Close"
              >
                <FaTimes className="h-5 w-5" />
              </button>

              {activePlan.badge && (
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-sky- px-3 py-1 text-xs font-bold text-white shadow">
                  {activePlan.badge}
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {activePlan.title}
              </h3>

              <div className="mt-2 flex items-end gap-2">
                <div className="text-3xl font-bold text-gray-900">
                  {activePlan.price}
                </div>
                <div className="pb-1 text-sm font-semibold text-gray-600">
                  {activePlan.duration}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    Vehicle
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activePlan.vehicle}
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    Maintenance
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activePlan.maintenance}
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    Insurance
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activePlan.insurance}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-bold text-gray-900">
                  Highlights
                </div>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activePlan.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm text-gray-700"
                    >
                      <FaCheckCircle className="text-green-600" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => contactSales(activePlan)}
                  className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Contact Sales on WhatsApp
                  <FaArrowRight className="inline h-4 w-4 ml-1" />
                </button>
                <button
                  type="button"
                  onClick={() => setActivePlan(null)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="page-container">
        <div className="max-w-2xl">
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leasingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-lg hover:-translate-y-1 ${
                plan.badge
                  ? "border-sky- ring-2 ring-sky-/30"
                  : "border-gray-200"
              } bg-white`}
            >
              <div className="relative">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex rounded-full bg-gray-900/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {plan.vehicle}
                </span>
                {plan.badge && (
                  <span className="absolute right-3 top-3 inline-flex rounded-full bg-sky- px-3 py-1 text-xs font-bold text-white shadow">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.title}
                  </h3>
                  <div className="mt-2 flex items-end gap-1.5">
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="mb-1 text-sm font-semibold text-gray-500">
                      {plan.duration}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaCarSide className="mt-0.5 shrink-0 text-gray-500" />
                    <div>
                      <div className="text-xs font-semibold text-gray-500">
                        Vehicle
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        {plan.vehicle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaTools className="mt-0.5 shrink-0 text-gray-500" />
                    <div>
                      <div className="text-xs font-semibold text-gray-500">
                        Maintenance
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        {plan.maintenance}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaShieldAlt className="mt-0.5 shrink-0 text-gray-500" />
                    <div>
                      <div className="text-xs font-semibold text-gray-500">
                        Insurance
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        {plan.insurance}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Highlights
                  </p>
                  <div className="mt-2 grid grid-cols-1 gap-1.5">
                    {plan.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm text-gray-700"
                      >
                        <FaCheckCircle className="shrink-0 text-green-600" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => contactSales(plan)}
                    className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 hover:scale-[1.02] active:scale-95"
                  >
                    Contact Sales <FaArrowRight className="inline" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePlan(plan)}
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
            <FaCarSide className="text-2xl text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Latest Vehicle Cars
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Drive the latest models without worrying about depreciation,
              resale value, or ownership responsibilities.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaTools className="text-2xl text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Maintenance Included
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Routine servicing, repairs, and scheduled maintenance are
              included throughout your lease period at no extra cost.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaShieldAlt className="text-2xl text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Insurance Coverage
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Every lease includes comprehensive insurance coverage and
              24/7 roadside assistance for complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongTermLeasing;

