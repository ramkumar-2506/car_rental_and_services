const BookingSteps = () => {
  const steps = [
    { title: "Choose Car", desc: "Pick the vehicle that matches your needs." },
    { title: "Select Dates", desc: "Set pickup and return times." },
    { title: "Confirm Booking", desc: "Review pricing and confirm." },
    { title: "Get Ready to Drive", desc: "We’ll help you with pickup details." },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          How Booking Works
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-gray-600">
                Step {idx + 1}
              </div>
              <div className="mt-2 text-base font-semibold text-gray-900">
                {s.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-gray-600">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;

