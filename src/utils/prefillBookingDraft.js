import { bookingStorage } from "../components/Booking/bookingStorage";

const toDateInputValue = (d) => {
  if (!d) return "";
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return "";
  return dt.toISOString().split("T")[0];
};

export const DEFAULT_BOOKING_DRAFT = {
  // Customer / emergency fields intentionally left blank
  pickupLocation: "",
  dropLocation: "",
  pickupDate: "",
  pickupTime: "10:00",
  returnDate: "",
  returnTime: "10:00",
  // This component doesn't currently have vehicle selection, but future steps might
  vehicle: "Sedan",
};

export function prefillBookingDraft(partialDraft = {}) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const draft = {
    ...DEFAULT_BOOKING_DRAFT,
    pickupLocation: partialDraft.pickupLocation ?? "Chennai",
    dropLocation: partialDraft.dropLocation ?? "Chennai",
    pickupDate: partialDraft.pickupDate ?? toDateInputValue(today),
    returnDate: partialDraft.returnDate ?? toDateInputValue(tomorrow),
    pickupTime: partialDraft.pickupTime ?? "10:00",
    returnTime: partialDraft.returnTime ?? "10:00",
    vehicle: partialDraft.vehicle ?? "Sedan",

    // Extra optional data so Booking page can show chosen vehicle details
    carId: partialDraft.carId ?? null,
    carName: partialDraft.carName ?? null,
    carCategory: partialDraft.carCategory ?? null,

    // Drivers hire (from Services → Hire Drivers)
    needDriver: partialDraft.needDriver ?? null,
    selectedDriver: partialDraft.selectedDriver ?? null,
    DriversId: partialDraft.DriversId ?? null,
    DriversName: partialDraft.DriversName ?? null,
    DriversExperience: partialDraft.DriversExperience ?? null,
    DriversRating: partialDraft.DriversRating ?? null,
    DriversImage: partialDraft.DriversImage ?? null,
    DriversLanguages: partialDraft.DriversLanguages ?? null,
    DriversLocked: partialDraft.DriversLocked ?? false,
    serviceType: partialDraft.serviceType ?? null,
    servicePurpose: partialDraft.servicePurpose ?? null,
    serviceHighlights: partialDraft.serviceHighlights ?? null,
  };

  bookingStorage.setDraft(draft);
  return draft;
}

/** Prefill booking for a hired Drivers and lock Drivers fields. */
export function prefillDriversHire(driver) {
  const selectedDriver = `${driver.name} (${driver.experience})`;

  return prefillBookingDraft({
    needDriver: true,
    selectedDriver,
    DriversId: driver.id,
    DriversName: driver.name,
    DriversExperience: driver.experience,
    DriversRating: driver.rating,
    DriversImage: driver.image,
    DriversLanguages: driver.languages,
    DriversLocked: true,
    serviceType: "Drivers",
    vehicle: "Drivers Service",
    carName: "Professional Drivers",
    carCategory: selectedDriver,
    pickupLocation: "Chennai",
    dropLocation: "Chennai",
  });
}

