import EconomyCars from "../components/Fleet/EconomyCars";
import LuxuryCars from "../components/Fleet/LuxuryCars";
import SUVs from "../components/Fleet/SUVs";
import ElectricCars from "../components/Fleet/ElectricCars";
import Vans from "../components/Fleet/Vans";

const Fleet = () => {
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

export default Fleet;