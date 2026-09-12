type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-4xl font-black md:text-5xl text-[var(--text)]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}