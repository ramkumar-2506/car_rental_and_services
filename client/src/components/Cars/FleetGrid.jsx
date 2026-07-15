import { useState } from "react";
import FleetCard from "./FleetCard";


const cars = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    name: "BMW 5 Series",
    brand: "BMW",
    category: "Luxury Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    location: "Chennai",
    rating: "4.9",
    reviews: "128",
    price: "8,500",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    name: "Mercedes C-Class",
    brand: "Mercedes",
    category: "Luxury Sedan",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    location: "Bangalore",
    rating: "4.8",
    reviews: "114",
    price: "9,000",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    name: "Audi A6",
    brand: "Audi",
    category: "Executive",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    location: "Hyderabad",
    rating: "4.9",
    reviews: "156",
    price: "8,200",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    location: "Coimbatore",
    rating: "4.8",
    reviews: "210",
    price: "6,800",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    name: "Hyundai Creta",
    brand: "Hyundai",
    category: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    location: "Madurai",
    rating: "4.7",
    reviews: "182",
    price: "3,800",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    name: "Mahindra XUV700",
    brand: "Mahindra",
    category: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    location: "Tirunelveli",
    rating: "4.9",
    reviews: "160",
    price: "4,900",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    name: "Honda City",
    brand: "Honda",
    category: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    location: "Salem",
    rating: "4.8",
    reviews: "142",
    price: "3,500",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    name: "Kia Seltos",
    brand: "Kia",
    category: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    location: "Trichy",
    rating: "4.8",
    reviews: "148",
    price: "4,300",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    name: "Tesla Model 3",
    brand: "Tesla",
    category: "Electric",
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    location: "Chennai",
    rating: "5.0",
    reviews: "98",
    price: "12,000",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    name: "Range Rover Evoque",
    brand: "Land Rover",
    category: "Luxury SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    location: "Pondicherry",
    rating: "4.9",
    reviews: "86",
    price: "11,500",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    name: "MG Hector",
    brand: "MG",
    category: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    location: "Erode",
    rating: "4.7",
    reviews: "134",
    price: "4,200",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
    name: "Skoda Slavia",
    brand: "Skoda",
    category: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    location: "Vellore",
    rating: "4.8",
    reviews: "102",
    price: "3,900",
  },
];

const FleetGrid = () => {
  const [visibleCars, setVisibleCars] = useState(6);

  const loadMoreCars = () => {
    setVisibleCars((prev) => prev + 3);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {cars.slice(0, visibleCars).map((car) => (
            <FleetCard
              key={car.id}
              image={car.image}
              name={car.name}
              brand={car.brand}
              category={car.category}
              fuel={car.fuel}
              transmission={car.transmission}
              seats={car.seats}
              location={car.location}
              rating={car.rating}
              reviews={car.reviews}
              price={car.price}
            />
          ))}
        </div>

        {visibleCars < cars.length && (
          <div className="mt-8 flex items-center justify-center">
            <button
              type="button"
              className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              onClick={loadMoreCars}
            >
              Load More Vehicles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FleetGrid;
