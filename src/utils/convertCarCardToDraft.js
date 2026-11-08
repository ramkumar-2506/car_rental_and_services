export const convertCarCardToDraft = ({ pickupLocation, dropLocation, pickupDate, returnDate, vehicle }) => {
  // BookingForm draft expects these keys.
  return {
    pickupLocation: pickupLocation ?? "",
    dropLocation: dropLocation ?? "",
    pickupDate: pickupDate ?? "",
    pickupTime: "10:00",
    returnDate: returnDate ?? "",
    returnTime: "10:00",
    vehicle: vehicle ?? "Sedan",
  };
};

