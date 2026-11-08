import { motion } from "framer-motion";
import { HiTruck, HiUserGroup, HiMapPin, HiStar } from "react-icons/hi2";

const statistics = [
  {
    id: 1,
    icon: <HiTruck className="h-8 w-8 text-sky-600" />,
    number: "500+",
    title: "Premium Vehicles",
    description: "Luxury, SUV, Sedan & Economy Cars",
  },
  {
    id: 2,
    icon: <HiUserGroup className="h-8 w-8 text-sky-600" />,
    number: "20K+",
    title: "Happy Customers",
    description: "Trusted by customers across India",
  },
  {
    id: 3,
    icon: <HiMapPin className="h-8 w-8 text-sky-600" />,
    number: "50K+",
    title: "Successful Trips",
    description: "Safe and memorable journeys completed",
  },
  {
    id: 4,
    icon: <HiStar className="h-8 w-8 text-sky-600" />,
    number: "15+",
    title: "Years Experience",
    description: "Delivering premium rental services",
  },
];

const Statistics = () => {
  return (
    <section className="bg-slate-50 py-8 sm:py-10">
      <div className="page-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {statistics.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="premium-card text-center"
            >
              <div className="flex items-center justify-center">{item.icon}</div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">{item.number}</h2>
              <h4 className="mt-2 text-sm font-semibold text-gray-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
