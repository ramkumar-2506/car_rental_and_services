import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCar,
  FaSearch,
} from "react-icons/fa";
import "./BookingSearch.css";

const BookingSearch = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    returnDate: "",
    vehicle: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Search functionality will be connected later.");
  };

  return (
    <section className="booking-search">
      <div className="booking-container">

        <form onSubmit={handleSubmit}>

          {/* Pickup */}

          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />

            <div>
              <label>Pickup Location</label>

              <input
                type="text"
                name="pickup"
                placeholder="Enter Pickup Location"
                value={formData.pickup}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Dropoff */}

          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />

            <div>
              <label>Return Location</label>

              <input
                type="text"
                name="dropoff"
                placeholder="Enter Return Location"
                value={formData.dropoff}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Pickup Date */}

          <div className="input-group">
            <FaCalendarAlt className="input-icon" />

            <div>
              <label>Pickup Date</label>

              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Return Date */}

          <div className="input-group">
            <FaCalendarAlt className="input-icon" />

            <div>
              <label>Return Date</label>

              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Vehicle */}

          <div className="input-group">
            <FaCar className="input-icon" />

            <div>
              <label>Vehicle Type</label>

              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
              >
                <option value="">Select Vehicle</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Luxury</option>
                <option>Hatchback</option>
                <option>Electric</option>
              </select>
            </div>
          </div>

          <button className="search-btn">
            <FaSearch />
            Search
          </button>

        </form>
      </div>
    </section>
  );
};

export default BookingSearch;