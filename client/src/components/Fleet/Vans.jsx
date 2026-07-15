import FleetCard from "./FleetCard";


const vans = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 4499,
    description:
      "Spacious premium MPV offering exceptional comfort, reliability, and smooth performance for family and business travel.",
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Automatic",
  },

  {
    id: 2,
    name: "Kia Carnival",
    category: "Luxury MPV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 6999,
    description:
      "Luxury MPV featuring premium interiors, captain seats, advanced technology, and unmatched passenger comfort.",
    seats: 7,
    luggage: 6,
    fuel: "Diesel",
    transmission: "Automatic",
  },

  {
    id: 3,
    name: "Maruti Suzuki Ertiga",
    category: "Family MPV",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    price: 2799,
    description:
      "Comfortable family MPV with excellent fuel efficiency, spacious seating, and modern convenience features.",
    seats: 7,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Manual",
  },

  {
    id: 4,
    name: "Toyota Rumion",
    category: "Family MPV",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900",
    price: 2999,
    description:
      "Reliable multi-purpose vehicle designed for family trips with generous cabin space and comfortable seating.",
    seats: 7,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
  },

  {
    id: 5,
    name: "Force Urbania",
    category: "Luxury Van",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
    price: 8999,
    description:
      "Premium passenger van offering luxury seating, ample luggage space, and outstanding comfort for group travel.",
    seats: 12,
    luggage: 10,
    fuel: "Diesel",
    transmission: "Manual",
  },

  {
    id: 6,
    name: "Tempo Traveller",
    category: "Traveller Van",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
    price: 9999,
    description:
      "Ideal choice for tours, corporate trips, pilgrimages, and large family vacations with spacious seating.",
    seats: 17,
    luggage: 14,
    fuel: "Diesel",
    transmission: "Manual",
  },
];

const Vans = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            Vans & MPVs
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Spacious Vans For Group & Family Travel
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Explore our premium collection of vans and MPVs designed for family
            vacations, corporate travel, airport transfers, weddings, and group
            tours with maximum comfort and generous luggage capacity.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vans.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>

        {/* Fleet statistics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">25+</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Premium Vans & MPVs
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">₹2,799</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Starting Price / Day
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">17</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Maximum Seating Capacity
            </span>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <span className="mt-1 block text-sm font-semibold text-gray-600">
              Travel Assistance
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Book The Perfect Van For Your Group
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Whether you're planning a family vacation, corporate outing, wedding,
                pilgrimage, airport transfer, or a group tour, our spacious vans and
                MPVs ensure every passenger travels in comfort and style.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 lg:w-auto"
            >
              Book Your Van Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vans;