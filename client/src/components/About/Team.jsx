import TeamCard from "./TeamCard";


const teamMembers = [
  {
    id: 1,
    name: "John Anderson",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    description:
      "John leads our company with over 15 years of experience in the automotive and mobility industry, driving innovation and customer satisfaction.",
    experience: "15+ Years",
    specialization: "Business Strategy",
  },

  {
    id: 2,
    name: "Sophia Williams",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    description:
      "Sophia ensures our daily operations run smoothly while maintaining the highest standards of service quality across all locations.",
    experience: "10+ Years",
    specialization: "Operations",
  },

  {
    id: 3,
    name: "Michael Brown",
    role: "Fleet Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    description:
      "Michael oversees our premium fleet, ensuring every vehicle is maintained, inspected, and ready for a safe driving experience.",
    experience: "12+ Years",
    specialization: "Fleet Management",
  },

  {
    id: 4,
    name: "Emily Johnson",
    role: "Customer Relations Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    description:
      "Emily focuses on creating exceptional customer experiences by delivering personalized support and building long-term relationships.",
    experience: "8+ Years",
    specialization: "Customer Success",
  },

  {
    id: 5,
    name: "David Wilson",
    role: "Technical Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    description:
      "David manages our technical infrastructure, ensuring booking systems, fleet tracking, and digital services operate efficiently.",
    experience: "11+ Years",
    specialization: "Technology",
  },

  {
    id: 6,
    name: "Olivia Martinez",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    description:
      "Olivia develops marketing strategies that strengthen our brand presence and connect customers with our premium rental services.",
    experience: "9+ Years",
    specialization: "Digital Marketing",
  },
];

const Team = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
            Meet Our Team
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            The Professionals Behind Our Success
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our experienced leadership team is committed to delivering
            exceptional customer service, maintaining a premium fleet, and
            providing reliable mobility solutions for every journey.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* JOIN OUR TEAM */}
        <div className="mt-12 grid grid-cols-1 gap-8 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Passionate About Creating Great Travel Experiences?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              We are always looking for talented professionals who are
              passionate about customer service, innovation, and delivering
              premium mobility solutions. Join our growing team and build your
              career with us.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
            >
              Join Our Team
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              className="h-72 w-full object-cover sm:h-80"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Join Our Team"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
