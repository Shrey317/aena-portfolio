interface SectionHeaderProps {
  /** The plain-text prefix, e.g. "Featured" */
  label: string;
  /** The word wrapped in { }, e.g. "Projects" */
  accent: string;
  /** Optional subtext below the heading */
  description?: string;
  /** Align the header. Default: center */
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  accent,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const descClass = align === "left" ? "max-w-2xl" : "max-w-xl mx-auto";

  return (
    <div className={`${alignClass} mb-16`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] tracking-tight leading-tight">
        {label}{" "}
        <span className="text-violet-400 font-mono">
          &#123; {accent} &#125;
        </span>
      </h2>
      {description && (
        <p className={`mt-4 text-sm sm:text-base text-[#888] leading-relaxed ${descClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}
