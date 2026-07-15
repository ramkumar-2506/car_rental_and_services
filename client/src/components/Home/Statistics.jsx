import {
  FaCarSide,
  FaUsers,
  FaRoute,
  FaAward,
} from "react-icons/fa";

import "./Statistics.css";

const statistics = [
  {
    id: 1,
    icon: <FaCarSide />,
    number: "500+",
    title: "Premium Vehicles",
    description: "Luxury, SUV, Sedan & Economy Cars",
  },
  {
    id: 2,
    icon: <FaUsers />,
    number: "20K+",
    title: "Happy Customers",
    description: "Trusted by customers across India",
  },
  {
    id: 3,
    icon: <FaRoute />,
    number: "50K+",
    title: "Successful Trips",
    description: "Safe and memorable journeys completed",
  },
  {
    id: 4,
    icon: <FaAward />,
    number: "15+",
    title: "Years Experience",
    description: "Delivering premium rental services",
  },
];

const Statistics = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-center">
                <span className="text-2xl text-gray-900">{item.icon}</span>
              </div>

              <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
                {item.number}
              </h2>

              <h4 className="mt-2 text-center text-sm font-semibold text-gray-900">
                {item.title}
              </h4>

              <p className="mt-2 text-center text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;