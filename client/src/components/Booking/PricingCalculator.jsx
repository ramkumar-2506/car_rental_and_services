import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaCar,
  FaMapMarkerAlt,
  FaCalculator,
} from "../Icons/FaFallback";


const vehicles = [
  { id: 1, name: "Hyundai Creta", price: 3800 },
  { id: 2, name: "Mahindra XUV700", price: 4900 },
  { id: 3, name: "Toyota Fortuner", price: 6800 },
  { id: 4, name: "BMW 5 Series", price: 8500 },
  { id: 5, name: "Mercedes C-Class", price: 9000 },
  { id: 6, name: "Tesla Model 3", price: 12000 },
];

const PricingCalculator = () => {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    vehicle: vehicles[0].name,
    pickupDate: today,
    returnDate: today,
    pickupTime: "10:00",
    returnTime: "10:00",
    pickupLocation: "Chennai",
    dropLocation: "Chennai",
  });

  const [summary, setSummary] = useState({
    days: 1,
    pricePerDay: vehicles[0].price,
    subtotal: vehicles[0].price,
    discount: 0,
    gst: 0,
    total: vehicles[0].price,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const selectedVehicle = vehicles.find(
      (v) => v.name === form.vehicle
    );

    const pricePerDay = selectedVehicle.price;

    const start = new Date(form.pickupDate);
    const end = new Date(form.returnDate);

    let days =
      Math.ceil(
        (end - start) / (1000 * 60 * 60 * 24)
      ) + 1;

    if (days <= 0) days = 1;

    const subtotal = days * pricePerDay;

    let discount = 0;

    if (days >= 7) {
      discount = subtotal * 0.1;
    } else if (days >= 3) {
      discount = subtotal * 0.05;
    }

    const gst = (subtotal - discount) * 0.18;

    const total = subtotal - discount + gst;

    setSummary({
      days,
      pricePerDay,
      subtotal,
      discount,
      gst,
      total,
    });
  }, [form]);

  return (
    <section className="pricing-calculator">
      <div className="calculator-container">

        <div className="calculator-header">
          <h2>
            <FaCalculator />
            Rental Price Calculator
          </h2>

          <p>
            Select your vehicle and rental duration to
            get an instant price estimate.
          </p>
        </div>

        <div className="calculator-grid">

          {/* FORM */}

          <div className="calculator-form">

            <div className="input-group">
              <label>
                <FaCar />
                Select Vehicle
              </label>

              <select
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
              >
                {vehicles.map((vehicle) => (
                  <option
                    key={vehicle.id}
                    value={vehicle.name}
                  >
                    {vehicle.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>
                <FaCalendarAlt />
                Pickup Date
              </label>

              <input
                type="date"
                name="pickupDate"
                value={form.pickupDate}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>
                <FaCalendarAlt />
                Return Date
              </label>

              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>
                <FaClock />
                Pickup Time
              </label>

              <input
                type="time"
                name="pickupTime"
                value={form.pickupTime}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>
                <FaClock />
                Return Time
              </label>

              <input
                type="time"
                name="returnTime"
                value={form.returnTime}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>
                <FaMapMarkerAlt />
                Pickup Location
              </label>

              <input
                type="text"
                name="pickupLocation"
                value={form.pickupLocation}
                onChange={handleChange}
                placeholder="Enter pickup location"
              />
            </div>

            <div className="input-group">
              <label>
                <FaMapMarkerAlt />
                Drop-off Location
              </label>

              <input
                type="text"
                name="dropLocation"
                value={form.dropLocation}
                onChange={handleChange}
                placeholder="Enter drop location"
              />
            </div>

          </div>

          {/* SUMMARY */}

          <div className="price-summary">

            <h3>Booking Summary</h3>

            <div className="summary-item">
              <span>Rental Duration</span>
              <strong>{summary.days} Day(s)</strong>
            </div>

            <div className="summary-item">
              <span>Price / Day</span>
              <strong>₹{summary.pricePerDay.toLocaleString()}</strong>
            </div>

            <div className="summary-item">
              <span>Subtotal</span>
              <strong>₹{summary.subtotal.toLocaleString()}</strong>
            </div>

            <div className="summary-item discount">
              <span>Discount</span>
              <strong>
                -₹{summary.discount.toLocaleString()}
              </strong>
            </div>

            <div className="summary-item">
              <span>GST (18%)</span>
              <strong>₹{summary.gst.toFixed(0)}</strong>
            </div>

            <div className="summary-total">
              <span>Total Amount</span>

              <h2>
                ₹{summary.total.toFixed(0)}
              </h2>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;