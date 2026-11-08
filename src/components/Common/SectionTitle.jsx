

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
    <Reveal
      className={`w-full ${alignClass} px-0`}
    >
      {subtitle && (
        <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
          {subtitle}
        </span>
      )}

      {title && (
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`mt-4 text-sm leading-7 text-slate-600 sm:text-base ${
            align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionTitle;
import Reveal from "./Reveal";
