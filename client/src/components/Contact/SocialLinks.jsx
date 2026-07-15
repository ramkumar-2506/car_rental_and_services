import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaArrowRight,
  FaWhatsapp,
} from "../Icons/FaFallback";



const socialPlatforms = [
  {
    id: 1,
    icon: <FaFacebookF />,
    name: "Facebook",
    username: "@CarRentalOfficial",
    description:
      "Stay updated with our latest offers, travel tips, customer stories, and exciting giveaways.",
    button: "Follow Us",
  },

  {
    id: 2,
    icon: <FaInstagram />,
    name: "Instagram",
    username: "@CarRentalOfficial",
    description:
      "Explore our premium fleet, travel destinations, behind-the-scenes moments, and customer experiences.",
    button: "Follow Us",
  },

  {
    id: 3,
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    username: "Car Rental Services",
    description:
      "Connect with us for corporate partnerships, company news, career opportunities, and business updates.",
    button: "Connect",
  },

  {
    id: 4,
    icon: <FaXTwitter />,
    name: "X (Twitter)",
    username: "@CarRental",
    description:
      "Receive instant announcements, customer support updates, and real-time travel information.",
    button: "Follow",
  },

  {
    id: 5,
    icon: <FaYoutube />,
    name: "YouTube",
    username: "Car Rental Official",
    description:
      "Watch vehicle walkthroughs, travel guides, customer testimonials, and service tutorials.",
    button: "Subscribe",
  },

  {
    id: 6,
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    username: "+91 98765 43210",
    description:
      "Chat directly with our customer support team for bookings, inquiries, and instant assistance.",
    button: "Chat Now",
  },
];

const SocialLinks = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-800">
            Follow Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Connect With Us On Social Media
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            Stay connected with us across all major social media platforms for
            travel inspiration, exclusive offers, customer support, and the
            latest updates from our car rental services.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialPlatforms.map((social) => (
            <div
              key={social.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                {social.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">
                {social.name}
              </h3>
              <h4 className="mt-1 text-sm font-semibold text-gray-700">
                {social.username}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {social.description}
              </p>

              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                {social.button} <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gray-900 p-6 text-white sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20">
                Join Our Community
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Be Part Of Our Growing Travel Community
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">
                Follow us for exclusive discounts, travel inspiration, exciting
                giveaways, customer stories, new vehicle launches, and the
                latest updates from our car rental services.
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Follow All Channels <FaArrowRight />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { h: "50K+", t: "Followers" },
                { h: "15K+", t: "Happy Customers" },
                { h: "10+", t: "Social Platforms" },
                { h: "24/7", t: "Online Support" },
              ].map((x) => (
                <div key={x.h} className="rounded-2xl bg-white/5 p-4">
                  <h3 className="text-2xl font-extrabold">{x.h}</h3>
                  <span className="mt-1 block text-xs font-medium text-gray-200">
                    {x.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;