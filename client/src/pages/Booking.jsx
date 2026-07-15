import BookingForm from "../components/Booking/BookingForm";
import BookingSteps from "../components/Booking/BookingSteps";
import PricingCalculator from "../components/Booking/PricingCalculator";
import PaymentOptions from "../components/Booking/PaymentOptions";
import BookingFAQ from "../components/Booking/BookingFAQ";

const Booking = () => {
  return (
    <>
      <BookingForm />
      <BookingSteps />
      <PricingCalculator />
      <PaymentOptions />
      <BookingFAQ />
    </>
  );
};

export default Booking;