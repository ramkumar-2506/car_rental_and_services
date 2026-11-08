import { useState } from "react";
import {
  FaBuilding,
  FaUsers,
  FaCarSide,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
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
    vehicles: "Unlimited Cars",
    support: "Dedicated Team",
    features: [
      "Custom Cars Management",
      "24/7 Operations",
      "Premium Driverss",
      "Custom Reporting",
    ],
  },
];

const WhatsAppNumber = "919385464830";

const CorporatePackages = () => {
  const [activePlan, setActivePlan] = useState(null);

  const whatsappText = (plan) => {
    const lines = [
      `Hi, I want details about ${plan.title}.`,
      `Price: ${plan.price} ${plan.duration}`,
      `Suitable: ${plan.suitable}`,
      `Vehicles: ${plan.vehicles}`,
      `Support: ${plan.support}`,
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

  const closeModal = () => setActivePlan(null);

  return (
    <section id="corporate" className="bg-gray-50 py-14 sm:py-20">
      {activePlan && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Plan details"
          onClick={closeModal}
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
                onClick={closeModal}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-800 shadow-sm hover:bg-white"
                aria-label="Close"
              >
                <FaTimes className="h-5 w-5" />
              </button>

              <div className="absolute left-4 bottom-4">
                <span className="inline-flex rounded-full bg-gray-900/90 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  {activePlan.suitable}
                </span>
              </div>
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
                    Vehicles
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activePlan.vehicles}
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    Support
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activePlan.support}
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    Suitable For
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activePlan.suitable}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-bold text-gray-900">Features</div>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activePlan.features.map((feature, index) => (
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
                  onClick={closeModal}
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
            Corporate Solutions
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Corporate Travel Made Simple
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            We provide reliable transportation solutions for startups,
            businesses, and large enterprises with flexible Cars management
            and dedicated support.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corporatePlans.map((plan) => (
            <div
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-1"
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

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-gray-900">{plan.title}</h3>

                <div className="mt-3 flex items-end gap-2">
                  <div className="text-2xl font-bold text-gray-900">
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
                      <div className="text-sm font-semibold text-gray-900">
                        Vehicles
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.vehicles}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaUsers className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Suitable For
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {plan.suitable}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaShieldAlt className="mt-0.5 text-gray-600" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Support
                      </div>
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

                <div className="mt-auto flex flex-col gap-3 sm:flex-row pt-4">
                  <button
                    type="button"
                    onClick={() => contactSales(plan)}
                    className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 hover:scale-[1.02] active:scale-95"
                  >
                    Contact Sales <FaArrowRight className="inline h-4 w-4 ml-1" />
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
            <FaCarSide className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">Dedicated Cars</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Access a Cars of professionally maintained vehicles reserved
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

