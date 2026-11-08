import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCalendar,
  HiChatAlt2,
  HiMail,
  HiPhone,
  HiShieldCheck,
  HiUser,
} from "react-icons/hi";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const whatsappNumber = "919385464830";

const quickHelp = [
  {
    title: "Booking desk",
    detail: "+91 98765 43210",
    copy: "For availability, pickup timing, car type, and rental changes.",
    icon: HiPhone,
    href: "tel:+919876543210",
    action: "Call now",
  },
  {
    title: "WhatsApp support",
    detail: "+91 93854 64830",
    copy: "Fastest way to share dates, pickup point, and vehicle preference.",
    icon: HiChatAlt2,
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help with a car rental booking.")}`,
    action: "Chat on WhatsApp",
  },
  {
    title: "Email enquiries",
    detail: "support@driveease.com",
    copy: "Best for corporate plans, invoices, long-term leasing, and feedback.",
    icon: HiMail,
    href: "mailto:support@driveease.com",
    action: "Send email",
  },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

const ContactExperience = () => {
  const [formData, setFormData] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = [
      "Hi DriveEase, I want help with a rental enquiry.",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Service: ${formData.service}`,
      `Date: ${formData.date}`,
      `Message: ${formData.message}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setFormData(initialForm);
    window.setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="overflow-hidden bg-[#f7f4ef] text-slate-950">
      <div className="relative isolate bg-slate-950 text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.94),rgba(15,23,42,0.78),rgba(2,6,23,0.36))]" />

        <div className="page-container relative flex min-h-[58svh] items-center py-16 sm:py-20 lg:py-64">
          <Reveal className="w-full max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-100 backdrop-blur-xl">
              Contact DriveEase
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Need a car, driver, or quick support?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Tell us your pickup location, travel date, and vehicle preference. Our rental desk will help you choose the right option without confusing packages or hidden costs.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="page-container py-14 sm:py-20 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {quickHelp.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} variants={staggerItem} className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-1 text-sm font-semibold text-sky-700">{item.detail}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:text-sky-700">
                  {item.action}
                  <HiArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal direction="right" className="rounded-2xl bg-slate-950 p-6 text-white shadow-lg sm:p-8">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-100">
              Before You Message
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
              Share these details for a faster quote.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "Pickup and drop location",
                "Travel date and return date",
                "Self-drive or driver required",
                "Vehicle type: hatchback, sedan, SUV, luxury, van",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/10 p-4 text-sm font-medium text-slate-100 backdrop-blur-xl">
                  <HiShieldCheck className="mt-0.5 h-5 w-5 flex-none text-sky-300" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl">
              <iframe
                title="DriveEase pickup office location"
                src="https://www.google.com/maps?q=Tirunelveli+Palayapettai&output=embed"
                loading="lazy"
                allowFullScreen
                className="h-72 w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal direction="left" className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700">
              Rental Enquiry
            </span>
            <h2 className="mt-4 text-2xl font-bold text-slate-950">Send trip details</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              This opens WhatsApp with your details filled in, so our team can reply quickly.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-300 focus-within:bg-white">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500"><HiUser /> Name</span>
                <input name="name" value={formData.name} onChange={handleChange} required className="mt-2 w-full bg-transparent text-sm outline-none" placeholder="Your name" />
              </label>
              <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-300 focus-within:bg-white">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500"><HiPhone /> Phone</span>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-2 w-full bg-transparent text-sm outline-none" placeholder="Mobile number" />
              </label>
              <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-300 focus-within:bg-white">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500"><HiMail /> Email</span>
                <input name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 w-full bg-transparent text-sm outline-none" placeholder="Email address" />
              </label>
              <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-300 focus-within:bg-white">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500"><HiCalendar /> Date</span>
                <input name="date" type="date" value={formData.date} onChange={handleChange} required className="mt-2 w-full bg-transparent text-sm outline-none" />
              </label>
              <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-300 focus-within:bg-white sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Service needed</span>
                <select name="service" value={formData.service} onChange={handleChange} required className="mt-2 w-full bg-transparent text-sm outline-none">
                  <option value="">Select service</option>
                  <option>Self-drive rental</option>
                  <option>Car with driver</option>
                  <option>Airport transfer</option>
                  <option>Corporate travel</option>
                  <option>Long-term leasing</option>
                  <option>Roadside assistance</option>
                </select>
              </label>
              <label className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-300 focus-within:bg-white sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Message</span>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="mt-2 w-full resize-none bg-transparent text-sm leading-relaxed outline-none" placeholder="Pickup location, drop location, car type, number of days..." />
              </label>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
                <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Send on WhatsApp
                  <HiArrowRight className="h-4 w-4" />
                </button>
                {sent && <p className="text-sm font-medium text-emerald-600">Opening WhatsApp with your enquiry.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactExperience;
