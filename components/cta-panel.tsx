import { Button } from "@/components/button";
import { hoursNote, mapUrl, phoneHref } from "@/lib/site-data";

type CtaPanelProps = {
  title: string;
  description: string;
  variant?: "blue" | "amber";
};

export function CtaPanel({ title, description, variant = "blue" }: CtaPanelProps) {
  return (
    <section className={`px-5 py-16 lg:px-8 lg:py-24 ${variant === "amber" ? "ambient-amber" : "ambient-blue"}`}>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-panel border border-line bg-surface/80 p-8 backdrop-blur sm:p-12 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className={`text-xs font-bold uppercase tracking-[0.22em] ${variant === "amber" ? "text-amber" : "text-blue"}`}>Plan your visit</p>
          <h2 className="display-balance mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl leading-7 text-muted">{description}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{hoursNote}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={phoneHref} variant={variant === "amber" ? "cafe" : "primary"}>Call Richie Rich</Button>
          <Button href={mapUrl} variant="secondary" external>Get directions</Button>
        </div>
      </div>
    </section>
  );
}
