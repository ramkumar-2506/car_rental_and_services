import { Link } from "react-router-dom";
import Button from "../Common/Button";

const AirportTransfers = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700">
              Airport Transfers
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Comfortable rides to and from the airport
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Pre-book your transfer and reach your destination on time with
              professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "On-time Pickup",
                desc: "We track flight timing and plan accordingly.",
              },
              {
                title: "Professional Drivers",
                desc: "Verified and courteous chauffeurs.",
              },
              {
                title: "Easy Booking",
                desc: "Pick dates, choose options, confirm quickly.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/booking" className="w-full sm:w-auto">
            <Button text="Book Airport Transfer" variant="primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AirportTransfers;

