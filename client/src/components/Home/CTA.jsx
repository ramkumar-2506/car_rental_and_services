import { Link } from "react-router-dom";
import Button from "../Common/Button";



const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-blue-950 py-16 text-white sm:py-20 border-t border-b border-gray-800">
      {/* Decorative Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -left-1/4 -top-1/2 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-1/4 -bottom-1/2 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            Book In Minutes. Drive In Comfort.
          </h2>
          <p className="mt-4 text-sm text-gray-300 sm:text-base md:text-lg leading-relaxed">
            Pick your car, choose your dates, and get an instant quote—no hidden costs, no surprises.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/booking" aria-label="Book Now" className="w-full sm:w-auto">
            <Button text="Book Now" variant="primary" />
          </Link>
          <Link to="/fleet" aria-label="Explore Fleet" className="w-full sm:w-auto">
            <Button text="Explore Fleet" variant="outline" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;


