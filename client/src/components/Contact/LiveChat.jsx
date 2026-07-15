import {
  FaComments,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaArrowRight,
} from "../Icons/FaFallback";



const supportOptions = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    title: "WhatsApp Support",
    description:
      "Connect instantly with our support team through WhatsApp for bookings, rental inquiries, and quick assistance.",
    button: "Chat Now",
  },

  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Call Support",
    description:
      "Speak directly with one of our customer care executives for immediate assistance and emergency support.",
    button: "Call Now",
  },

  {
    id: 3,
    icon: <FaEnvelope />,
    title: "Email Support",
    description:
      "Send us your questions, feedback, or business inquiries and we'll get back to you as soon as possible.",
    button: "Send Email",
  },
];

const LiveChat = () => {
  return (
    <section className="bg-gray-900 py-12 text-white sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20">
            Live Support
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            We're Always Ready To Help
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">
            Need immediate assistance? Our customer support team is available
            through multiple channels to ensure you receive quick and reliable
            help whenever you need it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportOptions.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                {item.description}
              </p>
              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                {item.button} <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <FaComments />
              </div>
              <span className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20">
                24/7 Customer Assistance
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Instant Support Whenever You Need It
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">
                Whether you need help with a booking, vehicle availability,
                payment issues, or roadside assistance, our dedicated support
                team is available around the clock to provide fast and reliable
                service.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Start Live Chat <FaArrowRight />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:justify-self-end">
              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <FaHeadset className="mx-auto" />
                <h3 className="mt-2 text-2xl font-extrabold">24/7</h3>
                <span className="mt-1 block text-xs font-medium text-gray-200">
                  Live Support
                </span>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <FaComments className="mx-auto" />
                <h3 className="mt-2 text-2xl font-extrabold">15 Min</h3>
                <span className="mt-1 block text-xs font-medium text-gray-200">
                  Average Response
                </span>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <FaWhatsapp className="mx-auto" />
                <h3 className="mt-2 text-2xl font-extrabold">10K+</h3>
                <span className="mt-1 block text-xs font-medium text-gray-200">
                  WhatsApp Chats
                </span>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-center">
                <FaPhoneAlt className="mx-auto" />
                <h3 className="mt-2 text-2xl font-extrabold">99%</h3>
                <span className="mt-1 block text-xs font-medium text-gray-200">
                  Issue Resolution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChat;