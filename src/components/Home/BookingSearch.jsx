import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMapPin, HiCalendarDays, HiTruck, HiMagnifyingGlass } from "react-icons/hi2";
import { prefillBookingDraft } from "../../utils/prefillBookingDraft";

const BookingSearch = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    returnDate: "",
    vehicle: "Sedan",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    prefillBookingDraft({
      pickupLocation: formData.pickup,
      dropLocation: formData.dropoff,
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
      vehicle: formData.vehicle || "Sedan",
    });
    navigate("/booking");
  };

  return (
    <section className="bg-slate-50 py-8 sm:py-10">
      <div className="page-container">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <div className="xl:col-span-2 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5">
              <HiMapPin className="h-5 w-5 shrink-0 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Pickup</label>
                <input
                  type="text"
                  name="pickup"
                  placeholder="Enter pickup location"
                  value={formData.pickup}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="xl:col-span-2 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5">
              <HiMapPin className="h-5 w-5 shrink-0 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Return</label>
                <input
                  type="text"
                  name="dropoff"
                  placeholder="Enter return location"
                  value={formData.dropoff}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5">
              <HiCalendarDays className="h-5 w-5 shrink-0 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-gray-900 outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5">
              <HiCalendarDays className="h-5 w-5 shrink-0 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-gray-900 outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5">
              <HiTruck className="h-5 w-5 shrink-0 text-sky-600" />
              <div className="flex-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Vehicle</label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-gray-900 outline-none"
                >
                  <option value="">Select</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                  <option>Hatchback</option>
                  <option>Electric</option>
                </select>
              </div>
            </div>
            <div className="xl:col-span-6 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700 active:scale-[0.97]"
              >
                <HiMagnifyingGlass className="h-4 w-4" />
                Search Vehicles
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSearch;
