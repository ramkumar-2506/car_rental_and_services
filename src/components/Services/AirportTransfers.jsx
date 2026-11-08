import { useNavigate } from "react-router-dom";
import {
  FaCarSide,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaUserTie,
} from "../Icons/FaFallback";

const features = [
  {
    icon: <FaClock />,
    title: "On-time Pickup",
    desc: "We track flight timing and plan accordingly so you're never left waiting.",
  },
  {
    icon: <FaUserTie />,
    title: "Professional Drivers",
    desc: "Verified and courteous Driverss with extensive local knowledge.",
  },
  {
    icon: <FaCarSide />,
    title: "Premium Vehicles",
    desc: "Travel in comfort with our well-maintained, air-conditioned Cars.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Easy Booking",
    desc: "Pick dates, choose options, and confirm your transfer within minutes.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Flight Monitoring",
    desc: "We monitor your flight status and adjust pickup time accordingly.",
  },
  {
    icon: <FaArrowRight />,
    title: "Meet & Greet",
    desc: "Your driver will meet you at arrivals with a personalised name board.",
  },
];

const AirportTransfers = () => {
  const navigate = useNavigate();
  return (
    <section id="airport" className="bg-gray-50 py-14 sm:py-20">
      <div className="page-container">

        {/* HEADER */}
        <div className="grid grid-cols-1 gap-8">
          {/* Background image (contains all content) */}
          <div
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "28rem",
            }}
            aria-label="Airport Transfer"
            role="img"
          >
            {/* overlay to keep any text/icons readable */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content inside the image */}
            <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end">
              <div className="inline-flex w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20">
                Hassle-Free Airport Transfers
              </div>
              <div className="mt-3 text-white">
                <h3 className="text-2xl font-bold leading-tight">
                  Reach on time, every time
                </h3>
                <p className="mt-1 max-w-md text-sm text-white/80">
                  Pre-book your ride and we handle the timing, tracking, and meet & greet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID — 3 cols, all 6 cards perfectly aligned */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky- text-lg text-sky-">
                {f.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportTransfers;
