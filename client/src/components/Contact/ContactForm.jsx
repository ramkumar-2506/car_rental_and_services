import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaCar,
  FaCalendarAlt,
  FaPaperPlane,
} from "../Icons/FaFallback";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    rentalType: "",
    pickupDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      rentalType: "",
      pickupDate: "",
      message: "",
    });
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Send Us A Message
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Fill out the form below and our team will contact you as soon as
              possible regarding your booking, inquiry, or support request.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4 text-center">
                  <div className="text-lg font-extrabold text-gray-900">24/7</div>
                  <div className="mt-1 text-xs font-medium text-gray-600">
                    Customer Support
                  </div>
                </div>
                <div className="rounded-xl bg-white p-4 text-center">
                  <div className="text-lg font-extrabold text-gray-900">15 Min</div>
                  <div className="mt-1 text-xs font-medium text-gray-600">
                    Avg Response
                  </div>
                </div>
                <div className="rounded-xl bg-white p-4 text-center">
                  <div className="text-lg font-extrabold text-gray-900">10K+</div>
                  <div className="mt-1 text-xs font-medium text-gray-600">
                    Happy Customers
                  </div>
                </div>
                <div className="rounded-xl bg-white p-4 text-center">
                  <div className="text-lg font-extrabold text-gray-900">99%</div>
                  <div className="mt-1 text-xs font-medium text-gray-600">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                  <FaUser className="text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </label>

                <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                  <FaEnvelope className="text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </label>

                <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                  <FaPhoneAlt className="text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </label>

                <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                  <FaTag className="text-gray-500" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </label>

                <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                  <FaCar className="text-gray-500" />
                  <select
                    name="rentalType"
                    value={formData.rentalType}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-sm outline-none"
                  >
                    <option value="">Select Rental Type</option>
                    <option value="Self Drive">Self Drive</option>
                    <option value="With Driver">With Driver</option>
                    <option value="Corporate">Corporate Rental</option>
                    <option value="Long Term">Long Term Lease</option>
                  </select>
                </label>

                <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                  <FaCalendarAlt className="text-gray-500" />
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </label>

                <label className="sm:col-span-2">
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <div className="text-sm font-medium text-gray-700">Message</div>
                    <textarea
                      name="message"
                      placeholder="Write your message..."
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full resize-none border-none bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <FaPaperPlane />
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;