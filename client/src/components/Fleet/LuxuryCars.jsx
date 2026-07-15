import FleetCard from "./FleetCard";


const luxuryCars = [
  {
    id: 1,
    name: "BMW 5 Series",
    category: "Luxury Sedan",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
    price: 7499,
    description:
      "Premium executive sedan offering exceptional comfort, advanced technology, and outstanding performance.",
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
  },

  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    category: "Luxury Sedan",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900",
    price: 7999,
    description:
      "Elegant luxury sedan with refined interiors, cutting-edge safety features, and a smooth driving experience.",
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
  },

  {
    id: 3,
    name: "Audi A6",
    category: "Luxury Sedan",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900",
    price: 8299,
    description:
      "Modern luxury sedan featuring premium craftsmanship, powerful performance, and advanced infotainment.",
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
  },

  {
    id: 4,
    name: "Volvo XC60",
    category: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 8999,
    description:
      "Sophisticated SUV delivering world-class safety, luxurious interiors, and superior driving comfort.",
    seats: 5,
    luggage: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
  },

  {
    id: 5,
    name: "Toyota Fortuner Legender",
    category: "Premium SUV",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 6999,
    description:
      "Premium SUV built for luxury, adventure, and long-distance travel with exceptional reliability.",
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Automatic",
  },

  {
    id: 6,
    name: "Range Rover Velar",
    category: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900",
    price: 11999,
    description:
      "Experience unmatched luxury, powerful performance, and iconic design in every journey.",
    seats: 5,
    luggage: 5,
    fuel: "Petrol",
    transmission: "Automatic",
  },
];

const LuxuryCars = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            Luxury Fleet
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Drive Premium Luxury Vehicles
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Choose from our exclusive collection of luxury sedans and premium
            SUVs designed to provide elegance, comfort, performance, and an
            unforgettable driving experience.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {luxuryCars.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>

        {/* Luxury fleet statistics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">30+</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Luxury Vehicles
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">₹6,999</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Starting Price / Day
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              VIP Customer Support
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Premium Maintained Fleet
            </span>
          </div>
        </div>

        {/* Luxury CTA */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Experience Luxury Like Never Before
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Whether it's a corporate event, wedding, airport transfer, or a
                special occasion, our premium fleet delivers unmatched comfort,
                elegance, and performance for every journey.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 lg:w-auto"
            >
              Reserve Your Luxury Car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCars;