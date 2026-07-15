import { FaCarSide } from "react-icons/fa";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-circle">
          <FaCarSide className="loader-icon" />
        </div>

        <h2>DriveEase</h2>

        <p>Loading your ride...</p>

        <div className="loader-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;