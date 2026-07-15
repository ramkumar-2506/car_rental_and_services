import ChauffeurService from "../components/Services/ChauffeurService";
import AirportTransfers from "../components/Services/AirportTransfers";
import CorporatePackages from "../components/Services/CorporatePackages";
import LongTermLeasing from "../components/Services/LongTermLeasing";
import RoadsideAssistance from "../components/Services/RoadsideAssistance";

const Services = () => {
  return (
    <>
      <ChauffeurService />
      <AirportTransfers />
      <CorporatePackages />
      <LongTermLeasing />
      <RoadsideAssistance />
    </>
  );
};

export default Services;