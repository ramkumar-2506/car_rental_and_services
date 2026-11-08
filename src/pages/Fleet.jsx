import EconomyCars from "../components/Cars/EconomyCars";
import LuxuryCars from "../components/Cars/LuxuryCars";
import SUVs from "../components/Cars/SUVs";
import ElectricCars from "../components/Cars/ElectricCars";
import Vans from "../components/Cars/Vans";

const Cars = () => {
  return (
    <>
      <EconomyCars />
      <LuxuryCars />
      <SUVs />
      <ElectricCars />
      <Vans />
    </>
  );
};

export default Cars;