import { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaUndo,
} from "react-icons/fa";
import "./FleetFilter.css";

const FleetFilter = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    brand: "",
    fuel: "",
    transmission: "",
    price: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFilters({
      search: "",
      category: "",
      brand: "",
      fuel: "",
      transmission: "",
      price: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(filters);

    alert("Filter functionality will be connected later.");
  };

  return (
    <section className="fleet-filter">
      <div className="filter-container">

        <div className="filter-header">
          <h2>
            <FaFilter />
            Find Your Perfect Car
          </h2>

          <p>
            Filter vehicles based on your travel needs.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Search */}

          <div className="form-group">
            <label>Search Car</label>

            <div className="search-box">
              <FaSearch />

              <input
                type="text"
                name="search"
                placeholder="BMW, Audi, SUV..."
                value={filters.search}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Category */}

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">All Categories</option>
              <option>Luxury</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Hatchback</option>
              <option>Electric</option>
            </select>
          </div>

          {/* Brand */}

          <div className="form-group">
            <label>Brand</label>

            <select
              name="brand"
              value={filters.brand}
              onChange={handleChange}
            >
              <option value="">All Brands</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Mercedes</option>
              <option>Toyota</option>
              <option>Hyundai</option>
              <option>Mahindra</option>
            </select>
          </div>

          {/* Fuel */}

          <div className="form-group">
            <label>Fuel Type</label>

            <select
              name="fuel"
              value={filters.fuel}
              onChange={handleChange}
            >
              <option value="">All Fuel Types</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
            </select>
          </div>

          {/* Transmission */}

          <div className="form-group">
            <label>Transmission</label>

            <select
              name="transmission"
              value={filters.transmission}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
          </div>

          {/* Price */}

          <div className="form-group">
            <label>Price / Day</label>

            <select
              name="price"
              value={filters.price}
              onChange={handleChange}
            >
              <option value="">Any Budget</option>
              <option>₹1,000 - ₹3,000</option>
              <option>₹3,000 - ₹5,000</option>
              <option>₹5,000 - ₹8,000</option>
              <option>₹8,000+</option>
            </select>
          </div>

          <div className="filter-buttons">
            <button
              type="submit"
              className="search-btn"
            >
              <FaSearch />
              Search
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              <FaUndo />
              Reset
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default FleetFilter;