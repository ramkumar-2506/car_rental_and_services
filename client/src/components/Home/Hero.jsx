import { Link } from "react-router-dom";
import { FaArrowRight } from "../Icons/FaFallback";
import Button from "../Common/Button";



const heroImage =
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2200&q=80";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[520px] flex-col justify-center py-10 sm:py-14 lg:min-h-[810px]">
          <span className="inline-flex w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur sm:text-sm">
            🚗 Premium Car Rental Services
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Perfect Ride
            <br />
            Anytime, Anywhere.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Experience hassle-free car rentals with affordable pricing,
            premium vehicles, and exceptional customer service. Whether it's a
            business trip, family vacation, or weekend getaway, we've got the
            perfect car waiting for you.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/booking" className="w-full sm:w-auto">
              <Button
                text="Book Now"
                variant="primary"
                icon={<FaArrowRight />}
              />
            </Link>

            <Link to="/fleet" className="w-full sm:w-auto">
              <Button text="Explore Fleet" variant="outline" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
              <h3 className="text-2xl font-bold text-white">500+</h3>
              <span className="mt-1 block text-xs font-medium text-white/80">
                Vehicles
              </span>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
              <h3 className="text-2xl font-bold text-white">20K+</h3>
              <span className="mt-1 block text-xs font-medium text-white/80">
                Happy Customers
              </span>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <span className="mt-1 block text-xs font-medium text-white/80">
                Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
