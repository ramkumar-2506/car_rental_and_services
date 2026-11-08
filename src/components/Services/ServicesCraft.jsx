import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCheckCircle,
  HiClock,
  HiCreditCard,
  HiOfficeBuilding,
  HiShieldCheck,
  HiSparkles,
  HiSupport,
  HiTruck,
  HiUser,
} from "react-icons/hi";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";
import { prefillBookingDraft } from "../../utils/prefillBookingDraft";

const whatsappNumber = "919385464830";

const services = [
  {
    title: "Self-drive rentals",
    label: "Most booked",
    icon: HiSparkles,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80",
    copy: "For city work, weekend plans, and family trips. Choose hatchback, sedan, SUV, or luxury options with clear day-wise pricing.",
    points: ["Clean handover", "Flexible return", "Insurance included"],
  },
  {
    title: "Driver on request",
    label: "Hourly or full day",
    icon: HiUser,
    image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1000&q=80",
    copy: "Useful when you want to attend meetings, events, or family functions without driving yourself.",
    points: ["Verified drivers", "Local route knowledge", "Polite service"],
  },
  {
    title: "Airport transfers",
    label: "Flight-aware pickup",
    icon: HiClock,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    copy: "Pre-book pickup or drop. We keep buffer time for traffic and flight changes so the ride feels calm.",
    points: ["Meet and greet", "Luggage friendly", "On-time pickup"],
  },
  {
    title: "Corporate travel",
    label: "Monthly billing",
    icon: HiOfficeBuilding,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    copy: "Cars and drivers for employee transport, client visits, airport runs, and recurring business travel.",
    points: ["Account manager", "Trip reports", "Priority support"],
  },
  {
    title: "Long-term leasing",
    label: "6 to 24 months",
    icon: HiCreditCard,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=80",
    copy: "Keep a vehicle without buying one. Maintenance, insurance, and replacement support can be included.",
    points: ["Fixed monthly cost", "Service included", "Upgrade options"],
  },
  {
    title: "Roadside assistance",
    label: "24/7 support",
    icon: HiTruck,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1000&q=80",
    copy: "Flat tyre, battery jump-start, emergency fuel, or towing support when a trip does not go as planned.",
    points: ["Fast dispatch", "Live help", "Towing support"],
  },
];

const process = [
  ["Tell us the trip", "Date, location, vehicle type, and whether you need a driver."],
  ["We confirm the best fit", "You get availability, inclusions, and the final price before payment."],
  ["Pickup and drive", "The car is checked, cleaned, documented, and handed over on time."],
];

const whatsappLink = (title) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I want details about ${title}.`)}`;

const ServicesCraft = () => {
  const navigate = useNavigate();

  const handleServiceBooking = (service) => {
    prefillBookingDraft({
      serviceType: service.title,
      servicePurpose: service.copy,
      serviceHighlights: service.points,
      vehicle: service.title,
      carName: service.title,
      carCategory: service.label,
      needDriver: service.title !== "Self-drive rentals",
      pickupLocation: "Chennai",
      dropLocation: "Chennai",
    });
    navigate("/booking");
  };

  return (
    <section className="overflow-hidden bg-[#f7f4ef] py-14 text-slate-950 sm:py-20 lg:py-24">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal direction="right">
            <span className="inline-flex rounded-full border border-slate-300 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
              What We Handle
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Real services for real travel days.
            </h2>
          </Reveal>
          <Reveal direction="left">
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              The section is intentionally simple: no exaggerated claims, no confusing package names. Just the services customers usually ask for, written the way a rental desk would explain them.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={staggerItem}
                role="button"
                tabIndex={0}
                onClick={() => handleServiceBooking(service)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleServiceBooking(service);
                  }
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
              >
                <div className="relative h-56 overflow-hidden sm:h-60">
                  <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
                    {service.label}
                  </span>
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-950/20">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.copy}</p>
                  <div className="mt-5 grid gap-2">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <HiCheckCircle className="h-5 w-5 text-emerald-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                    <button type="button" onClick={(event) => { event.stopPropagation(); handleServiceBooking(service); }} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-slate-800">
                      Book
                    </button>
                    <a href={whatsappLink(service.title)} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 transition hover:border-sky-300 hover:text-sky-700">
                      Ask details
                      <HiArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-16 grid gap-8 rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal direction="right" className="p-1 sm:p-3">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
              How it works
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              A rental process that does not need a manual.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              We keep confirmation clear because customers mostly want three things: the right car, the final price, and the assurance that someone will answer if plans change.
            </p>
            <Link to="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-sky-100">
              Plan My Trip
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-3">
            {process.map(([title, text], index) => (
              <Reveal key={title} direction="left" delay={index * 0.08} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            [HiShieldCheck, "Inspected before handover", "Basic checks, documents, and cleanliness are handled before pickup."],
            [HiSupport, "Support during the trip", "For extensions, route questions, roadside issues, or booking changes."],
            [HiCreditCard, "No surprise pricing", "Rates and inclusions are shared before the booking is confirmed."],
          ].map(([Icon, title, text]) => (
            <Reveal key={title} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
              <Icon className="h-7 w-7 text-sky-600" />
              <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCraft;
