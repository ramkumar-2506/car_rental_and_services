import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiBriefcase,
  HiUserGroup,
  HiAcademicCap,
  HiComputerDesktop,
  HiHeart,
  HiBanknotes,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi2";
import Reveal, { staggerContainer, staggerItem } from "../Common/Reveal";

const careerBenefits = [
  {
    id: 1,
    icon: HiBriefcase,
    title: "Career Growth",
    description:
      "Grow your career with continuous learning, promotions, and leadership opportunities in a fast-growing company.",
  },
  {
    id: 2,
    icon: HiUserGroup,
    title: "Collaborative Culture",
    description:
      "Work with passionate professionals who value teamwork, innovation, and customer satisfaction.",
  },
  {
    id: 3,
    icon: HiAcademicCap,
    title: "Learning & Development",
    description:
      "Enhance your skills through workshops, certifications, technical training, and mentorship programs.",
  },
  {
    id: 4,
    icon: HiComputerDesktop,
    title: "Modern Workplace",
    description:
      "Experience a technology-driven environment equipped with modern tools that encourage productivity and creativity.",
  },
  {
    id: 5,
    icon: HiHeart,
    title: "Health & Wellness",
    description:
      "We care about employee well-being by promoting a healthy work-life balance and wellness initiatives.",
  },
  {
    id: 6,
    icon: HiBanknotes,
    title: "Competitive Benefits",
    description:
      "Receive attractive salaries, performance incentives, paid leave, and employee recognition programs.",
  },
];

const Careers = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Careers
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Build Your Future With Our Team
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We're always looking for passionate, talented, and motivated individuals who
            want to help shape the future of mobility. Join us and become part of a team that
            values innovation, collaboration, and customer excellence.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {careerBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={benefit.id} variants={staggerItem} className="premium-card group p-6">
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 grid gap-10 rounded-[2rem] bg-slate-950 p-5 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] sm:p-8 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right" className="p-1 sm:p-3">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
              Join Our Journey
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Ready To Build An Exciting Career?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Whether you're an experienced professional or just starting your career, we provide an
              environment where your ideas are valued, your skills are developed, and your work
              makes a real impact.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Flexible Work Environment",
                "Professional Training Programs",
                "Performance-Based Rewards",
                "Inclusive & Friendly Workplace",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-slate-100 backdrop-blur-xl">
                  <HiCheck className="h-5 w-5 shrink-0 text-sky-400" />
                  {item}
                </div>
              ))}
            </div>
            <button
              id="careers-apply-now"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20 hover:gap-3"
              onClick={() => navigate("/contact")}
            >
              Apply Now
              <HiArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
          <Reveal direction="left" className="overflow-hidden rounded-[1.5rem]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Join Our Team"
              loading="lazy"
              className="h-80 w-full object-cover transition duration-700 hover:scale-105 sm:h-[28rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Careers;