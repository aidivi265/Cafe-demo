import { Button } from "@/components/button";
import { CtaPanel } from "@/components/cta-panel";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";
import { VisualFrame } from "@/components/visual-frame";
import { address, businessName, experiences, hoursNote, mapUrl, phone, phoneHref } from "@/lib/site-data";

export const metadata = {
  title: "PlayStation Gaming, 8-Ball Pool & Rooftop Cafe",
  description: "Discover PlayStation gaming, 8-ball pool, and a rooftop cafe at Richie Rich Gaming & Cafe in Budh Vihar, Delhi."
};

export default function HomePage() {
  return (
    <>
      <section className="grain ambient-amber border-b border-line px-5 py-16 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted">
              <span className="h-2 w-2 rounded-full bg-amber" />
              Budh Vihar, Delhi
              <span className="hidden h-px w-8 bg-line sm:block" />
              Gaming lounge · pool · cafe
            </div>
            <h1 className="display-balance max-w-4xl font-display text-6xl font-bold leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-[7.8rem]">Play a little.<br /><span className="text-amber">Stay awhile.</span></h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-muted">{businessName} brings PlayStation gaming, 8-ball pool, and a rooftop cafe together in a relaxed local hangout.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={mapUrl} external>Get Directions</Button>
              <Button href={phoneHref} variant="secondary">Call Now</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted">
              <span>PlayStation</span>
              <span>8-ball pool</span>
              <span className="text-amber">Rooftop cafe</span>
            </div>
          </div>
          <div>
            <div className="relative">
              <VisualFrame type="cafe" label="Temporary rooftop cafe demo image" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-coal/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Demo ambience image
              </div>
            </div>
            <div className="mt-4 rounded-card border border-line bg-surface/90 p-6 backdrop-blur">
              <div className="flex items-start justify-between gap-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber">Good to know</p>
                <span className="text-xs text-muted">01 / 04</span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold leading-tight">Listed closing time <span className="text-amber">11:30 PM</span></p>
              <p className="mt-3 text-sm leading-6 text-muted">{hoursNote}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-canvas px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-5">
            <SectionHeading eyebrow="Make it your scene" title="One place, three ways to unwind." description="Choose your pace, settle in, and make the visit your own." />
            <span className="hidden text-sm text-muted sm:block">01 — 03</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {experiences.map((experience) => (
              <FeatureCard key={experience.href} {...experience} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-coal px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Why visit"
            title="Come for the game. Stay for the atmosphere."
            description="Richie Rich brings PlayStation gaming, 8-ball pool, and a rooftop cafe together, so your visit can move at its own pace."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["01", "Play", "Spend time with PlayStation gaming."],
              ["02", "Compete", "Set up a game of 8-ball pool."],
              ["03", "Unwind", "Take a break at the rooftop cafe."]
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-card border border-line bg-surface p-5">
                <span className="text-xs font-bold text-blue">{number}</span>
                <h3 className="mt-8 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ambient-violet border-t border-line px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_0.8fr]">
          <div className="rounded-panel border border-line bg-surface p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue">Find Richie Rich</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{address}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={mapUrl} external>Get directions</Button>
              <Button href={phoneHref} variant="secondary">Call Now</Button>
            </div>
          </div>
          <div className="rounded-panel border border-line bg-surface-raised p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">Contact</p>
            <a href={phoneHref} className="mt-5 block font-display text-3xl font-bold text-ink underline decoration-1 underline-offset-8 hover:text-amber">{phone}</a>
            <p className="mt-7 text-sm leading-6 text-muted">Call ahead to confirm current availability and opening hours before visiting.</p>
          </div>
        </div>
      </section>
      <CtaPanel title="Ready when you are." description="Call ahead for current availability, then make your way to Richie Rich in Budh Vihar." />
    </>
  );
}
