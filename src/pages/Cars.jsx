import { useState } from "react";

import CarListing from "../components/Cars/CarListing";
import CarCategories from "../components/Cars/CarCategories";
import CarFeatures from "../components/Cars/CarFeatures";
import CompareCars from "../components/Cars/CompareCars";
import CarOffers from "../components/Cars/CarOffers";

const Cars = () => {
  // Currently CarListing renders static data from ../../data/cars.
  // We keep selected category in state so the UI is consistent.
  // If CarListing later supports filtering, we can pass this down.
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <CarCategories onCategorySelect={setSelectedCategory}/>
      <CarListing selectedCategory={selectedCategory} />
      

      <CarFeatures />
      {/* <CompareCars /> */}
      <CarOffers />
    </>
  );
};

export default Cars;


