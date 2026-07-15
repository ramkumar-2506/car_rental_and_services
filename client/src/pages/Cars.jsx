import CarListing from "../components/Cars/CarListing";
import CarCategories from "../components/Cars/CarCategories";
import CarFeatures from "../components/Cars/CarFeatures";
import CompareCars from "../components/Cars/CompareCars";
import CarOffers from "../components/Cars/CarOffers";

const Cars = () => {
  return (
    <>
      <CarListing />
      <CarCategories />
      <CarFeatures />
      <CompareCars />
      <CarOffers />
    </>
  );
};

export default Cars;