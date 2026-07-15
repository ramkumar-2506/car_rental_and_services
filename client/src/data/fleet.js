const fleet = [
  // ==========================
  // ECONOMY CARS
  // ==========================

  {
    id: 1,
    name: "Maruti Suzuki Swift",
    brand: "Maruti Suzuki",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900",
    price: 1499,
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.6,
    available: true,
  },

  {
    id: 2,
    name: "Hyundai Grand i10",
    brand: "Hyundai",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    price: 1599,
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.5,
    available: true,
  },

  {
    id: 3,
    name: "Tata Tiago",
    brand: "Tata",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 1699,
    seats: 5,
    luggage: 2,
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.7,
    available: true,
  },

  {
    id: 4,
    name: "Honda Amaze",
    brand: "Honda",
    category: "Economy",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
    price: 1899,
    seats: 5,
    luggage: 3,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.8,
    available: true,
  },

  // ==========================
  // LUXURY CARS
  // ==========================

  {
    id: 5,
    name: "BMW 5 Series",
    brand: "BMW",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
    price: 7499,
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 5.0,
    available: true,
  },

  {
    id: 6,
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900",
    price: 7999,
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 5.0,
    available: true,
  },

  {
    id: 7,
    name: "Audi A6",
    brand: "Audi",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900",
    price: 8299,
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.9,
    available: true,
  },

  {
    id: 8,
    name: "Volvo XC60",
    brand: "Volvo",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 8999,
    seats: 5,
    luggage: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    rating: 4.9,
    available: true,
  },

    // ==========================
  // SUVs
  // ==========================

  {
    id: 9,
    name: "Mahindra XUV700",
    brand: "Mahindra",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 3499,
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    available: true,
  },

  {
    id: 10,
    name: "Hyundai Creta",
    brand: "Hyundai",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900",
    price: 2899,
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.8,
    available: true,
  },

  {
    id: 11,
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
    price: 4999,
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    available: true,
  },

  {
    id: 12,
    name: "Kia Seltos",
    brand: "Kia",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
    price: 2999,
    seats: 5,
    luggage: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.7,
    available: true,
  },

  // ==========================
  // ELECTRIC CARS
  // ==========================

  {
    id: 13,
    name: "Tata Nexon EV",
    brand: "Tata",
    category: "Electric",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
    price: 3499,
    seats: 5,
    luggage: 4,
    fuel: "Electric",
    transmission: "Automatic",
    rating: 4.8,
    available: true,
  },

  {
    id: 14,
    name: "MG ZS EV",
    brand: "MG",
    category: "Electric",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 3999,
    seats: 5,
    luggage: 5,
    fuel: "Electric",
    transmission: "Automatic",
    rating: 4.8,
    available: true,
  },

  {
    id: 15,
    name: "BYD Atto 3",
    brand: "BYD",
    category: "Electric",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    price: 4699,
    seats: 5,
    luggage: 5,
    fuel: "Electric",
    transmission: "Automatic",
    rating: 4.9,
    available: true,
  },

  {
    id: 16,
    name: "Hyundai Kona Electric",
    brand: "Hyundai",
    category: "Electric",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 4299,
    seats: 5,
    luggage: 4,
    fuel: "Electric",
    transmission: "Automatic",
    rating: 4.8,
    available: true,
  },

  // ==========================
  // VANS & MPVs
  // ==========================

  {
    id: 17,
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    category: "Van",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 4499,
    seats: 7,
    luggage: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    available: true,
  },

  {
    id: 18,
    name: "Kia Carnival",
    brand: "Kia",
    category: "Van",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900",
    price: 6999,
    seats: 7,
    luggage: 6,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 5.0,
    available: true,
  },

  {
    id: 19,
    name: "Force Urbania",
    brand: "Force",
    category: "Van",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
    price: 8999,
    seats: 12,
    luggage: 10,
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.9,
    available: true,
  },

  {
    id: 20,
    name: "Tempo Traveller",
    brand: "Force",
    category: "Van",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900",
    price: 9999,
    seats: 17,
    luggage: 14,
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.8,
    available: true,
  },
];

export default fleet;