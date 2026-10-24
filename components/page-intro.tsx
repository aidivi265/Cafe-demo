type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "blue" | "violet" | "amber";
};

export function PageIntro({ eyebrow, title, description, tone = "blue" }: PageIntroProps) {
  const accent = tone === "amber" ? "text-amber" : tone === "violet" ? "text-violet" : "text-blue";
  return (
    <section className={`relative overflow-hidden border-b border-line px-5 py-16 text-ink lg:px-8 lg:py-24 ${tone === "amber" ? "ambient-amber" : tone === "violet" ? "ambient-violet" : "ambient-blue"}`}>
      <div className="mx-auto max-w-7xl">
        <p className={`mb-5 text-xs font-bold uppercase tracking-[0.25em] ${accent}`}>{eyebrow}</p>
        <h1 className="display-balance max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">{title}</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-muted">{description}</p>
      </div>
    </section>
  );
}
