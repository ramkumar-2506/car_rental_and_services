
import testimonials from "../../data/testimonials";


const Testimonials = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            Customer Reviews
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Real experiences from customers who trusted DriveEase with their
            rides.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials?.slice?.(0, 6).map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-gray-900">
                {t.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {t.feedback || t.message || "Great service!"}
              </p>
              {t.rating ? (
                <div className="mt-4 text-sm font-bold text-yellow-400">
                  {t.rating} ★
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

