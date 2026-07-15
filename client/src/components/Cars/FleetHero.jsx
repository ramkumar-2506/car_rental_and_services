import { Link } from "react-router-dom";
import { FaArrowRight, FaCarSide } from "react-icons/fa";
import Button from "../Common/Button";

const heroImage =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80";

const FleetHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-gray-900"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
            <FaCarSide />
            Premium Vehicle Collection
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Explore Our
            <br />
            Premium Fleet
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-200 sm:text-base">
            Choose from luxury sedans, premium SUVs, hatchbacks, electric
            vehicles, and executive cars. Every vehicle is professionally
            maintained, sanitized, and ready for your next journey.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/booking" className="w-full sm:w-auto">
              <Button
                text="Book Your Ride"
                variant="primary"
                icon={<FaArrowRight />}
              />
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <Button text="Contact Us" variant="outline" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              <h3 className="text-2xl font-extrabold text-white">500+</h3>
              <span className="mt-1 block text-sm font-medium text-gray-200">
                Cars Available
              </span>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              <h3 className="text-2xl font-extrabold text-white">24/7</h3>
              <span className="mt-1 block text-sm font-medium text-gray-200">
                Customer Support
              </span>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              <h3 className="text-2xl font-extrabold text-white">100%</h3>
              <span className="mt-1 block text-sm font-medium text-gray-200">
                Sanitized Vehicles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetHero;