import Link from "next/link";

type FeatureCardProps = { number: string; title: string; description: string; href: string; tone?: "yellow" | "orange" | "green" };

const tones = {
  yellow: "border-blue/40 bg-blue/10 hover:border-blue hover:bg-blue/15",
  orange: "border-violet/40 bg-violet/10 hover:border-violet hover:bg-violet/15",
  green: "border-amber/40 bg-amber/10 hover:border-amber hover:bg-amber/15"
};

export function FeatureCard({ number, title, description, href, tone = "yellow" }: FeatureCardProps) {
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-card border p-6 text-ink transition duration-200 hover:-translate-y-1 hover:shadow-soft ${tones[tone]}`}>
      <span className="absolute right-5 top-5 font-display text-sm font-bold text-muted">{number}</span>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-sm font-bold text-current/70 transition group-hover:bg-ink group-hover:text-coal">
        {number}
      </div>
      <h3 className="mt-16 font-display text-3xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{description}</p>
      <span className="mt-8 inline-block text-sm font-bold text-ink underline decoration-2 underline-offset-4">Explore →</span>
    </Link>
  );
}
