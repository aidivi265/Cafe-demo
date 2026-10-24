import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/button";
import { CtaPanel } from "@/components/cta-panel";
import { VisualFrame } from "@/components/visual-frame";
import { businessName, mapUrl, phoneHref } from "@/lib/site-data";

export const metadata = {
  title: "PlayStation Gaming",
  description: "PlayStation gaming at Richie Rich Gaming & Cafe in Budh Vihar, Delhi."
};

export default function GamingPage() {
  return (
    <>
      <PageIntro eyebrow="01 / PlayStation gaming" title="Make time for the game." description={`Bring your people to ${businessName} for a PlayStation gaming session in Budh Vihar.`} tone="blue" />
      <section className="bg-canvas px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <VisualFrame type="gaming" label="Abstract PlayStation gaming lounge visual placeholder" />
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-blue">PlayStation gaming</p><h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">A simple place to play.</h2><p className="mt-6 text-base leading-8 text-muted">Choose a PlayStation game, settle in, and spend time playing with friends. For current availability and visit details, please call ahead.</p><div className="mt-8 flex flex-wrap gap-3"><Button href={phoneHref}>Call about gaming →</Button><Button href={mapUrl} variant="secondary" external>Get directions</Button></div></div>
        </div>
      </section>
      <CtaPanel title="Bring your people." description="Check current availability before heading over for your next session." />
    </>
  );
}
