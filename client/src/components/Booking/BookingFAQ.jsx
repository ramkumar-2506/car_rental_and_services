import faqs from "../../data/faqs";

const BookingFAQ = () => {
  const list = Array.isArray(faqs) ? faqs : [];
  const items = list.length ? list.slice(0, 6) : [];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Booking FAQs</h2>

        {items.length ? (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {items.map((f) => (
              <div
                key={f.question || f.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
              >
                <div className="text-base font-semibold text-gray-900">
                  {f.question || f.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.answer || f.description}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            No FAQs available.
          </p>
        )}
      </div>
    </section>
  );
};

export default BookingFAQ;


