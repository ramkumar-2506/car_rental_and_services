import { useState } from "react";
import {
  FaUserTie,
  FaMapMarkedAlt,
  FaBaby,
  FaWifi,
  FaShieldAlt,
  FaSuitcase,
  FaCheckCircle,
} from "react-icons/fa";
import "./Addons.css";

const addonList = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: "Professional Driver",
    description:
      "Hire an experienced driver for a safe and comfortable journey.",
    price: 1200,
  },
  {
    id: 2,
    icon: <FaMapMarkedAlt />,
    title: "GPS Navigation",
    description:
      "Get built-in GPS navigation with real-time route assistance.",
    price: 300,
  },
  {
    id: 3,
    icon: <FaBaby />,
    title: "Child Safety Seat",
    description:
      "Comfortable and certified child safety seat for your little one.",
    price: 500,
  },
  {
    id: 4,
    icon: <FaWifi />,
    title: "Portable Wi-Fi",
    description:
      "Unlimited high-speed internet during your rental period.",
    price: 450,
  },
  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Premium Insurance",
    description:
      "Additional insurance coverage with lower liability.",
    price: 900,
  },
  {
    id: 6,
    icon: <FaSuitcase />,
    title: "Roof Luggage Carrier",
    description:
      "Extra luggage space for long trips and family vacations.",
    price: 650,
  },
];

const Addons = () => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (addon) => {
    const exists = selectedAddons.find(
      (item) => item.id === addon.id
    );

    if (exists) {
      setSelectedAddons(
        selectedAddons.filter(
          (item) => item.id !== addon.id
        )
      );
    } else {
      setSelectedAddons([
        ...selectedAddons,
        addon,
      ]);
    }
  };

  const totalPrice = selectedAddons.reduce(
    (total, addon) => total + addon.price,
    0
  );

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose Your Add-ons
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Customize your rental experience by selecting additional services
            and accessories.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addonList.map((addon) => {
            const isSelected = selectedAddons.some(
              (item) => item.id === addon.id
            );

            return (
              <div
                key={addon.id}
                className={`rounded-2xl border bg-white p-6 shadow-sm transition ${
                  isSelected
                    ? "border-blue-200 ring-2 ring-blue-100"
                    : "border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-blue-600">{addon.icon}</div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isSelected
                        ? "bg-blue-50 text-blue-700"
                        : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    ₹{addon.price}
                  </div>
                </div>

                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {addon.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {addon.description}
                </p>

                <button
                  type="button"
                  onClick={() => toggleAddon(addon)}
                  className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    isSelected
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {isSelected ? (
                    <>
                      <FaCheckCircle />
                      Selected
                    </>
                  ) : (
                    "Add Service"
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Selected summary */}
        <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900">
            Selected Add-ons
          </h3>

          {selectedAddons.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-sm font-medium text-gray-600">
                No add-on services selected.
              </p>
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="space-y-3">
                  {selectedAddons.map((addon) => (
                    <div
                      key={addon.id}
                      className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        {addon.title}
                      </span>
                      <strong className="text-sm font-bold text-gray-900">
                        ₹{addon.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <span className="text-sm font-semibold text-gray-600">
                  Total Add-on Cost
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                  ₹{totalPrice.toLocaleString()}
                </h2>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Skip Add-ons
          </button>
          <button
            type="button"
            className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Continue to Insurance
          </button>
        </div>
      </div>
    </section>
  );
};

export default Addons;