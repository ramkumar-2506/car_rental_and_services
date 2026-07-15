import {
  FaTools,
  FaBatteryHalf,
  FaGasPump,
  FaTruck,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
} from "../Icons/FaFallback";


const assistanceServices = [
  {
    id: 1,
    title: "Flat Tyre Assistance",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",

    response: "Arrival in 30-45 Minutes",
    availability: "24/7 Service",
    charge: "Starting from ₹499",

    features: [
      "Tyre Replacement",
      "Emergency Repair",
      "Professional Technician",
      "Available Everywhere",
    ],
  },

  {
    id: 2,
    title: "Battery Jump Start",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",

    response: "Arrival in 25 Minutes",
    availability: "24/7 Service",
    charge: "Starting from ₹399",

    features: [
      "Battery Jump Start",
      "Battery Check",
      "Quick Service",
      "Certified Technician",
    ],
  },

  {
    id: 3,
    title: "Emergency Fuel Delivery",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",

    response: "Arrival in 35 Minutes",
    availability: "24/7 Service",
    charge: "Starting from ₹599",

    features: [
      "Fuel Delivery",
      "Diesel & Petrol",
      "Quick Dispatch",
      "Safe Handling",
    ],
  },

  {
    id: 4,
    title: "Vehicle Towing",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",

    response: "Arrival in 45 Minutes",
    availability: "Available 24/7",
    charge: "Starting from ₹999",

    features: [
      "Safe Towing",
      "Long Distance",
      "GPS Tracking",
      "Experienced Operators",
    ],
  },
];

const RoadsideAssistance = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800">
            24/7 Roadside Assistance
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Emergency Help Whenever You Need It
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our trained roadside assistance team is available 24 hours a day
            to help with flat tyres, battery issues, emergency fuel delivery,
            towing services, and more.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {assistanceServices.map((service) => (
            <div
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              key={service.id}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-gray-900/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {service.availability}
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>

                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900">
                    {service.charge}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <FaTools className="text-gray-600" />
                    <span>{service.response}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <FaPhoneAlt className="text-gray-600" />
                    <span>{service.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <FaTruck className="text-gray-600" />
                    <span>Professional Assistance</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, index) => (
                    <div
                      className="flex items-center gap-2 text-sm text-gray-700"
                      key={index}
                    >
                      <FaCheckCircle className="text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    Call Now <FaArrowRight className="inline h-4 w-4" />
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
            <FaTools className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">24/7 Emergency Support</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Our roadside assistance team is available around the clock to help you anytime, anywhere, ensuring you're never stranded.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaBatteryHalf className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">Fast Response Time</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Our trained technicians are dispatched immediately, with an average arrival time of 30 to 45 minutes depending on location.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaGasPump className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">Complete Roadside Solutions</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              From flat tyres and battery jump-starts to emergency fuel delivery and towing, we've got every roadside emergency covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadsideAssistance;