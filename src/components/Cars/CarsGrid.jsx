import CarListing from "./CarListing";

// Compatibility wrapper: CarsGrid is expected by CarListing/other pages.
// Render CarListing directly (avoid extra remount/wrapper nesting).
const CarsGrid = () => {
  return <CarListing />;
};

export default CarsGrid;


