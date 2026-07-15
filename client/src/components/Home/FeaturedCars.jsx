import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import Button from "../Common/Button";
import CarCard from "./CarCard";


const featuredCars = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    name: "BMW 5 Series",
    category: "Luxury Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    price: "8,500",
    rating: "4.9",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    name: "Mercedes C-Class",
    category: "Luxury Sedan",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    price: "9,000",
    rating: "4.8",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    name: "Audi A6",
    category: "Executive Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    price: "8,200",
    rating: "4.9",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
    name: "Toyota Fortuner",
    category: "Premium SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    price: "6,500",
    rating: "4.7",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    name: "Hyundai Creta",
    category: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    price: "3,800",
    rating: "4.6",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80",
    name: "Mahindra XUV700",
    category: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    price: "4,500",
    rating: "4.8",
  },
];

const FeaturedCars = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Featured Cars"
          title="Choose Your Perfect Ride"
          description="Explore our handpicked collection of premium, luxury, and family-friendly vehicles designed to make every journey comfortable and memorable."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/fleet">
            <Button text="View All Fleet" variant="outline" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;