import SectionTitle from "../Common/SectionTitle";
import DealCard from "./DealCard";
import "./SpecialDeals.css";

const deals = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    title: "Weekend Getaway Offer",
    discount: 25,
    description:
      "Enjoy exclusive weekend discounts on premium SUVs and luxury sedans for your family trips.",
    validTill: "31 Dec 2026",
    coupon: "WEEKEND25",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    title: "Luxury Car Experience",
    discount: 30,
    description:
      "Drive premium luxury vehicles with an exclusive discount for a limited time.",
    validTill: "15 Jan 2027",
    coupon: "LUXURY30",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    title: "Airport Transfer Deal",
    discount: 20,
    description:
      "Book airport pickup or drop-off services and save more on every trip.",
    validTill: "10 Feb 2027",
    coupon: "AIRPORT20",
  },
];

const SpecialDeals = () => {
  return (
    <section className="special-deals">
      <div className="special-container">
        <SectionTitle
          subtitle="Special Deals"
          title="Save More on Every Ride"
          description="Take advantage of our limited-time offers and exclusive discounts on premium vehicles."
        />

        <div className="deals-grid">
          {deals.map((deal) => (
            <DealCard
              key={deal.id}
              image={deal.image}
              title={deal.title}
              discount={deal.discount}
              description={deal.description}
              validTill={deal.validTill}
              coupon={deal.coupon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDeals;