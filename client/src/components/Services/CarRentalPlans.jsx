import {
  FaCar,
  FaRoad,
  FaGasPump,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./CarRentalPlans.css";

const rentalPlans = [
  {
    id: 1,
    title: "Daily Rental",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    price: "₹2,499",
    duration: "/Day",
    category: "Hatchback / Sedan",
    km: "250 KM Included",
    fuel: "Fuel Not Included",
    insurance: "Basic Insurance Included",

    features: [
      "Free Cancellation",
      "24/7 Customer Support",
      "Instant Confirmation",
      "Sanitized Vehicle",
    ],
  },

  {
    id: 2,
    title: "Weekend Package",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    price: "₹5,999",
    duration: "/2 Days",
    category: "Premium Sedan",
    km: "600 KM Included",
    fuel: "Fuel Not Included",
    insurance: "Comprehensive Insurance",

    features: [
      "Unlimited Stops",
      "Roadside Assistance",
      "Priority Booking",
      "Free Car Wash",
    ],
  },

  {
    id: 3,
    title: "Weekly Rental",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    price: "₹14,999",
    duration: "/Week",
    category: "SUV / Premium SUV",
    km: "1800 KM Included",
    fuel: "Fuel Not Included",
    insurance: "Premium Insurance",

    features: [
      "Priority Support",
      "Unlimited Driver",
      "Zero Cancellation Fee",
      "Free Pickup",
    ],
  },

  {
    id: 4,
    title: "Monthly Rental",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    price: "₹42,999",
    duration: "/Month",
    category: "Luxury Fleet",
    km: "Unlimited KM",
    fuel: "Fuel Not Included",
    insurance: "Full Coverage",

    features: [
      "Unlimited Kilometers",
      "Dedicated Support",
      "Free Maintenance",
      "Replacement Vehicle",
    ],
  },
];

const CarRentalPlans = () => {
  return (
    <section className="rental-plans">

      <div className="plans-container">

        <div className="plans-header">

          <span className="section-tag">
            Our Rental Plans
          </span>

          <h2>
            Flexible Rental Plans For Every Journey
          </h2>

          <p>
            Whether you need a car for a day, a weekend,
            a business trip, or a long vacation, choose
            from our affordable rental packages designed
            to suit every travel requirement.
          </p>

        </div>

        <div className="plans-grid">

          {rentalPlans.map((plan) => (

            <div
              className="plan-card"
              key={plan.id}
            >

              <div className="plan-image">

                <img
                  src={plan.image}
                  alt={plan.title}
                />

                <span className="plan-category">
                  {plan.category}
                </span>

              </div>

              <div className="plan-content">

                <h3>{plan.title}</h3>

                <div className="price-box">

                  <h2>{plan.price}</h2>

                  <span>{plan.duration}</span>

                </div>

                <div className="plan-info">

                  <div>
                    <FaRoad />
                    <span>{plan.km}</span>
                  </div>

                  <div>
                    <FaGasPump />
                    <span>{plan.fuel}</span>
                  </div>

                  <div>
                    <FaShieldAlt />
                    <span>{plan.insurance}</span>
                  </div>

                </div>

                <div className="plan-features">

                  {plan.features.map(
                    (feature, index) => (

                      <div
                        className="feature"
                        key={index}
                      >
                        <FaCheckCircle />
                        <span>{feature}</span>
                      </div>

                    )
                  )}

                </div>
                                <div className="plan-actions">

                  <button className="book-btn">
                    Book Now
                    <FaArrowRight />
                  </button>

                  <button className="details-btn">
                    View Details
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ==========================
            WHY CHOOSE OUR PLANS
        ========================== */}

        <div className="plans-benefits">

          <div className="benefit-card">

            <FaCar />

            <h4>Wide Vehicle Selection</h4>

            <p>
              Choose from hatchbacks, sedans, SUVs,
              luxury cars, and premium vehicles for
              every occasion.
            </p>

          </div>

          <div className="benefit-card">

            <FaRoad />

            <h4>Flexible Rental Duration</h4>

            <p>
              Rent vehicles daily, weekly, monthly,
              or for customized durations with
              affordable pricing.
            </p>

          </div>

          <div className="benefit-card">

            <FaShieldAlt />

            <h4>Safe & Insured Trips</h4>

            <p>
              Every rental includes insurance,
              regular maintenance, and 24/7 roadside
              assistance for complete peace of mind.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CarRentalPlans;