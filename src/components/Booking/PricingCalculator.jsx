import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  HiTruck,
  HiCalendarDays,
  HiClock,
  HiMapPin,
  HiCalculator,
  HiArrowPath,
  HiExclamationTriangle,
  HiCheckBadge,
} from "react-icons/hi2";

const PER_KM_RATE = 14;

const vehicles = [
  { id: 1, name: "Hyundai Creta", price: 3800 },
  { id: 2, name: "Mahindra XUV700", price: 4900 },
  { id: 3, name: "Toyota Fortuner", price: 6800 },
  { id: 4, name: "BMW 5 Series", price: 8500 },
  { id: 5, name: "Mercedes C-Class", price: 9000 },
  { id: 6, name: "Tesla Model 3", price: 12000 },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

const labelClass = "flex items-center gap-2 text-sm font-bold text-slate-700";

const sameLocationError = "Pickup and drop locations must be different.";

async function geocode(address) {
  const ua = "DriveEaseRental/1.0";
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=jsonv2&limit=1`;
  const res = await fetch(url, {
    headers: { "Accept-Language": "en", "User-Agent": ua },
  });
  if (!res.ok) throw new Error(`Geocoding failed (${res.status})`);
  const data = await res.json();
  if (!data || !data.length) throw new Error(`Location not found: "${address}"`);
  return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function getDrivingDistance(pickup, drop) {
  const [p, d] = await Promise.all([geocode(pickup), geocode(drop)]);
  const ua = "DriveEaseRental/1.0";
  const url = `https://router.project-osrm.org/route/v1/driving/${p.lon},${p.lat};${d.lon},${d.lat}?overview=false`;
  const res = await fetch(url, { headers: { "User-Agent": ua } });
  if (!res.ok) throw new Error(`Routing failed (${res.status})`);
  const data = await res.json();
  if (!data || !data.routes || !data.routes.length)
    throw new Error("Could not calculate route.");
  return Math.round(data.routes[0].distance / 1000);
}

const PricingCalculator = () => {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    vehicle: vehicles[0].name,
    pickupDate: today,
    returnDate: today,
    pickupTime: "10:00",
    returnTime: "10:00",
    pickupLocation: "",
    dropLocation: "",
  });

  const [distance, setDistance] = useState(null);
  const [distLoading, setDistLoading] = useState(false);
  const [distError, setDistError] = useState(null);
  const [locError, setLocError] = useState(null);
  const [distReady, setDistReady] = useState(false);
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setDistReady(false);
  };

  const fetchDistance = useCallback(async (p, d) => {
    setDistLoading(true);
    setDistError(null);
    setDistReady(false);
    try {
      const km = await getDrivingDistance(p, d);
      setDistance(km);
      setDistReady(true);
    } catch {
      try {
        const [pGeo, dGeo] = await Promise.all([geocode(p), geocode(d)]);
        const km = Math.round(haversineKm(pGeo.lat, pGeo.lon, dGeo.lat, dGeo.lon));
        setDistance(km);
        setDistReady(true);
      } catch (fallbackErr) {
        setDistError(`Could not calculate distance: ${fallbackErr.message}`);
        setDistance(null);
      }
    } finally {
      setDistLoading(false);
    }
  }, []);

  useEffect(() => {
    const p = form.pickupLocation.trim();
    const d = form.dropLocation.trim();

    setLocError(null);

    if (p && d && p.toLowerCase() === d.toLowerCase()) {
      setLocError(sameLocationError);
      setDistance(null);
      setDistError(null);
      setDistReady(false);
      return;
    }

    if (!p || !d) {
      setDistance(null);
      setDistError(null);
      setDistReady(false);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      fetchDistance(p, d);
    }, 800);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [form.pickupLocation, form.dropLocation, fetchDistance]);

  const selectedVehicle = vehicles.find((v) => v.name === form.vehicle);
  const pricePerDay = selectedVehicle?.price ?? vehicles[0].price;
  const start = new Date(form.pickupDate);
  const end = new Date(form.returnDate);
  let days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  if (days <= 0 || Number.isNaN(days)) days = 1;

  const distanceCharge = distance ? distance * PER_KM_RATE : 0;
  const dailySubtotal = days * pricePerDay;
  const subtotal = dailySubtotal + distanceCharge;
  let discount = 0;
  if (days >= 7) discount = subtotal * 0.1;
  else if (days >= 3) discount = subtotal * 0.05;
  const gst = (subtotal - discount) * 0.18;
  const total = subtotal - discount + gst;

  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Rental Price Calculator
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="premium-card p-6 sm:p-7 lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiCalculator className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Select Details</h3>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className={labelClass}><HiTruck className="h-4 w-4 text-sky-500" />Select Vehicle</label>
                <select name="vehicle" value={form.vehicle} onChange={handleChange} className={inputClass}>
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.name}>{v.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiCalendarDays className="h-4 w-4 text-sky-500" />Pickup Date</label>
                <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiCalendarDays className="h-4 w-4 text-sky-500" />Return Date</label>
                <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiClock className="h-4 w-4 text-sky-500" />Pickup Time</label>
                <input type="time" name="pickupTime" value={form.pickupTime} onChange={handleChange} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiClock className="h-4 w-4 text-sky-500" />Return Time</label>
                <input type="time" name="returnTime" value={form.returnTime} onChange={handleChange} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiMapPin className="h-4 w-4 text-sky-500" />Pickup Location</label>
                <input
                  type="text" name="pickupLocation" value={form.pickupLocation}
                  onChange={handleChange} placeholder="e.g. Chennai" className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}><HiMapPin className="h-4 w-4 text-sky-500" />Drop-off Location</label>
                <input
                  type="text" name="dropLocation" value={form.dropLocation}
                  onChange={handleChange} placeholder="e.g. Bangalore" className={inputClass}
                />
              </div>
            </div>

            {form.pickupLocation.trim() && form.dropLocation.trim() && !locError && !distLoading && !distReady && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => fetchDistance(form.pickupLocation.trim(), form.dropLocation.trim())}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-sky-400 active:scale-95"
                >
                  <HiCalculator className="h-4 w-4" />
                  Calculate Distance
                </button>
              </div>
            )}

            {distReady && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => fetchDistance(form.pickupLocation.trim(), form.dropLocation.trim())}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-bold text-sky-700 transition hover:bg-sky-100 active:scale-95"
                >
                  <HiArrowPath className="h-4 w-4" />
                  Recalculate
                </button>
              </div>
            )}

            {distError && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => fetchDistance(form.pickupLocation.trim(), form.dropLocation.trim())}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-sky-400 active:scale-95"
                >
                  <HiArrowPath className="h-4 w-4" />
                  Retry
                </button>
              </div>
            )}

            {locError && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                <HiExclamationTriangle className="h-4 w-4 shrink-0" />
                {locError}
              </div>
            )}

            {distLoading && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                <HiArrowPath className="h-4 w-4 animate-spin" />
                Calculating distance...
              </div>
            )}

            {distReady && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                <HiCheckBadge className="h-4 w-4 shrink-0" />
                Distance calculated: {distance.toLocaleString()} km
              </div>
            )}

            {distError && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">
                <HiExclamationTriangle className="h-4 w-4 shrink-0" />
                {distError}
              </div>
            )}
          </div>

          <div className="premium-card p-6 sm:p-7 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <HiCalculator className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Booking Summary</h3>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                <span className="font-semibold text-slate-600">Rental Duration</span>
                <span className="font-bold text-slate-900">{days} Day(s)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                <span className="font-semibold text-slate-600">Daily Rate</span>
                <span className="font-bold text-slate-900">₹{pricePerDay.toLocaleString()}</span>
              </div>
              {distance !== null && (
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                  <span className="font-semibold text-slate-600">Distance</span>
                  <span className="font-bold text-slate-900">{distance.toLocaleString()} km</span>
                </div>
              )}
              {distanceCharge > 0 && (
                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                  <span className="font-semibold text-slate-600">Distance Charge (₹{PER_KM_RATE}/km)</span>
                  <span className="font-bold text-slate-900">₹{distanceCharge.toLocaleString()}</span>
                </div>
              )}
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                <span className="font-semibold text-slate-600">Subtotal</span>
                <span className="font-bold text-slate-900">₹{subtotal.toLocaleString()}</span>
              </div>

              {discount > 0 && (
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-2.5 text-sm">
                  <span className="font-semibold text-emerald-700">Discount</span>
                  <span className="font-bold text-emerald-700">-₹{discount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                <span className="font-semibold text-slate-600">GST (18%)</span>
                <span className="font-bold text-slate-900">₹{gst.toFixed(0)}</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-sky-50 px-4 py-3 text-sm">
                <span className="font-bold text-sky-700">Total Amount</span>
                <span className="text-xl font-bold text-slate-950">₹{total.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
