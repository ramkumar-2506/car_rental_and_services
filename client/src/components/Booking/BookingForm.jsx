import { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaIdCard,
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
} from "../Icons/FaFallback";


const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    licenseNumber: "",

    pickupLocation: "",
    dropLocation: "",

    pickupDate: "",
    pickupTime: "",

    returnDate: "",
    returnTime: "",

    emergencyName: "",
    emergencyPhone: "",

    specialRequest: "",

    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Booking Details Saved Successfully!");
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Booking Information
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Fill in your details to continue your vehicle reservation.
          </p>
        </div>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          {/* CUSTOMER INFORMATION */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Customer Information
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="input-group flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FaUser />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FaEnvelope />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FaPhoneAlt />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FaIdCard />
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* DRIVER INFORMATION */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Driver Information
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaCar className="inline-block mr-2" />
                  Driving License Number
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  placeholder="TN00XXXXXXXXXX"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Enter pickup location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  Drop Location
                </label>
                <input
                  type="text"
                  name="dropLocation"
                  placeholder="Enter drop location"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* RENTAL SCHEDULE */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Rental Schedule
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaCalendarAlt className="inline-block mr-2" />
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaClock className="inline-block mr-2" />
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaCalendarAlt className="inline-block mr-2" />
                  Return Date
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaClock className="inline-block mr-2" />
                  Return Time
                </label>
                <input
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* EMERGENCY CONTACT */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Emergency Contact
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaUser className="inline-block mr-2" />
                  Contact Person
                </label>
                <input
                  type="text"
                  name="emergencyName"
                  placeholder="Emergency contact name"
                  value={formData.emergencyName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="input-group flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  <FaPhoneAlt className="inline-block mr-2" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* SPECIAL REQUEST */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Special Requests
            </h3>
            <div className="mt-4">
              <textarea
                name="specialRequest"
                rows="6"
                placeholder="Mention child seat, additional driver, airport pickup or any other requests..."
                value={formData.specialRequest}
                onChange={handleChange}
                className="w-full resize-y rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* TERMS */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm leading-relaxed text-gray-700">
                I agree to the Terms & Conditions, Privacy Policy, Fuel Policy
                and Rental Agreement.
              </span>
            </label>
          </div>

          {/* SUBMIT */}
          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
            >
              Continue to Add-ons
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;