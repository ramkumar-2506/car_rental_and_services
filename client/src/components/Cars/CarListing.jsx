import FleetGrid from "./FleetGrid";

// Compatibility wrapper: pages/Cars.jsx expects CarListing
const CarListing = () => {
  return <FleetGrid />;
};

export default CarListing;

