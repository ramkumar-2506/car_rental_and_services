import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaHeadset,
  FaArrowRight,
} from "../Icons/FaFallback";



const contactDetails = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Our Office",
    value: "123 Anna Salai, Chennai, Tamil Nadu 600002",
    description:
      "Visit our headquarters for bookings, customer support, and business inquiries.",
  },

  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 98765 43210",
    description:
      "Speak directly with our support team for reservations and assistance.",
  },

  {
    id: 3,
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "support@carrental.com",
    description:
      "Send us your questions anytime and we'll respond as quickly as possible.",
  },

  {
    id: 4,
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon - Sun : 24 Hours",
    description:
      "Our booking and customer support team is available every day.",
  },

  {
    id: 5,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+91 98765 43210",
    description:
      "Quick booking assistance and live updates through WhatsApp.",
  },

  {
    id: 6,
    icon: <FaHeadset />,
    title: "24/7 Support",
    value: "Always Available",
    description:
      "Emergency roadside assistance and customer care whenever you need us.",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10">
          <header className="max-w-2xl">
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800">
              Contact Information
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              We're Here To Help You Anytime
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Have questions about our services, bookings, pricing, or vehicle
              availability? Reach out to our friendly support team through any
              of the contact methods below.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <h4 className="mt-1 text-sm font-semibold text-gray-700">
                      {item.value}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Contact Now <FaArrowRight />
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gray-900 p-6 text-white sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20">
                  Need Immediate Assistance?
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Our Support Team Is Available 24/7
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">
                  Whether you need help with a booking, roadside assistance,
                  or general inquiries, our dedicated customer support team is
                  always ready to assist you anytime, anywhere.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    Call Now
                  </button>
                  <button
                    type="button"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {["24/7", "10K+", "15 Min", "99%"].map((h, idx) => {
                  const labels = [
                    "Customer Support",
                    "Happy Customers",
                    "Average Response",
                    "Support Satisfaction",
                  ];
                  return (
                    <div key={h} className="rounded-2xl bg-white/5 p-4">
                      <h3 className="text-2xl font-extrabold">{h}</h3>
                      <span className="mt-1 block text-xs font-medium text-gray-200">
                        {labels[idx]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;