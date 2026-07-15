const PaymentOptions = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Payment Options</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          Choose how you want to pay. Final payment method will be confirmed at
          checkout.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: "UPI / Cards", desc: "Quick and secure digital payments." },
            { title: "Cash on Pickup", desc: "Pay when you receive your car." },
            { title: "Corporate Billing", desc: "For businesses and bulk bookings." },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="text-base font-semibold text-gray-900">
                {x.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-gray-600">
                {x.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;

