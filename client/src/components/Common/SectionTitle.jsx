

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
}) => {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  return (
    <div
      className={`w-full ${alignClass} px-0`}
    >
      {subtitle && (
        <span className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-800">
          {subtitle}
        </span>
      )}

      {title && (
        <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;