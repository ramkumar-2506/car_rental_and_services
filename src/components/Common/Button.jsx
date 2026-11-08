



const variantClasses = {
  primary:
    "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-cyan-300 focus:ring-sky-300 active:scale-[0.98]",
  outline:
    "border border-slate-300/80 text-slate-900 bg-white/80 backdrop-blur hover:border-sky-300 hover:bg-sky-50 focus:ring-sky-200 active:scale-[0.98]",
  dark:
    "bg-slate-950 text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800 focus:ring-slate-500 active:scale-[0.98]",
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
      className={`btn-ripple inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:text-base ${v}`}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
