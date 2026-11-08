// Fallback helper for storing a selected vehicle in booking draft
export const getCarIdLabel = (car) => {
  if (!car) return "";
  return car.id ?? car.name ?? car.category ?? "";
};

