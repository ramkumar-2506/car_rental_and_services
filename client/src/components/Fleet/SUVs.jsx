import FleetCard from "./FleetCard";


const suvCars = [
  {
    id: 1,
    name: "Mahindra XUV700",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 3499,
    description:
      "Premium SUV with advanced safety features, spacious interiors, and powerful performance for every journey.",
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Automatic",
  },

  {
    id: 2,
    name: "Tata Safari",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    price: 3299,
    description:
      "Bold and spacious SUV designed for family trips with outstanding comfort and road presence.",
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Manual",
  },

  {
    id: 3,
    name: "Hyundai Creta",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900",
    price: 2899,
    description:
      "Stylish SUV featuring premium interiors, smart technology, and excellent fuel efficiency.",
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
  },

  {
    id: 4,
    name: "Kia Seltos",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
    price: 2999,
    description:
      "Modern SUV offering superior comfort, advanced infotainment, and dynamic driving performance.",
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
  },

  {
    id: 5,
    name: "Toyota Fortuner",
    category: "Premium SUV",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
    price: 4999,
    description:
      "Legendary SUV built for luxury, durability, and long-distance travel with exceptional reliability.",
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Automatic",
  },

  {
    id: 6,
    name: "MG Hector",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 3199,
    description:
      "Feature-rich SUV equipped with connected technology, panoramic sunroof, and premium interiors.",
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
  },
];

const SUVs = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            SUV Fleet
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Powerful SUVs For Every Adventure
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Discover our premium collection of SUVs designed for family
            vacations, business travel, off-road adventures, and comfortable
            long-distance journeys with unmatched performance and safety.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {suvCars.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>

        {/* SUV fleet statistics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">40+</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Premium SUVs
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">₹2,899</h3>
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
              Sanitized & Maintained
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Choose Your Perfect SUV Today
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                From weekend getaways to family vacations and business travel, our
                SUV fleet delivers the perfect combination of space, safety,
                comfort, and performance for every road ahead.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 lg:w-auto"
            >
              Explore More SUVs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SUVs;