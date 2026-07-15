import offers from "../../data/offers";

const CarOffers = () => {
  const list = Array.isArray(offers) ? offers : [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Special Offers</h2>

        {list.length ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {list.slice(0, 6).map((o) => (
              <div key={o.title} className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="font-semibold text-gray-900">{o.title}</div>
                <div className="mt-2 text-gray-600">{o.description}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-gray-600">No offers available.</p>
        )}
      </div>
    </section>
  );
};

export default CarOffers;

