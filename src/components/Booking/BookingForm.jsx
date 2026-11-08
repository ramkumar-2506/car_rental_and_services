import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiUser,
  HiPhone,
  HiEnvelope,
  HiIdentification,
  HiTruck,
  HiMapPin,
  HiCalendarDays,
  HiClock,
  HiShieldCheck,
  HiCheckCircle,
  HiExclamationTriangle,
} from "react-icons/hi2";
import { bookingStorage } from "./bookingStorage";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

const labelClass = "flex items-center gap-2 text-sm font-bold text-slate-700";

const sectionClass =
  "premium-card p-6 sm:p-7";

const drivers = [
  { name: "Shankar", experience: "4+ yrs", available: true, rating: 4.6 },
  { name: "Ravi", experience: "6+ yrs", available: false, rating: 4.8 },
  { name: "Karthik", experience: "8+ yrs", available: true, rating: 4.9 },
  { name: "Suresh", experience: "5+ yrs", available: true, rating: 4.7 },
  { name: "Dinesh", experience: "3+ yrs", available: false, rating: 4.4 },
  { name: "Prakash", experience: "7+ yrs", available: true, rating: 4.9 },
];

const today = new Date().toISOString().split("T")[0];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    licenseNumber: "",
    needDriver: true,
    pickupLocation: "",
    dropLocation: "",
    pickupDate: today,
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    carName: "",
    carCategory: "",
    serviceType: "",
    servicePurpose: "",
    serviceHighlights: [],
    customerDrivingLicenseNumber: "",
    selectedDriver: "",
    emergencyName: "",
    emergencyPhone: "",
    specialRequest: "",
    ageConfirmed: false,
    agree: false,
  });

  useEffect(() => {
    const draft = bookingStorage.getDraft();
    if (!draft) return;
    setFormData((prev) => ({
      ...prev,
      pickupDate: draft.pickupDate ?? prev.pickupDate,
      pickupTime: draft.pickupTime ?? prev.pickupTime,
      returnDate: draft.returnDate ?? prev.returnDate,
      returnTime: draft.returnTime ?? prev.returnTime,
      carName: draft.carName ?? prev.carName,
      carCategory: draft.carCategory ?? prev.carCategory,
      serviceType: draft.serviceType ?? prev.serviceType,
      servicePurpose: draft.servicePurpose ?? prev.servicePurpose,
      serviceHighlights: draft.serviceHighlights ?? prev.serviceHighlights,
      specialRequest: draft.servicePurpose
        ? `${draft.serviceType ? `${draft.serviceType}: ` : ""}${draft.servicePurpose}`
        : prev.specialRequest,
      needDriver:
        typeof draft.needDriver === "boolean" ? draft.needDriver : prev.needDriver,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: type === "checkbox" ? checked : value };
      if (name === "needDriver") {
        if (checked) next.customerDrivingLicenseNumber = "";
        else next.licenseNumber = "";
      }
      return next;
    });
  };

  const [pickupDropError, setPickupDropError] = useState("");
  const [emailStatus, setEmailStatus] = useState({ valid: null, msg: "" });
  const [ageError, setAgeError] = useState("");

  const validateEmail = (value) => {
    if (!value) return { valid: null, msg: "" };
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(value)) return { valid: true, msg: "Valid email" };
    return { valid: false, msg: "Please enter a valid email address" };
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    handleChange(e);
    setEmailStatus(validateEmail(value));
  };

  const validateAge = (value) => {
    if (!value) return "";
    const num = Number(value);
    if (Number.isNaN(num) || num < 1) return "Please enter a valid age.";
    if (num < 18) return "You must be at least 18 years old to rent a vehicle.";
    return "";
  };

  const handleAgeChange = (e) => {
    handleChange(e);
    setAgeError(validateAge(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ageNum = Number(formData.age);
    if (formData.age && (Number.isNaN(ageNum) || ageNum < 18)) {
      setAgeError(ageNum < 1 ? "Please enter a valid age." : "You must be at least 18 years old to rent a vehicle.");
      return;
    }
    setAgeError("");

    const p = formData.pickupLocation.trim().toLowerCase();
    const d = formData.dropLocation.trim().toLowerCase();
    if (p && d && p === d) {
      setPickupDropError("Pickup and drop locations cannot be the same.");
      return;
    }
    setPickupDropError("");

    const msg = encodeURIComponent(
      `*NEW BOOKING ENQUIRY*%0A` +
      `------------------------%0A%0A` +
      `*Customer Details*%0A` +
      `Name: ${formData.fullName}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Age: ${formData.age}%0A%0A` +
      (formData.servicePurpose
        ? `*Service Details*%0A${formData.servicePurpose}%0A%0A`
        : "") +
      (formData.carName
        ? `*Selected Vehicle*%0A${formData.carName} (${formData.carCategory})%0A%0A`
        : "") +
      `*Trip Details*%0A` +
      `Pickup: ${formData.pickupLocation}%0A` +
      `Drop: ${formData.dropLocation}%0A` +
      `Pickup Date: ${formData.pickupDate} at ${formData.pickupTime}%0A` +
      `Return Date: ${formData.returnDate} at ${formData.returnTime}%0A%0A` +
      `*Driver*%0A` +
      `${formData.needDriver ? (formData.selectedDriver || "Not selected") : "Self-drive (License: " + formData.customerDrivingLicenseNumber + ")"}%0A%0A` +
      `*Emergency Contact*%0A` +
      `Name: ${formData.emergencyName}%0A` +
      `Phone: ${formData.emergencyPhone}%0A%0A` +
      (formData.specialRequest
        ? `*Special Requests*%0A${formData.specialRequest}`
        : "")
    );

    window.open(`https://wa.me/919385464830?text=${msg}`, "_blank");
  };

  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Book Now
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Booking Information
          </h1>
          <p className="mt-3 text-base leading-8 text-slate-600">
            Fill in your details to continue your vehicle reservation.
          </p>
        </motion.div>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          {/* Selected Vehicle */}
          {(formData.carName || formData.carCategory) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={sectionClass}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <HiTruck className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Selected Vehicle
                  </span>
                  <p className="text-lg font-bold text-slate-950">
                    {formData.carName && <span>{formData.carName}</span>}
                    {formData.carName && formData.carCategory && <span> &middot; </span>}
                    {formData.carCategory && <span>{formData.carCategory}</span>}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Selected Service */}
          {(formData.serviceType || formData.servicePurpose) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={sectionClass}
            >
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <HiCheckCircle className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Selected Service Purpose
                  </span>
                  <p className="mt-0.5 text-lg font-bold text-slate-950">
                    {formData.serviceType || "Rental Service"}
                  </p>
                  {formData.servicePurpose && (
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {formData.servicePurpose}
                    </p>
                  )}
                  {formData.serviceHighlights?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {formData.serviceHighlights.map((item) => (
                        <span
                          key={item}
                          className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          )}

          {/* Customer Information */}
          <div className={sectionClass}>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiUser className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-950">Customer Information</h2>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiUser className="h-4 w-4 text-sky-500" />Full Name</label>
                <input type="text" name="fullName" placeholder="Enter your name" value={formData.fullName} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiEnvelope className="h-4 w-4 text-sky-500" />Email Address</label>
                <div className="relative">
                  <input type="email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleEmailChange} required className={`${inputClass} ${emailStatus.valid === false ? "border-red-300 pr-10 focus:border-red-400 focus:ring-red-100" : emailStatus.valid === true ? "border-emerald-300 pr-10 focus:border-emerald-400 focus:ring-emerald-100" : ""}`} />
                  {emailStatus.valid !== null && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      {emailStatus.valid ? (
                        <HiCheckCircle className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <HiExclamationTriangle className="h-5 w-5 text-red-500" />
                      )}
                    </span>
                  )}
                </div>
                {emailStatus.valid === false && (
                  <p className="text-xs font-medium text-red-500">{emailStatus.msg}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiPhone className="h-4 w-4 text-sky-500" />Mobile Number</label>
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiIdentification className="h-4 w-4 text-sky-500" />Age</label>
                <div className="relative">
                  <input type="text" name="age" inputMode="numeric" pattern="[0-9]*" placeholder="Enter age" value={formData.age} onChange={handleAgeChange} required className={`${inputClass} ${ageError ? "border-red-300 pr-10 focus:border-red-400 focus:ring-red-100" : ""}`} />
                  {ageError && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      <HiExclamationTriangle className="h-5 w-5 text-red-500" />
                    </span>
                  )}
                </div>
                {ageError && (
                  <p className="text-xs font-medium text-red-500">{ageError}</p>
                )}
              </div>
            </div>
          </div>

          {/* Driver Requirement */}
          <div className={sectionClass}>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-950">Do you need a driver?</h2>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Yes, I need a driver", "No, I will drive myself"].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, needDriver: label.startsWith("Yes") }))}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    (label.startsWith("Yes") ? formData.needDriver : !formData.needDriver)
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-200"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <HiCheckCircle className={`h-4 w-4 ${(label.startsWith("Yes") ? formData.needDriver : !formData.needDriver) ? "text-white" : "text-sky-500"}`} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Driver / Customer Driving */}
          <div className={sectionClass}>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiIdentification className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-950">
                {formData.needDriver ? "Choose a Driver" : "Customer Driving Information"}
              </h2>
            </div>

            {formData.needDriver ? (
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {drivers.map((d) => {
                  const label = `${d.name} (${d.experience})`;
                  const isSelected = formData.selectedDriver === label;
                  return (
                    <button
                      key={d.name}
                      type="button"
                      disabled={!d.available}
                      onClick={() => d.available && setFormData((p) => ({ ...p, selectedDriver: label }))}
                      className={`relative rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${
                        !d.available
                          ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-400"
                          : isSelected
                            ? "border-sky-300 bg-sky-50 text-sky-700 ring-1 ring-sky-200"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span>{d.name}</span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                            d.available
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          <span className={`inline-block h-1.5 w-1.5 rounded-full ${d.available ? "bg-emerald-500" : "bg-red-500"}`} />
                          {d.available ? "Available" : "Unavailable"}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                        <span>{d.experience} exp</span>
                        <span>&middot;</span>
                        <span>Rating: {d.rating}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="mt-4">
                <label className={labelClass}><HiTruck className="h-4 w-4 text-sky-500" />Driving License Number</label>
                <input type="text" name="customerDrivingLicenseNumber" placeholder="TN00XXXXXXXXXX" value={formData.customerDrivingLicenseNumber} onChange={handleChange} required={!formData.needDriver} className={`mt-1.5 ${inputClass}`} />
              </div>
            )}

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiMapPin className="h-4 w-4 text-sky-500" />Pickup Location</label>
                <input type="text" name="pickupLocation" placeholder="Enter pickup location" value={formData.pickupLocation} onChange={(e) => { handleChange(e); setPickupDropError(""); }} required className={`${inputClass} ${pickupDropError ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiMapPin className="h-4 w-4 text-sky-500" />Drop Location</label>
                <input type="text" name="dropLocation" placeholder="Enter drop location" value={formData.dropLocation} onChange={(e) => { handleChange(e); setPickupDropError(""); }} required className={`${inputClass} ${pickupDropError ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`} />
              </div>
              {pickupDropError && (
                <div className="col-span-full flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  <HiExclamationTriangle className="h-4 w-4 shrink-0" />
                  {pickupDropError}
                </div>
              )}
              {formData.needDriver && (
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}><HiTruck className="h-4 w-4 text-sky-500" />Driver License (Optional)</label>
                  <input type="text" name="licenseNumber" placeholder="TN00XXXXXXXXXX" value={formData.licenseNumber} onChange={handleChange} className={inputClass} />
                </div>
              )}
            </div>
          </div>

          {/* Rental Schedule */}
          <div className={sectionClass}>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiCalendarDays className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-950">Rental Schedule</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiCalendarDays className="h-4 w-4 text-sky-500" />Pickup Date</label>
                <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiClock className="h-4 w-4 text-sky-500" />Pickup Time</label>
                <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiCalendarDays className="h-4 w-4 text-sky-500" />Return Date</label>
                <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiClock className="h-4 w-4 text-sky-500" />Return Time</label>
                <input type="time" name="returnTime" value={formData.returnTime} onChange={handleChange} required className={inputClass} />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className={sectionClass}>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiPhone className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-950">Emergency Contact</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiUser className="h-4 w-4 text-sky-500" />Contact Person</label>
                <input type="text" name="emergencyName" placeholder="Emergency contact name" value={formData.emergencyName} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiPhone className="h-4 w-4 text-sky-500" />Contact Number</label>
                <input type="tel" name="emergencyPhone" placeholder="+91 XXXXX XXXXX" value={formData.emergencyPhone} onChange={handleChange} required className={inputClass} />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className={sectionClass}>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiEnvelope className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-950">Special Requests</h2>
            </div>
            <div className="mt-5">
              <textarea
                name="specialRequest"
                rows={4}
                placeholder="Mention child seat, additional driver, airport pickup or any other requests..."
                value={formData.specialRequest}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>

          {/* Terms */}
          <div className={sectionClass}>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-300"
              />
              <span className="text-sm leading-relaxed text-slate-600">
                I agree to the Terms &amp; Conditions, Privacy Policy, Fuel Policy and Rental Agreement.
              </span>
            </label>
          </div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-400 active:scale-[0.97] sm:w-auto"
            >
              Continue to Add-ons
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
