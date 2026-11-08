import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaAward,
  FaBriefcase,
  FaArrowRight,
  FaTimes,
} from "../Icons/FaFallback";

const TeamCard = ({ member }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
        {/* IMAGE */}
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className="h-72 w-full object-cover sm:h-80"
          />

          {/* Social links overlay on hover */}
          <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
            <a
              href={`https://linkedin.com/in/${member.name.toLowerCase().replace(" ", "-")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-sky- hover:text-white"
              aria-label={`${member.name} LinkedIn`}
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`https://twitter.com/${member.name.toLowerCase().replace(" ", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-sky-500 hover:text-white"
              aria-label={`${member.name} Twitter`}
            >
              <FaTwitter />
            </a>
            <a
              href={`https://instagram.com/${member.name.toLowerCase().replace(" ", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-pink-500 hover:text-white"
              aria-label={`${member.name} Instagram`}
            >
              <FaInstagram />
            </a>
            <a
              href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@carrental.com`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-gray-900 hover:text-white"
              aria-label={`Email ${member.name}`}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="text-base font-semibold text-gray-900">
            {member.name}
          </h3>
          <span className="mt-1 block text-sm font-medium text-gray-600">
            {member.role}
          </span>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {member.description}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
              <FaBriefcase className="text-gray-700" />
              <span className="text-xs font-semibold text-gray-800">
                {member.experience}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
              <FaAward className="text-gray-700" />
              <span className="text-xs font-semibold text-gray-800">
                {member.specialization}
              </span>
            </div>
          </div>

          <button
            id={`team-view-profile-${member.id}`}
            type="button"
            onClick={() => setShowModal(true)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 hover:scale-[1.02] active:scale-95"
          >
            View Profile
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* PROFILE MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              id={`team-close-modal-${member.id}`}
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-gray-100"
              aria-label="Close profile"
            >
              <FaTimes />
            </button>

            {/* Hero image */}
            <img
              src={member.image}
              alt={member.name}
              className="h-60 w-full object-cover object-top"
            />

            {/* Modal content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
              <p className="text-sm font-semibold text-sky-">{member.role}</p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {member.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 px-4 py-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{member.experience}</p>
                  <p className="text-xs font-medium text-gray-500">Experience</p>
                </div>
                <div className="rounded-xl bg-gray-50 px-4 py-3 text-center">
                  <p className="text-base font-bold text-gray-900">{member.specialization}</p>
                  <p className="text-xs font-medium text-gray-500">Specialization</p>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={`https://linkedin.com/in/${member.name.toLowerCase().replace(" ", "-")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-sky- hover:text-white hover:border-sky-"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={`https://twitter.com/${member.name.toLowerCase().replace(" ", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-sky-500 hover:text-white hover:border-sky-500"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@carrental.com`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-900 hover:text-white hover:border-gray-900"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
                <button
                  id={`team-modal-contact-${member.id}`}
                  type="button"
                  onClick={() => { setShowModal(false); navigate("/contact"); }}
                  className="ml-auto inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Contact Us
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamCard;
