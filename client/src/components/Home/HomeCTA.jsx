import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import Button from "../Common/Button";
import "./HomeCTA.css";

const backgroundImage =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80";

const HomeCTA = () => {
  return (
    <section
      className="home-cta"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="cta-overlay"></div>

      <div className="cta-container">
        <span className="cta-subtitle">
          🚗 Premium Car Rental Experience
        </span>

        <h2>
          Book Your Dream Car
          <br />
          Today & Start Your Journey
        </h2>

        <p>
          Whether you're planning a business trip, weekend getaway,
          airport transfer, or a special event, our premium fleet is
          ready to make every journey comfortable, safe, and memorable.
        </p>

        <div className="cta-features">
          <div>
            <FaCheckCircle />
            <span>24/7 Customer Support</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Instant Booking</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Affordable Pricing</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Premium Fleet</span>
          </div>
        </div>

        <div className="cta-buttons">
          <Link to="/booking">
            <Button
              text="Book Now"
              variant="primary"
              icon={<FaArrowRight />}
            />
          </Link>

          <a href="tel:+919876543210">
            <Button
              text="Call Now"
              variant="outline"
              icon={<FaPhoneAlt />}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;