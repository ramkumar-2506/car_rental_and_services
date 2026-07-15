import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

const CTA = ({
  title = "Need a Rental Today?",
  subtitle = "Choose from our premium fleet and enjoy a safe, comfortable, and affordable journey. Book your ride in just a few clicks.",
  primaryText = "Book Now",
  primaryLink = "/booking",
  secondaryText = "Contact Us",
  secondaryLink = "/contact",
}) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
              Premium Car Rental
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to={primaryLink}>
              <Button
                text={primaryText}
                variant="primary"
                icon={<FaArrowRight />}
              />
            </Link>

            <Link to={secondaryLink}>
              <Button text={secondaryText} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;