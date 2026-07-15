



const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  outline:
    "border border-gray-300 text-gray-900 bg-transparent hover:bg-gray-100 focus:ring-gray-400",
  dark:
    "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",
};

const Button = ({
  text,
  type = "button",
  variant = "primary",
  onClick,
  icon,
  disabled = false,
}) => {
  const v = variantClasses[variant] || variantClasses.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-2.5 sm:text-base ${v}`}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
