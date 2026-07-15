import {
  FaAward,
  FaShieldAlt,
  FaCheckCircle,
  FaCreditCard,
  FaStar,
  FaHandshake,
  FaArrowRight,
} from "../Icons/FaFallback";




const certifications = [
  {
    id: 1,
    icon: <FaAward />,
    title: "ISO 9001 Certified",
    description:
      "Our quality management system meets internationally recognized standards, ensuring reliable and consistent service.",
  },

  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Government Registered",
    description:
      "We operate as a fully licensed and government-registered car rental company, complying with all legal regulations.",
  },

  {
    id: 3,
    icon: <FaCheckCircle />,
    title: "100% Insured Fleet",
    description:
      "Every vehicle is covered with comprehensive insurance to provide complete peace of mind during your journey.",
  },

  {
    id: 4,
    icon: <FaCreditCard />,
    title: "Secure Payments",
    description:
      "Your transactions are protected using industry-standard payment security and encrypted booking systems.",
  },

  {
    id: 5,
    icon: <FaStar />,
    title: "Top Rated Service",
    description:
      "Thousands of satisfied customers consistently rate us highly for reliability, professionalism, and customer support.",
  },

  {
    id: 6,
    icon: <FaHandshake />,
    title: "Trusted Business Partner",
    description:
      "We proudly serve corporate clients, travel agencies, hotels, and organizations with dependable mobility solutions.",
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section">

      <div className="certifications-container">

        <div className="certifications-header">

          <span className="section-tag">
            Trust & Certifications
          </span>

          <h2>
            Certified Quality You Can Trust
          </h2>

          <p>
            We are committed to maintaining the highest
            standards of safety, quality, and customer
            satisfaction through internationally recognized
            certifications and trusted business practices.
          </p>

        </div>

        <div className="certifications-grid">

          {certifications.map((item) => (

            <div
              className="certification-card"
              key={item.id}
            >

              <div className="certification-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button className="verify-btn">

                Learn More

                <FaArrowRight />

              </button>

            </div>

          ))}
                  </div>

        {/* =====================================
            TRUST SECTION
        ===================================== */}

        <div className="trust-wrapper">

          <div className="trust-image">

            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
              alt="Trusted Car Rental"
            />

          </div>

          <div className="trust-content">

            <span className="section-tag">
              Why Customers Trust Us
            </span>

            <h2>
              Delivering Excellence With Every Journey
            </h2>

            <p>
              Our commitment to quality service,
              transparent pricing, and customer
              satisfaction has earned the trust of
              thousands of travelers and businesses.
              Every rental experience is backed by
              certified processes, insured vehicles,
              and dedicated support.
            </p>

            <div className="trust-stats">

              <div className="trust-stat">

                <h3>15K+</h3>

                <span>Happy Customers</span>

              </div>

              <div className="trust-stat">

                <h3>500+</h3>

                <span>Premium Vehicles</span>

              </div>

              <div className="trust-stat">

                <h3>99%</h3>

                <span>Customer Satisfaction</span>

              </div>

              <div className="trust-stat">

                <h3>10+</h3>

                <span>Years of Experience</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Certifications;