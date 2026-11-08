import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiCheckBadge, HiShieldCheck, HiCreditCard, HiStar, HiHandRaised, HiArrowRight } from "react-icons/hi2";
import SectionTitle from "../Common/SectionTitle";
import Button from "../Common/Button";

const certifications = [
  {
    id: 1,
    icon: <HiCheckBadge className="h-8 w-8 text-sky-600" />,
    title: "ISO 9001 Certified",
    description: "Our quality management system meets internationally recognized standards, ensuring reliable and consistent service.",
  },
  {
    id: 2,
    icon: <HiShieldCheck className="h-8 w-8 text-sky-600" />,
    title: "Government Registered",
    description: "We operate as a fully licensed and government-registered car rental company, complying with all legal regulations.",
  },
  {
    id: 3,
    icon: <HiCheckBadge className="h-8 w-8 text-sky-600" />,
    title: "100% Insured Cars",
    description: "Every vehicle is covered with comprehensive insurance to provide complete peace of mind during your journey.",
  },
  {
    id: 4,
    icon: <HiCreditCard className="h-8 w-8 text-sky-600" />,
    title: "Secure Payments",
    description: "Your transactions are protected using industry-standard payment security and encrypted booking systems.",
  },
  {
    id: 5,
    icon: <HiStar className="h-8 w-8 text-sky-600" />,
    title: "Top Rated Service",
    description: "Thousands of satisfied customers consistently rate us highly for reliability, professionalism, and customer support.",
  },
  {
    id: 6,
    icon: <HiHandRaised className="h-8 w-8 text-sky-600" />,
    title: "Trusted Business Partner",
    description: "We proudly serve corporate clients, travel agencies, hotels, and organizations with dependable mobility solutions.",
  },
];

const Certifications = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-slate-50 py-8 sm:py-10">
      <div className="page-container">
        <SectionTitle
          subtitle="Trust & Certifications"
          title="Certified Quality You Can Trust"
          description="We are committed to maintaining the highest standards of safety, quality, and customer satisfaction through internationally recognized certifications and trusted business practices."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="premium-card group"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              <button
                onClick={() => navigate("/services")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                Learn More
                <HiArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
