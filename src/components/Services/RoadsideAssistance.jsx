import { useState } from "react";
import {
  FaTools,
  FaBatteryHalf,
  FaGasPump,
  FaTruck,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
} from "../Icons/FaFallback";

const assistanceServices = [
  {
    id: 1,
    icon: <FaTools />,
    title: "Flat Tyre Assistance",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
    response: "Arrival in 30–45 Minutes",
    availability: "24/7 Service",
    charge: "₹499",
    chargeLabel: "Starting from",
    features: [
      "Tyre Replacement",
      "Emergency Repair",
      "Professional Technician",
      "Available Everywhere",
    ],
  },
  {
    id: 2,
    icon: <FaBatteryHalf />,
    title: "Battery Jump Start",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    response: "Arrival in 25 Minutes",
    availability: "24/7 Service",
    charge: "₹399",
    chargeLabel: "Starting from",
    features: [
      "Battery Jump Start",
      "Battery Check",
      "Quick Service",
      "Certified Technician",
    ],
  },
  {
    id: 3,
    icon: <FaGasPump />,
    title: "Emergency Fuel Delivery",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    response: "Arrival in 35 Minutes",
    availability: "24/7 Service",
    charge: "₹599",
    chargeLabel: "Starting from",
    features: [
      "Fuel Delivery",
      "Diesel & Petrol",
      "Quick Dispatch",
      "Safe Handling",
    ],
  },
  {
    id: 4,
    icon: <FaTruck />,
    title: "Vehicle Towing",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    response: "Arrival in 45 Minutes",
    availability: "Available 24/7",
    charge: "₹999",
    chargeLabel: "Starting from",
    features: [
      "Safe Towing",
      "Long Distance",
      "GPS Tracking",
      "Experienced Operators",
    ],
  },
];

const WhatsAppNumber = "919385464830";

const RoadsideAssistance = () => {
  const [activeService, setActiveService] = useState(null);

  const whatsappText = (service) => {
    const lines = [
      `Hi, I want details about ${service.title}.`,
      `Charge: ${service.chargeLabel} ${service.charge}`,
      `Response: ${service.response}`,
      `Availability: ${service.availability}`,
      `Features: ${service.features.join(", ")}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const sendToWhatsApp = (service) => {
    const text = whatsappText(service);
    window.open(
      `https://wa.me/${WhatsAppNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="roadside" className="bg-gray-50 py-14 sm:py-20">
      {activeService && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Service details"
          onClick={() => setActiveService(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="h-60 w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-800 shadow-sm hover:bg-white"
                aria-label="Close"
              >
                <FaTimes className="h-5 w-5" />
              </button>
              <div className="absolute left-4 bottom-4">
                <span className="inline-flex rounded-full bg-gray-900/90 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  {activeService.availability}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {activeService.title}
              </h3>

              <div className="mt-2 flex items-end gap-2">
                <div className="text-3xl font-bold text-gray-900">
                  {activeService.charge}
                </div>
                <div className="pb-1 text-sm font-semibold text-gray-600">
                  {activeService.chargeLabel}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold text-gray-500">Response</div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activeService.response}
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-xs font-semibold text-gray-500">Availability</div>
                  <div className="mt-1 text-sm font-medium text-gray-800">
                    {activeService.availability}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-bold text-gray-900">Features</div>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeService.features.map((f, i) => (
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
                  onClick={() => sendToWhatsApp(activeService)}
                  className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Book Now via WhatsApp <FaArrowRight className="inline h-4 w-4 ml-1" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
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
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800">
            24/7 Roadside Assistance
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Emergency Help Whenever You Need It
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our trained roadside assistance team is available 24 hours a day to
            help with flat tyres, battery issues, emergency fuel delivery,
            towing services, and more.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {assistanceServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-gray-900/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {service.availability}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{service.chargeLabel}</p>
                  <p className="text-2xl font-bold text-gray-900">{service.charge}</p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-700">
                    <FaTools className="shrink-0 text-gray-500" />
                    <span>{service.response}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-700">
                    <FaPhoneAlt className="shrink-0 text-gray-500" />
                    <span>{service.availability}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-1.5">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <FaCheckCircle className="shrink-0 text-green-600" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => sendToWhatsApp(service)}
                    className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 hover:scale-[1.02] active:scale-95"
                  >
                    Call Now <FaArrowRight className="inline" />
                  </button>

                  <button
                    type="button"
                    onClick={() => sendToWhatsApp(service)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <FaTools className="text-2xl text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              24/7 Emergency Support
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Our roadside assistance team is available around the clock to help
              you anytime, anywhere, ensuring you're never stranded.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <FaBatteryHalf className="text-2xl text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Fast Response Time
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Our trained technicians are dispatched immediately, with an average
              arrival time of 30–45 minutes depending on location.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <FaGasPump className="text-2xl text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Complete Roadside Solutions
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              From flat tyres and battery jump-starts to emergency fuel delivery
              and towing, we've got every roadside emergency covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadsideAssistance;

