const defaultMap = {
  FaCalendarAlt: "📅",
  FaClock: "⏰",
  FaCar: "🚗",
  FaMapMarkerAlt: "📍",
  FaCalculator: "🧮",
  FaTools: "🛠️",
  FaBatteryHalf: "🔋",
  FaGasPump: "⛽",
  FaTruck: "🚚",
  FaPhoneAlt: "📞",
  FaCheckCircle: "✅",
  FaArrowRight: "➡️",
  FaUserTie: "🧑‍💼",
  FaStar: "⭐",
  FaShieldAlt: "🛡️",

  // Social / footer icons used by Footer.jsx
  FaFacebookF: "f",
  FaInstagram: "⌁",
  FaYoutube: "▶",
  FaXTwitter: "𝕏",
  FaLocationDot: "📍",
  FaPaperPlane: "✈",
};

const createIcon = (symbol) => () => (
  <span aria-hidden="true" style={{ marginRight: 6 }}>
    {symbol}
  </span>
);

export const FaCalendarAlt = createIcon(defaultMap.FaCalendarAlt);
export const FaClock = createIcon(defaultMap.FaClock);
export const FaDirections = createIcon(defaultMap.FaDirections || "🧭");

export const FaCar = createIcon(defaultMap.FaCar);
export const FaMapMarkerAlt = createIcon(defaultMap.FaMapMarkerAlt);
export const FaCalculator = createIcon(defaultMap.FaCalculator);

export const FaUser = createIcon(defaultMap.FaUser || "👤");
export const FaEnvelope = createIcon(defaultMap.FaEnvelope || "✉️");
export const FaIdCard = createIcon(defaultMap.FaIdCard || "🪪");


export const FaTools = createIcon(defaultMap.FaTools);
export const FaBatteryHalf = createIcon(defaultMap.FaBatteryHalf);
export const FaGasPump = createIcon(defaultMap.FaGasPump);
export const FaTruck = createIcon(defaultMap.FaTruck);
export const FaPhoneAlt = createIcon(defaultMap.FaPhoneAlt);
export const FaCheckCircle = createIcon(defaultMap.FaCheckCircle);
export const FaArrowRight = createIcon(defaultMap.FaArrowRight);

export const FaUserTie = createIcon(defaultMap.FaUserTie);
export const FaStar = createIcon(defaultMap.FaStar);
export const FaShieldAlt = createIcon(defaultMap.FaShieldAlt);
export const FaBars = createIcon("☰");
export const FaTimes = createIcon("✕");


// additional icons referenced in About components
export const FaBuilding = createIcon(defaultMap.FaBuilding || "🏢");
export const FaBullseye = createIcon(defaultMap.FaBullseye || "🎯");
export const FaEye = createIcon(defaultMap.FaEye || "👁️");
export const FaUsers = createIcon(defaultMap.FaUsers || "👥");
export const FaCarSide = createIcon(defaultMap.FaCarSide || "🚙");
export const FaCogs = createIcon(defaultMap.FaCogs || "⚙️");
export const FaHeart = createIcon(defaultMap.FaHeart || "❤️");

export const FaFacebookF = createIcon(defaultMap.FaFacebookF || "f");
export const FaLinkedinIn = createIcon(defaultMap.FaLinkedinIn || "in");
export const FaYoutube = createIcon(defaultMap.FaYoutube || "▶");
export const FaXTwitter = createIcon(defaultMap.FaXTwitter || "𝕏");
export const FaLocationDot = createIcon(defaultMap.FaLocationDot || "📍");
export const FaPaperPlane = createIcon(defaultMap.FaPaperPlane || "✈");
export const FaTag = createIcon(defaultMap.FaTag || "🏷️");
export const FaTwitter = createIcon(defaultMap.FaTwitter || "𝕏");
export const FaInstagram = createIcon(defaultMap.FaInstagram || "📸");
export const FaAward = createIcon(defaultMap.FaAward || "🏅");
export const FaBriefcase = createIcon(defaultMap.FaBriefcase || "💼");
export const FaHeadset = createIcon(defaultMap.FaHeadset || "🎧");
export const FaComments = createIcon(defaultMap.FaComments || "💬");
export const FaMoneyBillWave = createIcon(defaultMap.FaMoneyBillWave || "💸");
export const FaCreditCard = createIcon(defaultMap.FaCreditCard || "💳");
export const FaHandshake = createIcon(defaultMap.FaHandshake || "🤝");
export const FaGraduationCap = createIcon(defaultMap.FaGraduationCap || "🎓");
export const FaLaptopCode = createIcon(defaultMap.FaLaptopCode || "💻");
export const FaHeartbeat = createIcon(defaultMap.FaHeartbeat || "❤️");
export const FaMoneyCheckAlt = createIcon(defaultMap.FaMoneyCheckAlt || "🧾");

export const FaWhatsapp = createIcon(defaultMap.FaWhatsapp || "🟢");




