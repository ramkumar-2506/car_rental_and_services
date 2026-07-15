const CarFeatures = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Features you’ll love</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: "Best-in-class comfort", d: "Clean interiors and smooth ride quality." },
            { t: "Safety first", d: "Well-maintained vehicles and verified options." },
            { t: "Affordable deals", d: "Transparent pricing and frequent offers." },
          ].map((x) => (
            <div key={x.t} className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="font-semibold text-gray-900">{x.t}</div>
              <div className="mt-2 text-gray-600">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarFeatures;

