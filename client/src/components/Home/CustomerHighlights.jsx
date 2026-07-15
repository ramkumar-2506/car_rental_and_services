import {
  FaStar,
  FaQuoteLeft,
  FaGoogle,
} from "react-icons/fa";

import SectionTitle from "../Common/SectionTitle";
import "./CustomerHighlights.css";

const testimonials = [
  {
    id: 1,
    name: "John Mathew",
    role: "Business Traveler",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    review:
      "Excellent service! The booking process was simple, the car was spotless, and the staff were extremely professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Tourist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    review:
      "Affordable prices and a wide range of vehicles. I rented an SUV for my family trip and everything went perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Anderson",
    role: "Corporate Client",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    review:
      "Highly recommended! Their executive car rental service exceeded my expectations. I'll definitely book again.",
    rating: 5,
  },
];

const CustomerHighlights = () => {
  return (
    <section className="customer-highlights">
      <div className="customer-container">
        <SectionTitle
          subtitle="Customer Reviews"
          title="What Our Customers Say"
          description="Thousands of customers trust our premium rental services for business trips, vacations, airport transfers, and special occasions."
        />

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <FaQuoteLeft className="quote-icon" />

              <p>{item.review}</p>

              <div className="stars">
                {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <div className="customer-info">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

              <div className="google-review">
                <FaGoogle />
                <span>Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerHighlights;