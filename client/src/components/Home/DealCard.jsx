import { FaTag, FaCalendarAlt } from "react-icons/fa";
import Button from "../Common/Button";
import "./DealCard.css";

const DealCard = ({
  image,
  title,
  discount,
  description,
  validTill,
  coupon,
}) => {
  return (
    <div className="deal-card">
      <div className="deal-image">
        <img src={image} alt={title} />

        <div className="deal-discount">
          {discount}% OFF
        </div>
      </div>

      <div className="deal-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="deal-info">
          <div className="deal-item">
            <FaCalendarAlt />
            <span>Valid Till: {validTill}</span>
          </div>

          <div className="deal-item coupon">
            <FaTag />
            <span>{coupon}</span>
          </div>
        </div>

        <Button
          text="Book Offer"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default DealCard;