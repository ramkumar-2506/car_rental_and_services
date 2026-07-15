import FleetCard from "./FleetCard";


const electricCars = [
  {
    id: 1,
    name: "Tata Nexon EV",
    category: "Electric SUV",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
    price: 3499,
    description:
      "India's popular electric SUV offering excellent range, modern technology, and zero-emission driving.",
    seats: 5,
    luggage: 4,
    fuel: "Electric",
    transmission: "Automatic",
  },

  {
    id: 2,
    name: "MG ZS EV",
    category: "Electric SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 3999,
    description:
      "Premium electric SUV featuring advanced safety systems, connected technology, and a spacious cabin.",
    seats: 5,
    luggage: 5,
    fuel: "Electric",
    transmission: "Automatic",
  },

  {
    id: 3,
    name: "Mahindra XUV400 EV",
    category: "Electric SUV",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    price: 3799,
    description:
      "Performance-oriented electric SUV delivering fast acceleration, long driving range, and premium comfort.",
    seats: 5,
    luggage: 4,
    fuel: "Electric",
    transmission: "Automatic",
  },

  {
    id: 4,
    name: "Hyundai Kona Electric",
    category: "Electric Crossover",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900",
    price: 4299,
    description:
      "Compact electric crossover with impressive range, smart features, and exceptional ride quality.",
    seats: 5,
    luggage: 4,
    fuel: "Electric",
    transmission: "Automatic",
  },

  {
    id: 5,
    name: "BYD Atto 3",
    category: "Premium Electric SUV",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 4699,
    description:
      "Modern premium electric SUV equipped with innovative technology, luxury interiors, and long-range capability.",
    seats: 5,
    luggage: 5,
    fuel: "Electric",
    transmission: "Automatic",
  },

  {
    id: 6,
    name: "Tata Punch EV",
    category: "Electric Compact SUV",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
    price: 2999,
    description:
      "Compact electric SUV ideal for city driving with efficient battery performance and advanced safety features.",
    seats: 5,
    luggage: 3,
    fuel: "Electric",
    transmission: "Automatic",
  },
];

const ElectricCars = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            Electric Fleet
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Drive The Future With Electric Cars
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Experience eco-friendly mobility with our premium fleet of electric
            vehicles, offering silent performance, zero emissions, cutting-edge
            technology, and exceptional driving comfort.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {electricCars.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>

        {/* Electric fleet statistics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">35+</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Electric Vehicles
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">₹2,999</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Starting Price / Day
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">450 KM</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Maximum Driving Range
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Eco-Friendly Fleet
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Switch To Sustainable Driving
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Experience the future of mobility with our premium electric fleet.
                Enjoy smooth, silent, and environmentally friendly journeys while
                benefiting from advanced technology, exceptional comfort, and zero
                tailpipe emissions.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 lg:w-auto"
            >
              Book An Electric Car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricCars;