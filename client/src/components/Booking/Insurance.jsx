import { useState } from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaCarCrash,
  FaUserShield,
  FaRoad,
} from "react-icons/fa";
import "./Insurance.css";

const insurancePlans = [
  {
    id: 1,
    name: "Basic Protection",
    price: 0,
    badge: "Included",
    icon: <FaShieldAlt />,
    description:
      "Essential coverage included with every rental.",

    features: [
      "Third Party Liability",
      "Basic Vehicle Damage Cover",
      "24/7 Roadside Assistance",
      "Emergency Support",
    ],
  },

  {
    id: 2,
    name: "Standard Protection",
    price: 499,
    badge: "Most Popular",
    icon: <FaUserShield />,
    description:
      "Better protection with reduced liability.",

    features: [
      "Everything in Basic",
      "Reduced Damage Liability",
      "Tyre Protection",
      "Windshield Coverage",
      "Priority Assistance",
    ],
  },

  {
    id: 3,
    name: "Premium Protection",
    price: 899,
    badge: "Best Value",
    icon: <FaCarCrash />,
    description:
      "Maximum peace of mind with complete protection.",

    features: [
      "Everything in Standard",
      "Zero Damage Liability",
      "Personal Accident Cover",
      "Engine Protection",
      "Key Replacement",
      "Premium Roadside Support",
    ],
  },
];

const Insurance = () => {
  const [selectedPlan, setSelectedPlan] =
    useState(insurancePlans[0]);

  return (
    <section className="insurance-section">

      <div className="insurance-container">

        <div className="insurance-header">

          <h2>Choose Insurance Plan</h2>

          <p>
            Protect your journey by selecting the
            insurance plan that best suits your trip.
          </p>

        </div>

        <div className="insurance-grid">

          {insurancePlans.map((plan) => (

            <div
              key={plan.id}
              className={`insurance-card ${
                selectedPlan.id === plan.id
                  ? "active"
                  : ""
              }`}
            >

              <span className="plan-badge">
                {plan.badge}
              </span>

              <div className="plan-icon">
                {plan.icon}
              </div>

              <h3>{plan.name}</h3>

              <p className="plan-description">
                {plan.description}
              </p>

              <div className="plan-price">

                {plan.price === 0 ? (
                  <h2>FREE</h2>
                ) : (
                  <h2>
                    ₹{plan.price}
                    <span>/day</span>
                  </h2>
                )}

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

              <button
                className={
                  selectedPlan.id === plan.id
                    ? "selected-btn"
                    : "select-btn"
                }
                onClick={() =>
                  setSelectedPlan(plan)
                }
              >
                {selectedPlan.id === plan.id
                  ? "Selected"
                  : "Choose Plan"}
              </button>

            </div>

          ))}

        </div>
                {/* ==========================
            SELECTED PLAN SUMMARY
        ========================== */}

        <div className="insurance-summary">

          <div className="summary-card">

            <h3>Your Selected Insurance</h3>

            <div className="summary-header">

              <div className="summary-icon">
                <FaShieldAlt />
              </div>

              <div>

                <h4>{selectedPlan.name}</h4>

                <p>{selectedPlan.description}</p>

              </div>

            </div>

            <div className="summary-price">

              <span>Insurance Cost</span>

              <h2>
                {selectedPlan.price === 0
                  ? "FREE"
                  : `₹${selectedPlan.price}/day`}
              </h2>

            </div>

            <div className="coverage-section">

              <h4>Coverage Highlights</h4>

              {selectedPlan.features.map((feature, index) => (

                <div
                  className="coverage-item"
                  key={index}
                >
                  <FaCheckCircle />
                  <span>{feature}</span>
                </div>

              ))}

            </div>

            <div className="extra-benefits">

              <h4>Additional Benefits</h4>

              <div className="benefit">

                <FaRoad />

                <span>
                  24/7 Roadside Assistance Across India
                </span>

              </div>

              <div className="benefit">

                <FaShieldAlt />

                <span>
                  Instant Claim Assistance
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ==========================
            ACTION BUTTONS
        ========================== */}

        <div className="insurance-actions">

          <button
            type="button"
            className="skip-insurance-btn"
          >
            Continue with Basic Plan
          </button>

          <button
            type="button"
            className="continue-payment-btn"
          >
            Continue to Payment
          </button>

        </div>

      </div>

    </section>
  );
};

export default Insurance;