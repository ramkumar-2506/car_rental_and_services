import {
  FaUserTie,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "../Icons/FaFallback";





const chauffeurs = [
  {
    id: 1,
    name: "Arun Kumar",
    experience: "8+ Years Experience",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?auto=format&fit=crop&w=900&q=80",
    languages: "English • Tamil • Hindi",
    availability: "Available 24/7",

    skills: [
      "Professional Driving",
      "Luxury Vehicle Expert",
      "Airport Transfers",
      "City Tours",
    ],
  },

  {
    id: 2,
    name: "Vignesh Raj",
    experience: "10+ Years Experience",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    languages: "English • Tamil",
    availability: "Available Today",

    skills: [
      "Corporate Travel",
      "Business Meetings",
      "Long Distance Trips",
      "Premium Service",
    ],
  },

  {
    id: 3,
    name: "Rahul Sharma",
    experience: "12+ Years Experience",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    languages: "English • Hindi",

    availability: "Available 24/7",

    skills: [
      "VIP Chauffeur",
      "Luxury Fleet",
      "Wedding Events",
      "Executive Travel",
    ],
  },
];

const Chauffeur = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800">
            Professional Chauffeurs
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Sit Back & Enjoy Your Journey
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Hire experienced, licensed, and verified chauffeurs for business
            trips, family travel, airport transfers, weddings, and special
            occasions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chauffeurs.map((driver) => (
            <div
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              key={driver.id}
            >
              <div className="relative">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="h-52 w-full object-cover"
                />

                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <FaStar className="h-4 w-4 text-yellow-400" />
                  {driver.rating}
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {driver.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaUserTie className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      {driver.experience}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaClock className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      {driver.availability}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                    <FaShieldAlt className="text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      {driver.languages}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Skills
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    {driver.skills.map((skill, index) => (
                      <div
                        className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                        key={index}
                      >
                        <FaCheckCircle className="text-green-600" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    Hire Chauffeur <FaArrowRight className="inline h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaShieldAlt className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Verified & Licensed
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Every chauffeur is background verified, professionally trained, and
              holds a valid commercial driving license.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaClock className="h-6 w-6 text-gray-700" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">Always On Time</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Our drivers value punctuality, ensuring timely pickups and smooth
              travel for business meetings, airport transfers, and special
              occasions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <FaStar className="h-6 w-6 text-yellow-500" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">
              Premium Customer Service
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Enjoy courteous, experienced chauffeurs who prioritize your
              comfort, safety, and overall travel experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chauffeur;