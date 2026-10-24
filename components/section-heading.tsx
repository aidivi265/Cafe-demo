type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue">{eyebrow}</p>
      <h2 className="display-balance mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-muted">{description}</p>}
    </div>
  );
}
