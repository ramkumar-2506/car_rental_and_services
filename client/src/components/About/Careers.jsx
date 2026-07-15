import {
  FaBriefcase,
  FaUsers,
  FaGraduationCap,
  FaLaptopCode,
  FaHeartbeat,
  FaMoneyCheckAlt,
  FaArrowRight,
} from "../Icons/FaFallback";




const careerBenefits = [
  {
    id: 1,
    icon: <FaBriefcase />,
    title: "Career Growth",
    description:
      "Grow your career with continuous learning, promotions, and leadership opportunities in a fast-growing company.",
  },

  {
    id: 2,
    icon: <FaUsers />,
    title: "Collaborative Culture",
    description:
      "Work with passionate professionals who value teamwork, innovation, and customer satisfaction.",
  },

  {
    id: 3,
    icon: <FaGraduationCap />,
    title: "Learning & Development",
    description:
      "Enhance your skills through workshops, certifications, technical training, and mentorship programs.",
  },

  {
    id: 4,
    icon: <FaLaptopCode />,
    title: "Modern Workplace",
    description:
      "Experience a technology-driven environment equipped with modern tools that encourage productivity and creativity.",
  },

  {
    id: 5,
    icon: <FaHeartbeat />,
    title: "Health & Wellness",
    description:
      "We care about employee well-being by promoting a healthy work-life balance and wellness initiatives.",
  },

  {
    id: 6,
    icon: <FaMoneyCheckAlt />,
    title: "Competitive Benefits",
    description:
      "Receive attractive salaries, performance incentives, paid leave, and employee recognition programs.",
  },
];

const Careers = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-100">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mb-10">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 tracking-wider uppercase">
            Careers
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Build Your Future With Our Team
          </h2>
          <p className="mt-4 text-sm text-gray-600 sm:text-base leading-relaxed">
            We're always looking for passionate, talented, and motivated individuals who
            want to help shape the future of mobility. Join us and become part of a team that
            values innovation, collaboration, and customer excellence.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerBenefits.map((benefit) => (
            <div
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              key={benefit.id}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition">
                Learn More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        {/* JOIN OUR TEAM */}
        <div className="mt-16 grid grid-cols-1 gap-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-10 lg:grid-cols-2 lg:items-center shadow-sm">
          <div className="flex flex-col">
            <span className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 tracking-wider uppercase">
              Join Our Journey
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Ready To Build An Exciting Career?
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base leading-relaxed">
              Whether you're an experienced professional or just starting your career, we provide an
              environment where your ideas are valued, your skills are developed, and your work
              makes a real impact. Join us and help create exceptional travel experiences for thousands
              of customers every day.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                ✓ Flexible Work Environment
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                ✓ Professional Training Programs
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                ✓ Performance-Based Rewards
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                ✓ Inclusive & Friendly Workplace
              </div>
            </div>

            <button className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 shadow-sm">
              Apply Now
              <FaArrowRight />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Join Our Team"
              className="h-72 w-full object-cover sm:h-80 md:h-[26rem] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Careers;