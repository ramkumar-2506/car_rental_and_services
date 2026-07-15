import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaAward,
  FaBriefcase,
  FaArrowRight,
} from "../Icons/FaFallback";



const TeamCard = ({ member }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* IMAGE */}
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="h-72 w-full object-cover sm:h-80"
        />

        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-white"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-white"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-sm transition hover:bg-white"
            aria-label="Email"
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
          type="button"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          View Profile
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
