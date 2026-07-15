const CarCategories = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Car Categories</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Economy",
            "SUV",
            "Luxury",
            "Vans",
          ].map((c) => (
            <div key={c} className="border rounded-xl p-5 bg-gray-50 text-center font-semibold text-gray-800">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCategories;

