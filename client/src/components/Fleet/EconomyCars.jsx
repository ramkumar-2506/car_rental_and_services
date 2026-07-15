import FleetCard from "./FleetCard";


const economyCars = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900",
    price: 1499,
    description:
      "A fuel-efficient hatchback perfect for city commuting and weekend trips.",
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
  },

  {
    id: 2,
    name: "Hyundai Grand i10",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 1599,
    description:
      "Compact, comfortable, and ideal for daily travel with excellent mileage.",
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Automatic",
  },

  {
    id: 3,
    name: "Tata Tiago",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    price: 1699,
    description:
      "Affordable hatchback with modern safety features and comfortable interiors.",
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
  },

  {
    id: 4,
    name: "Renault Kwid",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
    price: 1399,
    description:
      "A compact city car offering excellent fuel economy and easy parking.",
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
  },

  {
    id: 5,
    name: "Maruti WagonR",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
    price: 1549,
    description:
      "Spacious cabin, reliable performance, and ideal for family city rides.",
    seats: 5,
    luggage: 3,
    fuel: "CNG",
    transmission: "Manual",
  },

  {
    id: 6,
    name: "Hyundai Exter",
    category: "Economy SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 1899,
    description:
      "Entry-level SUV with modern technology and excellent driving comfort.",
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    transmission: "Automatic",
  },
];

const EconomyCars = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            Economy Fleet
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Affordable Cars For Every Journey
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Explore our collection of fuel-efficient economy cars designed for
            daily commuting, business trips, family travel, and budget-friendly
            road adventures.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {economyCars.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>

        {/* Fleet statistics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Economy Cars
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">₹1,399</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Starting Price / Day
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Roadside Assistance
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Well Maintained Fleet
            </span>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Find The Perfect Economy Car Today
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Whether you're planning a weekend getaway, a business trip, or your
                daily commute, our economy fleet offers the perfect balance of
                affordability, comfort, and fuel efficiency.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 lg:w-auto"
            >
              Explore More Cars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomyCars;