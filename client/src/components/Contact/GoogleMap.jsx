import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaDirections,
} from "../Icons/FaFallback";



const GoogleMap = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800">
            Find Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Visit Our Office
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our office is conveniently located to serve customers with
            bookings, vehicle pickups, customer support, and corporate
            inquiries. Visit us during business hours or contact us anytime
            for assistance.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <iframe
                title="Car Rental Office Location"
                src="https://www.google.com/maps?q=Chennai,+Tamil+Nadu&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                allowFullScreen
                className="h-[360px] w-full sm:h-[420px]"
              ></iframe>
            </div>
          </div>

          <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">Head Office</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-gray-600" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Address</h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    123 Anna Salai, Chennai, Tamil Nadu - 600002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-gray-600" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Phone</h4>
                  <p className="mt-1 text-sm font-medium text-gray-700">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="mt-1 text-gray-600" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Working Hours</h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Monday - Sunday : 24 Hours
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              <FaDirections /> Get Directions
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;